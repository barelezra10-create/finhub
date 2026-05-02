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

const brand = getBrand("bread")!;

export const metadata: Metadata = {
  title: "Bread Savings Review: 4.75% APY, $100 Min, CDs Too (2026)",
  description:
    "Bread Savings pays 4.75% APY on $100 minimum. Plus a strong CD lineup. Full review covering rates, fees, app quality, pros, cons, and who should open one.",
  alternates: { canonical: "/reviews/bread" },
};

const faqs: FAQItem[] = [
  {
    question: "Is Bread Savings safe?",
    answer:
      "Yes. Deposits are FDIC-insured through Comenity Capital Bank, a regulated industrial bank. Coverage is up to $250,000 per depositor, per ownership category.",
  },
  {
    question: "What is the difference between Bread Savings and Bread Financial?",
    answer:
      "Bread Financial Holdings is the publicly traded parent company. Bread Savings is the consumer deposit product. Bread Financial also operates a credit card business under the Comenity brand.",
  },
  {
    question: "Can I open a CD at Bread Savings?",
    answer:
      "Yes. Bread offers CDs across multiple terms from 3 months to 60 months. Rates are generally competitive and can be managed from the same login as your savings account.",
  },
  {
    question: "How long does it take to transfer money out?",
    answer:
      "ACH transfers to a linked external bank typically settle in 1 to 3 business days. There is no instant transfer option.",
  },
  {
    question: "What happens if I fall below the $100 minimum?",
    answer:
      "Bread Savings does not charge a fee if your balance dips below $100. However, the account terms specify $100 as the minimum deposit to open. Interest continues to accrue on any balance above $0.01.",
  },
];

export default function Page() {
  return (
    <article className="bg-bg">
      <FinancialProductSchema
        name="Bread Savings Review (2026)"
        description="Bread Savings pays 4.75% APY on $100 minimum. Plus a strong CD lineup. Full review covering rates, fees, app quality, pros, cons, and who should open one."
        slug="/reviews/bread"
        brandName="Bread Savings"
        category="Savings Account"
        apr="4.75"
        ratingValue={8.7}
        reviewCount={1}
      />
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "Reviews", href: "/reviews" },
          { name: "Bread Savings", href: "/reviews/bread" },
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
                Bread Savings Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            Bread Savings offers{" "}
            <span className="font-mono tabular font-semibold text-ink">4.75% APY</span> on a $100 minimum deposit with no monthly fees, plus one of the strongest online CD lineups available today. Here is a full breakdown.
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
            <Stat label="APY" value="4.75%" />
            <Stat label="Min Deposit" value="$100" />
            <Stat label="Monthly Fee" value="$0" />
            <Stat label="Fintiex Score" value="8.7 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> 4.75% APY, second highest in our tracked universe</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No monthly fees</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Strong CD lineup spanning 3 months to 5 years</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Decent mobile app on iOS and Android</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> FDIC insured via Comenity Capital Bank</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Interest compounded daily, credited monthly</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> $100 minimum deposit required (unlike Bask or Marcus)</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No checking account, no debit card</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Parent company Bread Financial is less recognized than Goldman or Ally</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Bread Savings is a division of Comenity Capital Bank, which itself is a subsidiary of Bread Financial Holdings (formerly known as Alliance Data Systems). The bank is based in Salt Lake City, Utah, and is chartered as a state-chartered industrial bank regulated by the Utah Department of Financial Institutions and the FDIC. While the Bread Financial name may not carry the same recognition as Goldman Sachs or Ally, the underlying FDIC membership and regulatory standing are equivalent.
          </p>
          <p>
            The high-yield savings account pays 4.75% APY with a modest $100 minimum deposit and no monthly fees. Interest accrues daily and posts to your account monthly. In addition to the savings account, Bread offers CDs at competitive rates across multiple terms, making it one of the only online banks where you can build a complete savings ladder under one login. Terms range from 3 months to 60 months, and CD rates are frequently at or near the top of national surveys.
          </p>
          <p>
            The mobile app is functional and better than Bask's web-only interface, though it lacks the refined UX of Ally or Marcus. You can initiate transfers, check balances, view transaction history, and manage CD renewals from the app. Customer support is available by phone and email, with reasonable response times reported by users.
          </p>
        </div>
      </section>

      {/* Rate history */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate History</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Bread Savings has tracked the Federal Reserve rate cycle since its rebranding in 2022. The bank consistently ranks in the top five HYSA providers by APY across most comparison sites. Rates moved steadily upward through 2022 and 2023 alongside Fed hikes, and have stabilized in the 4.50-4.75% range since Q1 2025. The current 4.75% reflects no significant deviation from the Fed funds effective rate trend, and is expected to remain competitive through 2026 unless the Fed accelerates easing.
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
              <span className="font-mono tabular font-semibold">$100</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Minimum balance for full APY</span>
              <span className="font-mono tabular font-semibold">$100</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Outgoing wire fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">CD early withdrawal penalty</span>
              <span className="font-mono tabular font-semibold">Varies by term</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to open */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to Open</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening takes about five minutes at breadsavings.com. You will need a Social Security number, a government-issued ID, and an external bank account to fund the minimum $100 deposit. No hard credit inquiry is performed. Funding is ACH only, arriving in 1 to 3 business days.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Navigate to breadsavings.com and select Open an Account</li>
          <li className="list-disc ml-4">Complete identity verification with SSN and ID</li>
          <li className="list-disc ml-4">Link your external checking account via routing and account number</li>
          <li className="list-disc ml-4">Transfer at least $100 to open and activate the full APY</li>
          <li className="list-disc ml-4">Download the Bread Savings mobile app for ongoing management</li>
        </ul>
      </section>

      {/* UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">App and Online Banking Experience</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Bread Savings offers a dedicated mobile app on iOS and Android with solid core functionality: balance views, ACH transfer initiation, and CD management. The interface is clean but not exceptional. App Store ratings hover around 4.2 out of 5, with users generally praising reliability but noting the UI feels more utilitarian than polished. The web portal at breadsavings.com covers the same functionality for desktop users. For a savings-focused account where interaction frequency is low, the app is more than adequate.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">FDIC Insurance and Safety</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Bread Savings deposits are held by Comenity Capital Bank, Member FDIC. Standard coverage applies up to $250,000 per depositor, per ownership category. Bread Financial Holdings is publicly traded on the New York Stock Exchange under the ticker BFH and had total assets of roughly $18 billion as of late 2025. The industrial bank charter is a recognized and regulated structure with a long track record in the U.S. banking system.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Savers with a balance over $100 seeking a near-top APY</li>
              <li>Anyone who wants to consolidate HYSA and CDs at the same bank</li>
              <li>Rate-focused savers who want a mobile app but do not need full banking</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You cannot meet the $100 minimum (consider Bask or Marcus)</li>
              <li>You need checking, ATM access, or a debit card</li>
              <li>You want the absolute highest APY regardless of anything else (Bask is 10 bps higher)</li>
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
            <div className="col-span-1 text-right">CDs</div>
          </div>
          {[
            { name: "Bask Bank", apy: "4.85%", min: "$0", cds: "No" },
            { name: "Bread Savings", apy: "4.75%", min: "$100", cds: "Yes", highlight: true },
            { name: "Marcus", apy: "4.50%", min: "$0", cds: "Yes" },
          ].map((row) => (
            <div
              key={row.name}
              className={`grid grid-cols-4 px-5 py-4 items-center border-b border-line-soft last:border-0 ${row.highlight ? "bg-lime/10" : ""}`}
            >
              <div className="col-span-1 font-display font-semibold text-sm">{row.name}</div>
              <div className="col-span-1 text-right font-mono tabular font-semibold">{row.apy}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.min}</div>
              <div className="col-span-1 text-right text-mute text-sm">{row.cds}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-8">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl">
          <Faq q="Is Bread Savings safe?">
            Yes. Deposits are FDIC-insured through Comenity Capital Bank, a regulated industrial bank. Coverage is up to $250,000 per depositor, per ownership category.
          </Faq>
          <Faq q="What is the difference between Bread Savings and Bread Financial?">
            Bread Financial Holdings is the publicly traded parent company. Bread Savings is the consumer deposit product. Bread Financial also operates a credit card business under the Comenity brand.
          </Faq>
          <Faq q="Can I open a CD at Bread Savings?">
            Yes. Bread offers CDs across multiple terms from 3 months to 60 months. Rates are generally competitive and can be managed from the same login as your savings account.
          </Faq>
          <Faq q="How long does it take to transfer money out?">
            ACH transfers to a linked external bank typically settle in 1 to 3 business days. There is no instant transfer option.
          </Faq>
          <Faq q="What happens if I fall below the $100 minimum?">
            Bread Savings does not charge a fee if your balance dips below $100. However, the account terms specify $100 as the minimum deposit to open. Interest continues to accrue on any balance above $0.01.
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
