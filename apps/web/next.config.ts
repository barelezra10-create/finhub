import type { NextConfig } from "next";

const reviewRedirects = [
  ["/savings/accounts/marcus-online-savings", "/reviews/marcus"],
  ["/savings/accounts/ally-online-savings", "/reviews/ally"],
  ["/savings/accounts/american-express-personal-savings", "/reviews/amex-savings"],
  ["/savings/accounts/discover-online-savings", "/reviews/discover-savings"],

  // Legacy internal URLs retain a direct path to the matching published resource.
  ["/reviews/synchrony", "/savings/accounts/synchrony-high-yield-savings"],
  ["/reviews/lendingclub-savings", "/savings/accounts/lendingclub-high-yield-savings"],
  ["/calculators/investment", "/calculators/compound-interest"],
  ["/learn/savings/emergency-fund-playbook", "/learn/emergency-fund-playbook"],
  ["/learn/savings/debt-avalanche-vs-snowball", "/learn/debt-avalanche-vs-snowball"],
  ["/learn/mortgages/how-mortgages-work", "/learn/how-mortgages-work"],
  ["/learn/savings/hysa-vs-cd", "/learn/hysa-vs-cd"],
  ["/learn/savings/compound-interest-explained", "/learn/compound-interest-explained"],
  ["/learn/loans/debt-avalanche-vs-snowball", "/learn/debt-avalanche-vs-snowball"],
  ["/cards/discover-it-student-cash", "/credit-cards/discover-it-student-cash"],
  ["/cards/discover-it-secured", "/credit-cards/discover-it-secured"],
  ["/tools/which-card", "/calculators/which-card"],
  ["/tools/apr", "/calculators/apr"],
  ["/tools/payoff", "/calculators/debt-payoff"],
  ["/tools/balance-transfer", "/calculators/balance-transfer"],

  // /reviews/{old} → /credit-cards/{new} (canonical dynamic card reviews live under /credit-cards)
  ["/reviews/amex-gold", "/credit-cards/amex-gold"],
  ["/reviews/chase-sapphire-preferred", "/credit-cards/chase-sapphire-preferred"],
  ["/reviews/citi-double-cash", "/credit-cards/citi-double-cash"],
  ["/reviews/discover-it-cash-back", "/credit-cards/discover-it-cashback"],
  ["/reviews/ink-business-preferred", "/credit-cards/chase-ink-business-preferred"],
  ["/reviews/wells-active-cash", "/credit-cards/wells-fargo-active-cash"],
  ["/reviews/wells-reflect", "/credit-cards/wells-fargo-active-cash"],
  ["/reviews/citi-diamond-preferred", "/credit-cards/citi-double-cash"],
  // Legacy /credit-cards/{slug} aliases that do not match a JSON file → nearest live review or category
  ["/credit-cards/wells-active-cash", "/credit-cards/wells-fargo-active-cash"],
  ["/credit-cards/wells-fargo-reflect", "/credit-cards/wells-fargo-active-cash"],
  ["/credit-cards/wells-reflect", "/credit-cards/wells-fargo-active-cash"],
  ["/credit-cards/ink-business-preferred", "/credit-cards/chase-ink-business-preferred"],
  ["/credit-cards/citi-diamond-preferred", "/credit-cards/citi-double-cash"],
  ["/credit-cards/discover-it", "/credit-cards/discover-it-cashback"],
  ["/credit-cards/discover-it-cash-back", "/credit-cards/discover-it-cashback"],
  ["/credit-cards/discover-it-balance-transfer", "/credit-cards/discover-it-cashback"],
  // Cards without a JSON file → fall to category listings
  ["/credit-cards/citi-premier", "/credit-cards/travel"],
  ["/credit-cards/bilt", "/credit-cards/bilt-mastercard"],
  ["/credit-cards/bankamericard", "/credit-cards/balance-transfer"],

  // /loans/{lender} → /loans/personal/{slug} (new canonical, 2026-05)
  ["/loans/best-egg", "/loans/personal/best-egg-personal-loan"],
  ["/loans/discover", "/loans/personal/discover-personal-loan"],
  ["/loans/lendingclub", "/loans/personal/lendingclub-personal-loan"],
  ["/loans/lightstream", "/loans/personal/lightstream-personal-loan"],
  ["/loans/marcus", "/loans/personal/marcus-personal-loan"],
  ["/loans/prosper", "/loans/personal/prosper-personal-loan"],
  ["/loans/sofi", "/loans/personal/sofi-personal-loan"],
  ["/loans/upstart", "/loans/personal/upstart-personal-loan"],

  // /reviews/{loan-slug} → /loans/personal/{slug} (8 personal-loan reviews relocated 2026-05)
  ["/reviews/sofi-loan", "/loans/personal/sofi-personal-loan"],
  ["/reviews/lightstream", "/loans/personal/lightstream-personal-loan"],
  ["/reviews/marcus-loan", "/loans/personal/marcus-personal-loan"],
  ["/reviews/discover-loan", "/loans/personal/discover-personal-loan"],
  ["/reviews/upstart", "/loans/personal/upstart-personal-loan"],
  ["/reviews/lendingclub", "/loans/personal/lendingclub-personal-loan"],
  ["/reviews/bestegg", "/loans/personal/best-egg-personal-loan"],
  ["/reviews/prosper", "/loans/personal/prosper-personal-loan"],

  // /mortgages/{lender} → /reviews/{slug}
  ["/mortgages/better", "/reviews/better"],
  ["/mortgages/chase", "/reviews/chase-mortgage"],
  ["/mortgages/loandepot", "/reviews/loandepot"],
  ["/mortgages/marcus", "/reviews/marcus-mortgage"],
  ["/mortgages/pnc", "/reviews/pnc"],
  ["/mortgages/rocket", "/reviews/rocket"],
  ["/mortgages/us-bank", "/reviews/usbank"],
  ["/mortgages/wells-fargo", "/reviews/wellsfargo-mortgage"],

  // /savings/{slug} → /reviews/{slug}
  ["/savings/ally", "/reviews/ally"],
  ["/savings/amex", "/reviews/amex-savings"],
  ["/savings/bread", "/reviews/bread"],
  ["/savings/cit", "/reviews/cit"],
  ["/savings/discover", "/reviews/discover-savings"],
  ["/savings/marcus", "/reviews/marcus"],
  ["/savings/sofi", "/reviews/sofi"],

  // Banking placeholders → savings hub for now
  ["/banking/checking", "/savings"],
  ["/savings/checking", "/savings"],
  ["/savings/money-market", "/savings/hysa"],
] as const;

const config: NextConfig = {
  serverExternalPackages: ["geoip-lite"],
  reactStrictMode: true,
  transpilePackages: ["@fintiex/ui", "@fintiex/calculators"],
  async redirects() {
    return reviewRedirects.map(([source, destination]) => ({
      source,
      destination,
      permanent: true,
    }));
  },
};

export default config;
