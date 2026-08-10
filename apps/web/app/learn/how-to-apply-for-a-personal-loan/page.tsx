import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "How to Apply for a Personal Loan: Step-by-Step Guide",
  description:
    "How to apply for a personal loan in 2026: check your credit, prequalify with soft pulls, compare APRs, gather documents, and avoid the mistakes that get applications denied.",
  alternates: { canonical: "/learn/how-to-apply-for-a-personal-loan" },
};

const faqs = [
  {
    question: "Does applying for a personal loan hurt my credit score?",
    answer:
      "Prequalifying does not: it uses a soft inquiry that never affects your score, so you can check rates at as many lenders as you like. The formal application triggers a hard inquiry, which typically costs a few points for under a year. Opening the loan also lowers your average account age slightly. On the other side, on-time payments and lower credit card utilization (if you consolidate) usually push your score higher within months. The net effect of a well-used personal loan is more often positive than negative.",
  },
  {
    question: "What credit score do I need for a personal loan?",
    answer:
      "Many lenders set floors around 580 to 640, and a few specialize below that. But the score determines price more than approval: as of mid-2026, excellent credit (740+) commonly sees APRs of roughly 7 to 12%, good credit 12 to 18%, fair credit 18 to 28%, and bad credit 28 to 36%. Income and debt-to-income ratio matter alongside the score, so a strong income can partially offset a mediocre score and vice versa.",
  },
  {
    question: "What documents do I need to apply?",
    answer:
      "Typically: a government-issued photo ID, your Social Security number, proof of income (recent pay stubs and W-2s for employees; two years of tax returns and bank statements for self-employed applicants), proof of address such as a utility bill or lease, and your bank account details for funding. Having these ready before you apply is the single easiest way to speed up approval and funding.",
  },
  {
    question: "How long does it take to get the money?",
    answer:
      "Online lenders commonly fund within one to three business days of final approval, and many offer same-day or next-day funding if you complete verification early in the day. Banks and credit unions often take a few days to a week. The slow step is usually document verification, so respond to lender requests immediately and upload clean, complete documents the first time.",
  },
  {
    question: "Why was my personal loan application denied after I prequalified?",
    answer:
      "Prequalification is an estimate based on self-reported numbers and a soft credit pull; final approval verifies everything. The usual gaps: income that documents lower than you stated, a debt-to-income ratio above the lender's cap once all obligations are counted, recent late payments or collections on the full credit report, or identity and employment details that could not be verified. Under the Equal Credit Opportunity Act you are entitled to the specific reason for denial, so read the adverse action notice and fix the named issue before reapplying.",
  },
  {
    question: "Should I take the longest term to get the lowest payment?",
    answer:
      "Usually no. Longer terms cut the payment but raise total interest, and many lenders price longer terms at higher APRs too. A $10,000 loan at 15% costs about $2,480 in interest over 3 years versus about $4,274 over 5 years. Pick the shortest term whose payment fits comfortably in your budget, and confirm there is no prepayment penalty so you can pay it off early.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="How to apply for a personal loan, step by step"
        description="How to apply for a personal loan in 2026: check your credit, prequalify with soft pulls, compare APRs, gather documents, and avoid the mistakes that get applications denied."
        slug="/learn/how-to-apply-for-a-personal-loan"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          {
            name: "How to Apply for a Personal Loan",
            href: "/learn/how-to-apply-for-a-personal-loan",
          },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Loans</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          How to apply for a personal loan
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
            <a href="#what-lenders-check" className="u-link text-ink font-medium">
              1. What lenders actually check
            </a>
          </li>
          <li>
            <a href="#the-steps" className="u-link text-ink font-medium">
              2. The application, step by step
            </a>
          </li>
          <li>
            <a href="#compare-offers" className="u-link text-ink font-medium">
              3. Comparing offers: APR, fees, and terms
            </a>
          </li>
          <li>
            <a href="#denials" className="u-link text-ink font-medium">
              4. Why applications get denied, and what to do next
            </a>
          </li>
          <li>
            <a href="#faq" className="u-link text-ink font-medium">
              5. FAQ
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        Applying for a personal loan takes about fifteen minutes. Applying well, in a way
        that gets you the lowest rate your credit can buy and avoids a surprise denial, takes
        a little preparation. The process rewards people who check their own numbers first,
        shop several lenders through soft-pull prequalification, and compare offers on APR
        rather than monthly payment. This guide walks the whole path in order: what lenders
        look at, each step from credit check to funding, how to read competing offers, and
        the specific reasons applications get rejected even after a promising
        prequalification.
      </p>

      {/* SECTION 1 */}
      <section id="what-lenders-check" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What lenders actually check
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Personal loans are unsecured, so the lender&rsquo;s whole decision comes down to
          how likely you are to repay from income. Four inputs dominate:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "Credit score and report.",
              body: "The score sets your pricing tier; the report gets read for the story behind it. Recent late payments, collections, and heavy card utilization hurt more than old problems. As of mid-2026, APRs run from roughly 7% for excellent credit to the 36% ceiling most mainstream lenders observe. See where you land at /loans/by-credit-tier.",
            },
            {
              title: "Income.",
              body: "Lenders verify that stated income is real and stable, through pay stubs, W-2s, tax returns, or direct bank account analysis. Some set minimum income floors; all care about consistency.",
            },
            {
              title: "Debt-to-income ratio (DTI).",
              body: "Your total monthly debt payments, including the new loan, divided by gross monthly income. Most lenders want the result under roughly 36 to 45%. A strong score with a maxed-out DTI still gets declined.",
            },
            {
              title: "Identity and employment.",
              body: "Boring but mandatory: your ID, address history, and employer all get verified. Mismatched details are a common and avoidable source of delays and denials.",
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

      {/* SECTION 2 */}
      <section id="the-steps" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The application, step by step
        </h2>
        <ol className="space-y-4 mb-6">
          {[
            {
              step: "Check your own credit first. Pull your reports free at AnnualCreditReport.com (federally authorized, free weekly from all three bureaus) and dispute any errors before lenders see them. Most banks and card issuers show your score free. Knowing your number tells you which lenders and rates are realistic before anyone runs an inquiry.",
            },
            {
              step: "Decide the amount and test the payment. Borrow the number the expense requires, not the maximum offered. Run the payment at a realistic APR in our personal loan payoff calculator and confirm it fits your budget with room to spare, remembering that origination fees may be deducted from what you receive.",
            },
            {
              step: "Prequalify at three to five lenders. Prequalification uses a soft credit pull that never touches your score, and takes a few minutes per lender: name, address, Social Security number, income, and the amount you want. Include at least one credit union alongside online lenders and your own bank; credit unions frequently undercut everyone, and federal credit unions cap personal loan rates at 18%.",
            },
            {
              step: "Compare offers by APR, not payment. APR bundles the interest rate and mandatory fees into one comparable number. A lower payment on a longer term is not a cheaper loan. The next section covers exactly what to compare.",
            },
            {
              step: "Gather documents. Photo ID, pay stubs from the last 30 days, last year's W-2 or two years of tax returns if self-employed, recent bank statements, and proof of address. Clean documents uploaded once is the difference between same-day approval and a week of email tag.",
            },
            {
              step: "Submit the formal application. This triggers the hard inquiry and full verification of everything you claimed. Answer follow-up requests fast; stale applications are the top self-inflicted cause of slow funding.",
            },
            {
              step: "Review final terms and sign. Confirm the APR, term, payment, origination fee, and the absence of a prepayment penalty match what you compared. Then set up autopay: many lenders discount the rate 0.25 to 0.50 points for it, and it protects the on-time payment history that is the entire point.",
            },
            {
              step: "Receive funding. Online lenders commonly deposit within one to three business days, often next-day. If the loan consolidates cards, some lenders pay your card issuers directly, which is worth requesting because it removes the temptation window.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-mono font-bold text-ink flex-shrink-0">0{i + 1}</span>
              <span className="text-mute">{item.step}</span>
            </li>
          ))}
        </ol>
        <p className="text-mute leading-relaxed">
          Total realistic timeline from first prequalification to money in your account: two
          to five days for most borrowers, and same-day is possible with an online lender and
          fast document turnaround.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="compare-offers" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Comparing offers: APR, fees, and terms
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Once prequalified offers are in hand, line them up on five numbers:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "APR.",
              body: "The one number that includes interest plus mandatory fees, which is why the Truth in Lending Act requires lenders to disclose it. Compare APR to APR, always. Our APR guide at /learn/what-is-apr explains how it differs from the interest rate.",
            },
            {
              title: "Origination fee.",
              body: "0 to 10% of the loan, usually deducted from proceeds. A $10,000 loan with a 5% fee delivers $9,500, so borrow enough to cover the gap or favor no-fee lenders at similar APRs.",
            },
            {
              title: "Term.",
              body: "Shortest term with a comfortable payment wins. Same APR over a longer term always means more total interest.",
            },
            {
              title: "Prepayment penalty.",
              body: "Most reputable personal lenders charge none. Refuse any loan that penalizes early payoff.",
            },
            {
              title: "Total cost of credit.",
              body: "Payment times number of payments, minus the amount you actually received. This single subtraction cuts through every marketing angle a lender can present.",
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
          When two offers are close, tiebreakers: autopay discounts, direct payoff of
          consolidated cards, funding speed, and whether the lender reports to all three
          credit bureaus. Our{" "}
          <Link href="/loans/personal" className="u-link font-medium">
            personal loans hub
          </Link>{" "}
          keeps a current comparison of lenders by rate range and specialty.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="denials" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Why applications get denied, and what to do next
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Denials cluster around a handful of causes, and federal law (the Equal Credit
          Opportunity Act) requires the lender to tell you yours in an adverse action notice.
          The common ones:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "DTI too high.",
              body: "The most frequent reason. Fixes: pay down a card or car loan first, add documentable income, request a smaller amount, or apply with a co-borrower whose income counts.",
            },
            {
              title: "Income could not be verified.",
              body: "Gig, cash, and newly self-employed income needs paper: tax returns, 1099s, and bank statements showing regular deposits. If your documented income undershoots what you entered at prequalification, the offer dies at verification.",
            },
            {
              title: "Recent derogatory marks.",
              body: "Late payments, collections, or charge-offs inside the last 12 to 24 months outweigh an otherwise decent score. Six months of clean history changes outcomes more than anything else you can do.",
            },
            {
              title: "Thin credit file.",
              body: "Too few accounts or too little history for the lender to model you. A secured card, a credit-builder loan, or applying at a credit union where you have a banking relationship all address this.",
            },
            {
              title: "Score below the lender's floor.",
              body: "Different lenders, different floors. A 600 score is a denial at one lender and an approval at 31% APR at another; see /loans/by-credit-tier for realistic ranges, and consider whether the loan can wait for a better tier.",
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
          After a denial: read the notice, fix the named issue, and wait at least a month or
          two before reapplying rather than carpet-bombing applications, since stacked hard
          inquiries make the file look desperate. If you were denied based on your credit
          report, you are entitled to a free copy of that report to check for errors, and
          disputes that remove mistakes can flip the decision.
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
            "Check your own credit free at AnnualCreditReport.com and fix errors before any lender looks.",
            "Prequalify at three to five lenders with soft pulls, including a credit union; it costs zero score points and reveals your real rate range.",
            "Compare APR, never monthly payment. A longer term with a smaller payment is usually a more expensive loan.",
            "Lenders verify four things: credit history, income, debt-to-income ratio (keep it under roughly 36 to 45% with the new loan), and identity.",
            "Have ID, pay stubs, tax documents, and bank statements ready; document speed is what separates same-day funding from a week of delays.",
            "If denied, the adverse action notice must state why. Fix that specific issue, and space out reapplications instead of stacking hard inquiries.",
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
          <Link href="/learn/what-is-apr" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> What is APR, really? →
          </Link>
          <Link href="/learn/is-debt-consolidation-a-good-idea" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Debt</span> Is debt consolidation a good idea? →
          </Link>
          <Link href="/learn/emergency-loans-bad-credit" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Loans</span> Emergency loans when your credit is bad →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Test the payment before you apply
          </div>
          <p className="text-mute text-sm">
            Enter an amount, rate, and term to see the monthly payment and total interest,
            then prequalify knowing your budget.
          </p>
        </div>
        <Link href="/calculators/personal-loan-payoff" className="pill pill-ink flex-shrink-0">
          Open loan calculator →
        </Link>
      </div>
    </article>
  );
}
