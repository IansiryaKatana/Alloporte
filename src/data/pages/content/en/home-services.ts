import { pexelsImages, ctaImages } from '@/data/images'
import type { PageContent } from '@/data/pages/types'

const quoteCta = { label: 'Request a Quote', pageId: 'quote' as const }
const techSheet = { label: 'Technical Specifications', pageId: 'technical-specifications' as const }

export const homeEn: PageContent = {
  id: 'home',
  meta: {
    title: 'AlloPorte | Anti-Squat Doors and Access Protection',
    description:
      'Anti-squat doors, temporary steel security doors, and keyless access control for vacant properties across France.',
  },
  hero: {
    label: '# vacant property protection',
    h1: 'Anti-Squat Doors and Access Protection for Vacant Properties',
    subtitle:
      'Physical barriers, controlled access, and documented handover for owners, landlords, and asset managers across France.',
    image: pexelsImages.heroSecurity,
    imageAlt: 'Secured door with heavy padlock on vacant property',
    primaryCta: quoteCta,
    secondaryCta: techSheet,
  },
  sections: [
    {
      type: 'intro',
      label: '# the problem',
      heading:
        'Vacant properties are exposed to forced entry, squatting, theft, and damage.',
      body: 'An empty unit without a visible physical deterrent is an invitation. AlloPorte helps you secure openings quickly with anti-squat doors, steel security doors, and access control tailored to your vacancy timeline.',
    },
    {
      type: 'cards',
      label: '# solutions',
      heading: 'Protection built for real vacancy risk',
      items: [
        {
          number: '01',
          title: 'Anti-Squat Doors',
          description: 'Temporary reinforced doors designed to deter occupation and forced entry.',
        },
        {
          number: '02',
          title: 'Temporary Steel Security Doors',
          description: 'High-visibility steel barriers for homes, commercial units, and renovation sites.',
        },
        {
          number: '03',
          title: 'Access Protection',
          description: 'Documented access planning for contractors, insurers, and multi-stakeholder portfolios.',
        },
        {
          number: '04',
          title: 'Keyless Access Control',
          description: 'Time-limited digital access without key copying risk on vacant assets.',
        },
      ],
    },
    {
      type: 'cards',
      label: '# why choose us',
      heading: 'Built for property owners and asset managers',
      columns: 2,
      items: [
        {
          title: 'Technical documentation',
          description: 'Specification sheets, installation notes, and access handover records.',
        },
        {
          title: 'Fast quote process',
          description: 'Send photos and dimensions — receive a site-specific recommendation quickly.',
        },
        {
          title: 'Bilingual French/English support',
          description: 'Advisors for international owners, investors, and French operators alike.',
        },
        {
          title: 'Owner and portfolio focus',
          description: 'Solutions scaled from a single apartment to multi-site vacancy programmes.',
        },
      ],
    },
    {
      type: 'steps',
      label: '# how it works',
      heading: 'From photos to secured property',
      items: [
        { number: '01', title: 'Send photos', description: 'Share opening photos, address, and access constraints.' },
        { number: '02', title: 'Receive recommendation', description: 'We advise door type, locking, and access model.' },
        { number: '03', title: 'Confirm quote', description: 'Transparent scope covering product, install, and handover.' },
        { number: '04', title: 'Installation', description: 'Professional fitting with documented access setup.' },
        { number: '05', title: 'Securing', description: 'Property protected with ongoing access support if needed.' },
      ],
    },
    {
      type: 'metrics',
      items: [
        { value: '48h', label: 'Typical quote turnaround', description: 'For standard openings with clear photos and dimensions.' },
        { value: 'EN/FR', label: 'Bilingual advisors', description: 'Support for domestic and international property owners.' },
        { value: '7+', label: 'Priority cities', description: 'Paris, Marseille, Lyon, Lille, Toulouse, Nice, Bordeaux.' },
      ],
    },
    {
      type: 'dark-feature',
      label: '# trust',
      heading: 'Certifications, case studies, and documented standards',
      body: 'We explain what is certified versus configurable on every project. Technical specifications, installation checklists, and before/after case studies are available on request.',
      image: ctaImages.securedProject,
      imageAlt: 'Secured vacant property exterior',
      cta: { label: 'View case studies', pageId: 'case-studies' },
      sideTitle: 'Service areas',
      sideBody: 'Nationwide deployment across France with dedicated city advisors.',
    },
    {
      type: 'links-grid',
      label: '# france',
      heading: 'Anti-squat doors and access protection across France',
      links: [
        { label: 'France hub', pageId: 'france' },
        { label: 'Anti-squat law guide', pageId: 'france-anti-squat-law' },
        { label: 'Pricing', pageId: 'pricing' },
      ],
    },
    {
      type: 'cta',
      label: '# get started',
      heading: 'Request a quote for your vacant property today.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.vacantProperty,
      imageAlt: 'Vacant property awaiting anti-squat protection',
    },
  ],
  internalLinks: [
    { label: 'Anti-Squat Doors', pageId: 'anti-squat-doors' },
    { label: 'Pricing', pageId: 'pricing' },
    { label: 'Technical Specifications', pageId: 'technical-specifications' },
    { label: 'France Service Areas', pageId: 'france' },
    { label: 'Quote', pageId: 'quote' },
  ],
}

export const antiSquatDoorsEn: PageContent = {
  id: 'anti-squat-doors',
  meta: {
    title: 'Anti-Squat Doors for Vacant Property Protection | AlloPorte',
    description:
      'Temporary anti-squat doors for vacant homes, commercial units, and renovation sites. Steel construction, keyless access options, fast quotes across France.',
  },
  hero: {
    label: '# main service',
    h1: 'Anti-Squat Doors for Vacant Property Protection',
    subtitle:
      'The strongest page for securing vacant assets — reinforced temporary doors with controlled access and documented installation.',
    image: pexelsImages.steelDoor,
    imageAlt: 'Steel security door on concrete facade',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'list-columns',
      label: '# who this is for',
      heading: 'Built for every vacancy scenario',
      columns: [
        {
          title: 'Residential',
          items: ['Property owners', 'Landlords', 'Housing providers', 'Probate/inheritance properties'],
        },
        {
          title: 'Commercial',
          items: ['Asset managers', 'Commercial landlords', 'Mixed-use portfolios', 'Empty commercial units'],
        },
        {
          title: 'Temporary sites',
          items: ['Renovation sites', 'Between-tenant voids', 'Pre-sale securing', 'Post break-in recovery'],
        },
      ],
    },
    {
      type: 'text',
      label: '# definition',
      heading: 'What is an anti-squat door?',
      paragraphs: [
        'An anti-squat door is a temporary reinforced security door installed over an existing opening to prevent unauthorised entry and occupation. Unlike a standard lock change, it replaces the vulnerable entry point with a visible steel deterrent backed by high-security locking.',
        'Anti-squat doors are designed for vacancy periods — between tenants, during renovation, while a property is for sale, or after a security incident. They can be removed when the property returns to normal use.',
      ],
    },
    {
      type: 'cards',
      label: '# when you need one',
      heading: 'Common trigger points',
      columns: 3,
      items: [
        { title: 'Between tenants', description: 'Close the gap between occupiers when void risk is highest.' },
        { title: 'During sale', description: 'Protect viewings-ready units without compromising security.' },
        { title: 'During renovation', description: 'Control contractor access while keeping the site sealed.' },
        { title: 'After break-in', description: 'Restore a secure opening immediately after forced entry.' },
        { title: 'Probate properties', description: 'Secure inherited assets while legal processes run.' },
        { title: 'Empty commercial units', description: 'High-visibility protection for street-level exposure.' },
      ],
    },
    {
      type: 'cards',
      label: '# door options',
      heading: 'Configure the right protection level',
      columns: 2,
      items: [
        { number: '01', title: 'Standard anti-squat door', description: 'Reinforced temporary door for typical residential openings.' },
        { number: '02', title: 'Reinforced steel security door', description: 'Maximum deterrent for high-risk or commercial exposures.' },
        { number: '03', title: 'Door + screen', description: 'Additional visual barrier for ground-floor or street-facing units.' },
        { number: '04', title: 'Door + keyless access', description: 'Digital permissions for contractors and authorised visitors.' },
      ],
    },
    {
      type: 'cards',
      label: '# technical highlights',
      heading: 'Engineered for temporary deployment',
      columns: 3,
      items: [
        { title: 'Steel construction', description: 'Robust panels and frames sized to your opening.' },
        { title: 'Locking options', description: 'High-security cylinders, restricted keys, or keyless modules.' },
        { title: 'Temporary installation', description: 'Non-destructive fitting where opening conditions allow.' },
        { title: 'Access control', description: 'Keyed, restricted, or keyless models for multi-user access.' },
      ],
    },
    {
      type: 'steps',
      label: '# installation',
      heading: 'Survey to handover',
      items: [
        { number: '01', title: 'Survey / photos', description: 'Assess opening type, wall condition, and access route.' },
        { number: '02', title: 'Measurement', description: 'Confirm dimensions and frame suitability.' },
        { number: '03', title: 'Recommendation', description: 'Door type, lock grade, and access model proposed.' },
        { number: '04', title: 'Installation', description: 'Professional fit with quality checks.' },
        { number: '05', title: 'Handover', description: 'Access credentials and documentation delivered.' },
      ],
    },
    {
      type: 'comparison',
      label: '# compare',
      heading: 'Anti-squat door vs alternatives',
      columns: ['Boarding', 'Lock change', 'Armoured door'],
      rows: [
        { feature: 'Visible deterrent', values: ['High', 'Low', 'Medium', 'High'] },
        { feature: 'Temporary use', values: ['Yes', 'Yes', 'Partial', 'Usually permanent'] },
        { feature: 'Controlled access', values: ['Yes', 'Limited', 'Basic', 'Yes'] },
        { feature: 'Suitable for apartments', values: ['Yes', 'Sometimes', 'Yes', 'Yes'] },
        { feature: 'Typical install speed', values: ['Fast', 'Fast', 'Same day', 'Slower'] },
      ],
    },
    {
      type: 'faq',
      label: '# faq',
      heading: 'Frequently asked questions',
      items: [
        {
          question: 'What is an anti-squat door?',
          answer: 'A temporary reinforced security door installed over your existing opening to prevent squatting and forced entry during vacancy.',
        },
        {
          question: 'How much does it cost?',
          answer: 'Cost depends on opening size, door type, lock/access model, location, duration, and urgency. See our pricing guide or send photos for a quote.',
        },
        {
          question: 'Can authorised users still access the property?',
          answer: 'Yes. We configure keyed, restricted-key, or keyless access so owners, agents, and contractors can enter when needed.',
        },
        {
          question: 'Is it temporary?',
          answer: 'Yes. Anti-squat doors are designed for vacancy periods and can be removed when the property is reoccupied or sold.',
        },
        {
          question: 'Is it suitable for apartments and commercial units?',
          answer: 'Yes. We regularly secure residential apartments, houses, and ground-floor commercial units across France.',
        },
      ],
    },
    {
      type: 'cta',
      label: '# quote',
      heading: 'Send opening photos for a fast, site-specific quote.',
      ctaLabel: 'Request a Quote',
      ctaPageId: 'quote',
      image: ctaImages.quotePhotos,
      imageAlt: 'Padlocked door on a property opening',
    },
  ],
  internalLinks: [
    { label: 'Pricing', pageId: 'pricing' },
    { label: 'Technical Specifications', pageId: 'technical-specifications' },
    { label: 'How Anti-Squat Doors Work', pageId: 'how-anti-squat-doors-work' },
    { label: 'Anti-Squat Law in France', pageId: 'france-anti-squat-law' },
    { label: 'Quote', pageId: 'quote' },
  ],
}
