import { useLayoutEffect, useRef, type RefObject } from 'react'
import { gsap, ScrollTrigger, SplitText } from '@/lib/gsap-client'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function elements(root: HTMLElement, name: string) {
  return gsap.utils
    .toArray<HTMLElement>(root.querySelectorAll(`[data-motion="${name}"]`))
    .filter((el) => el instanceof HTMLElement)
}

function nodes(list: HTMLElement[] | NodeListOf<Element> | ArrayLike<Element> | undefined) {
  return gsap.utils.toArray<HTMLElement>(list ?? []).filter((el) => el instanceof HTMLElement)
}

function splitHeading(heading: HTMLElement) {
  try {
    return new SplitText(heading, {
      type: 'words',
      aria: 'auto',
      mask: 'words',
    })
  } catch {
    return null
  }
}

export function useSectionMotion(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return

    const ctx = gsap.context(() => {
      const label = elements(root, 'label')
      const headings = elements(root, 'heading')
      const copy = elements(root, 'copy')
      const items = elements(root, 'item')
      if (!label.length && !headings.length && !copy.length && !items.length) return

      if (prefersReducedMotion()) {
        gsap.set([...label, ...headings, ...copy, ...items], { autoAlpha: 1, y: 0, yPercent: 0 })
        return
      }

      const splits = headings.map(splitHeading).filter((split): split is SplitText => split !== null)
      const words = splits.flatMap((split) => nodes(split.words))
      const fade = [...label, ...copy, ...items]
      if (fade.length) gsap.set(fade, { autoAlpha: 0, y: 36 })

      const tl = gsap.timeline({
        defaults: { ease: 'power3.out' },
        scrollTrigger: {
          trigger: root,
          start: 'top 82%',
          toggleActions: 'play none none none',
        },
      })

      if (label.length) tl.to(label, { autoAlpha: 1, y: 0, duration: 0.55 }, 0)

      if (words.length) {
        tl.from(words, { yPercent: 115, duration: 1.05, stagger: 0.07 }, label.length ? 0.12 : 0)
      } else if (headings.length) {
        gsap.set(headings, { autoAlpha: 0, y: 40 })
        tl.to(headings, { autoAlpha: 1, y: 0, duration: 0.9 }, 0.08)
      }

      if (copy.length) tl.to(copy, { autoAlpha: 1, y: 0, duration: 0.75, stagger: 0.08 }, '-=0.55')
      if (items.length) tl.to(items, { autoAlpha: 1, y: 0, duration: 0.8, stagger: 0.1 }, '-=0.5')

      let refreshTimer = 0
      const onImageLoad = () => {
        window.clearTimeout(refreshTimer)
        refreshTimer = window.setTimeout(() => ScrollTrigger.refresh(), 80)
      }
      root.querySelectorAll('img').forEach((img) => {
        if (!img.complete) img.addEventListener('load', onImageLoad)
      })

      void document.fonts?.ready.then(() => ScrollTrigger.refresh())
      ScrollTrigger.refresh()

      return () => {
        window.clearTimeout(refreshTimer)
        splits.forEach((split) => split.revert())
        root.querySelectorAll('img').forEach((img) => {
          img.removeEventListener('load', onImageLoad)
        })
      }
    }, root)

    return () => ctx.revert()
  }, [scope])
}

export function useHeroMotion(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return

    const ctx = gsap.context(() => {
      const image = root.querySelector<HTMLElement>('[data-motion="hero-image"]')
      const label = elements(root, 'label')
      const heading = root.querySelector<HTMLElement>('[data-motion="heading"]')
      const copy = elements(root, 'copy')
      const actions = elements(root, 'item')

      if (prefersReducedMotion()) {
        gsap.set(
          [image, ...label, heading, ...copy, ...actions].filter(
            (el): el is HTMLElement => el instanceof HTMLElement,
          ),
          { autoAlpha: 1, y: 0, yPercent: 0, scale: 1 },
        )
        return
      }

      const split = heading ? splitHeading(heading) : null
      const words = nodes(split?.words)
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })

      if (image instanceof HTMLElement) {
        tl.from(image, { scale: 1.08, duration: 1.6, ease: 'power2.out' }, 0)
        gsap.to(image, {
          yPercent: 10,
          ease: 'none',
          scrollTrigger: {
            trigger: root,
            start: 'top top',
            end: 'bottom top',
            scrub: true,
          },
        })
      }

      if (label.length) tl.from(label, { autoAlpha: 0, y: 20, duration: 0.65 }, 0.18)
      if (words.length) {
        tl.from(words, { yPercent: 115, duration: 1.1, stagger: 0.05 }, 0.28)
      } else if (heading) {
        tl.from(heading, { autoAlpha: 0, y: 36, duration: 0.9 }, 0.28)
      }
      if (copy.length) tl.from(copy, { autoAlpha: 0, y: 28, duration: 0.75, stagger: 0.08 }, 0.5)
      if (actions.length) tl.from(actions, { autoAlpha: 0, y: 22, duration: 0.65 }, 0.62)

      return () => split?.revert()
    }, root)

    return () => ctx.revert()
  }, [scope])
}

export function useFooterMotion(scope: RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = scope.current
    if (!root) return

    const ctx = gsap.context(() => {
      const wordmark = root.querySelector<HTMLElement>('[data-motion="heading"]')
      if (!(wordmark instanceof HTMLElement) || prefersReducedMotion()) return

      gsap.from(wordmark, {
        autoAlpha: 0,
        y: 40,
        duration: 1.1,
        scrollTrigger: {
          trigger: wordmark,
          start: 'top 90%',
          toggleActions: 'play none none none',
        },
      })
    }, root)

    return () => ctx.revert()
  }, [scope])
}

export function useMotionRef<T extends HTMLElement = HTMLElement>() {
  return useRef<T>(null)
}
