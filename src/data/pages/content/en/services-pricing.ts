import { pexelsImages, ctaImages } from '@/data/images'
import type { PageContent } from '@/data/pages/types'

const quoteCta = { label: 'Request a Quote', pageId: 'quote' as const }

export const steelDoorsEn: PageContent = {
  id: 'temporary-steel-security-doors',
  meta: {
    title: 'Temporary Steel Security Doors | AlloPorte',
    description: 'Temporary steel security doors for vacant homes, commercial units, and construction sites across France.',
  },
  hero: {
    label: '# steel security',
    h1: 'Temporary Steel Security Doors for Vacant Properties',
    subtitle: 'High-visibility physical barriers for void properties, renovation sites, and commercial exposures.',
    image: pexelsImages.steelDoor,
    imageAlt: 'Steel door on concrete wall',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'cards',
      label: '# use cases',
      heading: 'Where steel security doors perform best',
      columns: 3,
      items: [
        { title: 'Empty homes', description: 'Protect detached and semi-detached void properties.' },
        { title: 'Void properties', description: 'Portfolio-wide securing between tenancies.' },
        { title: 'Commercial units', description: 'Street-facing deterrent for retail and office voids.' },
        { title: 'Construction sites', description: 'Secure openings during active works.' },
        { title: 'Renovation properties', description: 'Controlled access while keeping the site sealed.' },
      ],
    },
    {
      type: 'cards',
      label: '# why steel',
      heading: 'Strong deterrent, controlled access',
      columns: 2,
      items: [
        { title: 'Visual deterrent', description: 'Immediate signal that the property is actively protected.' },
        { title: 'Physical barrier', description: 'Steel construction resists opportunistic forced entry.' },
        { title: 'Controlled access', description: 'Keyed, restricted, or keyless models available.' },
        { title: 'Flexible duration', description: 'Short-term void cover or longer deployment programmes.' },
      ],
    },
    {
      type: 'list-columns',
      label: '# pricing models',
      heading: 'Rent, buy, or managed protection',
      columns: [
        {
          title: 'Short-term rent',
          items: ['Ideal for brief voids between tenants', 'Includes installation and removal', 'Quote based on duration and opening count'],
        },
        {
          title: 'Purchase',
          items: ['For recurring portfolio needs', 'Asset remains yours for redeployment', 'Best for housing providers with regular voids'],
        },
        {
          title: 'Managed service',
          items: ['We handle install, access, and removal', 'Suited to insurers and asset managers', 'Multi-site pricing available'],
        },
      ],
    },
    {
      type: 'cards',
      label: '# access options',
      heading: 'Choose how people enter',
      columns: 3,
      items: [
        { title: 'Keyed access', description: 'Standard high-security cylinder with registered keys.' },
        { title: 'Restricted key', description: 'Keys controlled through authorised locksmith networks.' },
        { title: 'Keyless access', description: 'Time-limited digital codes for contractors and agents.' },
      ],
    },
    {
      type: 'comparison',
      label: '# compare',
      heading: 'Steel security door vs anti-squat door',
      columns: ['Steel security door', 'Anti-squat door'],
      rows: [
        { feature: 'Primary search intent', values: ['Steel / security door', 'Anti-squat / squat prevention'] },
        { feature: 'Visual weight', values: ['Maximum', 'High'] },
        { feature: 'Residential apartments', values: ['Yes', 'Yes — often preferred'] },
        { feature: 'Commercial voids', values: ['Often preferred', 'Yes'] },
        { feature: 'Keyless compatible', values: ['Yes', 'Yes'] },
      ],
    },
    {
      type: 'cta',
      label: '# recommendation',
      heading: 'Request a site-specific steel door recommendation.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.steelDoor,
      imageAlt: 'Temporary steel security door on a vacant opening',
    },
  ],
  internalLinks: [
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Access Protection', pageId: 'access-protection' },
    { label: 'Pricing', pageId: 'pricing' },
    { label: 'Keyless Access Control', pageId: 'keyless-access-control' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const accessProtectionEn: PageContent = {
  id: 'access-protection',
  meta: {
    title: 'Access Protection for Vacant Properties | AlloPorte',
    description: 'Physical barriers, controlled entry, and documented access processes for asset managers and housing providers.',
  },
  hero: {
    label: '# enterprise access',
    h1: 'Access Protection for Vacant and Sensitive Properties',
    subtitle: 'Physical barrier + controlled entry + documented process — scaled for portfolios.',
    image: pexelsImages.commercialUnit,
    imageAlt: 'Commercial building facade',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'text',
      label: '# definition',
      heading: 'What access protection means',
      paragraphs: [
        'Access protection combines a physical barrier at vulnerable openings with a controlled entry process and documented permissions. It is designed for situations where multiple stakeholders — owners, agents, contractors, insurers — need reliable, auditable access to a vacant or sensitive property.',
      ],
    },
    {
      type: 'cards',
      label: '# who needs this',
      heading: 'Enterprise and multi-stakeholder environments',
      columns: 3,
      items: [
        { title: 'Asset managers', description: 'Portfolio-wide vacancy and handover control.' },
        { title: 'Real estate companies', description: 'Sale and letting voids with agent access.' },
        { title: 'Housing associations', description: 'Void units with contractor and inspection access.' },
        { title: 'Contractors', description: 'Renovation sites requiring sealed-but-accessible openings.' },
        { title: 'Insurers', description: 'Post-incident securing with evidence trails.' },
        { title: 'Property management', description: 'Multi-owner buildings with shared access risk.' },
      ],
    },
    {
      type: 'cards',
      label: '# access risks',
      heading: 'Problems we solve',
      columns: 2,
      items: [
        { title: 'Lost keys', description: 'Uncontrolled copies circulating on vacant assets.' },
        { title: 'Contractor access', description: 'Multiple trades needing time-limited entry.' },
        { title: 'Unauthorised entry', description: 'Squatting, theft, and opportunistic occupation.' },
        { title: 'Empty property exposure', description: 'Visible voids without a physical deterrent.' },
        { title: 'Multiple stakeholders', description: 'Owners, agents, and managers with overlapping needs.' },
      ],
    },
    {
      type: 'cards',
      label: '# solutions',
      heading: 'Integrated protection stack',
      columns: 3,
      items: [
        { title: 'Anti-squat doors', description: 'Reinforced temporary doors for primary openings.' },
        { title: 'Steel doors', description: 'Maximum deterrent for high-exposure voids.' },
        { title: 'Keyless access', description: 'Digital permissions with add/remove control.' },
        { title: 'Screens', description: 'Additional visual barriers where needed.' },
        { title: 'Documentation', description: 'Handover records, access logs, and spec sheets.' },
      ],
    },
    {
      type: 'checklist',
      label: '# planning',
      heading: 'Access planning checklist',
      items: [
        'Who needs access — owner, agent, contractor, inspector?',
        'For how long — days, weeks, or months of vacancy?',
        'Which openings — front door, rear, commercial shutter?',
        'What risk level — street exposure, prior incident, portfolio policy?',
        'Is evidence needed — insurer, legal, or audit requirements?',
      ],
    },
    {
      type: 'cta',
      label: '# advisor',
      heading: 'Speak to an access protection advisor.',
      ctaLabel: 'Contact us',
      ctaPageId: 'contact',
      image: ctaImages.advisor,
      imageAlt: 'Security advisor reviewing property plans',
    },
  ],
  internalLinks: [
    { label: 'Keyless Access Control', pageId: 'keyless-access-control' },
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Technical Specifications', pageId: 'technical-specifications' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const keylessEn: PageContent = {
  id: 'keyless-access-control',
  meta: {
    title: 'Keyless Access Control for Protected Openings | AlloPorte',
    description: 'Digital access permissions for anti-squat doors and steel security doors on vacant properties.',
  },
  hero: {
    label: '# smart access',
    h1: 'Keyless Access Control for Protected Openings',
    subtitle: 'Reduce key-copying risk. Add, remove, and time-limit access on vacant assets.',
    image: pexelsImages.keylessAccess,
    imageAlt: 'Digital access control interface',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'intro',
      label: '# the problem',
      heading: 'Keys are risky when properties are vacant and multiple people need access.',
      body: 'Every copied key is a liability on a void property. Keyless access lets you grant time-limited permissions, revoke access instantly, and maintain a clearer record of who entered and when.',
    },
    {
      type: 'cards',
      label: '# benefits',
      heading: 'Why keyless on vacant assets',
      columns: 2,
      items: [
        { title: 'Reduce key copying', description: 'No unmanaged key duplicates in circulation.' },
        { title: 'Add/remove access', description: 'Instant permission changes for new contractors or agents.' },
        { title: 'Better control', description: 'Time windows and user-level permissions.' },
        { title: 'Contractor management', description: 'Simpler handover for renovation and inspection teams.' },
      ],
    },
    {
      type: 'steps',
      label: '# how it works',
      heading: 'Permission-based entry',
      items: [
        { number: '01', title: 'Access permissions', description: 'Define who can enter and on which openings.' },
        { number: '02', title: 'Time-limited access', description: 'Codes or credentials expire automatically.' },
        { number: '03', title: 'Emergency access', description: 'Documented override process for urgent entry.' },
        { number: '04', title: 'User management', description: 'Add and revoke users without changing locks.' },
      ],
    },
    {
      type: 'cards',
      label: '# compatible',
      heading: 'Works with our protection solutions',
      columns: 3,
      items: [
        { title: 'Anti-squat doors', description: 'Keyless modules on temporary reinforced doors.' },
        { title: 'Steel security doors', description: 'Digital access on high-deterrent installations.' },
        { title: 'Access protection plans', description: 'Keyless as part of a documented access strategy.' },
      ],
    },
    {
      type: 'cta',
      label: '# recommendation',
      heading: 'Request a keyless access recommendation for your opening.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.lockHardware,
      imageAlt: 'High-security lock for keyless access setup',
    },
  ],
  internalLinks: [
    { label: 'Access Protection', pageId: 'access-protection' },
    { label: 'Technical Specifications', pageId: 'technical-specifications' },
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const pricingEn: PageContent = {
  id: 'pricing',
  meta: {
    title: 'Anti-Squat Door Pricing and Cost Factors | AlloPorte',
    description: 'Understand anti-squat door pricing — opening size, door type, location, duration, and urgency.',
  },
  hero: {
    label: '# cost guide',
    h1: 'Anti-Squat Door Pricing and Cost Factors',
    subtitle: 'Transparent factors behind every quote — no hidden surprises.',
    image: pexelsImages.apartmentBlock,
    imageAlt: 'Residential apartment block',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'cards',
      label: '# cost factors',
      heading: 'What influences your quote',
      columns: 4,
      items: [
        { title: 'Opening size', description: 'Larger or non-standard openings require custom sizing.' },
        { title: 'Door type', description: 'Standard anti-squat vs reinforced steel security.' },
        { title: 'Lock / access', description: 'Keyed, restricted, or keyless access modules.' },
        { title: 'Location', description: 'City, access route, and deployment logistics.' },
        { title: 'Duration', description: 'Short void vs long-term portfolio deployment.' },
        { title: 'Urgency', description: 'Emergency installation may affect scheduling cost.' },
        { title: 'Number of openings', description: 'Multi-opening and multi-site discounts available.' },
      ],
    },
    {
      type: 'list-columns',
      label: '# models',
      heading: 'Pricing models',
      columns: [
        { title: 'Short-term protection', items: ['Weekly or monthly rental', 'Includes install and removal', 'Ideal for brief voids'] },
        { title: 'Long-term deployment', items: ['Discounted rates for extended periods', 'Suitable for slow-sale or probate assets', 'Access support included'] },
        { title: 'Multi-site pricing', items: ['Portfolio and housing-provider rates', 'Centralised access management', 'Custom SLA available'] },
        { title: 'Custom quotation', items: ['Every project is site-specific', 'Send photos for accurate scoping', 'No obligation recommendation'] },
      ],
    },
    {
      type: 'checklist',
      label: '# included',
      heading: 'What is typically included',
      items: [
        'Site-specific recommendation and scope confirmation',
        'Door product matched to opening and risk level',
        'Professional installation',
        'Access setup — keys, restricted keys, or keyless',
        'Handover documentation and specification reference',
      ],
    },
    {
      type: 'cards',
      label: '# increases cost',
      heading: 'What can increase cost',
      columns: 2,
      items: [
        { title: 'Emergency installation', description: 'Same-day or out-of-hours deployment.' },
        { title: 'Complex access', description: 'Difficult access routes, parking, or permissions.' },
        { title: 'Multiple floors', description: 'Upper-floor openings with handling constraints.' },
        { title: 'Non-standard opening', description: 'Oversized, arched, or damaged frames.' },
      ],
    },
    {
      type: 'quote-form',
      label: '# quote',
      heading: 'Send photos and dimensions for your quote',
      description: 'The fastest way to receive accurate pricing is to share opening photos, approximate dimensions, city, and urgency.',
    },
  ],
  internalLinks: [
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Temporary Steel Security Doors', pageId: 'temporary-steel-security-doors' },
    { label: 'Quote', pageId: 'quote' },
    { label: 'FAQ', pageId: 'faq' },
  ],
}

export const quoteEn: PageContent = {
  id: 'quote',
  meta: {
    title: 'Request a Quote | AlloPorte',
    description: 'Send opening photos and dimensions for a fast anti-squat door quote across France.',
  },
  hero: {
    label: '# fast quote',
    h1: 'Request a Quote',
    subtitle: 'Share photos, dimensions, and city — receive a site-specific recommendation.',
    image: pexelsImages.renovation,
    imageAlt: 'Property awaiting securing',
    primaryCta: { label: 'Contact advisor', pageId: 'contact' },
  },
  sections: [
    {
      type: 'steps',
      label: '# process',
      heading: 'What happens after you submit',
      items: [
        { number: '01', title: 'Review', description: 'An advisor reviews your opening photos and constraints.' },
        { number: '02', title: 'Recommend', description: 'We propose door type, lock, and access model.' },
        { number: '03', title: 'Quote', description: 'You receive a transparent scope and price.' },
        { number: '04', title: 'Schedule', description: 'Installation booked at your preferred urgency.' },
      ],
    },
    {
      type: 'quote-form',
      label: '# form',
      heading: 'Send your opening details',
      description: 'Include photos of the full opening, frame condition, access route, city, and any urgency notes.',
    },
  ],
  internalLinks: [
    { label: 'Pricing', pageId: 'pricing' },
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Technical Specifications', pageId: 'technical-specifications' },
  ],
}

export const contactEn: PageContent = {
  id: 'contact',
  meta: {
    title: 'Contact AlloPorte | Anti-Squat Door Advisors',
    description: 'Contact AlloPorte for anti-squat doors and access protection advice. Bilingual French and English support.',
  },
  hero: {
    label: '# contact',
    h1: 'Contact an Access Protection Advisor',
    subtitle: 'Bilingual French/English support for owners, landlords, and asset managers.',
    image: pexelsImages.teamAdvisor,
    imageAlt: 'Advisor ready to assist',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'contact-info',
      label: '# reach us',
      heading: 'Speak to our team',
      description: 'Email hello@alloporte.com or use the form below. For fastest quotes, use the quote form with opening photos.',
    },
    {
      type: 'metrics',
      items: [
        { value: 'EN/FR', label: 'Bilingual team', description: 'Advisors for domestic and international owners.' },
        { value: '24h', label: 'Response target', description: 'We aim to respond within one business day.' },
        { value: 'FR', label: 'Nationwide', description: 'Deployment across France with city specialists.' },
      ],
    },
  ],
  internalLinks: [
    { label: 'Request a Quote', pageId: 'quote' },
    { label: 'France Service Areas', pageId: 'france' },
    { label: 'FAQ', pageId: 'faq' },
  ],
}
