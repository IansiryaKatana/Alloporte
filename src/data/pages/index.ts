import type { Locale, PageId } from '@/i18n/types'
import type { PageContent, PagesByLocale } from '@/data/pages/types'
import { homeEn, antiSquatDoorsEn } from '@/data/pages/content/en/home-services'
import {
  steelDoorsEn,
  accessProtectionEn,
  keylessEn,
  pricingEn,
  quoteEn,
  contactEn,
} from '@/data/pages/content/en/services-pricing'
import {
  techSpecsEn,
  lawEn,
  howItWorksEn,
  faqEn,
  certificationsEn,
} from '@/data/pages/content/en/resources'
import {
  franceEn,
  caseStudiesEn,
  aboutEn,
  reviewsEn,
  privacyEn,
  cookieEn,
  termsEn,
  legalNoticeEn,
} from '@/data/pages/content/en/company-legal'
import { pagesFr } from '@/data/pages/content/fr/all-pages'

const pagesEn: PagesByLocale = {
  home: homeEn,
  'anti-squat-doors': antiSquatDoorsEn,
  'temporary-steel-security-doors': steelDoorsEn,
  'access-protection': accessProtectionEn,
  'keyless-access-control': keylessEn,
  pricing: pricingEn,
  quote: quoteEn,
  contact: contactEn,
  'technical-specifications': techSpecsEn,
  'france-anti-squat-law': lawEn,
  'how-anti-squat-doors-work': howItWorksEn,
  faq: faqEn,
  certifications: certificationsEn,
  france: franceEn,
  'case-studies': caseStudiesEn,
  about: aboutEn,
  reviews: reviewsEn,
  'privacy-policy': privacyEn,
  'cookie-policy': cookieEn,
  terms: termsEn,
  'legal-notice': legalNoticeEn,
}

const byLocale: Record<Locale, PagesByLocale> = {
  en: pagesEn,
  fr: pagesFr,
}

export function getPageContent(locale: Locale, pageId: PageId): PageContent {
  return byLocale[locale][pageId]
}

export function getAllPageIds(): PageId[] {
  return Object.keys(pagesEn) as PageId[]
}
