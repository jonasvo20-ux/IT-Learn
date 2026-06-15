'use client'

import { authClient } from '@/lib/auth/client'
import { createContext, useContext } from 'react'

type SessionData = typeof authClient.$Infer.Session

const UserContext = createContext<SessionData | null>(null)

export function UserProvider({
  user,
  children,
}: {
  user: SessionData | null
  children: React.ReactNode
}) {
  return <UserContext.Provider value={user}>{children}</UserContext.Provider>
}

export function useUser() {
  const user = useContext(UserContext)
  if (user === undefined) {
    throw new Error('useUser must be used within a UserProvider')
  }
  return user
}