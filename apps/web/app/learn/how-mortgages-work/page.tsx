import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How Mortgages Work in 2026 | Fintiex Guides",
  description:
    "A full plain-English breakdown of how mortgages are priced and structured: 10-year Treasuries, loan types, FICO impact, rate locks, and closing costs explained.",
};

export default function Page() {
  return (
    <article className="max-w-3xl mx-auto px-6 py-16">
      {/* HERO */}
      <div className="mb-10">
        <span className="chip chip-lime mb-4">Mortgages</span>
        <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,3.5rem)] leading-[1.05] tracking-[-0.03em] mt-4 mb-4">
          How mortgages work in 2026
        </h1>
        <div className="flex items-center gap-3 flex-wrap">
          <span className="text-mute text-sm">Fintiex Editorial · Updated April 2026</span>
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
            <a href="#what-a-mortgage-is" className="u-link text-ink font-medium">
              1. What a mortgage actually is
            </a>
          </li>
          <li>
            <a href="#how-rates-are-set" className="u-link text-ink font-medium">
              2. How rates are set (10Y Treasury, MBS spreads, Fed)
            </a>
          </li>
          <li>
            <a href="#loan-types" className="u-link text-ink font-medium">
              3. Conventional vs FHA vs VA vs jumbo
            </a>
          </li>
          <li>
            <a href="#what-affects-your-rate" className="u-link text-ink font-medium">
              4. What affects your rate
            </a>
          </li>
          <li>
            <a href="#locking-your-rate" className="u-link text-ink font-medium">
              5. Locking your rate
            </a>
          </li>
          <li>
            <a href="#closing-costs" className="u-link text-ink font-medium">
              6. Closing costs anatomy
            </a>
          </li>
        </ol>
      </nav>

      {/* INTRO */}
      <p className="text-lg leading-relaxed text-mute mb-12">
        Most people spend more time researching a laptop than a mortgage, even though the mortgage
        costs a hundred times more. That gap exists because mortgages feel like a black box: a
        lender quotes you a rate, you sign a stack of papers, and somehow a bank now owns part of
        your house. This guide tears open the box. By the end, you will know why a 760 FICO score
        gets you a lower rate than a 680, why today&rsquo;s mortgage market is downstream from a bond
        market you&rsquo;ve probably never thought about, and what every line on your Closing
        Disclosure actually charges for.
      </p>

      {/* SECTION 1 */}
      <section id="what-a-mortgage-is" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What a mortgage actually is
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A mortgage is a loan secured by real property. The word comes from Old French and roughly
          translates to &ldquo;death pledge.&rdquo; You pledge the house as collateral until the
          loan is paid off or you die. If you stop paying, the lender can foreclose, meaning it
          takes legal possession of the property and sells it to recover its money.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          The loan has two cost components: principal and interest. Principal is the amount you
          borrowed. Interest is the fee the lender charges for letting you use its money. Each
          monthly payment chips away at both, but not evenly. In the early years, most of your
          payment goes to interest. In the later years, most goes to principal. This front-loading
          of interest is called amortization, and it is why paying even an extra $200 per month
          early in a 30-year loan can shave years off the term and save tens of thousands in
          interest.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          A concrete example
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          On a $400,000 mortgage at 6.85% over 30 years, your monthly payment is $2,623. In month
          one, $2,283 goes to interest and only $340 goes to principal. By month 360, the split has
          reversed: nearly the entire payment retires principal. Over the full life of the loan, you
          pay $544,491 in interest alone, which means you pay for the house twice over. That is not
          a scam; it is the price of spreading $400,000 across 360 months. But it is a number worth
          confronting before you sign.
        </p>
        <p className="text-mute leading-relaxed">
          Most mortgages in the US are fixed-rate: the interest rate never changes. Adjustable-rate
          mortgages (ARMs) start with a fixed period, often 5, 7, or 10 years, then float based on
          a benchmark index. ARMs can make sense if you plan to sell or refinance before the fixed
          period ends, but they carry rate risk after that.
        </p>
      </section>

      {/* SECTION 2 */}
      <section id="how-rates-are-set" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          How rates are set: the 10-year Treasury, MBS spreads, and the Fed
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Mortgage rates do not come from the Fed directly, even though every news cycle implies
          they do. The Fed controls the federal funds rate, which is an overnight lending rate
          between banks. Mortgages are 30-year instruments, and their pricing follows a completely
          different part of the yield curve.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          The 10-year Treasury as the anchor
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          The 30-year fixed mortgage rate tracks the 10-year US Treasury yield. Investors who buy
          mortgages are comparing them to the risk-free return of Treasuries. If the 10-year Treasury
          yields 4.30%, mortgage rates typically sit 2.40 to 3.00 percentage points higher, which
          would put the average 30-year rate near 6.70 to 7.30%. That gap above the Treasury is
          called the spread, and it varies based on market conditions. As of April 2026, Freddie
          Mac&rsquo;s Primary Mortgage Market Survey puts the average 30-year fixed at 6.85%.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Mortgage-backed securities and the secondary market
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          When a lender makes you a mortgage, it rarely holds the loan for 30 years. It bundles your
          loan with thousands of others into a mortgage-backed security (MBS) and sells that bundle
          to investors, often through Fannie Mae, Freddie Mac, or Ginnie Mae. The price investors are
          willing to pay for MBS determines how much lenders can afford to charge on new loans. When
          MBS demand drops, lenders need higher rates to make originating mortgages economically
          worthwhile. This is why rates can move sharply even when the Fed does nothing.
        </p>
        <p className="text-mute leading-relaxed">
          The Fed does influence rates indirectly. When it raises the federal funds rate, bond
          markets typically reprice, the 10-year Treasury yield moves, and mortgage rates follow.
          The Fed also directly bought MBS during quantitative easing periods, which pushed rates
          down. When it stopped buying (quantitative tightening), spreads widened and rates rose.
          Understanding this chain helps you see rate moves coming rather than being surprised by them.
        </p>
      </section>

      {/* SECTION 3 */}
      <section id="loan-types" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Conventional vs FHA vs VA vs jumbo
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Not all mortgages are the same product. The type of loan you use determines your down
          payment requirements, insurance obligations, and often the rate you can get.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Conventional loans
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Conventional loans are not government-backed. They follow guidelines set by Fannie Mae and
          Freddie Mac (the conforming loan limit for 2026 is $806,500 in most US counties). They
          require at least 3% down for some programs or 5% typically, and private mortgage insurance
          (PMI) if you put down less than 20%. PMI costs 0.5 to 1.5% of the loan amount per year
          and disappears once your equity hits 20%.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          FHA loans
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Backed by the Federal Housing Administration, FHA loans accept lower FICO scores (as low as
          580 with 3.5% down) and are popular with first-time buyers. The trade-off: you pay a 1.75%
          upfront mortgage insurance premium (MIP) plus 0.55% annually. Unlike PMI, MIP on FHA loans
          stays for the life of the loan if you put less than 10% down. On a $400,000 loan, that
          upfront MIP is $7,000 rolled into the loan balance.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          VA loans
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Guaranteed by the Department of Veterans Affairs for eligible service members, veterans, and
          surviving spouses, VA loans require zero down payment and have no PMI. Rates are typically
          competitive with or below conventional rates. The only cost is a VA funding fee (1.25 to
          3.3% of the loan, depending on down payment and service history) that can be rolled into
          the loan. For eligible borrowers, VA loans are almost always the best deal available.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Jumbo loans
        </h3>
        <p className="text-mute leading-relaxed">
          Loans above the conforming limit are jumbo loans. Because they cannot be sold to Fannie or
          Freddie, lenders hold them on their own books, which means stricter underwriting: typically
          a 720 or higher FICO, 10 to 20% down, and proof of substantial liquid reserves. Jumbo rates
          are sometimes lower than conforming rates when banks aggressively pursue high-net-worth
          borrowers, but underwriting requirements are harder to meet.
        </p>
      </section>

      {/* SECTION 4 */}
      <section id="what-affects-your-rate" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          What affects your rate: FICO, LTV, term, and points
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          The advertised rate is a benchmark, not your rate. Lenders adjust the base rate up or down
          based on several borrower-specific factors using a pricing grid.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Credit score (FICO)
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          Your FICO score is the single biggest pricing variable. Lenders use the middle of your
          three bureau scores. A 760 or higher typically gets the best tier. At 680, you might pay
          0.50 to 0.75 percentage points more. On a $400,000 loan, 0.50% more in rate adds roughly
          $125 per month, or $45,000 over 30 years. Cleaning up your credit report before applying
          is worth the time.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Loan-to-value ratio (LTV)
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          LTV is your loan amount divided by the appraised home value. If you buy a $500,000 home
          and put 20% down ($100,000), your LTV is 80%. Lenders prefer lower LTVs because there is
          more equity cushion if you default. LTVs above 80% trigger PMI. LTVs above 95% trigger
          pricing add-ons on top of PMI.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Loan term
        </h3>
        <p className="text-mute leading-relaxed mb-4">
          A 15-year fixed mortgage carries a lower rate than a 30-year fixed. As of April 2026,
          Freddie Mac shows 15-year rates averaging about 6.05%, versus 6.85% for 30 years. The
          monthly payment is higher on the 15-year, but total interest paid is dramatically less.
          On a $400,000 loan, the 15-year saves roughly $190,000 in interest over the life of the
          loan compared to the 30-year.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Discount points
        </h3>
        <p className="text-mute leading-relaxed">
          One point equals 1% of the loan amount paid upfront at closing to permanently buy down
          the interest rate. On a $400,000 loan, one point costs $4,000 and typically lowers the
          rate by 0.25 percentage points. Whether buying points makes sense depends on your break-even
          timeline: divide the point cost by your monthly savings to find the number of months until
          you come out ahead. If you plan to sell or refinance within that window, buying points
          is a losing trade.
        </p>
      </section>

      {/* SECTION 5 */}
      <section id="locking-your-rate" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Locking your rate
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          A rate lock is a lender commitment to hold a specific interest rate for a set period,
          typically 30, 45, or 60 days, while your loan processes. Without a lock, your rate floats
          with market conditions. If rates rise 0.25% between your application and closing, you pay
          more every month for 30 years.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          Lock periods cost money: longer locks carry slightly higher rates because the lender bears
          more market risk. A 60-day lock is typically 0.125 to 0.25 percentage points more than a
          30-day lock. If your closing is delayed beyond the lock expiration, you may pay an extension
          fee (usually 0.125 to 0.25% per 7-day extension) or risk losing the rate.
        </p>
        <h3 className="font-display font-bold text-lg tracking-tight mt-6 mb-3">
          Float-down options
        </h3>
        <p className="text-mute leading-relaxed">
          Some lenders offer a float-down provision that lets you capture a lower rate if rates drop
          significantly after you lock, usually requiring a 0.25 to 0.50 percentage point drop. The
          option costs extra, often 0.25 to 0.50 points upfront, and the terms vary widely between
          lenders. In a falling-rate environment, it can be worth it. Get the float-down terms in
          writing: the definition of &ldquo;significantly&rdquo; matters.
        </p>
      </section>

      {/* SECTION 6 */}
      <section id="closing-costs" className="mb-14">
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-4">
          Closing costs anatomy
        </h2>
        <p className="text-mute leading-relaxed mb-4">
          Closing costs are the fees you pay to complete the transaction. On a $400,000 home, expect
          $8,000 to $14,000 in closing costs, typically 2 to 3.5% of the purchase price. They show
          up on your Loan Estimate within three business days of your application, and again on the
          Closing Disclosure three days before closing (required by CFPB rules under TRID). The two
          documents should match closely.
        </p>
        <p className="text-mute leading-relaxed mb-4">
          Here is what the major line items are:
        </p>
        <ul className="space-y-3 mb-6">
          <li className="flex gap-3">
            <span className="font-mono text-lime-deep font-bold mt-0.5">01</span>
            <div>
              <span className="font-semibold text-ink">Origination fee:</span>{" "}
              <span className="text-mute">
                What the lender charges to process the loan. Can be a flat fee ($500 to $1,500) or a
                percentage (0.5 to 1.0%). Some lenders advertise no origination fee but roll the cost
                into a higher rate instead.
              </span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-lime-deep font-bold mt-0.5">02</span>
            <div>
              <span className="font-semibold text-ink">Appraisal fee:</span>{" "}
              <span className="text-mute">
                $500 to $900 for a licensed appraiser to confirm the home&rsquo;s market value. The
                lender orders it; you pay it. Non-negotiable.
              </span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-lime-deep font-bold mt-0.5">03</span>
            <div>
              <span className="font-semibold text-ink">Title insurance:</span>{" "}
              <span className="text-mute">
                Two policies: lender&rsquo;s title insurance (required, protects the lender if
                someone challenges ownership) and owner&rsquo;s title insurance (optional but
                recommended). Together these cost $1,000 to $2,500 depending on the state.
              </span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-lime-deep font-bold mt-0.5">04</span>
            <div>
              <span className="font-semibold text-ink">Prepaid items:</span>{" "}
              <span className="text-mute">
                Prepaid homeowner&rsquo;s insurance, property taxes into escrow, and prepaid interest
                covering the days between closing and the end of the month. These are not lender fees
                but are still cash out of pocket at closing.
              </span>
            </div>
          </li>
          <li className="flex gap-3">
            <span className="font-mono text-lime-deep font-bold mt-0.5">05</span>
            <div>
              <span className="font-semibold text-ink">Recording fees:</span>{" "}
              <span className="text-mute">
                Government fees to record the deed and mortgage in public records. $50 to $250
                depending on the county.
              </span>
            </div>
          </li>
        </ul>
        <p className="text-mute leading-relaxed">
          You can shop for some services on the Loan Estimate, including title insurance, settlement
          agents, and pest inspections. Shopping those line items can save $500 to $1,500. Lender
          fees are harder to negotiate but not impossible: if you have a competing offer, use it.
        </p>
      </section>

      {/* KEY TAKEAWAYS */}
      <section className="card p-7 mb-12 bg-bg-soft/50">
        <div className="font-mono text-xs uppercase tracking-wider text-mute mb-5">
          Key takeaways
        </div>
        <ul className="space-y-3">
          {[
            "Your rate is set by the 10-year Treasury yield plus a spread driven by MBS market conditions, not directly by the Fed.",
            "On a $400,000 loan at 6.85%, you will pay roughly $544,000 in interest over 30 years. Amortization front-loads interest.",
            "FICO score is the biggest pricing lever you control. A 760 versus 680 can save $125 per month on a $400K loan.",
            "FHA loans lower the entry bar but add permanent mortgage insurance unless you put 10% down. VA loans are the best deal for eligible veterans.",
            "Rate locks protect against rising rates during processing. Float-down provisions protect against falling rates. Get both terms in writing.",
            "Expect 2 to 3.5% in closing costs. Shop the title, settlement, and pest inspection services listed on your Loan Estimate.",
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
          <Link href="/learn/refinance-break-even" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-lime">Mortgages</span> When does refinancing actually pay off? →
          </Link>
          <Link href="/learn/what-is-apr" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-violet">Credit</span> APR vs interest rate →
          </Link>
          <Link href="/learn/compound-interest-explained" className="flex items-center gap-2 u-link text-sm font-medium">
            <span className="chip chip-ink">Strategy</span> Compound interest, the only math that actually matters →
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="card p-7 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <div className="font-display font-bold text-lg tracking-tight mb-1">
            Run your own mortgage scenario
          </div>
          <p className="text-mute text-sm">
            Change the rate, term, and down payment to see your exact monthly payment.
          </p>
        </div>
        <Link href="/calculators/mortgage-payment" className="pill pill-ink flex-shrink-0">
          Open calculator →
        </Link>
      </div>
    </article>
  );
}
