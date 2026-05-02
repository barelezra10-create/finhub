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
  card: [
    "wells-active-cash",
    "chase-sapphire-preferred",
    "wells-reflect",
    "citi-diamond-preferred",
    "citi-double-cash",
    "ink-business-preferred",
    "discover-it-cash-back",
    "amex-gold",
  ],
  loan: [
    "sofi-loan",
    "lightstream",
    "marcus-loan",
    "discover-loan",
    "upstart",
    "lendingclub",
    "bestegg",
    "prosper",
  ],
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
] as const;
