import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "When Does Refinancing Actually Pay Off? | Fintiex Guides",
  description:
    "Refinancing lowers your rate but costs money upfront. The break-even calculation tells you exactly how long until the savings outweigh the closing costs.",
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Mortgages</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          When does refinancing actually pay off?
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated April 2026</span>
          <span className="chip chip-mute">8 min read</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <nav className="card p-6 mb-12">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
          In this guide
        </div>
        <ol className="space-y-2 text-sm">
          <li>
            <a href="#what-break-even-means" className="u-link text-ink font-medium">
              1. What break-even means
            </a>
          </li>
          <li>
            <a href="#the-math" className="u-link text-ink font-medium">
              2. The math
            </a>
          </li>
          <li>
            <a href="#worked-example" className="u-link text-ink font-medium">
              3. Worked example
            </a>
          </li>
          <li>
            <a href="#beyond-break-even" className="u-link text-ink font-medium">
              4. Beyond break-even: cash-out and term reset risk
            </a>
          </li>
          <li>
            <a href="#when-not-to-refi" className="u-link text-ink font-medium">
              5. When NOT to refinance
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        Every time mortgage rates drop, homeowners face the same question: should I refinance? The
        answer is almost never just &ldquo;yes, rates are lower.&rdquo; Refinancing costs money. A
        typical refi on a $400,000 mortgage carries $8,000 to $12,000 in closing costs. The new
        lower rate saves you money every month, but it takes time for those monthly savings to add up
        to more than the upfront cost. That inflection point is the break-even. Before refinancing,
        you need to know your break-even date and whether you will stay in the house long enough to
        reach it. This guide walks through the exact calculation, a complete worked example, and the
        situations where refinancing looks good on paper but is still the wrong move.
      </p>

      {/* SECTION 1 */}
      <section id="what-break-even-means" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What break-even means
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          When you refinance, you trade an upfront cost (closing costs) for an ongoing benefit (lower
          monthly payment). The break-even point is the month when your cumulative monthly savings
          equal your closing costs. Every month after break-even, you are ahead. Every month before
          it, you are still digging out of the hole.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The simple break-even formula is:
        </p>
        <div className="card bg-bg-soft p-5 mb-6 font-mono text-sm text-ink">
          Break-even months = Closing costs / Monthly payment savings
        </div>
        <p className="text-mute leading-relaxed">
          If your closing costs are $9,000 and your new payment is $180 lower per month, you break
          even in 50 months (just over 4 years). If you plan to sell or refinance again before month
          50, the refi costs you money in net terms. If you stay until month 60, 70, or beyond,
          you capture meaningful savings.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="the-math" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The math
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          To use the break-even formula, you need two inputs: your closing costs and your monthly
          savings.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Estimating closing costs
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Refinance closing costs run 2 to 3% of the loan balance. On a $400,000 loan, that is
          $8,000 to $12,000. Specific line items include origination fee, appraisal ($500 to $900),
          title insurance, prepaid interest, and recording fees. Some lenders offer
          &ldquo;no-closing-cost&rdquo; refis that roll the fees into the loan balance or offset them
          with a higher rate. These are not free: they just restructure when you pay.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Calculating monthly savings
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Monthly savings is your current payment minus your new payment. Be careful about one
          complexity: if you refinance into a new 30-year loan after already paying for several years,
          you reset the amortization clock. Your new payment might be lower, but you are now paying
          interest on a higher proportion of each payment again and extending the total term. The
          simple payment difference overstates the true savings in this case.
        </p>
        <p className="text-mute leading-relaxed">
          A more accurate approach is to compare total remaining interest under the old loan (at its
          current amortization stage) versus total interest under the new loan. This is what the
          Fintiex Refi Break-Even calculator does automatically.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="worked-example" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Worked example
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Sarah bought a home in 2021 with a $400,000, 30-year mortgage at 7.25%. She is now 4 years
          into the loan (48 payments made). Her remaining balance is approximately $383,000. Her
          current monthly payment is $2,730. Current rates have dropped to 6.50%. She is considering
          a rate-and-term refi.
        </p>
        <div className="card-flush overflow-hidden mb-6">
          <div className="px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            Sarah&rsquo;s refi scenario
          </div>
          {[
            { label: "Current balance", value: "$383,000" },
            { label: "Current rate", value: "7.25%" },
            { label: "Current payment", value: "$2,730/mo" },
            { label: "New rate", value: "6.50%" },
            { label: "New payment (30-year)", value: "$2,421/mo" },
            { label: "Monthly savings", value: "$309/mo" },
            { label: "Estimated closing costs", value: "$9,200 (2.4%)" },
            { label: "Break-even", value: "30 months (2.5 years)" },
          ].map((row, i, arr) => (
            <div
              key={i}
              className={`grid grid-cols-2 px-5 py-3.5 text-sm ${
                i < arr.length - 1 ? "border-b border-line-soft" : ""
              }`}
            >
              <div className="text-mute">{row.label}</div>
              <div className="text-right font-mono tabular font-semibold">{row.value}</div>
            </div>
          ))}
        </div>
        <p className="text-mute leading-relaxed mb-4">
          Sarah breaks even in 30 months. If she plans to stay in the home at least until 2029
          (which is plausible given she just bought in 2021), the refi pays off clearly. Over the
          remaining life of the loan (26 years after the refi), she saves roughly $96,000 in total
          interest compared to staying on the original loan.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The term reset problem
        </h3>
        <p className="text-mute leading-relaxed">
          Sarah is now 4 years into a 30-year loan. If she refis into a new 30-year, she extends her
          payoff date from 2051 to 2055. The lower rate is real, but she is adding 4 years of
          payments. If she refinances into a 25-year loan instead, she roughly preserves her original
          payoff date and still saves on the lower rate, though the monthly payment would be
          approximately $2,560 (higher than the 30-year refi but with less total interest and no
          term extension).
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="beyond-break-even" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Beyond break-even: cash-out and term reset risk
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Rate-and-term refis are straightforward. Cash-out refis add complexity.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Cash-out refinancing
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          A cash-out refi replaces your existing mortgage with a larger one and delivers the
          difference as cash. If your home is worth $600,000 and you owe $383,000, you might refi
          into a $450,000 mortgage and receive $67,000 cash. The cash can fund a renovation, pay
          off high-rate debt, or cover other needs.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The trade-off: you are borrowing more money against your home, increasing the loan balance
          and the monthly payment. Cash-out refis also typically carry a slightly higher rate than
          rate-and-term refis because the LTV increases and lenders price in additional risk. If you
          use the cash to pay off 25% APR credit card debt, the math often works. If you use it to
          fund consumption or an investment with uncertain returns, you are putting your home at risk
          for a less certain benefit.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Opportunity cost
        </h3>
        <p className="text-mute leading-relaxed">
          Every dollar in closing costs is a dollar that could have gone into an investment account.
          $9,200 invested in a low-cost S&P 500 index fund with a historical 10% average annual
          return compounds to approximately $23,800 in 10 years. The refi needs to save more than
          that in interest over the same horizon to justify itself purely on a financial basis. Most
          refis with a break-even under 3 years on a long-horizon loan do clear that bar, but it is
          worth running the comparison.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="when-not-to-refi" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When NOT to refinance
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A lower rate is necessary but not sufficient. Here are the situations where refinancing
          is the wrong move:
        </p>
        <ul className="space-y-4 mb-6">
          {[
            {
              title: "You are planning to move within 2 years.",
              body: "If your break-even is 30 months and you sell in 24, you spent $9,200 and came out behind. Do not refinance unless you are confident you will stay past break-even.",
            },
            {
              title: "You are far into the loan term.",
              body: "If you are 22 years into a 30-year mortgage, you are paying almost entirely principal each month. Refinancing into a new 30-year resets you to interest-heavy payments and extends the term by 22 years. The math rarely works here.",
            },
            {
              title: "The rate drop is under 0.50%.",
              body: "A smaller rate reduction shrinks the monthly savings and extends break-even. On a $400,000 loan, a 0.25% rate drop saves roughly $60 per month. At $9,000 in closing costs, break-even is 150 months (over 12 years). That timeline rarely makes sense.",
            },
            {
              title: "Your credit has dropped since the original loan.",
              body: "If your FICO score has fallen below 700, you may not qualify for the lower advertised rate. The lender will price in the credit risk and the net savings could disappear entirely.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-ink text-sm">{item.title} </span>
                <span className="text-mute text-sm leading-relaxed">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "Break-even = closing costs divided by monthly payment savings. If you move before that date, the refi costs you money.",
            "On a $400,000 mortgage, refinancing typically costs $8,000 to $12,000. Savings must exceed that total before you net positive.",
            "In Sarah's example at 7.25% to 6.50%, the refi saves $309/month and breaks even in 30 months.",
            "Resetting to a new 30-year term extends your payoff date. A shorter refi term (25-year) preserves more of your progress.",
            "Cash-out refis increase your balance and your risk. Use them only when the destination for the cash has a clear return.",
            "A rate drop under 0.50% rarely produces a break-even under 10 years on typical loan sizes.",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="chip chip-lime mt-0.5 flex-shrink-0">{i + 1}</span>
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
          <Link href="/learn/how-mortgages-work" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Mortgages</span> How mortgages work in 2026 →
          </Link>
          <Link href="/learn/what-is-apr" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> APR vs interest rate →
          </Link>
          <Link href="/learn/compound-interest-explained" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Strategy</span> Compound interest, the only math that actually matters →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Calculate your refi break-even
          </div>
          <p className="text-mute text-sm">
            Enter your current rate, balance, and new rate to see your exact payback timeline.
          </p>
        </div>
        <Link href="/calculators/refinance-break-even" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
