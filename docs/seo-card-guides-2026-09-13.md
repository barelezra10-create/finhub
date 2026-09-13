# Credit card decision guides — September 13, 2026

## Problem and change

The /best template read only the MDX body. Several legacy files stored most of their content in unused frontmatter, leaving brief conclusions on the public page, including unsupported product recommendations. Other guides were short pointers to category pages. The hub and shared template also claimed rankings, category winners and a review cadence that the implementation did not establish.

Rewrote all 15 existing guides with visible category-specific decision criteria, original hypothetical calculations and relevant next steps. Removed unused legacy offer prose, approval-score claims and unsupported rankings. Existing URLs retain self-referencing canonicals. These guides teach comparison methods; the eight /credit-cards category pages remain the product comparisons, with source-linked offer data.

Added reciprocal category-to-guide links, publisher/editorial-policy links, visible content revision dates, Article dateModified and content-specific sitemap lastmod. These revision dates do not change any issuer source-check dates. No new numerical product offers, author credentials or independent review claims were added.

## Sources

General editorial approach: https://developers.google.com/search/docs/fundamentals/creating-helpful-content

The credit-building, student-eligibility and promotional-rate guides link directly to the relevant CFPB sources. Product conditions are framed as items to verify with each issuer rather than universal promises. Worked examples use explicitly hypothetical inputs, excluding bonuses and borrowing costs where stated.

## Validation

- Production Next.js build and its TypeScript check passed.
- `python3 scripts/audit-seo.py`: all 451 indexable pages and sitemap URLs passed; unique titles, canonical/description/H1 coverage and internal targets verified.
- `python3 scripts/audit-card-guides.py`: all 15 rendered guides contain their body sections, matching visible/schema/sitemap revision dates and reciprocal category links.
- Desktop and 390px mobile previews of the guide template and mobile hub visually reviewed. Guide document width equals viewport width (390px).
- `git diff --check` passed.

Existing build warnings concern the middleware naming convention and sitemap file tracing; neither blocked the build. The initial sandbox build could not fetch Google Fonts; the network-enabled build succeeded after correcting the sitemap date type.

## Measurement and next priorities

Keep the September 19 review cadence in seo-growth-2026-09-12.md. Tag this revision date when comparing /best guide and corresponding category performance. Use 28-day trends when sufficient post-change data exists; do not attribute next-day movement to this release.

Remaining work includes verification of older loan/insurance/investing claims, owner-supplied qualified editorial reviewers, and original research that merits external citations. This release does not certify those other content areas or establish a ranking gain.
