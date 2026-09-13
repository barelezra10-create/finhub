"""Verify rendered decision guides, revision metadata, and reciprocal category links after a build."""
from pathlib import Path
from html.parser import HTMLParser
import json
import re
import xml.etree.ElementTree as ET

root = Path('apps/web')
built = root / '.next/server/app'
sitemap = {
    entry.find('{*}loc').text: entry.find('{*}lastmod')
    for entry in ET.parse(built / 'sitemap.xml.body').getroot()
}

class Page(HTMLParser):
    def __init__(self, html):
        super().__init__()
        self.links, self.dates, self.schemas, self.text = [], [], [], []
        self.script = None
        self.feed(html)
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'a': self.links.append(attrs.get('href'))
        if tag == 'time': self.dates.append(attrs.get('datetime'))
        if tag == 'script': self.script = [] if attrs.get('type') == 'application/ld+json' else False
    def handle_data(self, text):
        if isinstance(self.script, list): self.script.append(text)
        elif self.script is None: self.text.append(text)
    def handle_endtag(self, tag):
        if tag == 'script':
            if isinstance(self.script, list): self.schemas.append(json.loads(''.join(self.script)))
            self.script = None

count = 0
for source in sorted((root / 'content/best').glob('*.mdx')):
    _, frontmatter, body = source.read_text().split('---', 2)
    fields = dict(re.findall(r'^(\w+): "(.*)"$', frontmatter, re.M))
    page = Page((built / 'best' / f'{source.stem}.html').read_text())
    visible = ' '.join(page.text)
    for heading in re.findall(r'^## (.+)$', body, re.M):
        assert heading in visible, f'{source.stem}: missing rendered section {heading}'
    assert fields['last_updated'] in page.dates, f'{source.stem}: missing visible revision date'
    article = next(schema for schema in page.schemas if schema.get('@type') == 'Article')
    assert article.get('dateModified') == fields['last_updated'], f'{source.stem}: schema date mismatch'
    entry = sitemap[f'https://www.fintiex.com/best/{source.stem}']
    assert entry is not None and entry.text.startswith(fields['last_updated']), f'{source.stem}: sitemap date mismatch'
    comparison = fields['comparison_href']
    assert comparison in page.links, f'{source.stem}: missing category link'
    category = Page((built / f'{comparison.lstrip("/")}.html').read_text())
    assert f'/best/{source.stem}' in category.links, f'{source.stem}: no reciprocal category link'
    assert 'category winners' not in visible and 'Updated 2026' not in visible, f'{source.stem}: unsupported template claim'
    count += 1
print(f'PASS: {count} guides render all sections, visible/schema/sitemap revision dates agree, and comparison links are reciprocal.')
