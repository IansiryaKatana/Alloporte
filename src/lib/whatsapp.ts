import { buildWhatsAppHref } from '@/data/contact'
import type { Locale } from '@/i18n/types'

export type QuoteFormData = {
  name: string
  email: string
  phone: string
  city: string
  dimensions?: string
  notes?: string
}

export type ContactFormData = {
  name: string
  email: string
  phone: string
  city: string
  message: string
}

function lines(...parts: (string | undefined)[]) {
  return parts.filter(Boolean).join('\n')
}

export function buildQuoteWhatsAppMessage(data: QuoteFormData, locale: Locale): string {
  const header =
    locale === 'en'
      ? 'Hello AlloPorte — Quote request from the website:'
      : 'Bonjour AlloPorte — Demande de devis depuis le site :'

  return lines(
    header,
    '',
    locale === 'en' ? `Name: ${data.name}` : `Nom : ${data.name}`,
    `Email: ${data.email}`,
    locale === 'en' ? `Phone: ${data.phone || '—'}` : `Téléphone : ${data.phone || '—'}`,
    locale === 'en' ? `City: ${data.city}` : `Ville : ${data.city}`,
    data.dimensions
      ? locale === 'en'
        ? `Opening dimensions: ${data.dimensions}`
        : `Dimensions ouverture : ${data.dimensions}`
      : undefined,
    data.notes
      ? locale === 'en'
        ? `Notes: ${data.notes}`
        : `Remarques : ${data.notes}`
      : undefined,
    '',
    locale === 'en'
      ? 'I will attach opening photos in this chat.'
      : 'Je joindrai les photos de l\'ouverture dans cette conversation.',
  )
}

export function buildContactWhatsAppMessage(data: ContactFormData, locale: Locale): string {
  const header =
    locale === 'en'
      ? 'Hello AlloPorte — Contact form from the website:'
      : 'Bonjour AlloPorte — Formulaire de contact depuis le site :'

  return lines(
    header,
    '',
    locale === 'en' ? `Name: ${data.name}` : `Nom : ${data.name}`,
    `Email: ${data.email}`,
    locale === 'en' ? `Phone: ${data.phone || '—'}` : `Téléphone : ${data.phone || '—'}`,
    locale === 'en' ? `City: ${data.city}` : `Ville : ${data.city}`,
    locale === 'en' ? `Message: ${data.message}` : `Message : ${data.message}`,
  )
}

export function openWhatsApp(message: string) {
  const url = buildWhatsAppHref(message)
  window.open(url, '_blank', 'noopener,noreferrer')
}
