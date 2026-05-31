import fs from "fs";
import path from "path";

const DIR = path.join(process.cwd(), "data/banking/savings-accounts");

export interface SavingsAccount {
  slug: string;
  bank: string;
  product_name: string;
  apy: number;
  apy_tier_min_balance: number | null;
  monthly_fee: number;
  monthly_fee_waivable: boolean;
  min_opening_deposit: number;
  min_balance: number;
  withdrawal_limit_per_month: number | null;
  fdic_insured: boolean;
  ncua_insured: boolean;
  mobile_app_rating: number;
  best_for: string;
  perks: string[];
  drawbacks: string[];
  application_url: string;
  rating: number;
  last_updated: string;
}

export function loadSavingsAccounts(): SavingsAccount[] {
  if (!fs.existsSync(DIR)) return [];
  return fs
    .readdirSync(DIR)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(DIR, f), "utf8")) as SavingsAccount)
    .sort((a, b) => b.apy - a.apy);
}

export function loadSavingsAccount(slug: string): SavingsAccount | null {
  return loadSavingsAccounts().find((a) => a.slug === slug) ?? null;
}

export function formatApy(apy: number): string {
  return apy.toFixed(2) + "%";
}

export function formatMoney(n: number): string {
  if (n === 0) return "$0";
  return "$" + n.toLocaleString("en-US");
}

export function savingsAccountHref(slug: string): string {
  return `/savings/accounts/${slug}`;
}
