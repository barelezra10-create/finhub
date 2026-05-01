export interface Brand {
  slug: string;
  name: string;
  domain: string;
  color: string;
  category: "mortgage" | "savings" | "loan" | "card" | "broker";
}

const brandList: Brand[] = [
  // Mortgages
  { slug: "marcus-mortgage", name: "Marcus by Goldman Sachs", domain: "marcus.com", color: "#1F4E79", category: "mortgage" },
  { slug: "better", name: "Better.com", domain: "better.com", color: "#01828C", category: "mortgage" },
  { slug: "rocket", name: "Rocket Mortgage", domain: "rocketmortgage.com", color: "#C8102E", category: "mortgage" },
  { slug: "loandepot", name: "loanDepot", domain: "loandepot.com", color: "#0072CE", category: "mortgage" },
  { slug: "chase-mortgage", name: "Chase Home Lending", domain: "chase.com", color: "#117ACA", category: "mortgage" },
  { slug: "pnc", name: "PNC Bank", domain: "pnc.com", color: "#F58025", category: "mortgage" },
  { slug: "wellsfargo-mortgage", name: "Wells Fargo Home Lending", domain: "wellsfargo.com", color: "#D71E28", category: "mortgage" },
  { slug: "usbank", name: "U.S. Bank", domain: "usbank.com", color: "#003594", category: "mortgage" },

  // Savings
  { slug: "bask", name: "Bask Bank", domain: "baskbank.com", color: "#5C6F45", category: "savings" },
  { slug: "bread", name: "Bread Savings", domain: "breadsavings.com", color: "#0E274F", category: "savings" },
  { slug: "marcus", name: "Marcus", domain: "marcus.com", color: "#1F4E79", category: "savings" },
  { slug: "ally", name: "Ally Bank", domain: "ally.com", color: "#6A1B9A", category: "savings" },
  { slug: "sofi", name: "SoFi", domain: "sofi.com", color: "#01D2C0", category: "savings" },
  { slug: "discover-savings", name: "Discover", domain: "discover.com", color: "#FF6000", category: "savings" },
  { slug: "cit", name: "CIT Bank", domain: "cit.com", color: "#005CA9", category: "savings" },
  { slug: "amex-savings", name: "American Express", domain: "americanexpress.com", color: "#006FCF", category: "savings" },
  { slug: "lendingclub-savings", name: "LendingClub", domain: "lendingclub.com", color: "#1A6FB7", category: "savings" },
  { slug: "synchrony", name: "Synchrony Bank", domain: "synchronybank.com", color: "#FBB92E", category: "savings" },

  // Personal loans
  { slug: "sofi-loan", name: "SoFi", domain: "sofi.com", color: "#01D2C0", category: "loan" },
  { slug: "lightstream", name: "LightStream", domain: "lightstream.com", color: "#0079BF", category: "loan" },
  { slug: "marcus-loan", name: "Marcus", domain: "marcus.com", color: "#1F4E79", category: "loan" },
  { slug: "discover-loan", name: "Discover Personal Loans", domain: "discover.com", color: "#FF6000", category: "loan" },
  { slug: "upstart", name: "Upstart", domain: "upstart.com", color: "#3FBFB1", category: "loan" },
  { slug: "lendingclub", name: "LendingClub", domain: "lendingclub.com", color: "#1A6FB7", category: "loan" },
  { slug: "bestegg", name: "Best Egg", domain: "bestegg.com", color: "#F2B701", category: "loan" },
  { slug: "prosper", name: "Prosper", domain: "prosper.com", color: "#0E9E47", category: "loan" },

  // Cards
  { slug: "wells-active-cash", name: "Wells Fargo Active Cash", domain: "wellsfargo.com", color: "#D71E28", category: "card" },
  { slug: "chase-sapphire-preferred", name: "Chase Sapphire Preferred", domain: "chase.com", color: "#117ACA", category: "card" },
  { slug: "wells-reflect", name: "Wells Fargo Reflect", domain: "wellsfargo.com", color: "#D71E28", category: "card" },
  { slug: "citi-diamond-preferred", name: "Citi Diamond Preferred", domain: "citi.com", color: "#003B70", category: "card" },
  { slug: "citi-double-cash", name: "Citi Double Cash", domain: "citi.com", color: "#003B70", category: "card" },
  { slug: "ink-business-preferred", name: "Chase Ink Business Preferred", domain: "chase.com", color: "#117ACA", category: "card" },
  { slug: "discover-it-cash-back", name: "Discover it Cash Back", domain: "discover.com", color: "#FF6000", category: "card" },
  { slug: "amex-gold", name: "American Express Gold", domain: "americanexpress.com", color: "#FBC02D", category: "card" },
];

export const brands = brandList;

const bySlug = new Map(brandList.map((b) => [b.slug, b]));
const byName = new Map(brandList.map((b) => [b.name.toLowerCase(), b]));

export function getBrand(slugOrName: string): Brand | undefined {
  return bySlug.get(slugOrName) ?? byName.get(slugOrName.toLowerCase());
}

export function brandsByCategory(category: Brand["category"]): Brand[] {
  return brandList.filter((b) => b.category === category);
}
