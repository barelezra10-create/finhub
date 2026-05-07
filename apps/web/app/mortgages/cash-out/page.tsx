import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Cash-Out Refinance Rates and Math 2026 | Fintiex",
  description:
    "Cash-out refinance rates today, when it makes sense vs HELOC, real examples, and our top 5 cash-out lenders. No paid placements. Updated daily.",
  alternates: { canonical: "/mortgages/cash-out" },
};

interface LenderPick {
  rank: number;
  name: string;
  brand: string;
  tag: string;
  apr: string;
  maxLtv: string;
  bestFor: string;
  detail: string;
  href: string;
}

const picks: LenderPick[] = [
  {
    rank: 1,
    name: "loanDepot",
    brand: "loandepot",
    tag: "Highest LTV",
    apr: "7.05%",
    maxLtv: "80% standard, 85% case-by-case",
    bestFor: "Owners pulling maximum equity for a down payment on a second property.",
    detail:
      "loanDepot is among the few lenders pushing to 85% LTV on cash-out refinances for strong borrowers. The rate premium at 80%+ runs about 0.25 points above conforming.",
    href: "/mortgages/loandepot",
  },
  {
    rank: 2,
    name: "Better.com",
    brand: "better",
    tag: "Lowest closing cost",
    apr: "7.08%",
    maxLtv: "80%",
    bestFor: "W-2 borrowers who want a fast online cash-out close at a flat fee.",
    detail:
      "Better's flat $1,995 lender fee strips out origination charges. On a $300,000 cash-out the savings versus a 1% origination is $1,000+. Limited to 80% LTV.",
    href: "/mortgages/better",
  },
  {
    rank: 3,
    name: "Rocket Mortgage",
    brand: "rocket",
    tag: "Best for self-employed",
    apr: "7.12%",
    maxLtv: "80%",
    bestFor: "Self-employed borrowers who need bank statement programs.",
    detail:
      "Rocket underwrites bank statement income on cash-out refinances, which most online lenders refuse. Useful for owners with strong cash flow but light tax-return income.",
    href: "/mortgages/rocket",
  },
  {
    rank: 4,
    name: "Chase Home Lending",
    brand: "chase-mortgage",
    tag: "Best relationship rate",
    apr: "7.15%",
    maxLtv: "80%",
    bestFor: "Chase Private Client and Premier customers who get rate discounts.",
    detail:
      "Chase clients with $250K+ in deposits or investments earn up to 0.50 points off the cash-out rate, often the lowest effective APR for high-balance customers.",
    href: "/mortgages/chase",
  },
  {
    rank: 5,
    name: "PNC Bank",
    brand: "pnc",
    tag: "Best HELOC alternative",
    apr: "7.20%",
    maxLtv: "80%",
    bestFor: "Borrowers comparing cash-out against a fixed-rate HELOC stack.",
    detail:
      "PNC's CHELOC product can convert HELOC balances to fixed segments, which provides a hybrid alternative to a full cash-out refinance. Useful when the first-lien rate is below 5%.",
    href: "/mortgages/pnc",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How much can you cash out?",
    answer:
      "Most lenders cap cash-out refinances at 80% loan-to-value (LTV). On a home worth $600,000 with a $200,000 mortgage, the maximum new loan is $480,000, which means $280,000 in cash. A few lenders go to 85% on conventional. VA cash-out can go to 100% LTV for qualified veterans.",
  },
  {
    question: "Is cash-out refinance interest tax-deductible?",
    answer:
      "Only when the cash is used to buy, build, or substantially improve the home that secures the loan, per the 2017 Tax Cuts and Jobs Act. Cash-out used to pay off credit card debt, fund education, or buy a car is not deductible. Consult a tax professional for your situation.",
  },
  {
    question: "Cash-out refi vs HELOC: which wins?",
    answer:
      "If your current first-lien mortgage rate is below 5.5%, the HELOC almost always wins because you keep the cheap first mortgage. If your first-lien rate is above 7%, the cash-out can lower the entire loan rate plus extract equity. Run both scenarios. Our cash-out vs HELOC math is a few sections above.",
  },
  {
    question: "How long does a cash-out refinance take?",
    answer:
      "Typical close is 30 to 45 days. Online lenders like Better and Rocket can close in 21 days for clean W-2 files. Cash-out adds an appraisal step that can extend the timeline. The CFPB requires a three-day rescission period after closing for primary residences.",
  },
  {
    question: "Can you do a cash-out refinance on an investment property?",
    answer:
      "Yes, but at lower LTV (typically 70% to 75%) and a higher rate (about 0.50 to 0.75 points above primary). Reserves of 6 to 12 months of mortgage payments are usually required. Several major lenders pause investment property cash-out from time to time, so check current availability.",
  },
  {
    question: "What credit score do you need for cash-out?",
    answer:
      "Conventional cash-out generally requires 620 minimum, with best pricing at 740+. FHA cash-out allows scores as low as 580 but caps LTV at 80%. VA cash-out has no minimum score per the VA, but most lenders set 620 as a floor. Higher LTV requires higher score.",
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
          { name: "Cash-Out Refinance", href: "/mortgages/cash-out" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Cash-out rates updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Cash-out refinance: pull equity, but only if the math wins.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A cash-out refinance replaces your existing first mortgage with a larger one and hands you the difference in cash. It is powerful for renovation, debt consolidation, or a major purchase. It is dangerous if you carry a low first-lien rate or treat the cash as found money. We show you when it works and when a HELOC wins instead.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/refinance-break-even" className="pill pill-ink">
              Run the math
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/heloc" className="pill pill-ghost">
              Compare HELOC
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">Cash-out snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Cash-out 30Y avg APR", value: "7.10%", caption: "Avg of 14 lenders" },
              { label: "Standard refi 30Y", value: "6.93%", caption: "For comparison" },
              { label: "Cash-out premium", value: "0.17pt", caption: "Above standard refi" },
              { label: "Max LTV (typical)", value: "80%", caption: "VA goes to 100%" },
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

      {/* WHEN IT WORKS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">When it works</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Three scenarios where cash-out wins.
            </h2>
            <p className="text-mute leading-relaxed">
              Cash-out is the right tool when the new loan rate is similar to your old one and the cash funds a productive use.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Scenario 1: Pay off high-rate debt</h3>
              <p className="text-mute">
                You owe $40,000 across credit cards at 22% APR. Monthly minimums are $1,200. A cash-out at 7.10% replaces that with about $270 in monthly interest on the additional $40,000 of mortgage. The savings: roughly $11,000 in year-one interest. The risk: if you refill the cards, you doubled your debt. The only people who should run this play are those who close the cards or freeze them.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Scenario 2: Renovation that adds value</h3>
              <p className="text-mute">
                A $60,000 kitchen remodel that boosts home value by $80,000 funded at 7.10% mortgage rates beats funding at 9% personal loan rates or 22% credit cards. The bonus: per the 2017 Tax Cuts and Jobs Act, the interest is deductible if the cash funds substantial improvements to the home. Get a written appraisal estimate before the project, not after.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Scenario 3: Down payment on second property</h3>
              <p className="text-mute">
                Pulling 20% to 25% equity to fund a down payment on an investment property or vacation home is one of the most common cash-out uses among long-term homeowners. The math works when the new property generates rental income that covers more than its cost of capital. Run the numbers conservatively and assume 5% to 8% vacancy and maintenance.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">When cash-out loses</h3>
              <p className="text-mute">
                If your existing first-lien rate is below 5.5%, you almost always lose money on a cash-out. Replacing a 4.0% first mortgage with a 7.10% cash-out adds tens of thousands in interest over the life of the loan, even after the savings on the cashed-out amount. A HELOC at 8.5% is usually cheaper because it leaves the cheap first mortgage untouched.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CASH-OUT VS HELOC */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10 mb-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="chip chip-mute mb-4">Cash-out vs HELOC</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                The decision matrix.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
              The right answer hinges on your existing first-lien rate. Run the numbers. Do not let the lender steer you toward whichever product they push hardest.
            </div>
          </div>
          <div className="card p-6 md:p-8 mb-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-mute mb-2">Old first-lien rate</div>
                <div className="font-display font-bold text-lg mb-1">Below 5.5%</div>
                <div className="text-mute">HELOC almost always wins. Keep the cheap first mortgage and add a second lien for the cash you need.</div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-mute mb-2">Old first-lien rate</div>
                <div className="font-display font-bold text-lg mb-1">5.5% to 6.5%</div>
                <div className="text-mute">Coin flip. HELOC wins on smaller amounts (under $50K). Cash-out wins on larger amounts where blended rate matters more.</div>
              </div>
              <div>
                <div className="text-xs font-mono uppercase tracking-wider text-mute mb-2">Old first-lien rate</div>
                <div className="font-display font-bold text-lg mb-1">Above 6.5%</div>
                <div className="text-mute">Cash-out usually wins. The new fixed rate is better than the old one, and you get the cash too.</div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Cash-out: fixed rate</h3>
              <p className="text-sm text-mute leading-relaxed">
                Cash-out is a brand-new fixed-rate mortgage. You know the payment for 30 years. HELOCs are variable and can rise sharply if the Fed hikes.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">HELOC: keep your old rate</h3>
              <p className="text-sm text-mute leading-relaxed">
                A HELOC is a second lien. Your existing first mortgage stays at the old rate, which is huge if you locked in 3% to 5% during 2020-2022.
              </p>
            </div>
            <div className="card p-6">
              <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Closing cost difference</h3>
              <p className="text-sm text-mute leading-relaxed">
                Cash-out closing costs run 2% to 3% of the loan. HELOC closing costs are usually $0 to $500. Small loans favor HELOC purely on closing cost economics.
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
              Five cash-out lenders we recommend.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked on a $400K cash-out refinance scenario at 75% LTV with a 760 FICO and W-2 income.
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
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Max LTV</div>
                    <div className="text-mute">{p.maxLtv}</div>
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
              { label: "Refi break-even calc", href: "/calculators/refinance-break-even", detail: "When the savings recoup the cost." },
              { label: "Mortgage payment calc", href: "/calculators/mortgage-payment", detail: "New payment after cash-out." },
              { label: "HELOC", href: "/mortgages/heloc", detail: "Second-lien alternative." },
              { label: "Standard refinance", href: "/mortgages/refinance", detail: "Lower the rate without cash-out." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about cash-out refinance.</h2>
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
              See if cash-out beats a HELOC for you.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your old rate, new rate, and cash needed.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/refinance-break-even" className="pill pill-ink">
              Refi break-even calc
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/heloc" className="pill pill-ghost">
              HELOC vs cash-out
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
