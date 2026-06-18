import { CITIES, LOCALES, PAGE_SLUGS, cityPath, pagePath } from '@/i18n/routes'
import type { PageId } from '@/i18n/types'

const SITE_ORIGIN = 'https://alloporte.com'

export function getSitemapUrls(): string[] {
  const urls: string[] = [`${SITE_ORIGIN}/fr`]

  for (const locale of LOCALES) {
    urls.push(`${SITE_ORIGIN}${pagePath(locale, 'home')}`)

    for (const pageId of Object.keys(PAGE_SLUGS) as PageId[]) {
      if (pageId === 'home') continue
      urls.push(`${SITE_ORIGIN}${pagePath(locale, pageId)}`)
    }

    for (const city of CITIES) {
      urls.push(`${SITE_ORIGIN}${cityPath(locale, city)}`)
    }
  }

  return urls
}

export function buildSitemapXml(): string {
  const urls = getSitemapUrls()
  const entries = urls
    .map(
      (url) => `  <url>
    <loc>${url}</loc>
    <changefreq>weekly</changefreq>
  </url>`,
    )
    .join('\n')

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries}
</urlset>`
}
