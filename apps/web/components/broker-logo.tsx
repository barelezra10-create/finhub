/**
 * Stylized badge for online brokerages. Uses a real logo image from
 * /public/brokers/ when one is mapped here, else falls back to initials.
 */

const BROKER_IMAGE: Record<string, string> = {
  "Charles Schwab": "charles-schwab.png",
  "Fidelity": "fidelity.png",
  "Vanguard": "vanguard.png",
  "Robinhood": "robinhood.png",
  "Webull": "webull.png",
  "E-Trade": "e-trade.png",
  "E*TRADE": "e-trade.png",
  "Interactive Brokers": "interactive-brokers.png",
};

const BROKER_COLOR: Record<string, string> = {
  "Charles Schwab": "#00A0DF",
  "Fidelity": "#338B36",
  "Vanguard": "#8C1D1D",
  "Robinhood": "#1D1B16",
  "Webull": "#0049FF",
  "E-Trade": "#6610F2",
  "E*TRADE": "#6610F2",
  "Interactive Brokers": "#D81830",
};

// Wide wordmark logos get less padding so the wordmark stays readable.
const WORDMARK_BROKERS = new Set([
  "Fidelity",
  "Vanguard",
  "Robinhood",
  "Webull",
  "E-Trade",
  "E*TRADE",
  "Interactive Brokers",
]);

function initials(name: string): string {
  const cleaned = name
    .replace(/\b(by|the|of|a|an|brokers|inc|incorporated)\b/gi, "")
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

interface BrokerLogoProps {
  broker: string;
  size?: number;
  className?: string;
}

export function BrokerLogo({ broker, size = 72, className = "" }: BrokerLogoProps) {
  const file = BROKER_IMAGE[broker];

  if (file) {
    const isWordmark = WORDMARK_BROKERS.has(broker);
    return (
      <span
        className={`inline-flex items-center justify-center rounded-xl bg-white border border-line overflow-hidden ${className}`}
        style={{ width: size, height: size, padding: isWordmark ? size * 0.08 : size * 0.11 }}
        aria-label={`${broker} logo`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/brokers/${file}`}
          alt={`${broker} logo`}
          className="object-contain"
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          loading="lazy"
        />
      </span>
    );
  }

  const bg = BROKER_COLOR[broker] ?? "#1F1F1F";
  return (
    <span
      aria-hidden
      className={`inline-flex items-center justify-center rounded-xl font-mono font-bold uppercase tracking-tight ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: bg,
        color: "#FFFFFF",
        fontSize: Math.max(14, Math.round(size * 0.34)),
        letterSpacing: "-0.02em",
      }}
    >
      {initials(broker)}
    </span>
  );
}
