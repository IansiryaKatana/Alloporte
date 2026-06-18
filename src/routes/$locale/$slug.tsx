import { createFileRoute, notFound, redirect } from '@tanstack/react-router'
import { isValidLocale, resolvePageId } from '@/i18n/routes'
import type { Locale } from '@/i18n/types'
import { getPageContent } from '@/data/pages'
import { SiteLayout } from '@/components/layout/site-layout'
import { PageRenderer } from '@/components/pages/page-renderer'

export const Route = createFileRoute('/$locale/$slug')({
  beforeLoad: ({ params }) => {
    if (!isValidLocale(params.locale)) {
      throw redirect({ to: '/$locale', params: { locale: 'fr' } })
    }
    const locale = params.locale as Locale
    const pageId = resolvePageId(locale, params.slug)
    if (!pageId) {
      throw notFound()
    }
    return { locale, pageId }
  },
  head: ({ params }) => {
    const locale = params.locale as Locale
    const pageId = resolvePageId(locale, params.slug)
    if (!pageId) return {}
    const content = getPageContent(locale, pageId)
    return {
      meta: [
        { title: content.meta.title },
        { name: 'description', content: content.meta.description },
      ],
    }
  },
  component: SlugPage,
})

function SlugPage() {
  const { locale, pageId } = Route.useRouteContext()
  const content = getPageContent(locale, pageId)

  return (
    <SiteLayout locale={locale}>
      <PageRenderer locale={locale} content={content} />
    </SiteLayout>
  )
}
