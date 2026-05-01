import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

export const metadata: Metadata = {
  title: "loanDepot Mortgage Review (2026)",
  description:
    "loanDepot offers a 6.92% 30-year APR with a hybrid digital and branch model. Strong cash-out refi program. Full 2026 review of rates, fees, eligibility, and who should apply.",
};

const brand = getBrand("loandepot")!;

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
                loanDepot Mortgage Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated April 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="30Y APR" value="6.92%" />
            <Stat label="Min credit score" value="620" />
            <Stat label="Min down" value="3%" />
            <Stat label="Fintiex score" value="7.7/10" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Hybrid model: digital tools plus retail branches for in-person support</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong cash-out refinance program with competitive rates</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Mello Smartloan platform streamlines document collection and verification</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Full suite of loan products: conventional, FHA, VA, USDA, jumbo</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Lifetime guarantee: no origination fees on future refis with loanDepot</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Licensed in all 50 states with 200+ branch locations</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>30Y APR of 6.92% is above Marcus and Better; total cost can be higher</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Customer reviews are mixed; some complaints about processing delays</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Company experienced financial restructuring in 2023 to 2024, which affected service</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Mello app is functional but not as polished as Rocket or Better</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is loanDepot?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            loanDepot is one of the largest non-bank mortgage lenders in the US, founded in 2010 and headquartered in Irvine, California. It went public in 2021 and serves borrowers through both its digital Mello platform and a retail branch network spanning more than 200 locations nationwide. The combination gives it a footprint that pure digital lenders lack.
          </p>
          <p>
            The company&rsquo;s strongest product is its cash-out refinance program. For homeowners with significant equity looking to access cash for renovations, debt consolidation, or other purposes, loanDepot offers competitive rates and an experienced processing team. The Lifetime Guarantee program is a notable feature: once you close a loanDepot loan, they waive lender origination fees on any future refinances through loanDepot, which creates a long-term cost advantage if rates drop and you refi again.
          </p>
          <p>
            The 2023 to 2024 period included a data security incident and financial pressures that led to cost-cutting measures. Customer service quality took some hits during that window. By 2025 and 2026, the company has worked to stabilize, and current processing timelines appear more consistent. Still, borrowers should read recent reviews specific to their state, since branch-level quality can vary significantly.
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
            { product: "30-Year Fixed", apr: "6.92%", note: "Conventional conforming" },
            { product: "15-Year Fixed", apr: "6.38%", note: "Lower total interest" },
            { product: "FHA 30Y Fixed", apr: "6.65%", note: "3.5% down minimum" },
            { product: "VA 30Y Fixed", apr: "6.52%", note: "0% down for eligible" },
            { product: "Cash-Out Refi 30Y", apr: "7.05%", note: "Up to 80% LTV" },
            { product: "Jumbo 30Y Fixed", apr: "7.10%", note: "Above conforming limits" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.apr}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates as of April 2026. Actual rate varies by credit profile, LTV, loan type, and market.</p>
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
              <span className="font-mono font-semibold">$1,200 to $2,500</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Future refi origination fee</span>
              <span className="font-mono font-semibold chip chip-lime">$0 (Lifetime Guarantee)</span>
            </li>
            <li className="flex justify-between">
              <span className="text-ink-soft">Prepayment penalty</span>
              <span className="font-mono font-semibold">None</span>
            </li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">Total closing costs typically run 2 to 3.5% of the loan amount. The Lifetime Guarantee waives origination fees on future loanDepot refinances, which can be valuable if you plan to refi when rates drop.</p>
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
            <li className="flex gap-3"><span className="font-mono text-violet">01</span>Minimum FICO score of 620 for conventional loans; 580 for FHA in some cases</li>
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Minimum 3% down on conventional; 3.5% on FHA; 0% on VA</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Debt-to-income ratio at or below 45% for most programs</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>2 years of employment history; self-employed borrowers accepted with documentation</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>Primary residences, second homes, and investment properties eligible</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Cash-out refinance available up to 80% LTV on primary residence</li>
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
            loanDepot&rsquo;s Mello Smartloan platform handles the digital side of the application. You can start online, upload documents, and track your loan status through the portal. The automated income and asset verification tool connects to most major banks and payroll processors, which shortens the document-collection phase for straightforward borrowers.
          </p>
          <p>
            Where loanDepot differs from pure digital lenders is the branch option. If you prefer to meet with someone in person, the 200-plus retail branches allow you to work with a loan officer face to face. This is particularly useful for complex situations: cash-out refis with unusual equity positions, investment properties, or borrowers with non-standard income documentation. Average time to close runs 30 to 45 days, though branch locations with heavier loan volumes can run longer.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>Homeowners doing a cash-out refinance who want competitive rates</li>
              <li>Borrowers who want a hybrid of digital tools and in-person branch access</li>
              <li>VA-eligible buyers looking for a non-bank lender with VA expertise</li>
              <li>Existing customers using the Lifetime Guarantee for a future refinance</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You want the absolute lowest 30-year rate: Marcus and Better are ahead</li>
              <li>You are rate-sensitive and the 6.92% APR exceeds your budget target</li>
              <li>You want the most polished all-digital experience without branch complexity</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          loanDepot vs. Rocket vs. Chase
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">loanDepot</div>
            <div className="text-center">Rocket</div>
            <div className="text-center">Chase</div>
          </div>
          {[
            { feature: "30Y APR", a: "6.92%", b: "6.89%", c: "6.95%" },
            { feature: "Cash-out refi", a: "Strong", b: "Good", c: "Good" },
            { feature: "Min FICO", a: "620", b: "580 (FHA)", c: "620" },
            { feature: "Branches", a: "200+", b: "None", c: "5,000+" },
            { feature: "VA loans", a: "Yes", b: "Yes", c: "Yes" },
            { feature: "Lifetime refi fee waiver", a: "Yes", b: "No", c: "No" },
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
              q: "What is the loanDepot Lifetime Guarantee?",
              a: "The Lifetime Guarantee is loanDepot&rsquo;s commitment to waive lender origination fees and lender fees on future refinances through loanDepot. It applies once you close your first loanDepot mortgage. The waiver covers lender fees, not third-party costs like appraisals or title insurance.",
            },
            {
              q: "How good is loanDepot for cash-out refinancing?",
              a: "loanDepot is one of the stronger non-bank lenders for cash-out refis. They allow cash-out up to 80% LTV on primary residences, offer competitive rates for that product, and have underwriting experience with the more complex equity calculations that cash-out refis require.",
            },
            {
              q: "Does loanDepot have physical branches?",
              a: "Yes. loanDepot operates more than 200 retail branches across the US, primarily in high-population states. This is a meaningful differentiator vs. digital-only lenders if you prefer working with a loan officer in person.",
            },
            {
              q: "What happened with loanDepot&rsquo;s data breach in 2024?",
              a: "In January 2024, loanDepot disclosed a cyberattack that affected its IT systems and resulted in some customer data being accessed. The company notified affected customers and restored operations. If data security is a primary concern, it is worth reviewing loanDepot&rsquo;s published response and remediation steps before applying.",
            },
            {
              q: "Can self-employed borrowers get a loanDepot mortgage?",
              a: "Yes. loanDepot accepts self-employed borrowers who can document two years of business income via tax returns. Some bank statement loan programs are also available for borrowers who prefer not to use tax returns as the primary income documentation.",
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
