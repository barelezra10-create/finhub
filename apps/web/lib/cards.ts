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
  term_details?: Partial<Record<CardTermField, {
    status: "confirmed" | "offer_specific" | "not_offered" | "not_listed";
    text: string;
    source_url: string;
    checked: string;
  }>>;
  availability: "listed" | "unconfirmed" | "retired";
  audit_attempted: string;
  audit_note: string;
  source_checked?: string;
  source_url?: string;
  verified_fields?: string[];
  annual_fee_note?: string;
  intro_terms?: string;
  calculator_eligible?: boolean;
  rewards_summary?: string;
  rewards_status?: "available" | "none";
  welcome_offer_status?: "available" | "none";
  term_sources?: Array<{ url: string; checked: string; fields: string[] }>;
  slug: string;
  issuer: string;
  name: string;
  network: string;
  category: string[];
  apr_purchase: AprRange | null;
  apr_intro: number | null;
  apr_intro_months: number;
  apr_balance_transfer: AprRange | null;
  apr_cash_advance: number | null;
  annual_fee: number | null;
  foreign_tx_fee: number | null;
  balance_transfer_fee: number | null;
  signup_bonus: string | null;
  signup_bonus_spend: number | null;
  signup_bonus_value_usd: number | null;
  rewards: Record<string, number>;
  rewards_type: string;
  points_value_cents: number | null;
  credit_score_required: CreditScoreRequired | null;
  perks: string[];
  drawbacks: string[];
  application_url: string;
  last_updated: string;
  rating: number | null;
}

export const CARD_RATE_FIELDS = {
  annual_fee: "Annual fee",
  apr_purchase: "Purchase APR",
  apr_intro: "Introductory APR",
  apr_balance_transfer: "Balance transfer APR",
  balance_transfer_fee: "Balance transfer fee",
  apr_cash_advance: "Cash advance APR",
  cash_advance_fee: "Cash advance fee",
  foreign_tx_fee: "Foreign transaction fee",
} as const;
export type CardTermField = keyof typeof CARD_RATE_FIELDS | "rewards" | "signup_bonus";

/** Missing data stays missing. Explicit issuer disclosures supply qualitative terms. */
export function cardTerm(card: CardData, field: CardTermField): string | null {
  const detail = card.term_details?.[field];
  if (detail) return detail.text;
  switch (field) {
    case "annual_fee": return card.annual_fee == null ? null : card.annual_fee_note || formatAnnualFee(card.annual_fee);
    case "apr_purchase":
    case "apr_balance_transfer": return card[field] ? `${formatAprRange(card[field])} variable` : null;
    case "apr_cash_advance": return card.apr_cash_advance == null ? null : `${formatPct(card.apr_cash_advance)} variable`;
    case "foreign_tx_fee":
    case "balance_transfer_fee": return card[field] == null ? null : formatFeePct(card[field]);
    case "apr_intro": return card.intro_terms || null;
    case "cash_advance_fee": return null;
    case "rewards": return card.rewards_summary || (card.rewards_status === "none" ? "No rewards" : Object.keys(card.rewards).length ? topRewardRate(card) : null);
    case "signup_bonus": return card.signup_bonus || (card.welcome_offer_status === "none" ? "No welcome bonus" : null);
  }
}

export function annualFeeLabel(card: CardData): string {
  return cardTerm(card, "annual_fee") || "Fee details unavailable";
}

export function missingCardTerms(card: CardData): string[] {
  return (Object.keys(CARD_RATE_FIELDS) as Array<keyof typeof CARD_RATE_FIELDS>)
    .filter(field => cardTerm(card, field) == null)
    .map(field => CARD_RATE_FIELDS[field]);
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
  if (card.annual_fee === 0) set.add("no-annual-fee");
  if (card.apr_intro === 0 && (card.apr_intro_months ?? 0) >= 12) set.add("0-apr");
  return Array.from(set);
}

export function fullCardName(card: CardData): string {
  const name = card.name;
  if (name.toLowerCase().includes(card.issuer.toLowerCase())) return name;
  return `${card.issuer} ${name}`;
}

export function formatPct(v: number | null): string {
  if (v == null) return "—";
  // Stored as percent (e.g. 19.24). Strips trailing zeros after decimal.
  return `${v.toFixed(2).replace(/\.?0+$/, "")}%`;
}

export function formatFeePct(v: number | null | undefined): string {
  if (v == null) return "—";
  if (v === 0) return "None";
  // Stored as decimal e.g. 0.05 = 5%
  const pct = v * 100;
  return `${pct.toFixed(pct % 1 === 0 ? 0 : 2)}%`;
}

export function formatAprRange(range: AprRange | null | undefined): string {
  if (!range) return "—";
  if (range.min === range.max) return formatPct(range.min);
  return `${formatPct(range.min)} to ${formatPct(range.max)}`;
}

export function formatAnnualFee(fee: number | null): string {
  if (fee == null) return "—";
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
  if (card.term_details?.rewards) return card.term_details.rewards.text;
  if (card.rewards_summary) return card.rewards_summary;
  if (card.rewards_status === "none") return "No rewards";
  const entries = Object.entries(card.rewards ?? {}).filter(
    ([, v]) => typeof v === "number" && v > 0,
  );
  if (entries.length === 0) {
    return "Reward details unavailable";
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

export function welcomeOffer(card: CardData): string {
  if (card.signup_bonus) return card.signup_bonus;
  if (card.welcome_offer_status === "none") return "No welcome bonus";
  return card.term_details?.signup_bonus?.text || "Public offer details unavailable";
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
