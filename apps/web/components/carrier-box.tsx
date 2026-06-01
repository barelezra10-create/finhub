import Link from "next/link";
import type { ReactNode } from "react";
import { CarrierLogo } from "@/components/carrier-logo";

interface CarrierBoxProps {
  carrier: string;
  productLabel: string;
  tag?: string;
  tagline: string;
  specs: Array<{ label: string; value: string }>;
  bestFor: string;
  perks: string[];
  rating: number;
  ratingMax?: number;
  reviewHref: string;
  externalHref: string;
  externalLabel?: string;
  logo?: ReactNode;
}

export function CarrierBox({
  carrier,
  productLabel,
  tag,
  tagline,
  specs,
  bestFor,
  perks,
  rating,
  ratingMax = 5,
  reviewHref,
  externalHref,
  externalLabel,
  logo,
}: CarrierBoxProps) {
  const visitLabel = externalLabel ?? `Get a quote at ${carrier.split(" ")[0]}`;
  return (
    <div className="card-flush p-6 md:p-8 group hover:border-ink transition-colors duration-200">
      <div className="grid grid-cols-1 md:grid-cols-[88px_1fr_auto] gap-6 md:gap-8 items-start">
        {/* Logo */}
        <div className="shrink-0">
          {logo ?? <CarrierLogo carrier={carrier} size={88} />}
        </div>

        {/* Body */}
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2 mb-1">
            <h3 className="font-display font-bold text-xl md:text-2xl tracking-tight">
              {carrier}
            </h3>
            <span className="text-xs font-mono uppercase tracking-wider text-mute">
              {productLabel}
            </span>
            {tag && <span className="chip chip-lime">{tag}</span>}
          </div>
          <p className="text-mute leading-relaxed mb-4 max-w-2xl">{tagline}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4 max-w-2xl">
            {specs.map((s) => (
              <div key={s.label}>
                <div className="text-[10px] font-mono uppercase tracking-wider text-mute mb-0.5">
                  {s.label}
                </div>
                <div className="font-display font-semibold text-sm tabular leading-tight">
                  {s.value}
                </div>
              </div>
            ))}
          </div>

          <div className="text-xs font-mono uppercase tracking-wider text-mute mb-2">
            Best for
          </div>
          <div className="text-sm text-ink-soft mb-4 max-w-2xl">{bestFor}</div>

          <ul className="space-y-1.5 text-[0.9375rem] text-ink-soft max-w-2xl">
            {perks.map((p) => (
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
              {rating.toFixed(1)}
            </div>
            <div className="text-xs text-mute mt-1">out of {ratingMax}</div>
          </div>
          <div className="flex md:flex-col gap-2 md:gap-2 w-full md:w-auto">
            <a
              href={externalHref}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="pill pill-ink"
            >
              {visitLabel} <span aria-hidden>↗</span>
            </a>
            <Link href={reviewHref} className="pill pill-ghost">
              Read review
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
