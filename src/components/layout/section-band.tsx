import type { ReactNode } from 'react'
import type { PageSection } from '@/data/pages/types'
import { useMotionRef, useSectionMotion } from '@/hooks/use-section-motion'
import { cn } from '@/lib/utils'

export type SectionTone = 'paper' | 'mist' | 'ink'
export type SectionSize = 'screen' | 'stage' | 'compact'

export function bandForSection(
  type: PageSection['type'],
  index: number,
): { tone: SectionTone; size: SectionSize } {
  if (type === 'dark-feature' || type === 'cta') {
    return { tone: 'ink', size: 'screen' }
  }
  if (type === 'quote-form' || type === 'contact-info') {
    return { tone: 'paper', size: 'screen' }
  }
  if (type === 'disclaimer' || type === 'metrics' || type === 'text') {
    return { tone: index % 2 === 0 ? 'mist' : 'paper', size: 'compact' }
  }

  const size: SectionSize =
    type === 'intro' ||
    type === 'list-columns' ||
    type === 'cards' ||
    type === 'steps' ||
    type === 'image-text' ||
    type === 'faq' ||
    type === 'comparison' ||
    type === 'table' ||
    type === 'checklist' ||
    type === 'links-grid' ||
    type === 'testimonials' ||
    type === 'case-study-tabs'
      ? 'stage'
      : 'compact'

  return { tone: index % 2 === 0 ? 'mist' : 'paper', size }
}

export function SectionBand({
  tone,
  size,
  flush = false,
  className,
  children,
}: {
  tone: SectionTone
  size: SectionSize
  flush?: boolean
  className?: string
  children: ReactNode
}) {
  const ref = useMotionRef<HTMLElement>()
  useSectionMotion(ref)

  return (
    <section
      ref={ref}
      data-tone={tone}
      data-size={size}
      className={cn(
        'flex w-full flex-col',
        tone === 'paper' && 'bg-card text-card-foreground',
        tone === 'mist' && 'bg-background text-foreground',
        tone === 'ink' && 'bg-[#030303] text-white',
        size === 'screen' && 'min-h-svh',
        !flush && size === 'screen' && 'justify-center py-16 md:py-24',
        !flush && size === 'stage' && 'py-[clamp(3rem,5.5vw,4.75rem)]',
        !flush && size === 'compact' && 'py-12 md:py-16',
        flush && 'justify-stretch p-0',
        className,
      )}
    >
      {children}
    </section>
  )
}

export function BandedSection({
  type,
  index,
  flush,
  className,
  children,
}: {
  type: PageSection['type']
  index: number
  flush?: boolean
  className?: string
  children: ReactNode
}) {
  const { tone, size } = bandForSection(type, index)
  return (
    <SectionBand tone={tone} size={size} flush={flush} className={className}>
      {children}
    </SectionBand>
  )
}
