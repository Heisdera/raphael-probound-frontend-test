'use client'

import { signInSchema } from '@/schemas/auth'
import { UserSignIn } from '@/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState, useTransition } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '../buttons/LoadingButton'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { CardWrapper } from './CardWrapper'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { DEFAULT_SIGNIN_REDIRECT } from '@/routes'
import { handleCredentialsSignin } from '@/app/actions/auth'

export const SignInForm = () => {
  const [isPending, startTransition] = useTransition()
  const [showPassword, setShowPassword] = useState(false)
  const searchParams = useSearchParams()
  const router = useRouter()

  const callbackUrl = searchParams.get('callbackUrl') || DEFAULT_SIGNIN_REDIRECT

  const form = useForm<UserSignIn>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const onSubmit = (formData: UserSignIn) => {
    console.log('Form submitted:', formData)

    startTransition(() => {
      handleCredentialsSignin({ ...formData, callbackUrl })
        .then((res) => {
          if (res.success) {
            console.log('Form submitted:', formData)

            form.reset()
            form.clearErrors()
            router.push(res.callbackUrl || DEFAULT_SIGNIN_REDIRECT) // Redirect after successful sign-in
          }
        })
        .catch((error) => {
          console.log(error)
        })
    })
  }

  return (
    <CardWrapper
      headerLabel="Welcome Back"
      headerDescription="Enter your details below to login."
      backButtonDescription="Dont't have an account?"
      backButtonLabel="Sign up"
      backButtonHref="/signup"
      showSocial
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-5">
          {/* Email Address */}
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email Address</FormLabel>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="Email Address"
                    autoComplete="off"
                    className="placeholder:text-gray-05 h-12 rounded-lg placeholder:text-sm"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between">
                  <FormLabel htmlFor="password">Password</FormLabel>

                  <Link
                    className="text-pc-500 text-xs leading-0 font-medium hover:underline hover:underline-offset-1"
                    href="/reset-password"
                  >
                    Forgot Password?
                  </Link>
                </div>

                <div className="relative">
                  <FormControl>
                    <Input
                      id="password"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Password"
                      autoComplete="off"
                      className="placeholder:text-gray-05 h-12 rounded-lg pr-10 placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex w-12 items-center justify-center"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? (
                      <EyeOff className="text-gray-06 size-5" />
                    ) : (
                      <Eye className="text-gray-06 size-5" />
                    )}
                  </button>
                </div>

                <FormMessage />
              </FormItem>
            )}
          />

          <LoadingButton
            pending={form.formState.isSubmitting || isPending}
            text="Sign in"
          />
        </form>
      </Form>
    </CardWrapper>
  )
}
