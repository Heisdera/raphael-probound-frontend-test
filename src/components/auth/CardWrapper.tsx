'use client'

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { BackButton } from './BackButton'
import SocialSignIn from './SocialSignIn'
import { Logo } from '../Logo'
import Link from 'next/link'

interface CardWrapperProps {
  children: React.ReactNode
  headerLabel: string
  headerDescription?: string
  backButtonDescription: string
  backButtonLabel: string
  backButtonHref: string
  showSocial?: boolean
  showAgreement?: boolean
}

export const CardWrapper = ({
  children,
  headerLabel,
  headerDescription,
  backButtonDescription,
  backButtonLabel,
  backButtonHref,
  showSocial,
  showAgreement,
}: CardWrapperProps) => {
  return (
    <Card className="mx-auto w-full max-w-md border-none shadow-none">
      <CardHeader className="justify-items-center space-y-3 text-center lg:space-y-4">
        <Logo />

        <div>
          <CardTitle className="text-xl font-semibold md:text-[26px] lg:text-3xl">
            {headerLabel}
          </CardTitle>
          <CardDescription>{headerDescription}</CardDescription>
        </div>
      </CardHeader>

      <CardContent>{children}</CardContent>

      <CardFooter className="flex-col items-stretch space-y-1">
        <BackButton
          description={backButtonDescription}
          label={backButtonLabel}
          href={backButtonHref}
        />

        {showSocial && <SocialSignIn />}

        {showAgreement && (
          <div>
            <p className="mt-4 text-center text-xs text-gray-500">
              By continuing with google or signing up, you agree to ProBound{' '}
              <Link
                href="#"
                className="text-pc-500 font-medium hover:underline"
              >
                Terms & Conditions
              </Link>{' '}
              and{' '}
              <Link
                href="#"
                className="text-pc-500 font-medium hover:underline"
              >
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        )}
      </CardFooter>
    </Card>
  )
}
