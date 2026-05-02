import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "The Emergency Fund Playbook | Fintiex Guides",
  description:
    "Three to six months of expenses in cash, earning interest. Here is exactly how to build an emergency fund from zero, where to keep it, and when to use it.",
  alternates: { canonical: "/learn/emergency-fund-playbook" },
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="The emergency fund playbook"
        description="Three to six months of expenses in cash, earning interest. Here is exactly how to build an emergency fund from zero, where to keep it, and when to use it."
        slug="/learn/emergency-fund-playbook"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "Emergency Fund Playbook", href: "/learn/emergency-fund-playbook" },
        ]}
      />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-ink mb-4">Strategy</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          The emergency fund playbook
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
            <a href="#why-3-6-months" className="u-link text-ink font-medium">
              1. Why 3 to 6 months?
            </a>
          </li>
          <li>
            <a href="#where-to-keep-it" className="u-link text-ink font-medium">
              2. Where to keep it
            </a>
          </li>
          <li>
            <a href="#building-from-zero" className="u-link text-ink font-medium">
              3. Building from zero to first month
            </a>
          </li>
          <li>
            <a href="#when-to-use-it" className="u-link text-ink font-medium">
              4. When to use it
            </a>
          </li>
          <li>
            <a href="#refilling-after-use" className="u-link text-ink font-medium">
              5. Refilling after use
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        A Federal Reserve survey from 2023 found that 37% of American adults could not cover a
        $400 unexpected expense with cash. They would need to borrow, sell something, or find
        another source. That is the gap an emergency fund closes. It is not an investment vehicle,
        not a savings goal for a vacation or car, and not a place to optimize returns. It is
        insurance against the financial system forcing you to make bad decisions under pressure.
        A job loss, a medical bill, a broken transmission: without liquid cash, these events turn
        into high-rate debt. With a funded emergency account, they are expensive inconveniences.
        This guide covers the exact mechanics of building one from scratch.
      </p>

      {/* SECTION 1 */}
      <section id="why-3-6-months" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Why 3 to 6 months?
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The standard guidance is 3 to 6 months of essential living expenses. Essential means the
          bills that must be paid to keep your life operational: rent or mortgage, utilities, food,
          insurance, minimum debt payments, transportation. Not discretionary spending, not
          subscriptions, not dining out.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          Why that range? The average US job search takes 3 to 6 months for most white-collar
          workers, based on Bureau of Labor Statistics data. Three months is the minimum buffer for
          a short disruption. Six months covers extended job searches, medical events, or expensive
          home repairs that stack on each other. The right number for you depends on:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Job stability: salaried employees with marketable skills in high-demand industries can manage 3 months. Self-employed or commission-based earners should target 6 to 12 months.",
            "Number of income earners in your household: dual-income households can get away with 3 months because one income can usually cover minimums. Single-income households need more cushion.",
            "Dependents: kids, aging parents, or anyone relying on you financially means your emergency expenses are larger and your consequences for disruption are worse.",
            "Fixed monthly commitments: a mortgage, car payment, and childcare are difficult to reduce quickly. The more fixed your monthly outflows, the more months of buffer you need.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          A concrete target
        </h3>
        <p className="text-mute leading-relaxed">
          If your essential monthly expenses are $3,500 (rent $1,800, utilities $180, groceries
          $400, insurance $300, car $320, debt minimums $500), a 3-month fund is $10,500. A 6-month
          fund is $21,000. These are real numbers. Set your target before you start saving, because
          a target creates a finish line.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="where-to-keep-it" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Where to keep it
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          An emergency fund has two requirements that pull in different directions: it must be
          immediately accessible, and it should earn as much interest as possible. The best
          resolution to that tension is a high-yield savings account at an online bank.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          As of April 2026, the top HYSAs are paying 4.85% APY with no minimum balance and no fees.
          On $10,500, that is $509 in annual interest. Traditional savings accounts at large banks
          pay 0.01 to 0.06%. That same $10,500 earns $1.05 to $6.30 per year. The difference is
          meaningful: the HYSA approach turns your emergency fund into an asset that partially keeps
          pace with inflation rather than slowly losing purchasing power.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          What not to use
        </h3>
        <ul className="space-y-3 mb-4">
          {[
            {
              title: "CDs:",
              body: "Early withdrawal penalties make CDs unsuitable for emergency funds. If you need $3,000 at midnight on a Sunday and your money is locked in a CD, you either pay the penalty or go into debt. Do not use CDs for emergency reserves.",
            },
            {
              title: "Brokerage accounts:",
              body: "Stocks and ETFs are liquid, but their value fluctuates. You should not be forced to sell equities during a bear market because you lost your job. Market downturns and job losses are correlated: you are most likely to need your emergency fund precisely when equities are down.",
            },
            {
              title: "Roth IRA contributions:",
              body: "You can withdraw Roth IRA contributions (not earnings) at any time without tax or penalty. Some people use this as a backup. It works in a pinch, but it is suboptimal because those contribution dollars lose their tax-advantaged growth opportunity forever once withdrawn.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-ink">{item.title} </span>
                <span className="text-mute">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 3 */}
      <section id="building-from-zero" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Building from zero to first month
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The psychological barrier to starting an emergency fund is usually the size of the full
          target. $10,500 feels impossible when you have $200 in savings. The right approach is to
          forget the full target temporarily and focus on the first milestone: one month of expenses.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Phase 1: The starter cushion
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Before pursuing any other financial goal, including debt payoff or investing, build a $1,000
          starter cushion. At this stage, the account does not need to be optimized. Open any savings
          account and direct deposit $1,000 as fast as you can. This covers minor emergencies (car
          repair, dental bill, appliance replacement) without forcing you to use a credit card. The
          starter cushion is not your emergency fund; it is the floor below which you will not fall.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Phase 2: One month of expenses
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Once you have the starter cushion and have moved the account to a high-yield savings
          account, the goal is one month of essential expenses. If that is $3,500, you need to save
          $2,500 more. At $500 per month, that takes 5 months. Automate the transfer: the day your
          paycheck hits, $500 moves to the HYSA before you can spend it. Automation removes the
          decision from your monthly workflow.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Phase 3: Three to six months
        </h3>
        <p className="text-mute leading-relaxed">
          After reaching one month, continue the automated savings at whatever rate is sustainable.
          Along the way, deposit windfalls directly into the fund: tax refunds, bonus payments,
          gifts. A $3,000 tax refund deposited in one shot is six months of $500 contributions
          compressed into one event. The fund becomes self-reinforcing once you see the balance grow.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="when-to-use-it" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When to use it
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          An emergency fund is for emergencies: unexpected, necessary, and urgent expenses. The
          definition matters because behavioral discipline around the account is as important as
          building it.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          Use it for:
        </p>
        <ul className="space-y-2 mb-6">
          {[
            "Job loss or sudden income disruption",
            "Medical or dental bills not covered by insurance",
            "Major vehicle repair required to maintain employment or safety",
            "Essential home repair (broken heat in winter, plumbing failure)",
            "Emergency travel for a family crisis",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed mb-4">
          Do not use it for:
        </p>
        <ul className="space-y-2 mb-4">
          {[
            "Vacation, even one you consider necessary",
            "Electronics or appliance upgrades that are not essential",
            "Supplementing monthly cash flow because you overspent",
            "Investment opportunities, no matter how compelling they look",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed">
          The test: if you would have known about this expense 6 months ago with any planning, it is
          not an emergency. It is a failure to save for a predictable cost. That distinction matters
          because every non-emergency withdrawal from the fund lengthens your recovery timeline.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="refilling-after-use" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Refilling after use
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Using your emergency fund is not a failure. It is the fund doing its job. The correct
          response is to treat replenishment as an immediate financial priority, not a deferred
          project.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The refill protocol:
        </p>
        <ol className="space-y-4 mb-6">
          {[
            {
              step: "Within one week of using the fund, calculate the withdrawal amount and set a replenishment timeline. If you withdrew $3,000 and can save $600 per month, you are whole in 5 months.",
            },
            {
              step: "Temporarily pause any non-essential discretionary savings or investing until the fund is restored. Investing in equities while your emergency fund is depleted exposes you to the risk of forced selling during a down market.",
            },
            {
              step: "Resume the automated transfer immediately, even if it is a smaller amount than before. Consistency of habit matters more than contribution size during the rebuild.",
            },
            {
              step: "Once fully replenished, reassess the monthly contribution rate. Your income or expenses may have changed. Update the target and the automation.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-mono font-bold text-ink flex-shrink-0">0{i + 1}</span>
              <span className="text-mute">{item.step}</span>
            </li>
          ))}
        </ol>
        <p className="text-mute leading-relaxed">
          The worst outcome after using an emergency fund is leaving it depleted and treating it
          as permanently consumed. If the fund is empty and another emergency hits within months,
          you are back to borrowing. The cycle of emergency fund creation, use, and refill is
          the actual skill to develop. Most people will use their emergency fund at some point.
          The ones who build long-term financial stability are the ones who refill it.
        </p>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "Target 3 to 6 months of essential expenses. Self-employed, single-income, or high-fixed-cost households should lean toward 6 months or more.",
            "Keep the fund in a high-yield savings account. At 4.85% APY, $10,500 earns $509 per year while remaining fully liquid.",
            "Start with a $1,000 starter cushion before any other goal, then build to one month of expenses as the next milestone.",
            "Emergency means unexpected, urgent, and necessary. Not a vacation, not an investment, not supplemental spending money.",
            "Replenish immediately after any use. Treat refill as a top financial priority until the balance is restored.",
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
          <Link href="/learn/hysa-vs-cd" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-mute">Savings</span> HYSA vs CD: which one is right for you? →
          </Link>
          <Link href="/learn/compound-interest-explained" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Strategy</span> Compound interest, the only math that actually matters →
          </Link>
          <Link href="/learn/debt-avalanche-vs-snowball" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> Debt avalanche vs snowball →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Calculate your savings goal
          </div>
          <p className="text-mute text-sm">
            Enter your monthly expenses and target buffer to see how long it takes to fully fund it.
          </p>
        </div>
        <Link href="/calculators/savings-goal" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
