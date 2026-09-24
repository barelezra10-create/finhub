import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "data/investing/brokerages");

export interface Brokerage {
  slug: string;
  broker: string;
  application_url: string;
  best_for: string;
  last_updated: string;
  source_checked: string;
  checked_profile: import('@/components/checked-product-profile').CheckedProductProfile;
}

export function loadBrokerages(): Brokerage[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as Brokerage)
    .sort((a,b) => a.broker.localeCompare(b.broker));
}

export function loadBrokerage(slug: string): Brokerage | null {
  return loadBrokerages().find((b) => b.slug === slug) ?? null;
}

export function formatAccountType(s: string): string {
  const map: Record<string, string> = {
    "taxable": "Taxable Brokerage",
    "ira": "Traditional IRA",
    "roth-ira": "Roth IRA",
    "401k-rollover": "401(k) Rollover",
    "joint": "Joint Account",
    "custodial": "Custodial",
    "trust": "Trust Account",
  };
  return map[s] ?? s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export function formatAssetClass(s: string): string {
  const map: Record<string, string> = {
    "stocks": "Stocks",
    "etfs": "ETFs",
    "options": "Options",
    "mutual-funds": "Mutual Funds",
    "bonds": "Bonds",
    "futures": "Futures",
    "crypto": "Crypto",
    "forex": "Forex",
  };
  return map[s] ?? s.split("-").map((w) => w.charAt(0).toUpperCase() + w.slice(1)).join(" ");
}

export function formatResearchQuality(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
