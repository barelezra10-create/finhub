import fs from "fs";
import path from "path";

const ROOT = path.join(process.cwd(), "data/loans");

export interface APRRange {
  min: number;
  max: number;
}

export interface CreditScoreRange {
  min: number;
  recommended: number;
}

export interface OriginationFeeRange {
  min: number;
  max: number;
}

export interface PersonalLoan {
  slug: string;
  lender: string;
  product_name: string;
  apr_range: APRRange;
  loan_amount_min: number;
  loan_amount_max: number;
  repayment_terms_months: number[];
  origination_fee: OriginationFeeRange;
  prepayment_penalty: boolean;
  late_fee: string;
  funding_speed: string;
  credit_score_required: CreditScoreRange;
  best_for: string;
  perks: string[];
  drawbacks: string[];
  application_url: string;
  rating: number;
  last_updated: string;
}

export type StudentLoanType = "private" | "refinance";
export type StudentAprType = "fixed" | "variable" | "both";

export interface StudentLoan {
  slug: string;
  lender: string;
  product_name: string;
  type: StudentLoanType;
  apr_range: APRRange;
  apr_type: StudentAprType;
  loan_amount_min: number;
  loan_amount_max: number | null;
  repayment_terms_years: number[];
  cosigner_required: boolean;
  cosigner_release_after_months: number | null;
  origination_fee: number;
  prepayment_penalty: boolean;
  late_fee: string;
  forbearance_available: boolean;
  in_school_payment_options: string[];
  credit_score_required: CreditScoreRange;
  perks: string[];
  drawbacks: string[];
  application_url: string;
  rating: number;
  last_updated: string;
}

function readJsonDir<T>(rel: string): T[] {
  const abs = path.join(ROOT, rel);
  if (!fs.existsSync(abs)) return [];
  return fs
    .readdirSync(abs)
    .filter((f) => f.endsWith(".json"))
    .map((f) => JSON.parse(fs.readFileSync(path.join(abs, f), "utf8")) as T);
}

export function loadPersonalLoans(): PersonalLoan[] {
  return readJsonDir<PersonalLoan>("personal-loans").sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
  );
}

export function loadPersonalLoan(slug: string): PersonalLoan | null {
  return loadPersonalLoans().find((l) => l.slug === slug) ?? null;
}

export function loadStudentLoans(): StudentLoan[] {
  return readJsonDir<StudentLoan>("student-loans").sort(
    (a, b) => (b.rating ?? 0) - (a.rating ?? 0)
  );
}

export function loadStudentLoan(slug: string): StudentLoan | null {
  return loadStudentLoans().find((l) => l.slug === slug) ?? null;
}

export function formatCurrency(n: number): string {
  return "$" + n.toLocaleString("en-US");
}

export function formatLoanAmountRange(min: number, max: number | null): string {
  if (max == null) return `${formatCurrency(min)}+`;
  return `${formatCurrency(min)} to ${formatCurrency(max)}`;
}

export function formatAprRange(r: APRRange): string {
  return `${r.min.toFixed(2)}% to ${r.max.toFixed(2)}%`;
}

export function formatTermMonths(months: number[]): string {
  if (!months || months.length === 0) return "Varies";
  const minYears = Math.min(...months) / 12;
  const maxYears = Math.max(...months) / 12;
  const fmt = (n: number) =>
    Number.isInteger(n) ? String(n) : n.toFixed(1);
  return `${fmt(minYears)} to ${fmt(maxYears)} years`;
}

export function formatTermYears(years: number[]): string {
  if (!years || years.length === 0) return "Varies";
  return `${Math.min(...years)} to ${Math.max(...years)} years`;
}

export function formatOriginationFee(
  fee: OriginationFeeRange | number | undefined
): string {
  if (fee == null) return "None";
  if (typeof fee === "number") {
    return fee === 0 ? "None" : `${fee}%`;
  }
  if (fee.min === 0 && fee.max === 0) return "None";
  if (fee.min === fee.max) return `${fee.min}%`;
  return `${fee.min}% to ${fee.max}%`;
}

export function personalLoanHref(slug: string): string {
  return `/loans/personal/${slug}`;
}

export function studentLoanHref(slug: string): string {
  return `/loans/student/${slug}`;
}
