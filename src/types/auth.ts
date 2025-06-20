import { signInSchema, SignUpSchema } from '@/schemas/auth'
import { z } from 'zod'

export type UserSignUp = z.infer<typeof SignUpSchema>

export type UserSignIn = z.infer<typeof signInSchema>
