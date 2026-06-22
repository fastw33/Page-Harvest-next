import JsonLd from '@/app/components/Seo/JsonLd'
import TopicLanding from '@/app/components/TopicLanding/TopicLanding'
import {
  buildJsonLdGraph,
  buildPageMetadata,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createFaqSchema,
  createServiceSchema,
} from '@/app/lib/seo'

const carburoFaq = [
  {
    question: '¿Compran carburo de tungsteno en Colombia?',
    answer:
      'Sí. Compramos carburo de tungsteno en Colombia en piezas de desgaste, brocas, insertos, pastillas, punteras y residuos industriales asociados.',
  },
  {
    question: '¿Qué piezas con carburo de tungsteno suelen tener valor?',
    answer:
      'Brocas, insertos, puntas, matrices, segmentos de desgaste y otras piezas industriales con alto contenido de carburo de tungsteno suelen ser relevantes para evaluación.',
  },
]

export const metadata = buildPageMetadata({
  title: 'Carburo de tungsteno en Colombia | Compra industrial',
  description:
    'Compra de carburo de tungsteno en Colombia. Evaluamos brocas, insertos, pastillas, puntas y piezas industriales con carburo de tungsteno.',
  path: '/carburo-de-tungsteno',
  image: '/img/materiales/tungsteno/brocas.webp',
  keywords: [
    'carburo de tungsteno colombia',
    'compra de carburo de tungsteno colombia',
    'brocas de carburo de tungsteno colombia',
    'insertos de carburo de tungsteno colombia',
  ],
})

export default function CarburoDeTungstenoPage() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Carburo de tungsteno', path: '/carburo-de-tungsteno' },
    ]),
    createCollectionPageSchema({
      name: 'Carburo de tungsteno en Colombia',
      description:
        'Landing enfocada en compra de carburo de tungsteno en Colombia para brocas, insertos y piezas industriales de desgaste.',
      path: '/carburo-de-tungsteno',
      image: '/img/materiales/tungsteno/brocas.webp',
      about: [
        'Carburo de tungsteno',
        'Brocas de carburo de tungsteno',
        'Insertos industriales',
        'Compra de carburo de tungsteno en Colombia',
      ],
    }),
    createServiceSchema({
      name: 'Compra de carburo de tungsteno en Colombia',
      serviceType: 'Evaluación y compra de carburo de tungsteno industrial',
      description:
        'Servicio orientado a Colombia para la evaluación técnica y compra de carburo de tungsteno en herramientas y piezas de desgaste.',
      path: '/carburo-de-tungsteno',
    }),
    createFaqSchema(
      carburoFaq.map(item => ({
        pregunta: item.question,
        respuesta: item.answer,
      }))
    )
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <TopicLanding
        eyebrow='Carburo de tungsteno en Colombia'
        title='Compra de carburo de tungsteno para industria en Colombia'
        description='Recibimos carburo de tungsteno en Colombia para evaluación y compra directa. Analizamos brocas, insertos, pastillas, puntas y piezas de desgaste con foco industrial y valorización técnica.'
        image='/img/materiales/tungsteno/brocas.webp'
        imageAlt='Brocas y piezas industriales de carburo de tungsteno para compra en Colombia'
        primaryHref='/contactanos'
        primaryLabel='Cotizar carburo de tungsteno'
        secondaryHref='/tungsteno'
        secondaryLabel='Ver página de tungsteno'
        sections={[
          {
            title: 'Formatos comunes de carburo de tungsteno',
            list: [
              'Brocas de carburo de tungsteno',
              'Insertos y pastillas de corte',
              'Puntas, matrices y segmentos de desgaste',
              'Residuos industriales con alto contenido metálico',
            ],
          },
          {
            title: 'Qué mejora la valorización',
            text: 'La separación del material, la limpieza, el estado físico y la claridad sobre el uso industrial ayudan a valorar mejor el carburo de tungsteno en Colombia.',
          },
          {
            title: 'Quién suele buscarnos',
            list: [
              'Talleres de mecanizado',
              'Operaciones mineras e industriales',
              'Empresas con herramientas de desgaste',
              'Comercializadores de residuos metálicos especiales',
            ],
          },
          {
            title: 'Brecha SEO que cerramos',
            text: 'Esta URL resuelve una intención de búsqueda específica que antes no existía en el sitio: carburo de tungsteno en Colombia, con contenido, metadata y enlaces internos dedicados.',
          },
        ]}
        internalLinks={[
          { href: '/tungsteno', label: 'Compra de tungsteno en Colombia' },
          { href: '/materiales', label: 'Listado general de materiales' },
        ]}
        faqs={carburoFaq}
      />
    </>
  )
}
