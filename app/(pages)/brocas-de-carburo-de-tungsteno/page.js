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
  title: 'Brocas de carburo de tungsteno en Colombia',
  description:
    'Evaluación y compra de brocas de carburo de tungsteno en Colombia para industria, mecanizado, minería y operaciones de desgaste.',
  path: '/brocas-de-carburo-de-tungsteno',
  image: '/img/seo/brocas-de-carburo-de-tungsteno.webp',
  keywords: [
    'brocas de carburo de tungsteno colombia',
    'compra de brocas de carburo de tungsteno',
    'brocas industriales de tungsteno colombia',
  ],
})

export default function BrocasDeCarburoDeTungstenoPage() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      {
        name: 'Brocas de carburo de tungsteno',
        path: '/brocas-de-carburo-de-tungsteno',
      },
    ]),
    createCollectionPageSchema({
      name: 'Brocas de carburo de tungsteno en Colombia',
      description:
        'Página enfocada en evaluación y compra de brocas de carburo de tungsteno en Colombia.',
      path: '/brocas-de-carburo-de-tungsteno',
      image: '/img/seo/brocas-de-carburo-de-tungsteno.webp',
      about: [
        'Brocas de carburo de tungsteno',
        'Herramientas de corte',
        'Compra industrial en Colombia',
      ],
    }),
    createServiceSchema({
      name: 'Compra de brocas de carburo de tungsteno',
      serviceType: 'Evaluación y compra de herramientas industriales',
      description:
        'Evaluación técnica en Colombia de brocas de carburo de tungsteno para valorización y compra.',
      path: '/brocas-de-carburo-de-tungsteno',
    })
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <TopicLanding
        eyebrow='Brocas de carburo de tungsteno'
        title='Compra de brocas de carburo de tungsteno en Colombia'
        description='Recibimos brocas de carburo de tungsteno para evaluación técnica y compra en Colombia. Esta página está orientada a búsquedas específicas relacionadas con herramientas de desgaste y corte industrial.'
        image='/img/seo/brocas-de-carburo-de-tungsteno.webp'
        imageAlt='Brocas de carburo de tungsteno para compra industrial en Colombia'
        primaryHref='/contactanos'
        primaryLabel='Cotizar brocas'
        secondaryHref='/compra-de-carburo-de-tungsteno-colombia'
        secondaryLabel='Ver carburo de tungsteno'
        sections={[
          {
            title: 'Qué revisamos en las brocas',
            list: [
              'Estado de desgaste',
              'Tipo de aplicación industrial',
              'Limpieza y mezcla con otros materiales',
              'Volumen o peso aproximado',
            ],
          },
          {
            title: 'Por qué esta intención importa',
            text: 'Muchas búsquedas no son por el metal genérico, sino por la pieza. Esta URL cubre la intención comercial asociada a brocas de carburo de tungsteno en Colombia.',
          },
          {
            title: 'Qué enviar para una valoración más útil',
            list: [
              'Fotos desde varios ángulos',
              'Cantidad aproximada',
              'Uso previo de la herramienta',
              'Ubicación en Colombia',
            ],
          },
          {
            title: 'Enlace con la página principal',
            text: 'Esta página apoya el posicionamiento del clúster de carburo de tungsteno, aportando profundidad temática y enlaces internos semánticos.',
          },
        ]}
        internalLinks={[
          {
            href: '/compra-de-carburo-de-tungsteno-colombia',
            label: 'Compra de carburo de tungsteno en Colombia',
          },
          {
            href: '/insertos-de-carburo-de-tungsteno',
            label: 'Insertos de carburo de tungsteno',
          },
        ]}
      />
    </>
  )
}
