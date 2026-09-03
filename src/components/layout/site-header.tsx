import { useEffect, useRef, useState } from 'react'
import { Link, useRouterState } from '@tanstack/react-router'
import { Menu, X } from 'lucide-react'
import type { Locale } from '@/i18n/types'
import { alternateLocalePath, pagePath } from '@/i18n/routes'
import {
  headerNav,
  quotePageId,
  resolveNavHref,
  uiStrings,
} from '@/data/navigation'
import { Button } from '@/components/ui/button'
import { BrandLogo } from '@/components/layout/brand-logo'
import { BlueDot } from '@/components/layout/primitives'
import { cn } from '@/lib/utils'

type SiteHeaderProps = {
  locale: Locale
  light?: boolean
}

function MobileMenu({
  locale,
  open,
  onClose,
}: {
  locale: Locale
  open: boolean
  onClose: () => void
}) {
  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <button
        type="button"
        aria-label="Close overlay"
        className="absolute inset-0 bg-black/40"
        onClick={onClose}
      />
      <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-lg bg-white p-[var(--page-padding)] pb-0 shadow-[0_-16px_45px_rgba(0,0,0,0.12)]">
        <div className="mb-4 flex items-center justify-between">
          <BrandLogo className="h-6 md:h-7" />
          <button
            type="button"
            aria-label={uiStrings.close[locale]}
            onClick={onClose}
            className="grid size-9 place-items-center border border-primary bg-primary text-primary-foreground"
          >
            <X className="size-4" />
          </button>
        </div>
        {headerNav.map((group) => (
          <div key={group.label.en} className="mb-5">
            <p className="mb-2 text-[12px] font-medium uppercase tracking-[0.14em] text-neutral-500">
              {group.label[locale]}
            </p>
            <div className="flex flex-col gap-1">
              {group.links.map((link) => (
                <Link
                  key={link.label.en}
                  to={resolveNavHref(locale, link)}
                  onClick={onClose}
                  className="py-2.5 text-[14px] uppercase tracking-[0.1em] text-foreground"
                >
                  {link.label[locale]}
                </Link>
              ))}
            </div>
          </div>
        ))}
        <div className="sticky bottom-0 flex flex-col gap-2 border-t border-border bg-white py-4">
          <Button asChild size="md" variant="primary" className="w-full">
            <Link to={pagePath(locale, quotePageId)} onClick={onClose}>
              {uiStrings.requestQuote[locale]}
              <BlueDot />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

function HeaderNav({
  locale,
  light,
  onOpenMenu,
}: {
  locale: Locale
  light: boolean
  onOpenMenu: () => void
}) {
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const alternatePath = alternateLocalePath(pathname)

  const navItemClass = cn(
    'inline-flex h-9 shrink-0 items-center leading-none text-[12px] uppercase tracking-[0.12em] md:text-[13px]',
    light ? 'text-white/75 hover:text-white' : 'text-muted-foreground hover:text-foreground',
  )

  const navItemMutedClass = cn(
    'inline-flex h-9 shrink-0 items-center leading-none text-[12px] uppercase tracking-[0.12em] md:text-[13px]',
    light ? 'text-white/60 hover:text-white' : 'text-muted-foreground',
  )

  return (
    <>
      <div
        className={cn(
          'flex items-center justify-between border-b pb-1.5 text-[11px] uppercase tracking-[0.14em] md:text-xs',
          light ? 'border-white/20 text-white/75' : 'border-border text-muted-foreground',
        )}
      >
        <Link to={pagePath(locale, 'home')}>AlloPorte</Link>
        <span>{locale === 'en' ? 'France / EN' : 'France / FR'}</span>
      </div>
      <div className="flex items-center justify-between py-3">
        <Link
          to={pagePath(locale, 'home')}
          className="inline-flex items-center"
          aria-label="AlloPorte home"
        >
          <BrandLogo onDark={light} />
        </Link>
        <nav className="hidden items-center gap-5 lg:flex">
          {headerNav.map((group) => (
            <div key={group.label.en} className="group relative inline-flex h-9 items-center">
              <button type="button" className={navItemClass}>
                {group.label[locale]}
              </button>
              <div className="invisible absolute left-0 top-full z-40 min-w-[240px] border border-border bg-white py-2 opacity-0 shadow-[0_16px_45px_rgba(0,0,0,0.08)] transition group-hover:visible group-hover:opacity-100">
                {group.links.map((link) => (
                  <Link
                    key={link.label.en}
                    to={resolveNavHref(locale, link)}
                    className="block px-4 py-2.5 text-[12px] uppercase tracking-[0.1em] text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900 md:text-[13px]"
                  >
                    {link.label[locale]}
                  </Link>
                ))}
              </div>
            </div>
          ))}
          <Link to={pagePath(locale, 'case-studies')} className={navItemClass}>
            {uiStrings.caseStudies[locale]}
          </Link>
          <Link to={pagePath(locale, 'contact')} className={navItemClass}>
            {uiStrings.contact[locale]}
          </Link>
          <Link to={alternatePath} className={navItemMutedClass}>
            {uiStrings.switchLang[locale]}
          </Link>
          <Button asChild size="sm" className="shrink-0 self-center">
            <Link to={pagePath(locale, quotePageId)}>
              {uiStrings.requestQuote[locale]}
              <BlueDot />
            </Link>
          </Button>
        </nav>
        <div className="flex items-center gap-3 lg:hidden">
          <Link
            to={alternatePath}
            className={cn(
              'text-[12px] uppercase tracking-[0.12em]',
              light ? 'text-white/60' : 'text-muted-foreground',
            )}
          >
            {uiStrings.switchLang[locale]}
          </Link>
          <button
            type="button"
            aria-label={uiStrings.menu[locale]}
            onClick={onOpenMenu}
            className={cn(
              'grid size-9 place-items-center border',
              light ? 'border-white/25 text-white' : 'border-border bg-white text-foreground',
            )}
          >
            <Menu className="size-4" />
          </button>
        </div>
      </div>
    </>
  )
}

/** Absolute overlay header for heroes */
export function SiteHeader({ locale, light = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header
        className={cn(
          'absolute inset-x-0 top-0 z-30 px-[var(--page-padding)] pt-2',
          light ? 'text-white' : 'text-foreground',
        )}
      >
        <HeaderNav locale={locale} light={light} onOpenMenu={() => setOpen(true)} />
      </header>
      <MobileMenu locale={locale} open={open} onClose={() => setOpen(false)} />
    </>
  )
}

/** Fixed header that reveals when the user scrolls up */
export function StickySiteHeader({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false)
  const [visible, setVisible] = useState(false)
  const lastY = useRef(0)
  const ticking = useRef(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })

  useEffect(() => {
    lastY.current = window.scrollY

    const update = () => {
      const y = window.scrollY
      const delta = y - lastY.current

      if (y < 120) {
        setVisible(false)
      } else if (delta < -6) {
        setVisible(true)
      } else if (delta > 6) {
        setVisible(false)
      }

      lastY.current = y
      ticking.current = false
    }

    const onScroll = () => {
      if (ticking.current) return
      ticking.current = true
      window.requestAnimationFrame(update)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setVisible(false)
    setOpen(false)
    lastY.current = window.scrollY
  }, [locale, pathname])

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 border-b border-border bg-white/95 px-[var(--page-padding)] pt-2 text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.06)] backdrop-blur-md transition-transform duration-300 ease-out',
          visible ? 'translate-y-0' : '-translate-y-full pointer-events-none',
        )}
        aria-hidden={!visible}
      >
        <HeaderNav locale={locale} light={false} onOpenMenu={() => setOpen(true)} />
      </header>
      <MobileMenu locale={locale} open={open} onClose={() => setOpen(false)} />
    </>
  )
}
