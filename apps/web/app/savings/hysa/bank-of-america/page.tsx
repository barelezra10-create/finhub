import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Bank of America High-Yield Savings: What BofA Actually Pays (2026)",
  description:
    "Bank of America does not offer a true high-yield savings account. Advantage Savings pays about 0.01 to 0.04% APY. See what that costs you and better options.",
  alternates: { canonical: "/savings/hysa/bank-of-america" },
};

const faqs: FAQItem[] = [
  {
    question: "Does Bank of America have a high-yield savings account?",
    answer:
      "No. Bank of America's only consumer savings product is Advantage Savings, which pays about 0.01% APY at the standard tier. Even with Preferred Rewards boosts, the rate stays a fraction of what online banks pay. BofA competes on branches and its checking relationship, not on savings yield.",
  },
  {
    question: "What does Bank of America Advantage Savings pay?",
    answer:
      "The standard rate is about 0.01% APY. Preferred Rewards members earn a boosted rate that has topped out around 0.04% APY at the Platinum Honors tier. For comparison, top online high-yield savings accounts paid around 3.75 to 4.20% APY in August 2026, roughly one hundred times more.",
  },
  {
    question: "Does Advantage Savings have a monthly fee?",
    answer:
      "Yes, $8 per month unless you keep a $500 minimum daily balance, are a Preferred Rewards member, or are under 25. At 0.01% APY, a $500 balance earns about 5 cents per year, so a single unwaived fee wipes out decades of interest.",
  },
  {
    question: "Is it safe to move savings from Bank of America to an online bank?",
    answer:
      "Yes. Online banks like Marcus, Ally, and Synchrony carry the same FDIC insurance as Bank of America: $250,000 per depositor, per institution. The common setup is keeping BofA checking for everyday banking and linking an online HYSA for savings. Transfers between them take one to two business days.",
  },
  {
    question: "How much am I losing by keeping savings at Bank of America?",
    answer:
      "On a $10,000 balance, Advantage Savings at 0.01% APY earns about $1 per year. A high-yield savings account at 3.95% earns about $395. That $394 gap repeats every year, and it grows with your balance and with compounding.",
  },
];

export default function BofaHysaPage() {
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "High-Yield Savings", href: "/savings/hysa" },
          { name: "Bank of America", href: "/savings/hysa/bank-of-america" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-14">
          <span className="chip chip-violet mb-6">High-Yield Savings</span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.04] tracking-[-0.03em] mb-4">
            Bank of America high-yield savings: it does not exist
          </h1>
          <span className="text-mute text-sm block mb-6">
            Updated August 2026 · By the Fintiex Rate Desk
          </span>
          <div className="max-w-2xl space-y-4">
            <p className="text-lg text-mute leading-relaxed">
              If you searched for a Bank of America high-yield savings account, here is the
              straight answer: BofA does not offer one. Its only consumer savings product is
              Advantage Savings, which pays about 0.01% APY at the standard tier and up to
              roughly 0.04% with the highest Preferred Rewards status.
            </p>
            <p className="text-lg text-mute leading-relaxed">
              Top online banks paid around 3.75 to 4.20% APY on FDIC-insured savings in
              August 2026. That is not a small gap. It is roughly one hundred times more
              interest on the same money with the same insurance.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/savings/hysa" className="pill pill-ink">
              See real high-yield accounts
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/savings-goal" className="pill pill-ghost">
              Calculate the difference
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT BOFA PAYS */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-6">
          What Bank of America Advantage Savings actually pays
        </h2>
        <div className="card-flush overflow-hidden max-w-3xl">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-8">Tier</div>
            <div className="col-span-4 text-right">APY</div>
          </div>
          {[
            { tier: "Standard", apy: "~0.01%" },
            { tier: "Preferred Rewards Gold", apy: "~0.02%" },
            { tier: "Preferred Rewards Platinum", apy: "~0.03%" },
            { tier: "Preferred Rewards Platinum Honors", apy: "~0.04%" },
          ].map((r, i, arr) => (
            <div
              key={r.tier}
              className={`grid grid-cols-12 px-6 py-4 items-center ${
                i === arr.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-8 font-medium">{r.tier}</div>
              <div className="col-span-4 text-right font-display font-bold tabular">{r.apy}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">
          Approximate APYs as of August 2026. There is also an $8 monthly fee unless waived by a
          $500 minimum balance, Preferred Rewards status, or being under 25. Confirm current
          terms at bankofamerica.com.
        </p>
      </section>

      {/* THE MATH */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-5">
          What the gap costs you
        </h2>
        <div className="max-w-3xl space-y-4">
          <p className="text-mute leading-relaxed">
            On $10,000, Advantage Savings at 0.01% APY earns about $1 per year. The same
            $10,000 in a high-yield savings account at 3.95% earns about $395. Over five
            years with compounding, the HYSA earns roughly $2,140 while BofA pays about $5.
            The FDIC insurance protecting both accounts is identical.
          </p>
          <p className="text-mute leading-relaxed">
            This is not an accident or an oversight. Large branch banks fund themselves with
            enormous checking deposits and do not need to pay for savings balances. Online
            banks have no branch overhead and compete for deposits with rate. Both models are
            rational; you just should not store savings in the first one.
          </p>
          <p className="text-mute leading-relaxed">
            The practical setup most people land on: keep Bank of America checking if the
            branches and Zelle access matter to you, open a high-yield savings account at an
            online bank, and link the two. Moving money between them takes one to two
            business days, which is fast enough for almost any real need.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-12">
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-8">
          Bank of America savings questions, answered
        </h2>
        <div className="space-y-8 max-w-3xl">
          {faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-display font-bold text-lg tracking-tight mb-2">{f.question}</h3>
              <p className="text-mute leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-16">
        <div className="card-flush p-8">
          <h2 className="font-display font-bold text-xl tracking-tight mb-3">Next step</h2>
          <p className="text-mute leading-relaxed max-w-3xl mb-5">
            Compare the current top high-yield savings accounts, pick one with no minimum and
            no fees, and link it to your existing checking. The whole move takes about ten
            minutes online.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/savings/hysa" className="pill pill-ink">
              Compare top HYSA rates
              <span aria-hidden>→</span>
            </Link>
            <Link href="/reviews/marcus" className="pill pill-ghost">
              Marcus review
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
