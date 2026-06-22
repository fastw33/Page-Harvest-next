import JsonLd from '@/app/components/Seo/JsonLd'
import TopicLanding from '@/app/components/TopicLanding/TopicLanding'
import {
  buildJsonLdGraph,
  buildPageMetadata,
  createArticleSchema,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createFaqSchema,
  createServiceSchema,
  createWebPageSchema,
} from '@/app/lib/seo'

const faq = [
  {
    question: '¿Qué metales industriales compran en Colombia?',
    answer:
      'Metal Harvest evalúa tungsteno, carburo de tungsteno, aceros, aceros especiales, níquel, cobalto y otros materiales industriales valorizables según su condición y contexto de uso.',
  },
  {
    question: '¿La atención es solo para grandes empresas?',
    answer:
      'No necesariamente. Atendemos empresas, talleres, operaciones industriales y otros generadores de material que necesiten una evaluación comercial clara.',
  },
  {
    question: '¿Qué ayuda a una revisión más rápida?',
    answer:
      'Enviar fotos, cantidad aproximada, descripción del material, limpieza general y ciudad dentro de Colombia facilita la revisión inicial.',
  },
]

export const metadata = buildPageMetadata({
  title: 'Compra de metales industriales en Colombia',
  description:
    'Compra y evaluación de metales industriales en Colombia. Revisamos tungsteno, carburo de tungsteno, aceros especiales, níquel, cobalto y otros materiales valorizables.',
  path: '/compra-de-metales-industriales-colombia',
  image: '/img/4.webp',
  keywords: [
    'metales industriales colombia',
    'compra de metales industriales colombia',
    'aleaciones especiales colombia',
    'reciclaje industrial colombia',
    'materiales industriales valorizables',
  ],
})

export default function CompraDeMetalesIndustrialesColombiaPage() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      {
        name: 'Compra de metales industriales en Colombia',
        path: '/compra-de-metales-industriales-colombia',
      },
    ]),
    createWebPageSchema({
      name: 'Compra de metales industriales en Colombia',
      description:
        'Página orientada a la compra y evaluación de metales industriales en Colombia con foco en materiales de alto valor técnico.',
      path: '/compra-de-metales-industriales-colombia',
    }),
    createCollectionPageSchema({
      name: 'Compra de metales industriales en Colombia',
      description:
        'Página sobre materiales industriales, aleaciones especiales y procesos de evaluación comercial en Colombia.',
      path: '/compra-de-metales-industriales-colombia',
      image: '/img/4.webp',
      about: [
        'Metales industriales',
        'Tungsteno',
        'Carburo de tungsteno',
        'Aceros especiales',
        'Níquel',
        'Cobalto',
      ],
    }),
    createArticleSchema({
      headline: 'Compra de metales industriales en Colombia',
      description:
        'Contenido orientado a empresas y operaciones que necesitan evaluar y vender metales industriales en Colombia.',
      path: '/compra-de-metales-industriales-colombia',
      image: '/img/4.webp',
      keywords: [
        'metales industriales colombia',
        'compra de metales industriales colombia',
        'aleaciones especiales colombia',
      ],
    }),
    createServiceSchema({
      name: 'Compra de metales industriales en Colombia',
      serviceType: 'Evaluación y compra de materiales industriales',
      description:
        'Servicio de evaluación y compra de tungsteno, carburo de tungsteno, aleaciones especiales y otros metales industriales en Colombia.',
      path: '/compra-de-metales-industriales-colombia',
    }),
    createFaqSchema(
      faq.map(item => ({
        pregunta: item.question,
        respuesta: item.answer,
      }))
    )
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <TopicLanding
        eyebrow='Metales industriales en Colombia'
        title='Compra de metales industriales para empresas en Colombia'
        description='Evaluamos materiales industriales con valor técnico y comercial en Colombia. Además de tungsteno y carburo de tungsteno, revisamos aceros especiales, níquel, cobalto y otros lotes industriales valorizables.'
        image='/img/4.webp'
        imageAlt='Metales industriales para evaluación y compra en Colombia'
        primaryHref='#contacto'
        primaryLabel='Solicitar evaluación'
        secondaryHref='/materiales'
        secondaryLabel='Ver materiales'
        highlights={[
          'Cobertura nacional',
          'Enfoque industrial y comercial',
          'Materiales especiales y de desgaste',
        ]}
        metrics={[
          { value: '24h', label: 'respuesta inicial estimada' },
          { value: '6+', label: 'familias de materiales visibles en el sitio' },
          { value: 'CO', label: 'operación orientada a Colombia' },
        ]}
        sections={[
          {
            title: 'Materiales con mayor interés comercial',
            list: [
              'Tungsteno y carburo de tungsteno',
              'Aceros inoxidables y aceros especiales',
              'Níquel, cobalto y aleaciones duras',
              'Lodos y remanentes industriales valorizables',
            ],
          },
          {
            title: 'Quiénes suelen contactarnos',
            text: 'Atendemos talleres, empresas de mecanizado, industria pesada, operaciones con piezas de desgaste y generadores de material industrial que buscan una salida comercial clara.',
          },
          {
            title: 'Qué enviar para una mejor revisión',
            list: [
              'Fotos del material o del lote',
              'Cantidad o peso aproximado',
              'Descripción breve del origen industrial',
              'Ciudad o departamento dentro de Colombia',
            ],
          },
          {
            title: 'Enfoque del sitio',
            text: 'La web no se limita a una sola línea. El contenido está orientado a mostrar capacidad de evaluación de materiales industriales y apoyar decisiones rápidas de contacto y cotización.',
          },
        ]}
        ctaTitle='¿Necesitas una validación inicial del material?'
        ctaText='Si no tienes certeza del tipo de metal, una descripción corta y varias fotos suelen ser suficientes para comenzar una revisión útil y orientarte sobre el siguiente paso.'
        internalLinks={[
          {
            href: '/compra-de-tungsteno-colombia',
            label: 'Compra de tungsteno en Colombia',
          },
          {
            href: '/compra-de-carburo-de-tungsteno-colombia',
            label: 'Compra de carburo de tungsteno en Colombia',
          },
          {
            href: '/guia-tungsteno-carburo-de-tungsteno-colombia',
            label: 'Guía de tungsteno y carburo de tungsteno',
          },
          {
            href: '/materiales',
            label: 'Materiales que compramos',
          },
        ]}
        faqs={faq}
      />
    </>
  )
}
