/** Pexels CDN images — security, vacant property, French urban context */

function pexels(id: number, w = 1600) {
  return `https://images.pexels.com/photos/${id}/pexels-photo-${id}.jpeg?auto=compress&cs=tinysrgb&w=${w}`
}

/** General site imagery (heroes, sections, cards) */
export const pexelsImages = {
  heroSecurity: pexels(164425),
  vacantBuilding: pexels(15222354),
  steelDoor: pexels(14845201),
  emptyInterior: pexels(259588),
  apartmentBlock: pexels(1396122),
  constructionSite: pexels(2219024),
  doorLock: pexels(261102),
  urbanFacade: pexels(18296667),
  parisSkyline: pexels(338515),
  marseilleHarbor: pexels(20526900),
  lyonArchitecture: pexels(18296667),
  lyonSkyline: pexels(32711016),
  commercialUnit: pexels(323705),
  renovation: pexels(2219024),
  beforeAfter: pexels(15222354),
  teamAdvisor: pexels(3184292),
  keylessAccess: pexels(261102),
  franceMap: pexels(2901209),
  caseStudy: pexels(14845201),
  testimonial: pexels(774909),
  testimonialPortrait: pexels(2379004),
  niceFrance: pexels(2901209),
  bordeauxFrance: pexels(18296667),
  lilleFrance: pexels(1396122),
  /** Solution card backgrounds (3:4 portrait crops) */
  cardAntiSquat: pexels(14845201, 900),
  cardSteelDoor: pexels(3964672, 900),
  cardAccessProtection: pexels(15222354, 900),
  cardKeylessAccess: pexels(7578995, 900),
  triggerBetweenTenants: pexels(259588, 900),
  triggerDuringSale: pexels(1396122, 900),
  triggerRenovation: pexels(2219024, 900),
  triggerBreakIn: pexels(164425, 900),
  triggerProbate: pexels(15222354, 900),
  triggerCommercial: pexels(323705, 900),
} as const

/**
 * CTA strip backgrounds — each matched to the section copy.
 * Used on dark cinematic bottom-of-page quote/contact strips.
 */
export const ctaImages = {
  /** "Request a quote for your vacant property" */
  vacantProperty: pexels(15222354),
  /** "Send opening photos for a quote" */
  quotePhotos: pexels(164425),
  /** Steel / anti-squat door recommendations */
  steelDoor: pexels(14845201),
  /** Construction & renovation securing */
  constructionSite: pexels(2219024),
  /** "Speak to an advisor" contact strips */
  advisor: pexels(3184292),
  /** Lock hardware, specs, keyless */
  lockHardware: pexels(261102),
  /** "Secure before risk escalates" legal urgency */
  secureProperty: pexels(15222354),
  /** France nationwide / find your city */
  franceNationwide: '/assets/installations/install-03.webp',
  /** Completed securing / case studies */
  securedProject: pexels(14845201),
  /** Enterprise / commercial access */
  commercialAccess: pexels(323705),
} as const

/** Local before/after installation photos from /assets */
export const caseStudyImages = {
  hero: '/assets/case-studies/hero-parisian-hallway.png',
  parisApartment: '/assets/case-studies/paris-apartment.png',
  marseilleCommercial: '/assets/case-studies/marseille-commercial.png',
  lyonPortfolio: '/assets/case-studies/lyon-portfolio.png',
  securedProject: '/assets/case-studies/secured-project.png',
} as const

function install(n: number) {
  return `/assets/installations/install-${String(n).padStart(2, '0')}.webp`
}

/** Real AlloPorte anti-squat door installations */
export const installImages = {
  ornateHallway: install(9),
  commercialFront: install(3),
  alleyGraffiti: install(12),
  hallwayMailboxes: install(10),
  exteriorMount: install(11),
  serviceEntrance: install(7),
  classicalLobby: install(15),
  brokenWoodAlley: install(14),
  hallwayInterior: install(1),
  storefront: install(2),
  courtyard: install(4),
  stairwell: install(5),
  sideAccess: install(6),
  rearDoor: install(8),
  wideOpening: install(13),
  utilityDoor: install(16),
  streetLevel: install(17),
  landing: install(18),
  courtyardDoor: install(19),
} as const

/** Page-hero backgrounds — always anti-squat / steel door installs */
export const heroImages = {
  home: installImages.ornateHallway,
  antiSquat: installImages.ornateHallway,
  steelDoor: installImages.exteriorMount,
  accessProtection: installImages.commercialFront,
  keyless: installImages.serviceEntrance,
  pricing: installImages.alleyGraffiti,
  quote: installImages.hallwayMailboxes,
  contact: installImages.classicalLobby,
  technical: installImages.exteriorMount,
  law: installImages.brokenWoodAlley,
  howItWorks: installImages.hallwayMailboxes,
  faq: installImages.alleyGraffiti,
  certifications: installImages.serviceEntrance,
  france: installImages.commercialFront,
  about: installImages.classicalLobby,
  reviews: installImages.ornateHallway,
  legal: installImages.brokenWoodAlley,
} as const

/** Fallback if a remote image fails to load */
export const imageFallback = installImages.ornateHallway
