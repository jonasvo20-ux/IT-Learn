import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-border bg-background/80 backdrop-blur-sm">
      <nav className="mx-auto flex h-full max-w-6xl items-center justify-between px-4">
        <Link href="/" className="text-lg font-bold tracking-tight">
          IT-Learn
        </Link>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/login">Sign in</Link>
          </Button>
          <Button size="sm" asChild>
            <Link href="/signup">Get started</Link>
          </Button>
        </div>
      </nav>
    </header>
  )
}
