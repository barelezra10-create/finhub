"use client";

import { useCallback, useEffect, useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Plus, Search, X } from "lucide-react";
import { CardArt } from "@/components/card-art";
import {
  bestRewardEntries,
  cardCategories,
  CATEGORY_LABEL,
  fullCardName,
  formatAnnualFee,
  formatAprRange,
  formatFeePct,
  formatPct,
  SYNTHETIC_CATEGORIES,
  topRewardRate,
  type CardData,
  type SyntheticCategory,
} from "@/lib/cards";

type Slot = string | null;

const POPULAR_COMPARISONS: { label: string; slugs: string[] }[] = [
  {
    label: "Best premium travel",
    slugs: ["chase-sapphire-reserve", "amex-platinum", "capital-one-venture-x"],
  },
  {
    label: "Best flat-rate cashback",
    slugs: ["citi-double-cash", "wells-fargo-active-cash", "capital-one-quicksilver"],
  },
  {
    label: "Best secured cards",
    slugs: ["discover-it-secured", "capital-one-platinum-secured", "opensky-secured"],
  },
  {
    label: "Sapphire Preferred vs Reserve",
    slugs: ["chase-sapphire-preferred", "chase-sapphire-reserve"],
  },
  {
    label: "Amex Gold vs Platinum",
    slugs: ["amex-gold", "amex-platinum"],
  },
];

const USD = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function formatUSD(n: number | null | undefined): string {
  if (n == null) return "None";
  return USD.format(n);
}

interface CompareClientProps {
  cards: CardData[];
}

export function CompareClient({ cards }: CompareClientProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Hydrate slots from URL on mount only. Subsequent URL changes are driven
  // by us via router.replace, so we do not re-sync from searchParams.
  const initial: Slot[] = useMemo(() => {
    const fromUrl = searchParams.getAll("c").slice(0, 3);
    if (fromUrl.length >= 2) return fromUrl;
    if (fromUrl.length === 1) return [fromUrl[0]!, null];
    return [null, null];
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const [slots, setSlots] = useState<Slot[]>(initial);

  const cardBySlug = useMemo(() => {
    const map = new Map<string, CardData>();
    for (const c of cards) map.set(c.slug, c);
    return map;
  }, [cards]);

  const updateUrl = useCallback(
    (next: Slot[]) => {
      const params = new URLSearchParams();
      for (const slug of next) {
        if (slug) params.append("c", slug);
      }
      const qs = params.toString();
      router.replace(qs ? `/credit-cards/compare?${qs}` : "/credit-cards/compare", {
        scroll: false,
      });
    },
    [router],
  );

  const setSlot = useCallback(
    (idx: number, slug: string | null) => {
      setSlots((prev) => {
        const next = [...prev];
        next[idx] = slug;
        updateUrl(next);
        return next;
      });
    },
    [updateUrl],
  );

  const addSlot = useCallback(() => {
    setSlots((prev) => {
      if (prev.length >= 3) return prev;
      const next = [...prev, null];
      updateUrl(next);
      return next;
    });
  }, [updateUrl]);

  const removeSlot = useCallback(
    (idx: number) => {
      setSlots((prev) => {
        if (prev.length <= 2) return prev;
        const next = prev.filter((_, i) => i !== idx);
        updateUrl(next);
        return next;
      });
    },
    [updateUrl],
  );

  const loadPreset = useCallback(
    (slugs: string[]) => {
      const next = slugs.slice(0, 3) as Slot[];
      while (next.length < 2) next.push(null);
      setSlots(next);
      updateUrl(next);
    },
    [updateUrl],
  );

  const slotCards = useMemo(
    () => slots.map((s) => (s ? cardBySlug.get(s) ?? null : null)),
    [slots, cardBySlug],
  );
  const filledCount = slotCards.filter(Boolean).length;
  const allEmpty = filledCount === 0;

  return (
    <div className="max-w-(--max-w-page) mx-auto px-6 py-8">
      {/* Popular comparisons strip (only when nothing picked) */}
      {allEmpty && (
        <div className="card-flush p-6 mb-8">
          <div className="font-mono text-xs uppercase tracking-wider text-mute mb-3">
            Popular comparisons
          </div>
          <div className="flex flex-wrap gap-2">
            {POPULAR_COMPARISONS.map((preset) => (
              <button
                key={preset.label}
                type="button"
                onClick={() => loadPreset(preset.slugs)}
                className="pill pill-ghost"
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Slots */}
      <div
        className={`grid gap-4 grid-cols-1 ${
          slots.length === 2 ? "md:grid-cols-2" : "md:grid-cols-3"
        }`}
      >
        {slots.map((slug, idx) => (
          <CardSlotView
            key={idx}
            idx={idx}
            slug={slug}
            cards={cards}
            cardBySlug={cardBySlug}
            selectedSlugs={slots.filter((s): s is string => Boolean(s))}
            onSelect={(s) => setSlot(idx, s)}
            onRemove={slots.length > 2 ? () => removeSlot(idx) : undefined}
          />
        ))}
        {slots.length < 3 && (
          <button
            type="button"
            onClick={addSlot}
            className="card-flush min-h-[280px] flex items-center justify-center text-mute hover:text-ink hover:border-ink transition-colors"
          >
            <span className="inline-flex items-center gap-2 font-display font-semibold">
              <Plus className="h-5 w-5" />
              Add 3rd card
            </span>
          </button>
        )}
      </div>

      {/* Comparison */}
      <div className="mt-10">
        {filledCount >= 2 ? (
          <ComparisonTable cards={slotCards} />
        ) : (
          <div className="card-flush p-10 text-center">
            <div className="font-display font-bold text-xl mb-2 tracking-tight">
              Pick at least 2 cards to compare
            </div>
            <p className="text-mute text-sm max-w-md mx-auto">
              Tap any open slot above to choose a card, or load one of our popular comparisons to get a head start.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// ---------- Card slot ----------

function CardSlotView({
  idx,
  slug,
  cards,
  cardBySlug,
  selectedSlugs,
  onSelect,
  onRemove,
}: {
  idx: number;
  slug: string | null;
  cards: CardData[];
  cardBySlug: Map<string, CardData>;
  selectedSlugs: string[];
  onSelect: (slug: string | null) => void;
  onRemove?: () => void;
}) {
  const [pickerOpen, setPickerOpen] = useState(false);
  const card = slug ? cardBySlug.get(slug) ?? null : null;
  const otherSelected = selectedSlugs.filter((s) => s !== slug);

  return (
    <div className="card-flush relative p-6 min-h-[280px] flex flex-col">
      {onRemove && (
        <button
          type="button"
          onClick={onRemove}
          aria-label={`Remove card slot ${idx + 1}`}
          className="absolute top-3 right-3 rounded-full p-1.5 text-mute hover:bg-bg-soft hover:text-ink transition-colors z-10"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {card ? (
        <div className="flex flex-1 flex-col items-center text-center gap-3">
          <div className="flex justify-center">
            <CardArt card={card} width={240} />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-mute mb-1">
              {card.issuer}
            </div>
            <div className="font-display font-bold text-base tracking-tight leading-tight">
              {card.name}
            </div>
          </div>
          <div className="inline-flex items-center gap-1 rounded-full bg-bg-soft border border-line px-2 py-0.5">
            <span className="text-[11px] font-mono tabular font-semibold text-ink">
              {(card.rating ?? 0).toFixed(1)}
            </span>
            <span className="text-[10px] text-mute">/5</span>
          </div>
          <div className="mt-auto flex flex-wrap gap-2 justify-center pt-2">
            <button
              type="button"
              onClick={() => setPickerOpen(true)}
              className="pill pill-ghost"
            >
              Change
            </button>
            <button
              type="button"
              onClick={() => onSelect(null)}
              className="pill pill-ghost"
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <button
          type="button"
          onClick={() => setPickerOpen(true)}
          className="flex flex-1 flex-col items-center justify-center gap-3 rounded-2xl border-2 border-dashed border-line px-6 py-12 text-mute hover:border-ink hover:text-ink hover:bg-bg-soft/50 transition-colors"
        >
          <span className="inline-flex items-center justify-center h-12 w-12 rounded-full bg-bg-soft text-ink">
            <Plus className="h-5 w-5" />
          </span>
          <span className="font-display font-bold text-base text-ink">Pick a card</span>
          <span className="text-xs text-mute">
            Choose from {cards.length} reviewed cards
          </span>
        </button>
      )}

      {pickerOpen && (
        <CardPickerModal
          cards={cards}
          excludeSlugs={otherSelected}
          onClose={() => setPickerOpen(false)}
          onSelect={(s) => {
            onSelect(s);
            setPickerOpen(false);
          }}
        />
      )}
    </div>
  );
}

// ---------- Picker modal ----------

type CategoryFilter = "all" | SyntheticCategory;

const CATEGORY_FILTERS: { value: CategoryFilter; label: string }[] = [
  { value: "all", label: "All" },
  ...SYNTHETIC_CATEGORIES.map((c) => ({ value: c, label: CATEGORY_LABEL[c] })),
];

function CardPickerModal({
  cards,
  excludeSlugs,
  onClose,
  onSelect,
}: {
  cards: CardData[];
  excludeSlugs: string[];
  onClose: () => void;
  onSelect: (slug: string) => void;
}) {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState<CategoryFilter>("all");

  // Esc closes
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Lock body scroll while open
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    return cards
      .filter((c) => {
        if (filter === "all") return true;
        return cardCategories(c).includes(filter);
      })
      .filter((c) => {
        if (!q) return true;
        return (
          c.name.toLowerCase().includes(q) ||
          c.issuer.toLowerCase().includes(q) ||
          fullCardName(c).toLowerCase().includes(q)
        );
      })
      .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  }, [cards, search, filter]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-ink/60 backdrop-blur-sm p-4 md:p-8 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Pick a card to compare"
    >
      <div
        className="my-auto w-full max-w-3xl rounded-3xl bg-bg border border-line shadow-[var(--shadow-pop)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Sticky header */}
        <div className="sticky top-0 z-10 bg-bg border-b border-line p-5">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <span className="chip chip-violet mb-2">Pick a card</span>
              <h2 className="font-display font-extrabold text-xl tracking-tight">
                Choose a card to compare
              </h2>
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close picker"
              className="rounded-full p-1.5 text-mute hover:bg-bg-soft hover:text-ink transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-mute" />
            <input
              type="text"
              autoFocus
              placeholder="Search by card name or issuer"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full bg-bg-soft border border-line pl-9 pr-4 py-2.5 text-sm text-ink placeholder:text-mute focus:outline-none focus:border-ink"
            />
          </div>

          <div className="mt-3 flex flex-wrap gap-2">
            {CATEGORY_FILTERS.map((cat) => {
              const active = filter === cat.value;
              return (
                <button
                  key={cat.value}
                  type="button"
                  onClick={() => setFilter(cat.value)}
                  className={`inline-flex items-center px-3 py-1.5 rounded-full text-[12px] font-medium border transition-colors duration-150 ${
                    active
                      ? "bg-ink text-bg border-ink"
                      : "bg-bg-soft text-ink-soft border-line hover:border-ink"
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Results */}
        <div className="p-5 max-h-[60vh] overflow-y-auto">
          {filtered.length === 0 ? (
            <div className="text-center py-12">
              <div className="font-display font-bold text-base mb-1">No cards match</div>
              <div className="text-mute text-sm">
                Try a different search or pick a different category.
              </div>
            </div>
          ) : (
            <ul className="divide-y divide-line">
              {filtered.map((c) => {
                const disabled = excludeSlugs.includes(c.slug);
                return (
                  <li key={c.slug}>
                    <button
                      type="button"
                      disabled={disabled}
                      onClick={() => onSelect(c.slug)}
                      className={`w-full flex items-center gap-4 py-3 text-left transition-colors ${
                        disabled
                          ? "opacity-40 cursor-not-allowed"
                          : "hover:bg-bg-soft rounded-xl px-2 -mx-2"
                      }`}
                    >
                      <div className="shrink-0">
                        <CardArt card={c} width={80} />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="text-[11px] font-mono uppercase tracking-wider text-mute">
                          {c.issuer}
                        </div>
                        <div className="font-display font-semibold text-sm tracking-tight truncate">
                          {c.name}
                        </div>
                        <div className="text-xs text-mute mt-0.5 line-clamp-1">
                          {topRewardRate(c)}
                        </div>
                      </div>
                      <div className="shrink-0 text-right">
                        <div className="font-mono tabular text-xs font-semibold text-ink">
                          {formatAnnualFee(c.annual_fee)}
                        </div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-mute">
                          {disabled ? "Already picked" : "annual fee"}
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

// ---------- Comparison table ----------

type Direction = "highest" | "lowest";

type ComparableRow = {
  label: string;
  render: (c: CardData) => string;
  extract: (c: CardData) => number | null;
  direction: Direction;
};

type InfoRow = {
  label: string;
  render: (c: CardData) => string;
};

const COMPARABLE_ROWS: ComparableRow[] = [
  {
    label: "Fintiex rating",
    render: (c) => `${(c.rating ?? 0).toFixed(1)} / 5`,
    extract: (c) => c.rating ?? 0,
    direction: "highest",
  },
  {
    label: "Annual fee",
    render: (c) => formatAnnualFee(c.annual_fee),
    extract: (c) => c.annual_fee,
    direction: "lowest",
  },
  {
    label: "Signup bonus value",
    render: (c) =>
      c.signup_bonus_value_usd ? formatUSD(c.signup_bonus_value_usd) : "None",
    extract: (c) => c.signup_bonus_value_usd ?? 0,
    direction: "highest",
  },
  {
    label: "Bonus spend required",
    render: (c) =>
      c.signup_bonus_spend ? `${formatUSD(c.signup_bonus_spend)} in 3 mo` : "None",
    extract: (c) => c.signup_bonus_spend ?? Number.POSITIVE_INFINITY,
    direction: "lowest",
  },
  {
    label: "Purchase APR",
    render: (c) => formatAprRange(c.apr_purchase),
    extract: (c) => c.apr_purchase?.min ?? 0,
    direction: "lowest",
  },
  {
    label: "Intro APR",
    render: (c) =>
      c.apr_intro === 0 && c.apr_intro_months > 0
        ? `0% for ${c.apr_intro_months} mo`
        : "None",
    extract: (c) => (c.apr_intro === 0 ? c.apr_intro_months ?? 0 : 0),
    direction: "highest",
  },
  {
    label: "Balance transfer APR",
    render: (c) => formatAprRange(c.apr_balance_transfer),
    extract: (c) => c.apr_balance_transfer?.min ?? 0,
    direction: "lowest",
  },
  {
    label: "Balance transfer fee",
    render: (c) => formatFeePct(c.balance_transfer_fee),
    extract: (c) => c.balance_transfer_fee ?? 0,
    direction: "lowest",
  },
  {
    label: "Foreign transaction fee",
    render: (c) => formatFeePct(c.foreign_tx_fee),
    extract: (c) => c.foreign_tx_fee ?? 0,
    direction: "lowest",
  },
  {
    label: "Cash advance APR",
    render: (c) => formatPct(c.apr_cash_advance),
    extract: (c) => c.apr_cash_advance ?? 0,
    direction: "lowest",
  },
  {
    label: "Min credit score",
    render: (c) => String(c.credit_score_required?.min ?? 0),
    extract: (c) => c.credit_score_required?.min ?? 0,
    direction: "lowest",
  },
];

const INFO_ROWS: InfoRow[] = [
  {
    label: "Top reward",
    render: (c) => topRewardRate(c),
  },
  {
    label: "Network",
    render: (c) => c.network,
  },
  {
    label: "Issuer",
    render: (c) => c.issuer,
  },
];

function ComparisonTable({ cards }: { cards: (CardData | null)[] }) {
  const filled = cards.filter((c): c is CardData => Boolean(c));
  if (filled.length < 2) return null;

  function winnerSlug(row: ComparableRow): string | null {
    const values = filled.map((c) => ({ slug: c.slug, value: row.extract(c) }));
    const allSame = values.every((v) => v.value === values[0]!.value);
    if (allSame) return null;
    // Filter out null values
    const valid = values.filter(
      (v): v is { slug: string; value: number } =>
        v.value != null && Number.isFinite(v.value),
    );
    if (valid.length === 0) return null;
    const target =
      row.direction === "lowest"
        ? Math.min(...valid.map((v) => v.value))
        : Math.max(...valid.map((v) => v.value));
    // For "highest" rows, do not crown a zero (e.g. no signup bonus) as winner
    if (row.direction === "highest" && target <= 0) return null;
    return valid.find((v) => v.value === target)?.slug ?? null;
  }

  return (
    <div>
      {/* Header row */}
      <div className="mb-6">
        <span className="chip chip-lime mb-3">Side by side</span>
        <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight">
          The comparison.
        </h2>
        <p className="text-mute mt-2 text-sm">
          Best value in each row is tagged in lime. Rows with no clear winner stay neutral.
        </p>
      </div>

      <div className="card-flush overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-line">
                <th
                  scope="col"
                  className="text-left bg-bg-soft px-4 py-4 font-mono text-[10px] uppercase tracking-wider text-mute"
                  style={{ width: 200, minWidth: 200 }}
                >
                  Spec
                </th>
                {cards.map((c, i) => (
                  <th
                    key={i}
                    scope="col"
                    className="text-left border-l border-line px-4 py-4"
                    style={{ minWidth: 240 }}
                  >
                    {c ? (
                      <div className="flex flex-col gap-2">
                        <CardArt card={c} width={140} />
                        <div>
                          <div className="text-[10px] font-mono uppercase tracking-wider text-mute">
                            {c.issuer}
                          </div>
                          <Link
                            href={`/credit-cards/${c.slug}`}
                            className="u-link font-display font-bold text-base tracking-tight leading-tight"
                          >
                            {c.name}
                          </Link>
                        </div>
                      </div>
                    ) : (
                      <span className="text-mute text-xs">Empty slot</span>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARABLE_ROWS.map((row) => {
                const winner = winnerSlug(row);
                return (
                  <tr key={row.label} className="border-b border-line-soft last:border-0">
                    <th
                      scope="row"
                      className="text-left bg-bg-soft/50 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-mute align-top"
                    >
                      {row.label}
                    </th>
                    {cards.map((c, i) => {
                      const isWinner = c && winner === c.slug;
                      return (
                        <td
                          key={i}
                          className={`border-l border-line align-top px-4 py-3 ${
                            isWinner ? "bg-lime/20" : ""
                          }`}
                        >
                          {c ? (
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="font-display font-semibold text-[15px] tabular">
                                {row.render(c)}
                              </span>
                              {isWinner && (
                                <span className="chip chip-lime">Best</span>
                              )}
                            </div>
                          ) : (
                            <span className="text-mute">-</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>
                );
              })}
              {INFO_ROWS.map((row) => (
                <tr key={row.label} className="border-b border-line-soft last:border-0">
                  <th
                    scope="row"
                    className="text-left bg-bg-soft/50 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-mute align-top"
                  >
                    {row.label}
                  </th>
                  {cards.map((c, i) => (
                    <td
                      key={i}
                      className="border-l border-line align-top px-4 py-3"
                    >
                      {c ? (
                        <span className="font-display font-semibold text-[15px]">
                          {row.render(c)}
                        </span>
                      ) : (
                        <span className="text-mute">-</span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}

              {/* Rewards detail block */}
              <RewardsRow cards={cards} />

              {/* Apply CTA row */}
              <tr>
                <th
                  scope="row"
                  className="text-left bg-bg-soft/50 px-4 py-4 font-mono text-[10px] uppercase tracking-wider text-mute align-top"
                >
                  Ready to apply
                </th>
                {cards.map((c, i) => (
                  <td key={i} className="border-l border-line px-4 py-4 align-top">
                    {c ? (
                      <a
                        href={c.application_url}
                        target="_blank"
                        rel="nofollow noopener noreferrer"
                        className="pill pill-lime"
                      >
                        Apply at {c.issuer}
                        <span aria-hidden>↗</span>
                      </a>
                    ) : (
                      <span className="text-mute">-</span>
                    )}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function RewardsRow({ cards }: { cards: (CardData | null)[] }) {
  return (
    <tr className="border-b border-line-soft last:border-0">
      <th
        scope="row"
        className="text-left bg-bg-soft/50 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-mute align-top"
      >
        Top rewards
      </th>
      {cards.map((c, i) => (
        <td key={i} className="border-l border-line align-top px-4 py-3">
          {c ? <RewardsList card={c} /> : <span className="text-mute">-</span>}
        </td>
      ))}
    </tr>
  );
}

function RewardsList({ card }: { card: CardData }) {
  const entries = bestRewardEntries(card)
    .filter((e) => e.value > 0)
    .slice(0, 4);
  const unit = card.rewards_type === "cashback" ? "%" : "x";
  if (entries.length === 0) {
    return <span className="text-mute text-sm">No rewards program</span>;
  }
  return (
    <ul className="space-y-1 text-sm">
      {entries.map((e) => (
        <li key={e.key} className="flex items-baseline gap-2">
          <span className="font-mono tabular font-semibold text-ink">
            {e.value}
            {unit}
          </span>
          <span className="text-mute capitalize">{e.label}</span>
        </li>
      ))}
    </ul>
  );
}
