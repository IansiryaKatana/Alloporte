import type { CityId, Locale, PageId } from '@/i18n/types'

export type CardItem = {
  number?: string
  title: string
  description: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type ComparisonRow = {
  feature: string
  values: string[]
}

export type StepItem = {
  number: string
  title: string
  description: string
}

export type MetricItem = {
  value: string
  label: string
  description: string
}

export type TableRow = {
  cells: string[]
}

export type InternalLink = {
  label: string
  pageId?: PageId
  cityId?: CityId
}

export type PageSection =
  | {
      type: 'intro'
      label: string
      heading: string
      body?: string
    }
  | {
      type: 'cards'
      label?: string
      heading?: string
      items: CardItem[]
      columns?: 2 | 3 | 4
    }
  | {
      type: 'dark-feature'
      label: string
      heading: string
      body: string
      image: string
      imageAlt: string
      cta?: { label: string; pageId: PageId }
      sideTitle?: string
      sideBody?: string
    }
  | {
      type: 'steps'
      label: string
      heading: string
      items: StepItem[]
    }
  | {
      type: 'comparison'
      label: string
      heading: string
      columns: string[]
      rows: ComparisonRow[]
    }
  | {
      type: 'faq'
      label: string
      heading: string
      items: FaqItem[]
    }
  | {
      type: 'metrics'
      items: MetricItem[]
    }
  | {
      type: 'text'
      label?: string
      heading?: string
      paragraphs: string[]
    }
  | {
      type: 'checklist'
      label: string
      heading: string
      items: string[]
    }
  | {
      type: 'disclaimer'
      text: string
    }
  | {
      type: 'table'
      label: string
      heading: string
      headers: string[]
      rows: TableRow[]
    }
  | {
      type: 'links-grid'
      label: string
      heading: string
      links: InternalLink[]
    }
  // InternalLink supports pageId or cityId
  | {
      type: 'list-columns'
      label: string
      heading: string
      columns: { title: string; items: string[] }[]
    }
  | {
      type: 'cta'
      label: string
      heading: string
      ctaLabel: string
      ctaPageId: PageId
      image: string
      imageAlt: string
    }
  | {
      type: 'quote-form'
      label: string
      heading: string
      description: string
    }
  | {
      type: 'contact-info'
      label: string
      heading: string
      description: string
    }
  | {
      type: 'testimonials'
      label: string
      items: { quote: string; name: string; role: string; image: string }[]
    }
  | {
      type: 'image-text'
      label: string
      heading: string
      body: string
      image: string
      imageAlt: string
      reverse?: boolean
    }

export type PageContent = {
  id: PageId
  meta: {
    title: string
    description: string
  }
  hero: {
    label: string
    h1: string
    subtitle?: string
    image: string
    imageAlt: string
    primaryCta?: { label: string; pageId: PageId }
    secondaryCta?: { label: string; pageId: PageId }
  }
  sections: PageSection[]
  internalLinks?: InternalLink[]
}

export type CityContent = {
  id: string
  meta: { title: string; description: string }
  hero: PageContent['hero']
  sections: PageSection[]
}

export type PagesByLocale = Record<PageId, PageContent>
