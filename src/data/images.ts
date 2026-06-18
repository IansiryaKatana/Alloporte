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
  franceNationwide: pexels(338515),
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

/** Fallback if a remote image fails to load */
export const imageFallback = pexels(164425)
