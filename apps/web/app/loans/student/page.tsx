import Link from "next/link";
import type { Metadata } from "next";
import {
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";
import {
  loadStudentLoans,
  formatAprRange,
  formatCurrency,
  formatTermYears,
} from "@/lib/loans";

export const metadata: Metadata = {
  title: "Best Student Loans 2026: Private & Refinance Rates | Fintiex",
  description:
    "Compare 10 student loan lenders: private loans for undergrads and refinance for grads. Real APRs, cosigner rules, and federal vs private trade-offs.",
  alternates: { canonical: "/loans/student" },
};

const faqItems: FAQItem[] = [
  {
    question: "Should I take federal student loans before private ones?",
    answer:
      "Almost always, yes. Federal loans offer income-driven repayment plans, deferment, forbearance, and forgiveness programs that private loans cannot match. The U.S. Department of Education recommends maxing out federal aid (Direct Subsidized, Unsubsidized, and PLUS) before any private borrowing. Use private loans only to cover the gap after federal aid, scholarships, and savings.",
  },
  {
    question: "When does refinancing student loans make sense?",
    answer:
      "Refinancing makes sense when you have stable income, good credit (typically 670+), and only private loans, or you have federal loans you are willing to give up federal protections on. Refinancing federal loans into a private loan eliminates access to income-driven plans and Public Service Loan Forgiveness (PSLF). The CFPB warns borrowers to weigh the rate savings against the value of lost federal benefits before refinancing.",
  },
  {
    question: "What credit score do I need for a private student loan?",
    answer:
      "Most private lenders want a FICO of 670 or higher for the lowest advertised rates. Lenders like Ascent approve students with scores in the 540 to 620 range using outcomes-based underwriting that weighs GPA, school, and major. Most undergraduates need a cosigner to qualify for competitive rates because they have thin credit files.",
  },
  {
    question: "How does cosigner release work?",
    answer:
      "Many private lenders let you remove your cosigner after a set number of on-time, consecutive monthly payments (typically 12 to 36). The borrower must also pass a credit check on their own at that point. Sallie Mae allows release after 12 payments, College Ave after 24, and Earnest after 36. Cosigner release is not guaranteed; the lender has final say.",
  },
  {
    question: "What is the difference between fixed and variable APR?",
    answer:
      "A fixed APR stays the same for the life of the loan. A variable APR fluctuates with a benchmark rate (typically SOFR) and can rise or fall over time. Variable rates start lower but carry interest rate risk. The Federal Reserve recommends fixed rates for borrowers who plan to repay over more than 5 years, and variable rates only for borrowers who plan a fast payoff.",
  },
  {
    question: "Can I deduct student loan interest on my taxes?",
    answer:
      "Yes. The IRS allows a deduction of up to $2,500 of student loan interest per year, subject to income phase-outs (currently $80,000 single, $165,000 married filing jointly). The deduction applies to both federal and private student loans, and you do not need to itemize to claim it. See IRS Publication 970 for the full rules.",
  },
];

export default function Page() {
  const loans = loadStudentLoans();
  const privateLoans = loans.filter((l) => l.type === "private");
  const refiLoans = loans.filter((l) => l.type === "refinance");

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Loans", href: "/loans" },
          { name: "Student Loans", href: "/loans/student" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Student loans, federal-first
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Student loans for school, refinance, and everything between.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            We compare 10 private and refinance lenders side by side. The Department of Education recommends federal aid first; use these private options to fill the gap or to refinance high-rate debt after you graduate. Always weigh rate savings against the federal protections you give up.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/loans/by-credit-tier" className="pill pill-ink">
              Rates by credit tier
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ghost">
              Loan payoff calculator
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">{loans.length}</span> lenders compared
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">{privateLoans.length}</span> private
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">{refiLoans.length}</span> refinance
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> paid rankings
            </div>
          </div>
        </div>
      </section>

      {/* TOP PICKS TABLE */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Top picks by lender</h2>
            <span className="text-xs font-mono text-mute">Reviewed weekly</span>
          </div>
          <div className="card-flush overflow-hidden">
            <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
              <div className="col-span-5 md:col-span-4">Lender</div>
              <div className="hidden md:block md:col-span-2">Type</div>
              <div className="col-span-4 md:col-span-3 text-right">APR range</div>
              <div className="hidden md:block md:col-span-2 text-right">Min FICO</div>
              <div className="col-span-3 md:col-span-1 text-right">Rating</div>
            </div>
            {loans.map((l, i) => (
              <Link
                key={l.slug}
                href={`/loans/student/${l.slug}`}
                className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
                  i === loans.length - 1 ? "" : "border-b border-line-soft"
                }`}
              >
                <div className="col-span-5 md:col-span-4">
                  <div className="font-display font-semibold text-base">{l.lender}</div>
                  <div className="text-xs text-mute mt-1">{l.product_name}</div>
                </div>
                <div className="hidden md:block md:col-span-2">
                  <span className={`chip ${l.type === "refinance" ? "chip-lime" : "chip-mute"}`}>
                    {l.type === "refinance" ? "Refinance" : "Private"}
                  </span>
                </div>
                <div className="col-span-4 md:col-span-3 text-right font-mono font-semibold tabular text-sm">
                  {formatAprRange(l.apr_range)}
                </div>
                <div className="hidden md:block md:col-span-2 text-right font-mono tabular text-sm text-mute">
                  {l.credit_score_required.min}
                </div>
                <div className="col-span-3 md:col-span-1 text-right font-mono tabular text-sm">
                  {l.rating.toFixed(1)}
                </div>
              </Link>
            ))}
          </div>
          <p className="text-xs text-mute mt-4">
            APRs reflect the published range for qualified borrowers. Actual rate depends on credit, income, school, and cosigner. Prequalify with a soft pull where available.
          </p>
        </div>
      </section>

      {/* FEDERAL VS PRIVATE EXPLAINER */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">Federal vs private</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Always exhaust federal aid first.
            </h2>
            <p className="text-mute leading-relaxed">
              The U.S. Department of Education and CFPB both publish this guidance. Here is the math behind why.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Federal loans: income protection by design</h3>
              <p className="text-mute">
                Federal Direct loans come with income-driven repayment plans (SAVE, IBR, PAYE), which cap payments at 5 to 10 percent of discretionary income. They also offer deferment and forbearance during financial hardship, plus Public Service Loan Forgiveness (PSLF) for government and nonprofit workers. None of these protections exist on a private loan.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Federal loan limits force private borrowing for some</h3>
              <p className="text-mute">
                Dependent undergraduates can borrow up to $31,000 total across all years (only $23,000 of which can be subsidized). For students at private universities or graduate programs with $60,000+ annual costs, federal aid alone will not cover the gap. That is where private loans come in.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Private loans: faster to fund, no income cap</h3>
              <p className="text-mute">
                Private lenders fund based on creditworthiness, not financial need. There is no annual borrowing cap from the lender side (only the school-certified cost of attendance). Approval can happen in days. The trade-off: no federal protections and rate-based pricing that punishes thin credit files.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Rule of thumb from the CFPB</h3>
              <p className="text-mute">
                Borrow federal subsidized first, then federal unsubsidized, then federal PLUS (parent or grad), and only then private. If a private rate beats federal PLUS (currently around 9 percent) and you can repay quickly, the comparison shifts. Always run both scenarios before signing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* REFINANCE VS NEW */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Refinance vs new</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Two very different products.
              </h2>
              <p className="text-mute leading-relaxed">
                A new student loan funds your education. A refinance loan replaces existing student debt. The lenders, the rates, and the credit requirements look nothing alike.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="card p-6">
                <span className="chip chip-violet mb-4">Private (new)</span>
                <h3 className="font-display font-bold text-lg mb-3 tracking-tight">For students still in school</h3>
                <ul className="space-y-2 text-sm text-mute leading-relaxed">
                  <li>Cosigner usually required for undergrads</li>
                  <li>In-school deferment options (deferred, fixed $25, interest-only)</li>
                  <li>APR ranges typically {formatAprRange({ min: 5.37, max: 16.85 })}</li>
                  <li>Top picks: College Ave, Sallie Mae, Earnest, Ascent</li>
                </ul>
              </div>
              <div className="card p-6">
                <span className="chip chip-lime mb-4">Refinance</span>
                <h3 className="font-display font-bold text-lg mb-3 tracking-tight">For graduates with existing debt</h3>
                <ul className="space-y-2 text-sm text-mute leading-relaxed">
                  <li>No cosigner needed if income and credit qualify</li>
                  <li>Replaces federal and private loans with one new private loan</li>
                  <li>APR ranges typically {formatAprRange({ min: 4.49, max: 11.99 })}</li>
                  <li>Top picks: Earnest, SoFi, Splash, Laurel Road, Credible</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-10 card p-6 max-w-3xl">
            <p className="text-sm text-mute leading-relaxed">
              <span className="font-semibold text-ink">CFPB warning: </span>
              Refinancing federal loans into a private loan permanently removes access to income-driven repayment, PSLF, deferment, and forbearance. Once gone, those benefits cannot be restored. Run the lifetime cost of both scenarios before signing a refinance agreement.
            </p>
          </div>
        </div>
      </section>

      {/* PRIVATE PICKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-violet mb-4">Private student loans</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
            Best for in-school borrowing.
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {privateLoans.map((l) => (
            <Link key={l.slug} href={`/loans/student/${l.slug}`} className="card p-6 block group">
              <div className="flex items-center justify-between mb-3">
                <span className="chip chip-violet">{l.lender}</span>
                <span className="font-mono tabular text-sm font-semibold">{l.rating.toFixed(1)} / 5</span>
              </div>
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">{l.product_name}</h3>
              <div className="text-sm text-mute mb-3 leading-relaxed">
                APR {formatAprRange(l.apr_range)} on {formatTermYears(l.repayment_terms_years)} terms.
              </div>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="chip chip-mute">Min FICO {l.credit_score_required.min}</span>
                {l.cosigner_release_after_months && (
                  <span className="chip chip-mute">Cosigner release {l.cosigner_release_after_months} mo</span>
                )}
                {l.origination_fee === 0 && <span className="chip chip-lime">No origination</span>}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* REFINANCE PICKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-lime mb-4">Refinance student loans</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Best for graduates with stable income.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {refiLoans.map((l) => (
              <Link key={l.slug} href={`/loans/student/${l.slug}`} className="card p-6 block group">
                <div className="flex items-center justify-between mb-3">
                  <span className="chip chip-lime">{l.lender}</span>
                  <span className="font-mono tabular text-sm font-semibold">{l.rating.toFixed(1)} / 5</span>
                </div>
                <h3 className="font-display font-bold text-lg mb-2 tracking-tight">{l.product_name}</h3>
                <div className="text-sm text-mute mb-3 leading-relaxed">
                  APR {formatAprRange(l.apr_range)} on {formatTermYears(l.repayment_terms_years)} terms. Min {formatCurrency(l.loan_amount_min)}.
                </div>
                <div className="flex flex-wrap gap-2 text-xs">
                  <span className="chip chip-mute">Min FICO {l.credit_score_required.min}</span>
                  {l.origination_fee === 0 && <span className="chip chip-lime">No origination</span>}
                  {l.forbearance_available && <span className="chip chip-mute">Forbearance</span>}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="mb-8">
          <span className="chip chip-mute mb-4">Tools and related</span>
          <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math, then keep exploring.</h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { label: "Loan payoff calculator", href: "/calculators/personal-loan-payoff", detail: "Estimate your monthly payment for any APR and term." },
            { label: "Rates by credit tier", href: "/loans/by-credit-tier", detail: "Realistic APR ranges for excellent, good, fair, and poor credit." },
            { label: "Personal loans", href: "/loans/personal", detail: "General-purpose loans for any expense." },
            { label: "Debt payoff calculator", href: "/calculators/debt-payoff", detail: "Compare a loan to a balance transfer." },
          ].map((p) => (
            <Link key={p.href} href={p.href} className="card p-6 block group">
              <div className="flex items-center justify-between mb-3">
                <span className="chip chip-violet">{p.label}</span>
                <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
              </div>
              <div className="text-sm text-mute leading-relaxed">{p.detail}</div>
            </Link>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">FAQ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Common questions about student loans.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqItems.map((faq) => (
              <div key={faq.question} className="card p-6">
                <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.question}</h3>
                <p className="text-mute text-sm leading-relaxed">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See your monthly payment by lender.
            </h2>
            <p className="text-ink/70 mt-2">Plug in the loan size and APR. We do the math.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/personal-loan-payoff" className="pill pill-ink">
              Open the calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/loans/by-credit-tier" className="pill pill-ghost">
              Rates by credit tier
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
