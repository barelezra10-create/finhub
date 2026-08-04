import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { FAQPageSchema, BreadcrumbListSchema } from "@/components/schemas";
import { cdBanks, getCdBank } from "@/lib/cd-banks";

export function generateStaticParams() {
  return cdBanks.map((b) => ({ bank: b.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ bank: string }> }
): Promise<Metadata> {
  const { bank: slug } = await params;
  const bank = getCdBank(slug);
  if (!bank) return { title: "Bank not found" };
  return {
    title: bank.metaTitle,
    description: bank.metaDesc,
    alternates: { canonical: `/savings/cds/${slug}` },
  };
}

export default async function CdBankPage(
  { params }: { params: Promise<{ bank: string }> }
) {
  const { bank: slug } = await params;
  const bank = getCdBank(slug);
  if (!bank) notFound();

  return (
    <>
      <FAQPageSchema items={bank.faqs.map((f) => ({ question: f.question, answer: f.answer }))} />
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Savings", href: "/savings" },
          { name: "CDs", href: "/savings/cds" },
          { name: bank.name, href: `/savings/cds/${slug}` },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-14">
          <span className="chip chip-violet mb-6">{bank.chip}</span>
          <h1 className="font-display font-extrabold text-[clamp(2.25rem,5.5vw,4.25rem)] leading-[1.04] tracking-[-0.03em] mb-4">
            {bank.h1}
          </h1>
          <span className="text-mute text-sm block mb-6">
            Updated August 2026 · By the Fintiex Rate Desk
          </span>
          <div className="max-w-2xl space-y-4">
            {bank.intro.map((p, i) => (
              <p key={i} className="text-lg text-mute leading-relaxed">
                {p}
              </p>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 mt-8">
            <Link href="/savings/cds" className="pill pill-ink">
              Compare top CD rates
              <span aria-hidden>→</span>
            </Link>
            <Link href="/savings/hysa" className="pill pill-ghost">
              See high-yield savings instead
            </Link>
          </div>
        </div>
      </section>

      {/* RATE TABLE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <div className="grid grid-cols-12 gap-8 mb-8">
          <div className="col-span-12 md:col-span-7">
            <span className="chip chip-mute mb-4">Rates by term</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
              {bank.name} CD rates
            </h2>
          </div>
          <div className="col-span-12 md:col-span-5 flex md:items-end md:justify-end">
            <p className="text-mute leading-relaxed md:text-right md:max-w-sm text-sm">
              {bank.kind === "brokered"
                ? "Brokered CDs issued by partner FDIC-insured banks."
                : "Traditional bank CDs opened directly with the institution."}{" "}
              Minimum deposit: {bank.minDeposit}.
            </p>
          </div>
        </div>

        <div className="card-flush overflow-hidden">
          <div className="grid grid-cols-12 px-6 py-3 text-xs font-mono uppercase tracking-wider text-mute border-b border-line bg-bg-soft/50">
            <div className="col-span-7">Term</div>
            <div className="col-span-5 text-right">APY</div>
          </div>
          {bank.rateRows.map((r, i) => (
            <div
              key={r.term}
              className={`grid grid-cols-12 px-6 py-4 items-center ${
                i === bank.rateRows.length - 1 ? "" : "border-b border-line-soft"
              }`}
            >
              <div className="col-span-7 font-medium">{r.term}</div>
              <div className="col-span-5 text-right font-display font-bold tabular">{r.apy}</div>
            </div>
          ))}
        </div>
        <p className="text-xs text-mute mt-3 font-mono">
          Rates as of {bank.ratesAsOf}. {bank.ratesNote}
        </p>
      </section>

      {/* HOW THEY COMPARE */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-10">
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-5">
          How {bank.name} CD rates compare
        </h2>
        <div className="max-w-3xl space-y-4">
          {bank.compare.map((p, i) => (
            <p key={i} className="text-mute leading-relaxed">
              {p}
            </p>
          ))}
        </div>
      </section>

      {/* WATCH OUT */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-6">
        <div className="card-flush p-8">
          <h2 className="font-display font-bold text-xl tracking-tight mb-3">
            Before you open: the fine print
          </h2>
          <p className="text-mute leading-relaxed max-w-3xl">{bank.watchOut}</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-12">
        <h2 className="font-display font-extrabold text-3xl tracking-tight mb-8">
          {bank.name} CD questions, answered
        </h2>
        <div className="space-y-8 max-w-3xl">
          {bank.faqs.map((f) => (
            <div key={f.question}>
              <h3 className="font-display font-bold text-lg tracking-tight mb-2">{f.question}</h3>
              <p className="text-mute leading-relaxed">{f.answer}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NEXT STEP */}
      <section className="max-w-(--max-w-page) mx-auto px-6 pb-16">
        <div className="card-flush p-8">
          <h2 className="font-display font-bold text-xl tracking-tight mb-3">Next step</h2>
          <p className="text-mute leading-relaxed max-w-3xl mb-5">
            Before locking any CD, spend two minutes comparing the term you want against the
            current national leaders. If you need the money to stay liquid, a top high-yield
            savings account may serve you better than a short CD.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/savings/cds" className="pill pill-ink">
              Compare CD rates
              <span aria-hidden>→</span>
            </Link>
            <Link href="/savings/hysa" className="pill pill-ghost">
              Best high-yield savings
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
