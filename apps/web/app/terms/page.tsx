import type { Metadata } from "next";
import Link from "next/link";
import { BreadcrumbListSchema } from "@/components/schemas";

export const metadata: Metadata = {
  title: "Terms of Service | Fintiex",
  description:
    "The rules for using Fintiex: educational content only, not financial advice, rates change, verify with the lender, and the standard intellectual property and liability terms.",
  alternates: { canonical: "/terms" },
};

export default function Page() {
  return (
    <>
      <BreadcrumbListSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Terms", href: "/terms" },
        ]}
      />

      {/* HERO */}
      <section className="relative overflow-hidden bg-bg">
        <div className="hero-blob hero-blob-2" />
        <div className="relative max-w-(--max-w-page) mx-auto px-6 pt-20 pb-12">
          <span className="chip chip-mute mb-6">Terms of Service</span>
          <h1 className="font-display font-extrabold text-[clamp(2rem,5vw,4rem)] leading-[1.02] tracking-[-0.03em] mb-6 max-w-3xl">
            The rules for using Fintiex.
          </h1>
          <p className="text-lg md:text-xl text-mute leading-relaxed max-w-2xl">
            We tried to write this in plain English. The short version: Fintiex publishes financial information for education, not personalized advice. Rates change. Verify before you sign anything. Beyond that, the standard housekeeping below.
          </p>
          <p className="text-sm text-mute mt-6 font-mono">Effective date: May 7, 2026</p>
        </div>
      </section>

      {/* BODY */}
      <article className="max-w-(--max-w-page) mx-auto px-6 py-16">
        <div className="max-w-3xl">
          <p className="text-base text-mute leading-relaxed mb-6">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your use of fintiex.com and any related Fintiex service (collectively, the &ldquo;Service&rdquo;). The Service is provided by Fintiex (&ldquo;Fintiex,&rdquo; &ldquo;we,&rdquo; or &ldquo;us&rdquo;). Read these carefully. By using the Service you agree to them.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            1. Acceptance of terms
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            By accessing Fintiex, browsing any page, using a calculator, or following an affiliate link, you agree to be bound by these Terms and by our{" "}
            <Link href="/privacy" className="u-link text-ink font-medium">Privacy Policy</Link>. If you do not agree, do not use the Service. We may update these Terms over time. The current version is always at fintiex.com/terms with the effective date at the top. Continued use of the Service after a change means you accept the new Terms.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            2. Educational content, not financial advice
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Everything published on Fintiex is for general informational and educational purposes. It is not personalized financial, investment, tax, accounting, or legal advice, and it is not a recommendation to buy, sell, or hold any financial product. Your situation has details we cannot see. Before making a decision that affects your money, talk to a licensed professional who can review your full picture.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">No fiduciary relationship</h3>
          <p className="text-mute leading-relaxed mb-4">
            Reading Fintiex does not create a client, fiduciary, advisory, or professional relationship between you and us. We are a publisher.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">Calculator outputs are estimates</h3>
          <p className="text-mute leading-relaxed mb-4">
            The numbers our calculators produce are mathematical estimates based on the inputs you provide and the standard formulas listed alongside each tool. Actual lender or bank offers depend on your credit profile, income, location, fees, taxes, and terms that calculators cannot capture. Treat calculator outputs as a starting point, not as a final price.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            3. Accuracy and rate changes
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            We work hard to keep rates, fees, and product details accurate. We update them on the schedule described on our{" "}
            <Link href="/about" className="u-link text-ink font-medium">about page</Link>. Even so, financial product terms move quickly. Lenders change rates intraday. Banks adjust APYs without notice. Promotional offers expire. Always verify the current rate, fee, minimum, and APR with the lender or bank directly before applying. If you find a discrepancy, email feedback@fintiex.com and we will fix it.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            4. Affiliate disclosure
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Fintiex earns money through affiliate relationships. When you click certain links on our site and open an account or complete a qualifying action, we may receive a referral fee from the lender, bank, or card issuer. This is paid by the partner, not by you. The price you pay on the partner site is identical to a direct visit.
          </p>
          <p className="text-mute leading-relaxed mb-4">
            Editorial rankings and rate tables are not influenced by affiliate compensation. We do not accept payment for inclusion or position. Some products we cover do not have affiliate programs, and we cover them anyway when they are the best option for the reader.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            5. Intellectual property
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            The Fintiex name, logo, design, copy, code, calculators, charts, and editorial content are owned by Fintiex or licensed to us. We grant you a limited, non-exclusive, non-transferable license to access and use the Service for personal, non-commercial purposes.
          </p>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">What you can do</h3>
          <ul className="space-y-2 mb-4 text-mute">
            <li>Read, print, and save articles for personal use.</li>
            <li>Quote short passages with attribution and a link back to fintiex.com.</li>
            <li>Share Fintiex links on social media or in newsletters.</li>
            <li>Use our calculators to run your own numbers.</li>
          </ul>

          <h3 className="font-display font-bold text-lg mt-6 mb-2">What you cannot do</h3>
          <ul className="space-y-2 mb-4 text-mute">
            <li>Republish substantial portions of Fintiex content on another site without written permission.</li>
            <li>Scrape, mirror, or systematically copy our rate tables, calculator code, or article archives.</li>
            <li>Train AI models on our content without our consent.</li>
            <li>Use Fintiex marks, logos, or branding in a way that suggests endorsement or partnership.</li>
            <li>Reverse-engineer, decompile, or attempt to extract source code from any compiled portion of the Service.</li>
          </ul>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            6. Acceptable use
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            You agree not to use the Service to:
          </p>
          <ul className="space-y-2 mb-4 text-mute">
            <li>Violate any law, regulation, or third-party right.</li>
            <li>Probe, scan, or test the vulnerability of the Service or any related system.</li>
            <li>Send automated traffic, denial-of-service traffic, or scraping bots.</li>
            <li>Impersonate Fintiex or any of its writers or staff.</li>
            <li>Upload or transmit malware, viruses, or harmful code.</li>
          </ul>
          <p className="text-mute leading-relaxed mb-4">
            We may suspend or terminate access for any user who violates these rules. We may also report illegal activity to the appropriate authorities.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            7. Third-party links and partner sites
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Fintiex links to third-party websites, including lenders, banks, card issuers, government data sources, and other publications. We are not responsible for the content, products, services, privacy practices, or terms of any third-party site. A link is not an endorsement. Your use of a third-party site is governed by that site&rsquo;s terms and policies.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            8. Disclaimers
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            The Service is provided on an &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. To the maximum extent permitted by law, Fintiex disclaims all warranties, express or implied, including warranties of merchantability, fitness for a particular purpose, non-infringement, accuracy, timeliness, and uninterrupted availability. We do not warrant that the Service will meet your needs, be error-free, or remain online during any given period.
          </p>
          <p className="text-mute leading-relaxed mb-4">
            Without limiting the above, Fintiex makes no warranty regarding the accuracy of any rate, fee, APR, APY, term, eligibility requirement, or other product detail. Verify with the lender or bank before applying for any product.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            9. Limitation of liability
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            To the maximum extent permitted by law, Fintiex and its officers, employees, contractors, and partners will not be liable for any indirect, incidental, special, consequential, or punitive damages, or for any loss of profits, revenue, savings, data, goodwill, or business opportunities, arising out of or related to your use of the Service, even if we have been advised of the possibility of such damages.
          </p>
          <p className="text-mute leading-relaxed mb-4">
            Our total aggregate liability for any claim related to the Service will not exceed one hundred US dollars (USD 100). Some jurisdictions do not allow these limitations, in which case they apply to the fullest extent permitted in your jurisdiction.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            10. Indemnification
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            You agree to indemnify and hold Fintiex harmless from any claim, loss, damage, liability, or expense (including reasonable attorney fees) arising from your violation of these Terms, your violation of any law, or your misuse of the Service.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            11. Governing law and disputes
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            These Terms are governed by the laws of the State of Delaware, without regard to its conflict-of-laws rules. Any dispute arising out of or related to these Terms or the Service will be resolved in the state or federal courts located in Delaware, and you consent to the exclusive jurisdiction and venue of those courts.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            12. Severability and waiver
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            If any provision of these Terms is found unenforceable, that provision will be limited or removed to the minimum extent necessary, and the remaining provisions will stay in full effect. Our failure to enforce any right under these Terms is not a waiver of that right.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            13. Changes to these Terms
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            We may update these Terms from time to time. The current version is always at fintiex.com/terms. Material changes will be flagged with an updated effective date at the top of the page. Continued use of the Service after the effective date constitutes acceptance of the updated Terms.
          </p>

          <h2 className="font-display font-bold text-2xl mt-12 mb-4 tracking-tight">
            14. Contact
          </h2>
          <p className="text-mute leading-relaxed mb-4">
            Questions about these Terms, intellectual property, or any legal matter should go to{" "}
            <a href="mailto:legal@fintiex.com" className="u-link text-ink font-medium">legal@fintiex.com</a>. For privacy questions, see the contact details in our{" "}
            <Link href="/privacy" className="u-link text-ink font-medium">Privacy Policy</Link>. For general feedback or corrections, email feedback@fintiex.com.
          </p>

          <div className="border-t border-line mt-16 pt-8">
            <p className="text-sm font-mono text-mute">Effective date: May 7, 2026</p>
            <p className="text-sm text-mute mt-2">
              Questions about these Terms? Email{" "}
              <a href="mailto:legal@fintiex.com" className="u-link text-ink font-medium">legal@fintiex.com</a>.
            </p>
          </div>
        </div>
      </article>
    </>
  );
}
