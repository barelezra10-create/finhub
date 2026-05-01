import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { states, getStateBySlug } from "@/lib/states";

export function generateStaticParams() {
  return states.map((s) => ({ state: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ state: string }> }
): Promise<Metadata> {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) return { title: "State not found" };
  return {
    title: `Best High-Yield Savings Accounts in ${state.name} (2026)`,
    description: `Compare the highest-APY HYSA accounts available to ${state.name} residents. ${state.taxNote}.`,
  };
}

interface HysaOption {
  lender: string;
  apy: number;
  tag?: string;
  detail: string;
  href: string;
}

const hysaOptions: HysaOption[] = [
  { lender: "Bask Bank", apy: 4.85, tag: "Top APY", detail: "No minimum balance. No monthly fees. FDIC-insured up to $250K per depositor.", href: "/savings/bask" },
  { lender: "Bread Savings", apy: 4.75, detail: "$100 minimum opening deposit. No monthly fees. FDIC-insured.", href: "/savings/bread" },
  { lender: "Marcus by Goldman Sachs", apy: 4.50, detail: "No minimum balance. No fees. Backed by Goldman Sachs Bank USA.", href: "/savings/marcus" },
  { lender: "Ally Bank", apy: 4.45, detail: "No minimum balance. No monthly fees. 24/7 customer service.", href: "/savings/ally" },
  { lender: "SoFi", apy: 4.40, detail: "Direct deposit required for top rate. No minimum balance.", href: "/savings/sofi" },
  { lender: "Discover Bank", apy: 4.30, detail: "No minimum balance. No fees. Same-day transfers available.", href: "/savings/discover" },
  { lender: "CIT Bank", apy: 4.25, detail: "$100 minimum. No monthly service charge. FDIC-insured.", href: "/savings/cit" },
  { lender: "American Express", apy: 4.15, detail: "No minimum balance. No fees. Easy online access.", href: "/savings/amex" },
];

function fmtPct(n: number) {
  return n.toFixed(2) + "%";
}

function fmtIncome(n: number) {
  return "$" + n.toLocaleString("en-US");
}

export default async function StateHysaPage(
  { params }: { params: Promise<{ state: string }> }
) {
  const { state: slug } = await params;
  const state = getStateBySlug(slug);
  if (!state) notFound();

  const topBank = state.topBanks[0];
  const hasNoStateTax = state.taxNote.toLowerCase().includes("no state income tax") || state.taxNote.toLowerCase().includes("no general income tax");

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Updated 4 minutes ago
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-6">
            Best HYSA in {state.name}
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            {state.name} residents have access to the same top-rated national high-yield savings accounts as anyone else in the country. With a median household income of {fmtIncome(state.medianIncome)} in {state.name}, earning 4.85% APY on idle cash adds up fast. {state.taxNote}. All accounts listed below are FDIC-insured up to $250,000 per depositor.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/savings/bask" className="pill pill-ink">
              Open Bask Bank
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/savings-goal" className="pill pill-ghost">
              Calculate your earnings
            </Link>
          </div>
        </div>
      </section>

      {/* TOP HYSA CARD */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div
          className="card-flush p-8 relative overflow-hidden"
          style={{ boxShadow: "var(--shadow-pop)" }}
        >
          <div
            aria-hidden
            className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-30"
            style={{ background: "radial-gradient(circle, var(--color-lime) 0%, transparent 70%)" }}
          />
          <div className="relative grid grid-cols-12 gap-6 items-center">
            <div className="col-span-12 md:col-span-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="chip chip-lime">Top Rated</span>
                <span className="text-xs font-mono text-mute">Available in {state.name}</span>
              </div>
              <div className="font-display font-bold text-2xl mb-1">Bask Bank High-Yield Savings</div>
              <div className="text-mute mb-4">No minimum balance. No monthly fees. FDIC-insured up to $250K per depositor. Open online in minutes from anywhere in {state.name}.</div>
              <div className="flex flex-wrap gap-3 text-sm text-mute">
                <span>No minimum deposit</span>
                <span>·</span>
                <span>No fees</span>
                <span>·</span>
                <span>FDIC-insured</span>
                <span>·</span>
                <span>Online account</span>
              </div>
            </div>
            <div className="col-span-12 md:col-span-4 flex flex-col items-start md:items-end gap-4">
              <div>
                <div className="text-sm text-mute mb-1 md:text-right">Current APY</div>
                <div className="font-display font-extrabold text-[5rem] leading-none tracking-tighter tabular text-ink">
                  4.85<span className="text-[2.5rem] align-top text-mute">%</span>
                </div>
              </div>
              <Link href="/savings/bask" className="pill pill-ink">
                View offer
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* RATE TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">
              <span className="pulse-dot" /> Savings Rates · Live
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              Top HYSA rates for {state.name} residents in 2026
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm">
              These are national online banks. Every account is open to {state.name} residents and every rate is FDIC-backed.
            </p>
          </div>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-6 md:col-span-5">Bank</div>
            <div className="hidden md:block md:col-span-5">Details</div>
            <div className="col-span-4 md:col-span-2 text-right">APY</div>
          </div>
          {hysaOptions.map((r, i) => (
            <Link
              key={r.lender}
              href={r.href}
              className={`grid grid-cols-12 px-6 py-4 items-center hover:bg-bg-soft/70 transition-colors ${
                i === hysaOptions.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-8 md:col-span-5">
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="font-display font-semibold text-base">{r.lender}</div>
                  {r.tag && <span className="chip chip-lime">{r.tag}</span>}
                </div>
                <div className="md:hidden text-xs text-mute mt-1">{r.detail}</div>
              </div>
              <div className="hidden md:block md:col-span-5 text-mute text-sm">{r.detail}</div>
              <div className="col-span-4 md:col-span-2 text-right font-mono font-semibold tabular text-lg">
                {fmtPct(r.apy)}
              </div>
            </Link>
          ))}
        </div>

        <p className="text-xs text-mute mt-4">
          Rates as of April 2026. APY subject to change. All accounts FDIC-insured up to $250,000 per depositor per institution. Not a recommendation.
        </p>
      </section>

      {/* STATE CONTEXT BLOCK */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <span className="chip chip-mute mb-6">About {state.name}</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-8 max-w-2xl leading-tight">
            HYSA in {state.name}: what you need to know
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-mute leading-relaxed">
            <div className="space-y-5">
              <p>
                {state.name}&apos;s median household income sits at {fmtIncome(state.medianIncome)}. At that income level, keeping even three months of expenses in a traditional savings account earning 0.5% instead of a top-tier HYSA at 4.85% can cost hundreds of dollars per year in foregone interest. The math is straightforward: a $20,000 emergency fund at 4.85% APY earns roughly $970 per year. The same balance at a typical brick-and-mortar rate earns about $100.
              </p>
              <p>
                {state.name} has a number of well-regarded local financial institutions, including {state.topBanks.join(", ")}. These banks serve {state.name} communities well for everyday banking, mortgages, and local business relationships. However, their savings rates rarely match what national online banks offer. {topBank}, for instance, is one of the more recognized names in {state.name} banking, but its savings APY typically runs well below the 4%+ range offered by online-only competitors.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                On the tax side: {state.taxNote}. This applies to interest earned on any savings account, including HYSA accounts held at out-of-state online banks. The good news is that even after accounting for {hasNoStateTax ? "federal" : "federal and state"} taxes, the net yield from a 4.85% HYSA almost always beats what local {state.name} banks offer before taxes. You keep more money either way.
              </p>
              <p>
                Online banks are available to all {state.name} residents regardless of which corner of the state you live in. You open the account online, link your existing {state.name} checking account, and transfers typically settle in one to two business days. There are no physical branch requirements and no state-specific restrictions that would prevent a {state.name} resident from opening any of the accounts listed on this page.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <span className="chip chip-mute mb-6">FAQ</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-10 max-w-xl leading-tight">
          Common questions from {state.name} savers
        </h2>

        <div className="space-y-6">
          <FaqItem
            q={`Can I open an HYSA from another state if I live in ${state.name}?`}
            a={`Yes. Every account on this list is open to ${state.name} residents. Online banks are federally chartered or state-chartered institutions that operate nationwide. There is no requirement to use a bank headquartered in ${state.name}. You just need a U.S. address, a Social Security number, and a linked bank account to fund the deposit. The entire process takes about ten minutes online.`}
          />
          <FaqItem
            q={`How is HYSA interest taxed in ${state.name}?`}
            a={`Interest income from a high-yield savings account is taxable at the federal level as ordinary income, the same as wages. At the state level: ${state.taxNote}. Your bank will send you a 1099-INT form each January covering any interest earned in the prior year. If you earned more than $10 in interest, you are required to report it on your federal return.`}
          />
          <FaqItem
            q={`Are local ${state.name} banks better than online HYSAs?`}
            a={`It depends on what you value. Local ${state.name} banks like ${topBank} offer in-person service, local lending relationships, and community ties that online banks cannot replicate. For everyday savings, however, national online HYSAs almost always offer significantly higher APYs. Many ${state.name} residents keep their primary checking at a local bank and move excess savings to an online HYSA to earn more without giving up their local banking relationship.`}
          />
          <FaqItem
            q="Are online HYSAs FDIC-insured the same way as local banks?"
            a={`Yes. Every account listed on this page is insured by the Federal Deposit Insurance Corporation (FDIC) up to $250,000 per depositor, per institution, per ownership category. This is exactly the same coverage you get at any brick-and-mortar bank in ${state.name}. FDIC insurance has covered depositors in every bank failure since 1933. The physical location of the bank does not affect your coverage.`}
          />
          <FaqItem
            q={`Is ${topBank} competitive with online HYSA rates?`}
            a={`${topBank} is one of the more established financial institutions serving ${state.name}, but like most traditional banks, its savings rates typically lag behind online-only competitors by two to four percentage points. The overhead of maintaining physical branches, staff, and ATM networks limits how much traditional banks can pay on deposits. Online banks pass those savings directly to depositors in the form of higher APYs. If you already bank with ${topBank}, you can still open an online HYSA as a secondary account and transfer savings there to earn more.`}
          />
        </div>
      </section>

      {/* CALCULATOR LINK */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="chip chip-ink mb-4">Tool</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See exactly how much more you earn at 4.85% vs your current rate.
            </h2>
          </div>
          <Link href="/calculators/savings-goal" className="pill pill-ink shrink-0">
            Open savings calculator
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* CROSS-STATE NAV */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <span className="chip chip-mute mb-6">Browse by state</span>
        <h2 className="font-display font-extrabold text-2xl tracking-tight mb-8">
          HYSA rates in every state
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
          {states.map((s) => (
            <Link
              key={s.slug}
              href={`/savings/hysa/${s.slug}`}
              className={`text-sm px-3 py-2 rounded-xl border transition-colors ${
                s.slug === slug
                  ? "border-ink bg-ink text-bg font-semibold"
                  : "border-line hover:border-ink hover:bg-bg-soft text-mute hover:text-ink"
              }`}
            >
              {s.name}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="card p-6">
      <div className="font-display font-semibold text-lg mb-3 leading-snug">{q}</div>
      <div className="text-mute leading-relaxed text-sm">{a}</div>
    </div>
  );
}
