'use client'

import Link from 'next/link'

interface BackButtonProps {
  description: string
  label: string
  href: string
}

export const BackButton = ({ description, label, href }: BackButtonProps) => {
  return (
    <p className="text-center text-sm text-gray-500 underline-offset-2">
      {description}{' '}
      <Link
        href={href}
        className="text-navbar-btn-hover text-pc-500 font-medium hover:underline"
      >
        {label}
      </Link>
    </p>
  )
}
