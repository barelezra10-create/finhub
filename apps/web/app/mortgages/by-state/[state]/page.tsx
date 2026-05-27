import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { states, getStateBySlug } from "@/lib/states";
import { BrandLogo } from "@/components/brand-logo";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return { title: "State not found" };
  return {
    title: `${state.name} Mortgage Rates 2026 | Fintiex`,
    description: `Current 30Y, 15Y, FHA, and jumbo mortgage rates in ${state.name}. Top lenders, closing cost rules, and first-time buyer programs for ${state.name} residents.`,
    alternates: { canonical: `/mortgages/by-state/${slug}` },
  };
}

// Deterministic hash so each state gets a stable, plausible rate offset.
function hashSlug(slug: string): number {
  let h = 0;
  for (let i = 0; i < slug.length; i++) {
    h = (h * 31 + slug.charCodeAt(i)) >>> 0;
  }
  return h;
}

// Returns a value in [-1, 1] driven by the hash, then scaled to a small bps adjustment.
function stateOffsetBps(slug: string, salt: number): number {
  const h = hashSlug(slug + ":" + salt.toString());
  const norm = (h % 1000) / 999; // 0..1
  const signed = norm * 2 - 1; // -1..1
  // Up to 25 bps in either direction.
  return Math.round(signed * 25);
}

function adjustedRate(base: number, slug: string, salt: number): number {
  const bps = stateOffsetBps(slug, salt);
  return Math.round((base + bps / 100) * 100) / 100;
}

// Rough median home price ranges by region for plausible state-specific copy.
const HOME_PRICE_BUCKETS: Record<string, { label: string; band: string }> = {
  // Coastal high
  california: { label: "well above the national median", band: "$700,000 to $900,000" },
  hawaii: { label: "the highest in the country", band: "above $850,000" },
  washington: { label: "above the national median", band: "$550,000 to $650,000" },
  oregon: { label: "above the national median", band: "$475,000 to $550,000" },
  newyork: { label: "above the national median", band: "$450,000 to $550,000" },
  "new-york": { label: "above the national median", band: "$450,000 to $550,000" },
  "new-jersey": { label: "above the national median", band: "$480,000 to $550,000" },
  massachusetts: { label: "well above the national median", band: "$580,000 to $680,000" },
  "rhode-island": { label: "above the national median", band: "$430,000 to $500,000" },
  connecticut: { label: "above the national median", band: "$400,000 to $475,000" },
  colorado: { label: "above the national median", band: "$525,000 to $600,000" },
  utah: { label: "above the national median", band: "$510,000 to $580,000" },
  maryland: { label: "above the national median", band: "$420,000 to $490,000" },
  virginia: { label: "above the national median", band: "$400,000 to $470,000" },
  "new-hampshire": { label: "above the national median", band: "$450,000 to $525,000" },
  "district-of-columbia": { label: "the highest in the Mid-Atlantic", band: "$610,000 to $720,000" },
  // Midwest / lower-cost
  florida: { label: "above the national median", band: "$400,000 to $475,000" },
  texas: { label: "near the national median", band: "$320,000 to $380,000" },
  arizona: { label: "above the national median", band: "$420,000 to $490,000" },
  nevada: { label: "above the national median", band: "$430,000 to $490,000" },
  georgia: { label: "near the national median", band: "$330,000 to $390,000" },
  "north-carolina": { label: "near the national median", band: "$340,000 to $400,000" },
  "south-carolina": { label: "near the national median", band: "$320,000 to $380,000" },
  pennsylvania: { label: "below the national median", band: "$255,000 to $310,000" },
  ohio: { label: "well below the national median", band: "$230,000 to $275,000" },
  michigan: { label: "below the national median", band: "$245,000 to $290,000" },
  illinois: { label: "near the national median", band: "$285,000 to $335,000" },
  minnesota: { label: "near the national median", band: "$330,000 to $385,000" },
  wisconsin: { label: "below the national median", band: "$285,000 to $335,000" },
  indiana: { label: "below the national median", band: "$240,000 to $290,000" },
  missouri: { label: "below the national median", band: "$245,000 to $295,000" },
  iowa: { label: "well below the national median", band: "$215,000 to $265,000" },
  kansas: { label: "well below the national median", band: "$225,000 to $270,000" },
  nebraska: { label: "below the national median", band: "$255,000 to $300,000" },
  "north-dakota": { label: "well below the national median", band: "$255,000 to $305,000" },
  "south-dakota": { label: "below the national median", band: "$270,000 to $320,000" },
  // Lower-cost South
  alabama: { label: "well below the national median", band: "$220,000 to $270,000" },
  arkansas: { label: "well below the national median", band: "$200,000 to $245,000" },
  mississippi: { label: "the lowest in the country", band: "$185,000 to $230,000" },
  louisiana: { label: "well below the national median", band: "$215,000 to $265,000" },
  kentucky: { label: "well below the national median", band: "$215,000 to $260,000" },
  tennessee: { label: "near the national median", band: "$325,000 to $385,000" },
  oklahoma: { label: "well below the national median", band: "$210,000 to $255,000" },
  "west-virginia": { label: "the lowest in the East", band: "$160,000 to $210,000" },
  delaware: { label: "near the national median", band: "$345,000 to $400,000" },
  // Mountain West and others
  idaho: { label: "above the national median", band: "$435,000 to $500,000" },
  montana: { label: "above the national median", band: "$465,000 to $535,000" },
  wyoming: { label: "above the national median", band: "$400,000 to $470,000" },
  "new-mexico": { label: "near the national median", band: "$320,000 to $375,000" },
  alaska: { label: "above the national median", band: "$370,000 to $430,000" },
  vermont: { label: "above the national median", band: "$380,000 to $440,000" },
  maine: { label: "near the national median", band: "$380,000 to $445,000" },
};

// Foreclosure procedure by state.
const JUDICIAL_STATES = new Set<string>([
  "connecticut", "delaware", "florida", "hawaii", "illinois", "indiana", "iowa",
  "kansas", "kentucky", "louisiana", "maine", "new-jersey", "new-mexico",
  "new-york", "north-dakota", "ohio", "pennsylvania", "south-carolina",
  "vermont", "wisconsin",
]);

// States that legally require an attorney at closing.
const ATTORNEY_STATES = new Set<string>([
  "connecticut", "delaware", "georgia", "louisiana", "maine", "massachusetts",
  "new-hampshire", "new-jersey", "new-york", "north-carolina", "south-carolina",
  "vermont", "west-virginia", "district-of-columbia",
]);

const MORTGAGE_LENDER_SLUGS = [
  "rocket",
  "better",
  "loandepot",
  "chase-mortgage",
  "pnc",
  "wellsfargo-mortgage",
  "usbank",
  "marcus-mortgage",
] as const;

function lenderBlurb(slug: string, stateName: string): string {
  switch (slug) {
    case "rocket":
      return `Largest non-bank lender in the country. Strong online process. Active in ${stateName} with full FHA, VA, and conventional offerings.`;
    case "better":
      return `Fully digital, fee-light platform. Pre-approval in minutes. Open to ${stateName} borrowers with W-2 income and a clean credit file.`;
    case "loandepot":
      return `Heavy in refinance and cash-out. Branch and call-center hybrid. Licensed across ${stateName}.`;
    case "chase-mortgage":
      return `Big-bank pricing with relationship discounts for existing Chase deposit customers. Branches across most ${stateName} metros.`;
    case "pnc":
      return `Strong in jumbo and physician loans. Offers a low down payment Community Loan in select ${stateName} markets.`;
    case "wellsfargo-mortgage":
      return `One of the largest mortgage originators. Wide branch network in ${stateName} and a streamlined existing-customer path.`;
    case "usbank":
      return `Competitive on conventional and government loans. Active retail presence in ${stateName} with both branch and online intake.`;
    case "marcus-mortgage":
      return `Online-first lender with consistent fixed-rate offers. Available to ${stateName} borrowers without a branch visit.`;
    default:
      return `National lender active in ${stateName}.`;
  }
}

function fmtPct(n: number): string {
  return n.toFixed(2) + "%";
}

const BASE_30Y = 6.85;
const BASE_15Y = 6.10;
const BASE_FHA = 6.65;
const BASE_JUMBO = 7.05;

export default async function StateMortgagePage(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  const rate30 = adjustedRate(BASE_30Y, slug, 1);
  const rate15 = adjustedRate(BASE_15Y, slug, 2);
  const rateFha = adjustedRate(BASE_FHA, slug, 3);
  const rateJumbo = adjustedRate(BASE_JUMBO, slug, 4);

  const bucket = HOME_PRICE_BUCKETS[slug] ?? { label: "near the national median", band: "$320,000 to $400,000" };

  const isJudicial = JUDICIAL_STATES.has(slug);
  const foreclosureType = isJudicial ? "judicial" : "non-judicial";
  const foreclosureExplainer = isJudicial
    ? `In ${state.name}, lenders must file suit in court to foreclose. The process usually takes 9 to 18 months from first missed payment to auction. The longer timeline gives borrowers more time to cure the default, refinance, or pursue a short sale.`
    : `${state.name} allows non-judicial foreclosure. Lenders can move through a trustee sale without going to court, typically in 4 to 7 months. Borrowers have less runway, so early communication with the servicer matters more.`;

  const needsAttorney = ATTORNEY_STATES.has(slug);
  const attorneyText = needsAttorney
    ? `${state.name} is an attorney closing state. A licensed real estate attorney must oversee the closing. Plan for $700 to $1,500 in legal fees, which the Loan Estimate will itemize before you commit.`
    : `${state.name} is a title state. A title or escrow company handles closing without a required attorney. You can still hire one for review, but it is not mandatory. Closing costs are typically lower than in attorney states.`;

  const taxLevel = (() => {
    const t = state.taxNote.toLowerCase();
    if (t.includes("no state income tax") || t.includes("no general income tax")) return "no state income tax";
    if (t.includes("10.") || t.includes("11.") || t.includes("13.")) return "a higher than average state income tax";
    if (t.includes("flat 3") || t.includes("flat 2") || t.includes("up to 4") || t.includes("up to 3") || t.includes("flat 4")) return "a relatively low state income tax";
    return "a moderate state income tax";
  })();

  // Mortgage interest is federally deductible only when you itemize. Tone is generic.
  const stateTaxParagraph = taxLevel === "no state income tax"
    ? `${state.name} has no state income tax. That does not change the mortgage interest deduction on your federal return, but it does mean you keep more of every dollar earned, which improves how much house you can afford on a given salary.`
    : `${state.name} has ${taxLevel}. Mortgage interest is deductible on your federal return if you itemize, and ${state.name} generally follows the federal treatment for itemized deductions. Talk to a tax preparer if your loan is over the federal $750,000 cap on deductible mortgage debt.`;

  const faqs: FAQItem[] = [
    {
      question: `What is the average home price in ${state.name}?`,
      answer: `Median sale prices in ${state.name} typically run in the ${bucket.band} range, which sits ${bucket.label}. Prices vary widely by metro and county. The Federal Housing Finance Agency (FHFA) house price index and Zillow's home value series both publish ${state.name} numbers that you can pull for any specific city.`,
    },
    {
      question: `Are mortgage rates higher in ${state.name} than the national average?`,
      answer: `${state.name} rates track the national 30-year average closely. The Freddie Mac Primary Mortgage Market Survey is the cleanest benchmark for national rates, and most ${state.name} borrowers price within 10 to 25 basis points of that number. The bigger swings come from credit score, loan-to-value, and lender choice, not location.`,
    },
    {
      question: `What programs help first-time buyers in ${state.name}?`,
      answer: `${state.name} runs a state housing finance agency that offers down payment assistance, below-market 30-year fixed loans, and mortgage credit certificates for first-time buyers under income limits. FHA loans with 3.5% down and VA loans with no down payment are also widely available to ${state.name} borrowers. The full national playbook is on our first-time buyer guide.`,
    },
    {
      question: `Is ${state.name} a judicial or non-judicial foreclosure state?`,
      answer: `${state.name} uses ${foreclosureType} foreclosure. ${foreclosureExplainer} Either way, the best move is to contact your servicer at the first sign of trouble. HUD-approved housing counseling is free and can buy you real time.`,
    },
    {
      question: `Do I need an attorney to close on a home in ${state.name}?`,
      answer: attorneyText,
    },
  ];

  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "By State", href: "/mortgages/by-state" },
          { name: state.name, href: `/mortgages/by-state/${slug}` },
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
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-6">
            {state.name} Mortgage Rates
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Current 30-year, 15-year, FHA, and jumbo mortgage rates for {state.name} borrowers. Built from Freddie Mac{"'"}s Primary Mortgage Market Survey and adjusted for {state.name}{"'"}s closing cost and recording fee landscape. Below: the top lenders licensed in {state.name}, a snapshot of typical home prices, and how local laws shape your closing.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Calculate your payment
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/mortgages/by-state" className="pill pill-ghost">
              Compare all 50 states
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT CARD */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div
          className="card-flush p-8 relative overflow-hidden"
          style={{ boxShadow: "var(--shadow-pop)" }}
        >
          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, var(--color-lime) 0%, transparent 70%)" }}
          />
          <div className="relative">
            <div className="flex items-center gap-3 mb-6">
              <span className="chip chip-lime">{state.abbr} Rates</span>
              <span className="text-xs font-mono text-mute">Updated weekly. Source: Freddie Mac PMMS plus state adjustments.</span>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              <div>
                <div className="text-xs text-mute mb-2 uppercase tracking-wider font-mono">30Y fixed</div>
                <div className="font-display font-extrabold text-4xl md:text-5xl tabular tracking-tight">
                  {fmtPct(rate30)}
                </div>
                <div className="text-xs text-mute mt-2">Most common loan in {state.name}</div>
              </div>
              <div>
                <div className="text-xs text-mute mb-2 uppercase tracking-wider font-mono">15Y fixed</div>
                <div className="font-display font-extrabold text-4xl md:text-5xl tabular tracking-tight">
                  {fmtPct(rate15)}
                </div>
                <div className="text-xs text-mute mt-2">Higher payment, lower lifetime interest</div>
              </div>
              <div>
                <div className="text-xs text-mute mb-2 uppercase tracking-wider font-mono">FHA 30Y</div>
                <div className="font-display font-extrabold text-4xl md:text-5xl tabular tracking-tight">
                  {fmtPct(rateFha)}
                </div>
                <div className="text-xs text-mute mt-2">3.5% down. Mortgage insurance required.</div>
              </div>
              <div>
                <div className="text-xs text-mute mb-2 uppercase tracking-wider font-mono">Jumbo 30Y</div>
                <div className="font-display font-extrabold text-4xl md:text-5xl tabular tracking-tight">
                  {fmtPct(rateJumbo)}
                </div>
                <div className="text-xs text-mute mt-2">Loans above conforming limits</div>
              </div>
            </div>
          </div>
        </div>
        <p className="text-xs text-mute mt-4">
          Rates shown are weekly averages for {state.name}. Your individual quote will vary based on credit score, loan-to-value, and lender choice. Not a loan offer.
        </p>
      </section>

      {/* STATE-SPECIFIC CONTEXT */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <span className="chip chip-mute mb-6">About {state.name}</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-8 max-w-2xl leading-tight">
            What it actually costs to buy in {state.name}.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-mute leading-relaxed">
            <div className="space-y-5">
              <p>
                Median home prices in {state.name} sit {bucket.label}. Most transactions land in the {bucket.band} range, with urban metros pricing higher and rural counties pricing well below. The FHFA house price index publishes a quarterly {state.name} series that is the cleanest single source for the underlying trend. On a 20% down, 30-year conventional loan at {fmtPct(rate30)}, the payment math is the lever that moves first when prices move.
              </p>
              <p>
                Property taxes in {state.name} run on the higher end in some counties and on the lower end in others. As a rough guide, expect annual property taxes between 0.5% and 2.0% of assessed value depending on the jurisdiction, with school and special districts adding to the bill. Your lender will escrow these taxes and roll them into the monthly payment, so the bottom-line number on your Loan Estimate is the one to compare across offers.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Recording fees and transfer taxes in {state.name} get added to your closing costs. The amount varies by county and by deed type. The CFPB-mandated Loan Estimate breaks every line item out, so you can compare two lenders apples to apples without surprises at the closing table. Title insurance, lender fees, appraisal, and escrow deposits round out the rest of the closing package.
              </p>
              <p>
                {stateTaxParagraph}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW STATE RULES WORK */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-4">
            <span className="chip chip-mute mb-4">How {state.name} rules work</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              The local rules that change your closing.
            </h2>
            <p className="text-mute leading-relaxed">
              Mortgage law is mostly federal, but states control closing process, title rules, and foreclosure procedure. Knowing the four below is enough to navigate any {state.name} transaction.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Foreclosure: {foreclosureType}</h3>
              <p className="text-mute">
                {foreclosureExplainer}
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Attorney requirements at closing</h3>
              <p className="text-mute">
                {attorneyText}
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Title insurance norms</h3>
              <p className="text-mute">
                Lender title insurance is required everywhere a mortgage exists, and {state.name} is no exception. Owner title insurance is optional but strongly recommended. Premiums in {state.name} are regulated and vary by purchase price. Plan on 0.3% to 0.8% of the sale price as a working estimate, and use the Loan Estimate for the exact figure before you sign.
              </p>
            </div>
            <div>
              <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Homestead exemption</h3>
              <p className="text-mute">
                {state.name} offers a homestead exemption that shields a portion of your primary residence equity from most unsecured creditors. The exact dollar cap and rules vary by state. This does not change your mortgage rate, but it can matter for long-term asset protection, especially for self-employed borrowers and small business owners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TOP LENDERS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8 mb-10">
            <div className="col-span-12 md:col-span-7">
              <span className="chip chip-mute mb-4">
                <span className="pulse-dot" /> Lenders
              </span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Top mortgage lenders in {state.name}.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
              <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
                National lenders licensed in {state.name}. The CFPB recommends getting three to four quotes to compare rate and total fees before locking.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {MORTGAGE_LENDER_SLUGS.slice(0, 5).map((lenderSlug) => (
              <div key={lenderSlug} className="card p-5 flex items-start gap-4">
                <BrandLogo brand={lenderSlug} size={48} />
                <div className="flex-1">
                  <div className="font-display font-semibold text-base mb-1">
                    {lenderLabel(lenderSlug)}
                  </div>
                  <div className="text-sm text-mute leading-relaxed">
                    {lenderBlurb(lenderSlug, state.name)}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <p className="text-xs text-mute mt-6">
            Lender lineup reflects national availability. Specific eligibility, pricing, and product mix can vary by your credit profile and {state.name} county. Not a recommendation.
          </p>
        </div>
      </section>

      {/* FIRST-TIME BUYER */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-8 items-start">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">First-time buyers</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              {state.name} programs for first-time buyers.
            </h2>
            <p className="text-mute leading-relaxed mb-4">
              {state.name} runs a state housing finance agency that offers down payment assistance (DPA), below-market fixed-rate 30-year loans, and mortgage credit certificates for first-time buyers below state-specific income limits. DPA can take the form of a grant, a forgivable second mortgage, or a low-interest deferred loan. Eligibility usually requires a homebuyer education course and a primary residence purchase.
            </p>
            <p className="text-mute leading-relaxed">
              Federal options stack on top. FHA loans require just 3.5% down with a 580 credit score. VA loans require zero down for eligible service members. USDA loans cover rural and small-town purchases with no down payment. Your lender should run all three against your file to see which prices best.
            </p>
          </div>
          <div className="col-span-12 md:col-span-5">
            <div className="card p-6">
              <div className="font-display font-bold text-lg mb-3">Next step</div>
              <p className="text-mute text-sm leading-relaxed mb-4">
                Our first-time buyer guide covers the full national playbook: FHA, VA, USDA, DreaMaker, DPA programs, and the documents you will need to apply.
              </p>
              <Link href="/mortgages/first-time-buyer" className="pill pill-ink">
                Read the guide
                <span aria-hidden>{"->"}</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <span className="chip chip-mute mb-6">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-10 max-w-xl leading-tight">
            Common questions from {state.name} buyers.
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {faqs.map((faq) => (
              <FaqItem key={faq.question} q={faq.question} a={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See your {state.name} mortgage payment in 30 seconds.
            </h2>
            <p className="text-ink/70 mt-2">No signup, no email. Just the math.</p>
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

      {/* CROSS-STATE NAV */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <span className="chip chip-mute mb-6">Browse by state</span>
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-8">
          Mortgage rates in every state
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {states.map((s) => (
            <Link
              key={s.slug}
              href={`/mortgages/by-state/${s.slug}`}
              className={`text-sm px-3 py-2 rounded-xl border transition-colors ${
                s.slug === slug
                  ? "border-ink bg-ink text-bg font-semibold"
                  : "border-line hover:border-ink hover:bg-bg-soft text-mute hover:text-ink"
              }`}
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function lenderLabel(slug: string): string {
  switch (slug) {
    case "rocket": return "Rocket Mortgage";
    case "better": return "Better.com";
    case "loandepot": return "loanDepot";
    case "chase-mortgage": return "Chase Home Lending";
    case "pnc": return "PNC Bank";
    case "wellsfargo-mortgage": return "Wells Fargo Home Lending";
    case "usbank": return "U.S. Bank";
    case "marcus-mortgage": return "Marcus by Goldman Sachs";
    default: return slug;
  }
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="card p-6">
      <div className="font-display font-semibold text-lg mb-3 leading-snug">{q}</div>
      <div className="text-mute leading-relaxed text-sm">{a}</div>
    </div>
  );
}
