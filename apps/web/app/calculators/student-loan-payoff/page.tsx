import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Student Loan Payoff Calculator: Grace, Deferment, APR | Fintiex",
  description:
    "Free student loan payoff calculator. Enter loan amount, rate, term, grace, deferment, and capitalization. See your monthly payment, total interest, and full payoff cost.",
  alternates: { canonical: "/calculators/student-loan-payoff" },
};

const faqs: FAQItem[] = [
  {
    question: "Why does the grace period matter?",
    answer:
      "Most federal student loans grant a 6-month grace period after you leave school. During that time, you do not have to make payments. But for unsubsidized federal loans and private loans, interest still accrues. When grace ends, the unpaid interest is usually added to your principal (capitalized), which means you pay interest on interest for the rest of the loan. The calculator above models both options.",
  },
  {
    question: "What is interest capitalization and why is it expensive?",
    answer:
      "Capitalization is when unpaid interest gets added to your principal balance. After capitalization, future interest is calculated on the new, larger balance. On a $35,000 loan at 6.5% with a 6-month grace, about $1,138 of interest accrues. If capitalized, your starting balance becomes $36,138, and you pay interest on that extra $1,138 for the next 10 years. Avoiding capitalization (by paying interest during grace) saves around $400 to $600 on a typical loan.",
  },
  {
    question: "How is the federal student loan interest rate set?",
    answer:
      "Federal student loan rates are set every May 1 for the academic year starting July 1, based on the 10-year Treasury auction rate plus a margin. For 2025 to 2026, undergraduate Direct Subsidized and Unsubsidized loans carry 6.53% APR, graduate Direct Unsubsidized loans carry 8.08%, and Direct PLUS loans carry 9.08%. Private student loan rates depend on credit score and range from around 4% (excellent credit, variable) to 16% (fair credit, fixed).",
  },
  {
    question: "What is the difference between a standard and extended repayment plan?",
    answer:
      "The federal Standard Repayment Plan runs 10 years with fixed monthly payments. The Extended Repayment Plan stretches to 25 years with lower monthly payments but much more total interest. On a $35,000 loan at 6.53%, Standard costs $396 a month and about $12,500 in interest. Extended costs $237 a month but about $36,200 in interest, nearly triple. Income-Driven Repayment (SAVE, IBR, PAYE) can lower payments further but extends the term and may require taxes on forgiven amounts. Federal Student Aid&apos;s loan simulator at studentaid.gov shows your specific options.",
  },
  {
    question: "Should I refinance my federal loans into private?",
    answer:
      "Usually no, unless you have very high private rates already and your federal balance is small. Refinancing federal loans into private loans permanently removes access to income-driven plans, deferment, loan forgiveness (PSLF), and the federal forbearance options that were so valuable during the pandemic. Refinance private to private (or private to private) makes sense when the new rate is at least 1 to 2 points lower and you do not need the federal protections.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: "Student Loan Payoff", href: "/calculators/student-loan-payoff" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Student Loan
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Student loan payoff calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Type in the loan amount, your APR, the repayment term, and any grace or deferment periods. The calculator shows the monthly payment, the interest that accrues during the hold, and what capitalization costs over the life of the loan.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> email walls
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> popups
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">100%</span> formula visible
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-16">
        <Calculator />
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="chip chip-mute mb-4">How this works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Standard amortization plus a grace adjustment.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Interest accrues every month at the daily periodic rate (APR divided by 12). During grace and deferment, no payments are required, but for unsubsidized loans, the interest piles up. If you elect capitalization (the default on most federal unsubsidized loans), that accrued interest is added to the principal when repayment begins.
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`interest_during_hold = principal * (APR / 12) * grace_months
starting_balance = principal + interest_during_hold (if capitalized)
monthly = P * [r(1+r)^n] / [(1+r)^n - 1]
where P = starting_balance, r = APR/12, n = term * 12`}</code>
              </pre>
              <p>
                On a $35,000 federal Direct Unsubsidized loan at 6.53% with a 6-month grace and capitalization, $1,143 of interest accrues during grace, the starting balance becomes $36,143, the monthly payment is about $410, and the total interest paid over 10 years is roughly $13,038.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Cut total interest</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Three moves that save thousands.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Pay interest during grace. On a $35,000 loan at 6.53%, paying interest during the 6-month grace period (about $190/month) avoids capitalization and saves about $400 in lifetime interest. The savings grow with the loan size and the grace length.
            </p>
            <p>
              Set up auto-debit for the 0.25% rate discount. Federal Direct Loans give a 0.25 percentage point rate reduction for enrolling in autopay. On a 10-year $35,000 loan, that saves about $480 in interest. Almost every private lender offers the same discount.
            </p>
            <p>
              Make one extra payment per year. A single extra monthly payment per year on a 10-year loan effectively shaves about 14 months off the term and saves roughly $1,500 in interest on a $35,000 loan at 6.53%. You can split the extra payment across 12 months to feel less of a budget hit.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-5 max-w-3xl">
            {faqs.map((f) => (
              <div key={f.question} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2">{f.question}</h3>
                <p className="text-ink-soft leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight max-w-2xl leading-tight">
            Compare student loan refinance versus consolidating with a personal loan.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Personal loan calc
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/calculators/debt-payoff" className="pill pill-ghost">
              Debt payoff
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
