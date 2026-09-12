# Existing-page SEO and offer measurement

Baseline: Google Search Console, August 11–September 9, 2026 (30 days, property totals): 5 clicks, 50,729 impressions, 0.0099% CTR, average position 66.60. Most high-volume pages need ranking/relevance improvements; a title rewrite alone is not expected to solve the traffic gap.

| Priority page | Impressions | Average position |
| --- | ---: | ---: |
| /credit-cards/business | 5,738 | 73.13 |
| /credit-cards/secured | 5,043 | 76.66 |
| /credit-cards/no-fee | 4,962 | 64.49 |
| /credit-cards/travel | 3,712 | 66.93 |
| /savings/accounts | 1,387 | 68.81 |
| /savings/hysa | 1,329 | 68.76 |
| /reviews/marcus | 891 | 49.24 |
| /savings/hysa/minnesota | 646 | 66.99 |
| /savings/hysa/arizona | 481 | 56.88 |
| /reviews/ally | 406 | 53.56 |

Relevant query signals: Arizona high-yield savings (21 impressions, position 12.76); Marcus HYSA (107, 20.26); HYSA Minneapolis (30, 25.97); Ally HYSA (75, 31.85). Do not prioritize unrelated low-position queries merely because they appear to rank well.

## Changes

Four card landing pages now explain category-specific decisions, use descriptive titles/H1s, link to relevant comparisons/tools, and remove unsupported approval-testing claims, score promises, and duplicated static offer lists. Shared card rows no longer show unsupported numeric editorial scores or implied minimum approval scores. Underlying card offer data has not been comprehensively reverified in this pass; pages explicitly direct users to current issuer disclosures.

Savings hubs and state pages now connect to Marcus and Ally reviews and explain access, balance/qualification requirements, and CD trade-offs. Shared state corrections also benefit other states. Removed unsupported local-bank rate comparisons, stale August rate captions, and blanket nationwide eligibility claims. Ally review adds account-fit and access guidance; Marcus and Ally cross-link. APYs retain their original observation dates.

Offer clicks tab separates explicitly labeled provider buttons from general external-source links. Reports show product/placement, page views, daily clickers, and clicks per 100 views, with existing audience filters. These are not completed applications or revenue. Labels are additive schema fields, with historical rows left unlabeled. CSV exports include the new labels. Middle-click is captured alongside ordinary clicks.

## Redirect and Google status

GoDaddy authoritative DNS remains in use. A public HTTPS request to the former broken non-www Nevada URL now returns 301 with its path and query intact. Search Console's stored non-www 404 is from July 19, before this fix; www Nevada and no-fee pages are already indexed. Google must recrawl before that historical record changes. No claim that Google has finished reprocessing all historical errors.

## Weekly review

First follow-up: September 19, 2026. Compare complete seven-day periods ending at least three days before review; use 28-day comparisons as the primary trend once enough post-change data exists. Track the ten pages above by query, clicks, impressions, CTR and position. Check Offer clicks by source/device and page, without interpreting tiny counts as reliable conversion rates. Record the date of each further material edit. The existing provider scheduler refreshes aggregate keyword reports automatically; this document is a review plan, not a scheduled autonomous editorial job.

## Validation

Production build and TypeScript check passed. Static SEO audit passed for all 451 indexable pages and sitemap entries. Isolated database integration tests passed, including offer storage, report rendering, authentication, filtering, privacy exclusions, CSV imports, and existing analytics protections. Card comparison layout reviewed in browser. No synthetic production analytics events inserted.
