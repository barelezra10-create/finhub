import type { CardData } from "@/lib/cards";

// slug → filename in /public/images/cards/. Real card art scraped from
// issuer press kits. Missing slugs fall through to the SVG fallback below.
const CARD_IMAGES: Record<string, string> = {
  "amex-business-gold": "amex-business-gold.png",
  "amex-gold": "amex-gold.png",
  "amex-platinum": "amex-platinum.png",
  "bank-of-america-business-advantage-cash": "bank-of-america-business-advantage-cash.jpg",
  "bank-of-america-customized-cash": "bank-of-america-customized-cash.png",
  "bank-of-america-travel-rewards-student": "bank-of-america-travel-rewards-student.jpg",
  "brex-card": "brex-card.jpg",
  "capital-one-platinum-secured": "capital-one-platinum-secured.png",
  "capital-one-quicksilver": "capital-one-quicksilver.png",
  "capital-one-quicksilver-student": "capital-one-quicksilver-student.png",
  "capital-one-spark-cash-business": "capital-one-spark-cash-business.png",
  "capital-one-venture": "capital-one-venture.png",
  "capital-one-venture-x": "capital-one-venture-x.jpg",
  "chase-freedom-flex": "chase-freedom-flex.png",
  "chase-freedom-unlimited": "chase-freedom-unlimited.png",
  "chase-ink-business-cash": "chase-ink-business-cash.png",
  "chase-ink-business-preferred": "chase-ink-business-preferred.png",
  "chase-sapphire-preferred": "chase-sapphire-preferred.png",
  "chase-sapphire-reserve": "chase-sapphire-reserve.png",
  "chime-credit-builder": "chime-credit-builder.jpg",
  "choice-privileges-mastercard": "choice-privileges-mastercard.jpg",
  "citi-double-cash": "citi-double-cash.webp",
  "costco-anywhere-visa": "costco-anywhere-visa.jpg",
  "delta-gold-amex": "delta-gold-amex.png",
  "discover-it-cashback": "discover-it-cashback.webp",
  "discover-it-secured": "discover-it-secured.png",
  "discover-it-student-chrome": "discover-it-student-chrome.png",
  "first-progress-platinum-prestige": "first-progress-platinum-prestige.jpg",
  "frontier-mastercard": "frontier-mastercard.png",
  "hilton-honors-amex": "hilton-honors-amex.png",
  "ihg-one-rewards-premier": "ihg-one-rewards-premier.png",
  "jetblue-plus": "jetblue-plus.jpg",
  "marriott-bonvoy-boundless": "marriott-bonvoy-boundless.png",
  "opensky-secured": "opensky-secured.jpg",
  "petal-1": "petal-1.png",
  "petal-2": "petal-2.svg",
  "self-visa-credit-card": "self-visa-credit-card.svg",
  "southwest-rapid-rewards-priority": "southwest-rapid-rewards-priority.png",
  "united-explorer": "united-explorer.png",
  "us-bank-altitude-reserve": "us-bank-altitude-reserve.jpg",
  "us-bank-cash-plus": "us-bank-cash-plus.png",
  "wells-fargo-active-cash": "wells-fargo-active-cash.webp",
  "wells-fargo-active-cash-student": "wells-fargo-active-cash-student.jpg",
  "world-of-hyatt": "world-of-hyatt.png",
};

const ISSUER_GRADIENT: Record<string, [string, string]> = {
  "Chase": ["#0F4B91", "#0A2F5C"],
  "American Express": ["#0F6BB3", "#0A4A7E"],
  "Citi": ["#003B70", "#001E3B"],
  "Capital One": ["#0E1A2B", "#000000"],
  "Wells Fargo": ["#A02020", "#5C0F0F"],
  "Discover": ["#F36A1F", "#A8420F"],
  "Bank of America": ["#012169", "#000F38"],
  "U.S. Bank": ["#0F2C5C", "#06183A"],
  "Barclays": ["#00AEEF", "#006A91"],
  "Goldman Sachs": ["#1F4E79", "#0F2A47"],
  "Brex": ["#1F1F1F", "#000000"],
  "WebBank": ["#2A6FB5", "#143B65"],
  "Stride Bank": ["#1E5C3C", "#0E3322"],
  "Self Financial": ["#3F2D8F", "#211658"],
  "Capital Bank": ["#0A3D72", "#051F3A"],
  "Synovus Bank": ["#13355B", "#081F38"],
};

// Per-slug gradient overrides for cards we explicitly want to differentiate
// from their issuer-default (e.g., multiple Barclays cards). Used by the
// styled fallback when no real card image exists.
const SLUG_GRADIENT: Record<string, [string, string]> = {
  "alaska-airlines-visa": ["#0F2A47", "#01426A"],
  "hawaiian-airlines-world-elite": ["#5A1A6F", "#2C0F4A"],
  "wyndham-rewards-earner-business": ["#1F2B66", "#0F1640"],
  "discover-it-student-cash": ["#FF8C42", "#C04A0F"],
  "apple-card": ["#E5E5EA", "#A6A6AB"],
  "bilt-mastercard": ["#1A1A1A", "#000000"],
};

const DEFAULT_GRADIENT: [string, string] = ["#1F1F1F", "#000000"];

interface CardArtProps {
  card: CardData;
  width?: number;
  className?: string;
}

/**
 * Real card art if we have it (50 SKUs in public/images/cards/), else a
 * styled gradient fallback with the issuer name and card name.
 */
export function CardArt({ card, width = 280, className = "" }: CardArtProps) {
  const height = Math.round(width * 0.63);
  const file = CARD_IMAGES[card.slug];

  if (file) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
        style={{ width, aspectRatio: "1.586 / 1" }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`/images/cards/${file}`}
          alt={`${card.issuer} ${card.name} credit card`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />
      </div>
    );
  }

  return <CardFallback card={card} width={width} height={height} className={className} />;
}

function CardFallback({
  card,
  width,
  height,
  className,
}: {
  card: CardData;
  width: number;
  height: number;
  className: string;
}) {
  const [c1, c2] =
    SLUG_GRADIENT[card.slug] ?? ISSUER_GRADIENT[card.issuer] ?? DEFAULT_GRADIENT;
  const pad = Math.round(width * 0.06);
  const issuerFs = Math.max(9, Math.round(width * 0.04));
  const nameFs = Math.max(12, Math.round(width * 0.058));
  return (
    <div
      className={`relative overflow-hidden rounded-2xl shadow-lg ${className}`}
      style={{
        width,
        height,
        background: `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`,
      }}
      aria-label={`${card.issuer} ${card.name} card`}
    >
      <div
        className="font-mono font-semibold uppercase tracking-widest text-white/90"
        style={{ position: "absolute", top: pad, left: pad, fontSize: issuerFs }}
      >
        {card.issuer}
      </div>
      <div
        className="font-display font-bold text-white"
        style={{
          position: "absolute",
          bottom: pad,
          left: pad,
          right: pad,
          fontSize: nameFs,
          lineHeight: 1.15,
        }}
      >
        {card.name}
      </div>
    </div>
  );
}
