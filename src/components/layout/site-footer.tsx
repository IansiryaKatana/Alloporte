import { Link } from '@tanstack/react-router'
import type { Locale } from '@/i18n/types'
import { pagePath } from '@/i18n/routes'
import {
  companyLinks,
  contactEmail,
  legalLinks,
  locationLinks,
  phoneHref,
  phoneLabel,
  resourceLinks,
  resolveNavHref,
  serviceLinks,
  uiStrings,
  type NavLink,
} from '@/data/navigation'
import { SectionLabel } from '@/components/layout/primitives'
import { trackEvent } from '@/lib/utils'

type SiteFooterProps = {
  locale: Locale
}

function FooterColumn({
  title,
  links,
  locale,
}: {
  title: string
  links: NavLink[]
  locale: Locale
}) {
  return (
    <div>
      <p className="mb-3 text-[8px] uppercase tracking-[0.14em] text-white/50">{title}</p>
      <div className="flex flex-col gap-1">
        {links.map((link) => (
          <Link
            key={link.label.en}
            to={resolveNavHref(locale, link)}
            className="py-1 text-[10px] uppercase tracking-[0.12em] text-white/70 hover:text-white"
          >
            {link.label[locale]}
          </Link>
        ))}
      </div>
    </div>
  )
}

export function SiteFooter({ locale }: SiteFooterProps) {
  const mailto = `mailto:${contactEmail}?subject=${encodeURIComponent(
    locale === 'en' ? 'AlloPorte enquiry' : 'Demande AlloPorte',
  )}`

  return (
    <footer className="overflow-hidden bg-[#030303] px-[var(--page-padding)] pt-7 text-white">
      <div className="grid gap-8 border-t border-white/15 pt-6 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-1">
          <SectionLabel light># alloporte</SectionLabel>
          <p className="mt-5 max-w-xs text-[11px] leading-snug text-white/60 text-desktop-min">
            {uiStrings.tagline[locale]}
          </p>
          <p className="mt-8 text-[9px] uppercase tracking-[0.12em] text-white/35">
            {uiStrings.copyright[locale]}
          </p>
        </div>
        <FooterColumn title={uiStrings.services[locale]} links={serviceLinks} locale={locale} />
        <FooterColumn title={uiStrings.resources[locale]} links={resourceLinks} locale={locale} />
        <FooterColumn title={uiStrings.locations[locale]} links={locationLinks} locale={locale} />
        <FooterColumn title={uiStrings.company[locale]} links={companyLinks} locale={locale} />
      </div>
      <div className="mt-6 grid gap-4 border-t border-white/10 py-6 md:grid-cols-2">
        <FooterColumn title={uiStrings.legal[locale]} links={legalLinks} locale={locale} />
        <div className="flex flex-col justify-end gap-2 text-[11px] text-white/60">
          <a
            href={phoneHref}
            onClick={() => trackEvent('footer_phone_click')}
            className="hover:text-white"
          >
            {phoneLabel[locale]}
          </a>
          <address className="not-italic">France — nationwide deployment</address>
        </div>
      </div>
      <a
        href={mailto}
        onClick={() => trackEvent('footer_email_click')}
        className="mask-reveal mt-8 block pb-2 text-[clamp(3rem,12vw,10rem)] font-light leading-[0.78] tracking-[-0.08em] text-white"
      >
        {contactEmail}
      </a>
    </footer>
  )
}
