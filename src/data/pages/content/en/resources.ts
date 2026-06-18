import { pexelsImages, ctaImages } from '@/data/images'
import type { PageContent } from '@/data/pages/types'

const quoteCta = { label: 'Request a Quote', pageId: 'quote' as const }

export const techSpecsEn: PageContent = {
  id: 'technical-specifications',
  meta: {
    title: 'Technical Specifications and Standards | AlloPorte',
    description: 'Anti-squat door specifications, EN standards scope, locking options, and installation requirements.',
  },
  hero: {
    label: '# specifications',
    h1: 'Technical Specifications, Standards and Certification Scope',
    subtitle: 'Clear, honest documentation — what is certified vs configurable on your project.',
    image: pexelsImages.steelDoor,
    imageAlt: 'Steel security door detail',
    primaryCta: { label: 'Download specification sheet', pageId: 'quote' },
  },
  sections: [
    {
      type: 'table',
      label: '# product table',
      heading: 'Product specification overview',
      headers: ['Attribute', 'Standard anti-squat', 'Reinforced steel', 'Notes'],
      rows: [
        { cells: ['Material', 'Steel panel and frame', 'Heavy-gauge steel', 'Sized to opening survey'] },
        { cells: ['Opening compatibility', 'Standard doors', 'Standard + commercial', 'Non-standard quoted separately'] },
        { cells: ['Locking options', 'Cylinder / restricted', 'High-security / keyless', 'Grade depends on configuration'] },
        { cells: ['Access options', 'Keyed / keyless', 'Keyed / keyless', 'Portfolio management available'] },
        { cells: ['Installation', 'Temporary mount', 'Temporary mount', 'Subject to wall/frame condition'] },
        { cells: ['Documentation', 'Spec sheet + checklist', 'Spec sheet + checklist', 'Available on request'] },
      ],
    },
    {
      type: 'text',
      label: '# standards',
      heading: 'Standards explained',
      paragraphs: [
        'EN 1627 — European classification for burglar resistance of doors. We reference this framework when specifying resistance classes appropriate to your risk level.',
        'EN 1630 — Companion standard for resistance testing methodology. Useful context when comparing product claims across suppliers.',
        'A2P — French certification for locks and cylinders (1 to 3 stars). We specify A2P-rated hardware where the project demands it.',
        'CNPP — Certification body context for fire and security products in France. We clarify CNPP relevance per configuration.',
        'Cylinder and lock standards — We match cylinder grade to door type, location risk, and insurer requirements.',
      ],
    },
    {
      type: 'disclaimer',
      text: 'Important: Not every configuration is fully certified as a complete door-set. We clearly state what is certified (e.g. lock cylinder A2P rating) versus what is configurable (e.g. frame adaptation to your opening). Ask for the certification scope document on your specific quote.',
    },
    {
      type: 'checklist',
      label: '# installation',
      heading: 'Installation notes',
      items: [
        'Opening type — single door, double door, commercial shutter surround',
        'Wall and support condition — substrate suitability for temporary frame',
        'Frame suitability — square, damage, existing hardware removal',
        'Measurement requirements — width, height, depth, lintel condition',
      ],
    },
    {
      type: 'cards',
      label: '# downloads',
      heading: 'Available documents',
      columns: 3,
      items: [
        { title: 'Technical sheet', description: 'Product dimensions, materials, and lock options.' },
        { title: 'Product brochure', description: 'Overview of anti-squat and steel door range.' },
        { title: 'Installation checklist', description: 'Pre-install survey and handover checklist.' },
      ],
    },
    {
      type: 'cta',
      label: '# download',
      heading: 'Download the specification sheet for your project.',
      ctaLabel: 'Request documents',
      ctaPageId: 'quote',
      image: ctaImages.lockHardware,
      imageAlt: 'Lock specification detail',
    },
  ],
  internalLinks: [
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Keyless Access Control', pageId: 'keyless-access-control' },
    { label: 'Certifications', pageId: 'certifications' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const lawEn: PageContent = {
  id: 'france-anti-squat-law',
  meta: {
    title: 'Anti-Squat Law in France | Prevention Guide',
    description: 'General guide to French squatting law, owner rights, and prevention for vacant property owners.',
  },
  hero: {
    label: '# legal guide',
    h1: 'Anti-Squat Law in France: Prevention Guide for Property Owners',
    subtitle: 'Understand the landscape — then secure your property before risk escalates.',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Urban residential facade in France',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'disclaimer',
      text: 'Disclaimer: This page provides general information only and does not constitute legal advice. Consult a qualified French property lawyer for case-specific guidance.',
    },
    {
      type: 'text',
      label: '# the law',
      heading: 'What the law covers',
      paragraphs: [
        'Unlawful occupation — Entering and remaining in a property without right or title may constitute squatting (occupation sans titre), with criminal and civil consequences depending on circumstances.',
        'Owner rights — Property owners have rights to protect their assets, including securing openings and initiating legal procedures to recover possession.',
        'Administrative procedures — Certain accelerated procedures exist for vacant properties meeting specific conditions. Eligibility depends on the facts of each case.',
        'Eviction context — Evicting occupants involves strict legal processes, timelines, and sometimes truce periods. Prevention is almost always faster and cheaper than recovery.',
      ],
    },
    {
      type: 'intro',
      label: '# prevention',
      heading: 'Why prevention still matters',
      body: 'Legal recovery can take months. Physical protection reduces the chance of occupation starting in the first place — and demonstrates proactive asset management to insurers and partners.',
    },
    {
      type: 'checklist',
      label: '# checklist',
      heading: 'Owner prevention checklist',
      items: [
        'Document property status — vacancy dates, inspections, meter readings',
        'Keep access records — who has keys or codes and when access was granted',
        'Secure vulnerable openings — doors, windows, and rear access points',
        'Act quickly after signs of entry — damage, mail accumulation, unknown presence',
      ],
    },
    {
      type: 'cards',
      label: '# methods',
      heading: 'Prevention methods',
      columns: 2,
      items: [
        { title: 'Anti-squat door', description: 'Visible reinforced barrier on primary openings.' },
        { title: 'Access control', description: 'Managed keys or keyless permissions with records.' },
        { title: 'Security inspection', description: 'Regular documented checks during vacancy.' },
        { title: 'Temporary steel door', description: 'High-deterrent option for exposed voids.' },
      ],
    },
    {
      type: 'faq',
      label: '# faq',
      heading: 'Legal FAQ',
      items: [
        {
          question: 'Can I remove squatters myself?',
          answer: 'Self-help eviction is generally not permitted in France. You must follow legal procedures. Securing the property before occupation is the recommended approach.',
        },
        {
          question: 'Does the winter truce apply?',
          answer: 'The winter truce (trêve hivernale) restricts certain evictions during a defined period each year. It does not prevent you from securing a vacant property proactively.',
        },
        {
          question: 'When should I secure a vacant property?',
          answer: 'As soon as the property becomes vacant — especially between tenants, during probate, or before marketing for sale.',
        },
        {
          question: 'Is an anti-squat door legal?',
          answer: 'Yes. Installing a temporary security door on your own property to prevent unauthorised entry is a standard prevention measure.',
        },
      ],
    },
    {
      type: 'cta',
      label: '# act now',
      heading: 'Secure the property before risk escalates.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.secureProperty,
      imageAlt: 'Vacant property requiring urgent securing',
    },
  ],
  internalLinks: [
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'How Anti-Squat Doors Work', pageId: 'how-anti-squat-doors-work' },
    { label: 'France Service Areas', pageId: 'france' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const howItWorksEn: PageContent = {
  id: 'how-anti-squat-doors-work',
  meta: {
    title: 'How Anti-Squat Doors Work | AlloPorte',
    description: 'Learn how anti-squat doors protect vacant properties — installation, access, and limitations.',
  },
  hero: {
    label: '# education',
    h1: 'How Anti-Squat Doors Work',
    subtitle: 'A clear explanation of what the door does — and what it does not replace.',
    image: pexelsImages.emptyInterior,
    imageAlt: 'Empty interior of vacant property',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'text',
      label: '# explanation',
      heading: 'Simple explanation',
      paragraphs: [
        'An anti-squat door is fitted over your existing entry opening. It provides a steel physical barrier with high-security locking that is visibly different from a standard door — signalling active protection.',
        'Authorised users enter via configured keys or keyless credentials. The door is designed for temporary use during vacancy and is removed when the property returns to normal occupation.',
      ],
    },
    {
      type: 'steps',
      label: '# process',
      heading: 'Installation process',
      items: [
        { number: '01', title: 'Photos', description: 'You share opening photos and property context.' },
        { number: '02', title: 'Measurements', description: 'Dimensions confirmed by survey or guided self-measure.' },
        { number: '03', title: 'Door selection', description: 'Type, lock grade, and access model chosen.' },
        { number: '04', title: 'Installation', description: 'Professional fitting and quality check.' },
        { number: '05', title: 'Access handover', description: 'Keys or keyless setup with documentation.' },
      ],
    },
    {
      type: 'cards',
      label: '# protects against',
      heading: 'What it protects against',
      columns: 2,
      items: [
        { title: 'Opportunistic entry', description: 'Casual break-in attempts on visibly vacant units.' },
        { title: 'Unauthorised access', description: 'Unknown persons entering without permission.' },
        { title: 'Door damage', description: 'Reinforced barrier protects the original opening.' },
        { title: 'Vacancy risk', description: 'Reduces squatting likelihood during void periods.' },
      ],
    },
    {
      type: 'cards',
      label: '# does not replace',
      heading: 'What it does not replace',
      columns: 2,
      items: [
        { title: 'Legal advice', description: 'Consult a lawyer for occupation or eviction matters.' },
        { title: 'Full site security', description: 'Rear windows and secondary openings may need additional measures.' },
        { title: 'Permanent upgrades', description: 'This is temporary protection, not architectural renovation.' },
      ],
    },
    {
      type: 'comparison',
      label: '# compare',
      heading: 'Protection options compared',
      columns: ['Boarding', 'Alarm only', 'Lock change', 'Armoured door'],
      rows: [
        { feature: 'Physical barrier', values: ['Yes', 'Yes', 'No', 'Partial', 'Yes'] },
        { feature: 'Deterrent visibility', values: ['Medium', 'Low', 'Low', 'High'] },
        { feature: 'Remote alert', values: ['No', 'Possible', 'No', 'Optional'] },
        { feature: 'Temporary', values: ['Yes', 'Yes', 'N/A', 'Usually no'] },
      ],
    },
    {
      type: 'cta',
      label: '# compare options',
      heading: 'Compare anti-squat door options for your opening.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.steelDoor,
      imageAlt: 'Temporary steel security door on a vacant opening',
    },
  ],
  internalLinks: [
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Pricing', pageId: 'pricing' },
    { label: 'Technical Specifications', pageId: 'technical-specifications' },
    { label: 'Law Guide', pageId: 'france-anti-squat-law' },
  ],
}

export const faqEn: PageContent = {
  id: 'faq',
  meta: {
    title: 'FAQ | Anti-Squat Doors and Access Protection',
    description: 'Answers to common questions about anti-squat doors, pricing, access, and installation in France.',
  },
  hero: {
    label: '# faq',
    h1: 'Frequently Asked Questions',
    subtitle: 'Quick answers about our services, process, and coverage.',
    image: pexelsImages.heroSecurity,
    imageAlt: 'Secured property entrance',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'faq',
      label: '# general',
      heading: 'Service FAQ',
      items: [
        {
          question: 'How quickly can you install?',
          answer: 'Standard installations are typically scheduled within days of quote confirmation. Emergency deployment is available in priority cities subject to capacity.',
        },
        {
          question: 'Do you cover all of France?',
          answer: 'Yes. We have priority city teams in Paris, Marseille, Lyon, Lille, Toulouse, Nice, and Bordeaux, with nationwide deployment for other locations.',
        },
        {
          question: 'Can I rent instead of buy?',
          answer: 'Yes. Short-term rental is available for brief void periods. Purchase and managed options suit longer or recurring needs.',
        },
        {
          question: 'What photos do you need for a quote?',
          answer: 'Full opening photos showing frame, hinges area, access route, and any damage. Include approximate dimensions and city.',
        },
        {
          question: 'Is keyless access available?',
          answer: 'Yes. Keyless modules can be fitted on anti-squat and steel security doors with time-limited permissions.',
        },
        {
          question: 'What standards do you reference?',
          answer: 'We reference EN 1627/1630, A2P lock ratings, and CNPP context. See our technical specifications page for certification scope.',
        },
      ],
    },
    {
      type: 'cta',
      label: '# still have questions',
      heading: 'Speak to an advisor for project-specific answers.',
      ctaLabel: 'Contact us',
      ctaPageId: 'contact',
      image: ctaImages.advisor,
      imageAlt: 'Advisor consultation for property protection',
    },
  ],
  internalLinks: [
    { label: 'Pricing', pageId: 'pricing' },
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const certificationsEn: PageContent = {
  id: 'certifications',
  meta: {
    title: 'Certifications and Standards Scope | AlloPorte',
    description: 'What is certified vs configurable on AlloPorte anti-squat door installations.',
  },
  hero: {
    label: '# certifications',
    h1: 'Certifications and Standards Scope',
    subtitle: 'Honest scope — we distinguish certified components from configurable assemblies.',
    image: pexelsImages.doorLock,
    imageAlt: 'Certified lock hardware',
    primaryCta: { label: 'Technical Specifications', pageId: 'technical-specifications' },
  },
  sections: [
    {
      type: 'disclaimer',
      text: 'We do not claim full door-set certification unless documented for your specific configuration. Always request the certification scope sheet with your quote.',
    },
    {
      type: 'table',
      label: '# scope',
      heading: 'Certified vs configurable',
      headers: ['Component', 'Typically certified', 'Configurable', 'Notes'],
      rows: [
        { cells: ['Lock cylinder', 'A2P rated options', 'Grade selection', 'Certificate per batch/model'] },
        { cells: ['Door panel', 'Manufacturing spec', 'Size/finish', 'Custom sizing per opening'] },
        { cells: ['Frame adaptation', 'Install method', 'On-site adjustment', 'Depends on substrate'] },
        { cells: ['Keyless module', 'Module certification', 'Integration', 'Compatible models listed in spec'] },
      ],
    },
    {
      type: 'text',
      label: '# trust',
      heading: 'Why this matters',
      paragraphs: [
        'Many competitors make vague certification claims. We document exactly which components carry third-party ratings and which are engineered to spec for your opening. This protects you with insurers, auditors, and legal advisors.',
      ],
    },
    {
      type: 'cta',
      label: '# documents',
      heading: 'Request certification scope for your project.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.securedProject,
      imageAlt: 'Documented anti-squat door installation',
    },
  ],
  internalLinks: [
    { label: 'Technical Specifications', pageId: 'technical-specifications' },
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Quote', pageId: 'quote' },
  ],
}
