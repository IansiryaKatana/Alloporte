import { pexelsImages, ctaImages } from '@/data/images'
import type { CityContent } from '@/data/pages/types'

type CityDef = {
  name: { en: string; fr: string }
  image: string
  ctaImage: string
  riskContext: { en: string; fr: string }
  faq: { en: { q: string; a: string }[]; fr: { q: string; a: string }[] }
}

const cityDefs: Record<string, CityDef> = {
  paris: {
    name: { en: 'Paris', fr: 'Paris' },
    image: pexelsImages.parisSkyline,
    ctaImage: ctaImages.franceNationwide,
    riskContext: {
      en: 'Paris has one of France\'s highest vacancy-risk profiles — dense housing stock, ground-floor exposure, and rapid occupation timelines in central arrondissements. International owners and probate properties are particularly vulnerable during void periods.',
      fr: 'Paris présente l\'un des profils de risque les plus élevés en France — parc dense, rez-de-chaussée exposés et délais d\'occupation rapides dans les arrondissements centraux. Les biens internationaux et successoraux sont particulièrement vulnérables.',
    },
    faq: {
      en: [
        { q: 'Do you cover all arrondissements?', a: 'Yes. We deploy across Paris and petite couronne with standard access logistics.' },
        { q: 'Can agents access for viewings?', a: 'Yes. Keyless or restricted-key access can be configured for agency viewing schedules.' },
      ],
      fr: [
        { q: 'Couvrez-vous tous les arrondissements ?', a: 'Oui. Nous intervenons à Paris et en petite couronne.' },
        { q: 'Les agents peuvent-ils accéder pour les visites ?', a: 'Oui. Accès sans clé ou clé restreinte configurable pour les agendas de visite.' },
      ],
    },
  },
  marseille: {
    name: { en: 'Marseille', fr: 'Marseille' },
    image: pexelsImages.marseilleHarbor,
    ctaImage: pexelsImages.marseilleHarbor,
    riskContext: {
      en: 'Marseille\'s mix of commercial street frontage and residential voids creates dual risk — ground-floor units in the centre and port-adjacent neighbourhoods see regular occupation attempts on unsecured properties.',
      fr: 'Le mélange commercial et résidentiel à Marseille crée un double risque — les unités en rez-de-chaussée du centre et les quartiers proches du port connaissent des tentatives d\'occupation sur les biens non sécurisés.',
    },
    faq: {
      en: [
        { q: 'Do you secure commercial shutters?', a: 'Yes. We assess commercial openings and recommend steel door or combined solutions.' },
        { q: 'How fast in Marseille centre?', a: 'Priority scheduling available — typically within days of quote confirmation.' },
      ],
      fr: [
        { q: 'Sécurisez-vous les rideaux métalliques ?', a: 'Oui. Nous évaluons les ouvertures commerciales et recommandons les solutions adaptées.' },
        { q: 'Quel délai dans le centre de Marseille ?', a: 'Planification prioritaire — généralement sous quelques jours après confirmation du devis.' },
      ],
    },
  },
  lyon: {
    name: { en: 'Lyon', fr: 'Lyon' },
    image: pexelsImages.lyonArchitecture,
    ctaImage: pexelsImages.lyonSkyline,
    riskContext: {
      en: 'Lyon\'s growing investor activity and renovation pipeline mean frequent void periods in Presqu\'île, Part-Dieu, and suburban stock. Housing providers managing multiple voids benefit from portfolio access plans.',
      fr: 'L\'activité investisseur et le pipeline de rénovation à Lyon génèrent des périodes de vacance fréquentes. Les bailleurs gérant plusieurs lots bénéficient de plans d\'accès portefeuille.',
    },
    faq: {
      en: [
        { q: 'Multi-unit discounts in Lyon?', a: 'Yes. Portfolio pricing for housing providers with multiple simultaneous voids.' },
        { q: 'Renovation site access?', a: 'Keyless contractor access is popular on Lyon renovation voids.' },
      ],
      fr: [
        { q: 'Tarifs multi-lots à Lyon ?', a: 'Oui. Tarification portefeuille pour les bailleurs avec plusieurs vacances simultanées.' },
        { q: 'Accès chantier de rénovation ?', a: 'L\'accès sans clé pour les artisans est très demandé sur les biens en rénovation.' },
      ],
    },
  },
  lille: {
    name: { en: 'Lille', fr: 'Lille' },
    image: pexelsImages.lilleFrance,
    ctaImage: pexelsImages.apartmentBlock,
    riskContext: {
      en: 'Lille and the wider Hauts-de-France region see seasonal vacancy spikes around student housing turnover and cross-border investor properties. Quick securing between academic years is a common requirement.',
      fr: 'Lille et les Hauts-de-France connaissent des pics de vacance autour du turnover étudiant et des biens d\'investisseurs transfrontaliers. La sécurisation rapide entre les années universitaires est fréquente.',
    },
    faq: {
      en: [
        { q: 'Student housing voids?', a: 'Yes. We regularly secure apartments between academic tenancies.' },
        { q: 'Cross-border owner support?', a: 'English-speaking advisors available for UK and Belgian owners.' },
      ],
      fr: [
        { q: 'Vacances locatives étudiantes ?', a: 'Oui. Nous sécurisons régulièrement les appartements entre les locations étudiantes.' },
        { q: 'Support propriétaires transfrontaliers ?', a: 'Conseillers anglophones disponibles pour les propriétaires UK et belges.' },
      ],
    },
  },
  toulouse: {
    name: { en: 'Toulouse', fr: 'Toulouse' },
    image: pexelsImages.renovation,
    ctaImage: ctaImages.constructionSite,
    riskContext: {
      en: 'Toulouse\'s aerospace-linked rental market and expanding suburbs create voids in both city-centre apartments and detached stock. New-build handover delays occasionally leave units unsecured pre-first-tenant.',
      fr: 'Le marché locatif lié à l\'aéronautique et l\'expansion périurbaine à Toulouse créent des vacances en centre-ville et en pavillons. Les retards de livraison neuf laissent parfois des lots non sécurisés.',
    },
    faq: {
      en: [
        { q: 'New-build void securing?', a: 'Yes. We secure pre-occupation units pending first tenancy or sale.' },
        { q: 'Detached house coverage?', a: 'Steel security doors are common on suburban void houses.' },
      ],
      fr: [
        { q: 'Sécurisation de neuf en attente ?', a: 'Oui. Nous sécurisons les lots en attente de première location ou vente.' },
        { q: 'Couverture maisons individuelles ?', a: 'Les portes acier sont courantes sur les pavillons vacants.' },
      ],
    },
  },
  nice: {
    name: { en: 'Nice', fr: 'Nice' },
    image: pexelsImages.niceFrance,
    ctaImage: pexelsImages.niceFrance,
    riskContext: {
      en: 'Nice and the Côte d\'Azur attract international second-home owners with long absence periods. Seasonal voids and pre-sale securing are common — especially in condominiums with shared access points.',
      fr: 'Nice et la Côte d\'Azur attirent des résidences secondaires internationales avec de longues absences. Les vacances saisonnières et la sécurisation avant vente sont fréquentes — surtout en copropriété.',
    },
    faq: {
      en: [
        { q: 'Second-home securing?', a: 'Yes. Managed access plans suit absentee international owners.' },
        { q: 'Condominium access rules?', a: 'We work within building access constraints and syndic requirements where applicable.' },
      ],
      fr: [
        { q: 'Sécurisation résidence secondaire ?', a: 'Oui. Les plans d\'accès gérés conviennent aux propriétaires absents à l\'étranger.' },
        { q: 'Règles de copropriété ?', a: 'Nous respectons les contraintes d\'accès de l\'immeuble et du syndic le cas échéant.' },
      ],
    },
  },
  bordeaux: {
    name: { en: 'Bordeaux', fr: 'Bordeaux' },
    image: pexelsImages.bordeauxFrance,
    ctaImage: pexelsImages.bordeauxFrance,
    riskContext: {
      en: 'Bordeaux\'s UNESCO centre and surrounding renovation zones produce void properties with heritage constraints. Careful survey of opening and frame conditions is essential before temporary door installation.',
      fr: 'Le centre UNESCO de Bordeaux et les zones de rénovation périphériques produisent des biens vacants avec contraintes patrimoniales. Un relevé soigneux de l\'ouverture est essentiel avant installation.',
    },
    faq: {
      en: [
        { q: 'Heritage area installations?', a: 'We assess frame and facade constraints and recommend compliant temporary solutions.' },
        { q: 'Probate property support?', a: 'English and French advisors support inheritance property securing.' },
      ],
      fr: [
        { q: 'Installations en secteur protégé ?', a: 'Nous évaluons les contraintes de façade et recommandons des solutions temporaires adaptées.' },
        { q: 'Support biens successoraux ?', a: 'Conseillers FR/EN pour la sécurisation des biens en succession.' },
      ],
    },
  },
}

export function buildCityContent(cityId: string, locale: 'en' | 'fr'): CityContent {
  const def = cityDefs[cityId]
  const name = def.name[locale]
  const isEn = locale === 'en'

  return {
    id: cityId,
    meta: {
      title: isEn
        ? `Anti-Squat Doors in ${name} | AlloPorte`
        : `Portes anti-squat à ${name} | AlloPorte`,
      description: isEn
        ? `Anti-squat doors, steel security doors, and access protection in ${name}. Fast local quotes.`
        : `Portes anti-squat, portes acier et protection des accès à ${name}. Devis locaux rapides.`,
    },
    hero: {
      label: isEn ? `# ${name.toLowerCase()}` : `# ${name.toLowerCase()}`,
      h1: isEn ? `Anti-Squat Doors in ${name}` : `Portes anti-squat à ${name}`,
      subtitle: def.riskContext[locale],
      image: def.image,
      imageAlt: isEn ? `${name} property protection` : `Protection de biens à ${name}`,
      primaryCta: { label: isEn ? 'Request a Quote' : 'Demander un devis', pageId: 'quote' },
    },
    sections: [
      {
        type: 'cards',
        label: isEn ? '# services' : '# services',
        heading: isEn ? `Services in ${name}` : `Services à ${name}`,
        columns: 2,
        items: [
          {
            title: isEn ? 'Anti-squat doors' : 'Portes anti-squat',
            description: isEn ? 'Temporary reinforced doors for local void properties.' : 'Portes renforcées temporaires pour biens vacants locaux.',
          },
          {
            title: isEn ? 'Temporary steel doors' : 'Portes acier temporaires',
            description: isEn ? 'High-deterrent steel for exposed openings.' : 'Acier haute dissuasion pour ouvertures exposées.',
          },
          {
            title: isEn ? 'Access protection' : 'Protection des accès',
            description: isEn ? 'Documented access for agents and contractors.' : 'Accès documenté pour agents et artisans.',
          },
          {
            title: isEn ? 'Keyless access' : 'Accès sans clé',
            description: isEn ? 'Digital permissions on secured openings.' : 'Permissions numériques sur ouvertures sécurisées.',
          },
        ],
      },
      {
        type: 'list-columns',
        label: isEn ? '# property types' : '# types de biens',
        heading: isEn ? 'Property types we secure' : 'Types de biens que nous sécurisons',
        columns: [
          {
            title: isEn ? 'Residential' : 'Résidentiel',
            items: isEn
              ? ['Apartments', 'Houses', 'Mixed-use buildings']
              : ['Appartements', 'Maisons', 'Immeubles mixtes'],
          },
          {
            title: isEn ? 'Commercial' : 'Commercial',
            items: isEn
              ? ['Commercial units', 'Renovation sites', 'Pre-sale voids']
              : ['Locaux commerciaux', 'Chantiers de rénovation', 'Vacances avant vente'],
          },
        ],
      },
      {
        type: 'steps',
        label: isEn ? '# local process' : '# processus local',
        heading: isEn ? `How installation works in ${name}` : `Comment l'installation fonctionne à ${name}`,
        items: [
          {
            number: '01',
            title: isEn ? 'Photos' : 'Photos',
            description: isEn ? 'Send opening photos with address.' : 'Envoyez les photos avec l\'adresse.',
          },
          {
            number: '02',
            title: isEn ? 'Dimensions' : 'Dimensions',
            description: isEn ? 'Confirm width, height, and frame condition.' : 'Confirmez largeur, hauteur et état du cadre.',
          },
          {
            number: '03',
            title: isEn ? 'Access constraints' : 'Contraintes d\'accès',
            description: isEn ? 'Parking, building access, and timing.' : 'Stationnement, accès immeuble et horaires.',
          },
          {
            number: '04',
            title: isEn ? 'Quote' : 'Devis',
            description: isEn ? 'Local scope and price confirmed.' : 'Périmètre et prix local confirmés.',
          },
        ],
      },
      {
        type: 'faq',
        label: '# faq',
        heading: isEn ? `${name} FAQ` : `FAQ ${name}`,
        items: def.faq[locale].map((f) => ({ question: f.q, answer: f.a })),
      },
      {
        type: 'cta',
        label: isEn ? '# local quote' : '# devis local',
        heading: isEn ? `Request a ${name} quote.` : `Demandez un devis à ${name}.`,
        ctaLabel: isEn ? 'Request a Quote' : 'Demander un devis',
        ctaPageId: 'quote',
        image: def.ctaImage,
        imageAlt: isEn ? `Anti-squat protection quote for ${name}` : `Devis protection anti-squat à ${name}`,
      },
    ],
  }
}

export const cityIds = Object.keys(cityDefs)
