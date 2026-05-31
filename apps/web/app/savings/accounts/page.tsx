import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadSavingsAccounts, formatApy, formatMoney } from "@/lib/savings-accounts";

export const metadata: Metadata = {
  title: "Best Savings Accounts of 2026: APY, Fees, FDIC | Fintiex",
  description:
    "Compare the 8 best online savings accounts from FDIC-insured banks. Sort by APY, monthly fee, minimum deposit, and mobile app rating. No paid placements.",
  alternates: { canonical: "/savings/accounts" },
};

const faqItems: FAQItem[] = [
  {
    question: "How did Fintiex pick these 8 savings accounts?",
    answer:
      "We started with every FDIC-insured online bank that pays at least 3.50% APY on a no-minimum or low-minimum savings account, then filtered to the 8 that combine top yields with zero or rarely charged fees, a strong mobile app rating, and a clean rate history. We do not rank by affiliate payouts. Every account here is offered by a federally insured institution and earned a Fintiex score of 4.0 out of 5 or higher.",
  },
  {
    question: "How is a savings account different from a CD?",
    answer:
      "A savings account pays a variable APY and lets you withdraw any time. A certificate of deposit (CD) locks in a fixed rate for a set term (6 months to 5 years), and pulling money out before maturity triggers an early-withdrawal penalty. Savings accounts win on flexibility. CDs sometimes win on yield, especially when the Fed signals rate cuts. Use savings for cash you might need this year, use CDs for cash you can park for 12+ months.",
  },
  {
    question: "Is my money safe in an online savings account?",
    answer:
      "Yes, assuming the bank carries FDIC insurance. FDIC coverage protects up to $250,000 per depositor, per bank, per ownership category. Every account on this page is FDIC-insured. If the bank were to fail, the federal government guarantees your money up to that limit. You can confirm any bank's FDIC status at fdic.gov/bankfind.",
  },
  {
    question: "How often do APYs change?",
    answer:
      "Savings APYs are variable. Banks adjust them as the Federal Reserve moves the federal funds rate, sometimes within days of a Fed decision, sometimes with a multi-week lag. Through 2025 and early 2026, rates have drifted within a 50-basis-point band. We refresh this page weekly to keep the table accurate.",
  },
  {
    question: "Can I have more than one high-yield savings account?",
    answer:
      "Yes. There is no limit on the number of savings accounts you can hold across different banks. Splitting deposits between two or three banks is a common way to stack FDIC coverage past $250,000, chase the best APY on each cash bucket (emergency fund, sinking fund, short-term goals), and avoid concentration risk. The trade-off is more login screens and slightly more tax forms in January.",
  },
  {
    question: "Are there withdrawal limits?",
    answer:
      "The Fed removed the federal 6-per-month limit (Regulation D) in April 2020. Most banks still cap free monthly withdrawals at 6 by default, but they no longer face a federal fine if they exceed it. A few banks charge $3 to $10 per withdrawal above 6 in a single month. Check each bank's fee schedule before relying on more than 6 transfers a month.",
  },
];

export default function Page() {
  const accounts = loadSavingsAccounts();
  const top = accounts[0];

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "Savings accounts", href: "/savings/accounts" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> 8 FDIC-insured banks
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Best savings accounts in 2026.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Eight online savings accounts ranked by APY, monthly fees, minimum deposits, FDIC coverage, and mobile app rating. No teaser rates, no minimums hidden in fine print. The top APY in our table is the top APY available right now.
          </p>
          {top && (
            <div className="flex flex-wrap gap-3">
              <Link href={`/savings/accounts/${top.slug}`} className="pill pill-ink">
                Top APY: {formatApy(top.apy)} at {top.bank}
                <span aria-hidden>{"->"}</span>
              </Link>
              <Link href="/savings/cds" className="pill pill-ghost">
                Compare CDs
              </Link>
            </div>
          )}
        </div>
      </section>

      {/* SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated weekly</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Top APY</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {top ? formatApy(top.apy) : "--"}
              </div>
              <div className="text-xs text-mute mt-2">{top?.bank}</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Average APY</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {accounts.length > 0
                  ? formatApy(accounts.reduce((s, a) => s + a.apy, 0) / accounts.length)
                  : "--"}
              </div>
              <div className="text-xs text-mute mt-2">Across the 8 picks</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">FDIC insurance</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                $250K
              </div>
              <div className="text-xs text-mute mt-2">Per depositor, per bank</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Banks tracked</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {accounts.length}
              </div>
              <div className="text-xs text-mute mt-2">All FDIC-insured</div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Sorted by APY
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Every account ranked.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              All accounts are FDIC-insured. Rates shown are APY (compounded). Click a row to read the full product breakdown.
            </p>
          </div>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-5 md:col-span-4">Bank</div>
            <div className="col-span-3 md:col-span-2 text-right">APY</div>
            <div className="hidden md:block md:col-span-2 text-right">Monthly fee</div>
            <div className="hidden md:block md:col-span-2 text-right">Min open</div>
            <div className="col-span-4 md:col-span-2 text-right">App</div>
          </div>
          {accounts.map((a, i) => (
            <Link
              key={a.slug}
              href={`/savings/accounts/${a.slug}`}
              className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
                i === accounts.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-5 md:col-span-4">
                <div className="font-display font-semibold text-base">{a.bank}</div>
                <div className="text-xs text-mute mt-1">{a.product_name}</div>
              </div>
              <div className="col-span-3 md:col-span-2 text-right font-mono font-semibold tabular text-base">
                {formatApy(a.apy)}
              </div>
              <div className="hidden md:block md:col-span-2 text-right font-mono text-sm text-mute tabular">
                {a.monthly_fee === 0 ? "$0" : formatMoney(a.monthly_fee)}
              </div>
              <div className="hidden md:block md:col-span-2 text-right font-mono text-sm text-mute tabular">
                {a.min_opening_deposit === 0 ? "$0" : formatMoney(a.min_opening_deposit)}
              </div>
              <div className="col-span-4 md:col-span-2 text-right font-mono text-sm tabular">
                {a.mobile_app_rating.toFixed(1)} / 5
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* HOW WE PICKED */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Methodology</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                How we picked.
              </h2>
              <p className="text-mute leading-relaxed">
                Three filters: yield, fees, and trust. Banks that fail any one of them never made the table.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">APY above 3.50%</h3>
                <p className="text-mute">
                  Every account on this page pays at least 3.50% APY. That is roughly eight times the national average savings rate, which the FDIC pegged near 0.46% in early 2026. A bank paying less than 3.50% is leaving real money on the table given today's rate environment.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Zero or rare monthly fees</h3>
                <p className="text-mute">
                  None of the 8 accounts charges a monthly maintenance fee under normal use. A $5 monthly fee on a $5,000 balance erases roughly 1.2% of yield per year, which can wipe out the gap between a great APY and a mediocre one. Read fee schedules carefully and watch for excess transaction fees if you move money more than 6 times a month.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">FDIC insurance, no exceptions</h3>
                <p className="text-mute">
                  Every bank on this page is a member of the FDIC, which insures deposits up to $250,000 per depositor, per bank, per ownership category. If the bank fails, the federal government guarantees your money. We do not list non-FDIC fintechs that route deposits through partner banks unless we can confirm the pass-through insurance is fully effective.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Mobile app rated 4.0 or higher</h3>
                <p className="text-mute">
                  An online bank without a usable mobile app is a hassle. We track App Store and Google Play ratings and require at least 4.0 stars across both stores to qualify. The 8 banks here all sit between 4.3 and 4.8 stars, which is the upper end of consumer fintech.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SAVINGS VS CDS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-lime mb-4">Savings vs CDs</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              When to pick each one.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-6 text-[1.0625rem] leading-relaxed text-ink-soft">
            <p>
              Pick a savings account when you might need the cash within 12 months, when you want a single place for your emergency fund, or when you are still building toward a goal and want to add small amounts on a schedule. The rate is variable, but your money is always one transfer away.
            </p>
            <p>
              Pick a CD when you are sure you will not need the cash for at least 6 months, when you want to lock today's rate against future Fed cuts, or when you are laddering across multiple maturities to balance yield and liquidity. CDs usually pay 0.20 to 0.80 percentage points more than a HYSA at the moment, but pulling out early costs you 90 to 180 days of interest.
            </p>
            <p>
              Many savers keep an emergency fund (3 to 6 months of expenses) in a savings account, then ladder anything beyond that into 1, 2, and 5-year CDs. The{" "}
              <Link href="/calculators/cd-ladder" className="u-link">
                CD ladder calculator
              </Link>{" "}
              shows exactly how a split would have performed across recent rate cycles.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">FAQ</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Common questions.
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
              See how much your savings will grow.
            </h2>
            <p className="text-ink/70 mt-2">Savings goal calculator. No email, no signup.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/savings-goal" className="pill pill-ink">
              Savings calculator
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/savings/cds" className="pill pill-ghost">
              See CD rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
