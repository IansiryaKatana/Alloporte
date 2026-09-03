import { Link } from '@tanstack/react-router'
import { useRef } from 'react'
import type { Locale } from '@/i18n/types'
import { pagePath } from '@/i18n/routes'
import type { PageContent } from '@/data/pages/types'
import { SiteHeader } from '@/components/layout/site-header'
import { BlueDot, PageContainer, SectionLabel } from '@/components/layout/primitives'
import { Button } from '@/components/ui/button'
import { gsap, useGSAP, ScrollTrigger, SplitText } from '@/lib/gsap-client'
import { createHeroScrollVideo, HERO_SCROLL_POSTER } from '@/lib/hero-scroll-video'

type HomeHeroScrollProps = {
  locale: Locale
  hero: PageContent['hero']
}

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function splitHeading(heading: HTMLElement) {
  try {
    return new SplitText(heading, {
      type: 'words',
      aria: 'auto',
      mask: 'words',
      wordsClass: 'split-word',
    })
  } catch {
    return null
  }
}

function gate(progress: number, enterStart: number, enterEnd: number, leaveStart: number, leaveEnd: number) {
  if (progress <= enterStart || progress >= leaveEnd) return 0
  if (progress < enterEnd) return (progress - enterStart) / (enterEnd - enterStart)
  if (progress <= leaveStart) return 1
  return 1 - (progress - leaveStart) / (leaveEnd - leaveStart)
}

function setOverlay(element: HTMLElement | null, visible: number) {
  if (!element) return
  gsap.set(element, { autoAlpha: visible, y: (1 - visible) * 24 })
}

export function HomeHeroScroll({ locale, hero }: HomeHeroScrollProps) {
  const pinRef = useRef<HTMLElement>(null)
  const stageRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useGSAP(
    () => {
      const pin = pinRef.current
      const stage = stageRef.current
      const canvas = canvasRef.current
      if (!pin || !stage || !canvas) return

      const intro = pin.querySelector<HTMLElement>('[data-hero="intro"]')
      const actions = pin.querySelector<HTMLElement>('[data-hero="actions"]')
      const heading = pin.querySelector<HTMLElement>('[data-motion="heading"]')
      const label = pin.querySelector<HTMLElement>('[data-motion="label"]')
      const copy = pin.querySelector<HTMLElement>('[data-motion="copy"]')

      if (prefersReducedMotion()) {
        gsap.set([intro, actions].filter(Boolean), { autoAlpha: 1, y: 0 })
        return
      }

      const player = createHeroScrollVideo(canvas)
      const split = heading ? splitHeading(heading) : null
      const words = split?.words ? gsap.utils.toArray<HTMLElement>(split.words) : []
      let overlaysArmed = false

      const entrance = gsap.timeline({
        defaults: { ease: 'power3.out' },
        onComplete: () => {
          overlaysArmed = true
        },
      })
      if (label) entrance.from(label, { autoAlpha: 0, y: 20, duration: 0.65 }, 0.18)
      if (words.length) {
        entrance.from(words, { yPercent: 115, duration: 1.1, stagger: 0.05 }, 0.28)
      } else if (heading) {
        entrance.from(heading, { autoAlpha: 0, y: 36, duration: 0.9 }, 0.28)
      }
      if (copy) entrance.from(copy, { autoAlpha: 0, y: 28, duration: 0.75 }, 0.5)
      if (actions) entrance.from(actions, { autoAlpha: 0, y: 22, duration: 0.65 }, 0.62)

      const heroTl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: () => (window.innerWidth < 700 ? '+=380%' : '+=620%'),
          pin: stage,
          scrub: 0.28,
          invalidateOnRefresh: true,
          onUpdate(self) {
            const progress = self.progress
            if (progress > 0.01) overlaysArmed = true
            if (!overlaysArmed) return
            setOverlay(intro, gate(progress, -0.02, 0, 0.08, 0.12))
            setOverlay(
              actions,
              Math.max(gate(progress, -0.02, 0, 0.08, 0.12), gate(progress, 0.82, 0.88, 1.1, 1.2)),
            )
          },
        },
      })

      heroTl.to(
        player.playhead,
        {
          frame: Math.max(0, player.frameCount - 1),
          snap: { frame: 1 },
          duration: 1,
          ease: 'none',
          onUpdate: player.draw,
        },
        0,
      )

      void document.fonts?.ready.then(() => {
        ScrollTrigger.refresh()
      })

      return () => {
        player.destroy()
        split?.revert()
      }
    },
    { scope: pinRef },
  )

  return (
    <section ref={pinRef} className="relative bg-black text-white">
      <div ref={stageRef} className="relative h-svh overflow-hidden">
        <img
          src={HERO_SCROLL_POSTER}
          alt={hero.imageAlt}
          className="architectural-image absolute inset-0 h-full w-full object-cover"
          fetchPriority="high"
        />
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full opacity-0 motion-reduce:hidden"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
        <SiteHeader locale={locale} light />
        <PageContainer className="relative z-10 flex h-svh flex-col justify-end pb-6 pt-24 md:pb-10">
          <div data-hero="intro">
            <SectionLabel light className="mb-3">
              {hero.label}
            </SectionLabel>
            <h1
              data-motion="heading"
              className="max-w-4xl text-[clamp(2rem,8vw,5.5rem)] font-light leading-[1.05] tracking-[-0.06em]"
            >
              {hero.h1}
            </h1>
            {hero.subtitle && (
              <p data-motion="copy" className="mt-4 max-w-2xl text-[11px] leading-snug text-white/70 text-desktop-min">
                {hero.subtitle}
              </p>
            )}
          </div>
          {(hero.primaryCta || hero.secondaryCta) && (
            <div data-hero="actions" className="mt-6 flex flex-wrap gap-2">
              {hero.primaryCta && (
                <Button asChild size="sm">
                  <Link to={pagePath(locale, hero.primaryCta.pageId)}>
                    {hero.primaryCta.label}
                    <BlueDot />
                  </Link>
                </Button>
              )}
              {hero.secondaryCta && (
                <Button asChild size="sm" variant="ghost">
                  <Link to={pagePath(locale, hero.secondaryCta.pageId)}>
                    {hero.secondaryCta.label}
                  </Link>
                </Button>
              )}
            </div>
          )}
        </PageContainer>
      </div>
    </section>
  )
}
