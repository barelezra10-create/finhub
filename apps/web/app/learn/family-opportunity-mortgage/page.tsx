import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Family Opportunity Mortgage: Buy a Home for a Parent or Disabled Child",
  description:
    "How Fannie Mae's occupancy exception lets you buy a home for an elderly parent or disabled adult child at owner-occupied rates: requirements, how to find a lender, and alternatives.",
  alternates: { canonical: "/learn/family-opportunity-mortgage" },
};

const faqs = [
  {
    question: "Is the family opportunity mortgage an official Fannie Mae program?",
    answer:
      "Not by that name. It is a marketing nickname for an occupancy exception in Fannie Mae's Selling Guide (section B2-1.1-01, Occupancy Types). The guide lets a lender treat you as an owner-occupant when you are buying a principal residence for a parent who cannot qualify alone or for a disabled adult child. You get owner-occupied pricing and down payment rules even though you will not live in the home.",
  },
  {
    question: "What down payment do I need?",
    answer:
      "Typically 5% for a conventional loan under this exception, though exact minimums vary by lender. That is far below the 15 to 25% many lenders want on an investment property and the 10% minimum on a second home. Putting down less than 20% means paying private mortgage insurance until you reach 20% equity.",
  },
  {
    question: "Do my parents' income and credit matter?",
    answer:
      "No. You qualify on your own income, credit, and assets, and both housing payments (your current home and the new one) count in your debt-to-income ratio. In fact, the exception exists precisely because the occupant cannot qualify on their own: the parent must be unable to work or have insufficient income for a mortgage.",
  },
  {
    question: "Can I charge my parent or child rent?",
    answer:
      "The property must be a principal residence for your family member, not a rental business. Lenders generally do not use any rent from the family member as qualifying income, and treating the home as an income property can push it into investment classification. Have your family member cover utilities or contribute informally if needed, but structure the purchase as housing support, not a lease.",
  },
  {
    question: "What if my loan officer has never heard of it?",
    answer:
      "Common problem, easy fix. Skip the nickname and say you want a conventional loan under Fannie Mae Selling Guide B2-1.1-01, the occupancy exception for a parent unable to qualify or a disabled adult child. Any lender that sells loans to Fannie Mae can do it. If they still say no, call another lender or a mortgage broker; this is a well-established guideline, not an exotic product.",
  },
  {
    question: "Does FHA have an equivalent?",
    answer:
      "FHA has a related concept: a non-occupant co-borrower arrangement (sometimes called a kiddie condo loan) where a family member co-signs on a home another family member will occupy. The occupying borrower is on the loan too, which differs from the Fannie Mae exception where you can be the sole borrower. FHA loans also carry upfront and annual mortgage insurance premiums, so compare total costs.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="The family opportunity mortgage: buy a home for a parent or disabled child at owner-occupied rates"
        description="How Fannie Mae's occupancy exception lets you buy a home for an elderly parent or disabled adult child at owner-occupied rates: requirements, how to find a lender, and alternatives."
        slug="/learn/family-opportunity-mortgage"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "Family Opportunity Mortgage", href: "/learn/family-opportunity-mortgage" },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Mortgages</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          The family opportunity mortgage
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated August 2026</span>
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
            <a href="#what-it-is" className="u-link text-ink font-medium">
              1. What it is (and why the name is confusing)
            </a>
          </li>
          <li>
            <a href="#why-it-matters" className="u-link text-ink font-medium">
              2. Why owner-occupied pricing matters
            </a>
          </li>
          <li>
            <a href="#who-qualifies" className="u-link text-ink font-medium">
              3. Who qualifies
            </a>
          </li>
          <li>
            <a href="#how-to-apply" className="u-link text-ink font-medium">
              4. How to apply and find a lender
            </a>
          </li>
          <li>
            <a href="#alternatives" className="u-link text-ink font-medium">
              5. Alternatives if you do not qualify
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
        Say your mother is 78, living on Social Security, and her apartment building just sold
        to a developer. She cannot qualify for a mortgage on her income, and you want to buy her
        a small home near you. Walk into a bank and describe that plan, and many loan officers
        will quote you investment-property terms: 15 to 25% down and a rate a half point to a
        full point higher than what you would pay on your own home. That quote is often wrong.
        Fannie Mae&rsquo;s guidelines contain a specific exception, popularly called the family
        opportunity mortgage, that lets you finance a home for an elderly parent or a disabled
        adult child as if it were your own principal residence. Same rates, same low down
        payment, even though you will never live there. This guide covers exactly how it works,
        who qualifies, and what to say to a lender who has never heard of it.
      </p>

      {/* SECTION 1 */}
      <section id="what-it-is" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What it is (and why the name is confusing)
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The family opportunity mortgage is not a loan product you will find on any
          lender&rsquo;s rate sheet, and Fannie Mae no longer uses the name at all. It is a
          nickname for an occupancy exception buried in Fannie Mae&rsquo;s Selling Guide,
          section B2-1.1-01 (Occupancy Types). That section defines when a lender can classify
          a loan as owner-occupied, and it lists two family situations where the buyer does not
          have to live in the home:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Children buying a home for an elderly parent who is unable to work or does not have enough income to qualify for a mortgage on their own.",
            "Parents or legal guardians buying a home for a disabled or handicapped adult child who is unable to work or does not have enough income to qualify on their own.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed mb-4">
          In both cases, the family member occupies the home as their principal residence, and
          Fannie Mae lets the lender underwrite the loan as if you, the borrower, were the
          occupant. You can be the sole borrower. Your parent or child does not need to be on
          the loan, and their income and credit are not part of the application.
        </p>
        <p className="text-mute leading-relaxed">
          Because the name is informal, lender awareness is inconsistent. Some loan officers
          know it as the family opportunity mortgage, some know the guideline but not the
          nickname, and some will incorrectly tell you the purchase must be an investment
          property. The guideline itself is standard Fannie Mae policy available to any lender
          that sells conventional loans, which is most of them.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="why-it-matters" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Why owner-occupied pricing matters
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Lenders price loans by risk category, and occupancy is one of the biggest levers.
          Borrowers default on investment properties more often than on their own homes, so
          investment loans cost more in three ways:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "Rate:",
              body: "Investment property loans typically run about 0.5 to 1.0 percentage points above owner-occupied rates. With the average 30-year fixed near 6.43% as of mid-2026 (per Freddie Mac's survey), an investment loan could easily land above 7%.",
            },
            {
              title: "Down payment:",
              body: "Investment properties usually require 15 to 25% down. Second homes require at least 10%. Under the family opportunity exception, you can typically put down as little as 5% on a conventional loan.",
            },
            {
              title: "Reserves and fees:",
              body: "Investment loans carry higher loan-level price adjustments and often require more months of cash reserves after closing.",
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
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          What the difference is worth
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          On a $300,000 loan, the gap between 6.43% and 7.18% is about $150 per month, roughly
          $54,000 over 30 years. The down payment gap is bigger still: 5% of a $315,000 home is
          $15,750, while a 20% investment-property down payment is $63,000. For a family
          already stretching to house an aging parent, that difference often decides whether
          the purchase happens at all.
        </p>
        <p className="text-mute leading-relaxed">
          There is a second benefit worth naming: compared with assisted living, which
          commonly runs $5,000 to $7,000 per month in much of the country, a mortgage payment
          on a modest home near family can be the cheaper way to keep a parent safe and
          independent, and the family keeps the asset.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="who-qualifies" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Who qualifies
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The requirements split into two halves: the situation must fit the exception, and you
          must qualify for the loan on your own strength.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The situation
        </h3>
        <ul className="space-y-3 mb-6">
          {[
            "The occupant is your parent (elderly, unable to work, or without sufficient income to qualify) or your disabled adult child. The exception is for these relationships specifically, not siblings, grandparents, or other relatives.",
            "The home will be the family member's principal residence, occupied year-round. It cannot be a part-time residence plus a rental.",
            "The family member cannot qualify for the mortgage alone. Lenders may document this with income statements, benefit award letters, or a simple written explanation, depending on their process.",
            "This is a conventional conforming loan, so the standard limits apply: $806,500 in most US counties for 2026, higher in designated high-cost areas.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Your qualifications
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          You are underwritten as if buying any home: credit score (620 minimum for
          conventional, 740 or higher for the best pricing), stable income, and assets for the
          down payment and closing costs. The catch is debt-to-income ratio. Your existing
          housing payment and the new mortgage both count against you, and Fannie Mae generally
          caps DTI at 45 to 50% with strong compensating factors. Carrying two mortgages is the
          most common reason applications under this exception fail, so run your combined
          numbers before house hunting.
        </p>
        <p className="text-mute leading-relaxed">
          One helpful contrast with second-home loans: there is no distance requirement. A
          second home generally must be a reasonable distance from your primary residence and
          suitable for vacation use. Under the family exception, the home for your parent can
          be across town, five minutes away, or across the country.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="how-to-apply" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          How to apply and find a lender
        </h2>
        <ol className="space-y-4 mb-6">
          {[
            {
              step: "Run your combined budget first. Add your current housing payment to the estimated new payment (principal, interest, taxes, insurance, and PMI if under 20% down) and check that total debts stay under about 45% of gross monthly income.",
            },
            {
              step: "Call lenders and use the guideline, not just the nickname. Say: a conventional Fannie Mae loan under the B2-1.1-01 occupancy exception, buying a principal residence for a parent who cannot qualify on her own. A loan officer who hesitates on the nickname will usually recognize the guideline. Mortgage brokers are often the fastest route because they can shop multiple wholesale lenders.",
            },
            {
              step: "Get quotes from at least three lenders and confirm in writing that the loan is priced as owner-occupied, not second home or investment. This single line item is the whole point of the exercise.",
            },
            {
              step: "Prepare documentation for the family member's situation: Social Security or disability award letters, income records, or a letter of explanation describing why they cannot qualify alone. Requirements vary by lender, so ask for the list up front.",
            },
            {
              step: "Close and document occupancy. Your family member should move in and use the address as their primary residence (driver's license, mail, benefits). Misrepresenting occupancy on a mortgage application is fraud, so keep the arrangement genuine.",
            },
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed">
              <span className="font-mono font-bold text-ink flex-shrink-0">0{i + 1}</span>
              <span className="text-mute">{item.step}</span>
            </li>
          ))}
        </ol>
        <p className="text-mute leading-relaxed">
          Timeline and costs mirror any conventional purchase: 30 to 45 days from application
          to closing and roughly 2 to 3.5% of the purchase price in closing costs.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="alternatives" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Alternatives if you do not qualify
        </h2>
        <ul className="space-y-3 mb-4">
          {[
            {
              title: "Non-occupant co-borrower:",
              body: "Instead of buying the home yourself, co-sign on your family member's application. Their income counts too, which helps if they have some income but not enough. Works on conventional and FHA loans; on FHA it is sometimes called a kiddie condo arrangement.",
            },
            {
              title: "Second-home loan:",
              body: "If your parent has meaningful income and the home is a reasonable distance away, a second-home loan needs 10% down with rates close to primary-residence pricing. Occupancy rules differ, so be straight with the lender about who lives there.",
            },
            {
              title: "Investment property loan:",
              body: "The fallback that always works: 15 to 25% down and a higher rate, but no occupancy questions and you may rent the property later. If your parent may eventually move to care and you would keep the home as a rental, this can be the honest structure.",
            },
            {
              title: "Cash-out refinance or HELOC on your own home:",
              body: "If you have substantial equity, borrowing against your primary residence keeps the second property mortgage-free. Compare blended costs, and remember your own home secures the debt.",
            },
            {
              title: "Gift the down payment:",
              body: "If your family member can qualify for a small mortgage but lacks savings, conventional and FHA loans allow gifted down payments from family with a signed gift letter. For 2026 the annual gift tax exclusion is $19,000 per giver per recipient before any IRS reporting is required.",
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
            "The family opportunity mortgage is a nickname for Fannie Mae's occupancy exception (Selling Guide B2-1.1-01), not a standalone product.",
            "It covers two cases: buying for an elderly parent who cannot qualify alone, or for a disabled adult child.",
            "You get owner-occupied pricing: typically 5% minimum down and rates 0.5 to 1.0 points below investment-property loans.",
            "You qualify on your own income and credit, and both housing payments count in your DTI, usually capped around 45 to 50%.",
            "If a loan officer does not recognize the name, cite the guideline section and shop other lenders or a broker.",
            "Alternatives include co-signing as a non-occupant co-borrower, a second-home loan, a HELOC on your own home, or gifting the down payment.",
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
          <Link href="/learn/50-year-mortgage" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Mortgages</span> The 50-year mortgage, explained →
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
            Price out the second payment
          </div>
          <p className="text-mute text-sm">
            Estimate the monthly payment on a home for your parent or child before you talk to
            lenders.
          </p>
        </div>
        <Link href="/calculators/mortgage-payment" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
