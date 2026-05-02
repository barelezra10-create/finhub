import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Choosing Your First Credit Card | Fintiex Guides",
  description:
    "Your first credit card builds your credit history from scratch. Here is what type to get, what fees to avoid, and the habits that protect your score long-term.",
  alternates: { canonical: "/learn/choosing-first-credit-card" },
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="Choosing your first credit card"
        description="Your first credit card builds your credit history from scratch. Here is what type to get, what fees to avoid, and the habits that protect your score long-term."
        slug="/learn/choosing-first-credit-card"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "Choosing Your First Credit Card", href: "/learn/choosing-first-credit-card" },
        ]}
      />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-violet mb-4">Credit</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          Choosing your first credit card
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
            <a href="#why-first-card-matters" className="u-link text-ink font-medium">
              1. Why your first card matters
            </a>
          </li>
          <li>
            <a href="#card-types" className="u-link text-ink font-medium">
              2. Secured vs student vs unsecured
            </a>
          </li>
          <li>
            <a href="#what-to-ignore" className="u-link text-ink font-medium">
              3. What to ignore
            </a>
          </li>
          <li>
            <a href="#what-to-focus-on" className="u-link text-ink font-medium">
              4. What to focus on
            </a>
          </li>
          <li>
            <a href="#habits" className="u-link text-ink font-medium">
              5. Building habits that protect your score
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        Your credit score does not exist until you have credit. Lenders, landlords, and sometimes
        employers check it, but there is no score to check until someone extends you credit and you
        demonstrate you can manage it. Your first credit card is usually the fastest way to start
        that clock. Every month you use the card responsibly, the bureaus record it, and your credit
        file grows. Most people can have a usable FICO score within six months of opening their first
        account. The wrong first card, though, can be expensive and even damage the score it was
        supposed to build. This guide explains exactly what to look for, what to skip, and the
        simple habits that keep your score healthy from day one.
      </p>

      {/* SECTION 1 */}
      <section id="why-first-card-matters" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Why your first card matters
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Credit scores are produced by three bureaus (Experian, Equifax, TransUnion) and one
          primary scoring model (FICO). FICO scores run from 300 to 850. Your first card contributes
          to multiple scoring factors simultaneously.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The five FICO factors
        </h3>
        <div className="card-flush overflow-hidden mb-6">
          <div className="grid grid-cols-2 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Factor</div>
            <div className="text-right">Weight</div>
          </div>
          {[
            { factor: "Payment history", weight: "35%" },
            { factor: "Credit utilization", weight: "30%" },
            { factor: "Length of credit history", weight: "15%" },
            { factor: "Credit mix", weight: "10%" },
            { factor: "New credit inquiries", weight: "10%" },
          ].map((row, i) => (
            <div
              key={i}
              className={`grid grid-cols-2 px-5 py-3.5 items-center text-sm ${
                i < 4 ? "border-b border-line-soft" : ""
              }`}
            >
              <div className="font-medium">{row.factor}</div>
              <div className="text-right font-mono tabular font-semibold">{row.weight}</div>
            </div>
          ))}
        </div>
        <p className="text-mute leading-relaxed mb-4">
          Your first card affects all five. Payment history (35%): every on-time payment is a
          positive mark. Utilization (30%): the ratio of your balance to your credit limit; keeping
          it under 10% is ideal. Length of history (15%): the account age starts the clock the day
          it opens. Credit mix (10%): a credit card is a revolving account; having one diversifies
          your file even without other accounts. New inquiries (10%): the application creates a
          hard inquiry that slightly dings your score for 12 months.
        </p>
        <p className="text-mute leading-relaxed">
          The most important factor is not which card you pick. It is what you do with it after.
          One missed payment can drop a new score by 50 to 100 points. One year of on-time payments
          and low utilization builds a score most landlords and auto lenders will accept.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="card-types" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Secured vs student vs basic unsecured
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          First-time credit applicants typically qualify for one of three card types. The right one
          depends on your situation.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Secured cards
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          A secured card requires a refundable cash deposit that typically becomes your credit limit.
          Deposit $300 and you get a $300 credit limit. The deposit sits in a bank account and you
          cannot spend it; it is there to protect the lender if you default. Secured cards are
          designed for people with no credit history or damaged credit. They report to all three
          bureaus, which is the key feature. Good options include the Discover it Secured (earns cash
          back, automatic review for unsecured upgrade at 7 months) and Capital One Platinum Secured
          (starts at $49 deposit, lower minimum than competitors).
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Student cards
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          If you are enrolled in college, student cards are unsecured products specifically
          underwritten for thin-file applicants. They typically have lower credit limits ($500 to
          $1,500) and modest rewards. The Discover it Student Cash Back and the Capital One Quicksilver
          Student are solid, no-annual-fee options. Student cards often offer a GPA-based bonus or
          student-specific perks. The key requirement: you typically need to be enrolled in a
          two-year or four-year program.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Basic unsecured cards
        </h3>
        <p className="text-mute leading-relaxed">
          Some issuers like Capital One and Discover offer unsecured entry-level cards with minimal
          underwriting requirements for applicants with limited credit. These are harder to get
          approved for with zero credit history but worth trying if you have at least one prior
          account (even as an authorized user). If you are rejected, apply for a secured card instead.
          Multiple rejections add multiple hard inquiries to a thin file.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="what-to-ignore" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What to ignore for your first card
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Card marketing is designed to make rewards and bonuses seem like the most important
          features. For a first card, they are not. Here is what does not matter:
        </p>
        <ul className="space-y-4 mb-6">
          {[
            {
              title: "Sign-up bonuses.",
              body: "A $200 cash back bonus after spending $1,500 in 3 months sounds appealing. But chasing a minimum spend on a tight budget is a recipe for carrying a balance. Carry that $1,500 at 28% APR for one month and you have paid $35 in interest, which eats a large fraction of the bonus.",
            },
            {
              title: "Rewards categories.",
              body: "5x on dining, 3x on gas, 1x on everything else. Managing rotating categories is unnecessarily complex when your actual goal is building a credit file. A card you fully understand and use consistently beats a card with an optimized reward structure you use inconsistently.",
            },
            {
              title: "Premium perks.",
              body: "Airport lounge access, travel credits, and concierge services come on cards with $95 to $695 annual fees. First-time applicants will not qualify for most of them, and the fees are not worth it at this stage.",
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

      {/* SECTION 4 */}
      <section id="what-to-focus-on" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What to focus on
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The ideal first card has four characteristics:
        </p>
        <ol className="space-y-5 mb-6">
          {[
            {
              num: "01",
              title: "No annual fee.",
              body: "A fee-free card removes the calculation of whether rewards offset the cost. Keep it open indefinitely; a long-standing account improves your average credit age.",
            },
            {
              num: "02",
              title: "Reports to all three bureaus.",
              body: "Some credit-builder cards and retail store cards only report to one or two bureaus. You want activity on all three files. Confirm this before applying.",
            },
            {
              num: "03",
              title: "A clear path to graduation.",
              body: "Look for cards that automatically review your account for credit limit increases or unsecured upgrades after 6 to 12 months of responsible use. Discover and Capital One both do this. A credit limit increase improves your utilization ratio without requiring a new application.",
            },
            {
              num: "04",
              title: "Low or no penalty APR for late payments.",
              body: "Some cards jack the APR to 29.99% or more after one late payment (penalty APR). A standard APR with no penalty tier is more forgiving if you make a mistake.",
            },
          ].map((item) => (
            <li key={item.num} className="flex gap-4">
              <span className="font-mono font-bold text-ink flex-shrink-0 text-sm">{item.num}</span>
              <div>
                <span className="font-semibold text-ink text-sm">{item.title} </span>
                <span className="text-mute text-sm leading-relaxed">{item.body}</span>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* SECTION 5 */}
      <section id="habits" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Building habits that protect your score
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The card is a tool. Your behavior determines whether it builds or damages your credit.
          Three rules cover 95% of the discipline required:
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Pay the full statement balance every month
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Carrying a balance does not improve your credit score. This is one of the most persistent
          credit myths. What it does is trigger interest charges at rates typically between 24% and
          29% APR. Pay the full statement balance by the due date, every month, and you will pay zero
          interest while building a perfect payment history. If you cannot afford to pay the full
          balance, you spent too much on the card.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Keep utilization under 10%
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          If your credit limit is $500, keeping your reported balance under $50 keeps utilization
          below 10%. The balance that shows on your credit report is typically the statement balance
          at closing, not your real-time balance. Pay down the card before the statement closes if
          you have charged more than 10% of your limit. Even one month of high utilization can
          temporarily damage a young score.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Set up autopay for at least the minimum
        </h3>
        <p className="text-mute leading-relaxed">
          A missed payment is the single most damaging event on a credit report. Set up autopay for
          the full statement balance. If cash flow is uncertain, set it for the minimum payment as a
          fallback and pay the rest manually. A payment must be 30 days late to appear on your credit
          report, but most issuers still charge a late fee the day after the due date. Autopay
          eliminates both risks.
        </p>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "You need credit to have a credit score. Your first card starts the clock on your credit age.",
            "Secured cards (like Discover it Secured) are the most accessible entry point with no prior credit history.",
            "Skip rewards and bonuses on your first card. Focus on no annual fee, three-bureau reporting, and a graduation path.",
            "Pay the full statement balance every month. Carrying a balance does not help your score; it only costs you interest.",
            "Keep reported utilization under 10% of your credit limit. High utilization is the fastest way to suppress a young score.",
            "Set autopay for at least the minimum. A payment 30+ days late can drop a new score by 50 to 100 points.",
          ].map((point, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="chip chip-violet mt-0.5 flex-shrink-0">{i + 1}</span>
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
          <Link href="/learn/what-is-apr" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> APR vs interest rate →
          </Link>
          <Link href="/learn/debt-avalanche-vs-snowball" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> Debt avalanche vs snowball →
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
            See how credit card debt adds up
          </div>
          <p className="text-mute text-sm">
            Enter a balance and APR to see the payoff timeline and total interest cost.
          </p>
        </div>
        <Link href="/calculators/debt-payoff" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
