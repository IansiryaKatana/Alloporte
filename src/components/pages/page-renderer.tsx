import { Link } from '@tanstack/react-router'
import { useState, type FormEvent } from 'react'
import type { Value } from 'react-phone-number-input'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import type { Locale, PageId } from '@/i18n/types'
import { cityPath, pagePath } from '@/i18n/routes'
import type { PageContent, PageSection } from '@/data/pages/types'
import { SiteHeader } from '@/components/layout/site-header'
import { BlueDot, PageContainer, SectionLabel } from '@/components/layout/primitives'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { SafeImage } from '@/components/ui/safe-image'
import {
  buildContactWhatsAppMessage,
  buildQuoteWhatsAppMessage,
  openWhatsApp,
} from '@/lib/whatsapp'
import { PhoneInputField } from '@/components/ui/phone-input-field'
import { cn, trackEvent } from '@/lib/utils'

type PageRendererProps = {
  locale: Locale
  content: PageContent
}

function resolveLink(locale: Locale, pageId: PageId) {
  return pagePath(locale, pageId)
}

function resolveInternalHref(locale: Locale, link: { pageId?: PageId; cityId?: string }) {
  if (link.cityId) return cityPath(locale, link.cityId as Parameters<typeof cityPath>[1])
  if (link.pageId) return pagePath(locale, link.pageId)
  return `/${locale}`
}

function PageHero({ locale, hero }: { locale: Locale; hero: PageContent['hero'] }) {
  return (
    <section className="relative min-h-[280px] overflow-hidden bg-black text-white sm:min-h-[380px] md:min-h-[560px]">
      <SafeImage
        src={hero.image}
        alt={hero.imageAlt}
        className="hero-image-motion architectural-image absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/60" />
      <SiteHeader locale={locale} light />
      <PageContainer className="relative z-10 flex min-h-[280px] flex-col justify-end pb-6 pt-24 sm:min-h-[380px] md:min-h-[560px] md:pb-10">
        <SectionLabel light className="reveal mb-3">
          {hero.label}
        </SectionLabel>
        <h1 className="reveal max-w-4xl text-[clamp(2rem,8vw,5.5rem)] font-light leading-[0.88] tracking-[-0.06em] text-balance [animation-delay:80ms]">
          {hero.h1}
        </h1>
        {hero.subtitle && (
          <p className="reveal mt-4 max-w-2xl text-[11px] leading-snug text-white/70 text-desktop-min [animation-delay:160ms]">
            {hero.subtitle}
          </p>
        )}
        {(hero.primaryCta || hero.secondaryCta) && (
          <div className="reveal mt-6 flex flex-wrap gap-2 [animation-delay:240ms]">
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
  const delay = `${index * 60}ms`

  if (section.type === 'intro') {
    return (
      <PageContainer className="reveal py-8 md:py-16" style={{ animationDelay: delay }}>
        <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr] md:items-start">
          <SectionLabel>{section.label}</SectionLabel>
          <div>
            <h2 className="max-w-3xl text-[1.45rem] font-normal leading-[0.95] tracking-[-0.05em] text-balance md:text-[clamp(2.2rem,4.5vw,3.8rem)]">
              {section.heading}
            </h2>
            {section.body && (
              <p className="mt-4 max-w-2xl text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
                {section.body}
              </p>
            )}
          </div>
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'cards') {
    const cols = section.columns ?? 4
    return (
      <PageContainer className="reveal py-6 md:py-12" style={{ animationDelay: delay }}>
        {section.label && <SectionLabel>{section.label}</SectionLabel>}
        {section.heading && (
          <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]">
            {section.heading}
          </h2>
        )}
        <div
          className={cn(
            'mt-6 grid gap-1.5',
            cols === 2 && 'grid-cols-1 sm:grid-cols-2',
            cols === 3 && 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3',
            cols === 4 && 'grid-cols-2 md:grid-cols-4',
          )}
        >
          {section.items.map((item) => (
            <div
              key={item.title}
              className="min-h-[100px] border border-border bg-white p-3 md:min-h-[160px]"
            >
              {item.number && (
                <span className="text-[8px] text-neutral-500">{item.number}</span>
              )}
              <h3 className="mt-6 text-[13px] font-medium tracking-[-0.04em] md:mt-10 md:text-[22px] md:leading-tight">
                {item.title}
              </h3>
              <p className="mt-2 text-[8px] leading-snug text-muted-foreground text-desktop-min">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'dark-feature') {
    return (
      <PageContainer className="reveal py-3" style={{ animationDelay: delay }}>
        <div className="grid overflow-hidden rounded-md bg-[#030303] p-3 text-white md:grid-cols-[0.85fr_1.15fr] md:p-5">
          <div className="flex min-h-[360px] flex-col justify-between md:min-h-[520px]">
            <div>
              <SectionLabel light>{section.label}</SectionLabel>
              <h2 className="mt-6 max-w-lg text-[1.35rem] font-normal leading-[0.9] tracking-[-0.055em] md:text-[clamp(2.2rem,4vw,3.6rem)]">
                {section.heading}
              </h2>
              <p className="mt-4 max-w-md text-[9px] leading-snug text-white/55 md:text-xs">
                {section.body}
              </p>
            </div>
            {(section.sideTitle || section.cta) && (
              <div className="mt-6">
                {section.sideTitle && (
                  <h3 className="text-base font-medium tracking-[-0.04em]">{section.sideTitle}</h3>
                )}
                {section.sideBody && (
                  <p className="mt-2 text-[9px] leading-snug text-white/55">{section.sideBody}</p>
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
          <div className="relative mt-3 min-h-[280px] overflow-hidden rounded-sm md:mt-0 md:min-h-[520px]">
            <SafeImage
              src={section.image}
              alt={section.imageAlt}
              loading="lazy"
              className="cinematic-image h-full w-full object-cover"
            />
          </div>
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'steps') {
    return (
      <PageContainer className="reveal py-8 md:py-14" style={{ animationDelay: delay }}>
        <SectionLabel>{section.label}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]">
          {section.heading}
        </h2>
        <div className="mt-8 grid gap-1.5 md:grid-cols-5">
          {section.items.map((step) => (
            <div key={step.number} className="border border-border bg-white p-3">
              <span className="text-[9px] text-accent">{step.number}</span>
              <h3 className="mt-4 text-[12px] font-medium md:text-[18px]">{step.title}</h3>
              <p className="mt-2 text-[8px] leading-snug text-muted-foreground text-desktop-min">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'comparison' || section.type === 'table') {
    const headers = section.type === 'comparison' ? ['', ...section.columns] : section.headers
    const rows =
      section.type === 'comparison'
        ? section.rows.map((r) => ({ cells: [r.feature, ...r.values] }))
        : section.rows

    return (
      <PageContainer className="reveal py-8 md:py-14" style={{ animationDelay: delay }}>
        <SectionLabel>{section.label}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]">
          {section.heading}
        </h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[600px] border-collapse text-left text-[9px] md:text-[11px]">
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
                <tr key={ri} className="border-b border-border/70">
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
    )
  }

  if (section.type === 'faq') {
    return (
      <PageContainer className="reveal py-8 md:py-14" style={{ animationDelay: delay }}>
        <SectionLabel>{section.label}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]">
          {section.heading}
        </h2>
        <div className="mt-6 divide-y divide-border border-y border-border">
          {section.items.map((item) => (
            <details key={item.question} className="group py-4">
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
    )
  }

  if (section.type === 'metrics') {
    return (
      <section className="reveal grid grid-cols-1 border-y border-border bg-white sm:grid-cols-3" style={{ animationDelay: delay }}>
        {section.items.map((metric, i) => (
          <div
            key={metric.label}
            className={cn(
              'min-h-[125px] px-[var(--page-padding)] py-5 md:min-h-[190px] md:py-8',
              i < section.items.length - 1 && 'sm:border-r sm:border-border',
            )}
          >
            <p className="text-[clamp(2rem,8vw,4rem)] font-light leading-none tracking-[-0.08em]">
              {metric.value}
            </p>
            <h3 className="mt-5 text-[9px] font-medium uppercase tracking-[0.1em] md:text-xs">
              {metric.label}
            </h3>
            <p className="mt-2 text-[7px] leading-snug text-muted-foreground md:text-[11px]">
              {metric.description}
            </p>
          </div>
        ))}
      </section>
    )
  }

  if (section.type === 'text') {
    return (
      <PageContainer className="reveal py-8 md:py-12" style={{ animationDelay: delay }}>
        {section.label && <SectionLabel>{section.label}</SectionLabel>}
        {section.heading && (
          <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]">
            {section.heading}
          </h2>
        )}
        <div className="mt-4 max-w-3xl space-y-4">
          {section.paragraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
              {p}
            </p>
          ))}
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'checklist') {
    return (
      <PageContainer className="reveal py-8 md:py-12" style={{ animationDelay: delay }}>
        <SectionLabel>{section.label}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]">
          {section.heading}
        </h2>
        <ul className="mt-6 grid gap-2 md:grid-cols-2">
          {section.items.map((item) => (
            <li
              key={item}
              className="flex gap-3 border border-border bg-white p-3 text-[10px] leading-snug text-muted-foreground md:text-[13px]"
            >
              <span className="text-accent">—</span>
              {item}
            </li>
          ))}
        </ul>
      </PageContainer>
    )
  }

  if (section.type === 'disclaimer') {
    return (
      <PageContainer className="reveal py-4" style={{ animationDelay: delay }}>
        <p className="border-l-2 border-accent pl-4 text-[10px] leading-relaxed text-muted-foreground md:text-[12px]">
          {section.text}
        </p>
      </PageContainer>
    )
  }

  if (section.type === 'list-columns') {
    return (
      <PageContainer className="reveal py-8 md:py-12" style={{ animationDelay: delay }}>
        <SectionLabel>{section.label}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]">
          {section.heading}
        </h2>
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {section.columns.map((col) => (
            <div key={col.title} className="border border-border bg-white p-4">
              <h3 className="text-[12px] font-medium md:text-[16px]">{col.title}</h3>
              <ul className="mt-3 space-y-2">
                {col.items.map((item) => (
                  <li key={item} className="text-[9px] text-muted-foreground md:text-[12px]">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'links-grid') {
    return (
      <PageContainer className="reveal py-8 md:py-12" style={{ animationDelay: delay }}>
        <SectionLabel>{section.label}</SectionLabel>
        <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em]">
          {section.heading}
        </h2>
        <div className="mt-6 flex flex-wrap gap-2">
          {section.links.map((link) => (
            <Link
              key={link.label}
              to={resolveInternalHref(locale, link)}
              className="rounded-full border border-border bg-white px-3 py-2 text-[9px] uppercase tracking-[0.12em] transition hover:border-neutral-900"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'image-text') {
    return (
      <PageContainer className="reveal py-8 md:py-12" style={{ animationDelay: delay }}>
        <div
          className={cn(
            'grid items-center gap-6 md:grid-cols-2',
            section.reverse && 'md:[&>*:first-child]:order-2',
          )}
        >
          <div>
            <SectionLabel>{section.label}</SectionLabel>
            <h2 className="mt-4 text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]">
              {section.heading}
            </h2>
            <p className="mt-4 text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
              {section.body}
            </p>
          </div>
          <SafeImage
            src={section.image}
            alt={section.imageAlt}
            loading="lazy"
            className="architectural-image aspect-[4/3] w-full object-cover"
          />
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'cta') {
    return (
      <PageContainer className="reveal py-3" style={{ animationDelay: delay }}>
        <div className="relative min-h-[360px] overflow-hidden rounded-sm bg-black text-white md:min-h-[520px]">
          <SafeImage
            src={section.image}
            alt={section.imageAlt}
            loading="lazy"
            className="cinematic-image h-full min-h-[360px] w-full object-cover md:min-h-[520px]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-black/30" />
          <div className="absolute left-4 top-4 text-white">
            <SectionLabel light>{section.label}</SectionLabel>
          </div>
          <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-4 text-white md:flex-row md:items-end md:justify-between">
            <Button asChild size="sm">
              <Link to={resolveLink(locale, section.ctaPageId)}>
                {section.ctaLabel}
                <BlueDot />
              </Link>
            </Button>
            <h2 className="max-w-2xl text-[1.25rem] font-normal leading-[0.9] tracking-[-0.05em] text-balance md:text-right md:text-[clamp(2rem,4vw,3.5rem)]">
              {section.heading}
            </h2>
          </div>
        </div>
      </PageContainer>
    )
  }

  if (section.type === 'quote-form' || section.type === 'contact-info') {
    return <QuoteContactSection locale={locale} section={section} delay={delay} />
  }

  if (section.type === 'testimonials') {
    return <TestimonialsSection section={section} delay={delay} />
  }

  return null
}

function QuoteContactSection({
  locale,
  section,
  delay,
}: {
  locale: Locale
  section: Extract<PageSection, { type: 'quote-form' } | { type: 'contact-info' }>
  delay: string
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
    <PageContainer className="reveal py-8 md:py-14" style={{ animationDelay: delay }}>
      <SectionLabel>{section.label}</SectionLabel>
      <h2 className="mt-4 max-w-3xl text-[1.35rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3rem)]">
        {section.heading}
      </h2>
      <p className="mt-4 max-w-2xl text-[11px] leading-relaxed text-muted-foreground text-desktop-min">
        {section.description}
      </p>
      <p className="mt-3 max-w-2xl text-[10px] leading-relaxed text-muted-foreground">
        {locale === 'en'
          ? 'Submitting opens WhatsApp with your details pre-filled. You can attach opening photos directly in the chat.'
          : 'L\'envoi ouvre WhatsApp avec vos informations pré-remplies. Vous pourrez joindre les photos de l\'ouverture directement dans la conversation.'}
      </p>
      {submitted ? (
        <div className="mt-6 space-y-2">
          <p className="text-[12px] font-medium text-foreground">
            {locale === 'en'
              ? 'WhatsApp should have opened with your message.'
              : 'WhatsApp devrait s\'être ouvert avec votre message.'}
          </p>
          <p className="text-[10px] text-muted-foreground">
            {locale === 'en'
              ? 'If it did not open, check your pop-up blocker or contact us on WhatsApp manually.'
              : 'Si rien ne s\'ouvre, vérifiez le bloqueur de fenêtres ou contactez-nous manuellement sur WhatsApp.'}
          </p>
        </div>
      ) : (
        <form className="mt-8 grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
          <label className="flex flex-col gap-1 text-[9px] uppercase tracking-[0.12em]">
            {locale === 'en' ? 'Full name' : 'Nom complet'}
            <input
              required
              name="name"
              autoComplete="name"
              className="border border-border bg-white px-3 py-2 text-[12px] normal-case"
            />
          </label>
          <label className="flex flex-col gap-1 text-[9px] uppercase tracking-[0.12em]">
            {locale === 'en' ? 'Email' : 'E-mail'}
            <input
              required
              type="email"
              name="email"
              autoComplete="email"
              className="border border-border bg-white px-3 py-2 text-[12px] normal-case"
            />
          </label>
          <label className="flex flex-col gap-1 text-[9px] uppercase tracking-[0.12em]">
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
          <label className="flex flex-col gap-1 text-[9px] uppercase tracking-[0.12em]">
            {locale === 'en' ? 'City / location' : 'Ville / localisation'}
            <input
              required
              name="city"
              className="border border-border bg-white px-3 py-2 text-[12px] normal-case"
            />
          </label>
          {isQuote && (
            <>
              <label className="flex flex-col gap-1 text-[9px] uppercase tracking-[0.12em] md:col-span-2">
                {locale === 'en' ? 'Opening dimensions (if known)' : 'Dimensions de l\'ouverture (si connues)'}
                <input name="dimensions" className="border border-border bg-white px-3 py-2 text-[12px] normal-case" />
              </label>
              <label className="flex flex-col gap-1 text-[9px] uppercase tracking-[0.12em] md:col-span-2">
                {locale === 'en' ? 'Photos / notes' : 'Photos / remarques'}
                <textarea
                  name="notes"
                  rows={4}
                  className="border border-border bg-white px-3 py-2 text-[12px] normal-case"
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
            <label className="flex flex-col gap-1 text-[9px] uppercase tracking-[0.12em] md:col-span-2">
              {locale === 'en' ? 'Message' : 'Message'}
              <textarea
                required
                name="message"
                rows={4}
                className="border border-border bg-white px-3 py-2 text-[12px] normal-case"
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
  delay,
}: {
  section: Extract<PageSection, { type: 'testimonials' }>
  delay: string
}) {
  const [active, setActive] = useState(0)
  const item = section.items[active]

  return (
    <PageContainer className="reveal grid gap-6 py-10 md:grid-cols-[0.85fr_1.15fr] md:items-center md:py-16" style={{ animationDelay: delay }}>
      <div>
        <SectionLabel>{section.label}</SectionLabel>
        <div className="mt-4 flex gap-2">
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
        <Card className="mt-4 overflow-hidden bg-[#d7e0df]">
          <CardContent className="relative min-h-[200px] p-5 md:min-h-[300px]">
            <SafeImage
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="architectural-image mx-auto h-32 w-24 object-cover md:h-48 md:w-36"
            />
            <p className="absolute bottom-5 left-5 text-[10px] uppercase tracking-[0.14em]">{item.name}</p>
          </CardContent>
        </Card>
      </div>
      <blockquote className="text-[1.3rem] font-normal leading-[0.92] tracking-[-0.05em] md:text-[clamp(2rem,4vw,3.2rem)]">
        {item.quote}
        <footer className="mt-6 text-[10px] uppercase tracking-[0.14em] text-muted-foreground">
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
        <PageContainer className="py-8">
          <SectionLabel># related</SectionLabel>
          <div className="mt-4 flex flex-wrap gap-2">
            {content.internalLinks.map((link) => (
              <Link
                key={link.label}
                to={resolveInternalHref(locale, link)}
                className="text-[9px] uppercase tracking-[0.12em] text-muted-foreground hover:text-foreground"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </PageContainer>
      )}
    </>
  )
}
