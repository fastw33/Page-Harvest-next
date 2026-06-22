import Contacto from '@/app/components/Contacto/Contacto'
import JsonLd from '@/app/components/Seo/JsonLd'
import {
  buildJsonLdGraph,
  buildPageMetadata,
  createBreadcrumbSchema,
  createServiceSchema,
  createWebPageSchema,
} from '@/app/lib/seo'

export const metadata = buildPageMetadata({
  title: 'Contáctanos',
  description:
    'Solicita una cotización rápida para tungsteno, carburo de tungsteno y otros metales industriales con el equipo de Metal Harvest.',
  path: '/contactanos',
  image: '/img/4.webp',
  keywords: [
    'cotizar tungsteno',
    'cotizar carburo de tungsteno',
    'contacto compra de metales industriales',
  ],
})

export default function Contactanos() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Contacto', path: '/contactanos' },
    ]),
    createWebPageSchema({
      name: 'Contacto para tungsteno y carburo de tungsteno en Colombia',
      description:
        'Página de contacto y cotización para tungsteno, carburo de tungsteno y metales industriales con cobertura nacional en Colombia.',
      path: '/contactanos',
      type: 'ContactPage',
    }),
    createServiceSchema({
      name: 'Cotización de tungsteno y carburo de tungsteno en Colombia',
      serviceType: 'Solicitud de evaluación y compra industrial',
      description:
        'Formulario de contacto para enviar fotos y datos del material y solicitar una evaluación de tungsteno o carburo de tungsteno en Colombia.',
      path: '/contactanos',
    })
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <main style={{ padding: '2rem' }}>
        <section
          style={{
            maxWidth: '900px',
            margin: '7rem auto 0',
            textAlign: 'center',
          }}
        >
          <h1
            style={{
              fontFamily: 'lemon milk',
              color: '#00896b',
              marginBottom: '1rem',
            }}
          >
            Cotiza tungsteno y carburo de tungsteno en Colombia
          </h1>
          <p style={{ color: '#44635b', lineHeight: 1.7 }}>
            Comparte fotos, descripción y datos de contacto para recibir una
            evaluación rápida de tungsteno, carburo de tungsteno y otros
            metales industriales.
          </p>
        </section>
        <section>
          <Contacto />
        </section>
      </main>
    </>
  )
}
