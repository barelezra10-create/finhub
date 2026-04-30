import Link from "next/link";

const today = new Date();
const dateStr = today.toLocaleDateString("en-US", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
});

const issueNumber =
  Math.floor((today.getTime() - new Date("2026-04-29").getTime()) / 86400000) + 1;

export function SiteHeader() {
  return (
    <header className="border-b border-rule bg-paper">
      <div className="border-b border-rule-soft">
        <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-2 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.18em] text-ink-muted">
          <div>{dateStr}</div>
          <div className="hidden md:block">
            Edition No. {issueNumber.toString().padStart(3, "0")} · Vol. I
          </div>
          <div>Rates updated continuously</div>
        </div>
      </div>

      <div className="max-w-(--max-w-broadsheet) mx-auto px-6 pt-8 pb-4">
        <div className="flex items-baseline justify-between gap-6">
          <div className="hidden md:block flex-1 text-[11px] font-mono uppercase tracking-[0.18em] text-ink-muted leading-relaxed">
            <div>Established</div>
            <div>MMXXVI</div>
          </div>
          <Link href="/" className="block text-center">
            <h1 className="font-display font-black text-[clamp(3rem,9vw,7rem)] leading-none tracking-tight">
              Fintiex
            </h1>
          </Link>
          <div className="hidden md:block flex-1 text-right text-[11px] font-mono uppercase tracking-[0.18em] text-ink-muted leading-relaxed">
            <div>America&rsquo;s</div>
            <div>Rate Authority</div>
          </div>
        </div>
        <div className="mt-3 text-center text-[11px] font-mono uppercase tracking-[0.32em] text-ink-muted">
          Mortgages · Savings · Credit Cards · Loans · Investing
        </div>
      </div>

      <nav className="border-y border-rule">
        <div className="max-w-(--max-w-broadsheet) mx-auto px-6 py-3 flex items-center justify-center gap-x-8 gap-y-2 flex-wrap text-[12px] font-display font-medium tracking-[0.16em] uppercase">
          <NavItem href="/mortgages" label="Mortgages" />
          <NavItem href="/savings" label="Savings & CDs" />
          <NavItem href="/loans" label="Loans" />
          <NavItem href="/credit-cards" label="Credit Cards" />
          <NavItem href="/investing" label="Investing" />
          <NavItem href="/calculators" label="Calculators" />
          <NavItem href="/learn" label="Guides" />
        </div>
      </nav>
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="hover:text-oxblood transition-colors duration-150">
      {label}
    </Link>
  );
}
