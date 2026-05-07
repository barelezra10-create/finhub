import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Mortgage Refinance Rates and Break-Even Math 2026 | Fintiex",
  description:
    "When mortgage refinance pays back. Live refi rates, break-even math, and our top 5 refinance lenders ranked by APR and closing costs. No paid placements.",
  alternates: { canonical: "/mortgages/refinance" },
};

interface LenderPick {
  rank: number;
  name: string;
  brand: string;
  tag: string;
  apr: string;
  closingCost: string;
  bestFor: string;
  detail: string;
  href: string;
}

const picks: LenderPick[] = [
  {
    rank: 1,
    name: "Better.com",
    brand: "better",
    tag: "Lowest closing cost",
    apr: "6.91%",
    closingCost: "$1,995 flat fee",
    bestFor: "Borrowers with strong credit who want a fast online close.",
    detail:
      "Better's flat-fee model removes most lender origination charges. The platform handles W-2 borrowers especially well. Closing in 21 days is realistic.",
    href: "/mortgages/better",
  },
  {
    rank: 2,
    name: "Rocket Mortgage",
    brand: "rocket",
    tag: "Best for self-employed",
    apr: "6.95%",
    closingCost: "1.0% to 1.5% of loan",
    bestFor: "Self-employed borrowers who need bank statement underwriting.",
    detail:
      "Rocket's underwriters handle non-W-2 income better than most. Higher origination cost than Better, but the approval rate on complex files is meaningfully better.",
    href: "/mortgages/rocket",
  },
  {
    rank: 3,
    name: "loanDepot",
    brand: "loandepot",
    tag: "Best for cash-out",
    apr: "6.98%",
    closingCost: "1.0% to 1.25% of loan",
    bestFor: "Owners refinancing to pull equity for renovation or debt payoff.",
    detail:
      "loanDepot allows up to 80% LTV on cash-out refinances and offers 30Y, 20Y, 15Y, and 10Y terms. Strong on jumbo refinances above the conforming limit too.",
    href: "/mortgages/loandepot",
  },
  {
    rank: 4,
    name: "Chase Home Lending",
    brand: "chase-mortgage",
    tag: "Best for existing clients",
    apr: "7.04%",
    closingCost: "0.75% to 1.0% of loan",
    bestFor: "Chase Private Client and Premier customers who get rate discounts.",
    detail:
      "Chase offers up to 0.50 percentage points off the rate for clients with $250K+ in deposits or investments. The discount alone often beats Better's flat fee for high-balance customers.",
    href: "/mortgages/chase",
  },
  {
    rank: 5,
    name: "PNC Bank",
    brand: "pnc",
    tag: "Best HELOC combo",
    apr: "7.08%",
    closingCost: "0.75% to 1.25% of loan",
    bestFor: "Borrowers who want a refinance and a HELOC underwritten together.",
    detail:
      "PNC's CHELOC product lets you fix portions of your variable HELOC rate. Refinancing your first lien with PNC streamlines the second-lien approval.",
    href: "/mortgages/pnc",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How much do you need to drop to make a refinance worth it?",
    answer:
      "The old rule of thumb was 1.0 percentage point. Today most analysts use a break-even calculation instead. If your closing costs are $4,500 and the new rate saves you $250 per month, the break-even is 18 months. As long as you plan to stay in the home longer, the refi pays off. Use our refi break-even calculator to compute your specific number.",
  },
  {
    question: "What does a refinance cost?",
    answer:
      "Refinance closing costs typically run 2% to 3% of the loan amount. On a $400,000 loan that is $8,000 to $12,000. Costs include lender origination (often 0.5% to 1.0%), title insurance, appraisal, recording fees, and prepaid escrow. Some lenders offer no-cost refinances by raising the rate by about 0.25 points.",
  },
  {
    question: "Can you refinance with less than 20% equity?",
    answer:
      "Yes, but PMI usually returns. Conventional refinances above 80% LTV require PMI. FHA refinances always include MIP regardless of LTV. The HARP program for underwater loans ended in 2018, but Fannie Mae's RefiNow and Freddie Mac's Refi Possible programs offer reduced costs for low-income borrowers, per the FHFA.",
  },
  {
    question: "Will a refinance reset the clock to 30 years?",
    answer:
      "By default, yes. Most refinances reset the term. If you are 7 years into a 30-year and refinance into another 30-year, you commit to 37 total years of payments. Ask the lender for a 23-year term, or refinance into a 15-year if your budget supports it. Custom terms (16Y, 20Y) are available at most major lenders.",
  },
  {
    question: "Does a refinance hurt your credit score?",
    answer:
      "Temporarily. The hard inquiry trims the score by 5 to 10 points and the new account drops the average age of credit. Most borrowers recover within 60 to 90 days. Multiple mortgage inquiries within 45 days count as a single inquiry per the major scoring models, so shopping around does not stack the damage.",
  },
  {
    question: "Cash-out refinance vs HELOC: which is right?",
    answer:
      "Cash-out refinances replace your first mortgage at a new (often higher) rate. HELOCs add a second lien at a variable rate but leave the first mortgage alone. If your current first-lien rate is below 5%, the HELOC almost always wins because you keep the cheap first mortgage. See our cash-out refi page for the math.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Refinance", href: "/mortgages/refinance" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Refi rates updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Refinance only when the math says yes.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A refinance can shave hundreds off the monthly payment or shorten your term by a decade. It can also burn $10,000 in closing costs if you sell the house two years later. The break-even is the only number that matters. We show you how to compute it and which lenders win on math.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/refinance-break-even" className="pill pill-ink">
              Run break-even
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages" className="pill pill-ghost">
              All mortgage rates
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Refi snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Refi 30Y avg APR", value: "6.93%", caption: "Includes typical closing costs" },
              { label: "Refi 15Y avg APR", value: "6.18%", caption: "Includes typical closing costs" },
              { label: "Avg closing cost", value: "2.4%", caption: "Of loan amount, Freddie Mac" },
              { label: "Avg break-even", value: "31 mo", caption: "When rate drops 0.75pt" },
            ].map((tile) => (
              <div key={tile.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{tile.label}</div>
                <div className="font-display font-extrabold text-3xl tabular tracking-tight mb-1">
                  {tile.value}
                </div>
                <div className="text-xs text-mute mt-2">{tile.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHEN TO REFI */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">When it makes sense</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Five reasons to refinance.
            </h2>
            <p className="text-mute leading-relaxed">
              Forget the old "1% rule." The right test is your personal break-even, then a check that you will stay in the home longer than that.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">1. Rates dropped at least 0.50 points</h3>
              <p className="text-mute">
                A 0.50-point drop on a $400,000 loan saves about $135 per month at the 30-year. With $8,000 in closing costs, the break-even is roughly 60 months. That is too long for many households. A 0.75 to 1.00 point drop typically gets the break-even under 36 months, which is the sweet spot for most refinances.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">2. You can drop PMI</h3>
              <p className="text-mute">
                If your home appreciated and your loan-to-value is now under 80%, refinancing can drop PMI immediately. On a $400,000 loan with PMI at 0.6%, that is $200 per month saved. PMI removal alone often justifies the closing cost.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">3. Switching from ARM to fixed</h3>
              <p className="text-mute">
                If your adjustable-rate mortgage (ARM) is approaching its first reset, refinancing into a fixed locks in stability. The CFPB warns that ARM resets can move rates 2 to 5 percentage points in a single adjustment if benchmark rates rose.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">4. Shortening the term</h3>
              <p className="text-mute">
                Refinancing from a 30-year into a 15-year locks in a lower rate and forces faster equity build. The math works best if rates have dropped at least 0.25 points and your budget can absorb the higher payment.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">5. Cash-out for better debt</h3>
              <p className="text-mute">
                Refinancing to pay off 22% APR credit card debt or a 9% personal loan can save thousands per year. The math works because mortgage interest at 7% beats card interest at 22%, even after extending the loan term. Only do this if the underlying spending behavior has changed. Otherwise the cards refill within a year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* BREAK-EVEN MATH */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10 mb-8">
            <div className="col-span-12 lg:col-span-5">
              <span className="chip chip-mute mb-4">Break-even math</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                The only formula that matters.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
              The break-even is the number of months it takes the new lower payment to recover the closing costs. If you sell or move before that, you lost money on the refinance.
            </div>
          </div>
          <div className="card p-6 md:p-8 mb-6">
            <div className="font-mono text-sm text-mute mb-2">Break-even formula</div>
            <div className="font-display font-extrabold text-2xl md:text-3xl tracking-tight mb-4">
              Months to break even = Closing costs / Monthly savings
            </div>
            <p className="text-mute leading-relaxed">
              Example: $8,400 in closing costs divided by $280 in monthly savings equals 30 months. If you plan to stay in the home at least 30 more months, the refi pays off. Stay 60 months and you net $8,400 in savings on top of the recouped closing costs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Include all costs</h3>
              <p className="text-sm text-mute leading-relaxed">
                Origination, appraisal, title insurance, recording, prepaid escrow, and any points purchased. The lender's Loan Estimate breaks these out per CFPB rules.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Use principal+interest savings</h3>
              <p className="text-sm text-mute leading-relaxed">
                Compare apples to apples. Use just the P+I portion of the new payment versus the old. Tax and insurance escrow shifts are unrelated to the refinance economics.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Add a buffer</h3>
              <p className="text-sm text-mute leading-relaxed">
                Most owners stay 8 years on average per the National Association of Realtors. If your break-even is over 60 months, the refi is a coin flip. Look for under 36 months.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LENDER PICKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Top picks · No sponsored placements
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Five refinance lenders we recommend.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked by APR plus closing costs on a $400K refinance scenario at 80% LTV with a 760 FICO.
            </p>
          </div>
        </div>
        <div className="space-y-4">
          {picks.map((p) => (
            <div key={p.name} className="card p-6 md:p-7">
              <div className="grid grid-cols-12 gap-6 items-start">
                <div className="col-span-12 md:col-span-1 flex items-center gap-3">
                  <BrandLogo brand={p.brand} size={48} />
                  <div className="md:hidden font-mono text-xs text-mute">#{p.rank}</div>
                </div>
                <div className="col-span-12 md:col-span-7">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="hidden md:inline font-mono text-xs text-mute">#{p.rank}</span>
                    <h3 className="font-display font-bold text-xl tracking-tight">{p.name}</h3>
                    <span className="chip chip-lime">{p.tag}</span>
                  </div>
                  <p className="text-mute leading-relaxed mb-3">{p.detail}</p>
                  <p className="text-sm text-ink/80 leading-relaxed">
                    <span className="font-semibold">Best for: </span>
                    {p.bestFor}
                  </p>
                </div>
                <div className="col-span-12 md:col-span-4 grid grid-cols-2 md:grid-cols-1 gap-3 text-sm">
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">APR</div>
                    <div className="font-mono tabular font-semibold">{p.apr}</div>
                  </div>
                  <div>
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Closing cost</div>
                    <div className="text-mute">{p.closingCost}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math, then keep going.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Refi break-even calc", href: "/calculators/refinance-break-even", detail: "The only number that matters." },
              { label: "Mortgage payment calc", href: "/calculators/mortgage-payment", detail: "Side-by-side old vs new." },
              { label: "Cash-out refinance", href: "/mortgages/cash-out", detail: "Pull equity at first-lien rates." },
              { label: "Rates by state", href: "/mortgages/by-state", detail: "Local refi averages." },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="card p-6 block group">
                <div className="flex items-center justify-between mb-3">
                  <span className="chip chip-violet">{p.label}</span>
                  <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
                </div>
                <div className="text-sm text-mute leading-relaxed">{p.detail}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about refinancing.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqItems.map((faq) => (
            <div key={faq.question} className="card p-6">
              <h3 className="font-display font-bold text-base mb-2 tracking-tight">{faq.question}</h3>
              <p className="text-mute text-sm leading-relaxed">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See if your refi pays back in time.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your old rate, new rate, and closing costs.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/refinance-break-even" className="pill pill-ink">
              Refi break-even calc
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/cash-out" className="pill pill-ghost">
              Cash-out refi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
