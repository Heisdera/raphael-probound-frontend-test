import { cn } from '@/lib/utils'
import { motion } from 'motion/react'
import { Loader2 } from 'lucide-react'
import React, { forwardRef } from 'react'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading: boolean
  disabled?: boolean
  text: string
  loadingText?: string
}
const FramerButton = forwardRef<HTMLButtonElement, Props>(
  ({ className, isLoading, text, loadingText, disabled, ...props }, ref) => {
    return (
      // @ts-expect-error Next js
      <motion.button
        initial={{ '--x': '100%', scale: 1 }}
        animate={{ '--x': '-100%' }}
        whileTap={{ scale: disabled ? 1 : 0.97 }}
        transition={{
          repeat: Infinity,
          repeatType: 'loop',
          repeatDelay: 1,
          type: 'spring',
          stiffness: 20,
          damping: 15,
          mass: 2,
          scale: {
            type: 'spring',
            stiffness: 10,
            damping: 5,
            mass: 0.1,
          },
        }}
        type="submit"
        disabled={isLoading || disabled}
        className={cn(
          'radial-gradient relative flex w-full justify-center rounded-md px-4 py-2 text-white focus-visible:ring-2 focus-visible:ring-gray-300 focus-visible:ring-offset-1',
          className
        )}
        ref={ref}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-x-2 font-medium">
            {loadingText ? loadingText : ''}
            <Loader2
              stroke="#fff"
              strokeWidth={2.5}
              className="size-5 animate-spin"
            />
          </span>
        ) : (
          <>
            <span
              className={cn(
                'relative block h-full w-full rounded-[inherit] font-medium tracking-wide text-white',
                disabled ? '' : 'linear-mask'
              )}
            >
              {text}
            </span>
            <span
              className={cn(
                'absolute inset-0 block rounded-[inherit] p-px',
                disabled ? '' : 'linear-overlay'
              )}
            />
          </>
        )}
      </motion.button>
    )
  }
)
FramerButton.displayName = 'FramerButton'
export default FramerButton
