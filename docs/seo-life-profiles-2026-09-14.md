# Six life-insurance profiles — September 14, 2026

Replaced the six active life-profile records and the shared life template with scoped, source-linked facts. Removed unsupported editorial scores, AM Best grades without current entity/date evidence, global issue-age/coverage ranges, riders and comparative price claims. Git retains the old records; they are no longer live data. Each claim now identifies its provider source, and the page separates check dates from document dates.

Corrections:
- Ladder: agency rather than issuing insurer; current homepage insurer disclosures and no-exam threshold; additional coverage requires applying for another policy. No claim that increases are impossible.
- Mutual of Omaha: focus on the specific Guaranteed Whole Life disclosure. Explain its two-year graded natural-cause benefit, age exceptions, state differences and issuing companies. Do not generalize those terms across the group.
- Northwestern Mutual: four listed categories, financial-professional application route and conditional accelerated underwriting. Remove blanket medical-exam requirement and invented limits.
- Policygenius: licensed independent broker; non-binding quotes and final pricing by the actual underwriting insurer. No broker financial-strength grade or universal coverage range.
- Prudential: EssentialTerm Plus consumer brochure, edition September 2024, retrieved September 14, 2026. Identify Pruco as issuer, term choices and conditional underwriting; clearly state that current sales availability and unchanged terms were not confirmed. Main consumer page did not expose readable product details. No FlexTerm claim.
- State Farm: separate Select Term from Instant Answer Term. Explain conditional no-test underwriting for Instant Answer rather than a universal exam requirement.

Every record contains its exact provider source URLs and the scope of verification. The life hub now summarizes these roles and links to the corrected profiles. Haven's status page remains unchanged. Rating is optional in the shared insurance type; auto/home renderers defensively tolerate its absence, without auditing those records.

Validation: production build and TypeScript; 452-page SEO audit; six-profile fact/source-anchor and metadata checks; discontinued-product, Marcus, savings-tracker and card-guide regressions; whitespace check. Browser review covered desktop layout, fact/source anchor navigation and a 390px mobile viewport without horizontal overflow.

The inventory now has 42 of 52 records without a source-check date. This measures documented checks, not full certification. No independent reviewer, personalized quote, rankings gain or comprehensive current-market availability is claimed.
