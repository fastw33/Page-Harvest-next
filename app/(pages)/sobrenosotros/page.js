import SobreNosotrosContent from '@/app/components/SobreNosotros/SobreNosotrosContent'
import JsonLd from '@/app/components/Seo/JsonLd'
import {
  buildJsonLdGraph,
  buildPageMetadata,
  createBreadcrumbSchema,
  createWebPageSchema,
} from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Sobre nosotros',
  description:
    'Conoce la experiencia de Metal Harvest en recuperación de tungsteno, carburo de tungsteno y materiales industriales con enfoque sostenible.',
  path: '/sobrenosotros',
  image: '/img/SobreNosotros/Harvest.webp',
  keywords: [
    'empresa de tungsteno industrial',
    'empresa de carburo de tungsteno',
    'reciclaje industrial sostenible',
  ],
})

export default function SobreNosotros() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Sobre nosotros', path: '/sobrenosotros' },
    ]),
    createWebPageSchema({
      name: 'Sobre Metal Harvest',
      description:
        'Información sobre la experiencia, el enfoque sostenible y la especialidad de Metal Harvest en tungsteno, carburo de tungsteno y materiales industriales en Colombia.',
      path: '/sobrenosotros',
      type: 'AboutPage',
    })
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <SobreNosotrosContent />
    </>
  )
}
