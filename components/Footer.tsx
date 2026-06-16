import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-8 sm:flex-row">
        <span className="text-sm font-bold tracking-tight">IT-Learn</span>

        <nav className="flex items-center gap-6 text-sm text-muted-foreground">
          <Link href="/about" className="hover:text-foreground">
            About
          </Link>
          <Link href="/privacy" className="hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="hover:text-foreground">
            Terms
          </Link>
        </nav>

        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} IT-Learn
        </span>
      </div>
    </footer>
  )
}
