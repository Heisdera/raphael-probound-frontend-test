import type { Metadata } from 'next'
import { SessionProvider } from 'next-auth/react'
import { Sora } from 'next/font/google'
import './globals.css'

const soraSansSerif = Sora({
  variable: '--font-sora-sans-serif',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'ProBound Frontend Test',
  description: 'Ai Voice Agents for Customer Support',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <SessionProvider>
      <html lang="en">
        <body className={`${soraSansSerif.className} antialiased`}>
          {children}
        </body>
      </html>
    </SessionProvider>
  )
}
