"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { CardArt } from "@/components/card-art";
import {
  cardCategories,
  fullCardName,
  formatAnnualFee,
  topRewardRate,
  cardHref,
  CATEGORY_LABEL,
  SYNTHETIC_CATEGORIES,
  type CardData,
  type SyntheticCategory,
} from "@/lib/cards";

type AnnualFeeFilter = "any" | "none" | "low" | "high";
type CreditFilter = "any" | "excellent" | "good" | "fair" | "poor";
type Sort = "rating" | "fee-asc" | "bonus-desc" | "name";

const ANNUAL_FEE_OPTIONS: { value: AnnualFeeFilter; label: string }[] = [
  { value: "any", label: "Any fee" },
  { value: "none", label: "No annual fee" },
  { value: "low", label: "Under $100" },
  { value: "high", label: "$100 and up" },
];

const CREDIT_OPTIONS: { value: CreditFilter; label: string }[] = [
  { value: "any", label: "Any credit" },
  { value: "excellent", label: "Excellent 740+" },
  { value: "good", label: "Good 670+" },
  { value: "fair", label: "Fair 580+" },
  { value: "poor", label: "Building credit" },
];

const SORT_OPTIONS: { value: Sort; label: string }[] = [
  { value: "rating", label: "Top rated" },
  { value: "bonus-desc", label: "Best signup bonus" },
  { value: "fee-asc", label: "Lowest fee" },
  { value: "name", label: "A to Z" },
];

function matchesAnnualFee(card: CardData, f: AnnualFeeFilter): boolean {
  const fee = card.annual_fee ?? 0;
  if (f === "any") return true;
  if (f === "none") return fee === 0;
  if (f === "low") return fee > 0 && fee < 100;
  return fee >= 100;
}

function matchesCredit(card: CardData, f: CreditFilter): boolean {
  if (f === "any") return true;
  const min = card.credit_score_required?.min ?? 0;
  if (f === "excellent") return min >= 740;
  if (f === "good") return min >= 670 && min < 740;
  if (f === "fair") return min >= 580 && min < 670;
  return min < 580;
}

function matchesCategory(
  card: CardData,
  cat: SyntheticCategory | "all",
): boolean {
  if (cat === "all") return true;
  return cardCategories(card).includes(cat);
}

function matchesIssuer(card: CardData, issuer: string): boolean {
  if (!issuer) return true;
  return card.issuer === issuer;
}

function compareCards(a: CardData, b: CardData, sort: Sort): number {
  if (sort === "rating") return (b.rating ?? 0) - (a.rating ?? 0);
  if (sort === "fee-asc") return (a.annual_fee ?? 0) - (b.annual_fee ?? 0);
  if (sort === "bonus-desc")
    return (b.signup_bonus_value_usd ?? 0) - (a.signup_bonus_value_usd ?? 0);
  return fullCardName(a).localeCompare(fullCardName(b));
}

interface CardsExplorerProps {
  cards: CardData[];
}

export function CardsExplorer({ cards }: CardsExplorerProps) {
  const [category, setCategory] = useState<SyntheticCategory | "all">("all");
  const [fee, setFee] = useState<AnnualFeeFilter>("any");
  const [credit, setCredit] = useState<CreditFilter>("any");
  const [issuer, setIssuer] = useState<string>("");
  const [sort, setSort] = useState<Sort>("rating");

  const issuers = useMemo(() => {
    return Array.from(new Set(cards.map((c) => c.issuer))).sort();
  }, [cards]);

  const filtered = useMemo(() => {
    return cards
      .filter(
        (c) =>
          matchesCategory(c, category) &&
          matchesAnnualFee(c, fee) &&
          matchesCredit(c, credit) &&
          matchesIssuer(c, issuer),
      )
      .sort((a, b) => compareCards(a, b, sort));
  }, [cards, category, fee, credit, issuer, sort]);

  const reset = () => {
    setCategory("all");
    setFee("any");
    setCredit("any");
    setIssuer("");
    setSort("rating");
  };

  const anyFilterActive =
    category !== "all" || fee !== "any" || credit !== "any" || issuer !== "";

  return (
    <div>
      {/* Filter bar */}
      <div className="sticky top-16 z-20 bg-bg/90 backdrop-blur-md border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-4 space-y-3">
          {/* Category chips */}
          <div className="flex flex-wrap items-center gap-2">
            <CategoryChip
              active={category === "all"}
              onClick={() => setCategory("all")}
            >
              All cards
              <span className="ml-1.5 font-mono text-xs opacity-60">
                {cards.length}
              </span>
            </CategoryChip>
            {SYNTHETIC_CATEGORIES.map((c) => {
              const count = cards.filter((card) =>
                cardCategories(card).includes(c),
              ).length;
              return (
                <CategoryChip
                  key={c}
                  active={category === c}
                  onClick={() => setCategory(c)}
                >
                  {CATEGORY_LABEL[c]}
                  <span className="ml-1.5 font-mono text-xs opacity-60">
                    {count}
                  </span>
                </CategoryChip>
              );
            })}
          </div>

          {/* Selects + sort */}
          <div className="flex flex-wrap items-center gap-3">
            <Select
              label="Annual fee"
              value={fee}
              onChange={(v) => setFee(v as AnnualFeeFilter)}
              options={ANNUAL_FEE_OPTIONS}
            />
            <Select
              label="Credit"
              value={credit}
              onChange={(v) => setCredit(v as CreditFilter)}
              options={CREDIT_OPTIONS}
            />
            <Select
              label="Issuer"
              value={issuer}
              onChange={(v) => setIssuer(v)}
              options={[
                { value: "", label: "Any issuer" },
                ...issuers.map((i) => ({ value: i, label: i })),
              ]}
            />
            <div className="ml-auto flex items-center gap-3">
              {anyFilterActive && (
                <button
                  type="button"
                  onClick={reset}
                  className="text-xs font-medium text-mute hover:text-ink underline-offset-4 hover:underline"
                >
                  Clear filters
                </button>
              )}
              <Select
                label="Sort"
                value={sort}
                onChange={(v) => setSort(v as Sort)}
                options={SORT_OPTIONS}
              />
            </div>
          </div>

          {/* Result count */}
          <div className="text-xs font-mono text-mute uppercase tracking-wider">
            Showing <span className="text-ink font-semibold">{filtered.length}</span> of{" "}
            <span className="text-ink font-semibold">{cards.length}</span> cards
          </div>
        </div>
      </div>

      {/* Card grid */}
      <div className="max-w-(--max-w-page) mx-auto px-6 py-10">
        {filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="font-display font-bold text-2xl mb-3">No cards match</div>
            <div className="text-mute mb-6">
              Try widening one of the filters or clearing them all.
            </div>
            <button
              type="button"
              onClick={reset}
              className="pill pill-ink"
            >
              Clear filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <CardTile key={c.slug} card={c} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function CardTile({ card }: { card: CardData }) {
  const cats = cardCategories(card).slice(0, 2);
  const ratingNice = (card.rating ?? 0).toFixed(1);
  return (
    <Link
      href={cardHref(card.slug)}
      className="card p-5 block group hover:-translate-y-0.5 transition-transform duration-200"
    >
      <div className="mb-4 flex justify-center">
        <CardArt card={card} width={280} />
      </div>
      <div className="flex items-start justify-between gap-3 mb-2">
        <div className="min-w-0 flex-1">
          <div className="text-[11px] font-mono uppercase tracking-wider text-mute mb-1">
            {card.issuer}
          </div>
          <div className="font-display font-bold text-base leading-tight tracking-tight group-hover:text-violet transition-colors">
            {card.name}
          </div>
        </div>
        <div className="shrink-0 inline-flex items-center gap-1 rounded-full bg-bg-soft border border-line px-2 py-0.5">
          <span className="text-[11px] font-mono tabular font-semibold text-ink">
            {ratingNice}
          </span>
          <span className="text-[10px] text-mute">/5</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 my-4 pt-4 border-t border-line">
        <Stat label="Annual fee" value={formatAnnualFee(card.annual_fee ?? 0)} />
        <Stat label="Top reward" value={topRewardRate(card)} />
      </div>

      {card.signup_bonus && (
        <div className="text-[13px] text-ink-soft mb-4 line-clamp-2">
          <span className="font-semibold text-ink">Bonus: </span>
          {card.signup_bonus}
        </div>
      )}

      <div className="flex flex-wrap gap-1.5">
        {cats.map((c) => (
          <span
            key={c}
            className="inline-flex items-center px-2 py-0.5 rounded-full bg-bg-soft text-[10px] font-mono uppercase tracking-wider text-mute"
          >
            {CATEGORY_LABEL[c]}
          </span>
        ))}
      </div>
    </Link>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
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

function CategoryChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center px-3 py-1.5 rounded-full text-[13px] font-medium border transition-colors duration-150 ${
        active
          ? "bg-ink text-bg border-ink"
          : "bg-bg-soft text-ink-soft border-line hover:border-ink"
      }`}
    >
      {children}
    </button>
  );
}

interface SelectProps {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
}

function Select({ label, value, onChange, options }: SelectProps) {
  return (
    <label className="inline-flex items-center gap-2 text-[13px]">
      <span className="text-mute font-mono uppercase tracking-wider text-[10px]">
        {label}
      </span>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none bg-bg-soft border border-line rounded-full px-3 py-1.5 pr-8 text-[13px] font-medium text-ink focus:outline-none focus:border-ink cursor-pointer"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'%3E%3Cpath fill='%236B6B6B' d='M0 0l5 6 5-6z'/%3E%3C/svg%3E\")",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "right 0.75rem center",
        }}
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </label>
  );
}
