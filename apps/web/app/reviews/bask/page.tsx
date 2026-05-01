import type { Metadata } from "next";
import Link from "next/link";
import { BrandLogo } from "@/components/brand-logo";
import { getBrand } from "@/lib/brands";

const brand = getBrand("bask")!;

export const metadata: Metadata = {
  title: "Bask Bank Review: 4.85% APY, No Fees, No Minimum (2026)",
  description:
    "Bask Bank pays 4.85% APY with no minimum deposit and no monthly fees. Read our full review covering rates, safety, pros, cons, and who should open one.",
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
                Bask Bank Review (2026)
              </h1>
            </div>
          </div>
          <p className="text-lg text-mute max-w-2xl leading-relaxed">
            Bask Bank offers the highest HYSA rate in our tracked universe at{" "}
            <span className="font-mono tabular font-semibold text-ink">4.85% APY</span>, with zero minimum balance and zero monthly fees. Here is everything you need to decide if it belongs in your cash stack.
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
            <Stat label="APY" value="4.85%" />
            <Stat label="Min Deposit" value="$0" />
            <Stat label="Monthly Fee" value="$0" />
            <Stat label="Fintiex Score" value="9.1 / 10" />
          </div>
        </div>
      </section>

      {/* Pros / Cons */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-5">Pros</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Highest tracked APY at 4.85%</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No minimum balance required</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> No monthly maintenance fees</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> FDIC insured via Texas Capital Bank</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Unique option to earn American Airlines miles instead of cash interest</li>
              <li className="flex gap-3"><span className="text-mint font-bold">+</span> Simple, distraction-free online account opening</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-5">Cons</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No mobile app, web only</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> No checking account, ATM access, or debit card</li>
              <li className="flex gap-3"><span className="text-rose font-bold">-</span> Customer support options are limited compared to larger banks</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Overview</h2>
        <div className="space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft max-w-3xl">
          <p>
            Bask Bank is an online-only bank headquartered in Dallas, Texas, and is a division of Texas Capital Bank, a publicly traded regional bank with over $35 billion in assets. Texas Capital Bank has operated since 1998 and carries full FDIC deposit insurance up to $250,000 per depositor. That institutional backing gives Bask an unusual combination of a startup-style rate and established-bank safety.
          </p>
          <p>
            The savings account itself is straightforward. You deposit money, you earn 4.85% APY, compounded daily and credited monthly. There is no minimum deposit to open, no minimum to maintain the rate, and no monthly service fee. Unlike most HYSAs, Bask also offers an alternative product called the Mileage Savings Account, which credits American Airlines AAdvantage miles instead of cash interest. That product is not covered here since we are reviewing the cash savings account, but frequent flyers should be aware it exists.
          </p>
          <p>
            The tradeoff is narrow but real: Bask is web-only. There is no iOS or Android app. If you need to check your balance at 11pm from your phone, you will be doing it through a mobile browser, not a native app experience. For savers who treat this account as a secondary emergency fund or a rate-maximizing parking spot, that limitation rarely matters in practice.
          </p>
        </div>
      </section>

      {/* Rate history */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">Rate History</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Bask Bank has tracked the Federal Reserve tightening cycle closely since 2023. As the Fed raised the federal funds rate from near zero in 2022 to a peak of 5.25-5.50% in mid-2023, Bask consistently sat near the top of HYSA rankings. When the Fed began cutting rates in late 2024, Bask lowered its rate in tandem, but maintained a competitive premium above the national HYSA average, which currently sits near 0.50%. As long as the Fed holds rates steady at current levels, the 4.85% figure is likely to persist through mid-2026.
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
              <span className="text-mute">Minimum balance to earn APY</span>
              <span className="font-mono tabular font-semibold">$0.01</span>
            </li>
            <li className="flex justify-between border-b border-line pb-3">
              <span className="text-mute">Outgoing wire fee</span>
              <span className="font-mono tabular font-semibold">$0</span>
            </li>
            <li className="flex justify-between">
              <span className="text-mute">Excessive withdrawal fee</span>
              <span className="font-mono tabular font-semibold">None listed</span>
            </li>
          </ul>
        </div>
      </section>

      {/* How to open */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">How to Open</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft mb-5">
          <p>
            Opening a Bask savings account takes about five minutes at baskbank.com. You will need your Social Security number, a government-issued ID, and a linked external bank account to fund the initial deposit. There is no hard credit pull during the application process.
          </p>
        </div>
        <ul className="space-y-2 text-[0.9375rem] max-w-2xl ml-4">
          <li className="list-disc ml-4">Visit baskbank.com and click Open Account</li>
          <li className="list-disc ml-4">Enter your personal information and SSN for identity verification</li>
          <li className="list-disc ml-4">Link your external checking account via routing and account number</li>
          <li className="list-disc ml-4">Fund via ACH transfer (arrives in 1-3 business days)</li>
          <li className="list-disc ml-4">No wire, check, or mobile deposit options available</li>
        </ul>
      </section>

      {/* UX */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">App and Online Banking Experience</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Bask has no dedicated mobile app on the App Store or Google Play as of April 2026. The web portal at baskbank.com is clean and functional on mobile browsers, but lacks the polish and convenience of native apps offered by Ally or SoFi. You can view your balance, initiate ACH transfers in and out, and update account details without trouble. For most rate-focused savers who check their balance once or twice a month, the web portal is entirely adequate. If you need a full-featured digital banking experience, look at Ally or SoFi instead.
          </p>
        </div>
      </section>

      {/* Safety */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <h2 className="font-display font-bold text-3xl tracking-tight mb-6">FDIC Insurance and Safety</h2>
        <div className="max-w-3xl text-[1.0625rem] leading-relaxed text-ink-soft">
          <p>
            Bask Bank deposits are held by Texas Capital Bank, Member FDIC (FDIC certificate number 34345). Standard FDIC coverage applies: up to $250,000 per depositor, per ownership category. Joint accounts double that to $500,000. Texas Capital Bank had total assets of approximately $36 billion as of Q4 2025 and is publicly traded on Nasdaq under the ticker TCBI. There is no meaningful solvency risk for standard deposit amounts.
          </p>
        </div>
      </section>

      {/* Who it's for */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="card p-7">
            <div className="chip chip-lime mb-4">Best for</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>Rate-chasers who want the highest APY and do not need an app</li>
              <li>Savers parking a secondary emergency fund or large cash balance</li>
              <li>American Airlines AAdvantage members interested in earning miles on savings</li>
            </ul>
          </div>
          <div className="card p-7">
            <div className="chip chip-mute mb-4">Look elsewhere if</div>
            <ul className="space-y-3 text-[0.9375rem]">
              <li>You want a mobile app with native features</li>
              <li>You need checking, a debit card, or ATM access in the same institution</li>
              <li>You want to consolidate all banking in one place</li>
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
            { name: "Bask Bank", apy: "4.85%", min: "$0", app: "No", highlight: true },
            { name: "Bread Savings", apy: "4.75%", min: "$100", app: "Yes" },
            { name: "Marcus", apy: "4.50%", min: "$0", app: "Yes" },
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
          <Faq q="Is Bask Bank legitimate?">
            Yes. Bask Bank is a division of Texas Capital Bank, N.A., a federally chartered bank regulated by the Office of the Comptroller of the Currency (OCC) and the Federal Reserve. Deposits are FDIC-insured up to $250,000.
          </Faq>
          <Faq q="Why is Bask Bank's rate so high?">
            Online-only banks have lower overhead than brick-and-mortar institutions and pass those savings to depositors in the form of higher rates. Bask also benefits from its parent Texas Capital Bank's focus on commercial banking, leaving the retail deposit side hungry to attract consumer balances.
          </Faq>
          <Faq q="How quickly can I access my money?">
            ACH transfers to a linked external account typically take 1 to 3 business days. There is no same-day or instant transfer option. Plan accordingly for emergency fund access.
          </Faq>
          <Faq q="Can I have both the cash savings and miles savings accounts?">
            Yes. Bask allows you to open both account types simultaneously, so you can split your savings between cash interest and AAdvantage miles accumulation.
          </Faq>
          <Faq q="Does Bask offer CDs or checking accounts?">
            No. Bask offers only the two savings account types. For CDs, consider Bread Savings, which offers a competitive CD lineup alongside its HYSA. For checking, Ally or SoFi are the best-integrated options.
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
