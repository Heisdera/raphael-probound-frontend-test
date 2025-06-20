'use client'

import { cn } from '@/lib/utils'
import { AnimatePresence, motion } from 'motion/react'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const illustrationImages: {
  route: string
  title: string
  description: string
  src: string
  alt: string
}[] = [
  {
    title: 'Makes Custom Outreach',
    description:
      'Probound is revolutionizing the way outbound sales are done. Powered by AI for boundless customer reach.',
    route: '/signin',
    src: '/images/rva16n44dgjlnptqnunq.webp',
    alt: 'Sign In Illustration',
  },
  {
    title: 'Makes Custom Outreach',
    description:
      'Probound is revolutionizing the way outbound sales are done. Powered by AI for boundless customer reach.',
    route: '/signup',
    src: '/images/ps8xqeuhegrmwur15wqr.webp',
    alt: 'Sign In Illustration',
  },
  {
    title: 'Generate Leads',
    description:
      'Probound is revolutionizing the way outbound sales are done. Powered by AI for boundless customer reach.',
    route: '/reset-password',
    src: '/images/ps8xqeuhegrmwur15wqr.webp',
    alt: 'Reset Password Illustration',
  },
  {
    title: 'Book Demos',
    description:
      'Probound is revolutionizing the way outbound sales are done. Powered by AI for boundless customer reach.',
    route: '/new-password',
    src: '/images/oi3elk0d0zvc62smxk8s.webp',
    alt: 'New Password Illustration',
  },
]

// Animation variants
const containerVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
    },
  },
}

const imageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.4,
    },
  },
}

const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
    },
  },
}

const titleVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: 0.3,
    },
  },
}

const descriptionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.5,
    },
  },
}

const indicatorVariants = {
  inactive: {
    backgroundColor: '#ffffff',
    transition: {
      duration: 0.3,
    },
  },
  active: {
    backgroundColor: 'var(--pc-500)',
    transition: {
      duration: 0.3,
    },
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  const currentIllustration =
    illustrationImages.find((image) => image.route === pathname) ||
    illustrationImages[0]

  return (
    <div className="items-center md:grid md:h-screen md:grid-cols-2">
      <motion.div
        className="hide-scrollbar grid items-center overflow-y-scroll max-md:flex max-md:min-h-screen max-md:justify-center md:h-full"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {children}
      </motion.div>

      <div className="hidden h-screen py-4 pr-4 md:block">
        <motion.div
          className="relative size-full overflow-hidden rounded-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
          }}
          whileHover={{
            transition: { duration: 0.3 },
          }}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIllustration.route}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="absolute inset-0"
            >
              <Image
                src={currentIllustration.src}
                className="object-cover"
                alt={currentIllustration.alt}
                fill
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Overlay content */}
          <motion.div
            className="absolute inset-0 flex flex-col justify-end gap-8 bg-black/10 p-4 text-white lg:p-5"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="space-y-3">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={`${currentIllustration.route}-title`}
                  className="text-3xl font-semibold lg:text-4xl"
                  variants={titleVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {currentIllustration.title}
                </motion.h1>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`${currentIllustration.route}-description`}
                  className="text-sm leading-6"
                  variants={descriptionVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                >
                  {currentIllustration.description}
                </motion.p>
              </AnimatePresence>
            </div>

            <motion.div
              className="flex gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.9,
              }}
            >
              {illustrationImages.map((image, i) => (
                <motion.div
                  key={i}
                  className={cn(
                    'h-1 flex-1 rounded-xl',
                    pathname === image.route ? 'bg-pc-500' : 'bg-white'
                  )}
                  variants={indicatorVariants}
                  animate={pathname === image.route ? 'active' : 'inactive'}
                />
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
