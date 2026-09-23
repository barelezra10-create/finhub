import Link from "next/link";
import { cardComparisons } from "@/lib/card-comparisons";
export function CardComparisonLinks({ category, cardSlug }: { category?: string; cardSlug?: string }) {
  const comparisons = cardComparisons.filter(c => (!category || c.category === category) && (!cardSlug || (c.cards as readonly string[]).includes(cardSlug)));
  if (!comparisons.length) return null;
  return <section className="max-w-(--max-w-page) mx-auto px-6 py-10"><h2 className="font-display text-2xl font-bold mb-5">Compare specific cards</h2><div className="grid md:grid-cols-2 gap-4">{comparisons.map(c => <Link className="card block p-6" key={c.slug} href={`/credit-cards/compare/${c.slug}`}><h3 className="text-lg font-bold mb-2">{c.title}</h3><p className="text-sm text-mute">{c.description}</p></Link>)}</div></section>;
}
