# Card terms display repair — September 20, 2026

The comparison UI previously treated an empty numeric rewards map as missing information even when verified earning terms existed in editorial perks. Added an explicit rewards summary, verified absence states for rewards and welcome offers, and dated field-level sources. Capped or conditional schedules remain excluded from calculators unless already separately eligible.

Fifteen existing records now expose their previously verified reward facts, retaining the original source-check date. Fifteen more records received newly researched facts from official issuer pages. Every added fact has its URL, date and field scope in `term_sources` on its JSON record. Full source links are shown on individual card reviews. The base `source_checked` remains unchanged so older fields are not falsely labeled newly verified.

New research covers Freedom Flex, Venture, Venture X, Apple Card, Platinum Secured, Discover it Cash Back, Discover it Secured, Costco Anywhere, Ink Business Cash, U.S. Bank Cash+, Customized Cash Rewards, United Explorer, Amex Platinum, Amex Business Gold and IHG Premier.

No annual fees, APRs or offers were inferred from missing data. Wells Fargo Active Cash's current product page could not be retrieved; historical launch material was not used as a current offer. Remaining unconfirmed terms are labeled “Not verified,” not zero or none. Platinum Secured's no-rewards and no-welcome-offer states are explicitly supported by Capital One's secured/unsecured comparison article.

The existing comparison improvements are included: useful default comparison, visible presets, full welcome offer text, benefits and restrictions, issuer sources, and exclusion of missing APRs from winner highlighting.

Validation: TypeScript, production build, Playwright card-term states and comparison navigation; live route verification after deployment.
