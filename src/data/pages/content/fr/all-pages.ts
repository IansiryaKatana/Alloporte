import { caseStudyImages, ctaImages, pexelsImages } from '@/data/images'
import type { PageContent, PagesByLocale } from '@/data/pages/types'

const quoteCta = { label: 'Demander un devis', pageId: 'quote' as const }
const techSheet = { label: 'Caractéristiques techniques', pageId: 'technical-specifications' as const }

const homeFr: PageContent = {
  id: 'home',
  meta: {
    title: 'AlloPorte | Portes anti-squat et protection des accès',
    description:
      'Portes anti-squat, portes de sécurité en acier temporaires et contrôle d\'accès sans clé pour les biens vacants partout en France.',
  },
  hero: {
    label: '# protection des biens vacants',
    h1: 'Portes anti-squat et protection des accès pour biens vacants',
    subtitle:
      'Barrières physiques, accès contrôlé et remise documentée pour propriétaires, bailleurs et gestionnaires d\'actifs en France.',
    image: pexelsImages.heroSecurity,
    imageAlt: 'Porte sécurisée avec cadenas lourd sur un bien vacant',
    primaryCta: quoteCta,
    secondaryCta: techSheet,
  },
  sections: [
    {
      type: 'intro',
      label: '# le problème',
      heading:
        'Les biens vacants sont exposés aux effractions, occupations illégales, vols et dégradations.',
      body: 'Un logement vide sans dissuasion physique visible est une invitation. AlloPorte vous aide à sécuriser rapidement les ouvertures avec des portes anti-squat, des portes de sécurité en acier et un contrôle d\'accès adapté à votre calendrier de vacance.',
    },
    {
      type: 'cards',
      label: '# solutions',
      heading: 'Une protection conçue pour le risque réel de vacance',
      items: [
        {
          number: '01',
          title: 'Portes anti-squat',
          description: 'Portes temporaires renforcées conçues pour dissuader l\'occupation et l\'effraction.',
        },
        {
          number: '02',
          title: 'Portes de sécurité en acier temporaires',
          description: 'Barrières en acier très visibles pour logements, locaux commerciaux et chantiers de rénovation.',
        },
        {
          number: '03',
          title: 'Protection des accès',
          description: 'Planification documentée des accès pour entrepreneurs, assureurs et portefeuilles multi-acteurs.',
        },
        {
          number: '04',
          title: 'Contrôle d\'accès sans clé',
          description: 'Accès numérique à durée limitée, sans risque de copie de clés sur les biens vacants.',
        },
      ],
    },
    {
      type: 'cards',
      label: '# pourquoi nous choisir',
      heading: 'Conçu pour les propriétaires et gestionnaires d\'actifs',
      columns: 2,
      items: [
        {
          title: 'Documentation technique',
          description: 'Fiches techniques, notes d\'installation et registres de remise d\'accès.',
        },
        {
          title: 'Devis rapide',
          description: 'Envoyez photos et dimensions — recevez une recommandation adaptée à votre site rapidement.',
        },
        {
          title: 'Support bilingue français/anglais',
          description: 'Conseillers pour propriétaires internationaux, investisseurs et opérateurs français.',
        },
        {
          title: 'Focus propriétaire et portefeuille',
          description: 'Solutions adaptées d\'un simple appartement aux programmes de vacance multi-sites.',
        },
      ],
    },
    {
      type: 'steps',
      label: '# comment ça marche',
      heading: 'Des photos au bien sécurisé',
      items: [
        { number: '01', title: 'Envoyez des photos', description: 'Partagez les photos de l\'ouverture, l\'adresse et les contraintes d\'accès.' },
        { number: '02', title: 'Recevez une recommandation', description: 'Nous conseillons le type de porte, le verrouillage et le modèle d\'accès.' },
        { number: '03', title: 'Confirmez le devis', description: 'Périmètre transparent couvrant produit, installation et remise.' },
        { number: '04', title: 'Installation', description: 'Pose professionnelle avec configuration documentée des accès.' },
        { number: '05', title: 'Sécurisation', description: 'Bien protégé avec support d\'accès continu si nécessaire.' },
      ],
    },
    {
      type: 'metrics',
      items: [
        { value: '48h', label: 'Délai de devis type', description: 'Pour les ouvertures standard avec photos et dimensions claires.' },
        { value: 'FR/EN', label: 'Conseillers bilingues', description: 'Support pour propriétaires nationaux et internationaux.' },
        { value: '7+', label: 'Villes prioritaires', description: 'Paris, Marseille, Lyon, Lille, Toulouse, Nice, Bordeaux.' },
      ],
    },
    {
      type: 'dark-feature',
      label: '# confiance',
      heading: 'Certifications, études de cas et normes documentées',
      body: 'Nous expliquons ce qui est certifié par rapport à ce qui est configurable sur chaque projet. Fiches techniques, listes de contrôle d\'installation et études de cas avant/après disponibles sur demande.',
      image: ctaImages.securedProject,
      imageAlt: 'Extérieur d\'un bien vacant sécurisé',
      cta: { label: 'Voir les études de cas', pageId: 'case-studies' },
      sideTitle: 'Zones d\'intervention',
      sideBody: 'Déploiement national en France avec conseillers dédiés par ville.',
    },
    {
      type: 'links-grid',
      label: '# france',
      heading: 'Portes anti-squat et protection des accès partout en France',
      links: [
        { label: 'Hub France', pageId: 'france' },
        { label: 'Paris', pageId: 'anti-squat-doors' },
        { label: 'Guide loi anti-squat', pageId: 'france-anti-squat-law' },
        { label: 'Tarifs', pageId: 'pricing' },
      ],
    },
    {
      type: 'cta',
      label: '# commencer',
      heading: 'Demandez un devis pour votre bien vacant dès aujourd\'hui.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.vacantProperty,
      imageAlt: 'Bien vacant en attente de protection anti-squat',
    },
  ],
  internalLinks: [
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Tarifs', pageId: 'pricing' },
    { label: 'Caractéristiques techniques', pageId: 'technical-specifications' },
    { label: 'Zones d\'intervention France', pageId: 'france' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const antiSquatDoorsFr: PageContent = {
  id: 'anti-squat-doors',
  meta: {
    title: 'Portes anti-squat pour la protection des biens vacants | AlloPorte',
    description:
      'Portes anti-squat temporaires pour logements vacants, locaux commerciaux et chantiers de rénovation. Construction acier, options sans clé, devis rapides partout en France.',
  },
  hero: {
    label: '# service principal',
    h1: 'Portes anti-squat pour la protection des biens vacants',
    subtitle:
      'La solution la plus robuste pour sécuriser vos actifs vacants — portes temporaires renforcées avec accès contrôlé et installation documentée.',
    image: pexelsImages.steelDoor,
    imageAlt: 'Porte de sécurité en acier sur façade en béton',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'list-columns',
      label: '# à qui s\'adresse ce service',
      heading: 'Adapté à chaque scénario de vacance',
      columns: [
        {
          title: 'Résidentiel',
          items: ['Propriétaires', 'Bailleurs', 'Bailleurs sociaux', 'Biens en succession'],
        },
        {
          title: 'Commercial',
          items: ['Gestionnaires d\'actifs', 'Bailleurs commerciaux', 'Portefeuilles mixtes', 'Locaux commerciaux vides'],
        },
        {
          title: 'Sites temporaires',
          items: ['Chantiers de rénovation', 'Périodes entre locataires', 'Sécurisation avant vente', 'Reprise après effraction'],
        },
      ],
    },
    {
      type: 'text',
      label: '# définition',
      heading: 'Qu\'est-ce qu\'une porte anti-squat ?',
      paragraphs: [
        'Une porte anti-squat est une porte de sécurité temporaire renforcée, installée sur une ouverture existante pour empêcher l\'entrée et l\'occupation non autorisées. Contrairement à un simple changement de serrure, elle remplace le point d\'entrée vulnérable par une dissuasion visible en acier, soutenue par un verrouillage haute sécurité.',
        'Les portes anti-squat sont conçues pour les périodes de vacance — entre locataires, pendant une rénovation, lors d\'une mise en vente ou après un incident de sécurité. Elles peuvent être retirées lorsque le bien retrouve une occupation normale.',
      ],
    },
    {
      type: 'cards',
      label: '# quand en avez-vous besoin',
      heading: 'Situations déclencheuses courantes',
      columns: 3,
      items: [
        { title: 'Entre locataires', description: 'Comblez la période de vacance lorsque le risque est le plus élevé.' },
        { title: 'Pendant la vente', description: 'Protégez les biens prêts pour les visites sans compromettre la sécurité.' },
        { title: 'Pendant la rénovation', description: 'Contrôlez l\'accès des entrepreneurs tout en gardant le chantier scellé.' },
        { title: 'Après effraction', description: 'Rétablissez une ouverture sécurisée immédiatement après une entrée forcée.' },
        { title: 'Biens en succession', description: 'Sécurisez les actifs hérités pendant les procédures juridiques.' },
        { title: 'Locaux commerciaux vides', description: 'Protection très visible pour les expositions en rez-de-chaussée.' },
      ],
    },
    {
      type: 'cards',
      label: '# options de porte',
      heading: 'Configurez le bon niveau de protection',
      columns: 2,
      items: [
        { number: '01', title: 'Porte anti-squat standard', description: 'Porte temporaire renforcée pour les ouvertures résidentielles classiques.' },
        { number: '02', title: 'Porte de sécurité en acier renforcée', description: 'Dissuasion maximale pour les expositions à haut risque ou commerciales.' },
        { number: '03', title: 'Porte + grillage', description: 'Barrière visuelle supplémentaire pour les logements en rez-de-chaussée ou donnant sur la rue.' },
        { number: '04', title: 'Porte + accès sans clé', description: 'Permissions numériques pour entrepreneurs et visiteurs autorisés.' },
      ],
    },
    {
      type: 'cards',
      label: '# points techniques',
      heading: 'Conçu pour un déploiement temporaire',
      columns: 3,
      items: [
        { title: 'Construction acier', description: 'Panneaux et cadres robustes dimensionnés pour votre ouverture.' },
        { title: 'Options de verrouillage', description: 'Cylindres haute sécurité, clés restreintes ou modules sans clé.' },
        { title: 'Installation temporaire', description: 'Pose non destructive lorsque les conditions de l\'ouverture le permettent.' },
        { title: 'Contrôle d\'accès', description: 'Modèles à clé, clé restreinte ou sans clé pour accès multi-utilisateurs.' },
      ],
    },
    {
      type: 'steps',
      label: '# installation',
      heading: 'De la visite à la remise',
      items: [
        { number: '01', title: 'Visite / photos', description: 'Évaluation du type d\'ouverture, de l\'état du mur et de l\'accès.' },
        { number: '02', title: 'Mesures', description: 'Confirmation des dimensions et de l\'adéquation du cadre.' },
        { number: '03', title: 'Recommandation', description: 'Type de porte, grade de serrure et modèle d\'accès proposés.' },
        { number: '04', title: 'Installation', description: 'Pose professionnelle avec contrôles qualité.' },
        { number: '05', title: 'Remise', description: 'Identifiants d\'accès et documentation remis.' },
      ],
    },
    {
      type: 'comparison',
      label: '# comparer',
      heading: 'Porte anti-squat vs alternatives',
      columns: ['Plaquage', 'Changement de serrure', 'Porte blindée'],
      rows: [
        { feature: 'Dissuasion visible', values: ['Élevée', 'Faible', 'Moyenne', 'Élevée'] },
        { feature: 'Usage temporaire', values: ['Oui', 'Oui', 'Partiel', 'Généralement permanent'] },
        { feature: 'Accès contrôlé', values: ['Oui', 'Limité', 'Basique', 'Oui'] },
        { feature: 'Adapté aux appartements', values: ['Oui', 'Parfois', 'Oui', 'Oui'] },
        { feature: 'Délai d\'installation type', values: ['Rapide', 'Rapide', 'Le jour même', 'Plus long'] },
      ],
    },
    {
      type: 'faq',
      label: '# faq',
      heading: 'Questions fréquentes',
      items: [
        {
          question: 'Qu\'est-ce qu\'une porte anti-squat ?',
          answer: 'Une porte de sécurité temporaire renforcée installée sur votre ouverture existante pour empêcher le squat et l\'effraction pendant la vacance.',
        },
        {
          question: 'Combien cela coûte-t-il ?',
          answer: 'Le coût dépend de la taille de l\'ouverture, du type de porte, du modèle de serrure/accès, de la localisation, de la durée et de l\'urgence. Consultez notre guide tarifaire ou envoyez des photos pour un devis.',
        },
        {
          question: 'Les utilisateurs autorisés peuvent-ils encore accéder au bien ?',
          answer: 'Oui. Nous configurons un accès à clé, à clé restreinte ou sans clé pour que propriétaires, agents et entrepreneurs puissent entrer si nécessaire.',
        },
        {
          question: 'Est-ce temporaire ?',
          answer: 'Oui. Les portes anti-squat sont conçues pour les périodes de vacance et peuvent être retirées lorsque le bien est réoccupé ou vendu.',
        },
        {
          question: 'Est-ce adapté aux appartements et locaux commerciaux ?',
          answer: 'Oui. Nous sécurisons régulièrement des appartements, maisons et locaux commerciaux en rez-de-chaussée partout en France.',
        },
      ],
    },
    {
      type: 'cta',
      label: '# devis',
      heading: 'Envoyez des photos de l\'ouverture pour un devis rapide et personnalisé.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.quotePhotos,
      imageAlt: 'Porte cadenassée sur une ouverture de bien',
    },
  ],
  internalLinks: [
    { label: 'Tarifs', pageId: 'pricing' },
    { label: 'Caractéristiques techniques', pageId: 'technical-specifications' },
    { label: 'Comment fonctionnent les portes anti-squat', pageId: 'how-anti-squat-doors-work' },
    { label: 'Loi anti-squat en France', pageId: 'france-anti-squat-law' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const steelDoorsFr: PageContent = {
  id: 'temporary-steel-security-doors',
  meta: {
    title: 'Portes de sécurité en acier temporaires | AlloPorte',
    description: 'Portes de sécurité en acier temporaires pour logements vacants, locaux commerciaux et chantiers partout en France.',
  },
  hero: {
    label: '# sécurité acier',
    h1: 'Portes de sécurité en acier temporaires pour biens vacants',
    subtitle: 'Barrières physiques très visibles pour biens vacants, chantiers de rénovation et expositions commerciales.',
    image: pexelsImages.steelDoor,
    imageAlt: 'Porte en acier sur mur en béton',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'cards',
      label: '# cas d\'usage',
      heading: 'Où les portes de sécurité en acier sont les plus efficaces',
      columns: 3,
      items: [
        { title: 'Maisons vides', description: 'Protection des maisons individuelles et mitoyennes vacantes.' },
        { title: 'Biens vacants', description: 'Sécurisation de portefeuilles entre les locations.' },
        { title: 'Locaux commerciaux', description: 'Dissuasion en façade pour commerces et bureaux vacants.' },
        { title: 'Chantiers', description: 'Sécurisation des ouvertures pendant les travaux actifs.' },
        { title: 'Biens en rénovation', description: 'Accès contrôlé tout en gardant le chantier scellé.' },
      ],
    },
    {
      type: 'cards',
      label: '# pourquoi l\'acier',
      heading: 'Forte dissuasion, accès contrôlé',
      columns: 2,
      items: [
        { title: 'Dissuasion visuelle', description: 'Signal immédiat que le bien est activement protégé.' },
        { title: 'Barrière physique', description: 'La construction en acier résiste aux effractions opportunistes.' },
        { title: 'Accès contrôlé', description: 'Modèles à clé, clé restreinte ou sans clé disponibles.' },
        { title: 'Durée flexible', description: 'Couverture de vacance courte ou programmes de déploiement prolongés.' },
      ],
    },
    {
      type: 'list-columns',
      label: '# modèles tarifaires',
      heading: 'Location, achat ou protection gérée',
      columns: [
        {
          title: 'Location courte durée',
          items: ['Idéal pour les vacances brèves entre locataires', 'Installation et retrait inclus', 'Devis basé sur la durée et le nombre d\'ouvertures'],
        },
        {
          title: 'Achat',
          items: ['Pour les besoins récurrents de portefeuille', 'L\'actif reste à vous pour redéploiement', 'Optimal pour les bailleurs avec vacances régulières'],
        },
        {
          title: 'Service géré',
          items: ['Nous gérons installation, accès et retrait', 'Adapté aux assureurs et gestionnaires d\'actifs', 'Tarifs multi-sites disponibles'],
        },
      ],
    },
    {
      type: 'cards',
      label: '# options d\'accès',
      heading: 'Choisissez comment les personnes entrent',
      columns: 3,
      items: [
        { title: 'Accès à clé', description: 'Cylindre haute sécurité standard avec clés enregistrées.' },
        { title: 'Clé restreinte', description: 'Clés contrôlées via des réseaux de serruriers agréés.' },
        { title: 'Accès sans clé', description: 'Codes numériques à durée limitée pour entrepreneurs et agents.' },
      ],
    },
    {
      type: 'comparison',
      label: '# comparer',
      heading: 'Porte de sécurité acier vs porte anti-squat',
      columns: ['Porte de sécurité acier', 'Porte anti-squat'],
      rows: [
        { feature: 'Intention de recherche principale', values: ['Porte acier / sécurité', 'Anti-squat / prévention squat'] },
        { feature: 'Impact visuel', values: ['Maximum', 'Élevé'] },
        { feature: 'Appartements résidentiels', values: ['Oui', 'Oui — souvent préféré'] },
        { feature: 'Locaux commerciaux vacants', values: ['Souvent préféré', 'Oui'] },
        { feature: 'Compatible sans clé', values: ['Oui', 'Oui'] },
      ],
    },
    {
      type: 'cta',
      label: '# recommandation',
      heading: 'Demandez une recommandation de porte acier adaptée à votre site.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.steelDoor,
      imageAlt: 'Porte acier de sécurité temporaire sur une ouverture vacante',
    },
  ],
  internalLinks: [
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Protection des accès', pageId: 'access-protection' },
    { label: 'Tarifs', pageId: 'pricing' },
    { label: 'Contrôle d\'accès sans clé', pageId: 'keyless-access-control' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const accessProtectionFr: PageContent = {
  id: 'access-protection',
  meta: {
    title: 'Protection des accès pour biens vacants | AlloPorte',
    description: 'Barrières physiques, entrée contrôlée et processus d\'accès documenté pour gestionnaires d\'actifs et bailleurs.',
  },
  hero: {
    label: '# accès entreprise',
    h1: 'Protection des accès pour biens vacants et sensibles',
    subtitle: 'Barrière physique + entrée contrôlée + processus documenté — adapté aux portefeuilles.',
    image: pexelsImages.commercialUnit,
    imageAlt: 'Façade d\'immeuble commercial',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'text',
      label: '# définition',
      heading: 'Ce que signifie la protection des accès',
      paragraphs: [
        'La protection des accès combine une barrière physique sur les ouvertures vulnérables avec un processus d\'entrée contrôlé et des autorisations documentées. Elle est conçue pour les situations où plusieurs parties prenantes — propriétaires, agents, entrepreneurs, assureurs — ont besoin d\'un accès fiable et auditable à un bien vacant ou sensible.',
      ],
    },
    {
      type: 'cards',
      label: '# qui en a besoin',
      heading: 'Environnements entreprise et multi-acteurs',
      columns: 3,
      items: [
        { title: 'Gestionnaires d\'actifs', description: 'Contrôle des vacances et remises à l\'échelle du portefeuille.' },
        { title: 'Sociétés immobilières', description: 'Vacances de vente et location avec accès agent.' },
        { title: 'Bailleurs sociaux', description: 'Logements vacants avec accès entrepreneur et inspection.' },
        { title: 'Entrepreneurs', description: 'Chantiers de rénovation nécessitant des ouvertures scellées mais accessibles.' },
        { title: 'Assureurs', description: 'Sécurisation post-incident avec traces probantes.' },
        { title: 'Gestion locative', description: 'Immeubles multi-propriétaires avec risque d\'accès partagé.' },
      ],
    },
    {
      type: 'cards',
      label: '# risques d\'accès',
      heading: 'Problèmes que nous résolvons',
      columns: 2,
      items: [
        { title: 'Clés perdues', description: 'Copies non contrôlées en circulation sur les biens vacants.' },
        { title: 'Accès entrepreneurs', description: 'Plusieurs corps de métier nécessitant une entrée à durée limitée.' },
        { title: 'Entrée non autorisée', description: 'Squat, vol et occupation opportuniste.' },
        { title: 'Exposition du bien vide', description: 'Vacances visibles sans dissuasion physique.' },
        { title: 'Parties prenantes multiples', description: 'Propriétaires, agents et gestionnaires aux besoins croisés.' },
      ],
    },
    {
      type: 'cards',
      label: '# solutions',
      heading: 'Ensemble de protection intégré',
      columns: 3,
      items: [
        { title: 'Portes anti-squat', description: 'Portes temporaires renforcées pour les ouvertures principales.' },
        { title: 'Portes acier', description: 'Dissuasion maximale pour les vacances très exposées.' },
        { title: 'Accès sans clé', description: 'Permissions numériques avec contrôle ajout/suppression.' },
        { title: 'Grillages', description: 'Barrières visuelles supplémentaires si nécessaire.' },
        { title: 'Documentation', description: 'Registres de remise, journaux d\'accès et fiches techniques.' },
      ],
    },
    {
      type: 'checklist',
      label: '# planification',
      heading: 'Liste de contrôle de planification des accès',
      items: [
        'Qui a besoin d\'accès — propriétaire, agent, entrepreneur, inspecteur ?',
        'Pour combien de temps — jours, semaines ou mois de vacance ?',
        'Quelles ouvertures — porte d\'entrée, arrière, rideau métallique commercial ?',
        'Quel niveau de risque — exposition rue, incident antérieur, politique portefeuille ?',
        'Des preuves sont-elles nécessaires — assureur, juridique ou audit ?',
      ],
    },
    {
      type: 'cta',
      label: '# conseiller',
      heading: 'Parlez à un conseiller en protection des accès.',
      ctaLabel: 'Nous contacter',
      ctaPageId: 'contact',
      image: ctaImages.advisor,
      imageAlt: 'Conseiller sécurité examinant les plans du bien',
    },
  ],
  internalLinks: [
    { label: 'Contrôle d\'accès sans clé', pageId: 'keyless-access-control' },
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Caractéristiques techniques', pageId: 'technical-specifications' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const keylessFr: PageContent = {
  id: 'keyless-access-control',
  meta: {
    title: 'Contrôle d\'accès sans clé pour ouvertures protégées | AlloPorte',
    description: 'Permissions d\'accès numériques pour portes anti-squat et portes de sécurité en acier sur biens vacants.',
  },
  hero: {
    label: '# accès intelligent',
    h1: 'Contrôle d\'accès sans clé pour ouvertures protégées',
    subtitle: 'Réduisez le risque de copie de clés. Ajoutez, retirez et limitez dans le temps les accès sur les biens vacants.',
    image: pexelsImages.keylessAccess,
    imageAlt: 'Interface de contrôle d\'accès numérique',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'intro',
      label: '# le problème',
      heading: 'Les clés sont risquées lorsque les biens sont vacants et que plusieurs personnes ont besoin d\'accès.',
      body: 'Chaque clé copiée est un passif sur un bien vacant. L\'accès sans clé vous permet d\'accorder des permissions à durée limitée, de révoquer l\'accès instantanément et de conserver un registre plus clair de qui est entré et quand.',
    },
    {
      type: 'cards',
      label: '# avantages',
      heading: 'Pourquoi le sans clé sur les biens vacants',
      columns: 2,
      items: [
        { title: 'Réduire la copie de clés', description: 'Aucun double de clé non géré en circulation.' },
        { title: 'Ajouter/retirer l\'accès', description: 'Modifications instantanées pour nouveaux entrepreneurs ou agents.' },
        { title: 'Meilleur contrôle', description: 'Fenêtres horaires et permissions par utilisateur.' },
        { title: 'Gestion des entrepreneurs', description: 'Remise simplifiée pour équipes de rénovation et d\'inspection.' },
      ],
    },
    {
      type: 'steps',
      label: '# comment ça marche',
      heading: 'Entrée basée sur les permissions',
      items: [
        { number: '01', title: 'Permissions d\'accès', description: 'Définissez qui peut entrer et sur quelles ouvertures.' },
        { number: '02', title: 'Accès à durée limitée', description: 'Codes ou identifiants expirant automatiquement.' },
        { number: '03', title: 'Accès d\'urgence', description: 'Processus de dérogation documenté pour entrée urgente.' },
        { number: '04', title: 'Gestion des utilisateurs', description: 'Ajoutez et révoquez des utilisateurs sans changer les serrures.' },
      ],
    },
    {
      type: 'cards',
      label: '# compatibilité',
      heading: 'Fonctionne avec nos solutions de protection',
      columns: 3,
      items: [
        { title: 'Portes anti-squat', description: 'Modules sans clé sur portes temporaires renforcées.' },
        { title: 'Portes de sécurité acier', description: 'Accès numérique sur installations à forte dissuasion.' },
        { title: 'Plans de protection des accès', description: 'Sans clé dans le cadre d\'une stratégie d\'accès documentée.' },
      ],
    },
    {
      type: 'cta',
      label: '# recommandation',
      heading: 'Demandez une recommandation d\'accès sans clé pour votre ouverture.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.lockHardware,
      imageAlt: 'Serrure haute sécurité pour accès sans clé',
    },
  ],
  internalLinks: [
    { label: 'Protection des accès', pageId: 'access-protection' },
    { label: 'Caractéristiques techniques', pageId: 'technical-specifications' },
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const pricingFr: PageContent = {
  id: 'pricing',
  meta: {
    title: 'Tarifs et facteurs de coût des portes anti-squat | AlloPorte',
    description: 'Comprenez la tarification des portes anti-squat — taille d\'ouverture, type de porte, localisation, durée et urgence.',
  },
  hero: {
    label: '# guide des tarifs',
    h1: 'Tarifs et facteurs de coût des portes anti-squat',
    subtitle: 'Facteurs transparents derrière chaque devis — sans surprise cachée.',
    image: pexelsImages.apartmentBlock,
    imageAlt: 'Immeuble résidentiel',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'cards',
      label: '# facteurs de coût',
      heading: 'Ce qui influence votre devis',
      columns: 4,
      items: [
        { title: 'Taille de l\'ouverture', description: 'Les ouvertures plus grandes ou non standard nécessitent un dimensionnement sur mesure.' },
        { title: 'Type de porte', description: 'Anti-squat standard vs sécurité acier renforcée.' },
        { title: 'Serrure / accès', description: 'Modules à clé, clé restreinte ou sans clé.' },
        { title: 'Localisation', description: 'Ville, accès et logistique de déploiement.' },
        { title: 'Durée', description: 'Vacance courte vs déploiement portefeuille long terme.' },
        { title: 'Urgence', description: 'Une installation d\'urgence peut affecter le coût de planification.' },
        { title: 'Nombre d\'ouvertures', description: 'Remises multi-ouvertures et multi-sites disponibles.' },
      ],
    },
    {
      type: 'list-columns',
      label: '# modèles',
      heading: 'Modèles tarifaires',
      columns: [
        { title: 'Protection courte durée', items: ['Location hebdomadaire ou mensuelle', 'Installation et retrait inclus', 'Idéal pour les vacances brèves'] },
        { title: 'Déploiement long terme', items: ['Tarifs réduits pour périodes prolongées', 'Adapté aux biens en vente lente ou en succession', 'Support d\'accès inclus'] },
        { title: 'Tarifs multi-sites', items: ['Tarifs portefeuille et bailleurs', 'Gestion centralisée des accès', 'SLA personnalisé disponible'] },
        { title: 'Devis personnalisé', items: ['Chaque projet est spécifique au site', 'Envoyez des photos pour un cadrage précis', 'Recommandation sans engagement'] },
      ],
    },
    {
      type: 'checklist',
      label: '# inclus',
      heading: 'Ce qui est généralement inclus',
      items: [
        'Recommandation spécifique au site et confirmation du périmètre',
        'Produit de porte adapté à l\'ouverture et au niveau de risque',
        'Installation professionnelle',
        'Configuration d\'accès — clés, clés restreintes ou sans clé',
        'Documentation de remise et référence des spécifications',
      ],
    },
    {
      type: 'cards',
      label: '# augmente le coût',
      heading: 'Ce qui peut augmenter le coût',
      columns: 2,
      items: [
        { title: 'Installation d\'urgence', description: 'Déploiement le jour même ou hors horaires.' },
        { title: 'Accès complexe', description: 'Voies d\'accès difficiles, stationnement ou autorisations.' },
        { title: 'Étages multiples', description: 'Ouvertures en étage avec contraintes de manutention.' },
        { title: 'Ouverture non standard', description: 'Cadres surdimensionnés, en arc ou endommagés.' },
      ],
    },
    {
      type: 'quote-form',
      label: '# devis',
      heading: 'Envoyez photos et dimensions pour votre devis',
      description: 'Le moyen le plus rapide d\'obtenir un tarif précis est de partager des photos de l\'ouverture, les dimensions approximatives, la ville et l\'urgence.',
    },
  ],
  internalLinks: [
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Portes de sécurité en acier temporaires', pageId: 'temporary-steel-security-doors' },
    { label: 'Devis', pageId: 'quote' },
    { label: 'FAQ', pageId: 'faq' },
  ],
}

const quoteFr: PageContent = {
  id: 'quote',
  meta: {
    title: 'Demander un devis | AlloPorte',
    description: 'Envoyez photos et dimensions de l\'ouverture pour un devis rapide de porte anti-squat partout en France.',
  },
  hero: {
    label: '# devis rapide',
    h1: 'Demander un devis',
    subtitle: 'Partagez photos, dimensions et ville — recevez une recommandation adaptée à votre site.',
    image: pexelsImages.renovation,
    imageAlt: 'Bien en attente de sécurisation',
    primaryCta: { label: 'Contacter un conseiller', pageId: 'contact' },
  },
  sections: [
    {
      type: 'steps',
      label: '# processus',
      heading: 'Ce qui se passe après votre envoi',
      items: [
        { number: '01', title: 'Examen', description: 'Un conseiller examine vos photos d\'ouverture et contraintes.' },
        { number: '02', title: 'Recommandation', description: 'Nous proposons le type de porte, la serrure et le modèle d\'accès.' },
        { number: '03', title: 'Devis', description: 'Vous recevez un périmètre et un prix transparents.' },
        { number: '04', title: 'Planification', description: 'Installation programmée selon votre urgence.' },
      ],
    },
    {
      type: 'quote-form',
      label: '# formulaire',
      heading: 'Envoyez les détails de votre ouverture',
      description: 'Incluez des photos de l\'ouverture complète, l\'état du cadre, la voie d\'accès, la ville et toute note d\'urgence.',
    },
  ],
  internalLinks: [
    { label: 'Tarifs', pageId: 'pricing' },
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Caractéristiques techniques', pageId: 'technical-specifications' },
  ],
}

const contactFr: PageContent = {
  id: 'contact',
  meta: {
    title: 'Contact AlloPorte | Conseillers portes anti-squat',
    description: 'Contactez AlloPorte pour des conseils sur les portes anti-squat et la protection des accès. Support bilingue français et anglais.',
  },
  hero: {
    label: '# contact',
    h1: 'Contacter un conseiller en protection des accès',
    subtitle: 'Support bilingue français/anglais pour propriétaires, bailleurs et gestionnaires d\'actifs.',
    image: pexelsImages.teamAdvisor,
    imageAlt: 'Conseiller prêt à vous aider',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'contact-info',
      label: '# nous joindre',
      heading: 'Parlez à notre équipe',
      description: 'Écrivez à hello@alloporte.com ou utilisez le formulaire ci-dessous. Pour les devis les plus rapides, utilisez le formulaire de devis avec photos de l\'ouverture.',
    },
    {
      type: 'metrics',
      items: [
        { value: 'FR/EN', label: 'Équipe bilingue', description: 'Conseillers pour propriétaires nationaux et internationaux.' },
        { value: '24h', label: 'Objectif de réponse', description: 'Nous visons une réponse sous un jour ouvré.' },
        { value: 'FR', label: 'National', description: 'Déploiement partout en France avec spécialistes par ville.' },
      ],
    },
  ],
  internalLinks: [
    { label: 'Demander un devis', pageId: 'quote' },
    { label: 'Zones d\'intervention France', pageId: 'france' },
    { label: 'FAQ', pageId: 'faq' },
  ],
}

const techSpecsFr: PageContent = {
  id: 'technical-specifications',
  meta: {
    title: 'Caractéristiques techniques et normes | AlloPorte',
    description: 'Spécifications des portes anti-squat, périmètre des normes EN, options de verrouillage et exigences d\'installation.',
  },
  hero: {
    label: '# spécifications',
    h1: 'Caractéristiques techniques, normes et périmètre de certification',
    subtitle: 'Documentation claire et honnête — ce qui est certifié par rapport à ce qui est configurable sur votre projet.',
    image: pexelsImages.steelDoor,
    imageAlt: 'Détail d\'une porte de sécurité en acier',
    primaryCta: { label: 'Télécharger la fiche technique', pageId: 'quote' },
  },
  sections: [
    {
      type: 'table',
      label: '# tableau produit',
      heading: 'Aperçu des spécifications produit',
      headers: ['Attribut', 'Anti-squat standard', 'Acier renforcé', 'Notes'],
      rows: [
        { cells: ['Matériau', 'Panneau et cadre acier', 'Acier épais', 'Dimensionné selon visite'] },
        { cells: ['Compatibilité ouverture', 'Portes standard', 'Standard + commercial', 'Non standard devisé séparément'] },
        { cells: ['Options de verrouillage', 'Cylindre / restreint', 'Haute sécurité / sans clé', 'Grade selon configuration'] },
        { cells: ['Options d\'accès', 'À clé / sans clé', 'À clé / sans clé', 'Gestion portefeuille disponible'] },
        { cells: ['Installation', 'Montage temporaire', 'Montage temporaire', 'Selon état mur/cadre'] },
        { cells: ['Documentation', 'Fiche + liste de contrôle', 'Fiche + liste de contrôle', 'Disponible sur demande'] },
      ],
    },
    {
      type: 'text',
      label: '# normes',
      heading: 'Normes expliquées',
      paragraphs: [
        'EN 1627 — Classification européenne pour la résistance au cambriolage des portes. Nous nous référons à ce cadre pour spécifier les classes de résistance adaptées à votre niveau de risque.',
        'EN 1630 — Norme complémentaire pour la méthodologie de tests de résistance. Contexte utile pour comparer les affirmations produit entre fournisseurs.',
        'A2P — Certification française pour serrures et cylindres (1 à 3 étoiles). Nous spécifions du matériel certifié A2P lorsque le projet l\'exige.',
        'CNPP — Contexte de l\'organisme de certification pour produits incendie et sécurité en France. Nous clarifions la pertinence CNPP par configuration.',
        'Normes cylindre et serrure — Nous adaptons le grade du cylindre au type de porte, au risque local et aux exigences de l\'assureur.',
      ],
    },
    {
      type: 'disclaimer',
      text: 'Important : toutes les configurations ne sont pas entièrement certifiées en tant qu\'ensemble porte complet. Nous indiquons clairement ce qui est certifié (ex. cylindre A2P) par rapport à ce qui est configurable (ex. adaptation du cadre à votre ouverture). Demandez le document de périmètre de certification sur votre devis spécifique.',
    },
    {
      type: 'checklist',
      label: '# installation',
      heading: 'Notes d\'installation',
      items: [
        'Type d\'ouverture — porte simple, double, encadrement rideau métallique commercial',
        'État du mur et support — adéquation du support pour cadre temporaire',
        'Adéquation du cadre — équerrage, dommages, retrait du matériel existant',
        'Exigences de mesure — largeur, hauteur, profondeur, état du linteau',
      ],
    },
    {
      type: 'cards',
      label: '# téléchargements',
      heading: 'Documents disponibles',
      columns: 3,
      items: [
        { title: 'Fiche technique', description: 'Dimensions produit, matériaux et options de serrure.' },
        { title: 'Brochure produit', description: 'Aperçu de la gamme anti-squat et portes acier.' },
        { title: 'Liste de contrôle installation', description: 'Visite pré-installation et liste de remise.' },
      ],
    },
    {
      type: 'cta',
      label: '# télécharger',
      heading: 'Téléchargez la fiche technique pour votre projet.',
      ctaLabel: 'Demander les documents',
      ctaPageId: 'quote',
      image: ctaImages.lockHardware,
      imageAlt: 'Détail de serrure pour fiche technique',
    },
  ],
  internalLinks: [
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Contrôle d\'accès sans clé', pageId: 'keyless-access-control' },
    { label: 'Certifications', pageId: 'certifications' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const lawFr: PageContent = {
  id: 'france-anti-squat-law',
  meta: {
    title: 'Loi anti-squat en France | Guide de prévention',
    description: 'Guide général sur la loi française relative au squat, droits des propriétaires et prévention pour biens vacants.',
  },
  hero: {
    label: '# guide juridique',
    h1: 'Loi anti-squat en France : guide de prévention pour propriétaires',
    subtitle: 'Comprenez le cadre juridique — puis sécurisez votre bien avant que le risque ne s\'aggrave.',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Façade résidentielle urbaine en France',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'disclaimer',
      text: 'Avertissement : cette page fournit des informations générales uniquement et ne constitue pas un conseil juridique. Consultez un avocat en droit immobilier français qualifié pour un accompagnement adapté à votre cas.',
    },
    {
      type: 'text',
      label: '# la loi',
      heading: 'Ce que couvre la loi',
      paragraphs: [
        'Occupation illégale — Entrer et demeurer dans un bien sans droit ni titre peut constituer un squat (occupation sans titre), avec des conséquences pénales et civiles selon les circonstances.',
        'Droits du propriétaire — Les propriétaires ont le droit de protéger leurs actifs, notamment en sécurisant les ouvertures et en engageant des procédures juridiques pour récupérer la possession.',
        'Procédures administratives — Certaines procédures accélérées existent pour les biens vacants remplissant des conditions spécifiques. L\'éligibilité dépend des faits de chaque cas.',
        'Contexte d\'expulsion — Expulser des occupants implique des processus juridiques stricts, des délais et parfois des trêves. La prévention est presque toujours plus rapide et moins coûteuse que la récupération.',
      ],
    },
    {
      type: 'intro',
      label: '# prévention',
      heading: 'Pourquoi la prévention reste essentielle',
      body: 'La récupération juridique peut prendre des mois. La protection physique réduit les chances qu\'une occupation ne commence — et démontre une gestion proactive de l\'actif aux assureurs et partenaires.',
    },
    {
      type: 'checklist',
      label: '# liste de contrôle',
      heading: 'Liste de prévention pour propriétaires',
      items: [
        'Documenter l\'état du bien — dates de vacance, inspections, relevés de compteurs',
        'Conserver les registres d\'accès — qui a les clés ou codes et quand l\'accès a été accordé',
        'Sécuriser les ouvertures vulnérables — portes, fenêtres et accès arrière',
        'Agir rapidement après des signes d\'entrée — dégâts, accumulation de courrier, présence inconnue',
      ],
    },
    {
      type: 'cards',
      label: '# méthodes',
      heading: 'Méthodes de prévention',
      columns: 2,
      items: [
        { title: 'Porte anti-squat', description: 'Barrière renforcée visible sur les ouvertures principales.' },
        { title: 'Contrôle d\'accès', description: 'Clés gérées ou permissions sans clé avec registres.' },
        { title: 'Inspection de sécurité', description: 'Contrôles documentés réguliers pendant la vacance.' },
        { title: 'Porte acier temporaire', description: 'Option à forte dissuasion pour les vacances exposées.' },
      ],
    },
    {
      type: 'faq',
      label: '# faq',
      heading: 'FAQ juridique',
      items: [
        {
          question: 'Puis-je expulser les squatters moi-même ?',
          answer: 'L\'expulsion par ses propres moyens est généralement interdite en France. Vous devez suivre les procédures légales. Sécuriser le bien avant occupation est l\'approche recommandée.',
        },
        {
          question: 'La trêve hivernale s\'applique-t-elle ?',
          answer: 'La trêve hivernale restreint certaines expulsions pendant une période définie chaque année. Elle n\'empêche pas de sécuriser proactivement un bien vacant.',
        },
        {
          question: 'Quand dois-je sécuriser un bien vacant ?',
          answer: 'Dès que le bien devient vacant — notamment entre locataires, pendant une succession ou avant la mise en vente.',
        },
        {
          question: 'Une porte anti-squat est-elle légale ?',
          answer: 'Oui. Installer une porte de sécurité temporaire sur votre propre bien pour empêcher l\'entrée non autorisée est une mesure de prévention standard.',
        },
      ],
    },
    {
      type: 'cta',
      label: '# agir maintenant',
      heading: 'Sécurisez le bien avant que le risque ne s\'aggrave.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.secureProperty,
      imageAlt: 'Bien vacant nécessitant une protection urgente',
    },
  ],
  internalLinks: [
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Comment fonctionnent les portes anti-squat', pageId: 'how-anti-squat-doors-work' },
    { label: 'Zones d\'intervention France', pageId: 'france' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const howItWorksFr: PageContent = {
  id: 'how-anti-squat-doors-work',
  meta: {
    title: 'Comment fonctionnent les portes anti-squat | AlloPorte',
    description: 'Découvrez comment les portes anti-squat protègent les biens vacants — installation, accès et limites.',
  },
  hero: {
    label: '# pédagogie',
    h1: 'Comment fonctionnent les portes anti-squat',
    subtitle: 'Une explication claire de ce que fait la porte — et ce qu\'elle ne remplace pas.',
    image: pexelsImages.emptyInterior,
    imageAlt: 'Intérieur vide d\'un bien vacant',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'text',
      label: '# explication',
      heading: 'Explication simple',
      paragraphs: [
        'Une porte anti-squat est installée sur votre ouverture d\'entrée existante. Elle fournit une barrière physique en acier avec verrouillage haute sécurité, visuellement distincte d\'une porte standard — signalant une protection active.',
        'Les utilisateurs autorisés entrent via des clés configurées ou des identifiants sans clé. La porte est conçue pour un usage temporaire pendant la vacance et est retirée lorsque le bien retrouve une occupation normale.',
      ],
    },
    {
      type: 'steps',
      label: '# processus',
      heading: 'Processus d\'installation',
      items: [
        { number: '01', title: 'Photos', description: 'Vous partagez des photos de l\'ouverture et le contexte du bien.' },
        { number: '02', title: 'Mesures', description: 'Dimensions confirmées par visite ou auto-mesure guidée.' },
        { number: '03', title: 'Sélection de porte', description: 'Type, grade de serrure et modèle d\'accès choisis.' },
        { number: '04', title: 'Installation', description: 'Pose professionnelle et contrôle qualité.' },
        { number: '05', title: 'Remise d\'accès', description: 'Clés ou configuration sans clé avec documentation.' },
      ],
    },
    {
      type: 'cards',
      label: '# protège contre',
      heading: 'Ce contre quoi elle protège',
      columns: 2,
      items: [
        { title: 'Entrée opportuniste', description: 'Tentatives d\'effraction occasionnelles sur biens visiblement vacants.' },
        { title: 'Accès non autorisé', description: 'Personnes inconnues entrant sans permission.' },
        { title: 'Dommages à la porte', description: 'Barrière renforcée protégeant l\'ouverture d\'origine.' },
        { title: 'Risque de vacance', description: 'Réduit la probabilité de squat pendant les périodes de vacance.' },
      ],
    },
    {
      type: 'cards',
      label: '# ne remplace pas',
      heading: 'Ce qu\'elle ne remplace pas',
      columns: 2,
      items: [
        { title: 'Conseil juridique', description: 'Consultez un avocat pour les questions d\'occupation ou d\'expulsion.' },
        { title: 'Sécurité complète du site', description: 'Fenêtres arrière et ouvertures secondaires peuvent nécessiter des mesures supplémentaires.' },
        { title: 'Améliorations permanentes', description: 'Il s\'agit d\'une protection temporaire, pas d\'une rénovation architecturale.' },
      ],
    },
    {
      type: 'comparison',
      label: '# comparer',
      heading: 'Options de protection comparées',
      columns: ['Plaquage', 'Alarme seule', 'Changement de serrure', 'Porte blindée'],
      rows: [
        { feature: 'Barrière physique', values: ['Oui', 'Oui', 'Non', 'Partiel', 'Oui'] },
        { feature: 'Visibilité dissuasive', values: ['Moyenne', 'Faible', 'Faible', 'Élevée'] },
        { feature: 'Alerte à distance', values: ['Non', 'Possible', 'Non', 'Optionnel'] },
        { feature: 'Temporaire', values: ['Oui', 'Oui', 'N/A', 'Généralement non'] },
      ],
    },
    {
      type: 'cta',
      label: '# comparer les options',
      heading: 'Comparez les options de porte anti-squat pour votre ouverture.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.steelDoor,
      imageAlt: 'Porte anti-squat installée sur une ouverture',
    },
  ],
  internalLinks: [
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Tarifs', pageId: 'pricing' },
    { label: 'Caractéristiques techniques', pageId: 'technical-specifications' },
    { label: 'Guide juridique', pageId: 'france-anti-squat-law' },
  ],
}

const faqFr: PageContent = {
  id: 'faq',
  meta: {
    title: 'FAQ | Portes anti-squat et protection des accès',
    description: 'Réponses aux questions courantes sur les portes anti-squat, tarifs, accès et installation en France.',
  },
  hero: {
    label: '# faq',
    h1: 'Questions fréquentes',
    subtitle: 'Réponses rapides sur nos services, notre processus et notre couverture.',
    image: pexelsImages.heroSecurity,
    imageAlt: 'Entrée d\'un bien sécurisé',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'faq',
      label: '# général',
      heading: 'FAQ services',
      items: [
        {
          question: 'En combien de temps pouvez-vous installer ?',
          answer: 'Les installations standard sont généralement programmées dans les jours suivant la confirmation du devis. Un déploiement d\'urgence est disponible dans les villes prioritaires selon les capacités.',
        },
        {
          question: 'Couvrez-vous toute la France ?',
          answer: 'Oui. Nous avons des équipes prioritaires à Paris, Marseille, Lyon, Lille, Toulouse, Nice et Bordeaux, avec déploiement national pour les autres localisations.',
        },
        {
          question: 'Puis-je louer plutôt qu\'acheter ?',
          answer: 'Oui. La location courte durée est disponible pour les vacances brèves. Les options achat et service géré conviennent aux besoins plus longs ou récurrents.',
        },
        {
          question: 'Quelles photos faut-il pour un devis ?',
          answer: 'Photos complètes de l\'ouverture montrant le cadre, la zone des gonds, la voie d\'accès et tout dommage. Incluez les dimensions approximatives et la ville.',
        },
        {
          question: 'L\'accès sans clé est-il disponible ?',
          answer: 'Oui. Des modules sans clé peuvent être installés sur les portes anti-squat et de sécurité acier avec permissions à durée limitée.',
        },
        {
          question: 'Quelles normes référencez-vous ?',
          answer: 'Nous référençons EN 1627/1630, les classifications A2P et le contexte CNPP. Consultez notre page de caractéristiques techniques pour le périmètre de certification.',
        },
      ],
    },
    {
      type: 'cta',
      label: '# encore des questions',
      heading: 'Parlez à un conseiller pour des réponses spécifiques à votre projet.',
      ctaLabel: 'Nous contacter',
      ctaPageId: 'contact',
      image: ctaImages.advisor,
      imageAlt: 'Consultation conseiller pour protection de bien',
    },
  ],
  internalLinks: [
    { label: 'Tarifs', pageId: 'pricing' },
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const certificationsFr: PageContent = {
  id: 'certifications',
  meta: {
    title: 'Certifications et périmètre des normes | AlloPorte',
    description: 'Ce qui est certifié par rapport à ce qui est configurable sur les installations de portes anti-squat AlloPorte.',
  },
  hero: {
    label: '# certifications',
    h1: 'Certifications et périmètre des normes',
    subtitle: 'Périmètre honnête — nous distinguons les composants certifiés des assemblages configurables.',
    image: pexelsImages.doorLock,
    imageAlt: 'Matériel de serrure certifié',
    primaryCta: { label: 'Caractéristiques techniques', pageId: 'technical-specifications' },
  },
  sections: [
    {
      type: 'disclaimer',
      text: 'Nous ne revendiquons pas la certification complète de l\'ensemble porte sauf si documenté pour votre configuration spécifique. Demandez toujours la fiche de périmètre de certification avec votre devis.',
    },
    {
      type: 'table',
      label: '# périmètre',
      heading: 'Certifié vs configurable',
      headers: ['Composant', 'Généralement certifié', 'Configurable', 'Notes'],
      rows: [
        { cells: ['Cylindre de serrure', 'Options certifiées A2P', 'Sélection du grade', 'Certificat par lot/modèle'] },
        { cells: ['Panneau de porte', 'Spécification fabrication', 'Taille/finition', 'Dimensionnement sur mesure par ouverture'] },
        { cells: ['Adaptation du cadre', 'Méthode d\'installation', 'Ajustement sur site', 'Dépend du support'] },
        { cells: ['Module sans clé', 'Certification du module', 'Intégration', 'Modèles compatibles listés dans la fiche'] },
      ],
    },
    {
      type: 'text',
      label: '# confiance',
      heading: 'Pourquoi c\'est important',
      paragraphs: [
        'De nombreux concurrents font des affirmations vagues sur la certification. Nous documentons exactement quels composants portent des classifications tierces et lesquels sont conçus sur mesure pour votre ouverture. Cela vous protège auprès des assureurs, auditeurs et conseillers juridiques.',
      ],
    },
    {
      type: 'cta',
      label: '# documents',
      heading: 'Demandez le périmètre de certification pour votre projet.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.securedProject,
      imageAlt: 'Installation anti-squat documentée',
    },
  ],
  internalLinks: [
    { label: 'Caractéristiques techniques', pageId: 'technical-specifications' },
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const franceFr: PageContent = {
  id: 'france',
  meta: {
    title: 'Portes anti-squat partout en France | AlloPorte',
    description: 'Portes anti-squat, portes de sécurité en acier et protection des accès avec équipes prioritaires par ville.',
  },
  hero: {
    label: '# national',
    h1: 'Portes anti-squat et protection des accès partout en France',
    subtitle: 'Déploiement prioritaire dans les grandes villes. Couverture nationale pour portefeuilles et biens ruraux.',
    image: pexelsImages.franceMap,
    imageAlt: 'Vue aérienne du paysage français',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'cards',
      label: '# services',
      heading: 'Services disponibles partout en France',
      columns: 4,
      items: [
        { title: 'Portes anti-squat', description: 'Portes temporaires renforcées pour vacances résidentielles et commerciales.' },
        { title: 'Portes acier', description: 'Sécurité acier à forte dissuasion pour biens exposés.' },
        { title: 'Protection des accès', description: 'Accès documenté pour portefeuilles multi-acteurs.' },
        { title: 'Accès sans clé', description: 'Permissions numériques sur ouvertures protégées.' },
      ],
    },
    {
      type: 'links-grid',
      label: '# villes',
      heading: 'Équipes prioritaires par ville',
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
      label: '# devis locaux',
      heading: 'Comment fonctionnent les devis locaux',
      items: [
        { number: '01', title: 'Indiquez la ville', description: 'Précisez la ville et le département du bien.' },
        { number: '02', title: 'Envoyez des photos', description: 'Partagez photos d\'ouverture et contraintes d\'accès.' },
        { number: '03', title: 'Confirmez l\'ouverture', description: 'Nous vérifions dimensions et type de porte.' },
        { number: '04', title: 'Recommandation', description: 'Périmètre et devis spécifiques au site remis.' },
      ],
    },
    {
      type: 'intro',
      label: '# bilingue',
      heading: 'Support français et anglais pour chaque région',
      body: 'Investisseurs internationaux, propriétaires britanniques et opérateurs français bénéficient tous de la même qualité de conseil — dans la langue de votre choix.',
    },
    {
      type: 'cta',
      label: '# trouver votre ville',
      heading: 'Trouvez votre ville ou demandez une autre localisation.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.franceNationwide,
      imageAlt: 'Skyline de Paris représentant la couverture France',
    },
  ],
  internalLinks: [
    { label: 'Loi anti-squat en France', pageId: 'france-anti-squat-law' },
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const caseStudiesFr: PageContent = {
  id: 'case-studies',
  meta: {
    title: 'Études de cas | AlloPorte',
    description: 'Installations de portes anti-squat avant/après — résultats concrets pour biens vacants.',
  },
  hero: {
    label: '# études de cas',
    h1: 'Études de cas et résultats clients',
    subtitle: 'Projets de sécurisation documentés pour vacances résidentielles et commerciales.',
    image: caseStudyImages.hero,
    imageAlt: 'Avant/après installation porte anti-squat dans un immeuble parisien',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'dark-feature',
      label: '# résidentiel',
      heading: 'Appartement parisien — vacance entre locataires',
      body: 'Un appartement en rez-de-chaussée dans le 11e arrondissement a été sécurisé sous 48 heures après le départ du locataire. Porte anti-squat avec accès sans clé pour l\'entrepreneur, permettant la rénovation sans risque de duplication de clés.',
      image: caseStudyImages.parisApartment,
      imageAlt: 'Avant/après sécurisation d\'un appartement parisien',
      sideTitle: 'Résultat',
      sideBody: 'Aucun incident d\'occupation pendant 4 mois de vacance. Porte retirée à la nouvelle location.',
    },
    {
      type: 'dark-feature',
      label: '# commercial',
      heading: 'Local commercial Marseille — sécurisation avant vente',
      body: 'Un local commercial vacant en façade à Marseille centre a reçu une porte de sécurité en acier renforcée avec accès à clé restreinte pour les visites d\'agents.',
      image: caseStudyImages.marseilleCommercial,
      imageAlt: 'Avant/après sécurisation d\'un local commercial à Marseille',
      sideTitle: 'Résultat',
      sideBody: 'Vente conclue sans incident de sécurité. Remise documentée à l\'acquéreur.',
    },
    {
      type: 'dark-feature',
      label: '# portefeuille',
      heading: 'Bailleur lyonnais — programme multi-logements',
      body: 'Douze logements vacants dans la métropole de Lyon sécurisés dans le cadre d\'un plan de protection des accès géré avec permissions sans clé centralisées.',
      image: caseStudyImages.lyonPortfolio,
      imageAlt: 'Avant/après sécurisation d\'une entrée d\'immeuble à Lyon',
      sideTitle: 'Résultat',
      sideBody: 'Exposition au risque de vacance réduite. Tableau de bord d\'accès unique pour l\'équipe immobilière.',
    },
    {
      type: 'cta',
      label: '# votre projet',
      heading: 'Discutez d\'une étude de cas pertinente pour votre bien.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: caseStudyImages.securedProject,
      imageAlt: 'Avant/après installation porte anti-squat sur un bien vacant',
    },
  ],
  internalLinks: [
    { label: 'Portes anti-squat', pageId: 'anti-squat-doors' },
    { label: 'Avis clients', pageId: 'reviews' },
    { label: 'Devis', pageId: 'quote' },
  ],
}

const aboutFr: PageContent = {
  id: 'about',
  meta: {
    title: 'À propos d\'AlloPorte | Protection des biens vacants',
    description: 'AlloPorte est spécialisé dans les portes anti-squat et la protection des accès pour biens vacants partout en France.',
  },
  hero: {
    label: '# à propos',
    h1: 'À propos d\'AlloPorte',
    subtitle: 'Protection des biens vacants avec clarté technique et conseil bilingue.',
    image: pexelsImages.teamAdvisor,
    imageAlt: 'Équipe conseil AlloPorte',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'text',
      label: '# mission',
      heading: 'Nous sécurisons les biens vacants avant que le risque ne devienne récupération',
      paragraphs: [
        'AlloPorte a été fondé pour offrir aux propriétaires, bailleurs et gestionnaires d\'actifs un chemin plus rapide et plus clair vers la protection physique. Nous combinons portes anti-squat, barrières de sécurité en acier et accès sans clé avec une documentation technique honnête.',
        'Nous servons la France entière avec des équipes prioritaires dans les grandes villes. Nos conseillers travaillent en français et en anglais pour les clients nationaux et internationaux.',
      ],
    },
    {
      type: 'metrics',
      items: [
        { value: 'FR', label: 'Focus France', description: 'Dédié au droit immobilier français et au contexte de déploiement.' },
        { value: 'FR/EN', label: 'Bilingue', description: 'Conseil en français et en anglais.' },
        { value: 'Docs', label: 'Documentation d\'abord', description: 'Fiches techniques, listes de contrôle et périmètre de certification.' },
      ],
    },
  ],
  internalLinks: [
    { label: 'Études de cas', pageId: 'case-studies' },
    { label: 'Contact', pageId: 'contact' },
    { label: 'France', pageId: 'france' },
  ],
}

const reviewsFr: PageContent = {
  id: 'reviews',
  meta: {
    title: 'Avis clients | AlloPorte',
    description: 'Ce que disent propriétaires et gestionnaires d\'actifs des services de portes anti-squat AlloPorte.',
  },
  hero: {
    label: '# avis',
    h1: 'Avis clients',
    subtitle: 'La confiance de propriétaires, bailleurs et gestionnaires d\'actifs partout en France.',
    image: pexelsImages.testimonial,
    imageAlt: 'Propriétaire satisfait',
    primaryCta: quoteCta,
  },
  sections: [
    {
      type: 'testimonials',
      label: '# témoignages',
      items: [
        {
          quote: 'Photos envoyées lundi, porte installée jeudi. L\'accès sans clé pour notre entrepreneur était exactement ce qu\'il nous fallait pendant la rénovation.',
          name: 'Claire M.',
          role: 'Propriétaire, Lyon',
          image: pexelsImages.testimonial,
        },
        {
          quote: 'Documentation claire pour notre assureur et aucun incident d\'occupation pendant six mois de vacance. Nous utilisons désormais AlloPorte sur notre portefeuille parisien.',
          name: 'David R.',
          role: 'Gestionnaire d\'actifs, Paris',
          image: pexelsImages.testimonialPortrait,
        },
        {
          quote: 'Un conseiller anglophone a simplifié notre bien hérité au Royaume-Uni à Bordeaux. Installation professionnelle et devis transparent.',
          name: 'Sarah T.',
          role: 'Propriétaire internationale, Bordeaux',
          image: 'https://images.pexels.com/photos/774909?auto=compress&cs=tinysrgb&w=500',
        },
      ],
    },
    {
      type: 'cta',
      label: '# rejoignez-les',
      heading: 'Sécurisez votre bien vacant en toute confiance.',
      ctaLabel: 'Demander un devis',
      ctaPageId: 'quote',
      image: ctaImages.vacantProperty,
      imageAlt: 'Bien vacant protégé par une porte anti-squat',
    },
  ],
  internalLinks: [
    { label: 'Études de cas', pageId: 'case-studies' },
    { label: 'Contact', pageId: 'contact' },
  ],
}

const privacyFr: PageContent = {
  id: 'privacy-policy',
  meta: { title: 'Politique de confidentialité | AlloPorte', description: 'Comment AlloPorte collecte et utilise vos données personnelles.' },
  hero: {
    label: '# légal',
    h1: 'Politique de confidentialité',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Documentation juridique',
  },
  sections: [
    {
      type: 'text',
      paragraphs: [
        'AlloPorte collecte les données personnelles que vous fournissez via les formulaires de devis, formulaires de contact, e-mail et téléphone — notamment nom, e-mail, téléphone, adresse du bien et photos.',
        'Nous utilisons ces données pour répondre aux demandes, préparer les devis, planifier les installations et améliorer nos services. Nous ne vendons pas vos données à des tiers.',
        'Vous avez le droit d\'accéder, rectifier et supprimer vos données conformément au RGPD applicable. Contactez hello@alloporte.com pour les demandes relatives aux données.',
        'Les données sont conservées pendant la durée de notre relation commerciale et selon les exigences légales.',
      ],
    },
  ],
  internalLinks: [{ label: 'Politique cookies', pageId: 'cookie-policy' }, { label: 'Contact', pageId: 'contact' }],
}

const cookieFr: PageContent = {
  id: 'cookie-policy',
  meta: { title: 'Politique cookies | AlloPorte', description: 'Comment AlloPorte utilise les cookies sur ce site.' },
  hero: {
    label: '# légal',
    h1: 'Politique cookies',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Politique cookies du site',
  },
  sections: [
    {
      type: 'text',
      paragraphs: [
        'Ce site peut utiliser des cookies essentiels nécessaires au fonctionnement de base et des cookies analytiques pour comprendre comment les visiteurs utilisent nos pages.',
        'Vous pouvez contrôler les préférences cookies via les paramètres de votre navigateur. La désactivation des cookies peut affecter certaines fonctionnalités du site.',
        'Pour toute question, contactez hello@alloporte.com.',
      ],
    },
  ],
  internalLinks: [{ label: 'Politique de confidentialité', pageId: 'privacy-policy' }],
}

const termsFr: PageContent = {
  id: 'terms',
  meta: { title: 'Conditions générales | AlloPorte', description: 'Conditions régissant les services AlloPorte et l\'utilisation du site.' },
  hero: {
    label: '# légal',
    h1: 'Conditions générales',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Conditions générales',
  },
  sections: [
    {
      type: 'text',
      paragraphs: [
        'Les devis sont valables pour la période indiquée et soumis à confirmation par visite sur site. Les dates d\'installation dépendent des disponibilités et des conditions d\'accès.',
        'Les conditions de location et d\'achat sont précisées dans votre contrat individuel. Le client est responsable de fournir des informations d\'accès au bien exactes.',
        'La responsabilité d\'AlloPorte est limitée au périmètre défini dans votre contrat de service. Nous recommandons de maintenir une assurance habitation appropriée pendant la vacance.',
      ],
    },
  ],
  internalLinks: [{ label: 'Mentions légales', pageId: 'legal-notice' }, { label: 'Contact', pageId: 'contact' }],
}

const legalNoticeFr: PageContent = {
  id: 'legal-notice',
  meta: { title: 'Mentions légales | AlloPorte', description: 'Mentions légales — informations société AlloPorte.' },
  hero: {
    label: '# mentions légales',
    h1: 'Mentions légales',
    image: pexelsImages.urbanFacade,
    imageAlt: 'Mentions légales',
  },
  sections: [
    {
      type: 'text',
      paragraphs: [
        'Éditeur : AlloPorte — Services de protection des biens vacants, France.',
        'Contact : hello@alloporte.com',
        'Hébergement : Informations disponibles sur demande.',
        'Directeur de publication : Direction AlloPorte.',
        'Ce site est soumis au droit français. Pour les litiges, les tribunaux français sont compétents.',
      ],
    },
  ],
  internalLinks: [{ label: 'Politique de confidentialité', pageId: 'privacy-policy' }, { label: 'Conditions générales', pageId: 'terms' }],
}

export const pagesFr: PagesByLocale = {
  home: homeFr,
  'anti-squat-doors': antiSquatDoorsFr,
  'temporary-steel-security-doors': steelDoorsFr,
  'access-protection': accessProtectionFr,
  'keyless-access-control': keylessFr,
  pricing: pricingFr,
  quote: quoteFr,
  contact: contactFr,
  'technical-specifications': techSpecsFr,
  'france-anti-squat-law': lawFr,
  'how-anti-squat-doors-work': howItWorksFr,
  faq: faqFr,
  certifications: certificationsFr,
  france: franceFr,
  'case-studies': caseStudiesFr,
  about: aboutFr,
  reviews: reviewsFr,
  'privacy-policy': privacyFr,
  'cookie-policy': cookieFr,
  terms: termsFr,
  'legal-notice': legalNoticeFr,
}
