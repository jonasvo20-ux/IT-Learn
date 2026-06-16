import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { TRPCReactProvider } from '@/trpc/client'
import { auth } from '@/lib/auth/server'
import { UserProvider } from '@/components/userStore'
import { headers } from 'next/headers'
import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'ITLearn | The free code education platform.',
  description: 'Learn IT skills and advance your career with ITLearn',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const user = await auth.api.getSession({
    headers: await headers()
  })
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="bg-background text-foreground font-sans">

        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-white focus:rounded-lg focus:shadow-lg"
        >
          Skip to main content
        </a>

        <Navbar />

        <main id="main-content" className="min-h-screen pt-16">
          <TRPCReactProvider>
            <UserProvider user={user}>
              {children}
            </UserProvider>
          </TRPCReactProvider>
        </main>
      </body>
    </html>
  )
}
