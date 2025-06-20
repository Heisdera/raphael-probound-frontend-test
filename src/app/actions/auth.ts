'use server'

import { signIn, signOut } from '@/auth'
import { signInSchema } from '@/schemas/auth'
import { UserSignIn } from '@/types/auth'

export async function handleCredentialsSignin({
  email,
  password,
  callbackUrl = '/',
}: UserSignIn & { callbackUrl?: string }) {
  // Validate user's credentials
  const validatedCredentials = signInSchema.safeParse({ email, password })

  if (!validatedCredentials.success) {
    return {
      success: false,
      data: null,
      message: 'Invalid credentials',
    }
  }

  try {
    await signIn('credentials', {
      email: validatedCredentials.data.email.toLocaleLowerCase(),
      password: validatedCredentials.data.password,
      redirect: false,
    })

    return {
      success: true,
      data: null,
      message: 'Sign-in successful',
      callbackUrl,
    }
  } catch (error) {
    console.log('Credential signin error:', { error })

    return {
      success: false,
      data: null,
      message: 'Invalid email or password',
    }
  }
}

export async function handleGoogleSignIn(callbackUrl = '/') {
  await signIn('google', { redirectTo: callbackUrl })
}

export async function handleSignOut() {
  await signOut({ redirect: false })
}
