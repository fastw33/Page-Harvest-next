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

const guideFaq = [
  {
    question: '¿Cuál es la diferencia entre tungsteno y carburo de tungsteno?',
    answer:
      'El tungsteno es un metal, mientras que el carburo de tungsteno es un compuesto de alta dureza muy usado en brocas, insertos, pastillas y piezas de desgaste industrial.',
  },
  {
    question: '¿Atienden compra de tungsteno y carburo de tungsteno en toda Colombia?',
    answer:
      'Sí. La cobertura de Metal Harvest está orientada a toda Colombia y el proceso de evaluación parte de fotos, descripción del material, cantidad aproximada y ubicación.',
  },
  {
    question: '¿Qué materiales conviene enviar para revisión?',
    answer:
      'Varillas, puntas, brocas, insertos, pastillas, matrices, punteras y residuos industriales asociados a tungsteno o carburo de tungsteno suelen ser buenos candidatos para revisión inicial.',
  },
]

export const metadata = buildPageMetadata({
  title: 'Guía de tungsteno y carburo de tungsteno en Colombia',
  description:
    'Guía práctica sobre tungsteno y carburo de tungsteno en Colombia. Conoce diferencias, usos industriales, piezas comunes y cómo preparar una cotización técnica.',
  path: '/guia-tungsteno-carburo-de-tungsteno-colombia',
  image: '/img/seo/carburo-de-tungsteno-colombia.webp',
  keywords: [
    'guia de tungsteno colombia',
    'guia de carburo de tungsteno colombia',
    'diferencia entre tungsteno y carburo de tungsteno',
    'tungsteno y carburo de tungsteno colombia',
    'cotizar tungsteno colombia',
  ],
})

export default function GuiaTungstenoCarburoColombiaPage() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      {
        name: 'Guía de tungsteno y carburo de tungsteno en Colombia',
        path: '/guia-tungsteno-carburo-de-tungsteno-colombia',
      },
    ]),
    createWebPageSchema({
      name: 'Guía de tungsteno y carburo de tungsteno en Colombia',
      description:
        'Guía informativa y comercial para comprender tungsteno, carburo de tungsteno, piezas industriales y criterios de evaluación en Colombia.',
      path: '/guia-tungsteno-carburo-de-tungsteno-colombia',
    }),
    createCollectionPageSchema({
      name: 'Guía de tungsteno y carburo de tungsteno en Colombia',
      description:
        'Página guía para usuarios y empresas que buscan entender y cotizar tungsteno y carburo de tungsteno en Colombia.',
      path: '/guia-tungsteno-carburo-de-tungsteno-colombia',
      image: '/img/seo/carburo-de-tungsteno-colombia.webp',
      about: [
        'Tungsteno',
        'Carburo de tungsteno',
        'Colombia',
        'Brocas de carburo de tungsteno',
        'Insertos de carburo de tungsteno',
      ],
    }),
    createArticleSchema({
      headline: 'Guía de tungsteno y carburo de tungsteno en Colombia',
      description:
        'Guía enfocada en Colombia para explicar diferencias, usos industriales, formatos comunes y criterios de cotización de tungsteno y carburo de tungsteno.',
      path: '/guia-tungsteno-carburo-de-tungsteno-colombia',
      image: '/img/seo/carburo-de-tungsteno-colombia.webp',
      keywords: [
        'tungsteno',
        'carburo de tungsteno',
        'tungsteno colombia',
        'carburo de tungsteno colombia',
      ],
    }),
    createServiceSchema({
      name: 'Evaluación de tungsteno y carburo de tungsteno en Colombia',
      serviceType: 'Evaluación técnica y compra de materiales industriales',
      description:
        'Servicio de evaluación y compra de tungsteno, carburo de tungsteno y piezas industriales de desgaste con cobertura en Colombia.',
      path: '/guia-tungsteno-carburo-de-tungsteno-colombia',
    }),
    createFaqSchema(
      guideFaq.map(item => ({
        pregunta: item.question,
        respuesta: item.answer,
      }))
    )
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <TopicLanding
        eyebrow='Guía industrial en Colombia'
        title='Guía de tungsteno y carburo de tungsteno en Colombia'
        description='Esta guía resume de forma clara qué es tungsteno, qué es carburo de tungsteno, en qué piezas suele aparecer y cómo preparar una cotización técnica para Colombia sin perder tiempo.'
        image='/img/seo/carburo-de-tungsteno-colombia.webp'
        imageAlt='Guía visual de tungsteno y carburo de tungsteno en Colombia'
        primaryHref='/contactanos'
        primaryLabel='Solicitar evaluación'
        secondaryHref='/materiales'
        secondaryLabel='Ver materiales'
        sections={[
          {
            title: 'Tungsteno vs carburo de tungsteno',
            text: 'El tungsteno suele aparecer como metal o aleación en piezas de desgaste, mientras que el carburo de tungsteno es común en herramientas de corte, brocas, insertos y componentes con alta exigencia de dureza.',
          },
          {
            title: 'Piezas comunes que generan búsqueda',
            list: [
              'Brocas de carburo de tungsteno',
              'Insertos de carburo de tungsteno',
              'Puntas, matrices y pastillas',
              'Varillas, remanentes y residuos de proceso',
            ],
          },
          {
            title: 'Qué ayuda a una cotización más precisa',
            list: [
              'Fotos nítidas del material o del lote',
              'Cantidad, peso o volumen aproximado',
              'Descripción corta del uso industrial',
              'Ciudad o departamento dentro de Colombia',
            ],
          },
          {
            title: 'Cobertura en Colombia',
            text: 'La estrategia de esta guía es nacional. Está escrita para responder búsquedas relacionadas con tungsteno y carburo de tungsteno en toda Colombia, tanto para usuarios técnicos como para compradores industriales.',
          },
        ]}
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
            href: '/brocas-de-carburo-de-tungsteno',
            label: 'Brocas de carburo de tungsteno',
          },
          {
            href: '/insertos-de-carburo-de-tungsteno',
            label: 'Insertos de carburo de tungsteno',
          },
        ]}
        faqs={guideFaq}
      />
    </>
  )
}
