'use client'

import { Loader2, LogOut } from 'lucide-react'
import { signOut } from 'next-auth/react'
import { useTransition } from 'react'
import { Button } from './ui/button'

export const LogoutButton = () => {
  const [isPending, startTransition] = useTransition()

  const handleClick = () => {
    startTransition(async () => {
      await signOut({ redirectTo: '/signin' })
        .then(() => {
          console.log('Sign out successful')
        })
        .catch((error) => {
          console.error('Sign out error:', error)
        })
    })
    try {
    } catch (error) {
      console.log('After signout with error:', error)
    }
  }

  return (
    <Button
      onClick={handleClick}
      className="flex items-center gap-2"
      aria-busy={isPending}
      aria-label={isPending ? 'Signing out' : 'Sign out'}
      disabled={isPending}
    >
      {isPending ? (
        <>
          <Loader2 className="size-5 animate-spin" />
          <span>Signing out</span>
        </>
      ) : (
        <>
          <LogOut className="size-4" />
          <span>Sign out</span>
        </>
      )}
    </Button>
  )
}
