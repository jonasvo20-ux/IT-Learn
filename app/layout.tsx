import type { Metadata } from 'next'
import './globals.css'
import { TRPCReactProvider } from '@/trpc/client'
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";
import { auth } from '@/lib/auth/server';
import { UserProvider } from '@/components/userStore';
import { headers } from 'next/headers';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });

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
    <html lang="en" className={cn("antialiased", "font-sans", geist.variable)}>
      <body className="bg-background text-text-primary font-sans">
        <main id="main-content" className="min-h-screen">
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
