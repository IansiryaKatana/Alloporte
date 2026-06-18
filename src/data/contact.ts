/** Single source for AlloPorte contact channels */

export const contactEmail = 'hello@alloporte.com'

/** WhatsApp number in international format without + or spaces */
export const whatsappNumber = '32478121805'

export const phoneE164 = `+${whatsappNumber}`

export const phoneHref = `tel:${phoneE164}`

export const phoneLabel = { en: 'Call us now', fr: 'Appelez-nous' }

export const defaultWhatsappMessage = {
  en: 'Hello AlloPorte, I need a quote for property protection.',
  fr: 'Bonjour AlloPorte, je souhaite un devis pour la protection de mon bien.',
}

export function buildWhatsAppHref(text: string): string {
  return `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(text)}`
}

export const whatsappHref = buildWhatsAppHref(defaultWhatsappMessage.en)
