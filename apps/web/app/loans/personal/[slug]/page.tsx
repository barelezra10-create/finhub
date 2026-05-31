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
  loadPersonalLoan,
  loadPersonalLoans,
  formatCurrency,
  formatAprRange,
  formatTermMonths,
  formatOriginationFee,
  type PersonalLoan,
} from "@/lib/loans";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return loadPersonalLoans().map((l) => ({ slug: l.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const loan = loadPersonalLoan(slug);
  if (!loan) return { title: "Personal Loan Review | Fintiex" };
  const title = `${loan.lender} Personal Loan Review | Fintiex`;
  const desc = `${loan.lender} personal loans: ${formatAprRange(loan.apr_range)} APR, ${formatCurrency(loan.loan_amount_min)} to ${formatCurrency(loan.loan_amount_max)}. Best for ${loan.best_for.toLowerCase()}.`;
  return {
    title: title.length > 60 ? title.slice(0, 57) + "..." : title,
    description: desc.length > 160 ? desc.slice(0, 157) + "..." : desc,
    alternates: { canonical: `/loans/personal/${loan.slug}` },
  };
}

function buildFaqs(loan: PersonalLoan): FAQItem[] {
  const name = loan.lender;
  const apr = formatAprRange(loan.apr_range);
  const amount = `${formatCurrency(loan.loan_amount_min)} to ${formatCurrency(loan.loan_amount_max)}`;
  const term = formatTermMonths(loan.repayment_terms_months);
  const orig = formatOriginationFee(loan.origination_fee);
  return [
    {
      question: `Is ${name} a good personal loan lender?`,
      answer: `${name} earned ${loan.rating.toFixed(1)} out of 5 in our 2026 review. The loan covers ${amount} with APRs of ${apr} on terms from ${term}. Best for: ${loan.best_for.toLowerCase()}.`,
    },
    {
      question: `What credit score do I need for a ${name} personal loan?`,
      answer: `${name} accepts applicants with a minimum FICO of ${loan.credit_score_required.min}. To qualify for the lowest advertised APR, lenders typically want a score of ${loan.credit_score_required.recommended} or higher plus steady income and a debt-to-income ratio under 40 percent. The CFPB recommends checking your free annual credit report at annualcreditreport.com before you apply.`,
    },
    {
      question: `How fast does ${name} fund a personal loan?`,
      answer: `${name} typically funds approved loans in ${loan.funding_speed.toLowerCase()}. Funding speed depends on how quickly you submit income verification documents and on your bank's deposit processing time. Same-day funding is fastest when you have direct deposit set up with a major bank.`,
    },
    {
      question: `Does ${name} charge an origination fee?`,
      answer: orig === "None"
        ? `No. ${name} does not charge an origination fee, which means the full loan amount is deposited in your account. Pair this with the lack of a prepayment penalty (${loan.prepayment_penalty ? "not offered" : "confirmed"}), and ${name} is one of the lower all-in cost lenders in our 2026 review.`
        : `Yes. ${name} charges an origination fee of ${orig}, which is deducted from your loan proceeds at funding. The Federal Reserve recommends comparing APR (not just the interest rate), because APR rolls origination into the cost calculation.`,
    },
    {
      question: `What is the maximum I can borrow from ${name}?`,
      answer: `${name} personal loans range from ${formatCurrency(loan.loan_amount_min)} up to ${formatCurrency(loan.loan_amount_max)}. The amount you actually qualify for depends on income, debt-to-income ratio, and credit score. Most lenders cap unsecured personal loans at roughly 40 percent of annual gross income.`,
    },
    {
      question: `Does ${name} let me prepay my loan early?`,
      answer: loan.prepayment_penalty
        ? `${name} may charge a prepayment penalty. Read your loan agreement carefully before signing if you plan to pay off early.`
        : `Yes. ${name} has no prepayment penalty, so you can pay extra each month or pay off the loan in full at any time without a fee. Prepaying lowers the total interest you pay across the life of the loan.`,
    },
  ];
}

function whoItsFor(loan: PersonalLoan): string {
  const min = loan.credit_score_required.min;
  const rec = loan.credit_score_required.recommended;
  let tier = "fair";
  if (rec >= 720) tier = "excellent";
  else if (rec >= 680) tier = "good";
  else if (rec >= 600) tier = "fair";
  else tier = "poor";

  return `${loan.lender} fits borrowers with ${tier} credit (FICO ${min}+, ideally ${rec} or higher). The product is best suited for ${loan.best_for.toLowerCase()}. Loan sizes from ${formatCurrency(loan.loan_amount_min)} to ${formatCurrency(loan.loan_amount_max)} cover most common needs: debt consolidation, home improvement, medical bills, and major life events. If your FICO is below ${min}, you will likely need a cosigner, a secured loan, or a different lender entirely.`;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const loan = loadPersonalLoan(slug);
  if (!loan) notFound();

  const faqs = buildFaqs(loan);
  const apr = formatAprRange(loan.apr_range);
  const amount = `${formatCurrency(loan.loan_amount_min)} to ${formatCurrency(loan.loan_amount_max)}`;
  const term = formatTermMonths(loan.repayment_terms_months);
  const orig = formatOriginationFee(loan.origination_fee);

  return (
    <article className="bg-bg">
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Personal Loans", href: "/loans/personal" },
          { name: loan.lender, href: `/loans/personal/${loan.slug}` },
        ]}
      />
      <FinancialProductSchema
        name={`${loan.lender} ${loan.product_name}`}
        description={`${loan.lender} personal loan with APR ${apr}, loan amounts ${amount}, terms ${term}.`}
        slug={`/loans/personal/${loan.slug}`}
        brandName={loan.lender}
        category="Personal Loan"
        apr={`${loan.apr_range.min}-${loan.apr_range.max}`}
        ratingValue={Math.round(loan.rating * 2)}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-12">
          <div className="mb-4 text-xs font-mono text-mute uppercase tracking-wider">
            <Link href="/loans" className="u-link">Loans</Link>{" / "}
            <Link href="/loans/personal" className="u-link">Personal</Link>
          </div>
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Personal loan review
          </span>
          <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight mb-5 max-w-3xl">
            {loan.lender} Personal Loan Review (2026)
          </h1>
          <p className="text-lg text-mute max-w-2xl leading-relaxed mb-6">
            {loan.lender} earned{" "}
            <span className="font-mono tabular font-semibold text-ink">
              {loan.rating.toFixed(1)} / 5
            </span>{" "}
            in our 2026 review. Best for: {loan.best_for.toLowerCase()}. APRs run {apr} on {amount} loans, with funding in {loan.funding_speed.toLowerCase()}.
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
            <Link href="/loans/personal" className="pill pill-ghost">
              Compare top picks
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
            <KV label="Funding speed" value={loan.funding_speed} />
            <KV label="Min credit score" value={String(loan.credit_score_required.min)} />
            <KV label="Late fee" value={loan.late_fee} />
            <KV label="Prepayment penalty" value={loan.prepayment_penalty ? "Yes" : "None"} />
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
          <FeeRow label="Origination fee" value={orig} highlight={orig === "None"} />
          <FeeRow label="Late fee" value={loan.late_fee} />
          <FeeRow label="Prepayment penalty" value={loan.prepayment_penalty ? "Yes" : "None"} highlight={!loan.prepayment_penalty} />
          <FeeRow label="Loan amount range" value={amount} />
          <FeeRow label="Repayment terms" value={term} />
          <FeeRow label="Funding speed" value={loan.funding_speed} />
          <FeeRow label="Minimum FICO" value={String(loan.credit_score_required.min)} last />
        </div>
        <p className="text-sm text-mute mt-4 max-w-3xl leading-relaxed">
          Always compare APR rather than the headline interest rate. The CFPB requires every lender to disclose APR, which folds origination fees into the cost calculation.
        </p>
      </section>

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
            Applying takes about 10 to 15 minutes online. You will need your Social Security number, government ID, last two pay stubs or two years of tax returns, and your bank account details for the deposit. The Federal Reserve recommends checking your free credit report at annualcreditreport.com before you apply so you know what to expect.
          </p>
        </div>
        <ol className="space-y-3 text-[0.9375rem] max-w-2xl text-ink-soft">
          <Step n={1}>Soft-pull prequalify on the {loan.lender} site to see your estimated APR with no impact to your credit score.</Step>
          <Step n={2}>Compare the prequalified APR against two or three other lenders. The CFPB allows a 14- to 45-day rate-shopping window with no extra credit damage.</Step>
          <Step n={3}>Select your loan amount and term. Pick the shortest term you can afford; total interest paid is much lower on shorter terms.</Step>
          <Step n={4}>Submit the formal application with income verification. This triggers a hard inquiry that drops your FICO 2 to 5 points temporarily.</Step>
          <Step n={5}>Review the loan agreement, sign electronically, and wait for funding. {loan.lender} typically deposits in {loan.funding_speed.toLowerCase()}.</Step>
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
            <span className="chip chip-violet mb-3">Personal loan calculator</span>
            <div className="text-sm text-mute leading-relaxed">See your monthly payment for any APR and term combination.</div>
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
            <Link href="/loans/personal" className="pill pill-ghost" style={{ borderColor: "rgba(255,255,255,0.3)", color: "var(--color-bg)" }}>
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
