'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'

export default function SocialSignIn() {
  return (
    <div className="space-y-2">
      <div className="grid w-full grid-cols-3 items-center justify-between">
        <hr></hr>
        <span className="my-2 block text-center text-sm text-gray-500">or</span>
        <hr></hr>
      </div>

      <div className="w-full space-y-3">
        <form>
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
