"""Check student profile evidence, lender roles and removal of unsupported offers."""
from pathlib import Path
from html.parser import HTMLParser
import json
import xml.etree.ElementTree as ET

class Page(HTMLParser):
 def __init__(self,path):
  super().__init__();self.text=[];self.links=[];self.ids=[];self.schemas=[];self.script=None;self.feed(path.read_text())
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if a.get('id'):self.ids.append(a['id'])
  if tag=='a':self.links.append(a.get('href',''))
  if tag=='script':self.script=[] if a.get('type')=='application/ld+json' else False
 def handle_data(self,t):
  if isinstance(self.script,list):self.script.append(t)
  elif self.script is None:self.text.append(t)
 def handle_endtag(self,tag):
  if tag=='script':
   if isinstance(self.script,list):self.schemas.append(json.loads(''.join(self.script)))
   self.script=None

root=Path('apps/web/.next/server/app');pages={};hub=Page(root/'loans/student.html')
sitemap=ET.fromstring((root/'sitemap.xml.body').read_text());ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
for path in Path('apps/web/data/loans/student-loans').glob('*.json'):
 d=json.loads(path.read_text())
 if d.get('availability')=='unavailable':continue
 profile=d['checked_profile'];route=f"/loans/student/{d['slug']}";p=Page(root/f'{route[1:]}.html');t=' '.join(p.text);pages[d['slug']]=t
 assert not any(k in d for k in ['rating','apr_range','apr_type','credit_score_required','cosigner_release_after_months','perks','drawbacks','late_fee','loan_amount_max'])
 assert profile['scope'] in t and profile['role'] in t
 for f in profile['facts']:
  assert f['text'] in t
  assert f"source-{f['source']}" in p.ids and f"#source-{f['source']}" in p.links
 for s in profile['sources']:
  assert s['url'] in p.links and s['url'].startswith('https://')
  if s.get('document_date'):assert s['document_date'] in t
 assert route in hub.links
 assert any(s.get('@type')=='Article' and s.get('dateModified')==d['source_checked'] for s in p.schemas)
 assert not any(s.get('@type') in ['FinancialProduct','Product','LoanOrCredit','Review','AggregateRating','FAQPage'] for s in p.schemas)
 assert not any(x in t for x in ['Fintiex rating',' / 5','Minimum FICO','180 rate options'])
 assert ('Before refinancing federal loans' in t)==(d['type']=='refinance')
 nodes=[n for n in sitemap.findall('s:url',ns) if n.find('s:loc',ns).text==f'https://www.fintiex.com{route}']
 assert len(nodes)==1 and nodes[0].find('s:lastmod',ns).text.startswith(d['source_checked'])
assert len(pages)==9
assert '$20,000' in pages['ascent-non-cosigned'] and '3.0 or higher' in pages['ascent-non-cosigned']
assert 'half the original repayment term' in pages['college-ave-undergraduate']
assert 'cosigned loans only' in pages['earnest-private'] and '36 months' not in pages['earnest-private']
assert '$28' in pages['laurel-road-refinance'] and '$20' in pages['laurel-road-refinance']
assert 'do not count' in pages['sallie-mae-smart-option']
assert all('Student refinance marketplace' in pages[s] for s in ['credible-marketplace','splash-financial-refinance'])
t=' '.join(hub.text)
assert all(x not in t for x in ['Reviewed weekly','SAVE','PAYE','Minimum FICO','Fintiex score','Top pick'])
assert '/calculators/student-loan-payoff' in hub.links and '/loans/student/discover-student-loans' in hub.links
print('PASS: nine student profiles; scoped source links, Article dates and sitemap; eligibility, cosigner, fees and marketplace regressions; unsupported scores and offers removed.')
