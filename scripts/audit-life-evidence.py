"""Ensure checked life profiles use scoped sources and cannot restore legacy claims."""
from pathlib import Path
from html.parser import HTMLParser
import json
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
root=Path('apps/web/.next/server/app');count=0
for path in Path('apps/web/data/insurance/life-insurance').glob('*.json'):
 d=json.loads(path.read_text())
 if d.get('availability')=='unavailable':continue
 count+=1;profile=d['checked_profile'];p=Page(root/f"insurance/life/{d['slug']}.html");text=' '.join(p.text)
 assert d['source_checked']=='2026-09-14'
 assert not any(k in d for k in ['rating','am_best_rating','coverage_amount_min','coverage_amount_max','age_range','no_medical_exam_available','underwriting_speed','riders_available'])
 assert profile['scope'] in text and profile['role'] in text
 for f in profile['facts']:
  assert f['text'] in text
  assert f"source-{f['source']}" in p.ids
  assert f"#source-{f['source']}" in p.links
 for s in profile['sources']:
  assert s['url'] in p.links
  if s.get('document_date'):assert s['document_date'] in text
 assert any(s.get('@type')=='Article' and s.get('dateModified')==d['source_checked'] for s in p.schemas)
 assert not any(s.get('@type') in ['Product','FinancialProduct','Review','AggregateRating'] for s in p.schemas)
 assert 'awaiting verification' not in text
 assert not any(v in text for v in ['FlexTerm','Cannot increase coverage','Fintiex rating','A++',' / 5'])
assert count==6
pol=Page(root/'insurance/life/policygenius.html');assert 'Independent insurance broker' in ' '.join(pol.text)
pru=Page(root/'insurance/life/prudential-life.html');assert 'does not confirm current sales availability' in ' '.join(pru.text)
state=Page(root/'insurance/life/state-farm-life.html');assert 'No physical or medical tests' in ' '.join(state.text)
print('PASS: six scoped life profiles; all fact/source anchors, dates and Article metadata; legacy ratings and unsupported global limits removed; broker and underwriting regressions pass.')
