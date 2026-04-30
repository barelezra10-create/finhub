import Link from "next/link";
import { Logo } from "@fintiex/ui/components/logo";

export function SiteHeader() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="max-w-page mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="no-underline">
          <Logo />
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/mortgages" className="text-ink hover:text-primary">Mortgages</Link>
          <Link href="/savings" className="text-ink hover:text-primary">Savings</Link>
          <Link href="/loans" className="text-ink hover:text-primary">Loans</Link>
          <Link href="/credit-cards" className="text-ink hover:text-primary">Cards</Link>
          <Link href="/calculators" className="text-ink hover:text-primary">Calculators</Link>
        </nav>
      </div>
    </header>
  );
}
