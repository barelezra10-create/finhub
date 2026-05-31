import fs from "fs";
import path from "path";

const ROOT = path.join(process.cwd(), "data/insurance");

export type Vertical = "auto" | "home" | "life";

const VERTICAL_DIR: Record<Vertical, string> = {
  auto: "auto-insurance",
  home: "home-insurance",
  life: "life-insurance",
};

export const VERTICAL_LABEL: Record<Vertical, string> = {
  auto: "Auto Insurance",
  home: "Home Insurance",
  life: "Life Insurance",
};

export interface PremiumRange {
  min: number;
  max: number;
}

export interface AgeRange {
  min: number;
  max: number;
}

export interface InsuranceCarrier {
  slug: string;
  carrier: string;
  rating: number;
  best_for: string;
  perks: string[];
  drawbacks: string[];
  quote_url: string;
  last_updated: string;
  am_best_rating?: string;
  states_available?: string | string[];
  avg_annual_premium?: PremiumRange;
  bundling_discount_pct?: number | null;
  good_driver_discount_pct?: number | null;
  jd_power_satisfaction?: number | null;
  digital_experience?: string;
  claims_process?: string;
  coverage_types_offered?: string[];
  coverage_includes?: string[];
  flood_coverage_separate?: boolean;
  earthquake_coverage_separate?: boolean;
  policy_types?: string[];
  term_lengths_years?: number[];
  coverage_amount_min?: number;
  coverage_amount_max?: number;
  age_range?: AgeRange;
  no_medical_exam_available?: boolean;
  underwriting_speed?: string;
  riders_available?: string[];
  [key: string]: unknown;
}

export function loadCarriers(v: Vertical): InsuranceCarrier[] {
  const dir = path.join(ROOT, VERTICAL_DIR[v]);
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(dir, f), "utf8")) as InsuranceCarrier)
    .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
}

export function loadCarrier(v: Vertical, slug: string): InsuranceCarrier | null {
  return loadCarriers(v).find((c) => c.slug === slug) ?? null;
}

export function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

export function formatPremiumRange(range: PremiumRange | undefined): string {
  if (!range) return "Varies";
  return `${formatCurrency(range.min)} to ${formatCurrency(range.max)}`;
}

export function formatStatesAvailable(states: string | string[] | undefined): string {
  if (!states) return "Varies";
  if (states === "all") return "All 50 states";
  if (Array.isArray(states)) return `${states.length} states`;
  return String(states);
}

export function carrierHref(v: Vertical, slug: string): string {
  return `/insurance/${v}/${slug}`;
}
