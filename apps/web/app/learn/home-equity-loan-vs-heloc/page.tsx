import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Home Equity Loan vs HELOC: Which One Fits Your Project?",
  description:
    "Home equity loan or HELOC? Fixed vs variable rates, draw periods, closing costs, mid-2026 rate ranges, and a simple decision framework based on how you will use the money.",
  alternates: { canonical: "/learn/home-equity-loan-vs-heloc" },
};

const faqs = [
  {
    question: "What is the main difference between a home equity loan and a HELOC?",
    answer:
      "A home equity loan is a lump sum at a fixed rate with a fixed monthly payment, like a second mortgage. A HELOC is a revolving credit line, usually at a variable rate, that you draw from as needed during a draw period of about 10 years and repay afterward. The loan gives certainty; the line gives flexibility. Everything else, including which one is cheaper for you, flows from that difference.",
  },
  {
    question: "Which has lower rates in 2026, a HELOC or a home equity loan?",
    answer:
      "They are unusually close. As of mid-2026, average HELOC rates run roughly 7.2 to 7.5% and average home equity loan rates roughly 7.4 to 8.1%, depending on the survey, your credit, and your loan-to-value ratio. HELOCs start slightly lower on average, but they are variable, so the rate moves with the prime rate. A home equity loan locks its rate for the full term. Your actual quotes matter more than national averages, so compare both from at least three lenders.",
  },
  {
    question: "How much equity do I need to qualify?",
    answer:
      "Most lenders let you borrow until your total mortgage debt reaches 80 to 85% of your home's value, called the combined loan-to-value ratio or CLTV. If your home is worth $400,000 and you owe $250,000, an 85% CLTV cap means total debt of $340,000, so up to $90,000 available. Lenders also generally want a credit score of about 620 or higher, documented income, and a debt-to-income ratio under roughly 43%, with the best pricing reserved for scores above 740 and lower CLTVs.",
  },
  {
    question: "Is the interest tax deductible?",
    answer:
      "Only sometimes. Under current IRS rules, interest on a home equity loan or HELOC is deductible only if the money is used to buy, build, or substantially improve the home that secures the loan, and only if you itemize deductions. Use the funds for debt consolidation, tuition, or a car and the interest is not deductible. Keep records showing how you spent the money if you plan to claim the deduction.",
  },
  {
    question: "What happens when a HELOC draw period ends?",
    answer:
      "The line closes to new borrowing and you enter the repayment period, typically 10 to 20 years. If you were making interest-only payments during the draw period, your payment can jump sharply because you now repay principal too, at whatever the variable rate is at that time. This payment shock is one of the most common HELOC complaints the CFPB hears about. Before signing, ask the lender to show the projected payment after the draw period ends.",
  },
  {
    question: "Can I lose my home over a home equity loan or HELOC?",
    answer:
      "Yes. Both are secured by your house, which is exactly why the rates are far below credit cards and personal loans. If you default, the lender can foreclose even if your first mortgage is current. That is the core trade: cheap money in exchange for putting your home behind the debt. It is a strong reason not to use home equity for spending that does not build value, and to borrow less than the maximum you are offered.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="Home equity loan vs HELOC: which one fits your project?"
        description="Home equity loan or HELOC? Fixed vs variable rates, draw periods, closing costs, mid-2026 rate ranges, and a simple decision framework based on how you will use the money."
        slug="/learn/home-equity-loan-vs-heloc"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "Home Equity Loan vs HELOC", href: "/learn/home-equity-loan-vs-heloc" },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Home Equity</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          Home equity loan vs HELOC
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated August 2026</span>
          <span className="chip chip-mute">9 min read</span>
        </div>
      </div>

      {/* TABLE OF CONTENTS */}
      <nav className="card p-6 mb-12">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-4">
          In this guide
        </div>
        <ol className="space-y-2 text-sm">
          <li>
            <a href="#the-basics" className="u-link text-ink font-medium">
              1. The basics: lump sum vs credit line
            </a>
          </li>
          <li>
            <a href="#rates-and-costs" className="u-link text-ink font-medium">
              2. Rates and costs as of mid-2026
            </a>
          </li>
          <li>
            <a href="#how-helocs-work" className="u-link text-ink font-medium">
              3. How HELOCs actually work: draw and repayment periods
            </a>
          </li>
          <li>
            <a href="#decision-framework" className="u-link text-ink font-medium">
              4. Decision framework: match the tool to the use
            </a>
          </li>
          <li>
            <a href="#risks" className="u-link text-ink font-medium">
              5. Risks and mistakes to avoid
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
        American homeowners are sitting on record levels of home equity, and with credit card
        APRs above 20% and personal loans well into double digits for many borrowers, tapping
        that equity at 7 to 8% looks attractive. The two main tools, a home equity loan and a
        home equity line of credit (HELOC), are often lumped together, but they behave very
        differently once you sign. One is a fixed installment loan; the other is a variable
        credit line with a two-act structure that surprises people a decade in. This guide
        breaks down how each works, what they cost as of mid-2026, and a simple framework for
        choosing based on the one question that matters most: do you know exactly how much you
        need, and when?
      </p>

      {/* SECTION 1 */}
      <section id="the-basics" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The basics: lump sum vs credit line
        </h2>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Home equity loan: the second mortgage
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          A home equity loan hands you one lump sum at closing, at a fixed interest rate, with
          a fixed monthly payment over a set term, usually 5 to 30 years. Payment one includes
          principal and interest, and the loan amortizes down to zero like a mortgage. You know
          the payment on day one and it never changes. The trade-off: you pay interest on the
          full amount from day one, whether or not you needed it all immediately, and if you
          want more money later you must apply again.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          HELOC: the credit card secured by your house
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          A HELOC approves you for a maximum line, say $80,000, that you draw against as
          needed. You pay interest only on what you have actually borrowed. Rates are usually
          variable, tied to the prime rate plus a margin, so your cost moves when the Federal
          Reserve moves. Many lenders now offer fixed-rate lock options that let you convert a
          chunk of your balance to a fixed rate, a useful hybrid worth asking about.
        </p>
        <p className="text-mute leading-relaxed">
          Both products sit behind your first mortgage as liens on your home. Both typically
          allow total borrowing up to 80 to 85% of your home&rsquo;s value across all loans.
          And both put your house on the line if you stop paying, which is the fundamental
          reason they are cheaper than any unsecured option, including the{" "}
          <Link href="/loans/personal" className="u-link font-medium">
            personal loans
          </Link>{" "}
          many borrowers compare them against.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="rates-and-costs" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Rates and costs as of mid-2026
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Rate surveys differ, but as of mid-2026 the picture looks roughly like this: average
          HELOC rates around 7.2 to 7.5% and average fixed home equity loan rates around 7.4
          to 8.1%, with the best pricing going to borrowers with credit scores above 740 and
          combined loan-to-value ratios under 70%. The two products are priced closer together
          than they have been in years, which shifts the decision away from rate chasing and
          toward structure.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "Home equity loan costs:",
              body: "Closing costs typically run 2 to 5% of the loan amount, covering appraisal, title work, and origination, though many lenders offer reduced-fee versions. The rate is locked for the life of the loan.",
            },
            {
              title: "HELOC costs:",
              body: "Many HELOCs advertise low or no closing costs, but read for annual fees ($50 to $100), inactivity fees, and early closure fees if you close the line within 2 to 3 years. Some lenders also require an initial draw.",
            },
            {
              title: "The variable-rate wildcard:",
              body: "A HELOC priced at prime plus 0.5% moves point for point with the Fed. If rates fall further, HELOC borrowers benefit automatically. If inflation pushes rates back up, that 7.4% line can climb. Check the lifetime rate cap in the agreement; caps of 18% are common.",
            },
            {
              title: "Both beat unsecured borrowing:",
              body: "With average card APRs above 20% as of mid-2026, either product cuts the rate on carried debt by more than half. That is the honest appeal, and also the honest danger, covered in the risks section.",
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
          On taxes: the IRS allows an interest deduction only when the borrowed money buys,
          builds, or substantially improves the home securing the loan, and only if you
          itemize. Equity used for consolidation or tuition is not deductible, so do not let a
          lender&rsquo;s marketing imply otherwise.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="how-helocs-work" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          How HELOCs actually work: draw and repayment periods
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A HELOC has two phases, and the second one is where borrowers get surprised.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          During the draw period, usually the first 10 years, you can borrow, repay, and
          re-borrow freely. Minimum payments are often interest-only, which keeps them small.
          A $50,000 balance at 7.5% costs about $313 a month interest-only. That low payment
          is comfortable, and that is the trap: interest-only payments retire zero principal.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          When the draw period ends, the line closes and the repayment period begins, usually
          10 to 20 years of fully amortizing payments. That same $50,000 balance repaid over
          15 years at 7.5% costs about $464 a month, a nearly 50% jump, and more if rates have
          risen. The CFPB has flagged this payment shock for years as a leading source of
          HELOC distress. Two defenses: make principal payments voluntarily during the draw
          years, or use a fixed-rate lock feature to convert balances you expect to carry.
        </p>
        <p className="text-mute leading-relaxed">
          A home equity loan has no phases. The first payment and the last payment are the
          same number. If that predictability sounds like relief rather than a constraint,
          that is a strong signal about which product fits you.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="decision-framework" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Decision framework: match the tool to the use
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The choice usually resolves cleanly once you name the use case.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "One-time cost, known amount: home equity loan.",
              body: "A roof, an HVAC replacement, consolidating a fixed pile of debt. You need $32,000 once. Take the lump sum, lock the rate, and get a payment that never moves.",
            },
            {
              title: "Phased or uncertain costs: HELOC.",
              body: "A kitchen-then-bathrooms remodel over three years, a rental property you improve in stages, or ongoing tuition. Paying interest only on what you have drawn beats borrowing the whole estimate up front.",
            },
            {
              title: "Standby emergency backstop: HELOC.",
              body: "A no-annual-fee line you rarely touch costs little and provides cheap liquidity. It complements, not replaces, cash savings in a high-yield account; see our HYSA guide at /savings/hysa for the cash layer.",
            },
            {
              title: "Debt consolidation: usually home equity loan.",
              body: "A fixed payment with a fixed end date imposes discipline that a reusable credit line does not. Consolidating cards onto a HELOC and then re-drawing the line recreates the problem at a bigger scale, secured by your house.",
            },
            {
              title: "You expect rates to fall and can absorb risk: HELOC.",
              body: "Variable pricing benefits you automatically in a falling-rate environment. Just verify you could still afford the payment if the rate rose 2 to 3 points instead.",
            },
            {
              title: "Small amounts or short payoffs: consider neither.",
              body: "For $10,000 to $15,000 paid off within a couple of years, closing costs and the lien on your home may outweigh the rate advantage over a personal loan. Compare offers at /loans/personal before committing your house.",
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
      </section>

      {/* SECTION 5 */}
      <section id="risks" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Risks and mistakes to avoid
        </h2>
        <ul className="space-y-3 mb-4">
          {[
            {
              title: "Your home is the collateral.",
              body: "Default on either product and foreclosure is possible. Never move unsecured debt onto your house unless the underlying spending problem is genuinely fixed.",
            },
            {
              title: "Borrowing the maximum offered.",
              body: "Approval for $90,000 is not a reason to take $90,000. Borrow against a project budget, not against your equity ceiling, and keep a cushion in case home values dip.",
            },
            {
              title: "Ignoring the post-draw payment.",
              body: "Ask every HELOC lender for the projected fully amortizing payment after the draw period, at today's rate and at the lifetime cap. If the capped payment would break your budget, size the line smaller.",
            },
            {
              title: "Shopping only one lender.",
              body: "Margins over prime, fees, and fixed-lock features vary widely. Get quotes from at least three lenders, including a credit union, and compare APR and total fees line by line.",
            },
            {
              title: "Using equity for depreciating spending.",
              body: "Vacations and vehicles financed over 20 years of home equity payments cost far more than their sticker price and leave nothing behind. Reserve equity for things that build value or retire more expensive debt.",
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
            "A home equity loan is a fixed-rate lump sum with a fixed payment. A HELOC is a variable-rate credit line with a draw period, then a repayment period.",
            "As of mid-2026 the products are priced unusually close: HELOCs roughly 7.2 to 7.5% on average, home equity loans roughly 7.4 to 8.1%, varying by credit and loan-to-value.",
            "Most lenders cap total borrowing at 80 to 85% of home value and want a score of roughly 620+, with best pricing above 740.",
            "HELOC payment shock is real: interest-only draw payments can jump about 50% or more when amortization begins. Ask for the projected repayment-phase payment before signing.",
            "Known one-time cost: take the loan. Phased or uncertain costs: take the line. Debt consolidation: usually the loan, for its built-in discipline.",
            "Interest is tax deductible only when funds buy, build, or substantially improve the home securing the loan, per IRS rules, and only if you itemize.",
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
          <Link href="/learn/is-debt-consolidation-a-good-idea" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Debt</span> Is debt consolidation a good idea? →
          </Link>
          <Link href="/learn/refinance-break-even" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Mortgages</span> When does refinancing actually pay off? →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Size your line before you shop
          </div>
          <p className="text-mute text-sm">
            Estimate how much equity you can borrow and what the payments look like at
            different rates and terms.
          </p>
        </div>
        <Link href="/calculators/heloc" className="pill pill-ink flex-shrink-0">
          Open HELOC calculator →
        </Link>
      </div>
    </article>
  );
}
