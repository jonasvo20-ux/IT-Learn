import type { Metadata } from 'next'
import { Footer } from '@/components/Footer'
import './globals.css'
import { TRPCReactProvider } from '@/trpc/client'
import { Navbar } from '@/components/Navbar'
export const metadata: Metadata = {
  title: 'IT Learn | Discover Your Potential',
  description: 'Learn IT skills and advance your career with IT Learn',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="antialiased">
      <body className="bg-background text-text-primary font-sans">

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="min-h-screen pt-16">
          <TRPCReactProvider>
            {children}
          </TRPCReactProvider>
        </main>

        <Footer />
      </body>
    </html>
  )
}
