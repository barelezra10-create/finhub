# Marcus personal loan status correction — September 13, 2026

Fintiex was displaying Marcus as an active personal loan option, including historical APRs, a numerical review rating and application buttons. The current official Marcus FAQ instead describes the personal loan servicing transfer to SST effective December 11, 2023: https://www.marcus.com/us/en/faqs.

The existing /loans/personal/marcus-personal-loan URL now provides status and servicing information. It retains its canonical and a useful indexed page for existing borrowers, but renders Article metadata instead of a FinancialProduct offer or synthetic review FAQ. The historical source record is flagged unavailable and its old offer fields are not rendered. The new check date applies to the status source only.

Removed Marcus from five hardcoded loan comparison lists and active recommendations in three loan guides. Kept informational links to the status page, corrected obsolete lender-count text, and removed ranking badges from the affected comparison lists. Corrected nearby unsupported claims about underwriting percentages, loan-size limits, legal APR caps and credit-inquiry handling where those passages were edited.

Discover is a separate case: https://www.discover.com/personal-loans/ currently advertises personal loans. It was not marked unavailable. Its source check revealed discrepancies with old Fintiex details (including fees), and it remains a priority for a complete field-by-field audit. Other loan profiles and educational content also retain claims needing a broader source audit; this release does not certify them.

Validation commands: production build (including TypeScript), scripts/audit-seo.py, scripts/audit-card-guides.py, scripts/audit-loan-status.py, and git diff --check. The loan-status regression checks the rendered page for servicing information, absence of old rates/rating/application calls to action, and absence of Marcus promotions from the five affected comparisons.
