import type { Metadata } from "next";
import Link from "next/link";
import {
  ArticleSchema,
  BreadcrumbListSchema,
  FAQPageSchema,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "Lease Buyout Loans: How to Finance Buying Your Leased Car",
  description:
    "How a lease buyout loan works in 2026: residual value vs market value math, where to get financing (credit unions, banks, online lenders), fees, taxes, and the title process.",
  alternates: { canonical: "/learn/lease-buyout-loan" },
};

const faqs = [
  {
    question: "What is a lease buyout loan?",
    answer:
      "An auto loan that finances purchasing the car you are currently leasing, instead of returning it at the end of the term. The loan pays the leasing company your buyout price (residual value plus any remaining obligations and fees), and the title transfers to you with the lender listed as lienholder, exactly like a standard used-car loan. Credit unions, some banks, and online lenders offer them; rates usually match or run slightly above used-car loan rates.",
  },
  {
    question: "Is buying out my lease a good deal in 2026?",
    answer:
      "Check one number: your contract's residual value versus the car's current market value. Used-car prices have stayed elevated compared with pre-2020 norms, so many leases signed two to three years ago carry residuals at or below what the car is worth today. If a dealer would sell your exact car for $24,000 and your residual is $21,000, buying out captures about $3,000 of equity. If the residual is above market value, return the car and let the leasing company eat the difference.",
  },
  {
    question: "What does a lease buyout cost beyond the residual value?",
    answer:
      "Expect a purchase option fee of roughly $300 to $600 (named in your lease contract), state and local sales tax on the buyout price in most states, and title and registration fees. If you buy through a dealer rather than directly from the leasing company, watch for doc fees and add-ons. Buying out also typically erases excess mileage and wear-and-tear charges, which is real money if you are over your mileage allowance.",
  },
  {
    question: "What rates do lease buyout loans charge?",
    answer:
      "Similar to used-car loans. As of mid-2026, buyout loan APRs run from roughly 6% for excellent credit (roughly 750+) to the mid-teens for scores below 600. Credit unions are consistently the strongest pricing tier for buyout loans, and some large banks do not offer lease buyout financing at all, so do not assume your primary bank is an option. Prequalify with two or three lenders before calling the leasing company.",
  },
  {
    question: "Can I buy out my lease before the end of the term?",
    answer:
      "Usually yes. An early buyout price is generally the current residual plus your remaining payments, sometimes with an early termination component, and the exact formula lives in your lease contract. Early buyouts make the math harder to win because you are paying undepreciated value, but they can make sense if you are far over your mileage allowance and racking up per-mile charges, or if the car's market value is unusually high right now.",
  },
  {
    question: "Do I need a loan, or can I pay cash for the buyout?",
    answer:
      "Cash is cheapest if you have it without raiding your emergency fund. At mid-2026 rates, financing $20,000 at 7% for 48 months costs about $2,980 in interest. If your savings earn around 4% in a high-yield account and the loan costs 7%, paying cash saves the spread. If paying cash would empty your buffer entirely, a loan you can prepay is the safer structure.",
  },
];

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      <ArticleSchema
        headline="Lease buyout loans: how to finance buying your leased car"
        description="How a lease buyout loan works in 2026: residual value vs market value math, where to get financing, fees, taxes, and the title process."
        slug="/learn/lease-buyout-loan"
      />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Guides", href: "/learn" },
          { name: "Lease Buyout Loans", href: "/learn/lease-buyout-loan" },
        ]}
      />
      <FAQPageSchema items={faqs} />
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Loans</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          Lease buyout loans, explained
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
            <a href="#how-buyouts-work" className="u-link text-ink font-medium">
              1. How buying out a lease works
            </a>
          </li>
          <li>
            <a href="#the-math" className="u-link text-ink font-medium">
              2. The math: residual value vs market value
            </a>
          </li>
          <li>
            <a href="#where-to-finance" className="u-link text-ink font-medium">
              3. Where to get a buyout loan
            </a>
          </li>
          <li>
            <a href="#fees-and-title" className="u-link text-ink font-medium">
              4. Fees, taxes, and the title process
            </a>
          </li>
          <li>
            <a href="#when-to-walk" className="u-link text-ink font-medium">
              5. When returning the car is the better move
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
        Your lease is ending, you like the car, and you know its history down to the last oil
        change. Buying it out can be one of the smartest used-car purchases available, because
        you are the rare buyer who knows exactly what the car has been through. Whether it is
        a good deal comes down to a single comparison written into your contract years ago:
        the residual value you can buy it for versus what the car is actually worth today. In
        2026&rsquo;s still-elevated used-car market, that comparison lands in the
        driver&rsquo;s favor more often than not. This guide covers the buyout process end to
        end, the equity math, where to find financing (including why some big banks will turn
        you away), and the fees and title steps nobody mentions until closing.
      </p>

      {/* SECTION 1 */}
      <section id="how-buyouts-work" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          How buying out a lease works
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Nearly every consumer lease includes a purchase option. When you signed, the leasing
          company estimated what the car would be worth at lease-end, called the residual
          value, and printed it in the contract. That number is locked. At the end of the
          term, you can buy the car for the residual plus a purchase option fee, regardless of
          what the market has done since. Before the end of the term, an early buyout price is
          generally the remaining payments plus the residual, per your contract&rsquo;s
          formula.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The process itself is short: call the leasing company (not the dealer) and ask for a
          payoff or buyout quote, which is typically valid for a set window such as 10 to 30
          days. Arrange payment, cash or a buyout loan, and the leasing company releases the
          title, with your lender recorded as lienholder if you financed. You then register
          the car and pay any tax due in your state.
        </p>
        <p className="text-mute leading-relaxed">
          You can run the buyout through a dealership instead, and sometimes must for certain
          captive lenders, but doing it directly with the leasing company avoids dealer doc
          fees and add-on pitches. If a dealer tells you the buyout must include a warranty
          package or certification fee, that is a markup, not a requirement.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="the-math" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          The math: residual value vs market value
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The whole decision reduces to one spread. Look up your residual in the lease
          contract, then price your exact car, trim, mileage, and condition, using two or
          three sources: online pricing guides, instant-offer sites, and local listings for
          comparable cars.
        </p>
        <ul className="space-y-3 mb-6">
          {[
            "Residual below market value: you have positive equity. Buying at $21,000 a car that sells for $24,000 is a $3,000 head start, and you keep the car whose maintenance history you actually know.",
            "Residual near market value: the buyout is roughly a fair-price used-car purchase, with the tiebreaker being that you know this car's history and skip the used-car-lot lottery, plus any disposition and mileage fees you avoid by not returning it.",
            "Residual above market value: negative equity. The leasing company guessed high, and the purchase option protects you by being optional. Return the car and let them absorb the loss.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-lime-deep mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
        <p className="text-mute leading-relaxed mb-4">
          The 2026 backdrop helps buyers. Used-vehicle prices remain well above pre-2020
          levels, and residuals on leases written in 2023 and 2024 were often set
          conservatively. That combination leaves many lease-end buyers with genuine equity.
          It is not universal: values vary sharply by model, and some segments, notably used
          EVs, have depreciated faster than their residuals assumed, so run your own numbers
          rather than assuming.
        </p>
        <p className="text-mute leading-relaxed">
          Two adjustments tilt the math further. If you are over your mileage allowance,
          returning the car triggers per-mile charges, commonly 15 to 30 cents per mile, that
          vanish if you buy. Same for wear-and-tear charges on that scraped bumper. Add what
          you would have paid in penalties to the return side of the ledger before comparing.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="where-to-finance" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Where to get a buyout loan
        </h2>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "Credit unions: usually the best rates.",
              body: "Credit unions treat buyouts as standard used-car loans and consistently price below banks and online lenders. If you are not a member anywhere, joining one for the loan is often worth the hour it takes.",
            },
            {
              title: "Banks: good rates, spotty availability.",
              body: "Some major banks finance lease buyouts only for leases they already hold, and some have exited third-party buyout lending entirely. Call and ask specifically about lease buyout loans before assuming your bank will do it.",
            },
            {
              title: "Online lenders and buyout specialists:",
              body: "Fast and convenient, with some services handling the payoff, title, and registration paperwork for you. Convenience can cost a point or two of APR or service fees, so compare their all-in offer against a credit union quote.",
            },
            {
              title: "The captive lender:",
              body: "The automaker's finance arm that holds your lease will often offer buyout financing, occasionally with loyalty incentives. Get the quote, then shop it.",
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
        <p className="text-mute leading-relaxed mb-4">
          Rate expectations as of mid-2026: roughly 6 to 7% APR for excellent credit, climbing
          to the mid-teens below a 600 score. Terms of 36 to 72 months are typical; shorter
          saves meaningfully. Financing $20,000 at 6.5% costs about $2,080 in interest over 48
          months versus about $3,510 over 72 months.
        </p>
        <p className="text-mute leading-relaxed">
          Prequalify with soft pulls where offered, and compare APR rather than payment, the
          same discipline as any loan; our{" "}
          <Link href="/learn/how-to-apply-for-a-personal-loan" className="u-link font-medium">
            loan application guide
          </Link>{" "}
          applies almost verbatim. One thing not to do: fund a buyout with an unsecured
          personal loan except as a last resort, since secured auto rates beat{" "}
          <Link href="/loans/personal" className="u-link font-medium">
            personal loan
          </Link>{" "}
          rates at every credit tier. If your credit is rough, see what secured lending gets
          you at{" "}
          <Link href="/loans/by-credit-tier" className="u-link font-medium">
            loans by credit tier
          </Link>{" "}
          before accepting a high-rate offer.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="fees-and-title" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Fees, taxes, and the title process
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Budget for the full out-the-door number, not just the residual:
        </p>
        <ul className="space-y-3 mb-6">
          {[
            {
              title: "Purchase option fee:",
              body: "Roughly $300 to $600, set in your lease contract. Non-negotiable but at least predictable.",
            },
            {
              title: "Sales tax:",
              body: "Most states charge sales tax on the buyout price, which on a $21,000 residual at 7% is $1,470. A handful of states handle lease taxes differently or credit tax already paid, so check your state's DMV rules; this is the biggest surprise line item.",
            },
            {
              title: "Title and registration:",
              body: "Typically tens of dollars to a couple hundred, varying by state, plus a lien recording fee for your lender.",
            },
            {
              title: "Dealer charges, if you route through a dealer:",
              body: "Doc fees of $100 to $800 and optional add-ons. Buying directly from the leasing company usually avoids these entirely.",
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
          The title sequence: your lender pays the leasing company, the leasing company sends
          the title or an electronic release to your lender or state DMV (allow a few weeks),
          and you complete registration in your state, showing the bill of sale and paying tax
          and fees. Keep every document. If the leasing company&rsquo;s payoff quote expires
          before funding completes, request a fresh quote rather than guessing, since per-diem
          interest changes the number daily.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="when-to-walk" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          When returning the car is the better move
        </h2>
        <ul className="space-y-3 mb-4">
          {[
            "The residual is clearly above market value. The purchase option is exactly that, an option. Negative equity is the leasing company's problem unless you volunteer to buy it.",
            "The car has developing problems you know about. The advantage of buying your own lease is knowing the car's history; if that history includes a transmission that shudders, act on your inside information and walk.",
            "The buyout loan payment strains your budget. A lease payment converting into a larger loan payment plus maintenance on an aging car is how car costs quietly eat a budget. Test the full number, payment, insurance, and repairs, before committing.",
            "You simply want a different car. Lease-end equity can sometimes be captured even when returning: if the car is worth more than the residual, selling the buyout to a third party or negotiating with the dealer can put that equity toward your next vehicle, where allowed by the leasing company.",
          ].map((item, i) => (
            <li key={i} className="flex gap-3 text-sm leading-relaxed text-mute">
              <span className="w-1.5 h-1.5 rounded-full bg-mute mt-2 flex-shrink-0" />
              {item}
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
            "The decision is one comparison: contract residual value vs current market value. Below market means equity; above market means return the car.",
            "2026's elevated used-car prices leave many 2023 and 2024 leases with residuals at or under market value, though EVs and some segments are exceptions.",
            "Buying out erases excess mileage and wear charges, which belongs on the buyout side of the ledger.",
            "Credit unions usually price buyout loans best; some big banks do not offer them at all. Expect roughly 6 to 7% APR with excellent credit as of mid-2026, mid-teens with poor credit.",
            "Budget the out-the-door total: residual, purchase option fee ($300 to $600), sales tax in most states, and title and registration.",
            "Get the payoff quote directly from the leasing company and skip the dealer's doc fees and add-ons where your lease allows.",
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
          <Link href="/learn/what-is-apr" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> What is APR, really? →
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
            Price the buyout loan before you call
          </div>
          <p className="text-mute text-sm">
            Enter your residual, rate, and term to see the monthly payment and total interest
            on your buyout.
          </p>
        </div>
        <Link href="/calculators/auto-loan" className="pill pill-ink flex-shrink-0">
          Open auto loan calculator →
        </Link>
      </div>
    </article>
  );
}
