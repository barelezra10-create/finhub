import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 backdrop-blur-md bg-bg/85 border-b border-line">
      <div className="max-w-(--max-w-page) mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <Logomark />
          <span className="font-display font-bold text-xl tracking-tight">Fintiex</span>
        </Link>

        <nav className="hidden md:flex items-center gap-1 text-[14px] font-medium">
          <NavItem href="/mortgages" label="Mortgages" />
          <NavItem href="/savings" label="Savings" />
          <NavItem href="/loans" label="Loans" />
          <NavItem href="/credit-cards" label="Cards" />
          <NavItem href="/calculators" label="Tools" />
          <NavItem href="/learn" label="Guides" />
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/learn" className="hidden sm:inline-flex pill pill-ghost">
            Sign in
          </Link>
          <Link href="/calculators" className="pill pill-ink">
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="px-3 py-2 rounded-full text-ink-soft hover:bg-bg-soft hover:text-ink transition-colors duration-150"
    >
      {label}
    </Link>
  );
}

function Logomark() {
  return (
    <span
      aria-hidden
      className="inline-flex items-center justify-center w-8 h-8 rounded-xl bg-ink text-lime font-mono font-bold text-sm tracking-tighter"
    >
      Fx
    </span>
  );
}
