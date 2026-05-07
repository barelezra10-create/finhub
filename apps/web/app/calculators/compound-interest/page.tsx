import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Compound Interest Calculator | Fintiex",
  description:
    "Free compound interest calculator with monthly contributions. See your balance grow year by year. Adjust starting amount, monthly add, APY, and time horizon.",
  alternates: { canonical: "/calculators/compound-interest" },
};

const faqs: FAQItem[] = [
  {
    question: "What APY should I use?",
    answer:
      "For a high-yield savings account or money market, plug in the current rate. As of early 2026 the top HYSAs pay 4.50% to 4.85% APY. For long-horizon investing in a diversified index fund portfolio, the historical real return of the S&P 500 is roughly 7% per year after inflation, or about 10% nominal. Pick what matches your actual account or strategy.",
  },
  {
    question: "Is this the same as my brokerage growth?",
    answer:
      "Roughly, yes, with caveats. This calculator assumes a fixed return rate compounded monthly. Real markets fluctuate. A 7% average over 30 years means some years deliver 25% gains and others lose 30%. The endpoint is similar; the path is not. For savings products with a fixed APY (HYSA, CDs), this calculator is exact.",
  },
  {
    question: "Why monthly compounding?",
    answer:
      "Most U.S. savings products and brokerage accounts compound either monthly or daily. The math difference between monthly and daily compounding at 5% APY over 30 years is roughly 0.3% on the final balance. Monthly compounding is the practical default. The formula used here is FV = P(1+r/n)^(nt) + PMT * [((1+r/n)^(nt)-1)/(r/n)] with n=12.",
  },
  {
    question: "Does this account for inflation?",
    answer:
      "No. The output is nominal dollars. To estimate real (inflation-adjusted) purchasing power, subtract roughly 2.5% from your APY assumption before plugging in. So if you expect 7% nominal returns, model 4.5% to see real growth. Or run two scenarios and compare.",
  },
  {
    question: "Does this handle tax drag?",
    answer:
      "No. The output is pre-tax. In a Roth IRA, 401(k), or HSA the output matches reality. In a taxable brokerage you owe tax on dividends and realized gains as you go. A rough adjustment: reduce your assumed return by 0.5% to 1.0% per year to model tax drag in a taxable account. Tax-advantaged accounts pay full unhindered compounding.",
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
          { name: "Compound Interest", href: "/calculators/compound-interest" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Compound Interest
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Compound interest calculator.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Watch a starting balance plus monthly contributions grow into something serious. Adjust APY and time horizon. See exactly where the money comes from: contributions versus compounding interest.
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
                The compound interest formula with regular deposits.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Compounding means your interest earns interest. The longer you let the cycle run, the more interest is earning interest on interest on interest. The closed-form formula for a starting balance plus regular deposits looks like this:
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>FV = P(1+r/n)^(nt) + PMT * [((1+r/n)^(nt)-1)/(r/n)]</code>
              </pre>
              <p>
                Where FV is the future value, P is the starting principal, r is the annual rate (as a decimal), n is the number of compounding periods per year (12 for monthly), t is years, and PMT is the monthly contribution. This calculator simulates month by month with the same math, which makes the year-by-year table easy to render.
              </p>
              <p>
                The headline insight: at $5K starting and $500 per month for 20 years at 5%, you contribute roughly $125K of your own money. The final balance is around $210K. The other $85K is pure compounding interest. Stretch the same plan to 40 years and the contribution stays at $245K, but the balance crosses $750K. Time is the critical variable.
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
              How to actually capture this growth.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Automate the monthly contribution. Set an automatic transfer to fire on payday. Hand-keying a deposit every month means you will skip months. Skipped months break the compounding curve. The Federal Reserve&rsquo;s Survey of Consumer Finances shows that automated savers reach long-term goals roughly 3x more often than manual savers.
            </p>
            <p>
              Match the account to the time horizon. For 0 to 12 month money, use a high-yield savings account at 4.5% to 4.85% APY. For 1 to 5 year money, a CD ladder locks in current rates. For 5+ year money in a tax-advantaged account, equity index funds historically beat fixed-rate products by a wide margin, with volatility as the trade-off.
            </p>
            <p>
              Capture the employer 401(k) match first. If your employer matches 50% of contributions up to 6% of salary, that is an instant 50% return on every dollar you contribute up to that cap. No fixed-rate product or market return matches it. The match is usually the highest-return investment available to you, period.
            </p>
            <p>
              Bump the contribution with raises. Each time your salary goes up, raise your monthly contribution by half the raise amount. You still feel the income gain, but your savings rate climbs over time without any pain. The compounding curve for someone who does this looks dramatically different at year 25 than for someone who keeps a fixed dollar contribution forever.
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
            Park the money where it earns. Today&rsquo;s top savings accounts.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/savings-goal" className="pill pill-ink">
              Savings goal
              <span aria-hidden>→</span>
            </Link>
            <Link href="/savings" className="pill pill-ghost">
              Top HYSA & CD rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
