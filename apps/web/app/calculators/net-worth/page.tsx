import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Net Worth Calculator | Fintiex",
  description:
    "Free net worth calculator. List your assets and liabilities in six categories each. See total assets, total liabilities, and your net worth (assets minus debts).",
  alternates: { canonical: "/calculators/net-worth" },
};

const faqs: FAQItem[] = [
  {
    question: "How do I value real estate I own?",
    answer:
      "Use the current fair market value, not the purchase price. The simplest sources are Zillow Zestimate or Redfin Estimate as a starting point, then adjust based on recent comparable sales in your neighborhood. For a more conservative number, use the most recent county tax assessor value (which usually runs 10% to 20% below market). Subtract the mortgage balance separately on the liabilities side. Do not net the equity in a single field.",
  },
  {
    question: "Should I include retirement accounts at the full balance or after taxes?",
    answer:
      "List the full pre-tax balance shown on your statement. The standard convention used by the Federal Reserve&rsquo;s Survey of Consumer Finances is to use the gross balance, not the after-tax estimate. The reason: withdrawal tax rates depend on your income in the year you eventually withdraw, which is unknowable today. Just remember when planning that traditional 401(k) and IRA balances will be taxed as ordinary income at withdrawal.",
  },
  {
    question: "What is a healthy net worth for my age?",
    answer:
      "The Federal Reserve&rsquo;s 2022 Survey of Consumer Finances reports U.S. median net worth by age: under 35 is roughly $39K, 35 to 44 is $135K, 45 to 54 is $247K, 55 to 64 is $364K, and 65 to 74 is $410K. Means run several times higher because of wealth concentration. A common rule of thumb: net worth should equal annual pre-tax income times age divided by 10. So a 40-year-old earning $100K should target roughly $400K. Treat targets as benchmarks, not verdicts.",
  },
  {
    question: "Are my inputs saved between visits?",
    answer:
      "No. Every calculator on Fintiex is fully client-side and nothing is stored in a database. This net worth tracker also does not save to your browser yet. If you close the tab the numbers reset. Local-storage persistence and a multi-snapshot history view are on the Phase 2 roadmap. For now, screenshot or copy the numbers into a spreadsheet to track over time.",
  },
  {
    question: "How often should I update my net worth?",
    answer:
      "Quarterly is enough for most people. Net worth is a stock measure, so checking it more often than the underlying inputs change adds noise without insight. Cash and credit card balances move daily, but retirement and home equity move slowly. Pick the same date each quarter (start of the month works well), update everything, and write the number down. Year-over-year change is the metric that matters.",
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
          { name: "Net Worth", href: "/calculators/net-worth" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Net Worth
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Net worth tracker.
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            List what you own and what you owe in six categories on each side. The calculator returns your total assets, total liabilities, and your net worth. Inputs not saved between sessions.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">12</span> line items
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> popups
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> data sent
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
                Assets minus liabilities. That is it.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                Net worth is the simplest measure of personal financial health. It is what you would have left after liquidating everything you own and paying off everything you owe. The formula:
              </p>
              <pre className="bg-ink text-bg p-5 rounded-xl font-mono text-sm overflow-x-auto">
                <code>{`Net worth = Total assets - Total liabilities`}</code>
              </pre>
              <p>
                Each side is split into six categories so you can see where the value sits. On the asset side: cash, retirement accounts, taxable investments, real estate at market value, vehicles, and a catch-all for everything else (business equity, collectibles). On the liability side: mortgage, student loans, credit cards, auto loans, medical debt, and other consumer debt.
              </p>
              <p>
                A negative number is normal in your 20s when student loans are fresh and assets are small. The trajectory matters more than the absolute level. If your net worth grows year over year, you are building wealth, regardless of starting point.
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
              How to get this calculation right.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              List the home value and the mortgage as separate line items. The asset is the home&rsquo;s current market value. The liability is the mortgage principal balance. Do not enter only the equity, because losing visibility into both sides hides important trends. If your home value drops and your mortgage stays flat, you want to see that.
            </p>
            <p>
              Use Kelley Blue Book private-party value for vehicles, not what you paid. A car bought for $35,000 three years ago is probably worth $20,000 to $24,000 today. Most household vehicle equity is overstated by people who anchor on purchase price. Be honest with yourself.
            </p>
            <p>
              Include 401(k) and IRA balances at the gross pre-tax number. The Federal Reserve uses gross balances in the official Survey of Consumer Finances data. Mentally adjust by 20% to 25% if you want a conservative withdrawal estimate, but list the gross figure here.
            </p>
            <p>
              Do not include items you would not actually sell. Wedding ring, family heirlooms, the espresso machine you adore. They have value, but counting them inflates the number and you would never liquidate them. Keep this calculation focused on assets you would convert to cash if you had to.
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
            Now run the math on shrinking the liability side faster.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/debt-payoff" className="pill pill-ink">
              Debt avalanche
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/compound-interest" className="pill pill-ghost">
              Compound interest
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
