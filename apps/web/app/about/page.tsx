import Link from "next/link";
import type { Metadata } from "next";
import { BreadcrumbListSchema } from "@/components/schemas";

export const metadata: Metadata = {
  title: "About Fintiex | Fintiex",
  description:
    "Fintiex is a personal finance hub built like Bankrate without the email walls, popups, or pay-to-play rankings. Here is who we are and how we make money.",
  alternates: { canonical: "/about" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "About", href: "/about" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-16">
          <span className="chip chip-lime mb-6">
            <span className="pulse-dot" /> About Fintiex
          </span>
          <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            A personal finance hub that respects your time.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl mb-8">
            Fintiex is what Bankrate would look like if it were rebuilt in 2026, by people who actually use the tools. Daily rate updates, free calculators, and editorial that does not waste your scroll. No email walls. No popups. No sponsored rankings dressed up as recommendations.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators" className="pill pill-ink">
              Try the calculators
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/mortgages" className="pill pill-ghost">
              See today&rsquo;s rates
            </Link>
          </div>
        </div>
      </section>

      {/* WHO WE ARE */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Who we are</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                A small team trying to fix a big category.
              </h2>
              <p className="text-mute leading-relaxed">
                Personal finance media has spent a decade trading reader trust for ad revenue. We thought someone should try the opposite.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-6 text-base leading-relaxed">
              <p className="text-mute">
                Fintiex is built and maintained by Fintiex Editorial: a small group of writers, engineers, and operators who got tired of opening a mortgage calculator and being asked for an email address before the result would render. We started Fintiex to do the boring thing well: publish the actual numbers, show the math, and update the rates daily.
              </p>
              <p className="text-mute">
                We do not have celebrity columnists. We do not run influencer takeovers. We are not selling a course. The thing we are selling is a website that does what it says, fast, on your phone, without making you sign up for anything. If that sounds low-bar, look at the rest of the category.
              </p>
              <p className="text-mute">
                Our coverage spans mortgages, savings accounts, CDs, personal loans, credit cards, and the calculators that connect them. Every page is built around a single question: what does the reader actually need to know to make a decision today?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* HOW WE MAKE MONEY */}
      <section className="bg-ink text-bg">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-8 mb-12">
            <div className="col-span-12 lg:col-span-6">
              <span className="chip chip-lime mb-4">How we make money</span>
              <h2 className="font-display font-extrabold text-4xl md:text-5xl tracking-tight leading-[1.05]">
                Affiliate links. That is the whole business.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-6 flex items-end">
              <p className="text-white/55 text-lg leading-relaxed">
                When you click through to a lender or bank from a Fintiex page and open an account, we sometimes earn a referral fee. That commission never affects which products appear in our rankings or how they are ordered.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-ink-soft border border-white/10 rounded-2xl p-6">
              <div className="text-2xl mb-3">{"~"}</div>
              <div className="font-display font-bold text-base mb-2 leading-snug">
                Rankings are editorial
              </div>
              <div className="text-sm text-white/55">
                Our top picks are chosen by editors using public data: APY, fees, minimums, app quality. A higher commission does not move a product up the page.
              </div>
            </div>
            <div className="bg-ink-soft border border-white/10 rounded-2xl p-6">
              <div className="text-2xl mb-3">{"$"}</div>
              <div className="font-display font-bold text-base mb-2 leading-snug">
                Some links earn a commission
              </div>
              <div className="text-sm text-white/55">
                We may earn a referral fee when you open an account through certain product links. That cost is paid by the lender, not by you. Pricing on the partner site is identical to a direct visit.
              </div>
            </div>
            <div className="bg-ink-soft border border-white/10 rounded-2xl p-6">
              <div className="text-2xl mb-3">{"x"}</div>
              <div className="font-display font-bold text-base mb-2 leading-snug">
                No paid placement
              </div>
              <div className="text-sm text-white/55">
                We do not accept payment for inclusion in rate tables, calculators, or guides. If a product is listed, it earned its way in. If it is missing, no amount of money brings it back.
              </div>
            </div>
          </div>

          <p className="mt-10 text-white/55 text-sm leading-relaxed max-w-3xl">
            Plain-English version: lenders and banks pay us when you sign up, the same way travel sites get paid when you book a flight. The fee is baked into their marketing budget. We disclose this on every page that contains affiliate links because we think you should know.
          </p>
        </div>
      </section>

      {/* EDITORIAL STANDARDS */}
      <section className="bg-bg-soft/60 border-y border-line">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-20">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-4">
              <span className="chip chip-mute mb-4">Editorial standards</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
                Where the numbers come from.
              </h2>
              <p className="text-mute leading-relaxed">
                Every rate, average, and threshold on the site traces back to a primary source. We do not aggregate aggregators.
              </p>
            </div>
            <div className="col-span-12 lg:col-span-8 space-y-8 text-base leading-relaxed">
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Daily rate updates</h3>
                <p className="text-mute">
                  Mortgage and refinance rates are pulled and refreshed every business day. Savings account, CD, and personal loan rates are updated weekly or whenever a partner publishes a change. Each rate table shows its last-updated timestamp at the top of the page.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Primary sources we cite</h3>
                <p className="text-mute mb-3">
                  When we reference a market average or a regulatory threshold, the data comes from one of these sources. We link to them inline so you can verify any number we publish.
                </p>
                <ul className="space-y-2 text-mute">
                  <li className="flex gap-3">
                    <span className="font-mono text-lime-deep font-bold mt-0.5">FM</span>
                    <span><strong className="text-ink">Freddie Mac</strong> Primary Mortgage Market Survey for the weekly 30-year and 15-year fixed averages.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-lime-deep font-bold mt-0.5">FDIC</span>
                    <span><strong className="text-ink">FDIC</strong> for national deposit rate caps, savings account averages, and CD averages.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-lime-deep font-bold mt-0.5">CFPB</span>
                    <span><strong className="text-ink">Consumer Financial Protection Bureau</strong> for disclosure rules, complaint data, and APR definitions.</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="font-mono text-lime-deep font-bold mt-0.5">FED</span>
                    <span><strong className="text-ink">Federal Reserve</strong> H.15 release for Treasury yields, the federal funds rate, and historical series.</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">Corrections policy</h3>
                <p className="text-mute">
                  If we publish something wrong, we fix it and note the correction at the bottom of the page with the date. We do not silently edit numbers. If you spot an error, email feedback@fintiex.com and we will look at it the same day.
                </p>
              </div>
              <div>
                <h3 className="font-display font-bold text-xl mb-2 tracking-tight">No AI slop</h3>
                <p className="text-mute">
                  We use AI tools to help research and draft. Every published article is reviewed and edited by a human before it goes live. We do not publish unedited model output, and we do not generate fake author bylines or synthetic headshots.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR TEAM */}
      <section className="max-w-(--max-w-page) mx-auto px-6 py-20">
        <div className="grid grid-cols-12 gap-10">
          <div className="col-span-12 lg:col-span-5">
            <span className="chip chip-mute mb-4">Our team</span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight mb-6">
              Fintiex Editorial.
            </h2>
            <p className="text-mute leading-relaxed">
              Most personal finance sites publish smiling stock photos next to AI-written articles. We thought we would skip both.
            </p>
          </div>
          <div className="col-span-12 lg:col-span-7 space-y-6 text-base leading-relaxed">
            <p className="text-mute">
              Fintiex is staffed by a small team of writers, engineers, and finance operators. We do not run fake bylines, we do not buy stock headshots, and we do not credit articles to people who do not exist. When you see &ldquo;By Fintiex Editorial&rdquo; at the top of a page, that means the work was researched, written, and reviewed by humans on our team.
            </p>
            <p className="text-mute">
              Over time, individual writers will sign their own work as they take on dedicated beats. Until then, the byline is collective and the standards are uniform: cite the source, show the math, write in plain English.
            </p>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="border-y border-line bg-bg-soft/60">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-16">
          <div className="grid grid-cols-12 gap-10">
            <div className="col-span-12 lg:col-span-5">
              <span className="chip chip-mute mb-4">Contact</span>
              <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight leading-tight">
                Found a bug. Found a typo. Found a wrong number.
              </h2>
            </div>
            <div className="col-span-12 lg:col-span-7 space-y-4 text-base leading-relaxed">
              <p className="text-mute">
                The fastest way to reach us is email. We read everything. We do not have a contact form because contact forms are where feedback goes to die.
              </p>
              <ul className="space-y-3 text-mute">
                <li>
                  <strong className="text-ink">General feedback, corrections, story ideas:</strong>{" "}
                  <a href="mailto:feedback@fintiex.com" className="u-link text-ink font-medium">feedback@fintiex.com</a>
                </li>
                <li>
                  <strong className="text-ink">Privacy and data requests:</strong>{" "}
                  <a href="mailto:privacy@fintiex.com" className="u-link text-ink font-medium">privacy@fintiex.com</a>
                </li>
                <li>
                  <strong className="text-ink">Legal and partnerships:</strong>{" "}
                  <a href="mailto:legal@fintiex.com" className="u-link text-ink font-medium">legal@fintiex.com</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA STRIP */}
      <section className="bg-lime border-y border-ink">
        <div className="max-w-(--max-w-page) mx-auto px-6 py-14 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl tracking-tight max-w-xl leading-tight">
              Stop reading about your finances. Start running the numbers.
            </h2>
            <p className="text-ink/70 mt-2">Ten free calculators. No signup. No email. Just the math.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link href="/calculators" className="pill pill-ink">
              Open the calculators
              <span aria-hidden>{"->"}</span>
            </Link>
            <Link href="/markets" className="pill pill-ghost">
              See the markets
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
