import type { ProductStatusInfo } from '@/components/product-status';
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
  availability?: "unavailable";
  source_checked?: string;
  source_url?: string;
  slug: string;
  lender: string;
  product_name: string;
  application_url: string;
  last_updated: string;
  checked_profile?: import('@/components/checked-product-profile').CheckedProductProfile;
}

export type StudentLoanType = "private" | "refinance";
export interface CheckedStudentProfile {
  role: string;
  summary: string;
  scope: string;
  facts: { label: string; text: string; source: string }[];
  questions: string[];
  sources: { id: string; label: string; url: string; document_date?: string }[];
}

export interface StudentLoan {
  availability?: "unavailable";
  source_checked?: string;
  status_page?: ProductStatusInfo;
  checked_profile?: CheckedStudentProfile;
  slug: string;
  lender: string;
  product_name: string;
  type: StudentLoanType;
  application_url: string;
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
    (a, b) => a.lender.localeCompare(b.lender)
  );
}

export function loadPersonalLoan(slug: string): PersonalLoan | null {
  return loadPersonalLoans().find((l) => l.slug === slug) ?? null;
}

export function loadStudentLoans(): StudentLoan[] {
  return readJsonDir<StudentLoan>("student-loans").sort(
    (a, b) => a.lender.localeCompare(b.lender) || a.product_name.localeCompare(b.product_name)
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
