import { useCallback, useLayoutEffect, useRef, useState } from 'react'
import type { CardItem } from '@/data/pages/types'
import { SafeImage } from '@/components/ui/safe-image'
import { cn } from '@/lib/utils'

function PortraitCard({ item }: { item: CardItem }) {
  return (
    <article className="group relative aspect-[3/4] h-full overflow-hidden border border-border bg-neutral-900">
      {item.image && (
        <SafeImage
          src={item.image}
          alt={item.imageAlt ?? item.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      )}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
      <div className="absolute inset-0 flex flex-col justify-between p-3 text-white md:p-4">
        {item.number && (
          <span className="text-[11px] text-white/70 md:text-sm">{item.number}</span>
        )}
        <div className={item.number ? undefined : 'mt-auto'}>
          <h3 className="text-[13px] font-medium tracking-[-0.04em] md:text-[22px] md:leading-tight">
            {item.title}
          </h3>
          <p className="mt-2 text-[11px] leading-snug text-white/75 text-desktop-min">
            {item.description}
          </p>
        </div>
      </div>
    </article>
  )
}

function scrollChildIntoView(root: HTMLElement, index: number) {
  const child = root.children[index] as HTMLElement | undefined
  if (!child) return
  const left = child.getBoundingClientRect().left - root.getBoundingClientRect().left + root.scrollLeft
  root.scrollTo({ left, behavior: 'smooth' })
}

export function CardsCarousel({ items }: { items: CardItem[] }) {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)

  const measure = useCallback(() => {
    const root = scrollerRef.current
    const first = root?.children[0] as HTMLElement | undefined
    if (!root || !first || root.clientWidth === 0) return

    const origin = root.getBoundingClientRect().left
    const next = [...root.children].reduce((best, child, index) => {
      const distance = Math.abs((child as HTMLElement).getBoundingClientRect().left - origin)
      return distance < best.distance ? { index, distance } : best
    }, { index: 0, distance: Number.POSITIVE_INFINITY })
    setActive((current) => (current === next.index ? current : next.index))
  }, [])

  useLayoutEffect(() => {
    const root = scrollerRef.current
    if (!root) return

    measure()
    root.addEventListener('scroll', measure, { passive: true })
    const observer = new ResizeObserver(measure)
    observer.observe(root)
    return () => {
      root.removeEventListener('scroll', measure)
      observer.disconnect()
    }
  }, [measure])

  function goTo(index: number) {
    const root = scrollerRef.current
    const first = root?.children[0] as HTMLElement | undefined
    if (!root || !first) return

    const style = getComputedStyle(root)
    const gap = Number.parseFloat(style.columnGap || style.gap) || 0
    const visible = Math.max(1, Math.round((root.clientWidth + gap) / (first.getBoundingClientRect().width + gap)))
    const target = Math.min(index, Math.max(0, items.length - visible))
    setActive(target)
    scrollChildIntoView(root, target)
  }

  return (
    <div className="mt-6">
      <div
        ref={scrollerRef}
        className="relative flex snap-x snap-mandatory gap-1.5 overflow-x-auto overscroll-x-contain scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        aria-label="Trigger point cards"
      >
        {items.map((item) => (
          <div
            key={item.title}
            data-motion="item"
            className="w-[78%] shrink-0 snap-start sm:w-[calc((100%-0.375rem)/2)] md:w-[calc((100%-0.75rem)/3)] lg:w-[calc((100%-1.125rem)/4)]"
          >
            <PortraitCard item={item} />
          </div>
        ))}
      </div>
      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center gap-1.5" role="tablist" aria-label="Carousel pages">
          {items.map((item, index) => (
            <button
              key={item.title}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={item.title}
              onClick={() => goTo(index)}
              className="flex h-6 items-center justify-center"
            >
              <span
                className={cn(
                  'h-0.5 rounded-full transition-all',
                  index === active ? 'w-8 bg-foreground' : 'w-4 bg-border',
                )}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
