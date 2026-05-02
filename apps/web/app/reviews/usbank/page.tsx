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
  title: "U.S. Bank Mortgage Review (2026)",
  description:
    "U.S. Bank offers a 7.05% 30-year APR with a strong VA loan program, American Dream low-down program, and deep Midwest and West Coast presence. Full 2026 mortgage review.",
  alternates: { canonical: "/reviews/usbank" },
};

const brand = getBrand("usbank")!;

const faqs: FAQItem[] = [
  {
    question: "Is U.S. Bank good for VA loans?",
    answer:
      "Yes. U.S. Bank is one of the largest VA loan originators in the country and has dedicated VA lending specialists. This expertise matters: VA loans have unique appraisal requirements, funding fee rules, and eligibility verification steps that general-purpose lenders sometimes handle poorly. The VA APR at U.S. Bank is competitive at 6.55%.",
  },
  {
    question: "What is the U.S. Bank American Dream program?",
    answer:
      "American Dream is U.S. Bank's affordable homeownership program that offers 3% down with down payment assistance of up to $15,000 in eligible markets. Income limits apply (typically 80% of area median income), and first-time buyer requirements vary by state. Completion of a homebuyer education course is required.",
  },
  {
    question: "Does U.S. Bank offer USDA loans?",
    answer:
      "Yes. U.S. Bank offers USDA guaranteed loans for eligible rural and suburban properties. USDA loans require 0% down and have below-market rates for qualifying borrowers in eligible census areas. Income limits and property location requirements apply; the USDA eligibility map at usda.gov is the starting point.",
  },
  {
    question: "How does U.S. Bank rate vs. other large banks for conventional loans?",
    answer:
      "For conventional loans without VA or DPA eligibility, U.S. Bank's 7.05% APR is the highest on our table. Digital lenders like Marcus (6.79%) and Better (6.85%) are significantly lower. U.S. Bank is not the right choice for a standard conventional purchase if you are purely optimizing for rate.",
  },
  {
    question: "What states does U.S. Bank serve for mortgages?",
    answer:
      "U.S. Bank offers mortgage lending in all 50 states and Washington DC, but its physical branch presence is concentrated in Minnesota, Wisconsin, Illinois, Colorado, Oregon, California, and other Midwest and West Coast states. Digital applications are available nationwide regardless of branch availability.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="U.S. Bank Mortgage Review"
        description="U.S. Bank offers a 7.05% 30-year APR with a strong VA loan program, American Dream low-down program, and deep Midwest and West Coast presence. Full 2026 mortgage review."
        slug="/reviews/usbank"
        brandName="U.S. Bank"
        category="Mortgage"
        apr="7.05"
        ratingValue={7.5}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "Reviews", href: "/reviews" },
          { name: "U.S. Bank", href: "/reviews/usbank" },
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
                U.S. Bank Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated April 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="30Y APR" value="7.05%" />
            <Stat label="Min credit score" value="620" />
            <Stat label="Min down" value="3%" />
            <Stat label="Fintiex score" value="7.5/10" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong VA loan program with dedicated veteran-focused service</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>American Dream program: 3% down with down payment assistance for qualifying buyers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>One of the largest VA loan originators in the country</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong in Midwest, Pacific Northwest, and Mountain West markets</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Full product suite: conventional, FHA, VA, USDA, jumbo</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Relationship discounts for existing U.S. Bank checking customers</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>30Y APR at 7.05% is the highest on our comparison table</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Branch footprint is concentrated in the Midwest and West; limited East Coast presence</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Digital application is serviceable but behind fintech lenders in polish</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Processing timelines can stretch to 45 to 55 days in high-volume periods</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is U.S. Bank?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            U.S. Bank is the fifth-largest commercial bank in the United States by assets, headquartered in Minneapolis, Minnesota. Its mortgage division has a particularly strong reputation for VA loan origination, serving one of the largest veteran customer bases of any commercial bank lender. For VA-eligible borrowers, U.S. Bank is a serious first stop.
          </p>
          <p>
            The American Dream program is U.S. Bank&rsquo;s primary tool for first-time and low-income buyers. It offers 3% down on a conventional loan with down payment assistance in many markets, and borrowers who complete a homebuyer education course may qualify for additional assistance funds. The program targets buyers who meet income limits and are purchasing a primary residence in an eligible property type.
          </p>
          <p>
            The 7.05% APR is the highest on our table, reflecting a traditional bank cost structure with strong branch infrastructure and relationship banking overhead. For most rate-sensitive borrowers, the gap vs. Marcus (6.79%) is 26 basis points, translating to roughly $73 more per month on a $400,000 loan and $26,300 over 30 years. The premium is only justified for VA borrowers or buyers in U.S. Bank&rsquo;s core geography who qualify for relationship pricing.
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
            { product: "30-Year Fixed", apr: "7.05%", note: "Conventional conforming" },
            { product: "American Dream 30Y", apr: "7.05%", note: "3% down, DPA available" },
            { product: "15-Year Fixed", apr: "6.58%", note: "Faster payoff" },
            { product: "VA 30Y Fixed", apr: "6.55%", note: "Strong VA program, 0% down" },
            { product: "FHA 30Y Fixed", apr: "6.80%", note: "3.5% down minimum" },
            { product: "USDA 30Y Fixed", apr: "6.88%", note: "Rural property, 0% down" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.apr}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates as of April 2026. VA and USDA rates are particularly competitive. Actual rate depends on credit profile, LTV, and location.</p>
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
              <span className="text-ink-soft">VA funding fee</span>
              <span className="font-mono font-semibold">1.25 to 3.3% (waived for disabled vets)</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Appraisal fee</span>
              <span className="font-mono font-semibold">$450 to $800</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Title and settlement</span>
              <span className="font-mono font-semibold">$1,200 to $3,000</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">American Dream DPA</span>
              <span className="font-mono font-semibold chip chip-lime">Up to $15,000 (eligible)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-ink-soft">Prepayment penalty</span>
              <span className="font-mono font-semibold">None</span>
            </li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">VA loans have no PMI and no down payment, but the VA funding fee applies unless you have a service-connected disability. The American Dream DPA can provide up to $15,000 in eligible markets, which substantially reduces effective closing costs.</p>
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
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Minimum FICO score of 620 for conventional and FHA; 620 for VA in most cases</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>VA loans: active duty, veterans, and surviving spouses with Certificate of Eligibility</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>American Dream: income at or below 80% of area median income; first-time buyer requirement varies by state</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>USDA: rural property in eligible census area, income limits apply</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Debt-to-income ratio at or below 45% for conventional; VA allows higher with residual income</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>2 years of employment or military service documentation required</li>
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
            U.S. Bank offers a digital mortgage application at usbank.com as well as in-person loan officers at its 2,200-plus branches. The online application is straightforward but less feature-rich than Rocket or Better: document upload works well, and status notifications keep borrowers informed, but the interactive rate-shopping tools are more basic.
          </p>
          <p>
            For VA borrowers, U.S. Bank has dedicated VA lending specialists who understand the nuances of the VA appraisal process, the Certificate of Eligibility requirements, and the funding fee calculations. This specialist model is a real differentiator: general-purpose loan officers at other lenders sometimes make costly errors on VA loans that delay closings. U.S. Bank&rsquo;s average close time is 35 to 55 days. The USDA and American Dream programs can take longer due to additional eligibility verification steps.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>VA-eligible veterans and active-duty service members wanting a specialist lender</li>
              <li>Midwest and Pacific Northwest buyers in U.S. Bank&rsquo;s core markets</li>
              <li>Low-income first-time buyers qualifying for American Dream DPA funds</li>
              <li>USDA borrowers purchasing in rural eligible areas</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You are comparing on rate alone: 7.05% is the highest in our table</li>
              <li>You are on the East Coast where U.S. Bank has minimal branch presence</li>
              <li>You are a conventional borrower without VA or DPA qualification: better rates exist elsewhere</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          U.S. Bank vs. Wells Fargo vs. Rocket
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">U.S. Bank</div>
            <div className="text-center">Wells Fargo</div>
            <div className="text-center">Rocket</div>
          </div>
          {[
            { feature: "30Y APR", a: "7.05%", b: "7.02%", c: "6.89%" },
            { feature: "VA specialist", a: "Yes", b: "Partial", c: "Yes" },
            { feature: "USDA loans", a: "Yes", b: "Limited", c: "Yes" },
            { feature: "DPA amount", a: "Up to $15K", b: "$5K (LMI)", c: "N/A" },
            { feature: "VA APR", a: "6.55%", b: "6.65%", c: "6.45%" },
            { feature: "Core markets", a: "Midwest, West", b: "National", c: "National" },
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
              q: "Is U.S. Bank good for VA loans?",
              a: "Yes. U.S. Bank is one of the largest VA loan originators in the country and has dedicated VA lending specialists. This expertise matters: VA loans have unique appraisal requirements, funding fee rules, and eligibility verification steps that general-purpose lenders sometimes handle poorly. The VA APR at U.S. Bank is competitive at 6.55%.",
            },
            {
              q: "What is the U.S. Bank American Dream program?",
              a: "American Dream is U.S. Bank&rsquo;s affordable homeownership program that offers 3% down with down payment assistance of up to $15,000 in eligible markets. Income limits apply (typically 80% of area median income), and first-time buyer requirements vary by state. Completion of a homebuyer education course is required.",
            },
            {
              q: "Does U.S. Bank offer USDA loans?",
              a: "Yes. U.S. Bank offers USDA guaranteed loans for eligible rural and suburban properties. USDA loans require 0% down and have below-market rates for qualifying borrowers in eligible census areas. Income limits and property location requirements apply; the USDA eligibility map at usda.gov is the starting point.",
            },
            {
              q: "How does U.S. Bank rate vs. other large banks for conventional loans?",
              a: "For conventional loans without VA or DPA eligibility, U.S. Bank&rsquo;s 7.05% APR is the highest on our table. Digital lenders like Marcus (6.79%) and Better (6.85%) are significantly lower. U.S. Bank is not the right choice for a standard conventional purchase if you are purely optimizing for rate.",
            },
            {
              q: "What states does U.S. Bank serve for mortgages?",
              a: "U.S. Bank offers mortgage lending in all 50 states and Washington DC, but its physical branch presence is concentrated in Minnesota, Wisconsin, Illinois, Colorado, Oregon, California, and other Midwest and West Coast states. Digital applications are available nationwide regardless of branch availability.",
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
