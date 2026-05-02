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
  title: "Marcus by Goldman Sachs Mortgage Review (2026)",
  description:
    "Marcus by Goldman Sachs offers one of the lowest 30-year APRs at 6.79% with no origination fee. Read our full 2026 review covering rates, fees, and who should apply.",
  alternates: { canonical: "/reviews/marcus-mortgage" },
};

const brand = getBrand("marcus-mortgage")!;

const faqs: FAQItem[] = [
  {
    question: "Does Marcus charge a loan origination fee?",
    answer:
      "No. Marcus does not charge an origination fee, which is one of the primary reasons its total closing cost is below the industry average. You still pay third-party costs like appraisal and title insurance.",
  },
  {
    question: "Can I use Marcus for an FHA loan?",
    answer:
      "Marcus focuses on conventional conforming and jumbo loans. FHA and VA products are not available through Marcus as of April 2026. If you need FHA financing, Rocket Mortgage is a stronger option.",
  },
  {
    question: "How long does the Marcus mortgage process take?",
    answer:
      "From full application to close, expect 28 to 42 days. The biggest variable is appraisal scheduling. In markets with limited appraisers, the process can extend to 45 to 50 days.",
  },
  {
    question: "What credit score do I need for the best Marcus rate?",
    answer:
      "The minimum is 620, but borrowers with scores above 740 will receive the most competitive pricing tiers. The 6.79% headline rate assumes a strong credit profile, 5% or more down, and a standard conforming loan amount.",
  },
  {
    question: "Is Marcus backed by FDIC?",
    answer:
      "Marcus by Goldman Sachs Bank LLC is FDIC-insured. Your deposit accounts are protected, but mortgages are loans, not deposit products, so FDIC coverage does not apply to the mortgage itself.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Marcus by Goldman Sachs Mortgage Review"
        description="Marcus by Goldman Sachs offers one of the lowest 30-year APRs at 6.79% with no origination fee. Read our full 2026 review covering rates, fees, and who should apply."
        slug="/reviews/marcus-mortgage"
        brandName="Marcus by Goldman Sachs"
        category="Mortgage"
        apr="6.79"
        ratingValue={8.6}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "Marcus by Goldman Sachs", href: "/reviews/marcus-mortgage" },
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
                Marcus by Goldman Sachs Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated April 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="30Y APR" value="6.79%" />
            <Stat label="Min credit score" value="620" />
            <Stat label="Min down" value="3%" />
            <Stat label="Fintiex score" value="8.6/10" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Lowest 30-year APR on our table at 6.79%</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>No origination fee, which saves $1,000 to $3,000 vs. most lenders</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fully digital application with document upload and e-sign</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong rate transparency: you see real pricing before submitting a full application</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Backed by Goldman Sachs balance sheet, so funding is never in doubt</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Good for refinances: low-fee structure makes the break-even math much faster</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Appraisal turnaround can run 2 to 3 weeks in competitive markets</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No physical branches: all support is phone or chat</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Limited loan product variety: no USDA, limited renovation options</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Jumbo products are available but not prominently marketed</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is Marcus Mortgage?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Marcus by Goldman Sachs is Goldman&rsquo;s consumer banking arm, launched in 2016. What started as a personal loan and savings product has expanded into mortgages, and it brings the same low-fee philosophy: skip the origination charges that most lenders treat as a revenue center and compete instead on rate and digital experience.
          </p>
          <p>
            The 30-year fixed APR of 6.79% sits at the top of our comparison table, making Marcus the default starting point for any rate-sensitive borrower. That gap vs. the market average of 6.85% seems small but translates to real money: on a $400,000 loan, 6 basis points saves roughly $17 per month, or about $6,100 over the life of a 30-year term. Add in the no-origination-fee structure and the total cost advantage is meaningful.
          </p>
          <p>
            Marcus is built for people who are comfortable managing a mortgage relationship entirely online. There are no branches to walk into, and the experience mirrors what you&rsquo;d expect from a modern fintech: clean interface, status notifications, and clear documentation checklists. Where it stumbles is on turnaround speed when third-party appraisal vendors get backed up. In fast-moving seller&rsquo;s markets, that can be a real constraint.
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
            { product: "30-Year Fixed", apr: "6.79%", note: "No origination fee" },
            { product: "15-Year Fixed", apr: "6.22%", note: "Faster equity build" },
            { product: "7/1 ARM", apr: "6.45%", note: "Fixed 7 yrs then adjusts" },
            { product: "5/1 ARM", apr: "6.31%", note: "Fixed 5 yrs then adjusts" },
            { product: "Jumbo 30Y Fixed", apr: "6.91%", note: "Loans above $766,550" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.apr}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates as of April 2026. Actual rate depends on credit profile, LTV, and property type.</p>
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
              <span className="font-mono font-semibold chip chip-lime">$0</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Application fee</span>
              <span className="font-mono font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Appraisal fee</span>
              <span className="font-mono font-semibold">$400 to $700</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Title and settlement</span>
              <span className="font-mono font-semibold">$1,200 to $2,500</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Rate lock (60 days)</span>
              <span className="font-mono font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-ink-soft">Prepayment penalty</span>
              <span className="font-mono font-semibold">None</span>
            </li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">Total closing costs typically run 1.5 to 2.5% of the loan amount at Marcus, below the industry norm of 2 to 5%, primarily because the origination charge is eliminated.</p>
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
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Minimum 3% down payment on conforming conventional loans</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Debt-to-income ratio at or below 45% (43% preferred)</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>2 years of documented employment or self-employment income</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Primary residences, second homes, and investment properties all eligible</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Loan amounts up to jumbo limits (above $766,550 in most counties)</li>
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
            The Marcus mortgage application is entirely online. You start by entering basic financial info to get a pre-qualification rate range, no hard pull required at that stage. When you move to a full application, the platform connects to most major banks and payroll providers for instant income verification, which cuts the document-collection step significantly. You can upload W-2s, tax returns, and bank statements directly through the portal.
          </p>
          <p>
            Loan officers are available by phone and chat during business hours, but the process is designed to be self-serve. Status updates arrive by email and in the dashboard. The appraisal is ordered by Marcus after you lock your rate; this is the stage where timelines can slip. Expect 7 to 21 days for the appraisal depending on appraiser availability in your market. Total time from application to close typically runs 28 to 42 days, similar to most digital lenders.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Tech-savvy borrowers who prefer managing everything online</li>
              <li>Rate-sensitive buyers who want to minimize total interest cost</li>
              <li>Refinancers looking to lower costs without large upfront fees</li>
              <li>Borrowers with strong credit (720+) who will get the best pricing tier</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You want in-person guidance from a loan officer at a branch</li>
              <li>You need a USDA loan or specialized renovation financing</li>
              <li>Your market has fast-closing timelines (10 to 15 days) where appraisal delays hurt</li>
              <li>You have a complex income situation needing hands-on underwriting</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Marcus vs. Better.com vs. Rocket Mortgage
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Marcus</div>
            <div className="text-center">Better.com</div>
            <div className="text-center">Rocket</div>
          </div>
          {[
            { feature: "30Y APR", a: "6.79%", b: "6.85%", c: "6.89%" },
            { feature: "Origination fee", a: "$0", b: "$0", c: "Varies" },
            { feature: "Min FICO", a: "620", b: "620", c: "580 (FHA)" },
            { feature: "Min down", a: "3%", b: "3%", c: "3.5% FHA" },
            { feature: "Branches", a: "None", b: "None", c: "None" },
            { feature: "Mobile app", a: "Good", b: "Excellent", c: "Excellent" },
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
              q: "Does Marcus charge a loan origination fee?",
              a: "No. Marcus does not charge an origination fee, which is one of the primary reasons its total closing cost is below the industry average. You still pay third-party costs like appraisal and title insurance.",
            },
            {
              q: "Can I use Marcus for an FHA loan?",
              a: "Marcus focuses on conventional conforming and jumbo loans. FHA and VA products are not available through Marcus as of April 2026. If you need FHA financing, Rocket Mortgage is a stronger option.",
            },
            {
              q: "How long does the Marcus mortgage process take?",
              a: "From full application to close, expect 28 to 42 days. The biggest variable is appraisal scheduling. In markets with limited appraisers, the process can extend to 45 to 50 days.",
            },
            {
              q: "What credit score do I need for the best Marcus rate?",
              a: "The minimum is 620, but borrowers with scores above 740 will receive the most competitive pricing tiers. The 6.79% headline rate assumes a strong credit profile, 5% or more down, and a standard conforming loan amount.",
            },
            {
              q: "Is Marcus backed by FDIC?",
              a: "Marcus by Goldman Sachs Bank LLC is FDIC-insured. Your deposit accounts are protected, but mortgages are loans, not deposit products, so FDIC coverage does not apply to the mortgage itself.",
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
