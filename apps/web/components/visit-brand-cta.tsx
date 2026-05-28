import type { Brand } from "@/lib/brands";

interface VisitBrandCtaProps {
  brand: Brand;
  variant?: "ink" | "lime";
  label?: string;
  className?: string;
}

export function VisitBrandCta({
  brand,
  variant = "lime",
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
