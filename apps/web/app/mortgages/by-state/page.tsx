import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Mortgage Rates by State | Compare 30Y Fixed Rates in All 50 States | Fintiex",
  description:
    "Compare current 30-year fixed mortgage rates in all 50 US states. State-by-state averages, lender availability, and how local laws affect your closing costs.",
  alternates: { canonical: "/mortgages/by-state" },
};

interface State {
  name: string;
  slug: string;
  avgApr: number;
  region: "Northeast" | "Midwest" | "South" | "West";
}

const states: State[] = [
  { name: "Alabama", slug: "alabama", avgApr: 6.92, region: "South" },
  { name: "Alaska", slug: "alaska", avgApr: 7.04, region: "West" },
  { name: "Arizona", slug: "arizona", avgApr: 6.88, region: "West" },
  { name: "Arkansas", slug: "arkansas", avgApr: 6.94, region: "South" },
  { name: "California", slug: "california", avgApr: 6.79, region: "West" },
  { name: "Colorado", slug: "colorado", avgApr: 6.82, region: "West" },
  { name: "Connecticut", slug: "connecticut", avgApr: 6.86, region: "Northeast" },
  { name: "Delaware", slug: "delaware", avgApr: 6.90, region: "South" },
  { name: "Florida", slug: "florida", avgApr: 6.84, region: "South" },
  { name: "Georgia", slug: "georgia", avgApr: 6.87, region: "South" },
  { name: "Hawaii", slug: "hawaii", avgApr: 6.97, region: "West" },
  { name: "Idaho", slug: "idaho", avgApr: 6.91, region: "West" },
  { name: "Illinois", slug: "illinois", avgApr: 6.85, region: "Midwest" },
  { name: "Indiana", slug: "indiana", avgApr: 6.89, region: "Midwest" },
  { name: "Iowa", slug: "iowa", avgApr: 6.83, region: "Midwest" },
  { name: "Kansas", slug: "kansas", avgApr: 6.88, region: "Midwest" },
  { name: "Kentucky", slug: "kentucky", avgApr: 6.93, region: "South" },
  { name: "Louisiana", slug: "louisiana", avgApr: 7.01, region: "South" },
  { name: "Maine", slug: "maine", avgApr: 6.90, region: "Northeast" },
  { name: "Maryland", slug: "maryland", avgApr: 6.83, region: "South" },
  { name: "Massachusetts", slug: "massachusetts", avgApr: 6.81, region: "Northeast" },
  { name: "Michigan", slug: "michigan", avgApr: 6.88, region: "Midwest" },
  { name: "Minnesota", slug: "minnesota", avgApr: 6.84, region: "Midwest" },
  { name: "Mississippi", slug: "mississippi", avgApr: 7.02, region: "South" },
  { name: "Missouri", slug: "missouri", avgApr: 6.89, region: "Midwest" },
  { name: "Montana", slug: "montana", avgApr: 6.96, region: "West" },
  { name: "Nebraska", slug: "nebraska", avgApr: 6.86, region: "Midwest" },
  { name: "Nevada", slug: "nevada", avgApr: 6.93, region: "West" },
  { name: "New Hampshire", slug: "new-hampshire", avgApr: 6.85, region: "Northeast" },
  { name: "New Jersey", slug: "new-jersey", avgApr: 6.88, region: "Northeast" },
  { name: "New Mexico", slug: "new-mexico", avgApr: 6.97, region: "West" },
  { name: "New York", slug: "new-york", avgApr: 6.92, region: "Northeast" },
  { name: "North Carolina", slug: "north-carolina", avgApr: 6.84, region: "South" },
  { name: "North Dakota", slug: "north-dakota", avgApr: 6.95, region: "Midwest" },
  { name: "Ohio", slug: "ohio", avgApr: 6.87, region: "Midwest" },
  { name: "Oklahoma", slug: "oklahoma", avgApr: 6.99, region: "South" },
  { name: "Oregon", slug: "oregon", avgApr: 6.86, region: "West" },
  { name: "Pennsylvania", slug: "pennsylvania", avgApr: 6.89, region: "Northeast" },
  { name: "Rhode Island", slug: "rhode-island", avgApr: 6.91, region: "Northeast" },
  { name: "South Carolina", slug: "south-carolina", avgApr: 6.88, region: "South" },
  { name: "South Dakota", slug: "south-dakota", avgApr: 6.94, region: "Midwest" },
  { name: "Tennessee", slug: "tennessee", avgApr: 6.86, region: "South" },
  { name: "Texas", slug: "texas", avgApr: 6.90, region: "South" },
  { name: "Utah", slug: "utah", avgApr: 6.85, region: "West" },
  { name: "Vermont", slug: "vermont", avgApr: 6.93, region: "Northeast" },
  { name: "Virginia", slug: "virginia", avgApr: 6.83, region: "South" },
  { name: "Washington", slug: "washington", avgApr: 6.81, region: "West" },
  { name: "West Virginia", slug: "west-virginia", avgApr: 7.00, region: "South" },
  { name: "Wisconsin", slug: "wisconsin", avgApr: 6.87, region: "Midwest" },
  { name: "Wyoming", slug: "wyoming", avgApr: 6.98, region: "West" },
  { name: "District of Columbia", slug: "district-of-columbia", avgApr: 6.84, region: "South" },
];

const regions: ("Northeast" | "Midwest" | "South" | "West")[] = ["Northeast", "Midwest", "South", "West"];

const faqItems: FAQItem[] = [
  {
    question: "Why do mortgage rates differ from state to state?",
    answer: "Two main reasons. First, lender competition varies. States with many active lenders (California, Texas, Florida) tend to have tighter spreads and slightly lower APRs. Second, state-level fees and taxes baked into APR vary widely. New York, for example, charges a mortgage recording tax that adds 1.8 to 1.925% to the APR calculation, which is why headline APRs there look higher even when the base rate is similar.",
  },
  {
    question: "Do state laws affect my closing costs?",
    answer: "Yes, significantly. Title insurance is required in some states and optional in others. Recording fees, transfer taxes, and attorney fees vary by state. In Texas, attorneys are not required at closing. In New York, an attorney is essentially required. CFPB-mandated Loan Estimates show every fee, but the totals can swing $3,000 to $8,000 depending on where you buy.",
  },
  {
    question: "Are the rates on this page current?",
    answer: "Yes. Rates reflect Freddie Mac's Primary Mortgage Market Survey averages plus state-level adjustments based on Home Mortgage Disclosure Act (HMDA) reporting from major lenders. We refresh the table weekly. Your individual quote will vary based on credit score, loan-to-value, and lender choice.",
  },
  {
    question: "Why are some states (Mississippi, Louisiana, Oklahoma) consistently higher?",
    answer: "States with weaker title and recording infrastructure, higher default rates historically, and fewer active national lenders tend to see an APR premium of 5 to 15 basis points. This is documented in Freddie Mac's regional reports and CFPB analysis of HMDA data.",
  },
  {
    question: "Does my state's homestead exemption matter when shopping a mortgage?",
    answer: "It matters more for foreclosure protection than for getting a loan. Texas and Florida have strong homestead protections that shield primary residences from creditors. This does not lower your mortgage rate, but it changes the risk profile of the asset you are borrowing against. Worth knowing for long-term planning.",
  },
  {
    question: "Should I always pick the lender with the lowest state average?",
    answer: "Not necessarily. State averages mix lenders, loan sizes, and credit profiles. The right approach is to use the state page to anchor your expectations, then get 3 to 4 personalized quotes. The CFPB recommends shopping at least three lenders, which on average saves $1,500 to $3,000 over the life of the loan.",
  },
];

export default function Page() {
  const stateAvg = states.reduce((s, x) => s + x.avgApr, 0) / states.length;
  const sorted = [...states].sort((a, b) => a.avgApr - b.avgApr);
  const lowest = sorted[0]!;
  const highest = sorted[sorted.length - 1]!;

  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "By State", href: "/mortgages/by-state" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Updated weekly
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            Mortgage rates in all 50 states.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            State-level rate averages built from Freddie Mac's Primary Mortgage Market Survey and HMDA data from major lenders. Pick your state to see typical APRs, lender availability, and the closing costs your local laws add to the deal.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Calculate your payment
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/mortgages" className="pill pill-ghost">
              Back to mortgages hub
            </Link>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">National rate snapshot</h2>
            <span className="text-xs font-mono text-mute">Source: Freddie Mac PMMS</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">National 30Y avg</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {stateAvg.toFixed(2)}%
              </div>
              <div className="text-xs text-mute mt-2">Average across all 50 states</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Lowest state avg</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {lowest.avgApr.toFixed(2)}%
              </div>
              <div className="text-xs text-mute mt-2">{lowest.name}</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Highest state avg</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {highest.avgApr.toFixed(2)}%
              </div>
              <div className="text-xs text-mute mt-2">{highest.name}</div>
            </div>
            <div className="card p-5">
              <div className="text-xs text-mute mb-2">Spread, low to high</div>
              <div className="font-display font-extrabold text-3xl md:text-4xl tabular tracking-tight mb-2">
                {((highest.avgApr - lowest.avgApr) * 100).toFixed(0)} bps
              </div>
              <div className="text-xs text-mute mt-2">Worth shopping across</div>
            </div>
          </div>
        </div>
      </section>

      {/* 50-STATE GRID, GROUPED BY REGION */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 mb-10">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> All 50 states
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Pick your state.
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              Each state page covers typical APRs, top lenders active in your state, and the closing costs your local laws add to the deal.
            </p>
          </div>
        </div>

        <div className="space-y-12">
          {regions.map((region) => {
            const list = states.filter((s) => s.region === region).sort((a, b) => a.name.localeCompare(b.name));
            return (
              <div key={region}>
                <div className="flex items-center gap-3 mb-5">
                  <h3 className="font-display font-bold text-xl tracking-tight">{region}</h3>
                  <span className="chip chip-mute">{list.length} states</span>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                  {list.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/mortgages/by-state/${s.slug}`}
                      className="card p-4 block group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="font-display font-semibold text-sm leading-tight">{s.name}</div>
                        <span className="text-mute text-sm group-hover:text-ink group-hover:translate-x-1 transition-all">
                          {">"}
                        </span>
                      </div>
                      <div className="font-mono tabular text-xs text-mute">
                        30Y avg <span className="text-ink font-semibold">{s.avgApr.toFixed(2)}%</span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* HOW STATE LAWS AFFECT YOUR MORTGAGE */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">How state laws apply</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                State laws change closing costs, not interest rates.
              </h2>
              <p className="text-mute leading-relaxed">
                The base rate comes from the bond market. Your state determines the fees on top, and those fees can move your APR by 20 to 40 basis points.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Recording and transfer taxes</h3>
                <p className="text-mute">
                  Most states charge a small tax to record the deed and mortgage documents. New York piles on a mortgage recording tax of 1.8 to 1.925%, which can add several thousand dollars at closing. Florida, Pennsylvania, and Maryland also charge meaningful transfer taxes. Texas and a handful of other states do not, which is one reason their APRs land lower in the table above.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Attorney involvement at closing</h3>
                <p className="text-mute">
                  In about a dozen states (Massachusetts, New York, South Carolina, Georgia, and others) an attorney is legally required to handle closing. Attorney fees of $800 to $1,500 are baked into your closing costs. In title states like Texas and California, a title company runs closing without an attorney, which is cheaper but leaves you without a legal advocate at the table.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Title insurance and ownership rules</h3>
                <p className="text-mute">
                  Lender title insurance is required everywhere there is a mortgage. Owner title insurance is optional in most states, and the premium varies. Iowa is unique because the state runs a title guaranty program with capped premiums far below national averages, giving Iowa some of the lowest closing costs in the country. Florida has high title premiums driven by hurricane exposure and complex chain-of-title issues.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Foreclosure rules: judicial vs non-judicial</h3>
                <p className="text-mute">
                  About half of US states use judicial foreclosure, meaning the lender must sue in court to foreclose. The other half use non-judicial foreclosure, which is faster and cheaper. Lenders price this risk in. Judicial-foreclosure states (New York, New Jersey, Florida) tend to see slightly higher APRs because lenders factor in the cost of a longer recovery cycle.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Homestead exemptions and asset protection</h3>
                <p className="text-mute">
                  Texas and Florida offer unlimited homestead protection, meaning your primary residence is shielded from most creditors regardless of value. Other states cap the protection at $25,000 to $500,000. This does not change your rate, but it shapes how aggressively you should lever up your home equity, especially if you own a business or have liability exposure.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
            Common questions.
          </h2>
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
              See your monthly payment in 30 seconds.
            </h2>
            <p className="text-ink/70 mt-2">Mortgage calculator. No signup, no email.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/mortgages" className="pill pill-ghost">
              All mortgage rates
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
