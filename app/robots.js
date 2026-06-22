import { SITE_URL } from './lib/seo'

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/sitemap.xml'],
      disallow: ['/api/'],
    },
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
