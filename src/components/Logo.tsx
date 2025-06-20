import Image from 'next/image'
import Link from 'next/link'

export const Logo = ({ size = 'small' }: { size?: 'default' | 'small' }) => {
  return (
    <Link href="/" className="flex w-fit flex-shrink justify-center">
      <Image
        src="/images/logo.png"
        alt="Probound"
        width={size === 'default' ? 190 : 120}
        height={size === 'default' ? 24 : 12}
        priority
      />
    </Link>
  )
}
