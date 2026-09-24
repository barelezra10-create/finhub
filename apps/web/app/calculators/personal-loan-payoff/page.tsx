import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Personal Loan Calculator",
  description:
    "Free personal loan amortization calculator. Enter loan amount, rate, and term in months. See your fixed monthly payment, total interest, and payoff cost.",
  alternates: { canonical: "/calculators/personal-loan-payoff" },
};

const faqs: FAQItem[] = [
  {
    "question": "What rate can I qualify for?",
    "answer": "Use an actual lender quote when modeling repayments. Eligibility and pricing depend on the product and your application; a credit-score band does not establish a guaranteed APR. Check whether preliminary quotes use a soft inquiry."
  },
  {
    "question": "How should I compare a loan with existing debt?",
    "answer": "Compare the same balance using each option\u2019s repayment schedule, fees and total cost. A smaller monthly payment can come from a longer term. Review the full cost before choosing."
  },
  {
    "question": "Are there origination fees?",
    "answer": "Fee conditions differ by offer. Some fees are deducted from the loan proceeds, reducing the amount deposited. SoFi describes both fee and no-fee options. Use the linked personal loan profiles to check provider terms, and review your own disclosure for the exact APR and net proceeds."
  },
  {
    "question": "Can I pay it off early?",
    "answer": "Read the prepayment provision in the actual agreement. Ask how additional payments are applied and request a payoff quote when you are ready to repay the balance."
  },
  {
    "question": "What can I use a personal loan for?",
    "answer": "Permitted uses vary by product. Check the use-of-proceeds restrictions before applying, especially for education, business, property or investment expenses."
  }
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: "Personal Loan Payoff", href: "/calculators/personal-loan-payoff" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Personal Loan
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Personal loan calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Enter the loan amount, your APR, and the term in months. The calculator returns the fixed monthly payment plus the total interest you will pay over the life of the loan.
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
                Standard fixed-rate amortization.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Personal loans use the same amortization equation as a mortgage. Fixed rate, fixed term, fixed monthly payment. The math:
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>M = P * [r(1+r)^n] / [(1+r)^n - 1]</code>
              </pre>
              <p>
                M is the monthly payment, P is the loan amount, r is the monthly rate (annual APR divided by 12), and n is the total number of monthly payments. On a $15,000 loan at 11.5% APR for 60 months, the monthly payment is roughly $330. Total cost over 5 years: $19,800. Total interest: $4,800.
              </p>
              <p>
                Each monthly payment splits between interest (declining over time) and principal (rising over time). Early payments are mostly interest. Late payments are mostly principal. The calculator&rsquo;s total interest figure assumes you make the scheduled payment for the full term. Extra principal payments reduce the total cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Tips</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              How to get a better rate and minimize total cost.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Pre-qualify with three or four lenders before applying. SoFi, LightStream, Marcus, and Discover all offer soft-pull rate quotes that do not affect your credit score. The Consumer Financial Protection Bureau&rsquo;s data shows that getting just three quotes typically saves the median borrower 1.5 to 3 percentage points on APR. On a $15K, 60-month loan, 2 points lower saves roughly $850 in total interest.
            </p>
            <p>
              Shorten the term if you can afford the higher monthly payment. A $15K loan at 11.5% for 36 months has a $495 monthly payment but total interest of $2,800. The same loan at 60 months drops the monthly to $330 but raises total interest to $4,800. The shorter term costs $2,000 less overall.
            </p>
            <p>
              Avoid origination fees when possible. SoFi, LightStream, and Discover charge zero origination fee. Lenders that charge a 5% origination fee on a $15K loan deduct $750 from the disbursement, meaning you receive $14,250 but pay back as if you borrowed $15K. The effective APR is higher than advertised.
            </p>
            <p>
              Set up autopay. Most lenders give a 0.25% to 0.50% APR discount for enrolling in automatic monthly payments from a checking account. On a 60-month loan that discount saves $100 to $200 in total interest. Easy yes if your cash flow is stable.
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
            Compare personal loan rates from 12+ direct lenders today.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Credit card payoff
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans" className="pill pill-ghost">
              Today&rsquo;s loan rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
