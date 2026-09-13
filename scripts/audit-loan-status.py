"""Protect the unavailable Marcus loan page from becoming an active offer again."""
from pathlib import Path
from html.parser import HTMLParser
import json

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__(); self.links=[]; self.text=[]; self.scripts=[]; self.script=None
        self.feed(html)
    def handle_starttag(self,tag,attrs):
        attrs=dict(attrs)
        if tag=='a': self.links.append(attrs.get('href',''))
        if tag=='script': self.script=[] if attrs.get('type')=='application/ld+json' else False
    def handle_data(self,data):
        if isinstance(self.script,list): self.script.append(data)
        elif self.script is None: self.text.append(data)
    def handle_endtag(self,tag):
        if tag=='script':
            if isinstance(self.script,list): self.scripts.append(json.loads(''.join(self.script)))
            self.script=None

root=Path('apps/web/.next/server/app')
p=Page((root/'loans/personal/marcus-personal-loan.html').read_text())
visible=' '.join(p.text)
assert 'Not a current application option' in visible
assert 'Systems & Services Technologies (SST)' in visible
assert 'https://www.marcus.com/us/en/faqs' in p.links
assert not any('/us/en/loans/personal-loans' in link for link in p.links)
assert not any(s.get('@type') in ['FinancialProduct','LoanOrCredit','FAQPage'] for s in p.scripts)
assert all(term not in visible for term in ['6.99%', '24.99%', '4.6 / 5', 'Check my rate'])
for path in ['loans','loans/personal','loans/debt-consolidation','loans/home-improvement','loans/by-credit-tier']:
    page=Page((root/f'{path}.html').read_text())
    assert 'https://www.marcus.com' not in page.links, path
    assert not any('marcus.com/us/en/loans' in link for link in page.links),path
    assert 'Marcus by Goldman Sachs' not in ' '.join(page.text),path
print('PASS: Marcus status page has servicing sources and no live offer, rating or application CTA; five comparison pages no longer promote it.')
