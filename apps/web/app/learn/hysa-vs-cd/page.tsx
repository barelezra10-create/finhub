import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HYSA vs CD: Which Is Right for You? | Fintiex Guides",
  description:
    "Both high-yield savings accounts and CDs beat traditional savings. The difference is liquidity vs yield. Here is how to pick, including the CD ladder hybrid strategy.",
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-mute mb-4">Savings</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          HYSA vs CD: which one is right for you?
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
            <a href="#what-is-hysa" className="u-link text-ink font-medium">
              1. What a HYSA is
            </a>
          </li>
          <li>
            <a href="#what-is-cd" className="u-link text-ink font-medium">
              2. What a CD is
            </a>
          </li>
          <li>
            <a href="#liquidity-vs-yield" className="u-link text-ink font-medium">
              3. Liquidity vs yield trade-off
            </a>
          </li>
          <li>
            <a href="#when-cds-win" className="u-link text-ink font-medium">
              4. When CDs win
            </a>
          </li>
          <li>
            <a href="#when-hysas-win" className="u-link text-ink font-medium">
              5. When HYSAs win
            </a>
          </li>
          <li>
            <a href="#cd-ladder" className="u-link text-ink font-medium">
              6. The CD ladder hybrid
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        A traditional savings account at a big bank earns roughly 0.06% APY. The national average
        as tracked by the FDIC is not much better. Meanwhile, the top high-yield savings accounts
        are paying 4.85% APY and the best 12-month CDs are at 5.10% APY. That gap is real, and it
        compounds. On $10,000 parked for one year, the difference between 0.06% and 4.85% is $479
        in interest you either earn or leave on the table. This guide breaks down both products,
        explains the liquidity trade-off that makes one better than the other in specific situations,
        and shows you how to combine them into a CD ladder that captures yield while preserving
        access to cash.
      </p>

      {/* SECTION 1 */}
      <section id="what-is-hysa" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What a high-yield savings account is
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A high-yield savings account (HYSA) is a federally insured deposit account that pays
          substantially more than the national average savings rate. They are most commonly offered
          by online banks, which have lower overhead than branch-based institutions and pass the
          savings to depositors in the form of better rates. Accounts are FDIC-insured up to
          $250,000 per depositor per institution, the same protection as any other US bank deposit.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The key feature is flexibility. You can deposit and withdraw money at any time (federal
          Regulation D limits were loosened in 2020, so the old six-withdrawal-per-month rule no
          longer applies federally, though some banks still enforce limits). Your money earns
          interest daily on the current balance and compounds monthly or daily depending on the bank.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          How HYSA rates work
        </h3>
        <p className="text-mute leading-relaxed">
          HYSA rates are variable. Banks set them based on the federal funds rate and competitive
          pressure. When the Fed raises rates, HYSA yields typically rise within weeks. When the Fed
          cuts, yields fall. The top HYSAs as of April 2026 are paying 4.85% APY, but that rate
          could change tomorrow. If you need to count on a specific yield for a defined period, a CD
          is the better tool.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="what-is-cd" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What a certificate of deposit is
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A certificate of deposit (CD) is a time deposit: you agree to leave your money at the bank
          for a fixed period, and the bank agrees to pay you a fixed interest rate for that entire
          period. Terms range from 3 months to 5 years or more. The rate is locked the day you open
          the CD and does not change, regardless of what rates do in the market.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          CDs are also FDIC-insured up to $250,000 per depositor per institution. Like HYSAs, they
          are offered at banks and credit unions. The top 12-month CDs as of April 2026 are paying
          5.10% APY (LendingClub, $2,500 minimum). A 5-year CD might offer 4.40%, which is lower
          than the 12-month because the yield curve is currently inverted: short-term rates are
          higher than long-term rates.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Early withdrawal penalties
        </h3>
        <p className="text-mute leading-relaxed">
          If you need your money before the CD matures, you pay an early withdrawal penalty.
          Penalties vary by institution but commonly run 60 to 180 days of interest for shorter
          terms and up to one year of interest for 5-year CDs. On $10,000 at 5.10% with a
          180-day penalty, withdrawing early after 3 months would cost you approximately $255 in
          penalty, erasing your earned interest and then some. Early withdrawal penalties make CDs
          genuinely illiquid in practice, even though your principal is technically accessible.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="liquidity-vs-yield" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Liquidity vs yield trade-off
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          In most rate environments, CDs pay more than HYSAs for the same term because you are
          accepting a constraint: you cannot access the money without a penalty. The bank rewards
          that certainty with a higher rate. Currently, 12-month CDs (5.10%) lead the top HYSA
          (4.85%) by 0.25 percentage points. That spread is the price of liquidity: 0.25% per year.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          On $10,000, that spread is $25 per year in favor of the CD. Not enormous. But if you have
          $50,000 in savings and are reasonably confident you will not need it for 12 months, the
          CD earns you $125 more with no additional risk. The question is always how confident you
          are in your liquidity timeline.
        </p>
        <p className="text-mute leading-relaxed">
          The yield advantage of CDs shrinks when the yield curve inverts aggressively (short-term
          rates higher than long-term, as in 2023 to 2025) and expands when the curve is steep
          (long-term rates higher, as in historically normal environments). In a falling-rate
          environment, locking a CD at today&rsquo;s rates is particularly valuable because the
          HYSA rate will decline while the CD rate holds.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="when-cds-win" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When CDs win
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          CDs are the better choice when you have clear answers to these questions: When will I
          need this money? And do I believe rates are likely to fall before then?
        </p>
        <ul className="space-y-4 mb-6">
          {[
            {
              title: "Rates are likely to fall.",
              body: "If the Federal Reserve is in a rate-cutting cycle, HYSA yields will follow the Fed down within weeks. A CD locks in today's higher rate for the full term. Someone who opened a 12-month CD at 5.10% in April 2026 keeps that yield even if the Fed cuts twice before maturity.",
            },
            {
              title: "You have a defined spending goal.",
              body: "A vacation fund for next December, a home down payment you need in 18 months, a tax bill due next April. Money with a known future use date is a perfect match for a CD with a matching maturity date.",
            },
            {
              title: "You want to remove the temptation to spend.",
              body: "The early withdrawal penalty is a behavioral tool. Money locked in a CD is psychologically less accessible than a savings account. For people who struggle with impulse spending, that friction is genuinely valuable.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-ink text-sm">{item.title} </span>
                <span className="text-mute text-sm leading-relaxed">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 5 */}
      <section id="when-hysas-win" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When HYSAs win
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          HYSAs are better when flexibility matters more than maximizing yield.
        </p>
        <ul className="space-y-4 mb-6">
          {[
            {
              title: "Emergency fund.",
              body: "Your emergency fund must be accessible immediately. If your transmission fails on a Sunday and you need $3,000 by Monday, a CD with a 180-day early withdrawal penalty is not a useful instrument. Your emergency reserves belong in a HYSA, period.",
            },
            {
              title: "Rates are rising.",
              body: "If the Fed is hiking and HYSA yields are climbing each month, locking into a CD means missing the upside. In a rising-rate environment, staying variable is the winning posture.",
            },
            {
              title: "Your timeline is uncertain.",
              body: "If you might need the money in 6 months or might not need it for 2 years, a HYSA avoids the penalty risk of a CD. The yield gap does not justify the risk of a forced early withdrawal at the wrong time.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-violet mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-ink text-sm">{item.title} </span>
                <span className="text-mute text-sm leading-relaxed">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* SECTION 6 */}
      <section id="cd-ladder" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The CD ladder hybrid
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A CD ladder solves the liquidity problem by spreading money across CDs with staggered
          maturity dates. Each rung matures on a rolling basis, giving you regular access to a
          portion of your savings without sacrificing the yield advantage of longer-term CDs.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          A 5-rung ladder on $10,000
        </h3>
        <div className="card-flush overflow-hidden mb-6">
          <div className="grid grid-cols-3 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Term</div>
            <div className="text-right">Amount</div>
            <div className="text-right">Matures</div>
          </div>
          {[
            { term: "3-month CD", amount: "$2,000", matures: "July 2026" },
            { term: "6-month CD", amount: "$2,000", matures: "October 2026" },
            { term: "9-month CD", amount: "$2,000", matures: "January 2027" },
            { term: "12-month CD", amount: "$2,000", matures: "April 2027" },
            { term: "18-month CD", amount: "$2,000", matures: "October 2027" },
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-3 px-5 py-4 items-center text-sm ${
                i < 4 ? "border-b border-line-soft" : ""
              }`}
            >
              <div className="font-medium">{row.term}</div>
              <div className="text-right font-mono tabular">{row.amount}</div>
              <div className="text-right text-mute">{row.matures}</div>
            </div>
          ))}
        </div>
        <p className="text-mute leading-relaxed mb-4">
          Every quarter, one CD matures and you have three choices: spend the money if you need it,
          reinvest into a new 18-month CD at whatever rates exist, or pause and leave it in a HYSA
          while you decide. The ladder ensures you never have all your savings locked up at once.
        </p>
        <p className="text-mute leading-relaxed">
          A well-built ladder combines the yield advantage of longer CD terms with liquidity at
          predictable intervals. It is the closest thing to having both the HYSA and the CD at the
          same time.
        </p>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "On $10,000, the difference between a 0.06% traditional savings account and a 4.85% HYSA is $479 in annual interest.",
            "CDs lock in a rate for the term. In a falling-rate environment, that is a significant advantage over a variable HYSA.",
            "Early withdrawal penalties on CDs are real. Assume you cannot access the money until maturity.",
            "Your emergency fund belongs in a HYSA, not a CD. Accessibility is non-negotiable for emergency reserves.",
            "A CD ladder staggers maturity dates so you have regular access to portions of your savings without losing all the yield advantage.",
            "Top HYSA: 4.85% APY (Bask Bank, no minimum). Top 12-month CD: 5.10% APY (LendingClub, $2,500 minimum). Both FDIC-insured.",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="chip chip-mute mt-0.5 flex-shrink-0">{i + 1}</span>
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
          <Link href="/learn/compound-interest-explained" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Strategy</span> Compound interest, the only math that actually matters →
          </Link>
          <Link href="/learn/how-mortgages-work" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Mortgages</span> How mortgages work in 2026 →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Build your CD ladder
          </div>
          <p className="text-mute text-sm">
            Enter your savings amount and target term to see a 5-rung ladder with current yields.
          </p>
        </div>
        <Link href="/calculators/cd-ladder" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
