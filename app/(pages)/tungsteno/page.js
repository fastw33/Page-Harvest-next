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

const tungstenoFaq = [
  {
    question: '¿Compran tungsteno industrial en Colombia?',
    answer:
      'Sí. Metal Harvest evalúa y compra tungsteno industrial en Colombia en formatos como varillas, insertos, puntas, residuos de mecanizado y componentes de desgaste.',
  },
  {
    question: '¿Qué información ayuda a cotizar tungsteno más rápido?',
    answer:
      'Las fotos claras, el peso aproximado, el estado del material y una breve descripción del origen industrial ayudan a agilizar la evaluación y la cotización.',
  },
]

export const metadata = buildPageMetadata({
  title: 'Tungsteno en Colombia | Compra de tungsteno industrial',
  description:
    'Compra de tungsteno en Colombia para industria y reciclaje especializado. Evaluamos varillas, puntas, insertos y residuos industriales con tungsteno.',
  path: '/tungsteno',
  image: '/img/materiales/tungsteno/puntas1.webp',
  keywords: [
    'tungsteno colombia',
    'compra de tungsteno colombia',
    'tungsteno industrial colombia',
    'venta de tungsteno colombia',
  ],
})

export default function TungstenoPage() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      { name: 'Tungsteno', path: '/tungsteno' },
    ]),
    createCollectionPageSchema({
      name: 'Tungsteno en Colombia',
      description:
        'Landing enfocada en compra de tungsteno industrial en Colombia para fabricantes, talleres y operaciones industriales.',
      path: '/tungsteno',
      image: '/img/materiales/tungsteno/puntas1.webp',
      about: [
        'Tungsteno',
        'Tungsteno industrial',
        'Compra de tungsteno en Colombia',
      ],
    }),
    createServiceSchema({
      name: 'Compra de tungsteno en Colombia',
      serviceType: 'Evaluación y compra de tungsteno industrial',
      description:
        'Servicio orientado a Colombia para la evaluación técnica y compra de tungsteno industrial y materiales de alto desgaste.',
      path: '/tungsteno',
    }),
    createFaqSchema(
      tungstenoFaq.map(item => ({
        pregunta: item.question,
        respuesta: item.answer,
      }))
    )
  )

  return (
    <>
      <JsonLd data={seoGraph} />
      <TopicLanding
        eyebrow='Tungsteno en Colombia'
        title='Compra de tungsteno industrial en Colombia'
        description='Evaluamos tungsteno industrial para reciclaje especializado y compra directa en Colombia. Si tienes insertos, puntas, varillas o piezas de desgaste con tungsteno, te ayudamos a identificar el material y a cotizarlo con rapidez.'
        image='/img/materiales/tungsteno/puntas1.webp'
        imageAlt='Tungsteno industrial en piezas metálicas para evaluación en Colombia'
        primaryHref='/contactanos'
        primaryLabel='Solicitar cotización'
        secondaryHref='/materiales'
        secondaryLabel='Ver materiales'
        sections={[
          {
            title: 'Qué tipo de tungsteno evaluamos',
            list: [
              'Varillas y puntas industriales con tungsteno',
              'Insertos, herramientas y residuos de desgaste',
              'Piezas de mecanizado y remanentes productivos',
              'Material industrial con alta dureza y valor metalúrgico',
            ],
          },
          {
            title: 'Cómo fortalecemos la compra técnica',
            text: 'Revisamos fotos, forma física, limpieza, mezcla con otros materiales y contexto industrial para orientar mejor la valoración del tungsteno en Colombia.',
          },
          {
            title: 'Qué enviar para una mejor cotización',
            list: [
              'Fotos cercanas y generales del material',
              'Peso o volumen aproximado',
              'Descripción breve del proceso de origen',
              'Ciudad en Colombia y datos de contacto',
            ],
          },
          {
            title: 'Por qué esta página importa',
            text: 'Esta página está enfocada específicamente en la intención de búsqueda tungsteno en Colombia, con contenido alineado al material, la industria y el proceso de compra.',
          },
        ]}
        internalLinks={[
          { href: '/carburo-de-tungsteno', label: 'Carburo de tungsteno en Colombia' },
          { href: '/materiales', label: 'Materiales industriales que compramos' },
        ]}
        faqs={tungstenoFaq}
      />
    </>
  )
}
