import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

export const metadata: Metadata = {
  title: "Wells Fargo Home Lending Mortgage Review (2026)",
  description:
    "Wells Fargo Home Lending offers a 7.02% 30-year APR with a massive branch network, a Yourfirstmortgage 3% down program, and strong jumbo loan options. Full 2026 review.",
};

const brand = getBrand("wellsfargo-mortgage")!;

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
                Wells Fargo Home Lending Review
              </h1>
              <div className="text-sm text-mute font-mono uppercase tracking-wider mt-3">
                Updated April 2026 · By the Fintiex Rate Desk
              </div>
            </div>
          </div>

          <div className="card-flush p-6 grid grid-cols-2 md:grid-cols-4 gap-6">
            <Stat label="30Y APR" value="7.02%" />
            <Stat label="Min credit score" value="620" />
            <Stat label="Min down" value="3%" />
            <Stat label="Fintiex score" value="7.4/10" />
          </div>
        </div>
      </section>

      {/* PROS + CONS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What works</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Yourfirstmortgage program: 3% down with no income limits for first-time buyers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Dream. Plan. Home. grant: up to $5,000 for LMI buyers in eligible markets</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Largest branch network of any US bank: 4,500-plus locations nationwide</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Strong jumbo loan program with competitive pricing above $766,550</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Relationship discount for Wells Fargo Premier customers</li>
              <li className="flex gap-3"><span className="chip chip-lime shrink-0">+</span>Full product suite: conventional, FHA, VA, jumbo, renovation</li>
            </ul>
          </div>
          <div className="card p-7">
            <h2 className="font-display font-bold text-xl mb-5 tracking-tight">What to watch</h2>
            <ul className="space-y-3 text-[1.0rem] leading-relaxed">
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>30Y APR at 7.02% is the second-highest on our comparison table</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Legacy of regulatory scandals (2016 to 2020 fake accounts) still affects trust scores</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Wells pulled back significantly from correspondent and indirect lending channels post-2023</li>
              <li className="flex gap-3"><span className="chip chip-mute shrink-0">-</span>Processing timelines can be inconsistent depending on branch volume and region</li>
            </ul>
          </div>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">Overview</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          What is Wells Fargo Home Lending?
        </h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Wells Fargo is the third-largest US bank by assets and historically one of the largest mortgage originators in the country. After the regulatory backlash following the 2016 scandal involving fake customer accounts, Wells Fargo scaled back its ambitions in the mortgage market significantly. Between 2022 and 2024, the bank exited the correspondent lending channel (buying loans from other originators) and reduced its footprint in certain higher-risk segments. The mortgage business that remains is more focused on direct-to-consumer origination through its branch network.
          </p>
          <p>
            The Yourfirstmortgage program offers a notable feature: 3% down on a conventional loan with no income limit. Unlike DreaMaker at Chase or Home Insight at PNC, Yourfirstmortgage is not restricted to low-to-moderate income borrowers. Any first-time buyer who has not owned a home in the past three years can use it. The Dream. Plan. Home. grant of up to $5,000 adds cash assistance for LMI buyers on top of the down-payment flexibility.
          </p>
          <p>
            The 7.02% APR puts Wells Fargo near the top of our cost table. For rate-sensitive borrowers, the gap vs. Marcus (6.79%) is 23 basis points, which on a $400,000 loan means roughly $63 more per month and $22,600 more over 30 years. The premium reflects the branch infrastructure and relationship banking model. Borrowers who value in-person service and already use Wells Fargo for banking can access relationship discounts that narrow the gap.
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
            { product: "30-Year Fixed", apr: "7.02%", note: "Conventional conforming" },
            { product: "Yourfirstmortgage 30Y", apr: "7.02%", note: "3% down, no income limit" },
            { product: "15-Year Fixed", apr: "6.55%", note: "Lower total interest" },
            { product: "FHA 30Y Fixed", apr: "6.78%", note: "3.5% down minimum" },
            { product: "VA 30Y Fixed", apr: "6.65%", note: "0% down for veterans" },
            { product: "Jumbo 30Y Fixed", apr: "7.10%", note: "Competitive above $766K" },
          ].map((r, i, arr) => (
            <div key={r.product} className={`grid grid-cols-3 px-6 py-4 items-center text-sm ${i < arr.length - 1 ? "border-b border-line-soft" : ""}`}>
              <div className="font-medium">{r.product}</div>
              <div className="text-right font-mono tabular font-semibold">{r.apr}</div>
              <div className="text-right text-mute">{r.note}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">Rates as of April 2026. Wells Fargo Premier customers may receive rate discounts of 0.125 to 0.25 percentage points.</p>
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
              <span className="font-mono font-semibold">0.5 to 1.5% of loan</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Dream. Plan. Home. grant (LMI)</span>
              <span className="font-mono font-semibold chip chip-lime">Up to $5,000</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Appraisal fee</span>
              <span className="font-mono font-semibold">$500 to $850</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Title and settlement</span>
              <span className="font-mono font-semibold">$1,500 to $3,200</span>
            </li>
            <li className="flex justify-between border-b border-line-soft pb-4">
              <span className="text-ink-soft">Rate lock (45 days)</span>
              <span className="font-mono font-semibold">$0 standard</span>
            </li>
            <li className="flex justify-between">
              <span className="text-ink-soft">Prepayment penalty</span>
              <span className="font-mono font-semibold">None</span>
            </li>
          </ul>
          <p className="text-sm text-mute mt-5 leading-relaxed">Total closing costs at Wells Fargo typically run 2.5 to 4.5% of the loan amount. The origination fee range is wider than most competitors; negotiate this directly with your loan officer.</p>
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
            <li className="flex gap-3"><span className="font-mono text-violet">02</span>Yourfirstmortgage: 3% down, first-time buyer (no ownership in past 3 years), no income limit</li>
            <li className="flex gap-3"><span className="font-mono text-violet">03</span>Dream. Plan. Home. grant: income at or below 120% of area median income in eligible markets</li>
            <li className="flex gap-3"><span className="font-mono text-violet">04</span>Debt-to-income ratio at or below 45% for most conventional programs</li>
            <li className="flex gap-3"><span className="font-mono text-violet">05</span>2 years of employment history; self-employed acceptable with 2 years of returns</li>
            <li className="flex gap-3"><span className="font-mono text-violet">06</span>Available in all 50 states; best rates require existing Wells Fargo banking relationship</li>
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
            Wells Fargo offers both an online application through wellsfargo.com and in-person support at any of its 4,500-plus branches. The online path is straightforward: enter basic financial information, get a pre-qualification range, and then submit a full application with document upload. The mortgage portal tracks status and allows e-signatures on disclosures.
          </p>
          <p>
            Branch consultations are Wells Fargo&rsquo;s differentiator for complex situations. Jumbo borrowers, self-employed applicants, or buyers with non-standard income can benefit significantly from working with an experienced branch loan officer who can manage the file manually when automated systems flag issues. Processing timelines average 35 to 50 days; branches in high-volume markets can run longer during peak season. Post-close, Wells Fargo retains servicing on most of its originated loans and customer satisfaction with the servicing team is generally solid.
          </p>
        </div>
      </section>

      {/* WHO FOR / WHO AVOID */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-lime)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">Best for</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>First-time buyers using Yourfirstmortgage with no income cap restrictions</li>
              <li>Jumbo borrowers who want a large, well-capitalized bank behind the loan</li>
              <li>Existing Wells Fargo Premier customers accessing relationship rate discounts</li>
              <li>Buyers in markets where in-person branch service is the preferred channel</li>
            </ul>
          </div>
          <div className="card p-7" style={{ borderTop: "3px solid var(--color-coral)" }}>
            <h2 className="font-display font-bold text-xl mb-4 tracking-tight">May not be the right fit if</h2>
            <ul className="space-y-2 text-[1.0rem] leading-relaxed text-ink-soft">
              <li>You are rate-sensitive: the 7.02% APR is the second-highest on our table</li>
              <li>Trust in the Wells Fargo brand is a concern given past regulatory history</li>
              <li>You need a fast digital-first close with minimal branch interaction</li>
            </ul>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-14">
        <span className="chip chip-mute mb-4">How it compares</span>
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6 leading-tight">
          Wells Fargo vs. Chase vs. U.S. Bank
        </h2>
        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-4 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div>Feature</div>
            <div className="text-center">Wells Fargo</div>
            <div className="text-center">Chase</div>
            <div className="text-center">U.S. Bank</div>
          </div>
          {[
            { feature: "30Y APR", a: "7.02%", b: "6.95%", c: "7.05%" },
            { feature: "First-time buyer program", a: "Yourfirstmortgage", b: "DreaMaker", c: "American Dream" },
            { feature: "No income cap", a: "Yes", b: "No (80% AMI)", c: "Varies" },
            { feature: "LMI grant", a: "$5,000", b: "$2,500", c: "Varies" },
            { feature: "Jumbo strength", a: "Strong", b: "Good", c: "Good" },
            { feature: "Branches", a: "4,500+", b: "5,000+", c: "2,200+" },
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
              q: "What is the Wells Fargo Yourfirstmortgage program?",
              a: "Yourfirstmortgage is Wells Fargo&rsquo;s 3% down conventional loan for first-time buyers (anyone who has not owned a home in the past 3 years). Unlike Chase&rsquo;s DreaMaker, there is no income limit. Buyers must complete a homeownership education course to qualify.",
            },
            {
              q: "What is the Dream. Plan. Home. grant?",
              a: "Dream. Plan. Home. is a closing cost assistance grant of up to $5,000 for eligible borrowers with income at or below 120% of the area median income. It is available in certain markets and does not need to be repaid. Check eligibility by zip code on the Wells Fargo website.",
            },
            {
              q: "Is Wells Fargo still a trustworthy lender after past scandals?",
              a: "Wells Fargo has paid billions in regulatory settlements and made management changes following the 2016 fake-accounts scandal and subsequent issues. The mortgage division was not the center of those scandals. As a mortgage lender, Wells Fargo remains a regulated institution subject to CFPB oversight, and its loan terms and servicing are governed by standard consumer protection rules.",
            },
            {
              q: "Does Wells Fargo offer good jumbo mortgage rates?",
              a: "Yes. Wells Fargo&rsquo;s jumbo program is competitive, particularly for borrowers with strong credit and high asset balances who bank at Wells Fargo. Premier and Private Banking customers often receive better jumbo pricing than the advertised rate. Minimum credit score for jumbo is typically 720.",
            },
            {
              q: "How do I qualify for the Wells Fargo Premier rate discount?",
              a: "Wells Fargo Premier requires a minimum of $250,000 in qualifying Wells Fargo deposit and investment accounts. Premier customers receive a 0.125 to 0.25 percentage point rate discount on mortgage products. This can bring the effective rate closer to digital-only competitors for qualifying customers.",
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
