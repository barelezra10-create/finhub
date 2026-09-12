import type { Metadata } from "next";
import Link from "next/link";
import { FAQPageSchema, BreadcrumbListSchema, type FAQItem } from "@/components/schemas";
import { loadCards } from "@/lib/cards-server";
import { Calculator } from "./calculator";

export const metadata: Metadata = {
  title: "Which Credit Card Should I Get? | Free Quiz",
  description:
    "Choose a purpose and annual-fee preference to find cards for comparison. No approval prediction or credit-score requirement is inferred.",
  alternates: { canonical: "/calculators/which-card" },
};

const faqs: FAQItem[]=[{question:"How are matches selected?",answer:"We filter by your selected purpose and annual-fee preference, then show up to three cards alphabetically. These are comparison starting points, not a ranked recommendation or approval prediction."},{question:"Why might there be no results?",answer:"The directory may not have matching products with confirmed annual fees. Unknown fees are excluded when you request no annual fee. Check issuer disclosures directly."}];

export default function Page() {
  const cards = loadCards();
  return (
    <>
      <FAQPageSchema items={faqs} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Calculators", href: "/calculators" },
          { name: "Which Card", href: "/calculators/which-card" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-16 pb-10">
          <span className="chip chip-violet mb-5">
            <span className="pulse-dot" /> Credit card quiz
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.5rem)] leading-[1.04] tracking-[-0.03em] mb-5 max-w-4xl">
            Which credit card should I get?
          </h1>
          <p className="text-lg md:text-xl text-mute max-w-2xl leading-relaxed mb-6">
            Choose your purpose and annual-fee preference. See up to three alphabetical matches to investigate further. Free, no signup.
          </p>
          <div className="flex items-center gap-6 text-sm text-mute">
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">{cards.length}</span> cards listed
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">3</span> questions
            </div>
            <div className="flex items-center gap-2">
              <span className="font-mono tabular text-ink font-semibold">0</span> email walls
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-16">
        <Calculator cards={cards} />
      </section>

      {/* HOW IT WORKS */}
      <section className="border-t border-line bg-bg-soft/50">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-12 md:col-span-4">
              <span className="chip chip-mute mb-4">How this works</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Filter, then compare.
              </h2>
            </div>
            <div className="col-span-12 md:col-span-8 space-y-5 text-[1.0625rem] leading-relaxed text-ink-soft">
              <p>
                The quiz applies two filters. First, the goal filter matches your answer to the card category (cash back, travel, balance transfer, business, or secured for credit-building). Cards outside the matching category drop out.
              </p>
              <p>
                Second, filter by your annual-fee preference. Unknown fees are excluded when you request no annual fee. We do not estimate approval odds.
              </p>
              <p>
                Results are listed alphabetically. Check current terms and eligibility directly with the issuer.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-t border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight mb-10">
            Frequently asked questions
          </h2>
          <div className="space-y-5 max-w-3xl">
            {faqs.map((f) => (
              <div key={f.question} className="card p-6">
                <h3 className="font-display font-bold text-lg mb-2">{f.question}</h3>
                <p className="text-ink-soft leading-relaxed">{f.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-12 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <h2 className="font-display font-extrabold text-2xl md:text-3xl tracking-tight max-w-2xl leading-tight">
            See how much rewards your everyday spending could earn.
          </h2>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators/rewards-optimizer" className="pill pill-ink">
              Rewards optimizer
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/calculators/balance-transfer" className="pill pill-ghost">
              Balance transfer
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
