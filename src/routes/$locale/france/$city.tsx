import { createFileRoute, notFound, redirect } from '@tanstack/react-router'
import { isValidCity, isValidLocale } from '@/i18n/routes'
import type { CityId, Locale } from '@/i18n/types'
import { buildCityContent } from '@/data/pages/cities'
import { SiteLayout } from '@/components/layout/site-layout'
import { PageRenderer } from '@/components/pages/page-renderer'
import type { PageContent } from '@/data/pages/types'

export const Route = createFileRoute('/$locale/france/$city')({
  beforeLoad: ({ params }) => {
    if (!isValidLocale(params.locale)) {
      throw redirect({ to: '/$locale', params: { locale: 'fr' } })
    }
    if (!isValidCity(params.city)) {
      throw notFound()
    }
    return {
      locale: params.locale as Locale,
      city: params.city as CityId,
    }
  },
  head: ({ params }) => {
    const locale = params.locale as Locale
    const city = params.city as CityId
    const content = buildCityContent(city, locale)
    return {
      meta: [
        { title: content.meta.title },
        { name: 'description', content: content.meta.description },
      ],
    }
  },
  component: CityPage,
})

function cityToPageContent(city: CityId, locale: Locale): PageContent {
  const cityContent = buildCityContent(city, locale)
  return {
    id: 'france',
    meta: cityContent.meta,
    hero: cityContent.hero,
    sections: cityContent.sections,
    internalLinks: [
      { label: locale === 'en' ? 'France hub' : 'Hub France', pageId: 'france' },
      { label: locale === 'en' ? 'Anti-Squat Doors' : 'Portes anti-squat', pageId: 'anti-squat-doors' },
      { label: locale === 'en' ? 'Quote' : 'Devis', pageId: 'quote' },
    ],
  }
}

function CityPage() {
  const { locale, city } = Route.useRouteContext()
  const content = cityToPageContent(city, locale)

  return (
    <SiteLayout locale={locale}>
      <PageRenderer locale={locale} content={content} />
    </SiteLayout>
  )
}
