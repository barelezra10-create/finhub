import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Rocket Mortgage Review (2026)",
  description:
    "Rocket Mortgage is the largest US mortgage originator with a 6.89% 30-year APR, FHA access at 580 FICO, strong mobile app, and best-in-class support for complex loan situations.",
};

const brand = getBrand("rocket")!;

export default function Page() {
  return (
    <article className="bg-bg">
      {/* HERO */}
      <section className="border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="flex items-start gap-5 mb-8">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-violet mb-3">Mortgage Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                Rocket Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated April 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="30Y APR" value="6.89%" />
            <Stat label="Min credit score" value="580 (FHA)" />
            <Stat label="Min down" value="3.5% FHA" />
            <Stat label="Fintiex score" value="8.3/10" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Largest mortgage originator in the US: deep underwriting expertise across loan types</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>FHA access at 580 FICO minimum: one of the most accessible credit thresholds available</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Top-rated mobile app with real-time status, document upload, and e-sign</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong jumbo product line with competitive pricing above $766,550</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Dedicated loan advisor support throughout the process</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>VA, FHA, USDA, and conventional all available</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>30Y APR at 6.89% is higher than digital-only competitors like Marcus (6.79%) and Better (6.85%)</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Origination fees vary by product and can add $1,000 to $3,000 to closing costs</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No physical branch network for in-person consultations</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Aggressive follow-up from sales team after initial inquiry</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is Rocket Mortgage?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Rocket Mortgage (formerly Quicken Loans) is the largest residential mortgage originator in the United States by volume. Based in Detroit and part of Rocket Companies, it funded more than $125 billion in mortgages in 2023. That scale matters because it means Rocket has underwriting experience with virtually every loan scenario you can present, from straightforward W-2 purchase to complex self-employed jumbo.
          </p>
          <p>
            The 30-year APR of 6.89% is competitive but not the lowest on our table. The gap vs. Marcus (6.79%) is 10 basis points, which on a $400,000 loan translates to about $27 per month and $9,800 over 30 years. That premium pays for something: dedicated loan advisor support, wider loan product availability, and a proven track record of closing on time. For borrowers with complex situations, the support infrastructure often justifies the cost.
          </p>
          <p>
            The mobile app is widely regarded as the best in the mortgage industry. Borrowers can manage the entire process on a phone: uploading documents, checking status, communicating with the loan team, and signing disclosures. The Verified Approval program offers a commitment letter backed by verified income and assets, which carries more weight with sellers than a standard pre-approval in competitive markets.
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
            { product: "30-Year Fixed", apr: "6.89%", note: "Conventional conforming" },
            { product: "15-Year Fixed", apr: "6.35%", note: "Lower total interest" },
            { product: "FHA 30Y Fixed", apr: "6.60%", note: "580 FICO min, 3.5% down" },
            { product: "VA 30Y Fixed", apr: "6.45%", note: "0% down, no PMI" },
            { product: "Jumbo 30Y Fixed", apr: "6.95%", note: "Strong jumbo product" },
            { product: "7/1 ARM", apr: "6.55%", note: "Adjusts after 7 years" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.apr}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates as of April 2026. Rate depends on credit profile, LTV, loan type, and property location.</p>
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
              <span className="text-ink-soft">Application fee</span>
              <span className="font-mono font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Appraisal fee</span>
              <span className="font-mono font-semibold">$400 to $750</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Title and settlement</span>
              <span className="font-mono font-semibold">$1,200 to $2,800</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Rate lock (45 days)</span>
              <span className="font-mono font-semibold">$0 standard; fee for extensions</span>
            </li>
            <li className="flex justify-between">
              <span className="text-ink-soft">Prepayment penalty</span>
              <span className="font-mono font-semibold">None</span>
            </li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">Total closing costs at Rocket typically run 2 to 3.5% of the loan amount. The origination fee is the main variable: ask about lender credits vs. points to optimize your cost structure at current rates.</p>
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
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Minimum 580 FICO for FHA loans; 620 for conventional</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Minimum 3% down on conventional (Freddie Mac Home Possible); 3.5% on FHA</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>0% down for VA-eligible borrowers</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Debt-to-income ratio up to 50% in some cases with compensating factors</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Self-employed borrowers accepted with 2 years of business returns</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Available in all 50 states and the District of Columbia</li>
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
            Rocket&rsquo;s application begins online with a quick pre-qualification step that pulls a soft credit inquiry. From there, you complete a full application and get matched with a dedicated loan advisor. Unlike fully automated lenders, Rocket pairs every borrower with a named human contact who manages your file from application to close. This is the structural difference between Rocket and Better or Marcus: you have a person, not just a portal.
          </p>
          <p>
            The Rocket app is genuinely excellent. Loan status is updated in real time, task lists are clear and actionable, and document uploads work reliably. Closing timelines typically run 28 to 40 days for purchase loans and 30 to 45 for refinances. Rocket&rsquo;s scale and volume mean underwriters are experienced and processing pipelines are well-staffed. The trade-off is that the origination fee adds upfront cost that some borrowers would rather avoid.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Borrowers with complex income or credit situations needing expert guidance</li>
              <li>FHA buyers with FICO scores as low as 580</li>
              <li>Veterans using VA loan benefits</li>
              <li>Jumbo loan borrowers who want a reliable, well-capitalized lender</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You want the absolute lowest rate and are comfortable going fully self-serve</li>
              <li>Upfront fees are your primary concern and you prefer a zero-origination model</li>
              <li>You want a branch walk-in option in your city</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Rocket vs. Marcus vs. loanDepot
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Rocket</div>
            <div className="text-center">Marcus</div>
            <div className="text-center">loanDepot</div>
          </div>
          {[
            { feature: "30Y APR", a: "6.89%", b: "6.79%", c: "6.92%" },
            { feature: "Origination fee", a: "Varies", b: "$0", c: "Varies" },
            { feature: "Min FICO (FHA)", a: "580", b: "N/A", c: "620" },
            { feature: "VA loans", a: "Yes", b: "No", c: "Yes" },
            { feature: "Loan advisor", a: "Dedicated", b: "Chat/phone", c: "Hybrid" },
            { feature: "Mobile app rating", a: "4.8/5", b: "4.4/5", c: "4.2/5" },
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
              q: "What is the minimum credit score for Rocket Mortgage?",
              a: "The minimum is 580 for FHA loans and 620 for conventional loans. VA and USDA loans may have slightly different thresholds depending on the specific program and your financial profile.",
            },
            {
              q: "Does Rocket Mortgage charge an origination fee?",
              a: "Yes. Rocket charges an origination fee that typically ranges from 0.5% to 1% of the loan amount. This is a key cost difference vs. zero-fee lenders like Marcus and Better. Ask your loan advisor about lender credits at a higher rate vs. paying the fee upfront.",
            },
            {
              q: "What is the Verified Approval program?",
              a: "Rocket&rsquo;s Verified Approval is a pre-approval backed by verified income, employment, and assets. It carries more weight with sellers than a standard pre-qualification because underwriting has already reviewed your documents. It is a useful tool in competitive markets.",
            },
            {
              q: "How long does it take to close with Rocket Mortgage?",
              a: "Average close time is 28 to 40 days for purchase loans. Refinances typically run 30 to 45 days. Rocket&rsquo;s size and staff depth mean they generally close on schedule even during high-volume periods.",
            },
            {
              q: "Can I get a jumbo loan through Rocket Mortgage?",
              a: "Yes. Rocket offers jumbo loans above the conforming limit of $766,550 in most counties. Rates are competitive and the same advisor model applies. Minimum credit score for jumbo is typically 700, and you will need 10 to 20% down depending on the loan amount.",
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
