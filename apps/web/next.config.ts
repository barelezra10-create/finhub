import type { NextConfig } from "next";

const reviewRedirects = [
  // /credit-cards/{slug} → /reviews/{slug}
  ["/credit-cards/amex-gold", "/reviews/amex-gold"],
  ["/credit-cards/chase-sapphire-preferred", "/reviews/chase-sapphire-preferred"],
  ["/credit-cards/citi-diamond-preferred", "/reviews/citi-diamond-preferred"],
  ["/credit-cards/citi-double-cash", "/reviews/citi-double-cash"],
  ["/credit-cards/ink-business-preferred", "/reviews/ink-business-preferred"],
  ["/credit-cards/wells-fargo-active-cash", "/reviews/wells-active-cash"],
  ["/credit-cards/wells-fargo-reflect", "/reviews/wells-reflect"],
  ["/credit-cards/discover-it", "/reviews/discover-it-cash-back"],
  ["/credit-cards/discover-it-balance-transfer", "/reviews/discover-it-cash-back"],
  // Cards without reviews → fall to category listings
  ["/credit-cards/capital-one-quicksilver", "/credit-cards/cash-back"],
  ["/credit-cards/capital-one-venture", "/credit-cards/travel"],
  ["/credit-cards/chase-freedom-unlimited", "/credit-cards/cash-back"],
  ["/credit-cards/citi-premier", "/credit-cards/travel"],
  ["/credit-cards/bilt", "/credit-cards/travel"],
  ["/credit-cards/bankamericard", "/credit-cards/balance-transfer"],

  // /loans/{lender} → /reviews/{slug}
  ["/loans/best-egg", "/reviews/bestegg"],
  ["/loans/discover", "/reviews/discover-loan"],
  ["/loans/lendingclub", "/reviews/lendingclub"],
  ["/loans/lightstream", "/reviews/lightstream"],
  ["/loans/marcus", "/reviews/marcus-loan"],
  ["/loans/prosper", "/reviews/prosper"],
  ["/loans/sofi", "/reviews/sofi-loan"],
  ["/loans/upstart", "/reviews/upstart"],

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
