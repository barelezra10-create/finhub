"""Inventory provenance gaps; this is not a provider verification or a content certification."""
from pathlib import Path
import json
from collections import Counter
r=Path('apps/web/data');rows=[]
for directory in ['loans','insurance','investing']:
 for p in sorted((r/directory).rglob('*.json')):
  d=json.loads(p.read_text()); flags=[]
  if not d.get('source_checked'):flags.append('No source-check date')
  if not d.get('verified_fields'):flags.append('No field-level evidence list')
  if d.get('rating') is not None:flags.append('Numerical editorial rating lacks recorded method')
  if d.get('credit_score_required'):flags.append('Approval-score claim needs source')
  if d.get('avg_annual_premium'):flags.append('Premium estimate needs sample/method/date')
  if d.get('mobile_app_rating'):flags.append('App rating needs store/date/count')
  if d.get('jd_power_satisfaction'):flags.append('Study score needs edition/category citation')
  if d.get('checked_profile'): flags = ['Selected source-linked profile facts checked; see scope and document dates; legacy claims removed']
  if d.get('availability') == 'unavailable': flags = ['Unavailable product; status/servicing page replaces historical offer fields']
  rows.append((p.as_posix(),d.get('lender') or d.get('carrier') or d.get('broker'),d.get('source_checked','Not recorded'),'; '.join(flags) or 'Selected facts checked; other fields require review'))
lines=['# Financial evidence inventory — September 14, 2026','','Scope: all 52 loan, insurance and brokerage JSON records. Checks identify missing provenance in the records; they do not establish that every claim is wrong or inspect every hardcoded page. Do not interpret a passed software build as factual verification.','','The Discover loan record has selected-fact evidence. Marcus personal loans, Discover student loans and Haven Life render status/servicing pages instead of current offers. Other records require provider review before their rates, scores or terms can be described as verified. Shared personal-loan pages no longer render unsupported editorial ratings or minimum approval scores. The six life insurance profiles now contain scoped, source-linked facts with legacy claims removed. Prudential uses a September 2024 brochure and does not confirm current sales availability. Nine student-loan profiles now contain scoped, source-linked facts; the hub separates new borrowing from refinancing and identifies marketplaces. Auto/home insurance and investing templates still need further correction passes.','','| Record | Provider | Source check | Findings |','|---|---|---|---|']
lines += [f'| `{path}` | {provider} | {date} | {flags} |' for path,provider,date,flags in rows]
Path('docs/financial-evidence-inventory-2026-09-14.md').write_text('\n'.join(lines)+'\n')
print(f'Inventoried {len(rows)} records; {sum(date=="Not recorded" for _,_,date,_ in rows)} lack a recorded source-check date.')
