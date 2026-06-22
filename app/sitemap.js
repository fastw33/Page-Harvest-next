import { SEO_LAST_MODIFIED, SITE_URL, absoluteUrl } from './lib/seo'

export const dynamic = 'force-static'

export default function sitemap() {
  const entries = [
    {
      path: '/',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 1,
      images: [
        absoluteUrl('/assets/Harvest.webp'),
        absoluteUrl('/img/4.webp'),
        absoluteUrl('/assets/carrusel/1.webp'),
      ],
    },
    {
      path: '/materiales',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.95,
      images: [
        absoluteUrl('/img/materiales/tungsteno/brocas.webp'),
        absoluteUrl('/img/materiales/tungsteno/puntas1.webp'),
        absoluteUrl('/img/materiales/tungsteno/puntas2.webp'),
        absoluteUrl('/img/materiales/tungsteno/tunsteno.webp'),
        absoluteUrl('/img/materiales/tungsteno/tunsteno2.webp'),
      ],
    },
    {
      path: '/comotrabajamos',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.8,
      images: [absoluteUrl('/img/4.webp')],
    },
    {
      path: '/compra-de-tungsteno-colombia',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.96,
      images: [absoluteUrl('/img/seo/tungsteno-industrial-colombia.webp')],
    },
    {
      path: '/compra-de-carburo-de-tungsteno-colombia',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.97,
      images: [absoluteUrl('/img/seo/carburo-de-tungsteno-colombia.webp')],
    },
    {
      path: '/compra-de-metales-industriales-colombia',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.94,
      images: [absoluteUrl('/img/4.webp')],
    },
    {
      path: '/guia-tungsteno-carburo-de-tungsteno-colombia',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.93,
      images: [absoluteUrl('/img/seo/carburo-de-tungsteno-colombia.webp')],
    },
    {
      path: '/brocas-de-carburo-de-tungsteno',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.89,
      images: [absoluteUrl('/img/seo/brocas-de-carburo-de-tungsteno.webp')],
    },
    {
      path: '/insertos-de-carburo-de-tungsteno',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'weekly',
      priority: 0.88,
      images: [absoluteUrl('/img/seo/insertos-de-carburo-de-tungsteno.webp')],
    },
    {
      path: '/sobrenosotros',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.7,
      images: [absoluteUrl('/img/SobreNosotros/Harvest.webp')],
    },
    {
      path: '/contactanos',
      lastModified: SEO_LAST_MODIFIED,
      changeFrequency: 'monthly',
      priority: 0.85,
      images: [absoluteUrl('/assets/Harvest.webp')],
    },
  ]

  return entries.map(({ path, ...entry }) => {
    const url = path === '/' ? SITE_URL : absoluteUrl(path)

    return {
      url,
      ...entry,
      alternates: {
        languages: {
          'es-CO': url,
        },
      },
    }
  })
}
