import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "The 50-Year Mortgage, Explained",
  description:
    "Can you actually get a 50-year mortgage in 2026? What the proposal was, the real payment math versus a 30-year loan, and why the savings are smaller than they look.",
  alternates: { canonical: "/learn/50-year-mortgage" },
};

const faqs = [
  {
    question: "Can I actually get a 50-year mortgage right now?",
    answer:
      "Not from any mainstream US lender. As of mid-2026, Fannie Mae and Freddie Mac do not buy loans with terms longer than 30 years, and the Qualified Mortgage rules that most lenders follow cap terms at 30 years. A handful of portfolio and non-QM lenders offer 40-year terms, often with interest-only periods, but a true 50-year fixed purchase loan is essentially not available.",
  },
  {
    question: "What happened to the government 50-year mortgage proposal?",
    answer:
      "In late 2025, President Trump floated the idea and FHFA Director Bill Pulte said the administration was working on it. The proposal drew criticism from across the political spectrum because it saves borrowers little per month while roughly doubling lifetime interest. By early 2026 the administration had shelved the idea and shifted to other affordability proposals, such as letting buyers tap retirement savings for down payments. Nothing had been enacted as of mid-2026.",
  },
  {
    question: "How much would a 50-year mortgage lower my monthly payment?",
    answer:
      "Less than most people expect. On a $400,000 loan at 6.43%, stretching from 30 to 50 years cuts the payment from about $2,510 to about $2,234, a savings of roughly $276 per month. But longer terms would almost certainly carry higher rates. At a half-point premium, the savings shrink to roughly $125 per month, about 5%, while total interest jumps by more than $500,000.",
  },
  {
    question: "Why does a longer term cost so much more in interest?",
    answer:
      "Interest is charged on your outstanding balance every month. A 50-year schedule pays the balance down extremely slowly, so you carry a large balance, and pay interest on it, for far longer. In the first month of a 50-year loan at 6.93%, only about $75 of a $2,385 payment reduces the balance. The rest is interest.",
  },
  {
    question: "What are better ways to lower a mortgage payment?",
    answer:
      "Improve your credit score before applying, shop at least three lenders, consider buying discount points if you will stay long enough to break even, make a larger down payment to avoid PMI, or look at a cheaper home. An adjustable-rate mortgage can also lower the initial payment if you understand the rate risk after the fixed period ends.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="The 50-year mortgage, explained"
        description="Can you actually get a 50-year mortgage in 2026? What the proposal was, the real payment math versus a 30-year loan, and why the savings are smaller than they look."
        slug="/learn/50-year-mortgage"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "50-Year Mortgage", href: "/learn/50-year-mortgage" },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Mortgages</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          The 50-year mortgage, explained
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
            <a href="#where-it-came-from" className="u-link text-ink font-medium">
              1. Where the 50-year mortgage idea came from
            </a>
          </li>
          <li>
            <a href="#can-you-get-one" className="u-link text-ink font-medium">
              2. Can you actually get one in 2026?
            </a>
          </li>
          <li>
            <a href="#the-math" className="u-link text-ink font-medium">
              3. The math: 50-year vs 30-year, dollar for dollar
            </a>
          </li>
          <li>
            <a href="#equity-problem" className="u-link text-ink font-medium">
              4. The equity problem nobody advertises
            </a>
          </li>
          <li>
            <a href="#better-options" className="u-link text-ink font-medium">
              5. Better ways to lower your payment
            </a>
          </li>
          <li>
            <a href="#verdict" className="u-link text-ink font-medium">
              6. Verdict
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
        In late 2025, the White House floated an idea that lit up every corner of the housing
        world: a 50-year mortgage. The pitch was simple. Stretch the loan term from 30 years to
        50, and the monthly payment drops, so more people can afford a home. The backlash was
        just as simple. Stretching the term barely moves the payment, roughly doubles the
        lifetime interest, and leaves you building equity at a crawl. The proposal was shelved
        within weeks, but the search interest never died, because the underlying question is a
        good one: would a longer mortgage actually help you? This guide walks through what was
        proposed, whether any lender offers a 50-year loan today, and the exact math on a
        $400,000 example so you can see the trade for yourself.
      </p>

      {/* SECTION 1 */}
      <section id="where-it-came-from" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Where the 50-year mortgage idea came from
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          In November 2025, President Trump posted an image on Truth Social pairing Franklin
          Roosevelt with the 30-year mortgage and himself with a 50-year version. Bill Pulte,
          the director of the Federal Housing Finance Agency (the regulator that oversees
          Fannie Mae and Freddie Mac), confirmed the administration was working on it and
          called it a game changer for affordability.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The logic: home prices and mortgage rates both climbed sharply in the 2020s, pushing
          the typical monthly payment out of reach for many first-time buyers. If you cannot
          lower prices or rates quickly, the remaining lever is the loan term. Spread the same
          balance over 600 months instead of 360, and each month costs less.
        </p>
        <p className="text-mute leading-relaxed">
          The reaction was unusually bipartisan. Housing economists, consumer advocates, and
          many of the president&rsquo;s own supporters pushed back with the same two arguments:
          the monthly savings are small once realistic pricing is applied, and the lifetime
          interest cost is enormous. Critics also warned that cheaper monthly payments tend to
          push home prices up, since buyers bid based on what they can pay per month. By early
          2026, Pulte said the administration had other priorities, and the White House pivoted
          to different affordability ideas, including a proposal to let buyers tap retirement
          accounts for down payments. As of mid-2026, no 50-year mortgage program exists and no
          rule change has been made.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="can-you-get-one" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Can you actually get one in 2026?
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Practically speaking, no. Two structural barriers stand in the way.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The 30-year cap in federal rules
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Under the Qualified Mortgage rules written after the 2008 crisis (part of Dodd-Frank,
          administered by the CFPB), a loan generally cannot have a term longer than 30 years
          and still count as a Qualified Mortgage. QM status gives lenders legal protection, so
          nearly all mainstream lenders stay inside it. On top of that, Fannie Mae and Freddie
          Mac, which buy the majority of US home loans, do not purchase loans with terms over
          30 years. A 50-year loan would need regulatory changes at both levels, which is
          exactly what the 2025 proposal would have required and why it could not simply be
          switched on.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          What exists instead: 40-year loans and modifications
        </h3>
        <p className="text-mute leading-relaxed">
          A small group of portfolio and non-QM lenders offer 40-year mortgages, often with an
          interest-only period in the early years. Expect higher rates and stricter
          underwriting, because the lender keeps the loan on its own books. Separately, the FHA
          allows 40-year loan modifications for borrowers already in trouble on an existing FHA
          loan, but that is a hardship tool, not a purchase product. If someone advertises a
          true 50-year fixed purchase mortgage today, read the fine print very carefully. It is
          not a standard product from any major US lender as of mid-2026.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="the-math" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The math: 50-year vs 30-year, dollar for dollar
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Take a $400,000 loan. As of mid-2026, Freddie Mac&rsquo;s survey puts the average
          30-year fixed rate at about 6.43%. Run the numbers three ways.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Scenario 1: The 30-year baseline
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          At 6.43% over 30 years, the monthly principal-and-interest payment is about $2,510.
          Total interest over the life of the loan: roughly $503,600.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Scenario 2: A 50-year loan at the same rate (the fantasy case)
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          If a 50-year loan were priced at the same 6.43%, the payment drops to about $2,234.
          That saves roughly $276 per month, an 11% reduction. Not nothing, but not
          transformative. Meanwhile total interest balloons to about $940,300. You pay an extra
          $437,000 or so in interest to save $276 a month.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Scenario 3: A 50-year loan priced realistically
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Longer terms mean more risk for investors, so analysts who studied the proposal
          expected 50-year loans to price roughly 0.3 to 0.5 percentage points above 30-year
          loans. At 6.93%, the 50-year payment is about $2,385. Now you are saving only about
          $125 per month versus the 30-year loan, a 5% reduction, while total interest climbs
          past $1 million, more than $525,000 above the 30-year baseline and about 2.5 times
          the amount you originally borrowed.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "30-year at 6.43%: about $2,510 per month, roughly $503,600 total interest.",
            "50-year at 6.43% (same-rate fantasy): about $2,234 per month, roughly $940,300 total interest.",
            "50-year at 6.93% (realistic pricing): about $2,385 per month, just over $1,031,000 total interest.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed">
          The headline finding: under realistic pricing, a 50-year mortgage trades a payment cut
          of about 5% for a lifetime interest increase of about 105%. That asymmetry is why the
          idea was criticized from every direction. If $125 a month is the difference between
          affording a home and not, the honest answer is usually a cheaper home, not a longer
          loan.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="equity-problem" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The equity problem nobody advertises
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Amortization front-loads interest on every mortgage, but a 50-year schedule takes it
          to an extreme. In month one of the realistic 50-year scenario above, your $2,385
          payment includes $2,310 of interest and only about $75 of principal. On the 30-year
          loan, the first payment retires about $367 of principal, nearly five times as much.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          Stretch that over a decade and the gap becomes stark. After 10 years of payments on
          the 50-year loan, you still owe roughly $387,000 of the original $400,000. You have
          paid over $286,000 in payments and reduced your balance by about 3%. The 30-year
          borrower has paid down about 15% by the same point. After 20 years, the 50-year
          borrower has retired only about 10% of the balance, versus roughly 45% on the 30-year
          schedule.
        </p>
        <p className="text-mute leading-relaxed">
          Slow equity is not just a psychological problem. Equity is what lets you sell without
          bringing cash to closing, refinance on decent terms, borrow against the home, or
          survive a price dip without going underwater. A borrower who owes 97% of the original
          balance a decade in has almost no cushion if the local market falls even modestly.
          Add selling costs of 6 to 8%, and a 50-year borrower could easily lose money selling
          ten years after buying, even in a flat market.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="better-options" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Better ways to lower your payment
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          If the monthly payment is the obstacle, there are levers that do not cost half a
          million dollars in extra interest.
        </p>
        <ul className="space-y-3 mb-4">
          {[
            {
              title: "Improve your credit score first.",
              body: "Moving from a 680 to a 760 FICO can cut your rate by 0.50 to 0.75 percentage points, which on a $400,000 loan is a bigger payment reduction than the realistic 50-year term extension, with zero added lifetime cost.",
            },
            {
              title: "Shop at least three lenders.",
              body: "CFPB research has found that failing to comparison shop costs the average borrower thousands over the life of the loan. Rate spreads of 0.25 to 0.50 points between lenders on the same borrower are common.",
            },
            {
              title: "Buy discount points if you will stay put.",
              body: "One point costs 1% of the loan upfront and typically trims the rate by about 0.25 points. Divide the upfront cost by the monthly savings to find your break-even month before committing.",
            },
            {
              title: "Consider an ARM with eyes open.",
              body: "A 7/1 or 10/1 adjustable-rate mortgage usually starts below the 30-year fixed rate. It can make sense if you expect to move or refinance before the fixed period ends, but you carry rate risk afterward.",
            },
            {
              title: "Adjust the target, not just the term.",
              body: "A $360,000 loan at 6.43% over 30 years costs about $2,259 per month, less than the realistic 50-year payment on $400,000, and you own the home in 30 years instead of 50.",
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

      {/* SECTION 6 */}
      <section id="verdict" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Verdict
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The 50-year mortgage is, as of mid-2026, a policy debate rather than a product. You
          cannot walk into a lender and get one, and the federal proposal that made it famous
          has been shelved. If it ever returns, the math above will still apply: modest monthly
          relief, roughly double the lifetime interest, and a decade or two of near-zero equity.
        </p>
        <p className="text-mute leading-relaxed">
          There is one narrow case where a longer term can be rational: if the payment
          difference is genuinely the gap between owning and renting in your market, you
          understand the equity trade-off, and you plan to prepay aggressively or refinance when
          conditions improve. A longer term with prepayment flexibility is effectively an option
          you may never exercise. But as a default choice for affordability, it fails the test.
          The cheaper payment is real, and so is the extra half-million dollars.
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
            "No mainstream US lender offers a 50-year mortgage as of mid-2026. Qualified Mortgage rules and Fannie/Freddie purchase limits cap standard terms at 30 years.",
            "The late-2025 federal proposal was shelved within weeks after criticism from across the political spectrum.",
            "On a $400,000 loan, a realistically priced 50-year term saves only about $125 per month versus a 30-year loan at 6.43%.",
            "That small saving costs more than $525,000 in extra lifetime interest, pushing total interest past $1 million.",
            "Equity builds at a crawl: after 10 years on a 50-year schedule you have paid off only about 3% of the balance, versus 15% on a 30-year loan.",
            "Better payment levers: raise your credit score, shop three or more lenders, consider points or an ARM, or target a slightly cheaper home.",
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
          <Link href="/learn/family-opportunity-mortgage" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Mortgages</span> The family opportunity mortgage →
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
            See the term trade-off on your own numbers
          </div>
          <p className="text-mute text-sm">
            Change the loan amount, rate, and term to compare payments and total interest side
            by side.
          </p>
        </div>
        <Link href="/calculators/mortgage-payment" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
