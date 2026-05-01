import Image from "next/image";
import { getBrand, type Brand } from "@/lib/brands";

interface BrandLogoProps {
  brand: Brand | string;
  size?: number;
  rounded?: "md" | "lg" | "full";
  className?: string;
}

function initials(name: string): string {
  const cleaned = name
    .replace(/\b(by|the|of|a|an)\b/gi, "")
    .replace(/[^a-zA-Z0-9 ]/g, "")
    .trim();
  const parts = cleaned.split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) {
    const first = parts[0]!;
    return (first[0] ?? "?").toUpperCase() + (first[1] ?? "").toLowerCase();
  }
  return ((parts[0]?.[0] ?? "") + (parts[1]?.[0] ?? "")).toUpperCase();
}

export function BrandLogo({ brand, size = 40, rounded = "lg", className = "" }: BrandLogoProps) {
  const resolved: Brand | undefined = typeof brand === "string" ? getBrand(brand) : brand;
  const radius = rounded === "full" ? "rounded-full" : rounded === "md" ? "rounded-md" : "rounded-xl";

  if (!resolved) {
    return (
      <div
        className={`${radius} bg-bg-soft border border-line flex items-center justify-center font-mono font-semibold text-ink ${className}`}
        style={{ width: size, height: size, fontSize: Math.max(10, Math.round(size * 0.32)) }}
        aria-hidden
      >
        ?
      </div>
    );
  }

  // Clearbit Logo API: free, no key, returns 128x128 PNG. Falls back via onError → initials badge.
  return (
    <div
      className={`relative inline-flex items-center justify-center bg-white border border-line overflow-hidden ${radius} ${className}`}
      style={{ width: size, height: size }}
    >
      <span
        aria-hidden
        className="absolute inset-0 flex items-center justify-center font-mono font-semibold uppercase tracking-tight text-white"
        style={{
          backgroundColor: resolved.color,
          fontSize: Math.max(10, Math.round(size * 0.32)),
          letterSpacing: "-0.02em",
        }}
      >
        {initials(resolved.name)}
      </span>
      <Image
        src={`https://logo.clearbit.com/${resolved.domain}?size=128`}
        alt={`${resolved.name} logo`}
        width={size}
        height={size}
        unoptimized
        className="relative object-contain bg-white"
        style={{ width: size, height: size }}
      />
    </div>
  );
}
