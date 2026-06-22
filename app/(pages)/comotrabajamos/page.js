import ComoTrabajamosContent from '@/app/components/ComoTrabajamos/ComoTrabajamosContent'
import JsonLd from '@/app/components/Seo/JsonLd'
import {
  buildJsonLdGraph,
  buildPageMetadata,
  createBreadcrumbSchema,
  createServiceSchema,
  createWebPageSchema,
} from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: '¿Cómo trabajamos?',
  description:
    'Conoce el proceso de evaluación, recolección y valorización de tungsteno, carburo de tungsteno y otros metales industriales en Metal Harvest.',
  path: '/comotrabajamos',
  image: '/assets/carrusel/1.webp',
  keywords: [
    'proceso de compra de tungsteno',
    'evaluación de carburo de tungsteno',
    'logística de metales industriales',
  ],
})

export default function ComoTrabajamos() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Cómo trabajamos', path: '/comotrabajamos' },
    ]),
    createWebPageSchema({
      name: 'Cómo trabajamos en Metal Harvest',
      description:
        'Proceso de evaluación, recolección, logística y valorización de tungsteno, carburo de tungsteno y metales industriales en Colombia.',
      path: '/comotrabajamos',
    }),
    createServiceSchema({
      name: 'Proceso de compra de tungsteno y carburo de tungsteno',
      serviceType: 'Evaluación, logística y compra industrial',
      description:
        'Proceso explicado paso a paso para compra y evaluación de tungsteno, carburo de tungsteno y metales industriales en Colombia.',
      path: '/comotrabajamos',
    })
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <ComoTrabajamosContent />
    </>
  )
}
