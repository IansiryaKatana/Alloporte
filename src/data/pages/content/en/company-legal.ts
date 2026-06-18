import { caseStudyImages, ctaImages, pexelsImages } from '@/data/images'
import type { PageContent } from '@/data/pages/types'

const quoteCta = { label: 'Request a Quote', pageId: 'quote' as const }

export const franceEn: PageContent = {
  id: 'france',
  meta: {
    title: 'Anti-Squat Doors Across France | AlloPorte',
    description: 'Nationwide anti-squat doors, steel security doors, and access protection with priority city teams.',
  },
  hero: {
    label: '# nationwide',
    h1: 'Anti-Squat Doors and Access Protection Across France',
    subtitle: 'Priority deployment in major cities. Nationwide coverage for portfolio and rural assets.',
    image: pexelsImages.franceMap,
    imageAlt: 'France landscape aerial view',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'cards',
      label: '# services',
      heading: 'Services available nationwide',
      columns: 4,
      items: [
        { title: 'Anti-squat doors', description: 'Temporary reinforced doors for residential and commercial voids.' },
        { title: 'Steel doors', description: 'High-deterrent steel security for exposed properties.' },
        { title: 'Access protection', description: 'Documented access for multi-stakeholder portfolios.' },
        { title: 'Keyless access', description: 'Digital permissions on protected openings.' },
      ],
    },
    {
      type: 'links-grid',
      label: '# cities',
      heading: 'Priority city teams',
      links: [
        { label: 'Paris', cityId: 'paris' },
        { label: 'Marseille', cityId: 'marseille' },
        { label: 'Lyon', cityId: 'lyon' },
        { label: 'Lille', cityId: 'lille' },
        { label: 'Toulouse', cityId: 'toulouse' },
        { label: 'Nice', cityId: 'nice' },
        { label: 'Bordeaux', cityId: 'bordeaux' },
      ],
    },
    {
      type: 'steps',
      label: '# local quotes',
      heading: 'How local quotes work',
      items: [
        { number: '01', title: 'Send city', description: 'Tell us the property city and department.' },
        { number: '02', title: 'Send photos', description: 'Share opening photos and access constraints.' },
        { number: '03', title: 'Confirm opening', description: 'We verify dimensions and door type.' },
        { number: '04', title: 'Recommendation', description: 'Site-specific scope and quote delivered.' },
      ],
    },
    {
      type: 'intro',
      label: '# bilingual',
      heading: 'French and English support for every region',
      body: 'International investors, UK owners, and French operators all receive the same advisory quality — in the language you prefer.',
    },
    {
      type: 'cta',
      label: '# find your city',
      heading: 'Find your city or request another location.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.franceNationwide,
      imageAlt: 'Paris skyline representing France service coverage',
    },
  ],
  internalLinks: [
    { label: 'Anti-Squat Law in France', pageId: 'france-anti-squat-law' },
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const caseStudiesEn: PageContent = {
  id: 'case-studies',
  meta: {
    title: 'Case Studies | AlloPorte',
    description: 'Before and after anti-squat door installations — real outcomes for vacant properties.',
  },
  hero: {
    label: '# case studies',
    h1: 'Case Studies and Client Outcomes',
    subtitle: 'Documented securing projects across residential and commercial voids.',
    image: caseStudyImages.hero,
    imageAlt: 'Before and after anti-squat door installation in a Parisian building',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'dark-feature',
      label: '# residential',
      heading: 'Paris apartment — between-tenant void',
      body: 'A ground-floor apartment in the 11th arrondissement was secured within 48 hours of tenant departure. Anti-squat door with keyless contractor access allowed renovation to proceed without key duplication risk.',
      image: caseStudyImages.parisApartment,
      imageAlt: 'Before and after securing a Paris apartment entrance',
      sideTitle: 'Outcome',
      sideBody: 'No occupation incident during 4-month void. Door removed on new tenancy.',
    },
    {
      type: 'dark-feature',
      label: '# commercial',
      heading: 'Marseille retail unit — pre-sale securing',
      body: 'A street-facing commercial void in Marseille centre received a reinforced steel security door with restricted-key access for agent viewings.',
      image: caseStudyImages.marseilleCommercial,
      imageAlt: 'Before and after securing a Marseille commercial unit',
      sideTitle: 'Outcome',
      sideBody: 'Sale completed without security incident. Documented handover to buyer.',
    },
    {
      type: 'dark-feature',
      label: '# portfolio',
      heading: 'Lyon housing provider — multi-unit programme',
      body: 'Twelve void units across Lyon metropolitan area secured under a managed access protection plan with centralised keyless permissions.',
      image: caseStudyImages.lyonPortfolio,
      imageAlt: 'Before and after securing a Lyon housing block entrance',
      sideTitle: 'Outcome',
      sideBody: 'Reduced void risk exposure. Single access dashboard for property team.',
    },
    {
      type: 'cta',
      label: '# your project',
      heading: 'Discuss a case study relevant to your property.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: caseStudyImages.securedProject,
      imageAlt: 'Before and after anti-squat door installation on a vacant property',
    },
  ],
  internalLinks: [
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Reviews', pageId: 'reviews' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const aboutEn: PageContent = {
  id: 'about',
  meta: {
    title: 'About AlloPorte | Vacant Property Protection',
    description: 'AlloPorte specialises in anti-squat doors and access protection for vacant properties across France.',
  },
  hero: {
    label: '# about',
    h1: 'About AlloPorte',
    subtitle: 'Vacant property protection with technical clarity and bilingual advisory.',
    image: pexelsImages.teamAdvisor,
    imageAlt: 'AlloPorte advisory team',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'text',
      label: '# mission',
      heading: 'We secure vacant properties before risk becomes recovery',
      paragraphs: [
        'AlloPorte was founded to give property owners, landlords, and asset managers a faster, clearer path to physical protection. We combine anti-squat doors, steel security barriers, and keyless access with honest technical documentation.',
        'We serve France nationwide with priority teams in major cities. Our advisors work in French and English for domestic and international clients.',
      ],
    },
    {
      type: 'metrics',
      items: [
        { value: 'FR', label: 'France focus', description: 'Dedicated to French property law and deployment context.' },
        { value: 'EN/FR', label: 'Bilingual', description: 'Advisory in French and English.' },
        { value: 'Docs', label: 'Documentation-first', description: 'Spec sheets, checklists, and certification scope.' },
      ],
    },
  ],
  internalLinks: [
    { label: 'Case Studies', pageId: 'case-studies' },
    { label: 'Contact', pageId: 'contact' },
    { label: 'France', pageId: 'france' },
  ],
}

export const reviewsEn: PageContent = {
  id: 'reviews',
  meta: {
    title: 'Client Reviews | AlloPorte',
    description: 'What property owners and asset managers say about AlloPorte anti-squat door services.',
  },
  hero: {
    label: '# reviews',
    h1: 'Client Reviews',
    subtitle: 'Trusted by owners, landlords, and asset managers across France.',
    image: pexelsImages.testimonial,
    imageAlt: 'Satisfied property owner',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'testimonials',
      label: '# testimonials',
      items: [
        {
          quote: 'Photos sent on Monday, door installed by Thursday. The keyless access for our contractor was exactly what we needed during renovation.',
          name: 'Claire M.',
          role: 'Property owner, Lyon',
          image: pexelsImages.testimonial,
        },
        {
          quote: 'Clear documentation for our insurer and no occupation incident during a six-month void. We now use AlloPorte across our Paris portfolio.',
          name: 'David R.',
          role: 'Asset manager, Paris',
          image: pexelsImages.testimonialPortrait,
        },
        {
          quote: 'English-speaking advisor made it simple for our UK inheritance property in Bordeaux. Professional installation and transparent quote.',
          name: 'Sarah T.',
          role: 'International owner, Bordeaux',
          image: 'https://images.pexels.com/photos/774909?auto=compress&cs=tinysrgb&w=500',
        },
      ],
    },
    {
      type: 'cta',
      label: '# join them',
      heading: 'Secure your vacant property with confidence.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.vacantProperty,
      imageAlt: 'Vacant property protected with anti-squat door',
    },
  ],
  internalLinks: [
    { label: 'Case Studies', pageId: 'case-studies' },
    { label: 'Contact', pageId: 'contact' },
  ],
}

export const privacyEn: PageContent = {
  id: 'privacy-policy',
  meta: { title: 'Privacy Policy | AlloPorte', description: 'How AlloPorte collects and uses your personal data.' },
  hero: {
    label: '# legal',
    h1: 'Privacy Policy',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Legal documentation',
  },
  sections: [
    {
      type: 'text',
      paragraphs: [
        'AlloPorte collects personal data you provide via quote forms, contact forms, email, and phone — including name, email, phone, property address, and photos.',
        'We use this data to respond to enquiries, prepare quotes, schedule installations, and improve our services. We do not sell your data to third parties.',
        'You have the right to access, rectify, and delete your data under applicable GDPR regulations. Contact hello@alloporte.com for data requests.',
        'Data is retained for the duration of our business relationship and as required by law.',
      ],
    },
  ],
  internalLinks: [{ label: 'Cookie Policy', pageId: 'cookie-policy' }, { label: 'Contact', pageId: 'contact' }],
}

export const cookieEn: PageContent = {
  id: 'cookie-policy',
  meta: { title: 'Cookie Policy | AlloPorte', description: 'How AlloPorte uses cookies on this website.' },
  hero: {
    label: '# legal',
    h1: 'Cookie Policy',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Website cookies policy',
  },
  sections: [
    {
      type: 'text',
      paragraphs: [
        'This website may use essential cookies required for basic functionality and analytics cookies to understand how visitors use our pages.',
        'You can control cookie preferences through your browser settings. Disabling cookies may affect some site features.',
        'For questions contact hello@alloporte.com.',
      ],
    },
  ],
  internalLinks: [{ label: 'Privacy Policy', pageId: 'privacy-policy' }],
}

export const termsEn: PageContent = {
  id: 'terms',
  meta: { title: 'Terms of Service | AlloPorte', description: 'Terms governing AlloPorte services and website use.' },
  hero: {
    label: '# legal',
    h1: 'Terms of Service',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Terms of service',
  },
  sections: [
    {
      type: 'text',
      paragraphs: [
        'Quotes are valid for the period stated and subject to site survey confirmation. Installation dates depend on availability and access conditions.',
        'Rental and purchase terms are specified in your individual contract. The client is responsible for providing accurate property access information.',
        'AlloPorte liability is limited to the scope defined in your service agreement. We recommend maintaining appropriate property insurance during vacancy.',
      ],
    },
  ],
  internalLinks: [{ label: 'Legal Notice', pageId: 'legal-notice' }, { label: 'Contact', pageId: 'contact' }],
}

export const legalNoticeEn: PageContent = {
  id: 'legal-notice',
  meta: { title: 'Legal Notice | AlloPorte', description: 'Mentions légales — AlloPorte company information.' },
  hero: {
    label: '# mentions légales',
    h1: 'Legal Notice',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Legal notice',
  },
  sections: [
    {
      type: 'text',
      paragraphs: [
        'Publisher: AlloPorte — Vacant property protection services, France.',
        'Contact: hello@alloporte.com',
        'Hosting: Information available on request.',
        'Director of publication: AlloPorte management.',
        'This website is subject to French law. For disputes, French courts have jurisdiction.',
      ],
    },
  ],
  internalLinks: [{ label: 'Privacy Policy', pageId: 'privacy-policy' }, { label: 'Terms', pageId: 'terms' }],
}
