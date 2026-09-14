"""Check saved observations and built public downloads against the rendered tracker."""
from pathlib import Path
from html.parser import HTMLParser
from collections import Counter
from datetime import date
from urllib.parse import urlparse
import csv, io, json, xml.etree.ElementTree as ET

records=json.loads(Path('apps/web/data/savings/observations.json').read_text())
seen=set()
for row in records:
    key=(row['key'],row['checked'])
    assert key not in seen, f'Duplicate observation: {key}'
    seen.add(key)
    date.fromisoformat(row['checked'])
    assert row['source'].startswith('https://') and row['review'].startswith('/')
    assert row['condition'] and row['note']
    assert row['status'] in ['confirmed','unconfirmed','closed']
    if row['status']=='confirmed': assert isinstance(row['apy'],(int,float)) and 0 <= row['apy'] <= 100
    else: assert row['apy'] is None, f'Unknown/closed APY must be null: {key}'
    assert (row['status']=='closed') == bool(row.get('closed'))
    assert row['minimum'] is None or row['minimum'] >= 0
    if row.get('source_date'): assert row['source_date'] <= row['checked']

latest=max(row['checked'] for row in records)
current=[row for row in records if row['checked']==latest]
assert len(current)==len({row['key'] for row in records}), 'Latest batch must check every tracked account, including unsuccessful checks'
root=Path('apps/web/.next/server/app')
csv_data=list(csv.DictReader(io.StringIO((root/'savings/rate-tracker/data.csv.body').read_text())))
json_data=json.loads((root/'savings/rate-tracker/data.json.body').read_text())
assert json_data==records
assert len(csv_data)==len(records)
for row, exported in zip(records,csv_data):
    for field,value in exported.items():
        expected=row.get(field)
        assert value==('' if expected is None else str(expected)), (row['key'],field)
for suffix in ['csv','json']:
    meta=json.loads((root/f'savings/rate-tracker/data.{suffix}.meta').read_text())
    headers={key.lower():value for key,value in meta['headers'].items()}
    assert headers['x-robots-tag']=='noindex'
    assert 'attachment' in headers['content-disposition']

class Page(HTMLParser):
    def __init__(self,html):
        super().__init__();self.schemas=[];self.script=None;self.text=[];self.links=[];self.feed(html)
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='script':self.script=[] if attrs.get('type')=='application/ld+json' else False
        if tag=='a':self.links.append(attrs.get('href'))
    def handle_data(self,text):
        if isinstance(self.script,list):self.script.append(text)
        elif self.script is None:self.text.append(text)
    def handle_endtag(self,tag):
        if tag=='script':
            if isinstance(self.script,list):self.schemas.append(json.loads(''.join(self.script)))
            self.script=None

page=Page((root/'savings/rate-tracker.html').read_text());visible=' '.join(page.text)
for row in current:assert row['name'] in visible and row['condition'] in visible
schema=next(s for s in page.schemas if s.get('@type')=='Dataset')
assert schema['dateModified']==latest
assert len(schema['distribution'])==2
for download in schema['distribution']:
    assert urlparse(download['contentUrl']).path in page.links
sitemap=ET.parse(root/'sitemap.xml.body')
entry=next(e for e in sitemap.getroot() if e.find('{*}loc').text.endswith('/savings/rate-tracker'))
assert entry.find('{*}lastmod').text.startswith(latest)
assert not any(e.find('{*}loc').text.endswith(('data.csv','data.json')) for e in sitemap.getroot())
loan=Page((root/'loans/personal/discover-personal-loan.html').read_text());loan_text=' '.join(loan.text)
assert '$39' not in loan_text and '4.5 / 5' not in loan_text and '660' not in loan_text
assert 'Capital One' in loan_text and 'July 8, 2026' in loan_text and '2026-09-14' in loan_text
for f in (root/'loans/personal').glob('*.html'):
    text=' '.join(Page(f.read_text()).text)
    assert 'out of 5 in our 2026 review' not in text and 'CFPB allows a 14-' not in text, f
print(f'PASS: {len(records)} observations, null/status integrity, CSV/JSON parity, source-linked rendered content, Dataset and sitemap metadata, and personal-loan claim regressions.')
