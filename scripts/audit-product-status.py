"""Check discontinued offers stay out of promotions and structured product data."""
from pathlib import Path
from html.parser import HTMLParser
import json
import xml.etree.ElementTree as ET
class Page(HTMLParser):
 def __init__(self,path):
  super().__init__();self.text=[];self.links=[];self.schemas=[];self.script=None;self.feed(path.read_text())
 def handle_starttag(self,tag,attrs):
  a=dict(attrs)
  if tag=='a':self.links.append(a.get('href',''))
  if tag=='script':self.script=[] if a.get('type')=='application/ld+json' else False
 def handle_data(self,text):
  if isinstance(self.script,list):self.script.append(text)
  elif self.script is None:self.text.append(text)
 def handle_endtag(self,tag):
  if tag=='script':
   if isinstance(self.script,list):self.schemas.append(json.loads(''.join(self.script)))
   self.script=None
root=Path('apps/web/.next/server/app')
for route,data,source in [
 ('insurance/life/haven-life','insurance/life-insurance/haven-life','https://www.massmutual.com/login-list'),
 ('loans/student/discover-student-loans','loans/student-loans/discover-student-loans','https://firstmarkservices.com/')]:
 d=json.loads(Path(f'apps/web/data/{data}.json').read_text());p=Page(root/f'{route}.html');t=' '.join(p.text)
 assert d['availability']=='unavailable'
 assert 'Not a current application option' in t and source in p.links
 assert d['status_page']['title'] in t and d['source_checked'] in t
 assert not any(s.get('@type') in ['FinancialProduct','LoanOrCredit','FAQPage','Product'] for s in p.schemas)
 assert any(s.get('@type')=='Article' and s.get('dateModified')=='2026-09-14' for s in p.schemas)
 assert not any(x in t for x in ['Get my quote','Check my rate','How to apply','Fintiex rating','4.7 / 5'])
student=Page(root/'loans/student.html')
assert 'https://www.discover.com/student-loans/' not in student.links
assert '/loans/student/discover-student-loans' in student.links
life=Page(root/'insurance/life.html');text=' '.join(life.text)
assert 'https://havenlife.com' not in life.links
assert '/insurance/life/haven-life' in life.links
assert not any(x in text for x in ['Top pick','providers ranked','35 percent','Fintiex score'])
for p in (root/'insurance/life').glob('*.html'):
 t=' '.join(Page(p).text)
 assert not any(x in t for x in ['out of 5 in our','Fintiex rating',' / 5','Fully digital carriers like Haven']),p
 if p.stem!='haven-life':assert 'What this check covers' in t and 'Provider sources' in t,p
sitemap=ET.fromstring((root/'sitemap.xml.body').read_text());ns={'s':'http://www.sitemaps.org/schemas/sitemap/0.9'}
for route in ['insurance/life','insurance/life/haven-life','loans/student/discover-student-loans']:
 nodes=[n for n in sitemap.findall('s:url',ns) if n.find('s:loc',ns).text==f'https://www.fintiex.com/{route}']
 assert len(nodes)==1 and nodes[0].find('s:lastmod',ns).text.startswith('2026-09-14'),route
print('PASS: two unavailable products have status pages and servicing sources, no active promotions or offer schema; life scores removed; revision dates match sitemap.')
