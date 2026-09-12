import {SavingsDecision} from '@/components/savings-decision';
import {hysaOptions,SAVINGS_CHECKED} from "@/lib/savings-rates";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { states, getStateBySlug } from "@/lib/states";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

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
    description: `Compare high-yield savings options for ${state.name}: dated APYs, deposit requirements, fees, access, and links to provider terms.`,
    alternates: { canonical: `/savings/hysa/${slug}` },
  };
}


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

  const faqs: FAQItem[] = [
    {
      question: `Can I open an HYSA from another state if I live in ${state.name}?`,
      answer: `Yes. National online accounts may be available to ${state.name} residents, subject to each bank’s address and eligibility requirements. Online banks are federally chartered or state-chartered institutions that operate nationwide. There is no requirement to use a bank headquartered in ${state.name}. Required identity documents, approval, funding methods, and timing depend on the bank.`,
    },
    {
      question: `How is HYSA interest taxed in ${state.name}?`,
      answer: `Interest income from a high-yield savings account is taxable at the federal level as ordinary income, the same as wages. At the state level: ${state.taxNote}. Banks generally issue Form 1099-INT when reportable interest meets the filing threshold. Taxable interest generally must be reported even if you do not receive a 1099-INT.`,
    },
    {
      question: `Are local ${state.name} banks better than online HYSAs?`,
      answer: `It depends on what you value. Local ${state.name} banks like ${topBank} offer in-person service, local lending relationships, and community ties that online banks cannot replicate. Compare current savings APYs directly; this page does not verify a local-bank rate advantage. Many ${state.name} residents keep their primary checking at a local bank and move excess savings to an online HYSA to earn more without giving up their local banking relationship.`,
    },
    {
      question: "Are online HYSAs FDIC-insured the same way as local banks?",
      answer: `Yes. Every account listed on this page is insured by the Federal Deposit Insurance Corporation (FDIC) up to $250,000 per depositor, per institution, per ownership category. This is exactly the same coverage you get at any brick-and-mortar bank in ${state.name}. FDIC insurance has covered depositors in every bank failure since 1933. The physical location of the bank does not affect your coverage.`,
    },
    {
      question: `Is ${topBank} competitive with online HYSA rates?`,
      answer: `Compare ${topBank}’s current rate, fees, balance requirements, and access with the dated offers below. We have not verified a current local-bank rate for this page, so we do not claim a numerical rate advantage.`,
    },
  ];

  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema items={[
        { name: "Home", href: "/" },
        { name: "Savings", href: "/savings" },
        { name: "High-Yield Savings", href: "/savings/hysa" },
        { name: state.name, href: `/savings/hysa/${slug}` },
      ]} />
      <p className="max-w-(--max-w-page) mx-auto px-6 pt-6 text-sm text-mute">Provider observations checked {SAVINGS_CHECKED}. Variable APYs, not a live feed. Qualification conditions apply. <Link href="/savings/accounts" className="underline">View provider sources and unconfirmed rates</Link>. Federal interest reporting: <a className="underline" href="https://www.irs.gov/taxtopics/tc403">IRS guidance</a>.</p>
      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />

        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-violet mb-6">
            High-Yield Savings · {state.name}
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-6">
            High-yield savings accounts in {state.name}
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Compare national online savings options from {state.name}. Check address eligibility, the APY your balance qualifies for, recurring-deposit requirements, and access to your money. Local banks may be useful for in-person service; compare their current disclosures alongside the listed online accounts.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href={hysaOptions[0]!.href ?? "/savings/hysa"} className="pill pill-ink">
              Review {hysaOptions[0]!.lender}
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/savings-goal" className="pill pill-ghost">
              Calculate your earnings
            </Link>
          </div>
        </div>
      </section>

      <SavingsDecision state={state.name}/>
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
              <div className="font-display font-bold text-2xl mb-1">{hysaOptions[0]!.lender} High-Yield Savings</div>
              <div className="text-mute mb-4">{hysaOptions[0]!.detail} Open online in minutes from anywhere in {state.name}.</div>
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
                  {hysaOptions[0]!.apy.toFixed(2)}<span className="text-[2.5rem] align-top text-mute">%</span>
                </div>
              </div>
              <Link href={hysaOptions[0]!.href ?? "/savings/hysa"} className="pill pill-ink">
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
              <span className="pulse-dot" /> Savings Rates
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
          {hysaOptions.map((r, i) => {
            const cls = `grid grid-cols-12 px-6 py-4 items-center ${
              r.href ? "hover:bg-bg-soft/70 transition-colors" : ""
            } ${i === hysaOptions.length - 1 ? "" : "border-b border-line-soft"}`;
            const inner = (
              <>
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
              </>
            );
            return r.href ? (
              <Link key={r.lender} href={r.href} className={cls}>
                {inner}
              </Link>
            ) : (
              <div key={r.lender} className={cls}>
                {inner}
              </div>
            );
          })}
        </div>

        <p className="text-xs text-mute mt-4">
          Provider observations checked {SAVINGS_CHECKED}. Variable APYs may change. FDIC coverage limits apply per depositor, per insured bank, per ownership category.
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
                For illustration, a $20,000 balance earning an unchanged 3% APY earns $600 in one year before tax. At 0.5% it earns $100. These are calculation assumptions, not quotes from local banks. Use your actual offered rates and fees when comparing.
              </p>
              <p>
                If you prefer a local institution such as {state.topBanks.join(", ")}, compare its current savings disclosures with the online options. Check branch access, deposit requirements, transfer limits, and fees. We have not verified current rates for these local institutions and do not rank them below online banks.
              </p>
            </div>
            <div className="space-y-5">
              <p>
                Savings interest may have federal and state tax consequences. Review the applicable guidance for your filing situation; a bank’s headquarters alone does not determine your tax treatment. Compare the accounts before and after fees, and avoid treating an advertised APY as a guaranteed after-tax return.
              </p>
              <p>
                Online account eligibility, identity checks, transfer methods, and timing depend on the bank. Confirm that your address and funding method qualify before applying.
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
          {faqs.map(f => <FaqItem key={f.question} q={f.question} a={f.answer} />)}
        </div>
      </section>

      {/* CALCULATOR LINK */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <span className="chip chip-ink mb-4">Tool</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              See exactly how much more you earn at a top HYSA rate vs your current rate.
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
