import { EditorialNote } from "@/components/editorial-note";
import { UnavailablePersonalLoan } from "@/components/unavailable-personal-loan";
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
  if (!loan) return { title: "Personal Loan Review" };
  if (loan.availability === "unavailable") return {
    title: "Marcus Personal Loans: Status and Servicing",
    description: "Looking for a Marcus personal loan? Read the servicing-transfer information for existing borrowers and compare other borrowing options.",
    alternates: { canonical: `/loans/personal/${loan.slug}` },
  };
  const title = `${loan.lender} Personal Loan Review`;
  const desc = `${loan.lender} personal loans: ${formatAprRange(loan.apr_range)} APR, ${formatCurrency(loan.loan_amount_min)} to ${formatCurrency(loan.loan_amount_max)}. Best for ${loan.best_for.toLowerCase()}.`;
  return {
    title: title.length > 60 ? title.slice(0, 57) + "..." : title,
    description: desc.length > 160 ? desc.slice(0, 157) + "..." : desc,
    alternates: { canonical: `/loans/personal/${loan.slug}` },
  };
}

function buildFaqs(loan: PersonalLoan): FAQItem[] {
  return [
    { question: `What should I compare in a ${loan.lender} offer?`, answer: "Compare APR, fees, net funds received, payment amount and total scheduled payments. A listed range is not a personalized offer or an approval promise." },
    { question: `What credit score does ${loan.lender} require?`, answer: "We have not verified a minimum approval score for this product. Check eligibility directly with the lender; credit history is only part of underwriting." },
    { question: "Will checking rates affect my credit?", answer: "Confirm whether the lender uses a soft inquiry for preliminary quotes and a hard inquiry for a formal application. Do not assume multiple personal loan applications are grouped into one inquiry." },
  ];
}

function whoItsFor(loan: PersonalLoan): string {
  return `Compare ${loan.lender} with alternatives using the offer available to you. Check permitted loan uses, whether a joint application is available, and the payment you can sustain. A credit score alone does not establish suitability or approval.`;
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const loan = loadPersonalLoan(slug);
  if (!loan) notFound();

  if (loan.availability === "unavailable") return <UnavailablePersonalLoan loan={loan} />;

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
            Compare {loan.lender} borrowing costs, repayment terms and application conditions. Figures below are dated records; confirm the offer available to you with the lender.
          </p>
          <div className="text-xs font-mono text-mute uppercase tracking-wider mb-6">
            Published by Fintiex · Record date {loan.last_updated}
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

      <div className="max-w-(--max-w-page) mx-auto px-6">
        <EditorialNote checked={loan.source_checked} />
        <p className="text-sm text-mute mb-6">{loan.source_checked ? loan.audit_note : `Legacy product figures recorded ${loan.last_updated} have not been reverified in this audit. Check the lender’s current disclosures before relying on them.`}{" "}<a className="u-link" href={loan.source_url ?? loan.application_url}>Official lender source</a></p>
      </div>
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
            <KV label="Approval score" value="Not verified" />
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
          <FeeRow label="Minimum FICO" value="Not verified" last />
        </div>
        <p className="text-sm text-mute mt-4 max-w-3xl leading-relaxed">
          Compare APR, fees and total scheduled payments in the lender’s disclosures. Confirm whether fees reduce the funds you receive.
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
            Read the lender’s application instructions for required information, permitted loan uses and credit-check consent. Request a quote where available and compare the full repayment cost before accepting an offer.
          </p>
        </div>
        <ol className="space-y-3 text-[0.9375rem] max-w-2xl text-ink-soft">
          <Step n={1}>Check eligibility and whether a preliminary rate check uses a soft or hard inquiry.</Step>
          <Step n={2}>Compare APR, fees and net proceeds across the offers available to you.</Step>
          <Step n={3}>Choose a repayment amount and term that fit your budget.</Step>
          <Step n={4}>Read the formal application’s credit-check consent and submit accurate information.</Step>
          <Step n={5}>Review the agreement and confirm funding arrangements before accepting.</Step>
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
              Read the lender’s eligibility and credit-check terms before beginning.
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
