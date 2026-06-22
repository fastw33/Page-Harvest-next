export const SITE_URL = 'https://metalharvest.io'
export const SITE_NAME = 'Metal Harvest'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/assets/Harvest.webp`
export const SEO_LAST_MODIFIED = '2026-06-22'
export const SITE_PHONE = '+57 302 858 3784'
export const SITE_PHONE_E164 = '+573028583784'
export const SITE_DESCRIPTION =
  'Compra, evaluación y recuperación de tungsteno y carburo de tungsteno en Colombia para industria, reciclaje especializado y valorización de piezas de desgaste.'

export const SOCIAL_LINKS = []

export const CORE_KEYWORDS = [
  'tungsteno',
  'carburo de tungsteno',
  'tungsteno colombia',
  'carburo de tungsteno colombia',
  'compra de tungsteno',
  'venta de tungsteno',
  'compra de tungsteno colombia',
  'compra de carburo de tungsteno colombia',
  'compra de carburo de tungsteno',
  'reciclaje de tungsteno',
  'carburo de tungsteno industrial',
  'tungsteno industrial colombia',
  'carburo de tungsteno industrial colombia',
  'compra de brocas de carburo de tungsteno',
  'compra de insertos de carburo de tungsteno',
  'metales industriales',
  'aleaciones especiales',
  'metales industriales colombia',
  'brocas de tungsteno',
  'insertos de carburo de tungsteno',
  'residuos industriales valorizables',
  'compra de tungsteno en colombia',
  'compra de carburo de tungsteno en colombia',
  'venta de tungsteno en colombia',
  'venta de carburo de tungsteno en colombia',
  'cotizacion de tungsteno colombia',
  'cotizacion de carburo de tungsteno colombia',
]

const uniqueValues = values => [...new Set(values.flat().filter(Boolean))]

export const absoluteUrl = path => new URL(path, SITE_URL).toString()

export function buildPageMetadata({
  title,
  description,
  path = '/',
  keywords = [],
  image = '/assets/Harvest.webp',
}) {
  const canonicalUrl = absoluteUrl(path)
  const fullTitle = title.includes(SITE_NAME) ? title : `${title} | ${SITE_NAME}`
  const imageUrl = absoluteUrl(image)

  return {
    title,
    description,
    keywords: uniqueValues([CORE_KEYWORDS, keywords]),
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'es-CO': canonicalUrl,
      },
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'es_CO',
      type: 'website',
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    other: {
      'geo.region': 'CO',
      'geo.placename': 'Colombia',
      'geo.position': '4.570868,-74.297333',
      ICBM: '4.570868, -74.297333',
    },
  }
}

export function buildJsonLdGraph(...nodes) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean),
  }
}

export function createOrganizationSchema() {
  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    description: SITE_DESCRIPTION,
    areaServed: {
      '@type': 'Country',
      name: 'Colombia',
    },
    logo: {
      '@type': 'ImageObject',
      url: DEFAULT_OG_IMAGE,
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: SITE_PHONE_E164,
        contactType: 'customer service',
        areaServed: 'CO',
        availableLanguage: ['es', 'es-CO'],
      },
    ],
    knowsAbout: [
      'Tungsteno',
      'Carburo de tungsteno',
      'Brocas de carburo de tungsteno',
      'Insertos de carburo de tungsteno',
      'Metales industriales',
      'Reciclaje industrial',
    ],
  }

  if (SOCIAL_LINKS.length) {
    organization.sameAs = SOCIAL_LINKS
  }

  return organization
}

export function createWebsiteSchema() {
  return {
    '@type': 'WebSite',
    '@id': `${SITE_URL}#website`,
    name: SITE_NAME,
    url: SITE_URL,
    inLanguage: 'es-CO',
    audience: {
      '@type': 'Audience',
      geographicArea: {
        '@type': 'Country',
        name: 'Colombia',
      },
    },
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
  }
}

export function createWebPageSchema({
  name,
  description,
  path,
  type = 'WebPage',
}) {
  return {
    '@type': type,
    '@id': `${absoluteUrl(path)}#webpage`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: 'es-CO',
    isPartOf: {
      '@id': `${SITE_URL}#website`,
    },
    about: [
      {
        '@type': 'Thing',
        name: 'Tungsteno',
      },
      {
        '@type': 'Thing',
        name: 'Carburo de tungsteno',
      },
      {
        '@type': 'Thing',
        name: 'Colombia',
      },
    ],
  }
}

export function createServiceSchema({
  name,
  description,
  path = '/',
  serviceType,
  areaServed = 'Colombia',
}) {
  return {
    '@type': 'Service',
    '@id': `${absoluteUrl(path)}#service`,
    name,
    serviceType: serviceType || name,
    description,
    url: absoluteUrl(path),
    areaServed,
    availableLanguage: 'es-CO',
    serviceArea: {
      '@type': 'Country',
      name: areaServed,
    },
    provider: {
      '@id': `${SITE_URL}#organization`,
    },
  }
}

export function createBreadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  }
}

export function createCollectionPageSchema({
  name,
  description,
  path,
  image,
  about = [],
}) {
  return {
    '@type': 'CollectionPage',
    '@id': `${absoluteUrl(path)}#collection-page`,
    name,
    description,
    url: absoluteUrl(path),
    inLanguage: 'es-CO',
    primaryImageOfPage: {
      '@type': 'ImageObject',
      url: absoluteUrl(image),
    },
    about: about.map(topic => ({
      '@type': 'Thing',
      name: topic,
    })),
    isPartOf: {
      '@id': `${SITE_URL}#website`,
    },
  }
}

export function createFaqSchema(questions) {
  return {
    '@type': 'FAQPage',
    mainEntity: questions.map(item => ({
      '@type': 'Question',
      name: item.pregunta,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.respuesta,
      },
    })),
  }
}

export function createItemListSchema({ path, name, items = [] }) {
  return {
    '@type': 'ItemList',
    '@id': `${absoluteUrl(path)}#item-list`,
    name,
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      url: item.url ? absoluteUrl(item.url) : absoluteUrl(path),
    })),
  }
}

export function createArticleSchema({
  headline,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  dateModified = SEO_LAST_MODIFIED,
  keywords = [],
}) {
  return {
    '@type': 'Article',
    '@id': `${absoluteUrl(path)}#article`,
    headline,
    description,
    url: absoluteUrl(path),
    inLanguage: 'es-CO',
    dateModified,
    datePublished: dateModified,
    image: [absoluteUrl(image)],
    author: {
      '@id': `${SITE_URL}#organization`,
    },
    publisher: {
      '@id': `${SITE_URL}#organization`,
    },
    about: uniqueValues([CORE_KEYWORDS, keywords]).slice(0, 12).map(keyword => ({
      '@type': 'Thing',
      name: keyword,
    })),
    mainEntityOfPage: {
      '@id': `${absoluteUrl(path)}#webpage`,
    },
  }
}
