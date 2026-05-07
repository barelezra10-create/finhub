import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "Jumbo Mortgage Rates 2026: Above $766,550 Conforming | Fintiex",
  description:
    "Jumbo mortgage rates today, current spread vs conforming, and the top 5 jumbo lenders. Real APRs, real closing costs, no paid placements. Updated daily.",
  alternates: { canonical: "/mortgages/jumbo" },
};

interface LenderPick {
  rank: number;
  name: string;
  brand: string;
  tag: string;
  apr: string;
  loanLimit: string;
  bestFor: string;
  detail: string;
  href: string;
}

const picks: LenderPick[] = [
  {
    rank: 1,
    name: "Chase Home Lending",
    brand: "chase-mortgage",
    tag: "Best private client",
    apr: "7.06%",
    loanLimit: "Up to $30M",
    bestFor: "Chase Private Client members with $250K+ in deposits or investments.",
    detail:
      "Chase offers up to 0.50 points off the rate for Private Client and Premier customers. Jumbo limits run to $30M for trophy properties. Strong on portfolio underwriting.",
    href: "/mortgages/chase",
  },
  {
    rank: 2,
    name: "Wells Fargo Home Lending",
    brand: "wellsfargo-mortgage",
    tag: "Best for asset-heavy",
    apr: "7.12%",
    loanLimit: "Up to $20M",
    bestFor: "Borrowers with significant non-W-2 income or asset depletion qualification.",
    detail:
      "Wells Fargo's Portfolio jumbo line uses asset depletion calculations to qualify borrowers without traditional income. The bank holds these loans on balance sheet rather than selling.",
    href: "/mortgages/wells-fargo",
  },
  {
    rank: 3,
    name: "Rocket Mortgage",
    brand: "rocket",
    tag: "Best online jumbo",
    apr: "7.18%",
    loanLimit: "Up to $3M",
    bestFor: "W-2 borrowers who want a fully online jumbo close.",
    detail:
      "Rocket's jumbo product caps at $3M but offers transparent pricing and 21-day closes. The 760+ FICO requirement is firm. Strong choice for first-time jumbo borrowers.",
    href: "/mortgages/rocket",
  },
  {
    rank: 4,
    name: "U.S. Bank",
    brand: "usbank",
    tag: "Best for relationship pricing",
    apr: "7.21%",
    loanLimit: "Up to $5M",
    bestFor: "Existing U.S. Bank customers with linked deposit accounts.",
    detail:
      "U.S. Bank discounts the jumbo rate by 0.25 to 0.375 points for customers with $50K+ in linked deposits. Common in the Midwest and Mountain West.",
    href: "/mortgages/us-bank",
  },
  {
    rank: 5,
    name: "loanDepot",
    brand: "loandepot",
    tag: "Best for cash-out jumbo",
    apr: "7.24%",
    loanLimit: "Up to $4M",
    bestFor: "Owners with significant equity who need to cash out above conforming limits.",
    detail:
      "loanDepot allows up to 80% LTV on cash-out jumbo refinances, which is higher than most competitors. Useful for owners pulling equity for investment property purchases.",
    href: "/mortgages/loandepot",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "What is the 2026 conforming loan limit?",
    answer:
      "The Federal Housing Finance Agency set the baseline conforming loan limit at $766,550 for 2026. In high-cost counties (parts of California, the Northeast, Hawaii, and Alaska) the limit goes up to $1,149,825. Loans above these limits are jumbo and cannot be sold to Fannie Mae or Freddie Mac.",
  },
  {
    question: "How much higher are jumbo rates than conforming?",
    answer:
      "Historically jumbos carried a 0.25 to 0.50 percentage point premium over conforming. In 2026 that gap has narrowed to roughly 0.15 to 0.35 points because banks compete hard for jumbo borrowers as portfolio holds. Some private banks offer jumbo rates below conforming for relationship clients.",
  },
  {
    question: "What credit score do you need for a jumbo loan?",
    answer:
      "Most jumbo lenders require 700 minimum and reserve their best rates for 760+. Reserves matter as much as score. Expect to document 6 to 12 months of mortgage payments in liquid reserves, sometimes more on second homes or investment properties.",
  },
  {
    question: "Can you get jumbo with less than 20% down?",
    answer:
      "Yes, but selectively. Several lenders offer 90% LTV jumbos with PMI. A few offer 95% LTV with reserves and pristine credit. Most jumbo borrowers put 20% to 25% down because higher LTVs trigger steeper rate adjustments and tighter qualification.",
  },
  {
    question: "Are jumbo loans assumable?",
    answer:
      "Almost never. Conventional jumbos are typically not assumable. If a future buyer wants your low rate, they will need their own approval. This matters less today than during the rate spike of 2023, but it factors into resale calculus on luxury properties.",
  },
  {
    question: "Can you refinance from jumbo into conforming?",
    answer:
      "Yes, if your loan balance pays down below the conforming limit. Many jumbo borrowers refinance into conforming after a few years of principal reduction or after a rate drop combined with a cash-in. This typically saves 0.20 to 0.40 points on the rate.",
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
          { name: "Jumbo", href: "/mortgages/jumbo" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Jumbo rates updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Jumbo loans: above conforming, below the noise.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Jumbo mortgages cover loan amounts above the 2026 conforming limit of $766,550 (or $1,149,825 in high-cost counties). The rate gap to conforming has narrowed to about 0.15 to 0.35 points in 2026 as banks compete for portfolio holds. Here is who wins on rate, who wins on flexibility, and what to ask before you apply.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Calculate jumbo payment
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
            <h2 className="font-display font-bold text-2xl tracking-tight">Jumbo snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Jumbo 30Y avg APR", value: "7.18%", caption: "Loan above $766,550" },
              { label: "Conforming 30Y", value: "6.85%", caption: "For comparison" },
              { label: "Jumbo spread", value: "0.33pt", caption: "Above conforming" },
              { label: "Conforming limit", value: "$766,550", caption: "FHFA baseline 2026" },
            ].map((tile) => (
              <div key={tile.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{tile.label}</div>
                <div className="font-display font-extrabold text-2xl md:text-3xl tabular tracking-tight mb-1">
                  {tile.value}
                </div>
                <div className="text-xs text-mute mt-2">{tile.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS A JUMBO */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">The basics</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              What makes a loan jumbo.
            </h2>
            <p className="text-mute leading-relaxed">
              Jumbo is defined by loan size, not home price. The size threshold is set by the Federal Housing Finance Agency each year and tracks national home price growth.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">The 2026 limits, in plain numbers</h3>
              <p className="text-mute">
                The FHFA set the baseline conforming limit at $766,550 for 2026. Counties designated high-cost (San Francisco, Los Angeles, New York City, parts of Hawaii, the DC metro, and others) have a ceiling of $1,149,825. Any loan above the local limit is a jumbo. The FHFA publishes the full county list annually.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Why jumbos are different</h3>
              <p className="text-mute">
                Conforming loans get sold to Fannie Mae or Freddie Mac, which means lenders move the credit risk off their books. Jumbos cannot be sold to the agencies. Banks either hold them on balance sheet or sell them to private investors. That changes underwriting standards. Lenders care about the borrower long-term, not just at closing, so reserves and credit history weigh heavier.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">The rate spread, then and now</h3>
              <p className="text-mute">
                For most of the post-2008 era, jumbos carried a 0.25 to 0.50 point premium over conforming. In 2024 and 2025 the spread inverted at some lenders, with jumbos pricing below conforming for relationship clients. As of May 2026 the average spread is back to about 0.33 points but private bank pricing for high-net-worth clients can still beat conforming.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Documentation runs deeper</h3>
              <p className="text-mute">
                Expect two years of full tax returns including all schedules, two months of statements on every account (checking, savings, brokerage, retirement), and proof of reserves equal to 6 to 12 months of mortgage payments. Self-employed borrowers should plan for additional CPA letters, a P&L year-to-date, and sometimes business bank statements.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* LENDER PICKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">
                <span className="pulse-dot" /> Top picks · No sponsored placements
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Five jumbo lenders we recommend.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                Ranked by APR plus relationship pricing on a $1.2M jumbo at 80% LTV with a 760 FICO and 12 months reserves.
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
                      <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Max loan</div>
                      <div className="text-mute">{p.loanLimit}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUALIFICATION */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Qualification</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              What lenders actually check.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            Jumbo underwriting goes deeper than conforming. The lender holds the loan, so they want a complete picture. Expect a longer document checklist and a more conservative DTI cap.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">FICO 700+</h3>
            <p className="text-sm text-mute leading-relaxed">
              Most lenders require a 700 minimum. Top pricing tier starts at 760. A 740 score on a jumbo is treated like a 700 on conforming.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">DTI under 43%</h3>
            <p className="text-sm text-mute leading-relaxed">
              Most jumbo programs cap debt-to-income at 43%. Some private banks go to 45% with strong reserves. Conforming sometimes allows 50%, jumbos rarely do.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">6 to 12 months reserves</h3>
            <p className="text-sm text-mute leading-relaxed">
              Cash, brokerage, and retirement balances all count toward reserves. Some lenders count 100% of cash and 70% of retirement. Document well.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the numbers, then keep going.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Mortgage payment calc", href: "/calculators/mortgage-payment", detail: "Jumbo P+I plus taxes." },
              { label: "Refi break-even", href: "/calculators/refinance-break-even", detail: "Refi from jumbo to conforming." },
              { label: "Cash-out refinance", href: "/mortgages/cash-out", detail: "Pull equity above conforming." },
              { label: "Rates by state", href: "/mortgages/by-state", detail: "Local jumbo limits." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about jumbo loans.</h2>
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
              See your jumbo payment, plus taxes.
            </h2>
            <p className="text-ink/70 mt-2">No email. Plug in price, down payment, and rate.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/refinance" className="pill pill-ghost">
              Jumbo refinance
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
