import "server-only";
import fs from "fs";
import path from "path";
import type { CardData, SyntheticCategory } from "./cards";
import { cardCategories } from "./cards";

const ROOT = path.join(process.cwd(), "data/cards");

let _cache: CardData[] | null = null;

export function loadCards(): CardData[] {
  if (_cache) return _cache;
  if (!fs.existsSync(ROOT)) return [];
  const files = fs.readdirSync(ROOT).filter((f) => f.endsWith(".json"));
  const cards = files.map(
    (f) => JSON.parse(fs.readFileSync(path.join(ROOT, f), "utf8")) as CardData,
  );
  cards.sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
  _cache = cards;
  return cards;
}

export function loadCard(slug: string): CardData | null {
  return loadCards().find((c) => c.slug === slug) ?? null;
}

export function cardsByCategory(category: SyntheticCategory): CardData[] {
  return loadCards().filter((c) => cardCategories(c).includes(category));
}

export function relatedCards(card: CardData, limit = 4): CardData[] {
  const cats = cardCategories(card);
  if (cats.length === 0) return [];
  const seen = new Set<string>([card.slug]);
  const picks: CardData[] = [];
  for (const cat of cats) {
    for (const other of cardsByCategory(cat)) {
      if (seen.has(other.slug)) continue;
      seen.add(other.slug);
      picks.push(other);
      if (picks.length >= limit) return picks;
    }
  }
  return picks;
}
