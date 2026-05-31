import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  FAQPageSchema,
  BreadcrumbListSchema,
  FinancialProductSchema,
  type FAQItem,
} from "@/components/schemas";
import {
  loadStudentLoan,
  loadStudentLoans,
  formatAprRange,
  formatCurrency,
  formatLoanAmountRange,
  formatTermYears,
  type StudentLoan,
} from "@/lib/loans";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return loadStudentLoans().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const loan = loadStudentLoan(slug);
  if (!loan) return { title: "Student Loan Review | Fintiex" };
  const title = `${loan.lender} Student Loan Review | Fintiex`;
  const desc = `${loan.lender} ${loan.product_name}: ${formatAprRange(loan.apr_range)} APR on ${formatTermYears(loan.repayment_terms_years)} terms. Cosigner, fees, and verdict.`;
  return {
    title: title.length > 60 ? title.slice(0, 57) + "..." : title,
    description: desc.length > 160 ? desc.slice(0, 157) + "..." : desc,
    alternates: { canonical: `/loans/student/${loan.slug}` },
  };
}

function buildFaqs(loan: StudentLoan): FAQItem[] {
  const name = loan.lender;
  const apr = formatAprRange(loan.apr_range);
  const term = formatTermYears(loan.repayment_terms_years);
  const isRefi = loan.type === "refinance";
  const productLabel = isRefi ? "refinance loan" : "private student loan";

  return [
    {
      question: `Is the ${name} ${productLabel} a good choice?`,
      answer: `${name} earned ${loan.rating.toFixed(1)} out of 5 in our 2026 review. APRs run ${apr} on ${term} terms with ${loan.origination_fee === 0 ? "no origination fee" : `a ${loan.origination_fee} percent origination fee`}. The product fits ${isRefi ? "graduates with stable income and good credit" : "students who need to fill a gap after federal aid"}.`,
    },
    {
      question: `What credit score do I need for a ${name} loan?`,
      answer: `${name} requires a minimum FICO of ${loan.credit_score_required.min}. The lowest advertised rate typically goes to applicants with ${loan.credit_score_required.recommended}+ FICO, stable income, and ${isRefi ? "a completed degree" : "a creditworthy cosigner"}. The CFPB recommends prequalifying with a soft pull before any formal application.`,
    },
    {
      question: isRefi
        ? `Should I refinance federal student loans with ${name}?`
        : `Do I need a cosigner for a ${name} loan?`,
      answer: isRefi
        ? `Only if you are sure you will not need federal protections. Refinancing federal loans into a ${name} private loan permanently eliminates access to income-driven repayment, Public Service Loan Forgiveness, and federal deferment. The Department of Education and CFPB both recommend keeping federal loans federal unless the rate savings clearly outweigh the lost benefits.`
        : `Most undergraduates do. ${name} does not technically require a cosigner${loan.cosigner_release_after_months ? `, and it allows cosigner release after ${loan.cosigner_release_after_months} months of on-time payments` : ""}. Without a cosigner, you need strong personal credit and income to qualify for the best rate. Adding a creditworthy cosigner often cuts the APR by several percentage points.`,
    },
    {
      question: `Does ${name} charge fees on a ${productLabel}?`,
      answer: `${name} charges ${loan.origination_fee === 0 ? "no origination fee and no application fee" : `an origination fee of ${loan.origination_fee} percent`}, and ${loan.prepayment_penalty ? "may charge a prepayment penalty" : "no prepayment penalty"}. Late fees: ${loan.late_fee.toLowerCase()}. The Federal Reserve recommends comparing APR rather than the headline interest rate, because APR rolls in origination.`,
    },
    {
      question: `What loan amounts and terms does ${name} offer?`,
      answer: `${name} ${productLabel}s range from ${formatLoanAmountRange(loan.loan_amount_min, loan.loan_amount_max)}. Repayment terms are ${term}. ${isRefi ? "Longer terms lower the monthly payment but increase total interest paid." : "Choose the shortest term you can afford to minimize lifetime interest."}`,
    },
    {
      question: `Does ${name} offer forbearance or hardship pause?`,
      answer: loan.forbearance_available
        ? `Yes. ${name} offers forbearance during financial hardship. Forbearance pauses payments but interest typically continues to accrue. The CFPB warns that forbearance should be a last resort because unpaid interest can capitalize and increase your total balance.`
        : `${name} does not offer formal forbearance on this product. If you anticipate financial hardship, a federal loan with income-driven repayment may be the safer borrowing choice.`,
    },
  ];
}

function whoItsFor(loan: StudentLoan): string {
  const isRefi = loan.type === "refinance";
  const min = loan.credit_score_required.min;
  const rec = loan.credit_score_required.recommended;
  if (isRefi) {
    return `${loan.lender} fits graduates with FICO ${min}+ (ideally ${rec}+), stable W-2 or self-employed income, and only private loans (or federal loans you do not need income-driven repayment for). It is not a fit if you may need Public Service Loan Forgiveness, are early in a career with unstable income, or have a FICO below ${min}.`;
  }
  return `${loan.lender} fits students who have maxed out federal aid and need ${formatLoanAmountRange(loan.loan_amount_min, loan.loan_amount_max)} in additional borrowing. Best for applicants with FICO ${min}+ (or a cosigner with that profile), enrolled at least half-time at a Title IV school. Not a fit if you have not first applied for federal Direct Subsidized and Unsubsidized loans through FAFSA.`;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const loan = loadStudentLoan(slug);
  if (!loan) notFound();

  const faqs = buildFaqs(loan);
  const apr = formatAprRange(loan.apr_range);
  const amount = formatLoanAmountRange(loan.loan_amount_min, loan.loan_amount_max);
  const term = formatTermYears(loan.repayment_terms_years);
  const orig = loan.origination_fee === 0 ? "None" : `${loan.origination_fee}%`;
  const isRefi = loan.type === "refinance";

  return (
    <article className="bg-bg">
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Student Loans", href: "/loans/student" },
          { name: loan.lender, href: `/loans/student/${loan.slug}` },
        ]}
      />
      <FinancialProductSchema
        name={`${loan.lender} ${loan.product_name}`}
        description={`${loan.lender} ${isRefi ? "student loan refinance" : "private student loan"} with APR ${apr}, loan amounts ${amount}, terms ${term}.`}
        slug={`/loans/student/${loan.slug}`}
        brandName={loan.lender}
        category={isRefi ? "Student Loan Refinance" : "Private Student Loan"}
        apr={`${loan.apr_range.min}-${loan.apr_range.max}`}
        ratingValue={Math.round(loan.rating * 2)}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-12">
          <div className="mb-4 text-xs font-mono text-mute uppercase tracking-wider">
            <Link href="/loans" className="u-link">Loans</Link>{" / "}
            <Link href="/loans/student" className="u-link">Student</Link>
          </div>
          <span className={`chip ${isRefi ? "chip-lime" : "chip-violet"} mb-5`}>
            <span className="pulse-dot" /> {isRefi ? "Student loan refinance" : "Private student loan"} review
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-3xl">
            {loan.lender} {loan.product_name} Review (2026)
          </h1>
          <p className="text-lg text-mute max-w-2xl leading-relaxed mb-6">
            {loan.lender} earned{" "}
            <span className="font-mono tabular font-semibold text-ink">
              {loan.rating.toFixed(1)} / 5
            </span>{" "}
            in our 2026 review. APRs run {apr} on {term} terms, with loan amounts {amount}.
            {isRefi
              ? " Best for graduates with stable income who want to lower a private loan rate."
              : " Best as a gap filler after federal aid for students who need more funding."}
          </p>
          <div className="text-xs font-mono text-mute uppercase tracking-wider mb-6">
            By the Fintiex Loan Desk · Updated {loan.last_updated}
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={loan.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-lime"
            >
              Check rates at {loan.lender} <span aria-hidden>↗</span>
            </a>
            <Link href="/loans/student" className="pill pill-ghost">
              Compare student lenders
            </Link>
          </div>
        </div>
      </section>

      {/* KEY STATS CARD */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">TL;DR stats</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="APR range" value={apr} mono />
            <Stat label="Loan amount" value={amount} mono />
            <Stat label="Term range" value={term} mono />
            <Stat label="Origination fee" value={orig} mono />
          </div>
          <div className="mt-6 pt-6 border-t border-line grid grid-cols-2 md:grid-cols-4 gap-8 text-sm">
            <KV label="Loan type" value={isRefi ? "Refinance" : "Private"} />
            <KV label="Min credit score" value={String(loan.credit_score_required.min)} />
            <KV label="Cosigner release" value={loan.cosigner_release_after_months ? `${loan.cosigner_release_after_months} months` : "N/A"} />
            <KV label="Forbearance" value={loan.forbearance_available ? "Available" : "Not offered"} />
          </div>
        </div>
      </section>

      {/* PROS / CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {loan.perks.map((perk) => (
                <li key={perk} className="flex gap-3">
                  <span className="text-mint font-bold">+</span>
                  <span>{perk}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              {loan.drawbacks.map((drawback) => (
                <li key={drawback} className="flex gap-3">
                  <span className="text-rose font-bold">-</span>
                  <span>{drawback}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* RATE AND FEES TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rates and fees</h2>
        <div className="card-flush overflow-hidden">
          <FeeRow label="APR range" value={apr} highlight />
          <FeeRow label="APR type" value={loan.apr_type === "both" ? "Fixed and variable" : titleCase(loan.apr_type)} />
          <FeeRow label="Origination fee" value={orig} highlight={loan.origination_fee === 0} />
          <FeeRow label="Late fee" value={loan.late_fee} />
          <FeeRow label="Prepayment penalty" value={loan.prepayment_penalty ? "Yes" : "None"} highlight={!loan.prepayment_penalty} />
          <FeeRow label="Loan amount range" value={amount} />
          <FeeRow label="Repayment terms" value={term} />
          <FeeRow label="Forbearance" value={loan.forbearance_available ? "Available" : "Not offered"} />
          <FeeRow label="Minimum FICO" value={String(loan.credit_score_required.min)} last />
        </div>
        <p className="text-sm text-mute mt-4 max-w-3xl leading-relaxed">
          Variable APRs typically start lower than fixed but can rise over the life of the loan. The Federal Reserve recommends fixed rates for repayment plans longer than 5 years.
        </p>
      </section>

      {/* IN-SCHOOL PAYMENT OPTIONS (private only) */}
      {!isRefi && loan.in_school_payment_options.length > 0 && (
        <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
          <h2 className="font-display font-bold text-3xl tracking-tight mb-6">In-school payment options</h2>
          <div className="flex flex-wrap gap-2 max-w-3xl">
            {loan.in_school_payment_options.map((opt) => (
              <span key={opt} className="chip chip-mute">{opt}</span>
            ))}
          </div>
          <p className="text-mute text-base mt-5 max-w-3xl leading-relaxed">
            Deferring all payments costs the most in lifetime interest because interest accrues and capitalizes when you graduate. Interest-only payments cost less. A fixed $25 monthly payment is the cheapest in-school option that still keeps the balance from growing.
          </p>
        </section>
      )}

      {/* WHO IT IS FOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="card p-7 border-l-4 border-lime">
          <div className="chip chip-lime mb-4">Who it is for</div>
          <p className="text-[1.0625rem] leading-relaxed">{whoItsFor(loan)}</p>
        </div>
      </section>

      {/* HOW TO APPLY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to apply for a {loan.lender} loan</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            {isRefi
              ? "Refinancing takes 15 to 30 minutes online. You will need a recent pay stub, last year's tax return, loan payoff statements for each loan you want to refinance, and a government ID. The Department of Education recommends getting a payoff quote from each current servicer before applying."
              : "Applying takes about 15 minutes online. You will need your school name and enrollment status, Social Security number, government ID, and cosigner info (if you have one). The U.S. Department of Education recommends submitting FAFSA first to confirm what federal aid you can get before borrowing privately."}
          </p>
        </div>
        <ol className="space-y-3 text-[0.9375rem] max-w-2xl text-ink-soft">
          {isRefi ? (
            <>
              <Step n={1}>Pull payoff quotes from every current servicer to know your exact balances and payoff numbers.</Step>
              <Step n={2}>Soft-pull prequalify on the {loan.lender} site to see your estimated APR with no credit impact.</Step>
              <Step n={3}>Compare against 2 or 3 other refinance lenders. The CFPB confirms rate shopping within 14 to 45 days does not extra-damage credit.</Step>
              <Step n={4}>Submit the formal application with income docs. This triggers a hard inquiry that drops FICO 2 to 5 points.</Step>
              <Step n={5}>Sign the agreement; {loan.lender} pays off your old loans directly. Confirm the old loans show as paid before you stop making payments to those servicers.</Step>
            </>
          ) : (
            <>
              <Step n={1}>Submit FAFSA at studentaid.gov to confirm federal aid eligibility before borrowing privately.</Step>
              <Step n={2}>Prequalify on the {loan.lender} site (soft pull) to see estimated APR with and without a cosigner.</Step>
              <Step n={3}>Compare against 2 or 3 other private lenders. The CFPB confirms a 14- to 45-day shopping window adds no extra credit damage.</Step>
              <Step n={4}>Submit the formal application with cosigner info if needed. Triggers a hard inquiry on both you and the cosigner.</Step>
              <Step n={5}>School certification happens next; the lender confirms enrollment and cost. Funds disburse directly to your school.</Step>
            </>
          )}
        </ol>
        <div className="mt-6">
          <a
            href={loan.application_url}
            target="_blank"
            rel="nofollow noopener noreferrer"
            className="pill pill-ink"
          >
            Start a {loan.lender} application <span aria-hidden>↗</span>
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently asked questions</h2>
        <div className="space-y-6 max-w-3xl">
          {faqs.map((faq) => (
            <div key={faq.question} className="border-b border-line pb-6">
              <div className="font-display font-semibold text-lg mb-2">{faq.question}</div>
              <div className="text-mute text-[0.9375rem] leading-relaxed">{faq.answer}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          <Link href="/calculators/personal-loan-payoff" className="card p-6 block group">
            <span className="chip chip-violet mb-3">Loan payoff calculator</span>
            <div className="text-sm text-mute leading-relaxed">Estimate the monthly payment for any APR and term combination.</div>
          </Link>
          <Link href="/loans/by-credit-tier" className="card p-6 block group">
            <span className="chip chip-violet mb-3">Rates by credit tier</span>
            <div className="text-sm text-mute leading-relaxed">Realistic APR ranges for excellent, good, fair, and poor credit.</div>
          </Link>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-ink text-bg">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Ready to check your {loan.lender} rate?
            </h2>
            <p className="text-bg/70 mt-2">
              Soft-pull prequalification takes about 5 minutes. No credit impact to look.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={loan.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-lime"
            >
              Check my rate <span aria-hidden>↗</span>
            </a>
            <Link href="/loans/student" className="pill pill-ghost" style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--color-bg)" }}>
              See other lenders
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value, mono = false }: { label: string; value: string; mono?: boolean }) {
  return (
    <div>
      <div className="text-xs text-mute uppercase tracking-wider font-mono mb-1">{label}</div>
      <div className={`font-display font-extrabold text-xl md:text-2xl ${mono ? "tabular" : ""}`}>{value}</div>
    </div>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-mute mb-1">{label}</div>
      <div className="font-mono tabular font-semibold text-sm">{value}</div>
    </div>
  );
}

function FeeRow({
  label,
  value,
  highlight = false,
  last = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  last?: boolean;
}) {
  return (
    <div className={`grid grid-cols-12 px-6 py-4 items-center ${last ? "" : "border-b border-line-soft"}`}>
      <div className="col-span-6 text-sm text-mute">{label}</div>
      <div className={`col-span-6 text-right font-mono tabular ${highlight ? "font-semibold text-ink" : "text-ink"}`}>
        {value}
      </div>
    </div>
  );
}

function Step({ n, children }: { n: number; children: React.ReactNode }) {
  return (
    <li className="flex gap-4">
      <span className="font-mono tabular text-mute text-sm shrink-0 w-6">{n}.</span>
      <span>{children}</span>
    </li>
  );
}

function titleCase(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
