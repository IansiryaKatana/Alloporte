import { ArrowRight } from 'lucide-react'
import type { CSSProperties, ReactNode } from 'react'
import { cn } from '@/lib/utils'

export function SectionLabel({
  children,
  light = false,
  className,
}: {
  children: string
  light?: boolean
  className?: string
}) {
  return (
    <p
      className={cn(
        'text-[7px] font-medium uppercase tracking-[0.18em] text-desktop-min',
        light ? 'text-white/60' : 'text-neutral-500',
        className,
      )}
    >
      {children}
    </p>
  )
}

export function BlueDot({ className }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'grid size-5 place-items-center rounded-full bg-accent text-accent-foreground transition-[transform,background-color,color] duration-200 group-hover/button:translate-x-0.5 group-hover/button:bg-white group-hover/button:!text-accent-foreground',
        className,
      )}
    >
      <ArrowRight className="size-3" />
    </span>
  )
}

export function PageContainer({
  children,
  className,
  style,
}: {
  children: ReactNode
  className?: string
  style?: CSSProperties
}) {
  return (
    <div className={cn('px-[var(--page-padding)]', className)} style={style}>
      {children}
    </div>
  )
}
