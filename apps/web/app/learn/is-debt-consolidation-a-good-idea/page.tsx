import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Is Debt Consolidation a Good Idea? The Honest Math",
  description:
    "When debt consolidation actually saves money, when it just stretches the pain, the re-run-up failure mode that sinks most attempts, and the alternatives worth trying first.",
  alternates: { canonical: "/learn/is-debt-consolidation-a-good-idea" },
};

const faqs = [
  {
    question: "Does debt consolidation hurt your credit score?",
    answer:
      "Briefly, then usually the opposite. Applying triggers a hard inquiry (a few points, temporary), and a new account lowers your average account age. But paying cards to zero drops your credit utilization, which is one of the biggest scoring factors, and an installment loan diversifies your credit mix. Most people who consolidate and pay on time see their score higher within 6 to 12 months than when they started. The damage comes from the failure mode: consolidating, then running the cards back up.",
  },
  {
    question: "What credit score do I need for a debt consolidation loan?",
    answer:
      "Many lenders approve scores down to about 580 to 640, but approval is not the point, the rate is. As of mid-2026, borrowers with scores above 720 commonly see personal loan APRs around 7 to 15%, while scores in the low 600s often see 25 to 36%. If the offered APR is not meaningfully below the average rate on your cards, consolidation does not save money and you should look at alternatives like a debt management plan instead.",
  },
  {
    question: "Is it better to consolidate with a personal loan or a balance transfer card?",
    answer:
      "If your credit qualifies for a 0% intro APR balance transfer card and you can realistically pay the balance off within the 12-to-21-month promo window, the transfer card is usually cheaper, even with the typical 3 to 5% transfer fee. If the debt needs longer than the promo window, or the balance exceeds the limit you would be approved for, a fixed-rate personal loan with a defined payoff date is the safer structure.",
  },
  {
    question: "Why do so many debt consolidations fail?",
    answer:
      "Because consolidation moves debt, it does not remove it. The most common failure is re-running up the cards: the loan pays the balances to zero, the freed-up limits sit there, and within a year or two the borrower carries both the loan payment and new card balances. If spending consistently exceeds income, consolidation just adds a loan on top of the underlying gap. Fix the budget first, or pair the loan with closing or freezing most of the cards.",
  },
  {
    question: "Is debt settlement the same as debt consolidation?",
    answer:
      "No, and the difference matters. Consolidation repays everything you owe at a lower rate, and done right it helps your credit. Settlement means paying less than you owe: you typically stop paying creditors while a settlement company negotiates, which the CFPB and FTC warn can mean severe credit damage, collection lawsuits, fees, and taxable forgiven debt. Settlement is a last resort to compare against bankruptcy, not an alternative to a consolidation loan.",
  },
  {
    question: "Should I use home equity to consolidate credit card debt?",
    answer:
      "Cautiously, if at all. Home equity rates near 7.5 to 8% as of mid-2026 are far below card APRs, so the math tempts. But you are converting unsecured debt, where the worst case is credit damage, into debt secured by your house, where the worst case is foreclosure. It only makes sense with a stable budget, a fixed-term home equity loan rather than a reusable line, and a firm plan that keeps the cards at zero.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="Is debt consolidation a good idea? The honest math"
        description="When debt consolidation actually saves money, when it just stretches the pain, the re-run-up failure mode that sinks most attempts, and the alternatives worth trying first."
        slug="/learn/is-debt-consolidation-a-good-idea"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          {
            name: "Is Debt Consolidation a Good Idea?",
            href: "/learn/is-debt-consolidation-a-good-idea",
          },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-ink mb-4">Debt</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          Is debt consolidation a good idea?
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
            <a href="#what-it-is" className="u-link text-ink font-medium">
              1. What consolidation actually does (and does not do)
            </a>
          </li>
          <li>
            <a href="#the-math" className="u-link text-ink font-medium">
              2. The honest math: rate arbitrage vs term extension
            </a>
          </li>
          <li>
            <a href="#when-it-works" className="u-link text-ink font-medium">
              3. When consolidation works
            </a>
          </li>
          <li>
            <a href="#failure-mode" className="u-link text-ink font-medium">
              4. The failure mode: running the cards back up
            </a>
          </li>
          <li>
            <a href="#alternatives" className="u-link text-ink font-medium">
              5. Alternatives, in the order to try them
            </a>
          </li>
          <li>
            <a href="#faq" className="u-link text-ink font-medium">
              6. FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        Debt consolidation is sold as a fresh start: roll five payments into one, cut your
        rate, breathe again. Sometimes it is exactly that. The average credit card APR for
        accounts carrying a balance sits above 21% as of mid-2026, and a good-credit borrower
        can consolidate at 10 to 15%, which is real money saved. But consolidation is a
        refinance, not a rescue. It does not shrink what you owe by a single dollar, and if
        the new loan stretches the term far enough, you can pay a lower rate and still hand
        over more total interest. This guide runs the honest math, shows exactly when
        consolidation works, names the failure mode that sinks most attempts, and ranks the
        alternatives if the numbers do not line up for you.
      </p>

      {/* SECTION 1 */}
      <section id="what-it-is" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What consolidation actually does (and does not do)
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Consolidation replaces several debts with one new debt, ideally at a lower interest
          rate. The usual tools: a fixed-rate personal loan (often called a{" "}
          <Link href="/loans/debt-consolidation" className="u-link font-medium">
            debt consolidation loan
          </Link>
          ), a 0% intro APR balance transfer card, or, for homeowners, a home equity loan.
          What changes: your rate, your payment count, and your payoff structure. A fixed
          installment loan gives your debt something credit cards never do, a guaranteed end
          date.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          What does not change: the amount you owe, and whatever caused the debt. That second
          part is not a throwaway line. If your monthly spending exceeds your income, a
          consolidation loan adds a new obligation on top of an unfixed gap, and a year later
          the situation is usually worse. Consolidation is a tool for people whose debt came
          from a past event, medical bills, a layoff, a divorce, an expensive mistake now
          behind them, and whose current budget can cover the new payment with room to spare.
        </p>
        <p className="text-mute leading-relaxed">
          One more clarification, because the marketing blurs it: consolidation is not debt
          settlement, debt relief, or debt forgiveness. You repay every dollar. Companies
          promising to cut your balance in half are selling a different, far riskier product
          covered at the end of this guide.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="the-math" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The honest math: rate arbitrage vs term extension
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Consolidation saves money through one mechanism only: paying a lower rate on the
          same balance. It loses money through one mechanism only: paying any rate for longer
          than you otherwise would. Every consolidation offer is a mix of the two, and the
          monthly payment hides which force is winning. Take $20,000 of card debt at 22% APR,
          where you can afford $600 a month.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Keep paying the cards: $600 a month at 22% clears the debt in about 50 months with roughly $10,300 in interest.",
            "Consolidate at 13% for 4 years: the payment is about $537 and total interest drops to roughly $5,700. Same debt, about $4,600 saved, done sooner. This is the good version.",
            "Consolidate at 13% for 7 years: the payment falls to about $364, which feels like relief, but total interest climbs to roughly $10,600. You matched the interest cost of doing nothing while staying in debt two extra years. This is the version lenders advertise, because the low payment sells.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed mb-4">
          The rules that fall out of the math: compare total interest, not monthly payment;
          keep the new term as short as your budget allows; and if the payment on a
          reasonable term does not fit, the problem is capacity, not structure, and the
          alternatives section matters more than any loan.
        </p>
        <p className="text-mute leading-relaxed">
          Watch fees too. Origination fees on personal loans run 0 to 10% and come out of your
          proceeds, and balance transfer fees run 3 to 5%. Always compare APR, which includes
          fees, rather than the bare interest rate. Run your own numbers in our{" "}
          <Link href="/calculators/debt-payoff" className="u-link font-medium">
            debt payoff calculator
          </Link>{" "}
          before signing anything.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="when-it-works" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When consolidation works
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Consolidation is a good idea when most of these are true:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "The rate drop is real.",
              body: "The new APR, including fees, is at least 5 or more points below the weighted average rate on the debts you are consolidating. Your credit tier drives this; see where you land at /loans/by-credit-tier.",
            },
            {
              title: "The term is equal or shorter.",
              body: "You would have been debt-free in 4 years anyway; the loan should not run 6. Shorter term plus lower rate is the only combination that wins on every axis.",
            },
            {
              title: "Your budget already balances.",
              body: "You can cover the new payment plus living costs without touching the cards. The debt came from a past event, not an ongoing shortfall.",
            },
            {
              title: "You have a card containment plan.",
              body: "Freeze the cards, remove them from saved payment methods and phone wallets, and keep one for genuine emergencies. Closing every card can dent your credit score, but unused open limits are a loaded weapon without a plan.",
            },
            {
              title: "The simplification itself has value.",
              body: "One autopay payment instead of five due dates means fewer missed payments and late fees. For people whose real enemy is chaos rather than math, this benefit is legitimate and underrated.",
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
          A note on the balance transfer route: if your score qualifies you for a 0% intro
          APR card with a 15-to-21-month window and your balance divided by the months in the
          window is a payment you can actually make, the transfer usually beats any loan,
          even after a 3 to 5% fee. The catch is discipline: promo-rate debt that survives
          the window starts accruing at full card APR again.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="failure-mode" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The failure mode: running the cards back up
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Here is the pattern that turns consolidation into a debt multiplier. The loan funds,
          the cards drop to zero, and the borrower feels finished, because the visible symptom,
          five scary balances, is gone. But the habits that built the balances are untouched,
          and now there are thousands of dollars of open, empty credit limits sitting in a
          wallet. Spending drifts back. Within a couple of years the borrower carries the
          consolidation loan payment plus fresh card balances, and owes more than on the day
          they consolidated.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          This is not a rare edge case. Credit counselors and industry studies have described
          it for decades, and it is the single most common way consolidation fails. The CFPB
          makes the same point bluntly in its consumer guidance: consolidation will not help
          if you take on more debt afterward.
        </p>
        <p className="text-mute leading-relaxed">
          The defense is boring and works: before the loan funds, write down the specific
          budget that keeps the cards at zero, set the loan payment on autopay, freeze or
          hide the cards, and check card balances monthly for the first year. If you cannot
          honestly commit to that, skip the loan and start with a debt management plan or the
          payoff methods below, which build the habit while paying the debt.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="alternatives" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Alternatives, in the order to try them
        </h2>
        <ul className="space-y-3 mb-4">
          {[
            {
              title: "1. Avalanche or snowball payoff.",
              body: "No new loan, no credit requirement. Avalanche targets the highest APR first and is mathematically cheapest; snowball targets the smallest balance first and wins on motivation. Our guide at /learn/debt-avalanche-vs-snowball compares them, and the debt payoff calculator shows your timeline either way.",
            },
            {
              title: "2. Ask your card issuers for a lower rate or hardship plan.",
              body: "A phone call is free. Issuers offer temporary hardship APRs and payment plans more often than people expect, especially for customers with a payment history.",
            },
            {
              title: "3. Nonprofit debt management plan (DMP).",
              body: "A nonprofit credit counseling agency (find one through NFCC.org) negotiates concession rates with your card issuers, historically in the 7 to 9% range, and you make one payment to the agency for 3 to 5 years. No new loan and no minimum credit score, for a modest monthly fee. The accounts are typically closed, which is the built-in containment plan.",
            },
            {
              title: "4. Debt settlement, only as a last resort.",
              body: "Paying less than you owe sounds appealing, but the FTC and CFPB warn that settlement usually requires defaulting first, brings severe credit damage, possible lawsuits, fees of 15 to 25% of enrolled debt, and taxes on forgiven amounts. Compare it honestly against Chapter 7 or 13 bankruptcy with a lawyer or counselor before enrolling in anything.",
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
        <p className="text-mute leading-relaxed">
          And once the debt is moving in the right direction, start building the buffer that
          prevents the next round: even a small emergency fund in a{" "}
          <Link href="/savings/hysa" className="u-link font-medium">
            high-yield savings account
          </Link>{" "}
          is what keeps a car repair from becoming a card balance.
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
            "Consolidation is a refinance, not debt relief: it changes your rate and structure, never the amount you owe.",
            "It saves money only when the new APR is meaningfully lower and the term is not stretched. Compare total interest, never the monthly payment.",
            "On $20,000 at 22%, consolidating at 13% over 4 years saves about $4,600; the same rate over 7 years saves essentially nothing while adding two years of debt.",
            "The top failure mode is running the freed-up cards back up. Freeze the cards and set a written budget before the loan funds.",
            "If your rate offers are weak, a nonprofit debt management plan often beats a bad loan. Debt settlement is a last resort with severe credit and tax consequences, per FTC and CFPB warnings.",
            "Best case borrower: debt from a past event, balanced current budget, rate drop of 5+ points, equal or shorter term, and a card containment plan.",
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
          <Link href="/learn/debt-avalanche-vs-snowball" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Strategy</span> Debt avalanche vs snowball →
          </Link>
          <Link href="/learn/how-to-apply-for-a-personal-loan" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Loans</span> How to apply for a personal loan →
          </Link>
          <Link href="/learn/what-is-apr" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> What is APR, really? →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Run your own consolidation math
          </div>
          <p className="text-mute text-sm">
            Enter your balances, rates, and payment to see your payoff timeline, then compare
            it against a consolidation offer side by side.
          </p>
        </div>
        <Link href="/calculators/debt-payoff" className="pill pill-ink flex-shrink-0">
          Open debt payoff calculator →
        </Link>
      </div>
    </article>
  );
}
