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

const brand = getBrand("sofi")!;

export const metadata: Metadata = {
  title: "SoFi HYSA Review: 4.40% APY With Direct Deposit (2026)",
  description:
    "SoFi pays 4.40% APY on savings with direct deposit, or 1.20% without. Full 2026 review: Vaults, ATM rebates, member benefits, pros, cons, and who should open one.",
  alternates: { canonical: "/reviews/sofi" },
};

const faqs: FAQItem[] = [
  {
    question: "What counts as a qualifying direct deposit for the 4.40% APY?",
    answer:
      "SoFi accepts employer payroll, government benefit payments (Social Security, disability), freelance income via ACH, and select gig platform payouts. A personal transfer from another bank account does not qualify. Check SoFi's current terms for the full list.",
  },
  {
    question: "What are SoFi Vaults?",
    answer:
      "Vaults are goal-based savings buckets within your SoFi savings account, similar to Ally's Buckets feature. You can create multiple Vaults with names and targets (such as Emergency Fund at $10,000) and track progress without opening separate accounts.",
  },
  {
    question: "Can I use ATMs with SoFi?",
    answer:
      "Yes. SoFi provides access to 55,000 fee-free Allpoint ATMs nationwide when you have a SoFi debit card. Out-of-network ATM fees may apply, but SoFi offers limited rebates for members with qualifying direct deposits.",
  },
  {
    question: "Is SoFi Bank FDIC insured?",
    answer:
      "Yes. SoFi Bank, N.A. is a nationally chartered bank, Member FDIC, insuring deposits up to $250,000 per depositor per ownership category.",
  },
  {
    question: "What happens to my APY if I stop my direct deposit?",
    answer:
      "If your direct deposit stops (for example, you change jobs and do not redirect payroll), SoFi will move your savings rate from 4.40% to 1.20%. The drop takes effect in the next monthly statement cycle after SoFi detects the absence of a qualifying deposit.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="SoFi Bank Review (2026)"
        description="SoFi pays 4.40% APY on savings with direct deposit, or 1.20% without. Full 2026 review: Vaults, ATM rebates, member benefits, pros, cons, and who should open one."
        slug="/reviews/sofi"
        brandName="SoFi"
        category="Savings Account"
        apr="4.40"
        ratingValue={7.9}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "Reviews", href: "/reviews" },
          { name: "SoFi", href: "/reviews/sofi" },
        ]}
      />
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg border-b border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 pt-14 pb-12">
          <div className="flex items-center gap-4 mb-6">
            <BrandLogo brand={brand} size={72} rounded="lg" />
            <div>
              <span className="chip chip-lime mb-2">Savings Review</span>
              <h1 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-tight">
                SoFi Bank Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            SoFi pays{" "}
            <span className="font-mono tabular font-semibold text-ink">4.40% APY</span> on savings when you set up direct deposit, dropping to 1.20% without it. Here is everything you need to know before opening an account in 2026.
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
            <Stat label="APY (w/ DD)" value="4.40%" />
            <Stat label="APY (no DD)" value="1.20%" />
            <Stat label="Monthly Fee" value="$0" />
            <Stat label="Fintiex Score" value="7.9 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 4.40% APY with direct deposit, competitive with top-tier HYSAs</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Combined checking and savings under one login</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Vaults feature for goal-based savings within one account</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> ATM fee rebates at 55,000 Allpoint ATMs nationwide</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> SoFi member benefits: financial planning sessions, career coaching, loan discounts</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> FDIC insured via SoFi Bank, N.A.</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 4.40% APY is conditional on direct deposit setup; without it you earn only 1.20%</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> If your employer does not support direct deposit, you will not hit the top rate</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Some users report the app can feel cluttered with SoFi product promotions</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            SoFi, short for Social Finance, began as a student loan refinancing company in 2011 and has since built a full-service personal finance platform. SoFi Bank, N.A. received its national bank charter in 2022, which was a significant milestone: it allowed SoFi to offer FDIC-insured deposits directly rather than through a third-party bank partner. SoFi is publicly traded on Nasdaq under the ticker SOFI and had total assets of approximately $35 billion as of Q4 2025.
          </p>
          <p>
            The savings and checking product, called SoFi Checking and Savings, is a combined account rather than a standalone HYSA. The savings portion earns 4.40% APY when you set up a qualifying direct deposit of any amount. If no direct deposit is present, the savings rate drops to 1.20%. The checking portion earns 0.50% APY, which is above average for an interest-bearing checking account. SoFi also offers Vaults, a goal-based savings feature similar to Ally's Buckets.
          </p>
          <p>
            SoFi's differentiation is the member benefits layer. All SoFi members get access to financial planning sessions with a certified financial planner, career coaching services, rate discounts on SoFi personal loans and student loan refinancing, and live event access. These benefits have real dollar value for the right user, particularly someone already in the SoFi ecosystem using a personal loan or investing through SoFi Invest.
          </p>
        </div>
      </section>

      {/* Rate history */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate History</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            SoFi's savings rate has tracked the Federal Reserve tightening cycle since 2022. The direct deposit APY peaked above 4.50% in mid-2023 and has declined modestly to 4.40% as the Fed began cutting rates in late 2024. The rate structure with and without direct deposit has remained consistent since SoFi introduced the conditional pricing model in 2022. Savers who set up direct deposit once and leave it in place will continue earning the top rate regardless of whether they actively use SoFi checking for daily spending.
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
              <span className="text-mute">APY with direct deposit</span>
              <span className="font-mono tabular font-semibold">4.40%</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">APY without direct deposit</span>
              <span className="font-mono tabular font-semibold">1.20%</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">ATM access</span>
              <span className="font-mono tabular font-semibold">55,000 Allpoint ATMs</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to open */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to Open</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening a SoFi Checking and Savings account at sofi.com takes about five minutes. You need a Social Security number and a government-issued ID. The app is the primary interface. To earn the 4.40% APY, you must set up a qualifying direct deposit, which can be from an employer, government benefits, freelance income via ACH, or other payroll sources.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Download the SoFi app or visit sofi.com and select Banking</li>
          <li className="list-disc ml-4">Complete identity verification with SSN and ID</li>
          <li className="list-disc ml-4">Open the combined Checking and Savings product</li>
          <li className="list-disc ml-4">Set up direct deposit with your employer to activate the 4.40% APY</li>
          <li className="list-disc ml-4">Optionally create Vaults within savings for goal organization</li>
        </ul>
      </section>

      {/* UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">App and Online Banking Experience</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            SoFi is app-first. The mobile interface manages everything: account balances, Vaults, transfers, card controls, member benefits, and access to other SoFi products like investing and personal loans. App Store ratings are around 4.8 out of 5, and Google Play is near 4.4. Some users note that the app occasionally pushes SoFi product promotions, which can feel intrusive for someone who only wants a savings account. The web portal at sofi.com covers the same functionality for those who prefer a desktop experience.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">FDIC Insurance and Safety</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            SoFi Bank, N.A. is a nationally chartered bank regulated by the Office of the Comptroller of the Currency (OCC), Member FDIC. Deposits are insured up to $250,000 per depositor per ownership category. SoFi also participates in a sweep network that can extend effective FDIC coverage to $2 million for eligible accounts by distributing balances across multiple program banks. Standard single-bank FDIC coverage applies to most depositors.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Existing SoFi members using loans, investing, or other SoFi products</li>
              <li>Salaried employees who can route direct deposit to SoFi</li>
              <li>People who want checking and savings in one app with ATM access</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You cannot set up direct deposit and do not want 1.20% APY</li>
              <li>You want the highest possible rate with no strings attached (Bask)</li>
              <li>You prefer a simpler account with fewer product promotions in the app</li>
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
            <div className="col-span-1 text-right">Conditions</div>
          </div>
          {[
            { name: "Ally Bank", apy: "4.45%", min: "$0", cond: "None" },
            { name: "SoFi", apy: "4.40%", min: "$0", cond: "Direct deposit", highlight: true },
            { name: "Discover", apy: "4.30%", min: "$0", cond: "None" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.apy}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.min}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.cond}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="What counts as a qualifying direct deposit for the 4.40% APY?">
            SoFi accepts employer payroll, government benefit payments (Social Security, disability), freelance income via ACH, and select gig platform payouts. A personal transfer from another bank account does not qualify. Check SoFi's current terms for the full list.
          </Faq>
          <Faq q="What are SoFi Vaults?">
            Vaults are goal-based savings buckets within your SoFi savings account, similar to Ally's Buckets feature. You can create multiple Vaults with names and targets (such as Emergency Fund at $10,000) and track progress without opening separate accounts.
          </Faq>
          <Faq q="Can I use ATMs with SoFi?">
            Yes. SoFi provides access to 55,000 fee-free Allpoint ATMs nationwide when you have a SoFi debit card. Out-of-network ATM fees may apply, but SoFi offers limited rebates for members with qualifying direct deposits.
          </Faq>
          <Faq q="Is SoFi Bank FDIC insured?">
            Yes. SoFi Bank, N.A. is a nationally chartered bank, Member FDIC, insuring deposits up to $250,000 per depositor per ownership category.
          </Faq>
          <Faq q="What happens to my APY if I stop my direct deposit?">
            If your direct deposit stops (for example, you change jobs and do not redirect payroll), SoFi will move your savings rate from 4.40% to 1.20%. The drop takes effect in the next monthly statement cycle after SoFi detects the absence of a qualifying deposit.
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
