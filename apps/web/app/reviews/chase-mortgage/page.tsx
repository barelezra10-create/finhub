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
  title: "Chase Home Lending Mortgage Review (2026)",
  description:
    "Chase Home Lending offers a 6.95% 30-year APR with the DreaMaker 3% down program and discounts for existing Chase customers. Full 2026 review of rates, fees, and eligibility.",
  alternates: { canonical: "/reviews/chase-mortgage" },
};

const brand = getBrand("chase-mortgage")!;

const faqs: FAQItem[] = [
  {
    question: "What is the Chase DreaMaker program?",
    answer:
      "DreaMaker is Chase's affordable homeownership program for buyers with income at or below 80% of the area median income. It requires just 3% down, offers reduced mortgage insurance premiums, and includes a $2,500 homebuyer grant for eligible properties in qualifying census tracts.",
  },
  {
    question: "How do Chase Private Client rate discounts work?",
    answer:
      "Chase Private Client customers with $150,000 or more in qualifying Chase deposit and investment accounts receive a mortgage rate discount of 0.125 percentage points. Customers with $500,000 or more receive a 0.25 percentage point discount. These are applied at the time of rate lock.",
  },
  {
    question: "How long does it take to close a mortgage at Chase?",
    answer:
      "Average closing time is 35 to 50 days from full application to close. This is longer than most digital lenders, which typically target 28 to 40 days. Chase's branch-based process adds scheduling steps that extend the timeline.",
  },
  {
    question: "Does Chase service its own mortgages after closing?",
    answer:
      "Chase is one of the largest mortgage servicers in the US and retains servicing on a significant share of the loans it originates. This means your payment, escrow, and customer service experience post-close is handled in-house rather than transferred to a third-party servicer.",
  },
  {
    question: "Can I apply for a Chase mortgage if I do not bank at Chase?",
    answer:
      "Yes. Chase accepts mortgage applications from non-customers. You will not receive the Private Client rate discount, but all standard products including DreaMaker, FHA, VA, and conventional loans are available without a prior banking relationship.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Chase Home Lending Review"
        description="Chase Home Lending offers a 6.95% 30-year APR with the DreaMaker 3% down program and discounts for existing Chase customers. Full 2026 review of rates, fees, and eligibility."
        slug="/reviews/chase-mortgage"
        brandName="Chase Home Lending"
        category="Mortgage"
        apr="6.95"
        ratingValue={7.9}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "Chase Home Lending", href: "/reviews/chase-mortgage" },
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
                Chase Home Lending Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated April 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="30Y APR" value="6.95%" />
            <Stat label="Min credit score" value="620" />
            <Stat label="Min down" value="3% DreaMaker" />
            <Stat label="Fintiex score" value="7.9/10" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>DreaMaker program: 3% down, reduced mortgage insurance for qualifying buyers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Rate discounts for existing Chase Private Client and banking customers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Massive branch network: 5,000+ locations for in-person consultations</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>JPMorgan Chase balance sheet: no funding risk even in turbulent markets</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong customer service reputation and reliable loan servicing post-close</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Full loan product suite including FHA, VA, conventional, and jumbo</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>30Y APR at 6.95% is above digital-first competitors by 16 to 26 basis points</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Processing can be slower than digital lenders; 35 to 50 days to close is common</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Origination fees apply and can add to total cost</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Rate discounts require maintaining qualifying Chase account balances</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is Chase Home Lending?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Chase Home Lending is the mortgage division of JPMorgan Chase, the largest US bank by assets. With more than 5,000 branches nationwide and a customer base in the tens of millions, Chase is the most accessible traditional mortgage lender in the country. The combination of branch access, a recognizable brand, and the backing of a major financial institution makes it the default choice for many first-time buyers who already bank at Chase.
          </p>
          <p>
            The DreaMaker program is Chase&rsquo;s most notable product for buyers without large down payments. It allows 3% down on conventional loans with reduced private mortgage insurance premiums compared to standard PMI, and includes a $2,500 homebuyer grant for eligible borrowers in select census tracts. For qualifying low-to-moderate income buyers, the total cost of entry is meaningfully lower than a standard conventional purchase.
          </p>
          <p>
            The 6.95% APR sits at the higher end of our table, reflecting the cost structure of a large bank with extensive branch infrastructure. Existing Chase Private Client customers can access rate discounts that close the gap with digital competitors, but those discounts require maintaining significant deposit balances. For rate-only comparison, Chase is not the cheapest option; for service reliability and multi-product relationship banking, it is hard to beat.
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
            { product: "30-Year Fixed", apr: "6.95%", note: "Conventional conforming" },
            { product: "DreaMaker 30Y", apr: "6.95%", note: "3% down, reduced PMI" },
            { product: "15-Year Fixed", apr: "6.42%", note: "Faster equity build" },
            { product: "FHA 30Y Fixed", apr: "6.70%", note: "3.5% down minimum" },
            { product: "VA 30Y Fixed", apr: "6.58%", note: "0% down for veterans" },
            { product: "Jumbo 30Y Fixed", apr: "7.00%", note: "Above $766,550" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.apr}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates as of April 2026. Chase Private Client customers may qualify for rate discounts of 0.125 to 0.25 percentage points.</p>
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
              <span className="font-mono font-semibold">0.5 to 1.25% of loan</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">DreaMaker grant (eligible)</span>
              <span className="font-mono font-semibold chip chip-lime">$2,500 credit</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Appraisal fee</span>
              <span className="font-mono font-semibold">$500 to $800</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Title and settlement</span>
              <span className="font-mono font-semibold">$1,500 to $3,000</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Rate lock (45 days)</span>
              <span className="font-mono font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-ink-soft">Prepayment penalty</span>
              <span className="font-mono font-semibold">None</span>
            </li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">Total closing costs at Chase typically run 2 to 4% of the loan amount. The DreaMaker $2,500 grant offsets part of this for qualifying borrowers.</p>
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
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Minimum FICO score of 620 for conventional loans</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>DreaMaker: 3% down, income at or below 80% of area median income</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Debt-to-income ratio at or below 45%; 43% preferred</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>2 years employment history for W-2; 2 years of returns for self-employed</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Primary residences, second homes, and investment properties</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Private Client rate discount requires $150,000 or more in qualifying Chase accounts</li>
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
            Chase offers both an online application and the option to start with a branch loan officer. The online path is reasonably polished: you can get a pre-qualification estimate without a hard credit pull, then move to a full application with document upload and status tracking through MyNewHome, Chase&rsquo;s mortgage portal.
          </p>
          <p>
            Processing at Chase tends to be slower than digital-only lenders. Closing timelines of 35 to 50 days are common, particularly during high-volume periods. The trade-off is service reliability: Chase has deep underwriting staff, established appraisal vendor relationships, and a servicing operation that borrowers generally rate positively post-close. If you are an existing Chase customer, the pre-populated financial data and relationship context speed up the initial underwriting review.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Existing Chase customers who qualify for Private Client rate discounts</li>
              <li>First-time buyers using the DreaMaker 3% down program</li>
              <li>Borrowers who value in-person branch access and relationship banking</li>
              <li>Buyers who want reliable servicing and a large institution backing the loan</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You are comparing on rate alone: digital lenders offer 16 to 26 bps less</li>
              <li>You need a fast close (under 30 days): Chase runs slower than fintech lenders</li>
              <li>You do not hold qualifying balances for the Private Client rate discount</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Chase vs. Wells Fargo vs. PNC
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Chase</div>
            <div className="text-center">Wells Fargo</div>
            <div className="text-center">PNC</div>
          </div>
          {[
            { feature: "30Y APR", a: "6.95%", b: "7.02%", c: "6.99%" },
            { feature: "Low-down program", a: "DreaMaker 3%", b: "Yourfirstmortgage 3%", c: "Home Insight 3%" },
            { feature: "Buyer grant", a: "$2,500", b: "$5,000 (LMI)", c: "Varies" },
            { feature: "Branches", a: "5,000+", b: "4,500+", c: "2,600+" },
            { feature: "Min FICO", a: "620", b: "620", c: "620" },
            { feature: "Customer discount", a: "Private Client", b: "Premier", c: "PNC checking" },
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
              q: "What is the Chase DreaMaker program?",
              a: "DreaMaker is Chase&rsquo;s affordable homeownership program for buyers with income at or below 80% of the area median income. It requires just 3% down, offers reduced mortgage insurance premiums, and includes a $2,500 homebuyer grant for eligible properties in qualifying census tracts.",
            },
            {
              q: "How do Chase Private Client rate discounts work?",
              a: "Chase Private Client customers with $150,000 or more in qualifying Chase deposit and investment accounts receive a mortgage rate discount of 0.125 percentage points. Customers with $500,000 or more receive a 0.25 percentage point discount. These are applied at the time of rate lock.",
            },
            {
              q: "How long does it take to close a mortgage at Chase?",
              a: "Average closing time is 35 to 50 days from full application to close. This is longer than most digital lenders, which typically target 28 to 40 days. Chase&rsquo;s branch-based process adds scheduling steps that extend the timeline.",
            },
            {
              q: "Does Chase service its own mortgages after closing?",
              a: "Chase is one of the largest mortgage servicers in the US and retains servicing on a significant share of the loans it originates. This means your payment, escrow, and customer service experience post-close is handled in-house rather than transferred to a third-party servicer.",
            },
            {
              q: "Can I apply for a Chase mortgage if I do not bank at Chase?",
              a: "Yes. Chase accepts mortgage applications from non-customers. You will not receive the Private Client rate discount, but all standard products including DreaMaker, FHA, VA, and conventional loans are available without a prior banking relationship.",
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
