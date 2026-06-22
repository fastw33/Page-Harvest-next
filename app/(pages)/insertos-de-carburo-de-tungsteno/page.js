import JsonLd from '@/app/components/Seo/JsonLd'
import TopicLanding from '@/app/components/TopicLanding/TopicLanding'
import {
  buildJsonLdGraph,
  buildPageMetadata,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createServiceSchema,
} from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Insertos de carburo de tungsteno en Colombia',
  description:
    'Evaluación y compra de insertos de carburo de tungsteno en Colombia para mecanizado, corte, desgaste y aplicaciones industriales.',
  path: '/insertos-de-carburo-de-tungsteno',
  image: '/img/seo/insertos-de-carburo-de-tungsteno.webp',
  keywords: [
    'insertos de carburo de tungsteno colombia',
    'compra de insertos de carburo de tungsteno',
    'insertos industriales tungsteno colombia',
  ],
})

export default function InsertosDeCarburoDeTungstenoPage() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      {
        name: 'Insertos de carburo de tungsteno',
        path: '/insertos-de-carburo-de-tungsteno',
      },
    ]),
    createCollectionPageSchema({
      name: 'Insertos de carburo de tungsteno en Colombia',
      description:
        'Página enfocada en evaluación y compra de insertos de carburo de tungsteno en Colombia.',
      path: '/insertos-de-carburo-de-tungsteno',
      image: '/img/seo/insertos-de-carburo-de-tungsteno.webp',
      about: [
        'Insertos de carburo de tungsteno',
        'Piezas de desgaste',
        'Compra industrial en Colombia',
      ],
    }),
    createServiceSchema({
      name: 'Compra de insertos de carburo de tungsteno',
      serviceType: 'Evaluación y compra de insertos industriales',
      description:
        'Evaluación técnica en Colombia de insertos de carburo de tungsteno para valorización y compra.',
      path: '/insertos-de-carburo-de-tungsteno',
    })
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <TopicLanding
        eyebrow='Insertos de carburo de tungsteno'
        title='Compra de insertos de carburo de tungsteno en Colombia'
        description='Analizamos insertos de carburo de tungsteno para compra en Colombia. Esta landing resuelve una búsqueda específica relacionada con piezas industriales de alto desgaste y valor técnico.'
        image='/img/seo/insertos-de-carburo-de-tungsteno.webp'
        imageAlt='Insertos de carburo de tungsteno para compra industrial en Colombia'
        primaryHref='/contactanos'
        primaryLabel='Cotizar insertos'
        secondaryHref='/compra-de-carburo-de-tungsteno-colombia'
        secondaryLabel='Ver carburo de tungsteno'
        sections={[
          {
            title: 'Tipos de insertos que evaluamos',
            list: [
              'Insertos de corte',
              'Insertos de desgaste industrial',
              'Piezas remanentes de producción',
              'Componentes metálicos con carburo de tungsteno',
            ],
          },
          {
            title: 'Utilidad SEO de esta página',
            text: 'Captura una intención específica relacionada con insertos de carburo de tungsteno y refuerza el clúster temático principal del sitio.',
          },
          {
            title: 'Qué información conviene enviar',
            list: [
              'Fotos del lote o de las piezas',
              'Tipo de inserto o aplicación si la conoces',
              'Cantidad aproximada',
              'Departamento o ciudad en Colombia',
            ],
          },
          {
            title: 'Relación con otras rutas',
            text: 'Esta URL se integra con las páginas de tungsteno, carburo de tungsteno, materiales y contacto para fortalecer la semántica interna del sitio.',
          },
        ]}
        internalLinks={[
          {
            href: '/compra-de-carburo-de-tungsteno-colombia',
            label: 'Compra de carburo de tungsteno en Colombia',
          },
          {
            href: '/brocas-de-carburo-de-tungsteno',
            label: 'Brocas de carburo de tungsteno',
          },
        ]}
      />
    </>
  )
}
