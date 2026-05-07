import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "HELOC Payment Calculator | Fintiex",
  description:
    "Free HELOC payment calculator. Simulate the intro period, draw-period interest-only payments, end-of-draw balance, and the fully amortizing repayment phase.",
  alternates: { canonical: "/calculators/heloc" },
};

const faqs: FAQItem[] = [
  {
    question: "What is the difference between the draw period and repayment period?",
    answer:
      "A HELOC has two main phases. The draw period (typically 10 years) is when you can borrow against the line, and most lenders only require interest payments. The repayment period (typically 10 to 20 years) starts after the draw period ends. You can no longer borrow, and the entire remaining balance is amortized into fixed monthly principal-and-interest payments. Payment shock at the start of repayment is the single biggest pitfall of a HELOC.",
  },
  {
    question: "Why does HELOC APR change?",
    answer:
      "Almost all U.S. HELOCs are variable rate, indexed to the Wall Street Journal Prime Rate plus a margin set by the lender. As the Federal Reserve raises or lowers rates, prime moves with it, and your HELOC rate adjusts. As of early 2026 the prime rate is roughly 7.5% and most HELOC margins run 1.5 to 2.5 percentage points on top, putting national average HELOC APRs near 9.0% to 9.75%. Some lenders cap the lifetime maximum APR; check your disclosure.",
  },
  {
    question: "Should I get a HELOC or a home equity loan?",
    answer:
      "A home equity loan is a fixed-rate, fixed-payment second mortgage disbursed in a lump sum. A HELOC is a variable-rate revolving line you draw on as needed. Choose a home equity loan if you have one large project with a known cost (full kitchen remodel, debt consolidation). Choose a HELOC if you want flexibility for ongoing or uncertain expenses (multi-phase renovation, a tuition runway, an emergency reserve). HELOC interest is only charged on the drawn balance.",
  },
  {
    question: "Is HELOC interest tax-deductible?",
    answer:
      "Under the Tax Cuts and Jobs Act of 2017 and the rules in effect through 2026, HELOC interest is only deductible if the loan proceeds are used to buy, build, or substantially improve the home that secures the loan. HELOC interest used for debt consolidation, vehicles, tuition, or other personal expenses is no longer deductible. The combined mortgage-plus-HELOC balance must also stay under the $750,000 mortgage debt cap. Talk to a CPA before claiming.",
  },
  {
    question: "What is a HELOC intro APR and how does it work?",
    answer:
      "Many lenders offer a promotional rate (often 0% to 5.99%) for the first 6 to 18 months to attract new customers. The promotional rate applies only to the balance drawn in that window. After the intro period ends, the entire balance, drawn or future, accrues at the standard variable rate. The intro period is real savings if you draw heavily up front and pay it down fast. It is a trap if you assume the low rate continues forever.",
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
          { name: "HELOC", href: "/calculators/heloc" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> HELOC
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            HELOC payment calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Enter your line size, current balance, intro APR, and variable APR. See the monthly payment in each phase: intro period, draw period, and the amortizing repayment that starts when the draw ends.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">3</span> phase breakdown
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
                Two formulas, three phases.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                During the draw period, most HELOCs require interest-only payments. The math is simple multiplication:
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`Interest-only monthly = Balance * APR / 12

Amortizing monthly = P * [r(1+r)^n] / [(1+r)^n - 1]`}</code>
              </pre>
              <p>
                On a $30,000 drawn balance at 9.5% APR, the interest-only payment is $237.50 per month. Once the draw period ends, the same $30,000 balance gets amortized over the repayment term (often 20 years), which raises the monthly to roughly $280. If your balance grew during the draw period because you kept borrowing, the payment shock is much larger.
              </p>
              <p>
                The repayment-period number on the right is the one to plan around. That is the payment you will owe every month for 20 years after the draw window closes. If it would strain your budget at today&rsquo;s variable rate, raise the rate by 2 points and check whether the higher number still fits.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIPS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 md:col-span-4">
            <span className="chip chip-lime mb-4">Common mistakes</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              How HELOCs trip up smart homeowners.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Treating the interest-only payment as the real cost. The interest-only payment during the draw period is artificially low. It does not reduce your principal at all. If you borrow $40,000 and pay only interest for 10 years, you still owe $40,000 on day one of repayment, plus a much larger required monthly payment for the next 20 years.
            </p>
            <p>
              Maxing the line during a low intro APR. A promotional 0% APR for 12 months feels free. It is not. Whatever you borrow stays on the balance and starts accruing the variable APR the day the intro ends. Plan to pay the intro draw down to zero before month 13, or treat the intro APR as a small bonus rather than the main reason to borrow.
            </p>
            <p>
              Forgetting that variable means variable. HELOC APRs adjust monthly with the WSJ Prime Rate. If the Fed raises rates by 1.5 percentage points over a 2-year stretch, your minimum monthly payment goes up by the same proportion. Stress test the math at +2 percentage points before committing.
            </p>
            <p>
              Not reading the freeze and reduction clauses. Lenders can cap or freeze your line if your home value drops or your credit score falls. The Federal Reserve&rsquo;s Regulation Z allows this. If you are counting on the unused portion of the line as an emergency reserve, it may not be there when you need it.
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
            Compare HELOCs to a cash-out refi before you sign anything.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/refinance-break-even" className="pill pill-ink">
              Refi break-even
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/mortgage-payment" className="pill pill-ghost">
              Mortgage calculator
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
