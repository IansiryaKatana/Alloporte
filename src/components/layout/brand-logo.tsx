import { cn } from '@/lib/utils'

export const brandLogoSrc = {
  onDark: '/brand/logo-white.png',
  onLight: '/brand/logo-black.png',
} as const

type BrandLogoProps = {
  /** True on dark backgrounds (hero, footer). False on light surfaces. */
  onDark?: boolean
  className?: string
}

export function BrandLogo({ onDark = false, className }: BrandLogoProps) {
  return (
    <img
      src={onDark ? brandLogoSrc.onDark : brandLogoSrc.onLight}
      alt="AlloPorte"
      className={cn('h-7 w-auto md:h-8', className)}
    />
  )
}
