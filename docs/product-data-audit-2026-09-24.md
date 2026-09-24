# Insurance, brokerage and personal-loan audit — September 24, 2026

## Scope

Checked selected public product features and conditions for **34 records**: eight auto insurers, eight home insurance providers, seven brokerages and eleven currently listed personal loan products. Every material profile fact points to a provider source. Source-check dates are separate from older publication/effective dates where the provider supplies them.

This is a selected-field audit, not a representative quote study, claim-handling test, exhaustive fee audit or guarantee of eligibility. Life insurance and student-loan records retain their earlier audit dates. Marcus remains an unavailable personal loan product with servicing information. Other editorial articles, mortgage data and savings data are outside this audit.

## Changes

- Replaced unsupported insurance premium ranges, scores, satisfaction ratings and processing promises with sourced coverage, exclusions, distribution roles and quote conditions.
- Brokerage profiles distinguish eligible commission-free trades from options, fund, service and transfer charges. Removed unsupported app/research scores.
- Corrected personal-loan fees, amounts, repayment terms and eligibility, including PNC checking requirements, SoFi fee choices, Happen Bank branding and OneMain collateral conditions. Kept existing URLs and redirects.
- Current public APR ranges were not reliably established for SoFi, LightStream or Oportun; those profiles state the limitation rather than displaying guessed rates. Discover’s comparison-chart cutoff is July 8, 2026; it is not labeled a September rate guarantee.
- Four directories draw their content from the same records as the profiles. Lists are alphabetical, without invented scores or approval rankings.
- Corrected conflicting product statements on the insurance, investing and loan hubs; five related loan landing pages; three personal-loan articles; and the loan calculator FAQ.
- Updated sitemap revision dates for affected content. Existing product availability and old-URL redirects remain intact.

## Verification

- `pnpm --filter @fintiex/web typecheck`: passed.
- `pnpm run build`: passed (requires network access for existing Google Fonts dependency).
- `python3 scripts/audit-seo.py`: passed, 455 indexable pages and sitemap URLs, unique titles, metadata/H1 coverage, all internal targets resolve.
- `PLAYWRIGHT_BASE_URL=http://localhost:3050 pnpm exec playwright test e2e/product-audit.spec.ts`: seven passed, covering pricing exceptions, source anchors, loan eligibility, retired-product status, redirects, directory counts and mobile overflow.
- Inspected the mobile product screenshot; text, buttons and fee conditions are readable.
- Data integrity check: all 34 profiles have unique source IDs, valid fact-to-source references, HTTPS sources and the audit date; unsupported numeric ratings and insurance premium fields are absent.

## Provider source inventory

The checked JSON profiles contain the exact fact-to-source mapping and any document-date notes.

- **Allstate** (`insurance/auto-insurance/allstate-auto.json`): [Auto insurance — official product terms](https://www.allstate.com/auto-insurance).
- **GEICO** (`insurance/auto-insurance/geico-auto.json`): [Auto insurance — official product terms](https://www.geico.com/save/discounts/car-insurance-discounts/), [GEICO mechanical-breakdown eligibility](https://www.geico.com/landingpage/mechanical-breakdown-insurance-new/).
- **Liberty Mutual** (`insurance/auto-insurance/liberty-mutual-auto.json`): [Auto insurance — official product terms](https://www.libertymutual.com/vehicle/auto-insurance).
- **Nationwide** (`insurance/auto-insurance/nationwide-auto.json`): [Auto insurance — official product terms](https://www.nationwide.com/personal/insurance/auto/).
- **Progressive** (`insurance/auto-insurance/progressive-auto.json`): [Auto insurance — official product terms](https://www.progressive.com/auto/insurance-coverages/), [Progressive Snapshot terms and limitations](https://www.progressive.com/auto/discounts/snapshot/).
- **State Farm** (`insurance/auto-insurance/state-farm-auto.json`): [Auto insurance — official product terms](https://www.statefarm.com/insurance/auto).
- **The General** (`insurance/auto-insurance/the-general-auto.json`): [Auto insurance — official product terms](https://www.thegeneral.com/car-insurance/).
- **USAA** (`insurance/auto-insurance/usaa-auto.json`): [Auto insurance — official product terms](https://www.usaa.com/insurance/vehicles/auto/states/illinois/?akredirect=true), [USAA auto coverage guide](https://www.usaa.com/insurance/vehicles/auto/coverage/?akredirect=true).
- **Allstate** (`insurance/home-insurance/allstate-home.json`): [Home insurance — official product terms](https://www.allstate.com/home-insurance).
- **Farmers Insurance** (`insurance/home-insurance/farmers-home.json`): [Home insurance — official product terms](https://www.farmers.com/home/).
- **Lemonade** (`insurance/home-insurance/lemonade-home.json`): [Home insurance — official product terms](https://www.lemonade.com/homeowners).
- **Liberty Mutual** (`insurance/home-insurance/liberty-mutual-home.json`): [Home insurance — official product terms](https://www.libertymutual.com/property/homeowners-insurance).
- **Nationwide** (`insurance/home-insurance/nationwide-home.json`): [Home insurance — official product terms](https://www.nationwide.com/personal/insurance/homeowners/).
- **Progressive** (`insurance/home-insurance/progressive-home.json`): [Home insurance — official product terms](https://www.progressive.com/homeowners/).
- **State Farm** (`insurance/home-insurance/state-farm-home.json`): [Home insurance — official product terms](https://www.statefarm.com/insurance/homeowners).
- **USAA** (`insurance/home-insurance/usaa-home.json`): [Home insurance — official product terms](https://www.usaa.com/insurance/property/homeowners/coverage/?akredirect=true), [USAA membership and property-insurance disclosures](https://www.usaa.com/insurance/vehicles/auto/states/illinois/?akredirect=true).
- **Charles Schwab** (`investing/brokerages/charles-schwab.json`): [Brokerage — official product terms](https://www.schwab.com/pricing).
- **E*TRADE (Morgan Stanley)** (`investing/brokerages/e-trade.json`): [Brokerage — official product terms](https://us.etrade.com/what-we-offer/pricing-and-rates).
- **Fidelity Investments** (`investing/brokerages/fidelity.json`): [Brokerage — official product terms](https://www.fidelity.com/trading/commissions-margin-rates).
- **Interactive Brokers** (`investing/brokerages/interactive-brokers.json`): [Brokerage — official product terms](https://www.interactivebrokers.com/en/pricing/commissions-home.php).
- **Robinhood** (`investing/brokerages/robinhood.json`): [Brokerage — official product terms](https://robinhood.com/us/en/support/articles/trading-fees-on-robinhood/), [Robinhood stock and ETF options](https://robinhood.com/us/en/about/options/).
- **Vanguard** (`investing/brokerages/vanguard.json`): [Brokerage — official product terms](https://investor.vanguard.com/client-benefits/investment-fees).
- **Webull** (`investing/brokerages/webull.json`): [Brokerage — official product terms](https://www.webull.com/trading-investing/options), [Webull fee schedule](https://www.webull.com/pricing).
- **Best Egg** (`loans/personal-loans/best-egg-personal-loan.json`): [Personal loan — official product terms](https://www.bestegg.com/personal-loans/).
- **Discover** (`loans/personal-loans/discover-personal-loan.json`): [Personal loan — official product terms](https://www.discover.com/personal-loans/).
- **Happen Bank (formerly LendingClub)** (`loans/personal-loans/lendingclub-personal-loan.json`): [Personal loan — official product terms](https://www.happen.com/personal-loan), [Happen Bank company history](https://www.happen.com/company/media-center).
- **LightStream** (`loans/personal-loans/lightstream-personal-loan.json`): [Personal loan — official product terms](https://www.lightstream.com/consumer-loans), [LightStream rate and AutoPay disclosures](https://www.lightstream.com/).
- **OneMain Financial** (`loans/personal-loans/onemain-personal-loan.json`): [Personal loan — official product terms](https://www.onemainfinancial.com/personal-loans), [OneMain loan amounts and fees](https://www.onemainfinancial.com/legal/loan-fees).
- **Oportun** (`loans/personal-loans/oportun-personal-loan.json`): [Personal loan — official product terms](https://oportun.com/personal-loans/).
- **PNC Bank** (`loans/personal-loans/pnc-personal-loan.json`): [Personal loan — official product terms](https://www.pnc.com/en/personal-banking/borrowing/personal-loans/unsecured-personal-loan.html).
- **Prosper** (`loans/personal-loans/prosper-personal-loan.json`): [Personal loan — official product terms](https://www.prosper.com/personal-loans).
- **SoFi** (`loans/personal-loans/sofi-personal-loan.json`): [Personal loan — official product terms](https://support.sofi.com/hc/en-us/articles/the-basics-of-a-sofi-personal-loan).
- **Upgrade** (`loans/personal-loans/upgrade-personal-loan.json`): [Personal loan — official product terms](https://www.upgrade.com/personal-loans/).
- **Upstart** (`loans/personal-loans/upstart-personal-loan.json`): [Personal loan — official product terms](https://www.upstart.com/personal-loans).
