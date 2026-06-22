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
      'Sí. Compramos carburo de tungsteno en Colombia en brocas, insertos, pastillas, puntas, matrices, punteras y piezas de desgaste industrial.',
  },
  {
    question: '¿Qué piezas con carburo de tungsteno suelen tener valor?',
    answer:
      'Brocas, insertos, puntas, matrices, segmentos de desgaste y otras piezas industriales con alto contenido de carburo de tungsteno suelen ser relevantes para evaluación.',
  },
  {
    question: '¿Cómo saber si el material tiene carburo de tungsteno?',
    answer:
      'Las fotos, el contexto de uso industrial y la forma de la pieza ayudan a orientar la identificación inicial. Si tienes dudas, puedes enviarnos imágenes para revisión.',
  },
]

export const metadata = buildPageMetadata({
  title: 'Compra de carburo de tungsteno en Colombia',
  description:
    'Compra de carburo de tungsteno en Colombia. Evaluamos brocas, insertos, pastillas, puntas y piezas industriales con carburo de tungsteno.',
  path: '/compra-de-carburo-de-tungsteno-colombia',
  image: '/img/seo/carburo-de-tungsteno-colombia.webp',
  keywords: [
    'compra de carburo de tungsteno colombia',
    'carburo de tungsteno colombia',
    'venta de carburo de tungsteno colombia',
    'brocas de carburo de tungsteno colombia',
    'insertos de carburo de tungsteno colombia',
  ],
})

export default function CompraDeCarburoDeTungstenoColombiaPage() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      {
        name: 'Compra de carburo de tungsteno en Colombia',
        path: '/compra-de-carburo-de-tungsteno-colombia',
      },
    ]),
    createCollectionPageSchema({
      name: 'Compra de carburo de tungsteno en Colombia',
      description:
        'Página dedicada a la compra de carburo de tungsteno en Colombia para brocas, insertos y piezas industriales de desgaste.',
      path: '/compra-de-carburo-de-tungsteno-colombia',
      image: '/img/seo/carburo-de-tungsteno-colombia.webp',
      about: [
        'Carburo de tungsteno',
        'Compra de carburo de tungsteno en Colombia',
        'Brocas de carburo de tungsteno',
        'Insertos de carburo de tungsteno',
      ],
    }),
    createServiceSchema({
      name: 'Compra de carburo de tungsteno en Colombia',
      serviceType: 'Evaluación y compra de carburo de tungsteno industrial',
      description:
        'Servicio orientado a Colombia para la evaluación técnica y compra de carburo de tungsteno en herramientas y piezas de desgaste.',
      path: '/compra-de-carburo-de-tungsteno-colombia',
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
        image='/img/seo/carburo-de-tungsteno-colombia.webp'
        imageAlt='Brocas y piezas industriales de carburo de tungsteno para compra en Colombia'
        primaryHref='/contactanos'
        primaryLabel='Cotizar carburo de tungsteno'
        secondaryHref='/compra-de-tungsteno-colombia'
        secondaryLabel='Ver compra de tungsteno'
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
            title: 'Cobertura nacional',
            text: 'El posicionamiento de esta URL está orientado a búsquedas para toda Colombia, con intención comercial clara y contexto industrial visible.',
          },
        ]}
        internalLinks={[
          {
            href: '/brocas-de-carburo-de-tungsteno',
            label: 'Brocas de carburo de tungsteno',
          },
          {
            href: '/insertos-de-carburo-de-tungsteno',
            label: 'Insertos de carburo de tungsteno',
          },
          { href: '/materiales', label: 'Listado general de materiales' },
        ]}
        faqs={carburoFaq}
      />
    </>
  )
}
