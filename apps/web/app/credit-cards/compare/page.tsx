import { Suspense } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbListSchema } from "@/components/schemas";
import { loadCards } from "@/lib/cards-server";
import { CompareClient } from "./compare-client";

export const metadata: Metadata = {
  title: "Compare Credit Cards Side by Side | Fintiex",
  description:
    "Stack 2 or 3 credit cards next to each other. We highlight the best annual fee, signup bonus, APR, and rewards rate in every row so the winner is obvious.",
  alternates: { canonical: "/credit-cards/compare" },
};

export default function Page() {
  const cards = loadCards();

  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Credit Cards", href: "/credit-cards" },
          { name: "Compare", href: "/credit-cards/compare" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-12">
          <span className="chip chip-violet mb-6">
            <span className="pulse-dot" /> Compare {cards.length} reviewed cards
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5vw,4.25rem)] leading-[1.04] tracking-[-0.03em] mb-6 max-w-3xl">
            Compare credit cards side by side.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl">
            Pick any 2 or 3 cards. We pull the annual fee, APR ranges, signup bonus value, top reward rate, and approval credit score into one clean table. The best value in every row is tagged so you can pick the winner in seconds.
          </p>
        </div>
      </section>

      {/* TOOL */}
      <section className="bg-bg pb-6">
        <Suspense fallback={<ComparePlaceholder />}>
          <CompareClient cards={cards} />
        </Suspense>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="mb-10">
            <span className="chip chip-mute mb-4">How comparison works</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
              Three steps. No spreadsheet.
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <HowCard
              step="1"
              title="Pick your cards"
              detail="Open any slot, search by card or issuer, or filter by category. Add a third card if you want a wider read."
            />
            <HowCard
              step="2"
              title="Scan the highlights"
              detail="Lime tags mark the winner in every comparable row: lowest fee, longest 0% APR, biggest signup bonus, and more."
            />
            <HowCard
              step="3"
              title="Apply or dig deeper"
              detail="Hit Apply to start an application at the issuer, or tap the card name to read our full Fintiex review."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Not sure which cards to compare?
            </h2>
            <p className="text-ink/70 mt-2">
              Browse the full hub, or let our quiz suggest a card based on how you actually spend.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/credit-cards" className="pill pill-ink">
              Browse all cards
              <span aria-hidden>→</span>
            </Link>
            <Link href="/calculators/which-card" className="pill pill-ghost">
              Which card quiz
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function ComparePlaceholder() {
  return (
    <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
      <div className="card p-10 text-center text-mute">Loading comparison tool...</div>
    </div>
  );
}

function HowCard({
  step,
  title,
  detail,
}: {
  step: string;
  title: string;
  detail: string;
}) {
  return (
    <div className="card p-6">
      <div className="font-mono text-xs uppercase tracking-wider text-mute mb-2">
        Step {step}
      </div>
      <div className="font-display font-bold text-xl mb-2 tracking-tight">{title}</div>
      <p className="text-mute text-sm leading-relaxed">{detail}</p>
    </div>
  );
}
