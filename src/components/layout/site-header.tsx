import { useState } from 'react'
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
import { BlueDot } from '@/components/layout/primitives'
import { cn } from '@/lib/utils'

type SiteHeaderProps = {
  locale: Locale
  light?: boolean
}

export function SiteHeader({ locale, light = false }: SiteHeaderProps) {
  const [open, setOpen] = useState(false)
  const pathname = useRouterState({ select: (s) => s.location.pathname })
  const alternatePath = alternateLocalePath(pathname)

  const navItemClass = cn(
    'inline-flex h-7 shrink-0 items-center leading-none text-[8px] uppercase tracking-[0.14em]',
    light ? 'text-white/75 hover:text-white' : 'text-muted-foreground hover:text-foreground',
  )

  const navItemMutedClass = cn(
    'inline-flex h-7 shrink-0 items-center leading-none text-[8px] uppercase tracking-[0.14em]',
    light ? 'text-white/60 hover:text-white' : 'text-muted-foreground',
  )

  return (
    <>
      <header
        className={cn(
          'absolute inset-x-0 top-0 z-30 px-[var(--page-padding)] pt-2',
          light ? 'text-white' : 'text-foreground',
        )}
      >
        <div
          className={cn(
            'flex items-center justify-between border-b pb-1 text-[6px] uppercase tracking-[0.18em]',
            light ? 'border-white/20 text-white/75' : 'border-border text-muted-foreground',
          )}
        >
          <Link to={pagePath(locale, 'home')}>AlloPorte</Link>
          <span>{locale === 'en' ? 'France / EN' : 'France / FR'}</span>
        </div>
        <div className="flex items-center justify-between py-3">
          <Link
            to={pagePath(locale, 'home')}
            className={cn(
              'text-[8px] uppercase tracking-[0.14em]',
              light ? 'text-white/85' : 'text-foreground',
            )}
            aria-label="AlloPorte home"
          >
            AP / 26
          </Link>
          <nav className="hidden items-center gap-4 lg:flex">
            {headerNav.map((group) => (
              <div key={group.label.en} className="group relative inline-flex h-7 items-center">
                <button type="button" className={navItemClass}>
                  {group.label[locale]}
                </button>
                <div className="invisible absolute left-0 top-full z-40 min-w-[220px] border border-border bg-white py-2 opacity-0 shadow-[0_16px_45px_rgba(0,0,0,0.08)] transition group-hover:visible group-hover:opacity-100">
                  {group.links.map((link) => (
                    <Link
                      key={link.label.en}
                      to={resolveNavHref(locale, link)}
                      className="block px-4 py-2 text-[9px] uppercase tracking-[0.12em] text-neutral-700 hover:bg-neutral-50 hover:text-neutral-900"
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
          <div className="flex items-center gap-2 lg:hidden">
            <Link
              to={alternatePath}
              className={cn('text-[8px] uppercase tracking-[0.14em]', light ? 'text-white/60' : 'text-muted-foreground')}
            >
              {uiStrings.switchLang[locale]}
            </Link>
            <button
              type="button"
              aria-label={uiStrings.menu[locale]}
              onClick={() => setOpen(true)}
              className={cn(
                'grid size-8 place-items-center border',
                light ? 'border-white/25 text-white' : 'border-border bg-white text-foreground',
              )}
            >
              <Menu className="size-3.5" />
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <button
            type="button"
            aria-label="Close overlay"
            className="absolute inset-0 bg-black/40"
            onClick={() => setOpen(false)}
          />
          <div className="absolute inset-x-0 bottom-0 max-h-[85vh] overflow-y-auto rounded-t-lg bg-white p-[var(--page-padding)] pb-0 shadow-[0_-16px_45px_rgba(0,0,0,0.12)]">
            <div className="mb-4 flex items-center justify-between">
              <p className="text-[8px] uppercase tracking-[0.14em] text-muted-foreground">
                {uiStrings.menu[locale]}
              </p>
              <button
                type="button"
                aria-label={uiStrings.close[locale]}
                onClick={() => setOpen(false)}
                className="grid size-8 place-items-center border border-primary bg-primary text-primary-foreground"
              >
                <X className="size-3.5" />
              </button>
            </div>
            {headerNav.map((group) => (
              <div key={group.label.en} className="mb-5">
                <p className="mb-2 text-[7px] font-medium uppercase tracking-[0.18em] text-neutral-500">
                  {group.label[locale]}
                </p>
                <div className="flex flex-col gap-1">
                  {group.links.map((link) => (
                    <Link
                      key={link.label.en}
                      to={resolveNavHref(locale, link)}
                      onClick={() => setOpen(false)}
                      className="py-2 text-[10px] uppercase tracking-[0.12em] text-foreground"
                    >
                      {link.label[locale]}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
            <div className="sticky bottom-0 flex flex-col gap-2 border-t border-border bg-white py-4">
              <Button asChild size="md" variant="primary" className="w-full">
                <Link to={pagePath(locale, quotePageId)} onClick={() => setOpen(false)}>
                  {uiStrings.requestQuote[locale]}
                  <BlueDot />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
