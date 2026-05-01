import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("marcus")!;

export const metadata: Metadata = {
  title: "Marcus by Goldman Sachs Review: 4.50% APY HYSA (2026)",
  description:
    "Marcus by Goldman Sachs pays 4.50% APY with no minimum and no fees. Best HYSA for Goldman-backed safety and clean UX. Full 2026 review with pros, cons, and FAQ.",
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
                Marcus by Goldman Sachs Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            Marcus offers{" "}
            <span className="font-mono tabular font-semibold text-ink">4.50% APY</span> with no minimum deposit, no fees, and the institutional credibility of Goldman Sachs Bank USA. Here is our full 2026 review.
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
            <Stat label="APY" value="4.50%" />
            <Stat label="Min Deposit" value="$0" />
            <Stat label="Monthly Fee" value="$0" />
            <Stat label="Fintiex Score" value="8.4 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No minimum deposit or balance requirement</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No monthly fees, ever</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Goldman Sachs Bank USA backing with full FDIC coverage</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Top-rated mobile app with clean, intuitive UX</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Excellent U.S.-based customer service</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Marcus.com integrates personal loans, making it a one-stop hub</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> 4.50% APY is 35 basis points below Bask's top rate</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No checking account or debit card</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No ATM network access</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Marcus by Goldman Sachs launched in 2016 as Goldman's first consumer-facing banking product after 147 years as an institutional and investment bank. The move was significant: Goldman Sachs Bank USA brought its balance sheet and regulatory standing to retail deposits, giving consumers FDIC insurance backed by one of the most scrutinized financial institutions in the world. That brand weight translates directly into consumer trust that smaller online banks have to earn over years.
          </p>
          <p>
            The savings account itself is a clean execution of the HYSA concept. You deposit money, earn 4.50% APY compounded daily and posted monthly, and pay nothing in fees. There is no minimum deposit to open and no minimum balance to maintain the rate. The web and mobile interfaces are consistently praised for clarity: no confusing promotions, no upsell traps, no hidden menus. What you see is what you get.
          </p>
          <p>
            One differentiator worth noting is Marcus.com's integration with Goldman's personal loan product. If you want to park savings and potentially take a personal loan for a large purchase or debt consolidation, Marcus lets you do both from the same account dashboard. That integration is not unique in fintech broadly, but it is rare among HYSA providers of Marcus's caliber.
          </p>
        </div>
      </section>

      {/* Rate history */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate History</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Marcus has tracked the Federal Reserve rate cycle reliably since 2022. The account started 2022 near 0.50% APY, rose in lockstep with Fed hikes through 2023, and peaked above 5.00% APY in late 2023. Rates have settled near 4.50% following Fed cuts in late 2024. Marcus has occasionally trailed the very top of the HYSA market by 25 to 50 basis points, consistent with the premium it commands for brand recognition and service quality. Savers who prioritize the absolute top rate will look elsewhere; those who value a Goldman name on the account will consider the spread reasonable.
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
              <span className="text-mute">Maximum transfer limits</span>
              <span className="font-mono tabular font-semibold">Up to $125K/day</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to open */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to Open</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening a Marcus savings account at marcus.com takes roughly five minutes. You need a Social Security number, a government-issued ID, and an external bank account for the initial transfer. No hard credit pull is made, and there is no minimum deposit requirement to complete the application.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Visit marcus.com and select Savings</li>
          <li className="list-disc ml-4">Enter personal details and SSN for identity verification</li>
          <li className="list-disc ml-4">Link an external bank account via routing and account number</li>
          <li className="list-disc ml-4">Initiate an ACH transfer to fund the account (1-3 business days)</li>
          <li className="list-disc ml-4">Download the Marcus app to manage on mobile</li>
        </ul>
      </section>

      {/* UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">App and Online Banking Experience</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            The Marcus app consistently earns high marks, with App Store ratings around 4.6 out of 5 and Google Play ratings near 4.4. The interface is minimal and purposeful: balance display, transfer initiation, account settings, and rate information are all accessible within two taps. Goldman has invested meaningfully in the product, and it shows. Customer service by phone is staffed with knowledgeable U.S.-based agents who can handle complex transfer questions. For savers who want a polished digital experience alongside a strong rate, Marcus is the clearest choice in the 4.50% APY tier.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">FDIC Insurance and Safety</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Marcus deposits are held by Goldman Sachs Bank USA, Member FDIC (FDIC certificate number 33124). Coverage is up to $250,000 per depositor per ownership category, with joint account coverage doubling to $500,000. Goldman Sachs Bank USA had total assets of approximately $432 billion as of Q4 2025, making it one of the largest FDIC-insured banks in the United States. There is essentially no material counterparty risk for consumer deposit amounts.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Savers who want Goldman Sachs backing and a premium app experience</li>
              <li>Those who also want a personal loan from the same institution</li>
              <li>Anyone who values customer service over maximizing to the last basis point</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You want the absolute highest APY (Bask at 4.85% or Bread at 4.75%)</li>
              <li>You need a full-service bank with checking and ATM access</li>
              <li>You are looking for goal-based savings buckets (Ally is better for this)</li>
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
            <div className="col-span-1 text-right">App</div>
          </div>
          {[
            { name: "Bask Bank", apy: "4.85%", min: "$0", app: "No" },
            { name: "Bread Savings", apy: "4.75%", min: "$100", app: "Yes" },
            { name: "Marcus", apy: "4.50%", min: "$0", app: "Yes", highlight: true },
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
          <Faq q="Is Marcus by Goldman Sachs FDIC insured?">
            Yes. Marcus deposits are held by Goldman Sachs Bank USA, Member FDIC, with coverage up to $250,000 per depositor per ownership category.
          </Faq>
          <Faq q="Does Marcus require a minimum deposit?">
            No. You can open a Marcus savings account with any amount, including $0. Interest starts accruing the moment you fund your account.
          </Faq>
          <Faq q="Can I get a personal loan from Marcus?">
            Yes. Goldman Sachs Bank USA offers personal loans through the same Marcus.com platform, allowing you to manage savings and a loan from one login.
          </Faq>
          <Faq q="How long do ACH transfers take?">
            Incoming ACH transfers from a linked external account typically take 1 to 3 business days. Marcus also supports wire transfers for faster movement of large balances.
          </Faq>
          <Faq q="Why is Marcus's rate lower than Bask or Bread?">
            Marcus commands a slight brand premium and invests more in customer service and product polish. The 35 to 75 basis point gap versus top-rate accounts is the implicit cost of that experience. On a $10,000 balance the annual difference versus Bask is about $35.
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
