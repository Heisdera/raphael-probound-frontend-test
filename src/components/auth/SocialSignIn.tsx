'use client'

import { handleGoogleSignIn } from '@/app/actions/auth'
import { Button } from '@/components/ui/button'
import { DEFAULT_SIGNIN_REDIRECT } from '@/routes'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'

export default function SocialSignIn() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || DEFAULT_SIGNIN_REDIRECT

  return (
    <div className="space-y-2">
      <div className="grid w-full grid-cols-3 items-center justify-between">
        <hr></hr>
        <span className="my-2 block text-center text-sm text-gray-500">or</span>
        <hr></hr>
      </div>

      <div className="w-full space-y-3">
        <form action={() => handleGoogleSignIn(callbackUrl)}>
          <Button variant="outline" className="h-10 w-full" type="submit">
            <Image
              src="/images/google-logo.png"
              alt="Google"
              width={18}
              height={18}
              className="mr-1"
              priority
            />
            <span className="mt-0.5">Continue with Google</span>
          </Button>
        </form>
      </div>
    </div>
  )
}
