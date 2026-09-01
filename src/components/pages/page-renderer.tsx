import { Link } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'
import type { Value } from 'react-phone-number-input'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Locale, PageId } from '@/i18n/types'
import { cityPath, pagePath } from '@/i18n/routes'
import type { CaseStudyTabId, DarkFeatureContent, PageContent, PageSection } from '@/data/pages/types'
import { BandedSection, SectionBand } from '@/components/layout/section-band'
import { SiteHeader } from '@/components/layout/site-header'
import { BlueDot, PageContainer, SectionLabel } from '@/components/layout/primitives'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SafeImage } from '@/components/ui/safe-image'
import { useHeroMotion, useMotionRef } from '@/hooks/use-section-motion'
import {
  buildContactWhatsAppMessage,
  buildQuoteWhatsAppMessage,
  openWhatsApp,
} from '@/lib/whatsapp'
import { PhoneInputField } from '@/components/ui/phone-input-field'
import { CardsCarousel } from '@/components/pages/cards-carousel'
import { cn, trackEvent } from '@/lib/utils'

type PageRendererProps = {
  locale: Locale
  content: PageContent
}

function resolveLink(locale: Locale, pageId: PageId) {
  return pagePath(locale, pageId)
}

const CASE_STUDY_TAB_ORDER: CaseStudyTabId[] = ['portfolio', 'commercial', 'residential']

const CASE_STUDY_TAB_LABELS: Record<CaseStudyTabId, Record<Locale, string>> = {
  portfolio: { en: 'Portfolio', fr: 'Portefeuille' },
  commercial: { en: 'Commercial', fr: 'Commercial' },
  residential: { en: 'Residential', fr: 'Résidentiel' },
}

function DarkFeaturePanel({
  locale,
  section,
  layout = 'default',
}: {
  locale: Locale
  section: DarkFeatureContent
  layout?: 'default' | 'viewport-square'
}) {
  const isViewportSquare = layout === 'viewport-square'

  return (
    <div
      className={cn(
        'overflow-hidden rounded-md bg-[#030303] p-3 text-white md:p-5',
        isViewportSquare
          ? 'flex flex-col md:min-h-[calc(100svh-6rem)] md:flex-row md:items-stretch'
          : 'grid md:grid-cols-[0.85fr_1.15fr]',
      )}
    >
      <div
        className={cn(
          'flex flex-col justify-between',
          isViewportSquare ? 'min-h-0 min-w-0 flex-1' : 'min-h-[360px] md:min-h-[520px]',
        )}
      >
        <div>
          <SectionLabel light>{section.label}</SectionLabel>
          <h2
            data-motion="heading"
            className="mt-6 max-w-lg text-[1.35rem] font-normal leading-[0.9] tracking-[-0.055em] md:text-[clamp(2.2rem,4vw,3.6rem)]"
          >
            {section.heading}
          </h2>
          <p data-motion="copy" className="mt-4 max-w-md text-[9px] leading-snug text-white/55 text-desktop-min">
            {section.body}
          </p>
        </div>
        {(section.sideTitle || section.cta) && (
          <div data-motion="item" className="mt-6">
            {section.sideTitle && (
              <h3 className="text-base font-medium tracking-[-0.04em] md:text-xl">{section.sideTitle}</h3>
            )}
            {section.sideBody && (
              <p className="mt-2 text-[9px] leading-snug text-white/55 text-desktop-min">{section.sideBody}</p>
            )}
            {section.cta && (
              <Button asChild size="sm" className="mt-5">
                <Link to={resolveLink(locale, section.cta.pageId)}>
                  {section.cta.label}
                  <BlueDot />
                </Link>
              </Button>
            )}
          </div>
        )}
      </div>
      <div
        className={cn(
          'relative overflow-hidden rounded-sm',
          isViewportSquare
            ? 'mt-3 aspect-square w-full md:mt-0 md:h-auto md:w-[min(58%,calc(100vh-2.5rem))] md:shrink-0 md:self-center'
            : 'mt-3 min-h-[280px] md:mt-0 md:min-h-[520px]',
        )}
      >
        <SafeImage
          src={section.image}
          alt={section.imageAlt}
          loading="lazy"
          data-motion="item"
          className="cinematic-image h-full w-full object-cover"
        />
      </div>
    </div>
  )
}

function CaseStudyTabsSection({
  locale,
  section,
}: {
  locale: Locale
  section: Extract<PageSection, { type: 'case-study-tabs' }>
}) {
  const [activeTab, setActiveTab] = useState<CaseStudyTabId>('portfolio')
  const [activeIndex, setActiveIndex] = useState(0)

  const items = section.tabs[activeTab]
  const item = items[activeIndex] ?? items[0]
  const hasCarousel = items.length > 1

  function selectTab(tab: CaseStudyTabId) {
    setActiveTab(tab)
    setActiveIndex(0)
  }

  return (
    <PageContainer>
      <div className="flex flex-wrap gap-2 border-b border-border pb-4">
          {CASE_STUDY_TAB_ORDER.map((tab) => (
          <button
            key={tab}
            type="button"
            data-motion="item"
            onClick={() => selectTab(tab)}
            className={cn(
              'rounded-full border px-4 py-2 text-[12px] uppercase tracking-[0.12em] transition md:text-[13px]',
              activeTab === tab
                ? 'border-neutral-900 bg-neutral-900 text-white'
                : 'border-border bg-white text-muted-foreground hover:border-neutral-900 hover:text-foreground',
            )}
          >
            {CASE_STUDY_TAB_LABELS[tab][locale]}
          </button>
        ))}
      </div>

      <div className="relative mt-6">
        {hasCarousel && (
          <div className="mb-4 flex items-center justify-between gap-4">
            <div className="flex gap-2">
              <button
                type="button"
                aria-label={locale === 'en' ? 'Previous case study' : 'Étude de cas précédente'}
                onClick={() => setActiveIndex((i) => (i - 1 + items.length) % items.length)}
                className="grid size-8 place-items-center border border-border bg-white"
              >
                <ArrowLeft className="size-3" />
              </button>
              <button
                type="button"
                aria-label={locale === 'en' ? 'Next case study' : 'Étude de cas suivante'}
                onClick={() => setActiveIndex((i) => (i + 1) % items.length)}
                className="grid size-8 place-items-center bg-accent text-accent-foreground"
              >
                <ArrowRight className="size-3" />
              </button>
            </div>
            <p className="text-[12px] uppercase tracking-[0.12em] text-muted-foreground md:text-[13px]">
              {activeIndex + 1} / {items.length}
            </p>
          </div>
        )}

        {item && <DarkFeaturePanel locale={locale} section={item} key={`${activeTab}-${activeIndex}`} />}
      </div>
    </PageContainer>
  )
}

function resolveInternalHref(locale: Locale, link: { pageId?: PageId; cityId?: string }) {
  if (link.cityId) return cityPath(locale, link.cityId as Parameters<typeof cityPath>[1])
  if (link.pageId) return pagePath(locale, link.pageId)
  return `/${locale}`
}

function OpenIndex({
  items,
}: {
  items: { number?: string; title: string; description: string }[]
}) {
  const numbered = items.some((item) => item.number)

  return (
    <div className="mt-10 divide-y divide-border border-y border-border">
      {items.map((item) => (
        <article
          key={item.title}
          data-motion="item"
          className={cn(
            'grid gap-2 py-6 md:items-baseline md:gap-10 md:py-8',
            numbered
              ? 'md:grid-cols-[4.75rem_minmax(0,0.85fr)_minmax(0,1.15fr)]'
              : 'md:grid-cols-[minmax(0,0.4fr)_minmax(0,0.6fr)]',
          )}
        >
          {numbered && (
            <span className="text-[11px] tabular-nums tracking-[0.16em] text-muted-foreground md:text-sm">
              {item.number}
            </span>
          )}
          <h3 className="text-[1.05rem] font-medium tracking-[-0.045em] md:text-[1.35rem] md:leading-tight">
            {item.title}
          </h3>
          <p className="max-w-xl text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  )
}

function PageHero({ locale, hero }: { locale: Locale; hero: PageContent['hero'] }) {
  const ref = useMotionRef<HTMLElement>()
  useHeroMotion(ref)

  return (
    <section ref={ref} className="relative min-h-svh overflow-hidden bg-black text-white">
      <div className="absolute inset-0 overflow-hidden">
        <SafeImage
          src={hero.image}
          alt={hero.imageAlt}
          data-motion="hero-image"
          className="architectural-image absolute inset-0 h-[115%] w-full object-cover will-change-transform"
          fetchPriority="high"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
      <SiteHeader locale={locale} light />
      <PageContainer className="relative z-10 flex min-h-svh flex-col justify-end pb-6 pt-24 md:pb-10">
        <SectionLabel light className="mb-3">
          {hero.label}
        </SectionLabel>
        <h1
          data-motion="heading"
          className="max-w-4xl text-[clamp(2rem,8vw,5.5rem)] font-light leading-[0.88] tracking-[-0.06em]"
        >
          {hero.h1}
        </h1>
        {hero.subtitle && (
          <p data-motion="copy" className="mt-4 max-w-2xl text-[11px] leading-snug text-white/70 text-desktop-min">
            {hero.subtitle}
          </p>
        )}
        {(hero.primaryCta || hero.secondaryCta) && (
          <div data-motion="item" className="mt-6 flex flex-wrap gap-2">
            {hero.primaryCta && (
              <Button asChild size="sm">
                <Link to={resolveLink(locale, hero.primaryCta.pageId)}>
                  {hero.primaryCta.label}
                  <BlueDot />
                </Link>
              </Button>
            )}
            {hero.secondaryCta && (
              <Button asChild size="sm" variant="ghost">
                <Link to={resolveLink(locale, hero.secondaryCta.pageId)}>
                  {hero.secondaryCta.label}
                </Link>
              </Button>
            )}
          </div>
        )}
      </PageContainer>
    </section>
  )
}

function SectionRenderer({ locale, section, index }: { locale: Locale; section: PageSection; index: number }) {
  if (section.type === 'intro') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <SectionLabel>{section.label}</SectionLabel>
            <div>
              <h2
                data-motion="heading"
                className="max-w-3xl text-[1.45rem] font-normal leading-[0.95] tracking-[-0.05em] md:text-[clamp(2.2rem,4.5vw,3.8rem)]"
              >
                {section.heading}
              </h2>
              {section.body && (
                <p data-motion="copy" className="mt-4 max-w-2xl text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
                  {section.body}
                </p>
              )}
            </div>
          </div>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'cards') {
    const cols = section.columns ?? 4
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        {section.label && <SectionLabel>{section.label}</SectionLabel>}
        {section.heading && (
          <h2
            data-motion="heading"
            className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]"
          >
            {section.heading}
          </h2>
        )}
        {section.carousel ? (
          <CardsCarousel items={section.items} />
        ) : section.items.some((item) => item.image) ? (
          <div
            className={cn(
              'mt-6 grid gap-1.5',
              cols === 2 && 'grid-cols-1 sm:grid-cols-2',
              cols === 3 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
              cols === 4 && 'grid-cols-2 md:grid-cols-4',
            )}
          >
            {section.items.map((item) => (
              <article
                key={item.title}
                data-motion="item"
                className="group relative aspect-[3/4] overflow-hidden"
              >
                <SafeImage
                  src={item.image}
                  alt={item.imageAlt ?? item.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/20" />
                <div className="absolute inset-0 flex flex-col justify-between p-3 text-white md:p-4">
                  {item.number && (
                    <span className="text-[11px] text-white/70 md:text-sm">{item.number}</span>
                  )}
                  <div>
                    <h3 className="text-[13px] font-medium tracking-[-0.04em] md:text-[22px] md:leading-tight">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[11px] leading-snug text-white/75 text-desktop-min">
                      {item.description}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <OpenIndex items={section.items} />
        )}
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'dark-feature') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
          <DarkFeaturePanel locale={locale} section={section} layout="viewport-square" />
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'case-study-tabs') {
    return (
      <BandedSection type={section.type} index={index}>
        <CaseStudyTabsSection locale={locale} section={section} />
      </BandedSection>
    )
  }

  if (section.type === 'steps') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <SectionLabel>{section.label}</SectionLabel>
        <h2
          data-motion="heading"
          className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]"
        >
          {section.heading}
        </h2>
        <ol className="mt-10 grid gap-8 border-t border-border pt-8 md:grid-cols-5 md:gap-6">
          {section.items.map((step) => (
            <li key={step.number} data-motion="item" className="min-w-0">
              <span className="text-[11px] tabular-nums tracking-[0.16em] text-accent md:text-sm">
                {step.number}
              </span>
              <h3 className="mt-4 text-[1.05rem] font-medium tracking-[-0.045em] md:text-[1.2rem] md:leading-tight">
                {step.title}
              </h3>
              <p className="mt-2 text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'comparison' || section.type === 'table') {
    const headers = section.type === 'comparison' ? ['', ...section.columns] : section.headers
    const rows =
      section.type === 'comparison'
        ? section.rows.map((r) => ({ cells: [r.feature, ...r.values] }))
        : section.rows

    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <SectionLabel>{section.label}</SectionLabel>
        <h2
          data-motion="heading"
          className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]"
        >
          {section.heading}
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-[9px] md:text-[15px]">
            <thead>
              <tr className="border-b border-border">
                {headers.map((h) => (
                  <th key={h} className="px-2 py-3 font-medium uppercase tracking-[0.1em]">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, ri) => (
                <tr key={ri} data-motion="item" className="border-b border-border/70">
                  {row.cells.map((cell, ci) => (
                    <td key={ci} className="px-2 py-3 text-muted-foreground">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'faq') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <SectionLabel>{section.label}</SectionLabel>
        <h2
          data-motion="heading"
          className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]"
        >
          {section.heading}
        </h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {section.items.map((item) => (
            <details key={item.question} data-motion="item" className="group py-4">
              <summary className="cursor-pointer list-none text-[12px] font-medium tracking-[-0.03em] md:text-[18px]">
                {item.question}
              </summary>
              <p className="mt-3 max-w-3xl text-[10px] leading-relaxed text-muted-foreground text-desktop-min">
                {item.answer}
              </p>
            </details>
          ))}
        </div>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'metrics') {
    return (
      <BandedSection type={section.type} index={index}>
        <div className="grid grid-cols-1 border-y border-border sm:grid-cols-3">
        {section.items.map((metric, i) => (
          <div
            key={metric.label}
            data-motion="item"
            className={cn(
              'min-h-[125px] px-[var(--page-padding)] py-5 md:min-h-[190px] md:py-8',
              i < section.items.length - 1 && 'sm:border-r sm:border-border',
            )}
          >
            <p className="text-[clamp(2rem,8vw,4rem)] font-light leading-none tracking-[-0.08em]">
              {metric.value}
            </p>
            <h3 className="mt-5 text-[11px] font-medium uppercase tracking-[0.1em] md:text-sm">
              {metric.label}
            </h3>
            <p className="mt-2 text-[11px] leading-snug text-muted-foreground text-desktop-min">
              {metric.description}
            </p>
          </div>
        ))}
        </div>
      </BandedSection>
    )
  }

  if (section.type === 'text') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <div className="grid gap-5 md:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] md:items-start md:gap-16">
          {section.label ? <SectionLabel>{section.label}</SectionLabel> : <span />}
          <div>
            {section.heading && (
              <h2
                data-motion="heading"
                className="max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]"
              >
                {section.heading}
              </h2>
            )}
            <div className="mt-5 max-w-2xl space-y-4">
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 40)} data-motion="copy" className="text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'checklist') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <SectionLabel>{section.label}</SectionLabel>
        <h2
          data-motion="heading"
          className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]"
        >
          {section.heading}
        </h2>
        <ul className="mt-10 grid gap-x-16 gap-y-0 md:grid-cols-2">
          {section.items.map((item) => (
            <li
              key={item}
              data-motion="item"
              className="flex gap-4 border-t border-border py-5 text-[11px] leading-relaxed text-muted-foreground text-desktop-min"
            >
              <span aria-hidden="true" className="mt-2 size-1 shrink-0 rounded-full bg-accent" />
              {item}
            </li>
          ))}
        </ul>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'disclaimer') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <p data-motion="copy" className="border-l-2 border-accent pl-4 text-[10px] leading-relaxed text-muted-foreground text-desktop-min">
          {section.text}
        </p>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'list-columns') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <SectionLabel>{section.label}</SectionLabel>
        <h2
          data-motion="heading"
          className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]"
        >
          {section.heading}
        </h2>
        <div className="mt-10 grid gap-10 border-t border-border pt-8 md:grid-cols-3 md:gap-0">
          {section.columns.map((col, colIndex) => (
            <div
              key={col.title}
              data-motion="item"
              className={cn(
                'md:px-10',
                colIndex === 0 && 'md:pl-0',
                colIndex === section.columns.length - 1 && 'md:pr-0',
                colIndex > 0 && 'md:border-l md:border-border',
              )}
            >
              <h3 className="text-[1.05rem] font-medium tracking-[-0.045em] md:text-[1.25rem]">
                {col.title}
              </h3>
              <ul className="mt-5 space-y-2.5">
                {col.items.map((item) => (
                  <li key={item} className="text-[11px] leading-snug text-muted-foreground text-desktop-min">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'links-grid') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <SectionLabel>{section.label}</SectionLabel>
        <h2
          data-motion="heading"
          className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em]"
        >
          {section.heading}
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {section.links.map((link) => (
            <Link
              key={link.label}
              data-motion="item"
              to={resolveInternalHref(locale, link)}
              className="rounded-full border border-border bg-white px-3 py-2 text-[12px] uppercase tracking-[0.12em] transition hover:border-neutral-900 md:text-[13px]"
            >
              {link.label}
            </Link>
          ))}
        </div>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'image-text') {
    return (
      <BandedSection type={section.type} index={index}>
        <PageContainer>
        <div
          className={cn(
            'grid items-center gap-6 md:grid-cols-2',
            section.reverse && 'md:[&>*:first-child]:order-2',
          )}
        >
          <div>
            <SectionLabel>{section.label}</SectionLabel>
            <h2
              data-motion="heading"
              className="mt-4 text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]"
            >
              {section.heading}
            </h2>
            <p data-motion="copy" className="mt-4 text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
              {section.body}
            </p>
          </div>
          <SafeImage
            src={section.image}
            alt={section.imageAlt}
            loading="lazy"
            data-motion="item"
            className="architectural-image aspect-[4/3] w-full object-cover"
          />
        </div>
        </PageContainer>
      </BandedSection>
    )
  }

  if (section.type === 'cta') {
    return (
      <BandedSection type={section.type} index={index} flush>
        <div className="relative min-h-svh flex-1 overflow-hidden bg-black text-white">
          <SafeImage
            src={section.image}
            alt={section.imageAlt}
            loading="lazy"
            className="cinematic-image absolute inset-0 h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
          <div className="absolute left-4 top-4 text-white md:left-[var(--page-padding)] md:top-8">
            <SectionLabel light>{section.label}</SectionLabel>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4 text-white md:bottom-8 md:left-[var(--page-padding)] md:right-[var(--page-padding)] md:flex-row md:items-end md:justify-between">
            <Button asChild size="sm" data-motion="item">
              <Link to={resolveLink(locale, section.ctaPageId)}>
                {section.ctaLabel}
                <BlueDot />
              </Link>
            </Button>
            <h2
              data-motion="heading"
              className="max-w-2xl text-[1.25rem] font-normal leading-[0.9] tracking-[-0.05em] md:text-right md:text-[clamp(2rem,4vw,3.5rem)]"
            >
              {section.heading}
            </h2>
          </div>
        </div>
      </BandedSection>
    )
  }

  if (section.type === 'quote-form' || section.type === 'contact-info') {
    return (
      <BandedSection type={section.type} index={index}>
        <QuoteContactSection locale={locale} section={section} />
      </BandedSection>
    )
  }

  if (section.type === 'testimonials') {
    return (
      <BandedSection type={section.type} index={index}>
        <TestimonialsSection section={section} />
      </BandedSection>
    )
  }

  return null
}

function QuoteContactSection({
  locale,
  section,
}: {
  locale: Locale
  section: Extract<PageSection, { type: 'quote-form' } | { type: 'contact-info' }>
}) {
  const [submitted, setSubmitted] = useState(false)
  const [phone, setPhone] = useState<Value>()
  const isQuote = section.type === 'quote-form'

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = new FormData(event.currentTarget)

    if (isQuote) {
      const message = buildQuoteWhatsAppMessage(
        {
          name: String(form.get('name') ?? ''),
          email: String(form.get('email') ?? ''),
          phone: String(form.get('phone') ?? ''),
          city: String(form.get('city') ?? ''),
          dimensions: String(form.get('dimensions') ?? '') || undefined,
          notes: String(form.get('notes') ?? '') || undefined,
        },
        locale,
      )
      trackEvent('quote_form_submit', { city: String(form.get('city') ?? '') })
      openWhatsApp(message)
    } else {
      const message = buildContactWhatsAppMessage(
        {
          name: String(form.get('name') ?? ''),
          email: String(form.get('email') ?? ''),
          phone: String(form.get('phone') ?? ''),
          city: String(form.get('city') ?? ''),
          message: String(form.get('message') ?? ''),
        },
        locale,
      )
      trackEvent('contact_form_submit', { city: String(form.get('city') ?? '') })
      openWhatsApp(message)
    }

    setSubmitted(true)
  }

  return (
    <PageContainer>
      <SectionLabel>{section.label}</SectionLabel>
      <h2
        data-motion="heading"
        className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]"
      >
        {section.heading}
      </h2>
      <p data-motion="copy" className="mt-4 max-w-2xl text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
        {section.description}
      </p>
      <p data-motion="copy" className="mt-3 max-w-2xl text-[10px] leading-relaxed text-muted-foreground text-desktop-min">
        {locale === 'en'
          ? 'Submitting opens WhatsApp with your details pre-filled. You can attach opening photos directly in the chat.'
          : 'L\'envoi ouvre WhatsApp avec vos informations pré-remplies. Vous pourrez joindre les photos de l\'ouverture directement dans la conversation.'}
      </p>
      {submitted ? (
        <div className="mt-6 space-y-2">
          <p className="text-[12px] font-medium text-foreground md:text-lg">
            {locale === 'en'
              ? 'WhatsApp should have opened with your message.'
              : 'WhatsApp devrait s\'être ouvert avec votre message.'}
          </p>
          <p className="text-[10px] text-muted-foreground text-desktop-min">
            {locale === 'en'
              ? 'If it did not open, check your pop-up blocker or contact us on WhatsApp manually.'
              : 'Si rien ne s\'ouvre, vérifiez le bloqueur de fenêtres ou contactez-nous manuellement sur WhatsApp.'}
          </p>
        </div>
      ) : (
        <form data-motion="item" className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.12em] md:text-[12px]">
            {locale === 'en' ? 'Full name' : 'Nom complet'}
            <input
              required
              name="name"
              autoComplete="name"
              className="border border-border bg-white px-3 py-2 text-[13px] normal-case md:text-[15px]"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.12em] md:text-[12px]">
            {locale === 'en' ? 'Email' : 'E-mail'}
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="border border-border bg-white px-3 py-2 text-[13px] normal-case md:text-[15px]"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.12em] md:text-[12px]">
            {locale === 'en' ? 'Phone' : 'Téléphone'}
            <PhoneInputField
              id="phone"
              name="phone"
              value={phone}
              onChange={setPhone}
              defaultCountry="FR"
              variant="public"
              className="normal-case"
            />
          </label>
          <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.12em] md:text-[12px]">
            {locale === 'en' ? 'City / location' : 'Ville / localisation'}
            <input
              required
              name="city"
              className="border border-border bg-white px-3 py-2 text-[13px] normal-case md:text-[15px]"
            />
          </label>
          {isQuote && (
            <>
              <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.12em] md:col-span-2 md:text-[12px]">
                {locale === 'en' ? 'Opening dimensions (if known)' : 'Dimensions de l\'ouverture (si connues)'}
                <input name="dimensions" className="border border-border bg-white px-3 py-2 text-[13px] normal-case md:text-[15px]" />
              </label>
              <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.12em] md:col-span-2 md:text-[12px]">
                {locale === 'en' ? 'Photos / notes' : 'Photos / remarques'}
                <textarea
                  name="notes"
                  rows={4}
                  className="border border-border bg-white px-3 py-2 text-[13px] normal-case md:text-[15px]"
                  placeholder={
                    locale === 'en'
                      ? 'Describe the opening, access constraints, or urgency'
                      : 'Décrivez l\'ouverture, les contraintes d\'accès ou l\'urgence'
                  }
                />
              </label>
            </>
          )}
          {!isQuote && (
            <label className="flex flex-col gap-1 text-[11px] uppercase tracking-[0.12em] md:col-span-2 md:text-[12px]">
              {locale === 'en' ? 'Message' : 'Message'}
              <textarea
                required
                name="message"
                rows={4}
                className="border border-border bg-white px-3 py-2 text-[13px] normal-case md:text-[15px]"
              />
            </label>
          )}
          <div className="md:col-span-2">
            <Button type="submit" size="md">
              {locale === 'en' ? 'Send via WhatsApp' : 'Envoyer via WhatsApp'}
              <BlueDot />
            </Button>
          </div>
        </form>
      )}
    </PageContainer>
  )
}

function TestimonialsSection({
  section,
}: {
  section: Extract<PageSection, { type: 'testimonials' }>
}) {
  const [active, setActive] = useState(0)
  const item = section.items[active]

  return (
    <PageContainer className="grid gap-6 md:grid-cols-[0.85fr_1.15fr] md:items-center">
      <div>
        <SectionLabel>{section.label}</SectionLabel>
        <div data-motion="item" className="mt-4 flex gap-2">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => setActive((i) => (i - 1 + section.items.length) % section.items.length)}
            className="grid size-8 place-items-center border border-border bg-white"
          >
            <ArrowLeft className="size-3" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => setActive((i) => (i + 1) % section.items.length)}
            className="grid size-8 place-items-center bg-accent text-accent-foreground"
          >
            <ArrowRight className="size-3" />
          </button>
        </div>
        <Card data-motion="item" className="mt-4 overflow-hidden bg-[#d7e0df]">
          <CardContent className="relative min-h-[200px] p-5 md:min-h-[300px]">
            <SafeImage
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="architectural-image mx-auto h-32 w-24 object-cover md:h-48 md:w-36"
            />
            <p className="absolute bottom-5 left-5 text-[12px] uppercase tracking-[0.14em] md:text-[13px]">{item.name}</p>
          </CardContent>
        </Card>
      </div>
      <blockquote
        data-motion="heading"
        className="text-[1.3rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]"
      >
        {item.quote}
        <footer className="mt-6 text-[12px] uppercase tracking-[0.14em] text-muted-foreground md:text-[13px]">
          {item.role}
        </footer>
      </blockquote>
    </PageContainer>
  )
}

export function PageRenderer({ locale, content }: PageRendererProps) {
  return (
    <>
      <PageHero locale={locale} hero={content.hero} />
      {content.sections.map((section, i) => (
        <SectionRenderer key={`${section.type}-${i}`} locale={locale} section={section} index={i} />
      ))}
      {content.internalLinks && content.internalLinks.length > 0 && (
        <SectionBand
          tone={content.sections.length % 2 === 0 ? 'mist' : 'paper'}
          size="compact"
        >
          <PageContainer>
            <SectionLabel># related</SectionLabel>
            <div className="mt-4 flex flex-wrap gap-2">
              {content.internalLinks.map((link) => (
                <Link
                  key={link.label}
                  data-motion="item"
                  to={resolveInternalHref(locale, link)}
                  className="text-[12px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground md:text-[13px]"
                >
                  {link.label} →
                </Link>
              ))}
            </div>
          </PageContainer>
        </SectionBand>
      )}
    </>
  )
}
