import Link from "next/link";
import { CardArt } from "@/components/card-art";
import {
  formatAnnualFee,
  topRewardRate,
  type CardData,
} from "@/lib/cards";

interface CardPickRowProps {
  card: CardData;
  rank?: number;
  tag?: string;
}

/**
 * Stacked-box pick row with the actual card art on the left, key specs +
 * perks in the middle, rating + CTAs on the right. Used by every
 * /credit-cards/<category> listing so search-landing pages all show the
 * same visual treatment as the rest of the site's lineup pages.
 */
export function CardPickRow({ card, rank, tag }: CardPickRowProps) {
  return (
    <div className="card-flush p-6 md:p-8 group hover:border-ink transition-colors duration-200">
      <div className="grid grid-cols-1 md:grid-cols-[280px_1fr_auto] gap-6 md:gap-8 items-start">
        {/* Card art */}
        <div className="shrink-0 flex justify-center md:justify-start">
          <CardArt card={card} width={280} />
        </div>

        {/* Body */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-2">
            {rank != null && (
              <span className="font-mono text-xs text-mute">#{rank}</span>
            )}
            <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight">
              {card.name}
            </h3>
            {tag && <span className="chip chip-lime">{tag}</span>}
          </div>
          <div className="text-xs font-mono uppercase tracking-wider text-mute mb-3">
            {card.issuer} · {card.network}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 max-w-2xl">
            <Spec label="Annual fee" value={formatAnnualFee(card.annual_fee ?? 0)} />
            <Spec label="Top reward" value={topRewardRate(card)} />
            <Spec
              label="Signup bonus"
              value={
                card.signup_bonus_value_usd != null
                  ? `$${card.signup_bonus_value_usd.toLocaleString()}`
                  : card.signup_bonus ?? "None"
              }
            />
            <Spec
              label="Min credit"
              value={
                card.credit_score_required?.min
                  ? String(card.credit_score_required.min)
                  : "Varies"
              }
            />
          </div>

          {card.signup_bonus && (
            <p className="text-sm text-ink-soft mb-3 max-w-2xl">
              <span className="font-semibold text-ink">Bonus: </span>
              {card.signup_bonus}
              {card.signup_bonus_spend
                ? ` after $${card.signup_bonus_spend.toLocaleString()} in spend`
                : ""}
            </p>
          )}

          <ul className="space-y-1.5 text-[0.9375rem] text-ink-soft max-w-2xl">
            {card.perks.slice(0, 3).map((p) => (
              <li key={p} className="flex gap-2">
                <span className="text-mint font-bold shrink-0">+</span>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Rating + CTAs */}
        <div className="md:text-right md:min-w-[200px] shrink-0 flex flex-col md:items-end gap-4">
          <div>
            <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-1">
              Fintiex score
            </div>
            <div className="font-display font-extrabold text-4xl md:text-5xl tabular leading-none text-ink">
              {card.rating.toFixed(1)}
            </div>
            <div className="text-xs text-mute mt-1">out of 5</div>
          </div>
          <div className="flex md:flex-col gap-2 md:gap-2 w-full md:w-auto">
            <a
              href={card.application_url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              Apply at {card.issuer.split(" ")[0]} <span aria-hidden>↗</span>
            </a>
            <Link href={`/credit-cards/${card.slug}`} className="pill pill-ghost">
              Read review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-0.5">
        {label}
      </div>
      <div className="font-display font-semibold text-sm tabular leading-tight">
        {value}
      </div>
    </div>
  );
}
