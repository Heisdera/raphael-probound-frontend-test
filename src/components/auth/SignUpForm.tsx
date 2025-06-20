'use client'

import { SignUpSchema } from '@/schemas/auth'
import { UserSignUp } from '@/types/auth'
import { zodResolver } from '@hookform/resolvers/zod'
import { Eye, EyeOff } from 'lucide-react'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import LoadingButton from '../LoadingButton'
import { PhoneNumberInput } from '../PhoneNumberInput'
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

export const SignUpForm = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)

  const form = useForm<UserSignUp>({
    resolver: zodResolver(SignUpSchema),
    defaultValues: {
      first_name: '',
      last_name: '',
      email: '',
      phone_number: '+1',
      password: '',
      confirm_password: '',
    },
  })

  const onSubmit = async (formData: UserSignUp) => {
    console.log('Form submitted:', formData)
  }

  return (
    <CardWrapper
      headerLabel="Welcome To ProBound"
      headerDescription="Enter your details below to get started."
      backButtonDescription="Already have an account?"
      backButtonLabel="Sign in"
      backButtonHref="/signin"
      showSocial
      showAgreement
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex gap-3">
            {/* First Name */}
            <FormField
              control={form.control}
              name="first_name"
              render={({ field }) => (
                <FormItem className="h-fit">
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="First Name"
                      autoComplete="off"
                      className="placeholder:text-gray-05 h-12 rounded-lg placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Last Name */}
            <FormField
              control={form.control}
              name="last_name"
              render={({ field }) => (
                <FormItem className="h-fit">
                  <FormLabel>Last Name</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Last Name"
                      autoComplete="off"
                      className="placeholder:text-gray-05 h-12 rounded-lg placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

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

          {/* Phone Number */}
          <FormField
            control={form.control}
            name="phone_number"
            render={({ field, fieldState }) => (
              <FormItem>
                <FormLabel className="text-sm">Phone Number</FormLabel>
                <FormControl>
                  <PhoneNumberInput
                    field={field}
                    error={fieldState?.error}
                    name={field.name}
                  />
                </FormControl>
                {fieldState?.error && (
                  <FormMessage className="text-left" id="phoneNumber-error" />
                )}
              </FormItem>
            )}
          />

          {/* Password */}
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="password">Password</FormLabel>

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
                    className="absolute inset-y-0 end-0 flex w-12 items-center justify-center rounded-lg"
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

          {/* Confirm Password */}
          <FormField
            control={form.control}
            name="confirm_password"
            render={({ field }) => (
              <FormItem>
                <FormLabel htmlFor="confirm_password">
                  Confirm Password
                </FormLabel>

                <div className="relative">
                  <FormControl>
                    <Input
                      id="confirm_password"
                      type={showConfirmPassword ? 'text' : 'password'}
                      placeholder="Confirm Password"
                      autoComplete="off"
                      className="placeholder:text-gray-05 h-12 rounded-lg pr-10 placeholder:text-sm"
                      {...field}
                    />
                  </FormControl>
                  <button
                    type="button"
                    className="absolute inset-y-0 end-0 flex w-12 items-center justify-center rounded-lg"
                    onClick={() => setShowConfirmPassword((prev) => !prev)}
                  >
                    {showConfirmPassword ? (
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

          <LoadingButton pending={form.formState.isSubmitting} text="Sign up" />
        </form>
      </Form>
    </CardWrapper>
  )
}
