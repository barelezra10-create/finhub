import Image from "next/image";
import { getBrand, type Brand } from "@/lib/brands";

interface BrandLogoProps {
  brand: Brand | string;
  size?: number;
  rounded?: "md" | "lg" | "full";
  className?: string;
}

const domainToLogo: Record<string, string> = {
  "marcus.com": "marcus.svg",
  "better.com": "better.png",
  "rocketmortgage.com": "rocket.png",
  "loandepot.com": "loandepot.png",
  "chase.com": "chase.svg",
  "pnc.com": "pnc.png",
  "wellsfargo.com": "wellsfargo.svg",
  "usbank.com": "usbank.png",
  "baskbank.com": "bask.png",
  "ally.com": "ally.png",
  "sofi.com": "sofi.png",
  "discover.com": "discover.svg",
  "cit.com": "cit.png",
  "americanexpress.com": "americanexpress.svg",
  "synchronybank.com": "synchrony.png",
  "lightstream.com": "lightstream.png",
  "upstart.com": "upstart.png",
  "bestegg.com": "bestegg.png",
  "prosper.com": "prosper.svg",
  "citi.com": "citi.png",
};

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

  const logoFile = domainToLogo[resolved.domain];
  const initialsBadge = (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center font-mono font-semibold uppercase tracking-tight text-white ${radius} ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: resolved.color,
        fontSize: Math.max(10, Math.round(size * 0.32)),
        letterSpacing: "-0.02em",
      }}
    >
      {initials(resolved.name)}
    </span>
  );

  if (!logoFile) return initialsBadge;

  return (
    <div
      className={`relative inline-flex items-center justify-center bg-white border border-line overflow-hidden ${radius} ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={`/brands/${logoFile}`}
        alt={`${resolved.name} logo`}
        width={size}
        height={size}
        unoptimized={logoFile.endsWith(".svg")}
        className="object-contain"
        style={{ width: size * 0.78, height: size * 0.78 }}
      />
    </div>
  );
}
