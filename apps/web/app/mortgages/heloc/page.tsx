import Link from "next/link";
import type { Metadata } from "next";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "HELOC Rates 2026: HELOC vs HELOAN, Draw Period, Math | Fintiex",
  description:
    "HELOC rates today (avg 8.45%). HELOC vs HELOAN compared, draw and repayment mechanics, and when a home equity line beats a cash-out refinance.",
  alternates: { canonical: "/mortgages/heloc" },
};

const faqItems: FAQItem[] = [
  {
    question: "How is the HELOC rate calculated?",
    answer:
      "Most HELOCs use prime rate plus a margin set by the lender. Prime is typically 3.0 percentage points above the federal funds rate. With prime at 7.50% in May 2026, a HELOC with a margin of +0.95% prices at 8.45%. The CFPB requires lenders to disclose the index, margin, and current rate on the early disclosure.",
  },
  {
    question: "How does the draw period work?",
    answer:
      "Most HELOCs have a 10-year draw period during which you can borrow up to your credit limit and only pay interest on the balance. After draw ends, the line enters a 10- or 20-year repayment period during which the balance amortizes like a regular loan. Watch for the payment shock at conversion. It can double the monthly payment.",
  },
  {
    question: "Can the lender freeze or cut your HELOC?",
    answer:
      "Yes. Lenders can freeze a HELOC if your home value drops or your credit score declines materially. This happened to thousands of borrowers in 2008 and again to a smaller group in 2020. The CFPB allows lenders to freeze or reduce HELOCs in these conditions per the Truth in Lending Act. Treat the line as conditional access, not guaranteed access.",
  },
  {
    question: "Is HELOC interest tax-deductible?",
    answer:
      "Only when the funds are used to buy, build, or substantially improve the home that secures the line, per the 2017 Tax Cuts and Jobs Act. HELOC interest used for credit card payoff, education, or a car is not deductible. Consult a tax professional. Document use with receipts and contracts.",
  },
  {
    question: "What credit score do you need for a HELOC?",
    answer:
      "Most lenders require 680 minimum and reserve best pricing for 740+. A few lenders go to 660 with strong income. HELOAN underwriting is similar. Lenders typically cap combined LTV (first mortgage plus HELOC) at 80% to 90%, so equity matters as much as score.",
  },
  {
    question: "HELOC vs cash-out refinance: which costs less?",
    answer:
      "Depends on your existing first-lien rate. If your first mortgage is below 5.5%, the HELOC almost always wins because it leaves the cheap first mortgage in place. Above 6.5%, the cash-out usually wins because the new lower fixed rate applies to the full balance. See our cash-out page for the decision matrix.",
  },
];

export default function Page() {
  return (
    <>
      <FAQPageSchema items={faqItems} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Mortgages", href: "/mortgages" },
          { name: "HELOC", href: "/mortgages/heloc" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> HELOC rates updated today
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,5rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            HELOC: a credit card backed by your house.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            A home equity line of credit (HELOC) lets you borrow against your home's equity as needed, like a credit card with a much lower rate. The trade-off is that the rate is variable, the line can be frozen, and the lender holds a lien on your home. Here is how the draw mechanics work and when a HELOC beats a cash-out refi.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Estimate the payment
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/cash-out" className="pill pill-ghost">
              Compare cash-out
            </Link>
          </div>
        </div>
      </section>

      {/* RATE SNAPSHOT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
          <div className="flex items-center justify-between mb-6">
            <h2 className="font-display font-bold text-2xl tracking-tight">HELOC snapshot</h2>
            <span className="text-xs font-mono text-mute">Updated today</span>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "HELOC avg rate", value: "8.45%", caption: "Prime + 0.95 margin" },
              { label: "HELOC range (740+)", value: "7.99% to 9.50%", caption: "Across 14 lenders" },
              { label: "Prime rate", value: "7.50%", caption: "Wall Street Journal Prime" },
              { label: "HELOAN avg rate", value: "8.10%", caption: "Fixed second-lien loan" },
            ].map((tile) => (
              <div key={tile.label} className="card p-5">
                <div className="text-xs text-mute mb-2">{tile.label}</div>
                <div className="font-display font-extrabold text-2xl md:text-3xl tabular tracking-tight mb-1">
                  {tile.value}
                </div>
                <div className="text-xs text-mute mt-2">{tile.caption}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HELOC vs HELOAN */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">HELOC vs HELOAN</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Two ways to tap home equity.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            HELOCs and home equity loans (HELOANs) both create a second lien. The HELOC is a flexible credit line at a variable rate. The HELOAN is a one-time lump sum at a fixed rate. Pick the one whose mechanics fit how you actually plan to use the cash.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-6 md:p-8">
            <h3 className="font-display font-bold text-xl mb-3 tracking-tight">HELOC</h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">Rate:</span>
                <span className="text-mute"> Variable. Tied to prime plus a margin.</span>
              </li>
              <li>
                <span className="font-semibold">Access:</span>
                <span className="text-mute"> Draw any amount up to the credit limit during the draw period.</span>
              </li>
              <li>
                <span className="font-semibold">Payment:</span>
                <span className="text-mute"> Interest-only during draw. Principal+interest after draw.</span>
              </li>
              <li>
                <span className="font-semibold">Best for:</span>
                <span className="text-mute"> Renovations with phased spending, emergency reserves, or unpredictable cash needs.</span>
              </li>
              <li>
                <span className="font-semibold">Watch out for:</span>
                <span className="text-mute"> Rate hikes during draw period and payment shock at the repayment conversion.</span>
              </li>
            </ul>
          </div>
          <div className="card p-6 md:p-8">
            <h3 className="font-display font-bold text-xl mb-3 tracking-tight">HELOAN</h3>
            <ul className="space-y-3 text-sm leading-relaxed">
              <li>
                <span className="font-semibold">Rate:</span>
                <span className="text-mute"> Fixed for the life of the loan.</span>
              </li>
              <li>
                <span className="font-semibold">Access:</span>
                <span className="text-mute"> One lump sum at closing. No revolving access.</span>
              </li>
              <li>
                <span className="font-semibold">Payment:</span>
                <span className="text-mute"> Principal+interest from month one. Standard amortization.</span>
              </li>
              <li>
                <span className="font-semibold">Best for:</span>
                <span className="text-mute"> One-time uses with a known cost: debt consolidation, kitchen remodel finished by one contractor, college tuition.</span>
              </li>
              <li>
                <span className="font-semibold">Watch out for:</span>
                <span className="text-mute"> Higher fixed rate than HELOC start rate. Worth it for stability if you cannot absorb upward rate moves.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* DRAW PERIOD MECHANICS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Mechanics</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                How the draw period actually works.
              </h2>
              <p className="text-mute leading-relaxed">
                The interest-only draw period is the HELOC's biggest selling point and its biggest risk. Understand the mechanics before you sign.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Years 1 to 10: the draw period</h3>
                <p className="text-mute">
                  You can borrow up to your credit limit, repay, and re-borrow at will. Most lenders require an interest-only minimum payment during this phase. On a $50,000 balance at 8.45%, the interest-only minimum is about $352 per month. Some borrowers run a HELOC like a checking overdraft, which works as long as you keep balances low.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">The conversion: payment shock</h3>
                <p className="text-mute">
                  After year 10, the HELOC closes for new draws and converts to a repayment period (typically 10 or 20 years). The balance must now amortize. On that same $50,000 balance with a 10-year repayment, the monthly payment jumps from $352 interest-only to about $620 principal+interest. The 76% jump catches many borrowers by surprise. The CFPB has flagged this risk in its consumer education materials.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">The lender can freeze the line</h3>
                <p className="text-mute">
                  Lenders are allowed to freeze new draws or reduce the credit limit if home values drop materially or the borrower's credit deteriorates. This happened broadly in 2008-2009. Bank failures during 2023 also led to short-term HELOC freezes at affected institutions, though FDIC resolution typically restored access. Keep an emergency cash reserve. Do not depend on the HELOC alone.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">The variable rate problem</h3>
                <p className="text-mute">
                  HELOC rates move with prime. When the Fed hikes 0.25%, your HELOC rate moves 0.25% within 1-2 billing cycles. Borrowers who opened HELOCs in 2021 at 4.50% saw rates climb above 9% by mid-2023 as the Fed responded to inflation. If you cannot absorb a 3 to 4 percentage point rise, consider a HELOAN instead.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHEN HELOC WINS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10 mb-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">When HELOC wins</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Three setups where a HELOC is the right tool.
            </h2>
          </div>
          <div className="col-span-12 lg:col-span-7 text-mute leading-relaxed">
            A HELOC works best when you need flexibility, when your first mortgage is at a low locked-in rate, and when the borrowed amount is small enough that closing costs matter.
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Cheap first mortgage</h3>
            <p className="text-sm text-mute leading-relaxed">
              Your first mortgage is locked at 3% to 5% from 2020-2022. A cash-out at 7%+ destroys that. The HELOC keeps the cheap first lien intact.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Phased renovation</h3>
            <p className="text-sm text-mute leading-relaxed">
              You are renovating across 18 months and need to draw as invoices come in. The HELOC charges interest only on what you have borrowed, not the full line.
            </p>
          </div>
          <div className="card p-6">
            <h3 className="font-display font-bold text-lg mb-2 tracking-tight">Emergency reserves</h3>
            <p className="text-sm text-mute leading-relaxed">
              An open but unused HELOC costs $0 to maintain at most lenders. It is a low-cost emergency cushion if cash reserves get drawn down.
            </p>
          </div>
        </div>
      </section>

      {/* CROSS-LINKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-8">
            <span className="chip chip-mute mb-4">Tools and related</span>
            <h2 className="font-display font-extrabold text-3xl tracking-tight">Run the math, then keep going.</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { label: "Mortgage payment calc", href: "/calculators/mortgage-payment", detail: "Estimate the HELOC payment." },
              { label: "Refi break-even", href: "/calculators/refinance-break-even", detail: "Compare HELOC vs cash-out." },
              { label: "Cash-out refinance", href: "/mortgages/cash-out", detail: "Replace the first mortgage instead." },
              { label: "Rates by state", href: "/mortgages/by-state", detail: "Local lender availability." },
            ].map((p) => (
              <Link key={p.href} href={p.href} className="card p-6 block group">
                <div className="flex items-center justify-between mb-3">
                  <span className="chip chip-violet">{p.label}</span>
                  <span className="text-mute text-lg group-hover:text-ink group-hover:translate-x-1 transition-all">→</span>
                </div>
                <div className="text-sm text-mute leading-relaxed">{p.detail}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="mb-10">
          <span className="chip chip-mute mb-4">FAQ</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">Common questions about HELOCs.</h2>
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
              See HELOC vs cash-out side by side.
            </h2>
            <p className="text-ink/70 mt-2">Plug in your old rate, balance, and cash needed.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/mortgage-payment" className="pill pill-ink">
              Mortgage calculator
              <span aria-hidden>→</span>
            </Link>
            <Link href="/mortgages/cash-out" className="pill pill-ghost">
              Cash-out refi
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
