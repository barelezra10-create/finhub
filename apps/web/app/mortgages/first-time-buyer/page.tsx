import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { BrandLogo } from "@/components/brand-logo";

export const metadata: Metadata = {
  title: "First-Time Home Buyer Programs and Down Payment Help 2026 | Fintiex",
  description:
    "FHA, VA, USDA, and conventional 3% down options. State down payment assistance programs. The 5 best lenders for first-time buyers. Updated for 2026.",
  alternates: { canonical: "/mortgages/first-time-buyer" },
};

interface LenderPick {
  rank: number;
  name: string;
  brand: string;
  tag: string;
  apr: string;
  minDown: string;
  bestFor: string;
  detail: string;
  href: string;
}

const picks: LenderPick[] = [
  {
    rank: 1,
    name: "Rocket Mortgage",
    brand: "rocket",
    tag: "Best online experience",
    apr: "6.95%",
    minDown: "3% conventional, 3.5% FHA",
    bestFor: "First-time buyers who want a clean app, transparent pricing, and a fast close.",
    detail:
      "Rocket walks first-time buyers through every step in-app, explains every fee, and closes in 21 to 28 days for clean files. The ONE+ program offers 1% down for income-qualified buyers, with Rocket covering the other 2%.",
    href: "/mortgages/rocket",
  },
  {
    rank: 2,
    name: "Better.com",
    brand: "better",
    tag: "Lowest closing cost",
    apr: "6.85%",
    minDown: "3% conventional, 3.5% FHA",
    bestFor: "W-2 buyers who want a flat $1,995 lender fee and an online process.",
    detail:
      "Better's flat-fee model removes percentage-based origination charges, which matters most on smaller loans where 1% origination is real money. The online flow is friendly to first-timers.",
    href: "/mortgages/better",
  },
  {
    rank: 3,
    name: "Chase Home Lending",
    brand: "chase-mortgage",
    tag: "Best DPA program",
    apr: "6.95%",
    minDown: "3% DreaMaker, 3.5% FHA",
    bestFor: "Income-eligible buyers who can stack Chase's $5,500 grant with state DPA.",
    detail:
      "Chase's DreaMaker program targets buyers under 80% area median income with 3% down and reduced PMI. The $5,500 Homebuyer Grant covers closing costs in eligible neighborhoods.",
    href: "/mortgages/chase",
  },
  {
    rank: 4,
    name: "loanDepot",
    brand: "loandepot",
    tag: "Best for FHA",
    apr: "7.05%",
    minDown: "3.5% FHA",
    bestFor: "Buyers with credit scores in the 580 to 660 range who need FHA underwriting.",
    detail:
      "loanDepot's FHA program approves down to 580 FICO and accepts gift funds for the full down payment. Approval rate on lower-credit files is meaningfully better than online competitors.",
    href: "/mortgages/loandepot",
  },
  {
    rank: 5,
    name: "PNC Bank",
    brand: "pnc",
    tag: "Best community lending",
    apr: "7.02%",
    minDown: "0% to 3%",
    bestFor: "Buyers in PNC's footprint who qualify for the bank's Community Loan or grant programs.",
    detail:
      "PNC's Community Loan offers up to 3% down with no PMI for income-qualified buyers in eligible markets. The bank also offers up to $5,000 in closing cost grants in select tracts.",
    href: "/mortgages/pnc",
  },
];

const faqItems: FAQItem[] = [
  {
    question: "How much down payment do you really need?",
    answer:
      "Less than people think. Conventional loans accept 3% down through Fannie Mae HomeReady or Freddie Mac Home Possible. FHA requires 3.5% with a 580+ FICO. VA and USDA loans require 0% down for qualified borrowers. The headline 20% figure avoids PMI but is rarely a hard requirement.",
  },
  {
    question: "What is PMI and when does it go away?",
    answer:
      "Private mortgage insurance protects the lender if you default. On a conventional loan, PMI runs 0.3% to 1.5% of the loan amount per year. It drops automatically when your loan-to-value reaches 78% per the federal Homeowners Protection Act. You can request removal at 80% with an appraisal. FHA mortgage insurance is harder to drop and may require a refinance.",
  },
  {
    question: "Conventional 3% vs FHA 3.5%: which is better?",
    answer:
      "Conventional 3% wins if your FICO is 700+ because PMI is cheaper and drops sooner. FHA 3.5% wins if your FICO is below 680 because the rate and qualification are more forgiving. Run quotes on both. The right answer depends on your specific score and down payment.",
  },
  {
    question: "What is down payment assistance (DPA)?",
    answer:
      "DPA is a state, county, or city program that gives or lends first-time buyers money for the down payment and closing costs. Most states have at least one program. Amounts range from $5,000 to $50,000+. Some are forgivable grants. Others are silent second mortgages with deferred payments. The Department of Housing and Urban Development maintains a state-by-state list.",
  },
  {
    question: "Do you have to be a true first-time buyer for these programs?",
    answer:
      "Not always. Most programs define first-time buyer as someone who has not owned a primary residence in the last three years. So if you owned a home in 2018, sold it, and have rented since, you usually qualify again. Income limits typically range from 80% to 140% of area median income.",
  },
  {
    question: "How much should you save before buying?",
    answer:
      "Plan for 5% to 8% of the home price for down payment, closing costs, and a small post-close emergency cushion. On a $400,000 home that is $20,000 to $32,000. With a 3% down conventional loan plus closing cost help, the entry point can be lower. Use our mortgage calculator to model your specific number.",
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
          { name: "First-Time Buyer", href: "/mortgages/first-time-buyer" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> First-time buyer guide for 2026
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            First-time buyer? You probably need less than you think.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            The 20% down myth keeps people renting for years longer than they need to. Conventional loans accept 3% down. FHA accepts 3.5% with a 580 FICO. VA and USDA can be zero down. Add state down payment assistance and the entry point drops further. Here is the full menu.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              See your payment
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
            <h2 className="font-display font-bold text-2xl tracking-tight">First-time buyer snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Conventional min down", value: "3%", caption: "HomeReady, Home Possible" },
              { label: "FHA min down", value: "3.5%", caption: "580+ FICO" },
              { label: "VA / USDA min down", value: "0%", caption: "Qualified veterans / rural" },
              { label: "Avg DPA in 2026", value: "$10K+", caption: "Many states, varies widely" },
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

      {/* LOAN PROGRAMS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Loan programs</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              The four loan types every first-timer should know.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            Each program has its own credit score floor, down payment minimum, and PMI rules. The right one depends on your specific FICO, savings, and military or rural eligibility.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 md:p-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-xl tracking-tight">Conventional 3% down</h3>
              <span className="chip chip-lime">Most common</span>
            </div>
            <p className="text-sm text-mute leading-relaxed mb-3">
              Fannie Mae HomeReady and Freddie Mac Home Possible accept 3% down for income-qualified buyers (typically under 80% area median income). PMI required until 80% LTV, then drops at 78% automatically. Best rate of the low-down options if your FICO is 700+.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="font-mono uppercase tracking-wider text-mute mb-1">Min FICO</div>
                <div className="font-mono tabular font-semibold">620</div>
              </div>
              <div>
                <div className="font-mono uppercase tracking-wider text-mute mb-1">Min down</div>
                <div className="font-mono tabular font-semibold">3%</div>
              </div>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-xl tracking-tight">FHA</h3>
              <span className="chip chip-lime">Lowest credit floor</span>
            </div>
            <p className="text-sm text-mute leading-relaxed mb-3">
              The Federal Housing Administration insures these loans. A 580+ FICO gets 3.5% down. A 500 to 579 FICO needs 10% down. Mortgage insurance premiums (MIP) are required for the life of the loan unless you put 10%+ down or refinance into conventional later. Best for credit recovery situations.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="font-mono uppercase tracking-wider text-mute mb-1">Min FICO</div>
                <div className="font-mono tabular font-semibold">500 (with 10% down)</div>
              </div>
              <div>
                <div className="font-mono uppercase tracking-wider text-mute mb-1">Min down</div>
                <div className="font-mono tabular font-semibold">3.5% at 580+</div>
              </div>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-xl tracking-tight">VA</h3>
              <span className="chip chip-lime">0% down</span>
            </div>
            <p className="text-sm text-mute leading-relaxed mb-3">
              For active-duty military, veterans, and qualified surviving spouses. No down payment required, no PMI, and rates run roughly 0.25 points below conventional at the same credit score. The funding fee (1.4% to 3.6% of the loan, financeable) replaces traditional mortgage insurance and is waived for service-connected disabilities.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="font-mono uppercase tracking-wider text-mute mb-1">Min FICO</div>
                <div className="font-mono tabular font-semibold">No VA minimum (lenders set 580 to 620)</div>
              </div>
              <div>
                <div className="font-mono uppercase tracking-wider text-mute mb-1">Min down</div>
                <div className="font-mono tabular font-semibold">0%</div>
              </div>
            </div>
          </div>
          <div className="card p-6 md:p-8">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-display font-bold text-xl tracking-tight">USDA</h3>
              <span className="chip chip-lime">0% down, rural</span>
            </div>
            <p className="text-sm text-mute leading-relaxed mb-3">
              The USDA Rural Development guaranteed loan program offers 0% down for buyers in eligible non-metro areas. Income caps apply (typically 115% of area median). The guarantee fee is 1% upfront and 0.35% annual, both lower than FHA MIP. Check property eligibility at the USDA online map before you offer.
            </p>
            <div className="grid grid-cols-2 gap-3 text-xs">
              <div>
                <div className="font-mono uppercase tracking-wider text-mute mb-1">Min FICO</div>
                <div className="font-mono tabular font-semibold">640</div>
              </div>
              <div>
                <div className="font-mono uppercase tracking-wider text-mute mb-1">Min down</div>
                <div className="font-mono tabular font-semibold">0%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DPA */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Down payment assistance</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Free or low-cost help for first-timers.
              </h2>
              <p className="text-mute leading-relaxed">
                Most states run at least one DPA program. Some give grants. Others provide silent seconds with deferred payments. Stack these with conventional 3% or FHA loans to lower your true out-of-pocket cost.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">State housing finance agencies</h3>
                <p className="text-mute">
                  Every state has a Housing Finance Agency (HFA) that runs first-time buyer programs. California's CalHFA, Texas's TSAHC, New York's SONYMA, and Florida Housing all offer down payment grants or silent seconds. Income caps usually run 80% to 140% of area median income. Most require completion of a homebuyer education course.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Forgivable grants vs silent seconds</h3>
                <p className="text-mute">
                  Forgivable grants are written off after you live in the home for a set period (usually 5 to 10 years). If you sell before then, you repay a prorated amount. Silent seconds are loans with no monthly payment, due when you sell or refinance. Both reduce your true out-of-pocket cost, but the forgivable grant is the better deal if you plan to stay long-term.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Lender DPA programs</h3>
                <p className="text-mute">
                  Several major lenders offer their own DPA grants in eligible neighborhoods, layered on top of state programs. Chase's $5,500 Homebuyer Grant, Bank of America's $7,500 grant, and Rocket's ONE+ program are examples. Eligibility usually depends on the property being in a designated tract or the buyer being under an income cap.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Where to find programs</h3>
                <p className="text-mute">
                  HUD's online lookup at hud.gov has links to every state and local DPA program. The CFPB also maintains a buyer education resource hub. Your lender's loan officer should know the major options in your state, but verify against the official HFA site before relying on them.
                </p>
              </div>
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
              Five lenders we recommend for first-time buyers.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Ranked by approval rate, transparency on fees, and DPA program access for buyers under 100% area median income.
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
                    <div className="text-xs font-mono text-mute uppercase tracking-wider mb-1">Min down</div>
                    <div className="text-mute">{p.minDown}</div>
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
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the numbers, then keep going.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Mortgage payment calc", href: "/calculators/mortgage-payment", detail: "P+I, PMI, taxes, insurance." },
              { label: "Refi break-even", href: "/calculators/refinance-break-even", detail: "Refinance plan for after FHA." },
              { label: "30-year fixed", href: "/mortgages/30y-fixed", detail: "The default first-time loan." },
              { label: "Rates by state", href: "/mortgages/by-state", detail: "Local DPA programs." },
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
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions for first-time buyers.</h2>
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
              See your payment with 3% down.
            </h2>
            <p className="text-ink/70 mt-2">No email. Plug in price, FICO, and down payment.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/by-state" className="pill pill-ghost">
              State DPA programs
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
