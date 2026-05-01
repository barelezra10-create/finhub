import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Better.com Mortgage Review (2026)",
  description:
    "Better.com offers no-commission, no-origination-fee mortgages with a 6.85% 30-year APR and pre-approval in minutes. Full 2026 review covering rates, fees, and who it suits.",
};

const brand = getBrand("better")!;

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
                Better.com Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated April 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="30Y APR" value="6.85%" />
            <Stat label="Min credit score" value="620" />
            <Stat label="Min down" value="3%" />
            <Stat label="Fintiex score" value="8.1/10" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>No origination fee and no commission paid to loan officers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Pre-approval in as little as 3 minutes online, no hard credit pull initially</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Fully digital, 24/7 process with real-time status tracking</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>One Day Mortgage program: full underwriting approval within 24 hours in qualifying cases</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Competitive rate at 6.85%, tied with the market average but with lower fees</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Cash offer program (Better Cash Offer) for buyers competing in tight markets</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Mass layoffs in 2022 to 2024 caused widely reported customer service breakdowns</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>No physical branch access: complex situations get less personal support</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Customer reviews on Trustpilot and BBB are mixed, reflecting service inconsistency</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Loan product range narrower than full-service lenders; limited FHA/VA depth</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is Better.com?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Better.com (Better Mortgage) launched in 2016 with a straightforward pitch: eliminate loan officer commissions and origination fees, pass the savings to borrowers, and build a mortgage company that runs primarily on software. For several years, it was the most talked-about fintech lender in the space, growing to fund billions in mortgages and briefly attempting a SPAC listing.
          </p>
          <p>
            The 2022 to 2024 period was turbulent. The company shed a significant portion of its workforce in a series of high-profile layoffs that drew public criticism. Customer service quality dropped sharply during that period, and it left a lasting mark on the company&rsquo;s reputation. By 2025 and into 2026, Better has stabilized its operations and improved review scores, but the memory of those years makes due diligence worthwhile before choosing them for a large transaction.
          </p>
          <p>
            The core product, however, is sound. The 6.85% 30-year APR reflects the market average while the fee structure keeps total closing costs below what traditional lenders charge. The One Day Mortgage program, for borrowers with straightforward financials, is genuinely impressive: you can receive a commitment letter within 24 hours of completing the full application. That kind of speed matters in competitive purchase markets.
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
            { product: "30-Year Fixed", apr: "6.85%", note: "No origination fee" },
            { product: "15-Year Fixed", apr: "6.28%", note: "Best for fast payoff" },
            { product: "7/1 ARM", apr: "6.51%", note: "Adjusts after 7 years" },
            { product: "FHA 30Y Fixed", apr: "6.60%", note: "3.5% min down" },
            { product: "Jumbo 30Y Fixed", apr: "6.97%", note: "Above conforming limits" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.apr}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates as of April 2026. Rate depends on credit profile, LTV, and property type.</p>
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
              <span className="text-ink-soft">Lender commission</span>
              <span className="font-mono font-semibold chip chip-lime">$0</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Appraisal fee</span>
              <span className="font-mono font-semibold">$450 to $750</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Title and settlement</span>
              <span className="font-mono font-semibold">$1,000 to $2,200</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Rate lock (30 days)</span>
              <span className="font-mono font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-ink-soft">Prepayment penalty</span>
              <span className="font-mono font-semibold">None</span>
            </li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">Better&rsquo;s fee model means closing costs are primarily third-party charges. Total out-of-pocket is typically 1.5 to 2% of the loan amount, well below the 2 to 5% industry range.</p>
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
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Minimum 3% down for conventional; 3.5% for FHA</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Debt-to-income ratio generally at or below 43%</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>2 years of employment history required; self-employed acceptable with 2 years of tax returns</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Primary residences and second homes; limited investment property availability</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Loans available in all 50 states</li>
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
            Better&rsquo;s platform is among the most polished in digital mortgage. The pre-approval flow takes roughly 3 to 5 minutes: enter income, assets, purchase price, and get a conditional pre-approval letter. No hard credit pull at this stage. When you move to a full application, the system uses an automated income and asset verification tool that connects to most major financial institutions.
          </p>
          <p>
            The One Day Mortgage feature, available for qualified borrowers, runs a full underwrite within 24 hours. This requires that your income, employment, and assets all verify cleanly through Better&rsquo;s automated systems. If your financials are straightforward (W-2 employee, stable bank accounts, no unusual income sources), this path is fast and reliable. Complex income situations (commissions, RSUs, self-employment, multiple properties) still require manual review and take longer.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Experienced borrowers comfortable running the process independently</li>
              <li>W-2 employees with clean financial profiles wanting fast approval</li>
              <li>Buyers in competitive markets who need a commitment letter quickly</li>
              <li>Refinancers focused on minimizing closing cost friction</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You want dedicated loan officer support throughout the process</li>
              <li>Your income is complex (self-employed, commission-heavy, multiple streams)</li>
              <li>You prefer a lender with a longer track record of consistent service</li>
              <li>You need USDA or VA loan products (limited availability)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Better.com vs. Marcus vs. Rocket Mortgage
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Better</div>
            <div className="text-center">Marcus</div>
            <div className="text-center">Rocket</div>
          </div>
          {[
            { feature: "30Y APR", a: "6.85%", b: "6.79%", c: "6.89%" },
            { feature: "Origination fee", a: "$0", b: "$0", c: "Varies" },
            { feature: "Min FICO", a: "620", b: "620", c: "580 (FHA)" },
            { feature: "Pre-approval speed", a: "3 min", b: "10 min", c: "8 min" },
            { feature: "One-day approval", a: "Yes", b: "No", c: "No" },
            { feature: "FHA loans", a: "Yes", b: "No", c: "Yes" },
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
              q: "Is Better.com still a reliable lender after the 2022 to 2024 layoffs?",
              a: "Better has stabilized since the restructuring period. By 2025 the company resumed growth and improved customer satisfaction scores. That said, it is worth reading recent reviews and asking your loan coordinator about current processing times before locking.",
            },
            {
              q: "How does the One Day Mortgage work?",
              a: "Better&rsquo;s One Day Mortgage uses automated underwriting to verify income, employment, and assets in real time. If everything verifies cleanly, you receive a commitment letter within 24 hours. This works best for W-2 employees with consistent income and standard bank accounts.",
            },
            {
              q: "Does Better charge a rate lock fee?",
              a: "Better does not charge for a standard 30-day rate lock. Extended locks beyond 30 days may involve a fee depending on the rate environment at the time of locking.",
            },
            {
              q: "Can I get a VA loan through Better.com?",
              a: "Better offers VA loans in some states but availability is limited compared to VA-specialist lenders like U.S. Bank or Navy Federal. If VA financing is your primary need, a VA-specialist lender will typically offer better pricing and service.",
            },
            {
              q: "What is the Better Cash Offer program?",
              a: "Better&rsquo;s Cash Offer program allows qualified buyers to make all-cash offers on homes. Better purchases the home on your behalf, then sells it back to you once your mortgage is finalized. It gives you a competitive edge in bidding situations. Fees apply, so compare total costs before using it.",
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
