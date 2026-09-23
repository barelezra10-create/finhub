# Search-led page improvements — September 23, 2026

## Read-only Search Console baseline

Property: sc-domain:fintiex.com, web search, final data. Queried property totals separately from page and page/query rows; up to 25,000 detail rows per request. No credentials recorded in this document.

| Complete 28-day window | Clicks | Impressions | CTR | Average position |
| --- | ---: | ---: | ---: | ---: |
| August 24–September 20 | 9 | 40,607 | 0.0222% | 66.04 |
| July 27–August 23 | 4 | 43,414 | 0.0092% | 66.49 |

Current response: 216 page rows and 7,204 page/query rows. Previous: 186 and 8,303. Detail data is not guaranteed exhaustive; anonymization and aggregation mean it should not be summed as property totals. Nine clicks are too few to attribute a trend to recent releases.

Sapphire Reserve received 538 page impressions at position 22.3, but leading visible queries reference old APR ranges. Do not interpret those as strong current purchase intent. Marcus HYSA (42 impressions, position 25.8) and Ally HYSA (61, 32.0) are clearer relevant queries. Citi Double Cash received 93 page impressions at 31.3, with visible fee and APR queries much lower. Chime Credit Builder received 89 at 19.1; product-status accuracy takes priority over conversion because the issuer now labels it legacy.

## Released work

- Three server-rendered, self-canonical editorial comparisons: Sapphire Preferred vs. Reserve, Venture vs. Venture X, and Double Cash vs. Freedom Unlimited. Each has a fact table sourced from existing card records, distinct decision guidance, worked arithmetic, visible FAQs, official sources, and a link to the interactive comparison. They are discoverable from relevant card profiles, category pages and the comparison hub.
- Improved five existing pages: Marcus and Ally reviews with an account comparison and transfer/access guidance; Reserve with fee/credit economics and APR context; Double Cash with purchase/payment rewards and transfer cautions; Chime with a legacy-product explanation. Chime is excluded from current card directories without redirecting away an informative legacy URL.
- Confirmed Marcus 3.50% APY (provider date September 23) and Ally 3.00% (provider date September 22) from their official product pages, checked September 23. Appended observations; did not overwrite historical rows or mark other banks newly checked.
- Savings directory now uses the most recent observation per account. Individual dates are displayed in comparison rows, homepage cards, ticker and HYSA descriptions. Tracker date filters still show only observations actually made on that date.
- Descriptive homepage title. Card sitemap dates use each record's actual last_updated; new comparisons have their actual publication date. Query-string card selections retain the generic tool canonical.

## Evidence

- https://www.marcus.com/us/en/savings/high-yield-savings
- https://www.ally.com/bank/online-savings-account/
- https://help.chime.com/what-is-credit-builder-603a5ae8
- https://creditcards.chase.com/rewards-credit-cards/sapphire/preferred
- https://creditcards.chase.com/rewards-credit-cards/sapphire/reserve
- https://www.capitalone.com/credit-cards/venture/
- https://www.capitalone.com/credit-cards/venture-x/
- https://www.citi.com/credit-cards/citi-double-cash-credit-card
- https://creditcards.chase.com/cash-back-credit-cards/freedom/unlimited

No named reviewer, testing experience, ranking guarantee or universal points valuation was invented. Analysis dates do not imply all terms on an underlying card record were reverified. Worked examples are illustrative, with assumptions explicitly stated.

## Validation and follow-up

Production build; full static SEO audit for unique titles, canonical/H1/description coverage, sitemap equality and internal destinations; savings observation/download audit; browser regressions for comparisons, legacy status, partial refreshes and mobile server-rendered content.

After deployment, verify public routes and sitemap, and run the browser tests against production. Review Search Console after 14 days for discovery/indexing; use complete 28-day windows for performance, ending at least three days before retrieval. Track relevant queries separately from historical-rate and unrelated queries. Do not expand near-duplicate state pages without original local evidence.
