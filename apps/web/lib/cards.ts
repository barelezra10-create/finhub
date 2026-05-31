/**
 * Pure types and utilities for credit card data. NO fs imports here so this
 * module can be used by client components. Server-side data loading
 * (loadCards, loadCard, cardsByCategory, relatedCards) lives in cards-server.ts.
 */

export interface AprRange {
  min: number;
  max: number;
}

export interface CreditScoreRequired {
  min: number;
  recommended: number;
}

export interface CardData {
  slug: string;
  issuer: string;
  name: string;
  network: string;
  category: string[];
  apr_purchase: AprRange;
  apr_intro: number | null;
  apr_intro_months: number;
  apr_balance_transfer: AprRange;
  apr_cash_advance: number;
  annual_fee: number;
  foreign_tx_fee: number;
  balance_transfer_fee: number;
  signup_bonus: string | null;
  signup_bonus_spend: number | null;
  signup_bonus_value_usd: number | null;
  rewards: Record<string, number>;
  rewards_type: string;
  points_value_cents: number | null;
  credit_score_required: CreditScoreRequired;
  perks: string[];
  drawbacks: string[];
  application_url: string;
  last_updated: string;
  rating: number;
}

/**
 * Synthetic categories used by the hub grid. We expand each card into the
 * categories it qualifies for, including derived ones like "no-annual-fee"
 * and "0-apr" that are not stored in the JSON.
 */
export const SYNTHETIC_CATEGORIES = [
  "cashback",
  "travel",
  "balance-transfer",
  "business",
  "student",
  "secured",
  "no-annual-fee",
  "0-apr",
] as const;

export type SyntheticCategory = (typeof SYNTHETIC_CATEGORIES)[number];

export const CATEGORY_LABEL: Record<SyntheticCategory, string> = {
  cashback: "Cash back",
  travel: "Travel",
  "balance-transfer": "Balance transfer",
  business: "Business",
  student: "Student",
  secured: "Secured",
  "no-annual-fee": "No annual fee",
  "0-apr": "0% intro APR",
};

export const CATEGORY_LISTICLE: Record<SyntheticCategory, string> = {
  cashback: "/credit-cards/cash-back",
  travel: "/credit-cards/travel",
  "balance-transfer": "/credit-cards/balance-transfer",
  business: "/credit-cards/business",
  student: "/credit-cards/student",
  secured: "/credit-cards/secured",
  "no-annual-fee": "/credit-cards/no-fee",
  "0-apr": "/credit-cards/zero-apr",
};

export function cardCategories(card: CardData): SyntheticCategory[] {
  const set = new Set<SyntheticCategory>();
  for (const c of card.category ?? []) {
    if (c === "cashback") set.add("cashback");
    if (c === "travel" || c === "miles" || c === "hotel") set.add("travel");
    if (c === "balance-transfer") set.add("balance-transfer");
    if (c === "business") set.add("business");
    if (c === "student") set.add("student");
    if (c === "secured" || c === "rebuilding" || c === "no-credit") set.add("secured");
  }
  if ((card.annual_fee ?? 0) === 0) set.add("no-annual-fee");
  if (card.apr_intro === 0 && (card.apr_intro_months ?? 0) >= 12) set.add("0-apr");
  return Array.from(set);
}

export function fullCardName(card: CardData): string {
  const name = card.name;
  if (name.toLowerCase().includes(card.issuer.toLowerCase())) return name;
  return `${card.issuer} ${name}`;
}

export function formatPct(v: number): string {
  // Stored as percent (e.g. 19.24). Strips trailing zeros after decimal.
  return `${v.toFixed(2).replace(/\.?0+$/, "")}%`;
}

export function formatFeePct(v: number | null | undefined): string {
  if (v == null) return "None";
  if (v === 0) return "None";
  // Stored as decimal e.g. 0.05 = 5%
  const pct = v * 100;
  return `${pct.toFixed(pct % 1 === 0 ? 0 : 2)}%`;
}

export function formatAprRange(range: AprRange | null | undefined): string {
  if (!range) return "Varies";
  if (range.min === range.max) return formatPct(range.min);
  return `${formatPct(range.min)} to ${formatPct(range.max)}`;
}

export function formatAnnualFee(fee: number): string {
  if (fee === 0) return "$0";
  return `$${fee}`;
}

export function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

/**
 * Returns the headline reward rate as a human label, e.g. "5x on rotating",
 * "4x on dining", "2% cash back". Picks the highest-multiplier category.
 */
export function topRewardRate(card: CardData): string {
  const entries = Object.entries(card.rewards ?? {}).filter(
    ([, v]) => typeof v === "number" && v > 0,
  );
  if (entries.length === 0) {
    if (card.rewards_type === "none") return "No rewards";
    return "Varies";
  }
  entries.sort((a, b) => b[1] - a[1]);
  const top = entries[0];
  if (!top) return "Varies";
  const [topKey, topValue] = top;
  const unit = card.rewards_type === "cashback" ? "%" : "x";
  const label = rewardKeyLabel(topKey);
  if (topKey === "other") {
    return `${topValue}${unit} on everything`;
  }
  return `${topValue}${unit} on ${label}`;
}

export function rewardKeyLabel(key: string): string {
  const map: Record<string, string> = {
    other: "everything else",
    dining: "dining",
    groceries: "groceries",
    "online-groceries": "online groceries",
    flights: "flights",
    travel: "travel",
    "travel-chase-portal": "travel via Chase",
    "travel-portal": "the travel portal",
    streaming: "streaming",
    gas: "gas",
    rotating: "rotating categories",
    transit: "transit",
    "us-supermarkets": "US supermarkets",
    "us-restaurants": "US restaurants",
    shipping: "shipping",
    advertising: "online ads",
    internet: "internet, cable, and phone",
    hotels: "hotels",
    "hotels-chase-portal": "hotels via Chase",
    amazon: "Amazon",
    "wholesale-clubs": "wholesale clubs",
    drugstores: "drugstores",
    "self-pay-hotel": "self-paid hotels",
    rent: "rent",
  };
  return map[key] ?? key.replace(/-/g, " ");
}

export function bestRewardEntries(
  card: CardData,
): Array<{ key: string; label: string; value: number }> {
  const entries = Object.entries(card.rewards ?? {})
    .filter(([, v]) => typeof v === "number")
    .map(([key, value]) => ({ key, label: rewardKeyLabel(key), value }))
    .sort((a, b) => b.value - a.value);
  return entries;
}

export function cardHref(slug: string): string {
  return `/credit-cards/${slug}`;
}

/**
 * Computes the annual dollar value of rewards for a card given a spend
 * profile (dollars per month per category). Used by the rewards optimizer.
 * Points and miles cards multiply rate by points_value_cents to get cents
 * per dollar of spend.
 */
export function yearlyRewardsValue(
  card: CardData,
  monthlySpend: Record<string, number>,
): number {
  const otherRate = card.rewards?.other ?? 0;
  let totalReward = 0;
  for (const [category, monthly] of Object.entries(monthlySpend)) {
    const annual = (monthly ?? 0) * 12;
    if (annual <= 0) continue;
    const rate = card.rewards?.[category] ?? otherRate;
    if (card.rewards_type === "cashback") {
      // rate is a percent like 2 (= 2%)
      totalReward += annual * (rate / 100);
    } else if (card.rewards_type === "points" || card.rewards_type === "miles") {
      // rate is points-per-dollar like 4; value via points_value_cents
      const valueCents = card.points_value_cents ?? 1;
      totalReward += annual * rate * (valueCents / 100);
    }
  }
  return totalReward;
}
