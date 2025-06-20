import NextAuth from 'next-auth'
import { NextResponse } from 'next/server'
import authConfig from './config/auth.config'
import {
  apiAuthPrefix,
  authRoutes,
  DEFAULT_SIGNIN_REDIRECT,
  publicRoutes,
} from './routes'

const { auth } = NextAuth(authConfig)

export default auth((req) => {
  const { nextUrl } = req
  const isLoggedIn = !!req.auth

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix)
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname)
  const isAuthRoute = authRoutes.includes(nextUrl.pathname)

  // Allow API auth routes to pass through
  if (isApiAuthRoute) {
    return NextResponse.next()
  }

  // Redirect logged-in users from auth routes
  if (isAuthRoute) {
    if (isLoggedIn) {
      return NextResponse.redirect(new URL(DEFAULT_SIGNIN_REDIRECT, nextUrl))
    }
    return NextResponse.next() // Allow non-logged-in users to access auth routes
  }

  // Redirect unauthenticated users from protected routes
  if (!isLoggedIn && !isPublicRoute) {
    return NextResponse.redirect(
      new URL(
        `/signin?callbackUrl=${encodeURIComponent(DEFAULT_SIGNIN_REDIRECT)}`,
        nextUrl
      )
    )
  }

  return NextResponse.next()
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
