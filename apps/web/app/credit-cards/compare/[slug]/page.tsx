import Link from "next/link";
import { notFound } from "next/navigation";
import { cardComparisons, CARD_COMPARISON_DATE } from "@/lib/card-comparisons";
import { loadCard } from "@/lib/cards-server";
import { annualFeeLabel, cardTerm, fullCardName, topRewardRate, welcomeOffer } from "@/lib/cards";
import { CardArt } from "@/components/card-art";
import { BreadcrumbListSchema, FAQPageSchema } from "@/components/schemas";

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() { return cardComparisons.map(c => ({ slug: c.slug })); }
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const c = cardComparisons.find(c => c.slug === slug);
  if (!c) return {};
  return { title: c.title, description: c.description, alternates: { canonical: `/credit-cards/compare/${c.slug}` } };
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const c = cardComparisons.find(c => c.slug === slug);
  if (!c) notFound();
  const cards = c.cards.map(s => loadCard(s)!);
  const path = `/credit-cards/compare/${c.slug}`;
  const rows = [
    { label: "Annual fee", values: cards.map(card => annualFeeLabel(card)) },
    { label: "Rewards", values: cards.map(topRewardRate) },
    { label: "Welcome offer", values: cards.map(welcomeOffer) },
    { label: "Purchase APR", values: cards.map(card => cardTerm(card, "apr_purchase") || "—") },
  ];
  return <article className="max-w-(--max-w-page) mx-auto px-6 py-12">
    <BreadcrumbListSchema items={[{ name: "Home", href: "/" }, { name: "Credit cards", href: "/credit-cards" }, { name: "Compare", href: "/credit-cards/compare" }, { name: c.title, href: path }]} />
    <FAQPageSchema items={c.faqs.map(f => ({ ...f }))} />
    <Link className="u-link" href={`/credit-cards/${c.category}`}>Explore {c.category === "travel" ? "travel" : "cash-back"} cards</Link>
    <header className="max-w-4xl my-8"><span className="chip chip-lime mb-5">Card comparison</span><h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight">{c.title}</h1><p className="text-lg text-mute mt-6 leading-relaxed">{c.answer}</p><p className="text-sm text-mute mt-4">Fintiex · Analysis updated <time dateTime={CARD_COMPARISON_DATE}>{CARD_COMPARISON_DATE}</time> · Product facts have their own check dates below.</p></header>
    <div className="grid md:grid-cols-2 gap-6 my-10">{cards.map(card => <div className="card p-6" key={card.slug}><CardArt card={card} width={240}/><h2 className="text-xl font-bold mt-5">{fullCardName(card)}</h2><Link className="u-link inline-block mt-3" href={`/credit-cards/${card.slug}`}>Read fees, benefits and source notes →</Link></div>)}</div>
    <section aria-labelledby="comparison-heading"><h2 id="comparison-heading" className="font-display text-3xl font-bold mb-5">The main differences</h2><p className="md:hidden text-sm text-mute mb-3">Swipe the table sideways to compare both cards.</p><div className="overflow-x-auto border border-line rounded-2xl"><table className="w-full text-sm min-w-[620px]"><caption className="sr-only">{c.title}</caption><thead><tr><th scope="col" className="p-4 text-left">Feature</th>{cards.map(card => <th scope="col" className="p-4 text-left" key={card.slug}>{fullCardName(card)}</th>)}</tr></thead><tbody>{rows.map(row => <tr className="border-t border-line" key={row.label}><th scope="row" className="p-4 text-left align-top">{row.label}</th>{row.values.map((value,i) => <td key={i} className="p-4 align-top leading-relaxed">{value}</td>)}</tr>)}</tbody></table></div><p className="text-sm text-mute mt-4">Unknown terms remain unverified. Offers may vary by applicant; variable APRs can change. Read issuer disclosures before applying.</p></section>
    <section className="card p-7 my-10 max-w-4xl"><h2 className="font-display text-2xl font-bold mb-4">{c.example.heading}</h2><p className="leading-relaxed text-ink-soft">{c.example.text}</p></section>
    <div className="max-w-3xl space-y-10">{c.sections.map(section => <section key={section.heading}><h2 className="font-display text-2xl font-bold mb-4">{section.heading}</h2><p className="text-mute leading-relaxed">{section.text}</p></section>)}</div>
    <section className="my-12 max-w-3xl"><h2 className="font-display text-3xl font-bold mb-5">Common questions</h2>{c.faqs.map(f => <div className="my-6" key={f.question}><h3 className="font-bold text-xl">{f.question}</h3><p className="text-mute mt-2">{f.answer}</p></div>)}</section>
    <section className="border-t border-line py-8"><h2 className="font-display text-2xl font-bold mb-4">Sources and comparison method</h2><p className="max-w-3xl text-mute mb-4">We compare published issuer terms and show our calculation assumptions. We have not tested these accounts or assigned a universal points value. This comparison does not guarantee approval or identify one card as best for everyone.</p>{cards.map(card => <div key={card.slug} className="mb-4 text-sm"><a className="u-link" href={card.source_url || card.application_url} target="_blank" rel="noopener noreferrer">{fullCardName(card)} — issuer information</a><span className="text-mute"> · Base facts checked {card.source_checked || "date unavailable"}</span>{card.term_sources?.map((source,i) => <p key={i} className="mt-1"><a className="u-link" href={source.url} target="_blank" rel="noopener noreferrer">Additional source</a> · Checked {source.checked}</p>)}</div>)}<p><Link className="u-link" href="/editorial-policy">Editorial policy</Link></p><div className="flex flex-wrap gap-3 mt-6"><Link className="pill pill-ink" href={`/credit-cards/compare?${c.cards.map(slug => `c=${slug}`).join("&")}`}>Customize this comparison</Link><Link className="pill pill-ghost" href="/calculators/rewards-optimizer">Explore the rewards calculator</Link></div></section>
  </article>;
}
