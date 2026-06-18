import type { CityId, Locale, PageId } from '@/i18n/types'
import { cityPath, pagePath } from '@/i18n/routes'
import {
  contactEmail,
  phoneHref,
  phoneLabel,
  whatsappHref,
} from '@/data/contact'

export type NavLink = {
  label: Record<Locale, string>
  pageId?: PageId
  cityId?: CityId
  href?: string
}

export type NavGroup = {
  label: Record<Locale, string>
  links: NavLink[]
}

export const quotePageId: PageId = 'quote'

export { contactEmail, phoneHref, phoneLabel, whatsappHref }

export const serviceLinks: NavLink[] = [
  { label: { en: 'Anti-Squat Doors', fr: 'Portes anti-squat' }, pageId: 'anti-squat-doors' },
  {
    label: { en: 'Temporary Steel Security Doors', fr: 'Portes de sécurité temporaires acier' },
    pageId: 'temporary-steel-security-doors',
  },
  { label: { en: 'Access Protection', fr: 'Protection des accès' }, pageId: 'access-protection' },
  {
    label: { en: 'Keyless Access Control', fr: 'Contrôle d\'accès sans clé' },
    pageId: 'keyless-access-control',
  },
]

export const resourceLinks: NavLink[] = [
  {
    label: { en: 'How Anti-Squat Doors Work', fr: 'Comment fonctionnent les portes anti-squat' },
    pageId: 'how-anti-squat-doors-work',
  },
  {
    label: { en: 'Anti-Squat Law in France', fr: 'Loi anti-squat en France' },
    pageId: 'france-anti-squat-law',
  },
  {
    label: { en: 'Technical Specifications', fr: 'Spécifications techniques' },
    pageId: 'technical-specifications',
  },
  { label: { en: 'Pricing', fr: 'Tarifs' }, pageId: 'pricing' },
  { label: { en: 'FAQ', fr: 'FAQ' }, pageId: 'faq' },
  { label: { en: 'Certifications', fr: 'Certifications' }, pageId: 'certifications' },
]

export const locationLinks: NavLink[] = [
  { label: { en: 'France', fr: 'France' }, pageId: 'france' },
  { label: { en: 'Paris', fr: 'Paris' }, cityId: 'paris' },
  { label: { en: 'Marseille', fr: 'Marseille' }, cityId: 'marseille' },
  { label: { en: 'Lyon', fr: 'Lyon' }, cityId: 'lyon' },
  { label: { en: 'Lille', fr: 'Lille' }, cityId: 'lille' },
  { label: { en: 'Toulouse', fr: 'Toulouse' }, cityId: 'toulouse' },
  { label: { en: 'Nice', fr: 'Nice' }, cityId: 'nice' },
  { label: { en: 'Bordeaux', fr: 'Bordeaux' }, cityId: 'bordeaux' },
]

export const companyLinks: NavLink[] = [
  { label: { en: 'About', fr: 'À propos' }, pageId: 'about' },
  { label: { en: 'Case Studies', fr: 'Études de cas' }, pageId: 'case-studies' },
  { label: { en: 'Contact', fr: 'Contact' }, pageId: 'contact' },
  { label: { en: 'Reviews', fr: 'Avis' }, pageId: 'reviews' },
]

export const legalLinks: NavLink[] = [
  { label: { en: 'Privacy Policy', fr: 'Politique de confidentialité' }, pageId: 'privacy-policy' },
  { label: { en: 'Cookie Policy', fr: 'Politique cookies' }, pageId: 'cookie-policy' },
  { label: { en: 'Terms', fr: 'Conditions' }, pageId: 'terms' },
  { label: { en: 'Legal Notice', fr: 'Mentions légales' }, pageId: 'legal-notice' },
]

export const headerNav: NavGroup[] = [
  { label: { en: 'Services', fr: 'Services' }, links: serviceLinks },
  { label: { en: 'Resources', fr: 'Ressources' }, links: resourceLinks },
  { label: { en: 'Service Areas', fr: 'Zones d\'intervention' }, links: locationLinks },
]

export function resolveNavHref(locale: Locale, link: NavLink): string {
  if (link.href) return link.href
  if (link.cityId) return cityPath(locale, link.cityId)
  if (link.pageId) return pagePath(locale, link.pageId)
  return `/${locale}`
}

export const uiStrings = {
  requestQuote: { en: 'Request a Quote', fr: 'Demander un devis' },
  caseStudies: { en: 'Case Studies', fr: 'Études de cas' },
  contact: { en: 'Contact', fr: 'Contact' },
  menu: { en: 'Menu', fr: 'Menu' },
  close: { en: 'Close', fr: 'Fermer' },
  switchLang: { en: 'FR', fr: 'EN' },
  copyright: { en: '(c) Copyright 2026. All rights reserved.', fr: '(c) Copyright 2026. Tous droits réservés.' },
  tagline: {
    en: 'Anti-squat doors and access protection for vacant properties across France.',
    fr: 'Portes anti-squat et protection des accès pour biens vacants en France.',
  },
  services: { en: 'Services', fr: 'Services' },
  resources: { en: 'Resources', fr: 'Ressources' },
  locations: { en: 'Locations', fr: 'Localisations' },
  company: { en: 'Company', fr: 'Entreprise' },
  legal: { en: 'Legal', fr: 'Légal' },
}
