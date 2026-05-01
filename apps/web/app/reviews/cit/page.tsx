import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("cit")!;

export const metadata: Metadata = {
  title: "CIT Bank Platinum Savings Review: 4.25% APY ($5K Min) (2026)",
  description:
    "CIT Bank Platinum Savings pays 4.25% APY but only on balances of $5,000 or more. Under that, you earn 0.25%. Full 2026 review: who it is for and who should look elsewhere.",
};

export default function Page() {
  return (
    <article className="bg-bg">
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 pt-14 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-lime mb-2">Savings Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                CIT Bank Platinum Savings Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            CIT Bank Platinum Savings pays{" "}
            <span className="font-mono tabular font-semibold text-ink">4.25% APY</span> on balances of $5,000 or more. Below that threshold, you earn 0.25%. Here is who this account makes sense for and who should look elsewhere.
          </p>
          <div className="mt-4 text-xs font-mono text-mute uppercase tracking-wider">
            By the Fintiex Rate Desk · Updated April 28, 2026
          </div>
        </div>
      </section>

      {/* TL;DR card */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="card-flush p-8" style={{ boxShadow: "var(--shadow-pop)" }}>
          <div className="chip chip-ink mb-6">TL;DR</div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat label="APY (≥$5K)" value="4.25%" />
            <Stat label="APY (&lt;$5K)" value="0.25%" />
            <Stat label="Monthly Fee" value="$0" />
            <Stat label="Fintiex Score" value="6.8 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 4.25% APY is competitive for balances above $5,000</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No monthly maintenance fees</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> FDIC insured via First Citizens BancShares</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Solid CD lineup available alongside the savings account</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Simple, no-promotion rate structure once balance threshold is met</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Only 0.25% APY on balances under $5,000, far below top HYSA alternatives</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Mobile app is dated and lower-rated than Ally, SoFi, or Discover</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Rate is 60 basis points below Bask even for qualifying balances</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            CIT Bank is a division of First Citizens BancShares, one of the largest family-controlled banks in the United States with total assets of approximately $217 billion as of Q4 2025. First Citizens BancShares acquired CIT Group in 2022, giving CIT Bank significantly larger institutional backing than it had as an independent entity. The bank is FDIC-insured and regulated by the Office of the Comptroller of the Currency as a national bank.
          </p>
          <p>
            The Platinum Savings account has a critical structure that distinguishes it from most HYSA competitors: the 4.25% APY rate only applies to balances of $5,000 or more. For any amount below $5,000, the rate drops to 0.25%, which is roughly in line with a traditional brick-and-mortar savings account and well below what Bask, Bread, Marcus, Ally, SoFi, or Discover pay on any balance. This tiered rate structure makes the account fundamentally unsuitable for anyone who cannot maintain the $5,000 threshold.
          </p>
          <p>
            For savers with consistently large balances, the 4.25% APY is competitive, though not leading the market. CIT also offers a CD lineup with competitive rates, making it possible to pair the savings account with a CD ladder using the same institution. The mobile app, however, receives lower ratings than most HYSA competitors and has been described as functional but dated. Customer service is available by phone during business hours but does not match Discover's or Ally's 24/7 availability.
          </p>
        </div>
      </section>

      {/* Rate history */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate History</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            CIT Bank's Platinum Savings rate has tracked the Federal Reserve rate cycle since 2022, rising from near 0.50% to above 5.00% APY (on qualifying balances) during the peak of the Fed tightening cycle in late 2023. Rates have since declined to 4.25% following Fed cuts in 2024. The $5,000 minimum threshold for the top rate has remained in place throughout this period. CIT has maintained a competitive top-tier rate but has not led the HYSA market at any point during this rate cycle.
          </p>
        </div>
      </section>

      {/* Fees + Limits */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Fees and Limits</h2>
        <div className="card-flush p-6 max-w-2xl">
          <ul className="space-y-3 text-[0.9375rem]">
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Monthly fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">APY on balances under $5,000</span>
              <span className="font-mono tabular font-semibold">0.25%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">APY on balances $5,000 and above</span>
              <span className="font-mono tabular font-semibold">4.25%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Minimum opening deposit</span>
              <span className="font-mono tabular font-semibold">$100</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Outgoing wire fee</span>
              <span className="font-mono tabular font-semibold">$10</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to open */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to Open</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening a CIT Platinum Savings account at cit.com takes about five minutes. A $100 minimum deposit is required to open, though the account's top rate does not activate until the balance reaches $5,000. You will need a Social Security number and a linked external account for the initial ACH transfer.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Visit cit.com and select Platinum Savings under the savings products section</li>
          <li className="list-disc ml-4">Complete identity verification with SSN and personal details</li>
          <li className="list-disc ml-4">Link an external bank account via routing and account number</li>
          <li className="list-disc ml-4">Deposit at least $100 to open; deposit at least $5,000 to activate the 4.25% APY</li>
          <li className="list-disc ml-4">Download the CIT mobile app for account management</li>
        </ul>
      </section>

      {/* UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">App and Online Banking Experience</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            CIT Bank's mobile app is functional but dated. App Store ratings hover around 4.0 out of 5, below the 4.6 to 4.8 ratings of Ally, Discover, and SoFi. Core functions including balance viewing, ACH transfer initiation, and CD management are available, but the interface has not kept pace with the design investment of newer fintech entrants. Customer service is available by phone during business hours Monday through Friday but does not offer the 24/7 availability that Ally and Discover provide. For a pure savings account managed infrequently, the app limitations are tolerable. For anyone who interacts with their account regularly, the UX gap relative to competitors will become apparent.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">FDIC Insurance and Safety</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            CIT Bank deposits are held by First Citizens BancShares, Member FDIC. Standard coverage applies up to $250,000 per depositor per ownership category, with joint account coverage up to $500,000. First Citizens BancShares, Inc. is publicly traded on Nasdaq under the ticker FCNCA and had total assets of approximately $217 billion as of Q4 2025 following its acquisition of Silicon Valley Bank assets in 2023. The institution is well-capitalized and subject to enhanced regulatory oversight as a large bank.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Savers who can consistently maintain a balance of $5,000 or more</li>
              <li>Those looking for a straightforward FDIC-insured savings product without frills</li>
              <li>Existing CIT customers who want to manage savings and CDs in one place</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Your balance is below $5,000 (you will earn only 0.25%)</li>
              <li>You want a modern app experience with high ratings</li>
              <li>You want a better rate on large balances (Bask pays 4.85% on any balance)</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How It Compares</h2>
        <div className="card-flush overflow-hidden max-w-3xl">
          <div className="grid grid-cols-4 px-5 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-1">Bank</div>
            <div className="col-span-1 text-right">APY</div>
            <div className="col-span-1 text-right">Min for Top Rate</div>
            <div className="col-span-1 text-right">App Rating</div>
          </div>
          {[
            { name: "Discover", apy: "4.30%", min: "$0", app: "4.8" },
            { name: "CIT Bank", apy: "4.25%", min: "$5,000", app: "4.0", highlight: true },
            { name: "Amex HYSA", apy: "4.15%", min: "$0", app: "4.2" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.apy}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.min}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.app}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="What APY do I earn if my CIT Platinum Savings balance drops below $5,000?">
            If your balance falls below $5,000 for any reason, the rate on your entire balance drops to 0.25% APY for the time it is below the threshold. This is a significant difference from accounts like Bask or Marcus, which pay their full rate on any balance.
          </Faq>
          <Faq q="Is CIT Bank the same as Citibank?">
            No. CIT Bank is a division of First Citizens BancShares, which acquired CIT Group in 2022. Citibank is a wholly separate institution and a subsidiary of Citigroup, Inc. The similar names have caused confusion for years, but they share no corporate relationship.
          </Faq>
          <Faq q="Does CIT offer CDs?">
            Yes. CIT Bank offers a range of CD products with competitive rates and terms from 6 months to 5 years. Term CDs and No-Penalty CDs are available, and they can be managed from the same account login as the Platinum Savings account.
          </Faq>
          <Faq q="Is CIT Bank FDIC insured?">
            Yes. CIT Bank is a division of First Citizens BancShares, Member FDIC. Standard deposit insurance coverage of up to $250,000 per depositor per ownership category applies.
          </Faq>
          <Faq q="Who acquired CIT Bank?">
            First Citizens BancShares completed its acquisition of CIT Group in January 2022. The same institution also acquired much of Silicon Valley Bank's assets in March 2023 in an FDIC-assisted transaction, significantly expanding its balance sheet.
          </Faq>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-20">
        <div className="flex items-center gap-4">
          <Link href="/savings" className="pill pill-ink">
            Compare all HYSA rates <span aria-hidden>→</span>
          </Link>
          <Link href="/savings" className="pill pill-ghost">
            See the full savings table
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

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line pb-6">
      <div className="font-display font-semibold text-lg mb-2">{q}</div>
      <div className="text-mute text-[0.9375rem] leading-relaxed">{children}</div>
    </div>
  );
}
