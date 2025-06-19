import { z } from 'zod'

export const signInSchema = z.object({
  email: z.string().min(1, 'Email is required').email('Invalid email'),
  password: z
    .string()
    .min(1, 'Password is required')
    .min(6, 'Password must be more than 6 characters')
    .max(24, 'Password must be less than 24 characters'),
})

export const SignUpSchema = z
  .object({
    first_name: z.string().min(1, 'First Name is required'),
    last_name: z.string().min(1, 'Last Name is required'),
    email: z.string().email('Invalid email address'),
    phone_number: z
      .string()
      .min(1, 'Phone number is required')
      .regex(
        /^\+?\d{10,15}$/,
        'Enter a valid phone number with 10 to 15 digits.'
      ),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    confirm_password: z
      .string()
      .min(6, 'Confirm Password must be at least 6 characters'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirm_password) {
      ctx.addIssue({
        code: 'custom',
        message: 'Passwords do not match',
        path: ['confirm_password'],
      })
    }
  })
