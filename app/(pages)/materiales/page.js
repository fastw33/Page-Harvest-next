import MaterialesContent from '@/app/components/Materiales/MaterialesContent'
import JsonLd from '@/app/components/Seo/JsonLd'
import { preguntasFrecuentes } from '@/app/components/Materiales/data/faqData'
import { materiales } from '@/app/components/Materiales/data/materialesData'
import {
  buildJsonLdGraph,
  buildPageMetadata,
  createBreadcrumbSchema,
  createCollectionPageSchema,
  createFaqSchema,
  createItemListSchema,
  createServiceSchema,
  createWebPageSchema,
} from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Tungsteno y carburo de tungsteno | Materiales industriales',
  description:
    'Compramos tungsteno, carburo de tungsteno y otros metales industriales en Colombia. Evaluamos brocas, insertos, puntas, varillas y residuos metálicos especiales.',
  path: '/materiales',
  image: '/img/materiales/tungsteno/brocas.webp',
  keywords: [
    'compramos tungsteno',
    'compramos carburo de tungsteno',
    'compramos tungsteno colombia',
    'compramos carburo de tungsteno colombia',
    'brocas de carburo de tungsteno',
    'insertos de tungsteno',
    'materiales industriales de tungsteno',
  ],
})

export default function Materiales() {
  const materialesSeoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Materiales', path: '/materiales' },
    ]),
    createCollectionPageSchema({
      name: 'Tungsteno, carburo de tungsteno y materiales industriales',
      description:
        'Página de materiales con foco en tungsteno, carburo de tungsteno, aleaciones especiales y residuos metálicos valorizables.',
      path: '/materiales',
      image: '/img/materiales/tungsteno/brocas.webp',
      about: [
        'Tungsteno',
        'Carburo de tungsteno',
        'Brocas de tungsteno',
        'Insertos industriales',
        'Metales especiales',
      ],
    }),
    createServiceSchema({
      name: 'Compra de tungsteno y carburo de tungsteno',
      serviceType: 'Compra de metales especiales y materiales industriales',
      description:
        'Evaluación técnica y compra en Colombia de tungsteno, carburo de tungsteno, brocas, insertos y materiales industriales de alto valor.',
      path: '/materiales',
    }),
    createWebPageSchema({
      name: 'Materiales industriales con tungsteno y carburo de tungsteno',
      description:
        'Catálogo visible de materiales industriales que Metal Harvest evalúa y compra en Colombia, con foco en tungsteno y carburo de tungsteno.',
      path: '/materiales',
    }),
    createItemListSchema({
      path: '/materiales',
      name: 'Listado de materiales industriales',
      items: materiales.flatMap(category =>
        category.items.map(item => ({
          name: item.nombre || `${category.tipo} industrial`,
          url: '/materiales',
        }))
      ),
    }),
    createFaqSchema(preguntasFrecuentes)
  )

  return (
    <>
      <JsonLd data={materialesSeoGraph} />
      <MaterialesContent />
    </>
  )
}
