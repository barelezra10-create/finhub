import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Compound Interest Explained: The Only Math That Actually Matters | Fintiex",
  description:
    "Compound interest grows wealth exponentially over time. Here is exactly how the formula works, why time beats contribution size, and how compounding works against you with debt.",
  alternates: { canonical: "/learn/compound-interest-explained" },
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="Compound interest, the only math that actually matters"
        description="Compound interest grows wealth exponentially over time. Here is exactly how the formula works, why time beats contribution size, and how compounding works against you with debt."
        slug="/learn/compound-interest-explained"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "Compound Interest Explained", href: "/learn/compound-interest-explained" },
        ]}
      />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-ink mb-4">Strategy</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          Compound interest, the only math that actually matters
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated April 2026</span>
          <span className="chip chip-mute">7 min read</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <nav className="card p-6 mb-12">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
          In this guide
        </div>
        <ol className="space-y-2 text-sm">
          <li>
            <a href="#simple-vs-compound" className="u-link text-ink font-medium">
              1. Simple vs compound interest
            </a>
          </li>
          <li>
            <a href="#the-formula" className="u-link text-ink font-medium">
              2. The formula and what each variable does
            </a>
          </li>
          <li>
            <a href="#time-is-the-lever" className="u-link text-ink font-medium">
              3. Time is the biggest lever
            </a>
          </li>
          <li>
            <a href="#reinvested-dividends" className="u-link text-ink font-medium">
              4. Reinvested dividends in stocks
            </a>
          </li>
          <li>
            <a href="#compound-on-debt" className="u-link text-ink font-medium">
              5. Compound interest on the wrong side: credit card debt
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        Two people, both 22 years old, both earning $50,000 a year. One starts investing $300 a month
        immediately and stops at age 32, investing for 10 years total. The other waits until 32 and
        invests $300 a month until age 62, investing for 30 years total. At age 62, assuming 8%
        average annual return, the person who started at 22 has more money, despite investing one
        third as many years. That result is not intuitive, but it is mathematically exact, and it is
        the case for compound interest. This guide explains the formula, shows why time dominates
        every other variable, and covers what happens when compounding works against you.
      </p>

      {/* SECTION 1 */}
      <section id="simple-vs-compound" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Simple vs compound interest
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Simple interest is calculated only on the original principal. If you deposit $10,000 at 5%
          simple interest for 10 years, you earn $500 per year and finish with $15,000. The interest
          does not build on itself; it is always calculated from the same base.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          Compound interest is calculated on the principal plus the accumulated interest. You earn
          interest on your interest. At 5% compounded annually, your $10,000 grows like this: year 1
          earns $500 (balance $10,500). Year 2 earns $525 (5% of $10,500, not $10,000). Year 3 earns
          $551.25 (5% of $10,525). After 10 years, the balance is $16,289, not $15,000. The extra
          $1,289 came from compounding.
        </p>
        <p className="text-mute leading-relaxed">
          At 10 years, the gap is modest. At 30 years, $10,000 at 5% simple is $25,000. At 5%
          compounded annually, it is $43,219. The longer the horizon, the more dramatic the
          difference. This is why starting early matters more than any other single investment
          decision.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="the-formula" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The formula and what each variable does
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The compound interest formula is:
        </p>
        <div className="card bg-bg-soft p-5 mb-6 font-mono text-sm text-ink">
          A = P x (1 + r/n)^(n x t)
        </div>
        <p className="text-mute leading-relaxed mb-4">
          Where A is the ending balance, P is the principal (starting amount), r is the annual
          interest rate as a decimal, n is the number of compounding periods per year, and t is the
          time in years.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          What each variable does
        </h3>
        <ul className="space-y-4 mb-6">
          {[
            {
              var: "P (principal):",
              body: "Doubling the starting amount doubles the ending balance, but only proportionally. $20,000 instead of $10,000 at 5% for 30 years gives you $86,439 instead of $43,219. Linear relationship, no leverage.",
            },
            {
              var: "r (rate):",
              body: "Rate has an exponential effect over long periods. $10,000 at 7% for 30 years is $76,123. At 10% for 30 years, it's $174,494. Two percentage points more than doubles the outcome over 30 years. This is why minimizing investment fees (which reduce effective rate) matters enormously over long horizons.",
            },
            {
              var: "n (compounding frequency):",
              body: "Monthly compounding beats annual compounding at the same nominal rate. At 5% annually vs 5% compounded monthly, $10,000 over 30 years is $43,219 vs $44,812. The difference is real but smaller than most people expect. The frequency of compounding matters less than the rate and time.",
            },
            {
              var: "t (time):",
              body: "Time has the most explosive effect. $10,000 at 7% for 20 years is $38,697. For 30 years it is $76,123. For 40 years it is $149,745. Each additional decade roughly doubles the outcome. This is why the person who starts at 22 beats the person who starts at 32, even with fewer total contributions.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-ink text-sm">{item.var} </span>
                <span className="text-mute text-sm leading-relaxed">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 3 */}
      <section id="time-is-the-lever" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Time is the biggest lever
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Back to the opening scenario. Person A invests $300 per month from age 22 to 32 (10 years),
          then stops. Total invested: $36,000. Person B invests $300 per month from age 32 to 62
          (30 years). Total invested: $108,000. Assuming 8% average annual return compounded monthly:
        </p>
        <div className="card-flush overflow-hidden mb-6">
          <div className="grid grid-cols-3 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Person</div>
            <div className="text-right">Total invested</div>
            <div className="text-right">Balance at 62</div>
          </div>
          <div className="grid grid-cols-3 px-5 py-4 items-center border-b border-line-soft text-sm">
            <div className="font-medium">Person A (starts at 22)</div>
            <div className="text-right font-mono tabular">$36,000</div>
            <div className="text-right font-mono tabular font-semibold text-mint">$602,000</div>
          </div>
          <div className="grid grid-cols-3 px-5 py-4 items-center text-sm">
            <div className="font-medium">Person B (starts at 32)</div>
            <div className="text-right font-mono tabular">$108,000</div>
            <div className="text-right font-mono tabular font-semibold">$408,000</div>
          </div>
        </div>
        <p className="text-mute leading-relaxed mb-4">
          Person A ends up with $194,000 more despite investing $72,000 less. Those 10 extra years
          at the beginning were worth more than 30 years of additional contributions at the end. This
          is not a trick: it is the structure of exponential growth. The first decade of compounding
          creates a base that all future compounding builds on.
        </p>
        <p className="text-mute leading-relaxed">
          The practical implication: the most valuable financial action you can take at age 22, 25,
          or 28 is not picking the perfect investment. It is starting. Even a small amount invested
          early beats a large amount invested late.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="reinvested-dividends" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Reinvested dividends in stocks
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          In stock market investing, compounding happens through reinvested dividends and capital
          appreciation. When a company pays a dividend and you reinvest it, you buy more shares,
          which pay future dividends on a larger share count. This is compound growth in equity form.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The S&P 500 has returned approximately 10.5% annually on average since 1926, including
          reinvested dividends (source: Federal Reserve data via CRSP). Without dividend
          reinvestment, the return drops to roughly 7.5%. Dividends account for a significant
          fraction of total long-term stock market returns, and their contribution is amplified
          through compounding.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The drag of fees
        </h3>
        <p className="text-mute leading-relaxed">
          Investment fees compound in reverse. A 1% annual fee sounds small. On $100,000 growing
          at 8% for 30 years, a 1% fee reduces your ending balance from $1,006,266 to $761,225,
          a difference of $245,041. The fee compounds just like the return, but against you.
          Low-cost index funds (expense ratios of 0.03 to 0.10%) let you keep nearly all the
          compound growth. High-cost funds erode it systematically.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="compound-on-debt" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Compound interest on the wrong side: credit card debt
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The same mechanism that builds wealth when it works for you destroys wealth when it works
          against you. Credit card debt compounds daily at rates that typically run 24 to 29% APR.
          At 27% APR, a $5,000 balance with no payments would grow to $6,350 after one year,
          $8,063 after two years, and $10,223 after three years. Your balance more than doubles in
          roughly 3 years with no new charges.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          More commonly, minimum payments create a slow motion trap. On a $5,000 balance at 24% APR,
          the minimum payment is typically about $100 per month (2% of balance). Paying only the
          minimum, it takes approximately 25 years and $9,000 in interest to pay off a $5,000 debt.
          The debt is compounding against you the entire time.
        </p>
        <p className="text-mute leading-relaxed">
          This is why high-rate debt must be eliminated before aggressive investing begins. Paying off
          a 27% APR credit card is mathematically identical to earning a guaranteed 27% return on
          that money. No investment reliably returns 27%. Paying off the debt first is the right
          financial move in almost every scenario.
        </p>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "Compound interest earns interest on accumulated interest. Over 30 years, $10,000 at 5% compounded annually grows to $43,219, versus $25,000 simple interest.",
            "Time dominates every other variable. Person A, investing $300/month for 10 years starting at 22, ends up with more money than Person B investing for 30 years starting at 32.",
            "Rate and fees both compound. A 1% fund fee on $100,000 over 30 years costs $245,000 in foregone growth.",
            "Reinvested dividends account for a significant portion of long-term stock market returns. Compounding in equities works through price appreciation and dividend reinvestment.",
            "Credit card debt at 24% to 29% APR uses compounding against you. A $5,000 balance paying only minimums can take 25 years and $9,000 in interest to resolve.",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="chip chip-ink mt-0.5 flex-shrink-0">{i + 1}</span>
              <span className="text-mute">{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* RELATED */}
      <section className="border-t border-line pt-10 mb-10">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Related guides
        </div>
        <div className="space-y-3">
          <Link href="/learn/emergency-fund-playbook" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Strategy</span> The emergency fund playbook →
          </Link>
          <Link href="/learn/debt-avalanche-vs-snowball" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> Debt avalanche vs snowball →
          </Link>
          <Link href="/learn/hysa-vs-cd" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-mute">Savings</span> HYSA vs CD →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            See compound growth on your numbers
          </div>
          <p className="text-mute text-sm">
            Enter a starting amount, monthly contribution, rate, and time horizon for a full projection.
          </p>
        </div>
        <Link href="/calculators/compound-interest" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
