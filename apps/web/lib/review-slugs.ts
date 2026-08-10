/**
 * Authoritative list of review slugs that have a rendered page.
 * Static folder routes + dynamic [slug] route slugs (personal loans).
 * Used by sitemap + cross-linking.
 */

export const reviewSlugs = {
  mortgage: [
    "marcus-mortgage",
    "better",
    "rocket",
    "loandepot",
    "chase-mortgage",
    "pnc",
    "wellsfargo-mortgage",
    "usbank",
    "valon",
    "guild-mortgage",
    "carrington",
    "midland-mortgage",
    "roundpoint",
    "21st-mortgage",
    "crosscountry",
    "movement",
  ],
  savings: [
    "bask",
    "bread",
    "marcus",
    "ally",
    "sofi",
    "discover-savings",
    "cit",
    "amex-savings",
  ],
  // Card reviews now live under /credit-cards/[slug] dynamically (2026-05).
  // The 8 slugs below are now 301-redirected via next.config.ts.
  card: [] as string[],
  // Personal loan reviews moved to /loans/personal/[slug] (2026-05).
  // Small-dollar lender and loan-app reviews (2026-08) live here.
  loan: [
    "bear-loan",
    "panda-loan",
    "sunshine-loans",
    "cherry",
    "elastic",
    "dollar-loan-center",
    "super-cash-advance",
  ] as string[],
} as const;

export const allReviewSlugs: string[] = [
  ...reviewSlugs.mortgage,
  ...reviewSlugs.savings,
  ...reviewSlugs.card,
  ...reviewSlugs.loan,
];

export const guideSlugs = [
  "how-mortgages-work",
  "what-is-apr",
  "hysa-vs-cd",
  "choosing-first-credit-card",
  "refinance-break-even",
  "compound-interest-explained",
  "emergency-fund-playbook",
  "debt-avalanche-vs-snowball",
  "50-year-mortgage",
  "family-opportunity-mortgage",
  "what-is-this-charge-on-my-credit-card",
  "401k-loan",
  "home-equity-loan-vs-heloc",
  "is-debt-consolidation-a-good-idea",
  "emergency-loans-bad-credit",
  "how-to-apply-for-a-personal-loan",
  "lease-buyout-loan",
] as const;
