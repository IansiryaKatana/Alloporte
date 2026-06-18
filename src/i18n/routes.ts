import type { CityId, Locale, PageId } from './types'

export const LOCALES: Locale[] = ['en', 'fr']

export const PAGE_SLUGS: Record<PageId, Record<Locale, string>> = {
  home: { en: '', fr: '' },
  'anti-squat-doors': { en: 'anti-squat-doors', fr: 'portes-anti-squat' },
  'temporary-steel-security-doors': {
    en: 'temporary-steel-security-doors',
    fr: 'portes-de-securite-temporaires-acier',
  },
  'access-protection': { en: 'access-protection', fr: 'protection-des-acces' },
  'keyless-access-control': {
    en: 'keyless-access-control',
    fr: 'controle-acces-sans-cle',
  },
  pricing: { en: 'pricing', fr: 'tarifs' },
  quote: { en: 'quote', fr: 'devis' },
  contact: { en: 'contact', fr: 'contact' },
  'technical-specifications': {
    en: 'technical-specifications',
    fr: 'specifications-techniques',
  },
  'france-anti-squat-law': {
    en: 'france-anti-squat-law',
    fr: 'loi-anti-squat-france',
  },
  'how-anti-squat-doors-work': {
    en: 'how-anti-squat-doors-work',
    fr: 'comment-fonctionnent-portes-anti-squat',
  },
  faq: { en: 'faq', fr: 'faq' },
  certifications: { en: 'certifications', fr: 'certifications' },
  france: { en: 'france', fr: 'france' },
  'case-studies': { en: 'case-studies', fr: 'etudes-de-cas' },
  about: { en: 'about', fr: 'a-propos' },
  reviews: { en: 'reviews', fr: 'avis' },
  'privacy-policy': { en: 'privacy-policy', fr: 'politique-confidentialite' },
  'cookie-policy': { en: 'cookie-policy', fr: 'politique-cookies' },
  terms: { en: 'terms', fr: 'conditions' },
  'legal-notice': { en: 'legal-notice', fr: 'mentions-legales' },
}

export const CITIES: CityId[] = [
  'paris',
  'marseille',
  'lyon',
  'lille',
  'toulouse',
  'nice',
  'bordeaux',
]

const slugToPageId = new Map<string, PageId>()

for (const [pageId, slugs] of Object.entries(PAGE_SLUGS) as [PageId, Record<Locale, string>][]) {
  for (const locale of LOCALES) {
    const slug = slugs[locale]
    if (slug) {
      slugToPageId.set(`${locale}:${slug}`, pageId)
    }
  }
}

export function resolvePageId(locale: Locale, slug: string): PageId | null {
  return slugToPageId.get(`${locale}:${slug}`) ?? null
}

export function pagePath(locale: Locale, pageId: PageId): string {
  const slug = PAGE_SLUGS[pageId][locale]
  if (!slug) return `/${locale}`
  return `/${locale}/${slug}`
}

export function cityPath(locale: Locale, cityId: CityId): string {
  return `/${locale}/france/${cityId}`
}

export function isValidLocale(value: string): value is Locale {
  return LOCALES.includes(value as Locale)
}

export function isValidCity(value: string): value is CityId {
  return CITIES.includes(value as CityId)
}

/** Switch the current path to the equivalent page in the other locale */
export function alternateLocalePath(pathname: string): string {
  const parts = pathname.split('/').filter(Boolean)
  const currentLocale = parts[0]

  if (currentLocale !== 'en' && currentLocale !== 'fr') {
    return '/fr'
  }

  const other: Locale = currentLocale === 'en' ? 'fr' : 'en'

  if (parts.length === 1) {
    return pagePath(other, 'home')
  }

  if (parts[1] === 'france' && parts[2] && isValidCity(parts[2])) {
    return cityPath(other, parts[2])
  }

  const pageId = resolvePageId(currentLocale, parts[1])
  if (pageId) {
    return pagePath(other, pageId)
  }

  return pagePath(other, 'home')
}
