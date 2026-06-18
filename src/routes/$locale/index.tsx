import { createFileRoute, redirect } from '@tanstack/react-router'
import { isValidLocale } from '@/i18n/routes'
import type { Locale } from '@/i18n/types'
import { getPageContent } from '@/data/pages'
import { SiteLayout } from '@/components/layout/site-layout'
import { PageRenderer } from '@/components/pages/page-renderer'

export const Route = createFileRoute('/$locale/')({
  beforeLoad: ({ params }) => {
    if (!isValidLocale(params.locale)) {
      throw redirect({ to: '/$locale', params: { locale: 'fr' } })
    }
    return { locale: params.locale as Locale }
  },
  head: ({ params }) => {
    const locale = params.locale as Locale
    const content = getPageContent(locale, 'home')
    return {
      meta: [
        { title: content.meta.title },
        { name: 'description', content: content.meta.description },
      ],
    }
  },
  component: LocaleHomePage,
})

function LocaleHomePage() {
  const { locale } = Route.useRouteContext()
  const content = getPageContent(locale, 'home')

  return (
    <SiteLayout locale={locale}>
      <PageRenderer locale={locale} content={content} />
    </SiteLayout>
  )
}
