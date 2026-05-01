import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("ally")!;

export const metadata: Metadata = {
  title: "Ally Bank HYSA Review: 4.45% APY, Buckets, No Fees (2026)",
  description:
    "Ally Bank pays 4.45% APY with no minimum, no fees, savings Buckets, and top-rated customer service. Full 2026 review: pros, cons, UX, and who it is best for.",
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
                Ally Bank Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            Ally Bank combines{" "}
            <span className="font-mono tabular font-semibold text-ink">4.45% APY</span> with a fully featured online banking experience, savings Buckets, Round-Ups, and some of the best-rated customer service in the industry. Here is our full 2026 review.
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
            <Stat label="APY" value="4.45%" />
            <Stat label="Min Deposit" value="$0" />
            <Stat label="Monthly Fee" value="$0" />
            <Stat label="Fintiex Score" value="8.8 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 4.45% APY with no minimum or monthly fee</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Savings Buckets let you organize funds into named goals within one account</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Round-Ups automatically transfers spare change from checking to savings</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Full-service online bank: checking, savings, CDs, investing, auto loans</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Top-rated 24/7 customer service, consistently ranked among best in online banking</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> FDIC insured via Ally Bank, Member FDIC</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> APY is 40 basis points below Bask's top rate</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No physical branch locations</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Savings rate lags if you have very large balances and chase maximum yield</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Ally Bank is one of the most established online-only banks in the United States, having operated as GMAC Bank before rebranding in 2009. Headquartered in Sandy, Utah, Ally Financial is publicly traded on the New York Stock Exchange under the ticker ALLY and had total assets of roughly $192 billion as of Q4 2025. It is regulated as a state-chartered bank by the Federal Reserve and the Utah Department of Financial Institutions, with full FDIC insurance on all deposit products.
          </p>
          <p>
            The savings account pays 4.45% APY with no minimum deposit and no monthly fee. What sets Ally apart from pure rate-play banks is its Buckets feature: within a single savings account, you can create up to ten named buckets (Emergency Fund, Vacation, Down Payment, and so on) and allocate funds accordingly. This eliminates the need to open multiple savings accounts just to keep money mentally separated. The Round-Ups feature rounds up debit card purchases from a linked Ally checking account to the nearest dollar and transfers the difference to savings, creating an automatic micro-savings habit.
          </p>
          <p>
            Ally is also a genuine full-service online bank. Beyond savings, it offers interest-bearing checking accounts, CDs (including No-Penalty CDs), money market accounts, mortgage lending, auto financing, and an investment platform. If you want a single online institution for the majority of your financial life, Ally is the most complete option in the HYSA category.
          </p>
        </div>
      </section>

      {/* Rate history */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate History</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Ally's HYSA rate has tracked the Federal Reserve cycle consistently since 2022. Starting near 0.50% in early 2022, the rate rose to a peak of around 4.75% in late 2023 and has since moderated as the Fed began cutting rates. Ally has historically positioned its savings rate at a slight discount to the market's very top offers, a deliberate choice that reflects its investment in customer service, product breadth, and brand. For savers who value those features, the 30 to 40 basis point cost versus Bask amounts to roughly $30 to $40 per year per $10,000 saved.
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
              <span className="text-mute">Minimum opening deposit</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Minimum balance for full APY</span>
              <span className="font-mono tabular font-semibold">$0.01</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Outgoing wire fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Number of Buckets allowed</span>
              <span className="font-mono tabular font-semibold">Up to 10</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to open */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to Open</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening an Ally savings account at ally.com takes about five minutes. You will need a Social Security number, a government-issued ID, and an external bank account to fund. No hard credit inquiry is performed during opening. ACH funding typically arrives within 1 to 3 business days.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Visit ally.com and select Open Account under Savings</li>
          <li className="list-disc ml-4">Complete identity verification with SSN and government ID</li>
          <li className="list-disc ml-4">Link an external account via routing and account number</li>
          <li className="list-disc ml-4">Transfer any amount to fund (no minimum required)</li>
          <li className="list-disc ml-4">Optionally add a checking account to enable Round-Ups</li>
        </ul>
      </section>

      {/* UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">App and Online Banking Experience</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Ally's mobile app is one of the strongest in the online banking category, with App Store ratings near 4.7 out of 5 and Google Play ratings around 4.3. The app supports the full product lineup: savings account management including Buckets, checking account with debit card controls, CD management, and transfers between accounts. Customer service is available 24 hours a day, 7 days a week by phone, live chat, and email. Response times and agent quality consistently receive top rankings in J.D. Power online banking satisfaction surveys. For anyone who wants to bank entirely online without a physical branch, Ally is the benchmark.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">FDIC Insurance and Safety</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Ally Bank is a state-chartered bank, Member FDIC (FDIC certificate number 57803). All deposit accounts, including savings, checking, CDs, and money market accounts, are FDIC-insured up to $250,000 per depositor per ownership category. Joint accounts are covered up to $500,000. Ally Financial, Inc. is publicly traded under ALLY on the NYSE and is subject to Federal Reserve oversight as a bank holding company.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>People who want to consolidate all banking in one online institution</li>
              <li>Goal-based savers who want named Buckets within a single account</li>
              <li>Anyone who puts a high value on customer service and 24/7 support</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You want the absolute highest HYSA rate (Bask pays 40 bps more)</li>
              <li>You need physical branch access for cash deposits or complex transactions</li>
              <li>You have a direct deposit and want combined checking plus higher savings rate (SoFi)</li>
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
            <div className="col-span-1 text-right">Min</div>
            <div className="col-span-1 text-right">Full Banking</div>
          </div>
          {[
            { name: "Marcus", apy: "4.50%", min: "$0", full: "No" },
            { name: "Ally Bank", apy: "4.45%", min: "$0", full: "Yes", highlight: true },
            { name: "SoFi", apy: "4.40%*", min: "$0", full: "Yes" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.apy}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.min}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.full}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 max-w-2xl">* SoFi 4.40% requires direct deposit; otherwise 1.20%</p>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="What are Ally Savings Buckets?">
            Buckets let you subdivide a single savings account into up to ten named categories, such as Emergency Fund, Vacation, or New Car. Each bucket tracks its own balance, but all funds earn the same 4.45% APY and share one account number. This eliminates the need to open multiple savings accounts to organize your goals.
          </Faq>
          <Faq q="What are Round-Ups?">
            Round-Ups automatically round up Ally debit card transactions to the nearest dollar and transfer the difference to your savings account. For example, a $4.60 coffee becomes $4.60 spent plus $0.40 saved. Over a month of normal spending, Round-Ups can add $15 to $40 in micro-deposits to your savings with no manual effort.
          </Faq>
          <Faq q="Does Ally have physical branches?">
            No. Ally is an online-only bank. There are no branch locations. You manage everything via the app or website. For cash deposits, Ally accepts deposits via mailed checks or linked external accounts only.
          </Faq>
          <Faq q="Can I earn interest on an Ally checking account?">
            Yes. Ally's Interest Checking account earns 0.10% APY on balances under $15,000 and 0.25% APY on balances $15,000 and above, as of April 2026. These rates are competitive with traditional bank checking accounts but well below HYSA levels.
          </Faq>
          <Faq q="Is Ally a good bank for everyday banking plus saving?">
            Yes. For the all-in-one online banking use case, Ally is one of the best options available. The combination of competitive savings rates, a strong checking account, 24/7 customer service, and product breadth (CDs, investing, auto loans) makes it a rare full-service substitute for a traditional bank.
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
