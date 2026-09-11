"""Audit the built site's metadata, sitemap coverage, and internal link targets.
Run after pnpm --filter @fintiex/web build, from the repository root.
"""
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlparse
from collections import Counter
import json
import xml.etree.ElementTree as ET

root = Path('apps/web/.next')
routes = json.loads((root / 'prerender-manifest.json').read_text())['routes']
aliases = {r['source'] for r in json.loads((root / 'routes-manifest.json').read_text())['redirects']}
normalize = lambda u: u.rstrip('/')
sitemap = [e.text for e in ET.parse(root / 'server/app/sitemap.xml.body').findall('.//{*}loc')]
errors, pages = [], []
class Page(HTMLParser):
    def __init__(self):
        super().__init__(); self.canonical=[]; self.title=''; self.in_title=False; self.h1=0; self.description=''; self.links=[]; self.noindex=False
    def handle_starttag(self, tag, attrs):
        a=dict(attrs)
        if tag=='title': self.in_title=True
        if tag=='h1': self.h1+=1
        if tag=='link' and a.get('rel')=='canonical': self.canonical.append(a.get('href',''))
        if tag=='meta' and a.get('name')=='description': self.description=a.get('content','')
        if tag=='meta' and a.get('name')=='robots': self.noindex='noindex' in a.get('content','')
        if tag=='a': self.links.append(a.get('href',''))
    def handle_endtag(self, tag):
        if tag=='title': self.in_title=False
    def handle_data(self, data):
        if self.in_title: self.title+=data
for file in (root / 'server/app').rglob('*.html'):
    if file.name in ('_not-found.html', '_global-error.html'): continue
    p=Page(); p.feed(file.read_text())
    if p.noindex: continue
    pages.append(p)
    if len(p.canonical)!=1 or not p.title or not p.description or p.h1!=1: errors.append(f'{file}: missing/duplicate metadata or H1')
    for link in p.links:
        u=urlparse(link)
        if u.netloc and u.netloc!='www.fintiex.com': continue
        if not u.path.startswith('/'): continue
        path=u.path.rstrip('/') or '/'
        if path.startswith(('/admin','/api/')): continue
        if path not in routes and path not in aliases: errors.append(f'{file}: unresolved link {path}')
canonicals={normalize(p.canonical[0]) for p in pages if p.canonical}
listed={normalize(u) for u in sitemap}
if canonicals!=listed: errors.append(f'Sitemap mismatch: missing={canonicals-listed}, extra={listed-canonicals}')
if len(listed)!=len(sitemap): errors.append('Duplicate sitemap URLs')
for title,count in Counter(p.title for p in pages).items():
    if count>1: errors.append(f'Duplicate title: {title}')
robots=(root / 'server/app/robots.txt.body').read_text()
if 'Disallow: /_next/' in robots: errors.append('Rendering assets blocked')
if errors: raise SystemExit('\n'.join(errors))
print(f'PASS: {len(pages)} indexable pages; {len(sitemap)} sitemap URLs; unique titles; canonical/description/H1 coverage; all internal targets resolve; rendering assets allowed.')
