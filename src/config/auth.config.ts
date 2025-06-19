import { signInSchema } from '@/schemas/auth'
import { NextAuthConfig } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'
import Google from 'next-auth/providers/google'

const authConfig: NextAuthConfig = {
  providers: [
    Google,
    Credentials({
      async authorize(credentials) {
        const validatedCredentials = signInSchema.safeParse(credentials)

        if (!validatedCredentials.success) {
          console.error('Invalid credentials:', validatedCredentials.error)
          return null
        }

        const user = validatedCredentials.data

        if (!user) {
          console.log('Invalid credentials')
          return null
        }

        return user
      },
    }),
  ],
  pages: {
    signIn: '/signin',
    signOut: '/signout',
    error: '/error',
  },
  trustHost: true,
}

export default authConfig
