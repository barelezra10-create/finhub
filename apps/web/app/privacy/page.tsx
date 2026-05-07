import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbListSchema } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Privacy Policy | Fintiex",
  description:
    "How Fintiex handles your data. We do not collect emails in calculators, we do not sell personal data, and we keep our analytics footprint deliberately small.",
  alternates: { canonical: "/privacy" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Privacy", href: "/privacy" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-1" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-12">
          <span className="chip chip-mute mb-6">Privacy Policy</span>
          <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            What we collect. What we do not. In plain English.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl">
            Fintiex is built around a simple promise: the calculators do not ask for your email, the rate tables do not pop up newsletter modals, and we do not sell your personal data. This page is the long version of that promise.
          </p>
          <p className="text-sm text-mute mt-6 font-mono">Effective date: May 7, 2026</p>
        </div>
      </section>

      {/* BODY */}
      <article className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-base text-mute leading-relaxed mb-6">
            This Privacy Policy explains what information Fintiex (&ldquo;Fintiex,&rdquo; &ldquo;we,&rdquo; &ldquo;us&rdquo;) collects when you visit fintiex.com, how we use it, who we share it with, and what choices you have. It applies to the website and any subdomain we operate. It does not apply to third-party sites we link to, even if you arrive there from a Fintiex page.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            1. Data we collect
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            We collect very little. Here is the full list, top to bottom.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">Information you choose to send us</h3>
          <p className="text-mute leading-relaxed mb-4">
            If you email us at feedback@fintiex.com, privacy@fintiex.com, or legal@fintiex.com, we receive your email address and whatever you put in the message. We use that information to reply to you and, where appropriate, to fix the issue you reported. We do not add you to a marketing list. We do not sign you up for a newsletter. The email lives in our inbox the same way any email does.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">Calculator inputs</h3>
          <p className="text-mute leading-relaxed mb-4">
            The numbers you type into a Fintiex calculator (loan amount, rate, term, balance, and so on) are processed entirely in your browser. They are not sent to a server, they are not stored in a database, and they are not associated with you. Close the tab and the inputs are gone. We may add an opt-in local-storage feature in a future version so your last inputs persist across visits, but that data would never leave your device.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">Analytics data</h3>
          <p className="text-mute leading-relaxed mb-4">
            We use privacy-respecting analytics to understand which pages get traffic, which calculators get used, and where errors occur. The analytics collect: page URLs, referrer URL, anonymized IP, country, browser and device type, and screen size. They do not collect your name, your email, your exact location, or anything you typed into a calculator. We do not run cross-site tracking pixels, ad pixels, or any third-party advertising tags.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">Server logs</h3>
          <p className="text-mute leading-relaxed mb-4">
            Our hosting providers keep standard server logs (timestamp, request URL, response code, IP, user agent) for security and abuse prevention. These rotate out on the providers&rsquo; default schedule, typically 30 days, and we only access them when investigating an incident.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            2. Cookies and similar technologies
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Fintiex uses cookies and equivalent storage mechanisms (localStorage, sessionStorage) for two purposes only:
          </p>
          <ul className="space-y-3 mb-6 text-mute">
            <li className="flex gap-3">
              <span className="font-mono text-lime-deep font-bold mt-0.5">01</span>
              <span><strong className="text-ink">Analytics:</strong> a single first-party analytics cookie or anonymous identifier that helps us count unique visits and detect bots. It does not track you across other sites.</span>
            </li>
            <li className="flex gap-3">
              <span className="font-mono text-lime-deep font-bold mt-0.5">02</span>
              <span><strong className="text-ink">Preferences:</strong> small bits of storage that remember your interface preferences (light/dark, calculator defaults). These never leave your device.</span>
            </li>
          </ul>
          <p className="text-mute leading-relaxed mb-4">
            We do not use advertising cookies, conversion pixels, social-media tracking, or third-party retargeting tags. Most browsers let you block cookies in settings. Blocking ours will not break the site.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            3. Third-party services
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Running a website in 2026 means relying on a small set of infrastructure vendors. Here are the ones who can see traffic data on our behalf:
          </p>
          <ul className="space-y-3 mb-6 text-mute">
            <li>
              <strong className="text-ink">Cloudflare:</strong> CDN, DNS, and DDoS protection. Cloudflare sees IP addresses and basic request metadata. It is bound by its own privacy terms.
            </li>
            <li>
              <strong className="text-ink">Vercel and Railway:</strong> hosting providers for parts of the application. They see server logs as described above.
            </li>
            <li>
              <strong className="text-ink">Privacy-respecting analytics provider:</strong> the analytics platform we use does not build cross-site profiles and does not sell data.
            </li>
            <li>
              <strong className="text-ink">Email provider:</strong> our inbox host (for example, Google Workspace) processes any email you send to a Fintiex address.
            </li>
          </ul>
          <p className="text-mute leading-relaxed mb-4">
            We do not share Fintiex traffic data with advertisers, data brokers, lead-generation networks, or anyone else who would use it for marketing. If you click an affiliate link to a partner site, the partner sets its own cookies and runs its own tracking. That is governed by its policy, not ours.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            4. We do not sell personal data
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Fintiex does not sell, rent, or trade personal information. We do not participate in the data-broker ecosystem. We do not run an audience-syndication network. The only money that changes hands related to our visitors is the affiliate referral fee a partner pays us when you open an account through one of our links, and that transaction does not include any personal information about you. The partner already has your information because you signed up with them directly.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            5. Your rights
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Depending on where you live, you may have legal rights over your personal data. We honor these requests regardless of jurisdiction because they are easy to handle and because it is the right thing to do.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">If you live in California (CCPA / CPRA)</h3>
          <p className="text-mute leading-relaxed mb-4">
            You have the right to know what personal information we hold, request deletion, request correction, and opt out of any sale or sharing of personal information. Since we do not sell or share personal information for cross-context behavioral advertising, the opt-out is effectively automatic, but you can confirm it by emailing us.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">If you live in the EEA, UK, or Switzerland (GDPR)</h3>
          <p className="text-mute leading-relaxed mb-4">
            You have the right to access, rectify, erase, restrict processing, and port your personal data, plus the right to object to processing and the right to lodge a complaint with your local data protection authority. Our lawful basis for processing analytics and server logs is legitimate interest in operating a secure website. Our basis for processing email correspondence is your consent and our legitimate interest in responding.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">How to make a request</h3>
          <p className="text-mute leading-relaxed mb-4">
            Email <a href="mailto:privacy@fintiex.com" className="u-link text-ink font-medium">privacy@fintiex.com</a> with the type of request and any context that helps us find your data. We aim to respond within 30 days. We may need to verify your identity before fulfilling deletion or access requests, especially if the request relates to email correspondence.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            6. Children
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Fintiex is intended for adults making personal-finance decisions. We do not knowingly collect personal information from children under 13. If you believe a child has sent us information, email privacy@fintiex.com and we will delete it.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            7. Security
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            We use TLS for every connection to fintiex.com. Our hosting providers run standard infrastructure protections. Because we collect so little personal data in the first place, the blast radius of any incident is small by design. The biggest piece of personal data we hold is the contents of email correspondence with readers, which lives inside a standard business email host.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            8. Changes to this policy
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            If we change this policy in a material way, we will update the effective date at the top and post a notice on the homepage for at least 30 days. Editorial cleanups, typo fixes, and clarifications can happen at any time without notice.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            9. Contact
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            For privacy questions, data requests, or anything related to this policy, email{" "}
            <a href="mailto:privacy@fintiex.com" className="u-link text-ink font-medium">privacy@fintiex.com</a>. For other inquiries, see the addresses listed on our{" "}
            <Link href="/about" className="u-link text-ink font-medium">about page</Link>.
          </p>

          <div className="border-t border-line mt-16 pt-8">
            <p className="text-sm font-mono text-mute">Effective date: May 7, 2026</p>
            <p className="text-sm text-mute mt-2">
              Questions about this policy? Email{" "}
              <a href="mailto:privacy@fintiex.com" className="u-link text-ink font-medium">privacy@fintiex.com</a>.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
