import type { Brand } from "@/lib/brands";
import { BrandLogo } from "@/components/brand-logo";

interface VisitBrandCtaProps {
  brand: Brand;
  variant?: "ink" | "lime";
  label?: string;
  className?: string;
}

/**
 * Compact pill linking out to the brand's website.
 * Use in heroes, inline content, sidebars.
 */
export function VisitBrandCta({
  brand,
  variant = "ink",
  label,
  className = "",
}: VisitBrandCtaProps) {
  const pillClass = variant === "ink" ? "pill pill-ink" : "pill pill-lime";
  const text = label ?? `Visit ${brand.name}`;
  return (
    <a
      href={`https://www.${brand.domain}`}
      target="_blank"
      rel="nofollow noopener noreferrer"
      className={`${pillClass} ${className}`}
    >
      {text} <span aria-hidden>↗</span>
    </a>
  );
}

interface VisitBrandCardProps {
  brand: Brand;
  headline?: string;
  tagline?: string;
  ctaLabel?: string;
  className?: string;
}

/**
 * Large premium CTA card on a dark ink background with a lime button.
 * Use mid-page (after Pros/Cons) and as the bottom-of-page CTA.
 */
export function VisitBrandCard({
  brand,
  headline,
  tagline,
  ctaLabel,
  className = "",
}: VisitBrandCardProps) {
  const finalHeadline = headline ?? `Ready to open with ${brand.name}?`;
  const finalCta = ctaLabel ?? `Open ${brand.name} account`;
  const url = `https://www.${brand.domain}`;
  return (
    <aside className={`not-prose ${className}`}>
      <div className="relative overflow-hidden rounded-3xl border border-line bg-ink text-bg p-7 md:p-10">
        <div
          className="absolute -top-24 -right-24 w-72 h-72 rounded-full opacity-30 blur-3xl pointer-events-none"
          style={{ background: `radial-gradient(circle, ${brand.color} 0%, transparent 70%)` }}
          aria-hidden
        />
        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none bg-lime" aria-hidden />

        <div className="relative grid grid-cols-1 md:grid-cols-[auto_1fr_auto] gap-6 md:gap-8 items-center">
          <div className="shrink-0">
            <div className="rounded-2xl bg-white p-2 inline-flex">
              <BrandLogo brand={brand} size={72} rounded="lg" />
            </div>
          </div>

          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 text-[10px] font-mono uppercase tracking-[0.18em] text-lime mb-3">
              <span className="pulse-dot" style={{ background: "var(--color-lime)" }} />
              Editor reviewed
            </div>
            <div className="font-display font-extrabold text-2xl md:text-3xl tracking-tight leading-tight mb-2">
              {finalHeadline}
            </div>
            {tagline && (
              <p className="text-white/65 text-[0.9375rem] leading-relaxed max-w-md">
                {tagline}
              </p>
            )}
          </div>

          <div className="shrink-0 md:text-right">
            <a
              href={url}
              target="_blank"
              rel="nofollow noopener noreferrer"
              className="inline-flex items-center gap-2 bg-lime text-ink font-display font-bold text-base px-6 py-4 rounded-full hover:bg-white transition-colors duration-150 whitespace-nowrap"
            >
              {finalCta}
              <span aria-hidden className="text-lg">↗</span>
            </a>
            <div className="mt-3 text-[11px] font-mono uppercase tracking-[0.14em] text-white/45">
              Opens at {brand.domain}
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}
