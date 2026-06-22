import HomePageContent from '@/app/components/Home/HomePageContent'
import JsonLd from '@/app/components/Seo/JsonLd'
import {
  buildJsonLdGraph,
  buildPageMetadata,
  createBreadcrumbSchema,
  createItemListSchema,
  createOrganizationSchema,
  createServiceSchema,
  createWebPageSchema,
  createWebsiteSchema,
} from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Compra de tungsteno y carburo de tungsteno en Colombia',
  description:
    'Metal Harvest compra, evalúa y recupera tungsteno y carburo de tungsteno en Colombia. Recibimos brocas, insertos, puntas, varillas y residuos industriales para valorización especializada.',
  path: '/',
  image: '/img/4.webp',
  keywords: [
    'tungsteno industrial',
    'carburo de tungsteno industrial',
    'tungsteno colombia',
    'carburo de tungsteno colombia',
    'recuperación de tungsteno',
    'compra de metales especiales',
  ],
})

export default function Home() {
  const homeSeoGraph = buildJsonLdGraph(
    createOrganizationSchema(),
    createWebsiteSchema(),
    createServiceSchema({
      name: 'Compra de tungsteno y carburo de tungsteno',
      serviceType: 'Compra, evaluación y recuperación de metales industriales',
      description:
        'Servicio especializado en Colombia para compra de tungsteno, carburo de tungsteno y aleaciones industriales de alto valor.',
      path: '/',
    }),
    createWebPageSchema({
      name: 'Compra de tungsteno y carburo de tungsteno en Colombia',
      description:
        'Página principal de Metal Harvest enfocada en compra de tungsteno y carburo de tungsteno en Colombia, con contenido transaccional y técnico.',
      path: '/',
    }),
    createItemListSchema({
      path: '/',
      name: 'Clúster principal de tungsteno y carburo de tungsteno',
      items: [
        {
          name: 'Compra de tungsteno en Colombia',
          url: '/compra-de-tungsteno-colombia',
        },
        {
          name: 'Compra de carburo de tungsteno en Colombia',
          url: '/compra-de-carburo-de-tungsteno-colombia',
        },
        {
          name: 'Brocas de carburo de tungsteno',
          url: '/brocas-de-carburo-de-tungsteno',
        },
        {
          name: 'Insertos de carburo de tungsteno',
          url: '/insertos-de-carburo-de-tungsteno',
        },
        {
          name: 'Guía de tungsteno y carburo de tungsteno en Colombia',
          url: '/guia-tungsteno-carburo-de-tungsteno-colombia',
        },
      ],
    }),
    createBreadcrumbSchema([{ name: 'Inicio', path: '/' }])
  )

  return (
    <>
      <JsonLd data={homeSeoGraph} />
      <HomePageContent />
    </>
  )
}
