import Link from "next/link";
import { loadListicles } from "@/lib/listicles";

export function CardDecisionGuides({ comparisonHref }: { comparisonHref: string }) {
  const guides = loadListicles().filter((guide) => guide.comparisonHref === comparisonHref);
  if (!guides.length) return null;

  return (
    <section className="max-w-(--max-w-page) mx-auto px-6 py-12 border-t border-line">
      <h2 className="font-display text-2xl font-bold mb-3">Work through the numbers</h2>
      <p className="text-mute mb-6">Use these guides to compare costs and benefits with your own budget.</p>
      <div className="grid sm:grid-cols-2 gap-4">
        {guides.map((guide) => (
          <Link key={guide.slug} href={`/best/${guide.slug}`} className="card p-6 block group">
            <h3 className="font-display font-bold text-lg mb-2 group-hover:text-violet">{guide.title}</h3>
            <p className="text-sm text-mute">{guide.description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
