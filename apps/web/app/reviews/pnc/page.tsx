import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";
import {
  FinancialProductSchema,
  FAQPageSchema,
  BreadcrumbListSchema,
  type FAQItem,
} from "@/components/schemas";

export const metadata: Metadata = {
  title: "PNC Bank Mortgage Review (2026)",
  description:
    "PNC Bank offers a 6.99% 30-year APR with Home Insight and LMI programs for low-to-moderate income buyers. Full 2026 review of rates, fees, eligibility, and who it suits best.",
  alternates: { canonical: "/reviews/pnc" },
};

const brand = getBrand("pnc")!;

const faqs: FAQItem[] = [
  {
    question: "What is the PNC Home Insight program?",
    answer:
      "Home Insight is PNC's 3% down conventional mortgage program that waives private mortgage insurance for eligible buyers. This is significant because standard PMI on a 3% down purchase typically adds $100 to $250 per month to your payment. Eligibility is based on income, property location, and loan amount.",
  },
  {
    question: "How large is the PNC LMI grant?",
    answer:
      "PNC offers grants of up to $5,000 for qualified low-to-moderate income borrowers purchasing in eligible census tracts. The exact amount depends on the program tier and property location. Grants do not need to be repaid unless the property is sold within a certain timeframe.",
  },
  {
    question: "Is PNC available in my state?",
    answer:
      "PNC has physical branches in the Mid-Atlantic, Southeast, Midwest, and parts of the South and West. Mortgage lending is available in all 50 states through digital channels, but in-person branch service is concentrated in PNC's footprint states: Pennsylvania, Ohio, North Carolina, Maryland, Virginia, and others.",
  },
  {
    question: "What is the Home Insight Tracker?",
    answer:
      "The Home Insight Tracker is PNC's online pre-application tool that shows real personalized rate estimates based on your credit profile, income, and purchase parameters. It is more accurate than generic rate tables because it uses your actual data, not just advertised starting rates.",
  },
  {
    question: "Can PNC compete with digital lenders on rate?",
    answer:
      "On the headline 30Y APR alone, PNC's 6.99% is above Marcus (6.79%) and Better (6.85%). However, for qualifying borrowers, the PMI waiver and LMI grant reduce the effective monthly cost significantly. Always compare total monthly payment including PMI, not just the interest rate.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="PNC Bank Mortgage Review"
        description="PNC Bank offers a 6.99% 30-year APR with Home Insight and LMI programs for low-to-moderate income buyers. Full 2026 review of rates, fees, eligibility, and who it suits best."
        slug="/reviews/pnc"
        brandName="PNC Bank"
        category="Mortgage"
        apr="6.99"
        ratingValue={7.6}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "PNC Bank", href: "/reviews/pnc" },
        ]}
      />
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Mortgage Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                PNC Bank Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated April 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="30Y APR" value="6.99%" />
            <Stat label="Min credit score" value="620" />
            <Stat label="Min down" value="3%" />
            <Stat label="Fintiex score" value="7.6/10" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Home Insight program: 3% down with no PMI requirement for qualifying buyers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>LMI (Low and Moderate Income) program with grants up to $5,000 for eligible borrowers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong presence in Mid-Atlantic, Midwest, and Southeast markets</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Home Insight Tracker: real-time online rate and payment tool available before applying</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Full suite of loan types including FHA, VA, conventional, and jumbo</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Relationship discounts for existing PNC checking customers</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>30Y APR at 6.99% is among the higher rates on our table</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Branch footprint is strong in PNC states but thin outside that region</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Digital application is functional but not as polished as Rocket or Better</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>LMI grant eligibility requirements are strict: income, census tract, and property limits apply</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is PNC Bank?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            PNC Bank is one of the largest US commercial banks, headquartered in Pittsburgh with roughly 2,600 branches concentrated in the Mid-Atlantic, Midwest, and Southeast. Its mortgage division serves both retail and institutional clients and has developed specialized programs for first-time and low-to-moderate income buyers that go beyond the standard conforming product.
          </p>
          <p>
            The Home Insight program is PNC&rsquo;s signature affordable homeownership product. It allows qualified buyers to put as little as 3% down on a conventional loan without paying private mortgage insurance, which can save $100 to $200 per month compared to standard PMI. The LMI program adds grant dollars for buyers at or below area median income thresholds, making PNC a meaningful option for mid-income households in markets where PNC has strong branch coverage.
          </p>
          <p>
            The 6.99% APR reflects PNC&rsquo;s position as a traditional bank lender with infrastructure costs. For borrowers outside PNC&rsquo;s core geographic footprint who do not qualify for the specialty programs, the rate premium vs. Marcus or Better may not be justified. Inside PNC markets, the combination of branch access, LMI grants, and relationship banking creates a more competitive total package.
          </p>
        </div>
      </section>

      {/* RATES AND PRODUCTS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Rates and Products</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Current rates and loan types
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-3 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Product</div>
            <div className="text-right">APR</div>
            <div className="text-right">Notes</div>
          </div>
          {[
            { product: "30-Year Fixed", apr: "6.99%", note: "Conventional conforming" },
            { product: "Home Insight 30Y", apr: "6.99%", note: "3% down, no PMI" },
            { product: "15-Year Fixed", apr: "6.48%", note: "Lower total interest" },
            { product: "FHA 30Y Fixed", apr: "6.72%", note: "3.5% down minimum" },
            { product: "VA 30Y Fixed", apr: "6.62%", note: "0% down for eligible" },
            { product: "Jumbo 30Y Fixed", apr: "7.08%", note: "Above conforming limits" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.apr}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates as of April 2026. Actual rate depends on credit profile, LTV, program eligibility, and location.</p>
      </section>

      {/* FEES */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Fees</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What you will pay
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-4 text-[1.0rem]">
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Origination fee</span>
              <span className="font-mono font-semibold">0.5 to 1% of loan</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">LMI grant (eligible areas)</span>
              <span className="font-mono font-semibold chip chip-lime">Up to $5,000</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Appraisal fee</span>
              <span className="font-mono font-semibold">$450 to $750</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Title and settlement</span>
              <span className="font-mono font-semibold">$1,200 to $2,800</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">PMI (Home Insight)</span>
              <span className="font-mono font-semibold chip chip-lime">$0 (waived)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-ink-soft">Prepayment penalty</span>
              <span className="font-mono font-semibold">None</span>
            </li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">The LMI grant and PMI waiver can significantly reduce the effective cost for qualifying borrowers. Check eligibility based on income, property location, and program guidelines before comparing headline rate alone.</p>
        </div>
      </section>

      {/* ELIGIBILITY */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Eligibility</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Who can qualify
        </h2>
        <div className="card p-7 max-w-2xl">
          <ul className="space-y-3 text-[1.0rem] leading-relaxed">
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Minimum FICO score of 620 for most programs</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Home Insight: 3% down, income at or below 80% of area median income in most markets</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>LMI program: income thresholds and eligible census tracts apply; up to $5,000 grant</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Debt-to-income ratio at or below 45%; lower thresholds for some specialty programs</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>2 years of employment history required for most products</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Primary residences most commonly; investment property lending is more selective</li>
          </ul>
        </div>
      </section>

      {/* APPLICATION AND UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Application and UX</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          How the process works
        </h2>
        <div className="space-y-4 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            PNC offers a digital application through its Home Insight Tracker, which is a genuine differentiator: borrowers can explore real rate estimates, run payment scenarios, and start a pre-qualification before talking to anyone. The Tracker pulls your credit with consent and provides personalized rate ranges based on your actual profile, not just advertised rates. This level of transparency before formal application is more useful than the generic rate calculators most banks offer.
          </p>
          <p>
            The application itself is online-first, with branch support available for borrowers who prefer human guidance. In-person meetings are easy to arrange at PNC&rsquo;s 2,600-plus branches across its footprint. Closing timelines run 35 to 50 days on average. Processing quality varies by location: branches in higher-volume PNC markets tend to have more experienced staff and better turnaround times.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Mid-income buyers in PNC&rsquo;s core Mid-Atlantic and Midwest markets</li>
              <li>Borrowers qualifying for the LMI grant who want to reduce upfront costs</li>
              <li>Home Insight users who can avoid PMI with a 3% down payment</li>
              <li>Existing PNC checking customers eligible for relationship rate discounts</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You are outside PNC&rsquo;s core states and comparing on rate alone</li>
              <li>You do not qualify for the LMI or Home Insight programs that drive PNC&rsquo;s value</li>
              <li>You want a best-in-class digital application experience</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          PNC vs. Chase vs. Wells Fargo
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">PNC</div>
            <div className="text-center">Chase</div>
            <div className="text-center">Wells Fargo</div>
          </div>
          {[
            { feature: "30Y APR", a: "6.99%", b: "6.95%", c: "7.02%" },
            { feature: "Low-income grant", a: "Up to $5,000", b: "$2,500", c: "$5,000 (LMI)" },
            { feature: "PMI waiver", a: "Home Insight", b: "No", c: "No" },
            { feature: "Min down", a: "3%", b: "3%", c: "3%" },
            { feature: "Branches", a: "2,600+", b: "5,000+", c: "4,500+" },
            { feature: "Core geography", a: "Mid-Atlantic, Midwest", b: "National", c: "National" },
          ].map((r, i, arr) => (
            <div key={r.feature} className={`grid grid-cols-4 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium text-mute">{r.feature}</div>
              <div className="text-center font-mono">{r.a}</div>
              <div className="text-center font-mono">{r.b}</div>
              <div className="text-center font-mono">{r.c}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">FAQ</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-8 leading-tight">
          Common questions
        </h2>
        <div className="space-y-5 max-w-3xl">
          {[
            {
              q: "What is the PNC Home Insight program?",
              a: "Home Insight is PNC&rsquo;s 3% down conventional mortgage program that waives private mortgage insurance for eligible buyers. This is significant because standard PMI on a 3% down purchase typically adds $100 to $250 per month to your payment. Eligibility is based on income, property location, and loan amount.",
            },
            {
              q: "How large is the PNC LMI grant?",
              a: "PNC offers grants of up to $5,000 for qualified low-to-moderate income borrowers purchasing in eligible census tracts. The exact amount depends on the program tier and property location. Grants do not need to be repaid unless the property is sold within a certain timeframe.",
            },
            {
              q: "Is PNC available in my state?",
              a: "PNC has physical branches in the Mid-Atlantic, Southeast, Midwest, and parts of the South and West. Mortgage lending is available in all 50 states through digital channels, but in-person branch service is concentrated in PNC&rsquo;s footprint states: Pennsylvania, Ohio, North Carolina, Maryland, Virginia, and others.",
            },
            {
              q: "What is the Home Insight Tracker?",
              a: "The Home Insight Tracker is PNC&rsquo;s online pre-application tool that shows real personalized rate estimates based on your credit profile, income, and purchase parameters. It is more accurate than generic rate tables because it uses your actual data, not just advertised starting rates.",
            },
            {
              q: "Can PNC compete with digital lenders on rate?",
              a: "On the headline 30Y APR alone, PNC&rsquo;s 6.99% is above Marcus (6.79%) and Better (6.85%). However, for qualifying borrowers, the PMI waiver and LMI grant reduce the effective monthly cost significantly. Always compare total monthly payment including PMI, not just the interest rate.",
            },
          ].map((item) => (
            <div key={item.q} className="card p-6">
              <div className="font-display font-semibold text-lg mb-2 tracking-tight">{item.q}</div>
              <div className="text-ink-soft leading-relaxed">{item.a}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl tracking-tight mb-2">Ready to compare all mortgage rates?</h2>
            <p className="text-mute">See our full lender table, updated daily, with no paid placements.</p>
          </div>
          <Link href="/mortgages" className="pill pill-ink shrink-0">
            Compare all lenders <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </article>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-xs text-mute uppercase tracking-wider font-mono mb-1">{label}</div>
      <div className="font-display font-extrabold text-2xl tabular">{value}</div>
    </div>
  );
}
