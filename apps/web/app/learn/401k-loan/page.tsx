import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "401(k) Loans: Rules, Limits, and When Borrowing Makes Sense",
  description:
    "How a 401(k) loan works in 2026: the IRS $50,000 and 50% limits, 5-year repayment rules, what happens if you lose your job, and when a personal loan is the better move.",
  alternates: { canonical: "/learn/401k-loan" },
};

const faqs = [
  {
    question: "How much can I borrow from my 401(k)?",
    answer:
      "IRS rules cap a 401(k) loan at the lesser of $50,000 or 50% of your vested balance. So with a $60,000 vested balance you can borrow up to $30,000, and with $200,000 you top out at $50,000. There is one small exception: the law allows plans to lend up to $10,000 even if that is more than half your vested balance, though many plans do not offer it. The $50,000 cap is also reduced by your highest outstanding loan balance during the previous 12 months, so paying off a loan does not instantly reset your full limit.",
  },
  {
    question: "Does a 401(k) loan affect my credit score?",
    answer:
      "No. There is no credit check when you borrow, the loan does not appear on your credit reports, and even a default is not reported to the credit bureaus. That makes a 401(k) loan one of the few ways to borrow with damaged credit at a low rate. The cost of default shows up on your tax return instead: an unpaid balance is treated as a distribution, which means income tax plus a 10% penalty if you are under 59 and a half.",
  },
  {
    question: "What happens to my 401(k) loan if I quit or get laid off?",
    answer:
      "Most plans require faster repayment when you leave the job. If you cannot repay, the plan offsets your account balance by the unpaid amount. Since the 2017 tax law, you have until the federal tax filing deadline for that year, including extensions, to deposit the offset amount into an IRA or new employer plan and avoid taxes. Miss that window and the balance becomes taxable income, plus a 10% early withdrawal penalty if you are under 59 and a half.",
  },
  {
    question: "Is 401(k) loan interest really double taxed?",
    answer:
      "Partly, and the claim is often overstated. You repay the loan, including interest, with after-tax paycheck dollars, and that money is taxed again when you withdraw it in retirement. But that is only true of the interest portion. The principal you borrowed came out pre-tax and goes back in the same way, so it is taxed once, just like any other traditional 401(k) money. The double tax is real but small: on a $20,000 loan it might amount to a few hundred dollars of extra lifetime tax, not thousands.",
  },
  {
    question: "Is a 401(k) loan better than a personal loan?",
    answer:
      "It depends mostly on your credit and job security. A 401(k) loan usually charges prime plus 1 to 2 points, roughly 8 to 9% as of mid-2026, with the interest going back into your own account, and approval is automatic. A borrower with excellent credit can find personal loans in a similar range with no risk to retirement savings, so the 401(k) loan adds risk without saving much. For borrowers with fair or bad credit facing 20 to 36% personal loan APRs, the 401(k) loan is often the cheaper option, as long as the job is stable and the payoff plan is short.",
  },
  {
    question: "Can I still contribute to my 401(k) while repaying a loan?",
    answer:
      "Usually yes, and you should if at all possible. Most plans let you keep contributing during repayment, though a minority suspend contributions. The biggest hidden cost of a 401(k) loan is not the interest, it is borrowers who pause contributions to afford the loan payments and lose the employer match and years of compounding. If repaying the loan forces you to stop contributing up to the match, the true cost of the loan jumps sharply.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="401(k) loans: rules, limits, and when borrowing from yourself makes sense"
        description="How a 401(k) loan works in 2026: the IRS $50,000 and 50% limits, 5-year repayment rules, what happens if you lose your job, and when a personal loan is the better move."
        slug="/learn/401k-loan"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "401(k) Loans", href: "/learn/401k-loan" },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Loans</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          401(k) loans, explained
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated August 2026</span>
          <span className="chip chip-mute">10 min read</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <nav className="card p-6 mb-12">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
          In this guide
        </div>
        <ol className="space-y-2 text-sm">
          <li>
            <a href="#how-it-works" className="u-link text-ink font-medium">
              1. How a 401(k) loan works
            </a>
          </li>
          <li>
            <a href="#the-rules" className="u-link text-ink font-medium">
              2. The IRS rules: limits, repayment, and interest
            </a>
          </li>
          <li>
            <a href="#job-loss" className="u-link text-ink font-medium">
              3. The job-loss problem (and the rollover window)
            </a>
          </li>
          <li>
            <a href="#real-cost" className="u-link text-ink font-medium">
              4. The real cost: double taxation and lost growth
            </a>
          </li>
          <li>
            <a href="#vs-personal-loan" className="u-link text-ink font-medium">
              5. 401(k) loan vs personal loan
            </a>
          </li>
          <li>
            <a href="#when-yes-when-no" className="u-link text-ink font-medium">
              6. When it makes sense, and when it is a trap
            </a>
          </li>
          <li>
            <a href="#faq" className="u-link text-ink font-medium">
              7. FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        A 401(k) loan sounds almost too good: borrow your own money, skip the credit check, and
        pay the interest to yourself instead of a bank. For the right borrower it really is one
        of the cheapest ways to get cash. For the wrong borrower it quietly drains the one
        account doing the heavy lifting for retirement, and a job change can turn the balance
        into a surprise tax bill. This guide walks through the IRS rules, the honest math on
        double taxation and lost growth, how a 401(k) loan stacks up against a personal loan,
        and a simple test for whether you should take one at all.
      </p>

      {/* SECTION 1 */}
      <section id="how-it-works" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          How a 401(k) loan works
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A 401(k) loan lets you borrow from your own retirement account and pay it back to
          yourself, usually through automatic payroll deductions. You are not withdrawing the
          money, so there is no tax or early withdrawal penalty as long as you follow the
          repayment rules. The loan does not appear on your credit report, and approval does
          not depend on your credit score. If your plan allows loans and you have a vested
          balance, you can generally borrow.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          That last part matters: loans are a plan feature, not a right. The IRS permits them,
          but each employer decides whether to offer them and on what terms. Some plans allow
          only one loan at a time, some charge origination fees of $50 to $100, and some limit
          loans to hardship situations. Your plan document or HR portal has the specifics, and
          most 401(k) providers let you model and request a loan online in minutes.
        </p>
        <p className="text-mute leading-relaxed">
          Funding is fast, typically a few business days. That speed, plus the lack of a credit
          check, is why 401(k) loans show up so often in emergencies, home down payments, and
          high-interest debt payoffs. The question is never whether you can get the money. It
          is whether pulling it out of the market and putting your retirement account at risk
          is worth what you save on interest.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="the-rules" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The IRS rules: limits, repayment, and interest
        </h2>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          How much you can borrow
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          The IRS caps a 401(k) loan at the lesser of $50,000 or 50% of your vested account
          balance. Vested is the key word: your own contributions are always 100% vested, but
          employer matching money may vest over several years. A plan may also allow up to
          $10,000 even if that exceeds half your vested balance, though many plans skip that
          option. One wrinkle catches repeat borrowers: the $50,000 cap is reduced by your
          highest outstanding loan balance over the previous 12 months, so you cannot pay off a
          loan in March and re-borrow the full amount in April.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          How repayment works
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Loans must be repaid within five years through substantially level payments made at
          least quarterly, and in practice almost always through payroll deduction every pay
          period. The one exception is a loan used to buy your primary residence, which plans
          may stretch over a longer term, often 10 to 15 years. Miss the payment schedule
          beyond your plan&rsquo;s cure period and the outstanding balance becomes a deemed
          distribution: taxable income, plus a 10% penalty if you are under 59 and a half.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The interest goes to you
        </h3>
        <p className="text-mute leading-relaxed">
          The IRS requires a commercially reasonable rate, and most plans set it at the prime
          rate plus 1 to 2 percentage points, which works out to roughly 8 to 9% as of
          mid-2026. Unlike a bank loan, every dollar of that interest lands back in your own
          account. That does not make the loan free, as the next sections show, but it does
          mean the quoted rate overstates the true cost compared with a loan where the
          interest leaves your pocket for good.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="job-loss" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The job-loss problem (and the rollover window)
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          This is the risk that turns a cheap loan into an expensive mistake. When you leave
          your employer, whether you quit or get laid off, most plans will not keep collecting
          payroll payments. If you cannot pay the balance quickly, the plan offsets your
          account: it subtracts the unpaid loan from your balance and reports it as a
          distribution.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The rules here got friendlier in 2018 and remain so in 2026. For a qualified plan
          loan offset, one triggered by leaving your job or the plan shutting down, you have
          until the federal tax filing deadline for that year, including extensions, to come up
          with the money and roll it into an IRA or your new employer&rsquo;s plan. Do that and
          the offset is treated like any other rollover: no tax, no penalty. So a loan offset
          in October 2026 can be cured as late as April 2027, or October 2027 with a filing
          extension.
        </p>
        <p className="text-mute leading-relaxed">
          Miss the window and the unpaid balance becomes taxable income for the year of the
          offset, plus the 10% early withdrawal penalty if you are under 59 and a half. On a
          $30,000 unpaid balance for someone in the 22% bracket, that is roughly $9,600 in
          combined federal tax and penalty, before any state tax. The practical rule: never
          take a 401(k) loan you could not scramble to repay within a few months if your job
          disappeared tomorrow.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="real-cost" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The real cost: double taxation and lost growth
        </h2>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The double-taxation claim, sized honestly
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          You will read that 401(k) loans are double taxed. The truth is narrower. The
          principal you borrow went in pre-tax and goes back in the same way, so it is taxed
          once, at withdrawal, like all traditional 401(k) money. Only the interest is double
          taxed: you pay it with after-tax paycheck dollars, and it is taxed again when
          withdrawn in retirement. On a $20,000 loan at 9% over five years, total interest is
          about $4,800, and the extra tax on that slice usually amounts to hundreds of dollars
          over a lifetime, not thousands. Real, but not the main cost.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Lost growth is the bigger number
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          The bigger cost is that borrowed dollars are out of the market. If you pull $30,000
          for five years and the market returns 7% a year, the foregone growth is roughly
          $12,000, partially offset by the interest you pay yourself. In flat or falling
          markets the loan can accidentally work in your favor, but you cannot time that. Over
          decades, money removed during strong years and repaid slowly is how a loan quietly
          shrinks a retirement balance.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The contribution pause is the silent killer
        </h3>
        <p className="text-mute leading-relaxed">
          The most damaging pattern, according to essentially every study of participant
          behavior, is borrowers who cut or stop contributions to afford loan payments. Stop a
          $500 monthly contribution with a 50% employer match for five years and you give up
          $15,000 of free match money plus all its compounding. If a loan only works for your
          budget by pausing contributions below the match, the loan is far more expensive than
          its interest rate suggests.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="vs-personal-loan" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          401(k) loan vs personal loan
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The right comparison depends almost entirely on what rate your credit can get you
          elsewhere. As of mid-2026, personal loan APRs run from roughly 7% for excellent
          credit to 36% at the legal ceiling most mainstream lenders observe.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "Excellent credit (740+):",
              body: "A personal loan at 7 to 11% costs about the same as a 401(k) loan without touching retirement money or adding job-loss risk. The personal loan usually wins. Compare offers on our personal loans page before deciding.",
            },
            {
              title: "Good credit (670 to 739):",
              body: "Personal loans around 12 to 18% make this a genuine toss-up. The 401(k) loan is cheaper on paper; the personal loan is safer. Job security should be the tiebreaker.",
            },
            {
              title: "Fair or bad credit (under 670):",
              body: "Personal loan offers of 20 to 36% make the 401(k) loan clearly cheaper, and it may be the only low-cost option available. It is often the rational choice here, with the job-loss caveat in mind.",
            },
            {
              title: "High-rate credit card debt:",
              body: "Swapping 22%+ card APR for a 9% loan you pay yourself can be a strong move, but only if the cards stay at zero afterward. Borrowing from retirement to clear cards you then refill is the worst outcome available.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              <div>
                <span className="font-semibold text-ink">{item.title} </span>
                <span className="text-mute">{item.body}</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed">
          If you are not sure where your credit lands, start with our guide to{" "}
          <Link href="/loans/by-credit-tier" className="u-link font-medium">
            personal loan rates by credit tier
          </Link>{" "}
          and prequalify with a soft pull before assuming the 401(k) is your cheapest source
          of cash.
        </p>
      </section>

      {/* SECTION 6 */}
      <section id="when-yes-when-no" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When it makes sense, and when it is a trap
        </h2>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Reasonable uses
        </h3>
        <ul className="space-y-3 mb-6">
          {[
            "Paying off high-rate debt when your credit blocks cheaper refinancing, with a hard commitment not to re-borrow on the cards.",
            "A short-term bridge with a defined payoff, such as covering a home purchase gap of a few months.",
            "A true emergency when the alternatives are payday-grade credit or an early 401(k) withdrawal, which is strictly worse because tax and penalty apply immediately.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Warning signs it is a trap
        </h3>
        <ul className="space-y-3 mb-4">
          {[
            "Your job or industry feels shaky. A layoff plus an outstanding loan is the classic path to a five-figure tax bill.",
            "You would need to cut contributions below the employer match to afford payments.",
            "The loan funds lifestyle spending: a wedding, vacation, or car you could not otherwise afford. Consumption borrowed from retirement is the most expensive consumption there is.",
            "This would be your second or third loan. Serial 401(k) borrowing is a sign the real problem is a budget gap, and no loan fixes that. A funded emergency account does; see our high-yield savings guide at /savings/hysa once the immediate crunch passes.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed">
          One more option worth knowing: since 2024, IRS rules allow plans to offer a $1,000
          emergency personal expense withdrawal once per year without the 10% penalty. For a
          small emergency, that can beat setting up a loan at all. Ask your plan administrator
          whether it is offered.
        </p>
      </section>

      {/* FAQ */}
      <section id="faq" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-6">
          Frequently asked questions
        </h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <div key={i}>
              <h3 className="font-display font-bold text-lg tracking-tight mb-2">
                {faq.question}
              </h3>
              <p className="text-mute leading-relaxed text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "IRS limits: the lesser of $50,000 or 50% of your vested balance, repaid within 5 years through payroll deduction (longer for a home purchase).",
            "No credit check, no credit reporting, and interest (typically prime plus 1 to 2 points, roughly 8 to 9% as of mid-2026) goes back into your own account.",
            "Leave your job with a balance outstanding and you have until the tax filing deadline, including extensions, to roll the offset into an IRA and avoid tax plus a 10% penalty.",
            "Only the interest is double taxed, a small cost. Lost market growth and paused contributions are the expensive part.",
            "With excellent credit, a personal loan at a similar rate is usually safer. With fair or bad credit, the 401(k) loan is often the cheapest option available.",
            "Never borrow an amount you could not repay within months of a surprise layoff, and never pause contributions below your employer match to afford payments.",
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
          <Link href="/learn/how-to-apply-for-a-personal-loan" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Loans</span> How to apply for a personal loan →
          </Link>
          <Link href="/learn/is-debt-consolidation-a-good-idea" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Debt</span> Is debt consolidation a good idea? →
          </Link>
          <Link href="/learn/emergency-fund-playbook" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Strategy</span> The emergency fund playbook →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Compare before you borrow from retirement
          </div>
          <p className="text-mute text-sm">
            Prequalify for a personal loan with a soft pull and see whether your credit gets a
            rate that keeps your 401(k) untouched.
          </p>
        </div>
        <Link href="/loans/personal" className="pill pill-ink flex-shrink-0">
          Compare personal loans →
        </Link>
      </div>
    </article>
  );
}
