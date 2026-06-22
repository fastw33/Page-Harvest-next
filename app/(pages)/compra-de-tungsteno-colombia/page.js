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
      'Sí. Metal Harvest compra tungsteno industrial en Colombia en formatos como varillas, insertos, puntas, residuos de mecanizado y componentes de desgaste.',
  },
  {
    question: '¿Qué industrias suelen vender tungsteno?',
    answer:
      'Trabajamos con talleres, mecanizado, minería, manufactura, mantenimiento industrial y operaciones con herramientas de alta dureza o piezas de desgaste.',
  },
  {
    question: '¿Cómo agilizar una cotización de tungsteno?',
    answer:
      'Enviar fotos, peso aproximado, estado del material y la ciudad en Colombia ayuda a identificar mejor el tungsteno y a responder más rápido.',
  },
]

export const metadata = buildPageMetadata({
  title: 'Compra de tungsteno en Colombia',
  description:
    'Compra de tungsteno en Colombia para industria y reciclaje especializado. Evaluamos puntas, varillas, insertos y residuos industriales con tungsteno.',
  path: '/compra-de-tungsteno-colombia',
  image: '/img/seo/tungsteno-industrial-colombia.webp',
  keywords: [
    'compra de tungsteno colombia',
    'tungsteno colombia',
    'tungsteno industrial colombia',
    'venta de tungsteno colombia',
    'reciclaje de tungsteno colombia',
  ],
})

export default function CompraDeTungstenoColombiaPage() {
  const seoGraph = buildJsonLdGraph(
    createBreadcrumbSchema([
      { name: 'Inicio', path: '/' },
      {
        name: 'Compra de tungsteno en Colombia',
        path: '/compra-de-tungsteno-colombia',
      },
    ]),
    createCollectionPageSchema({
      name: 'Compra de tungsteno en Colombia',
      description:
        'Página dedicada a la compra de tungsteno en Colombia con foco en evaluación técnica, residuos industriales y piezas de desgaste.',
      path: '/compra-de-tungsteno-colombia',
      image: '/img/seo/tungsteno-industrial-colombia.webp',
      about: [
        'Tungsteno',
        'Tungsteno industrial',
        'Compra de tungsteno en Colombia',
        'Reciclaje de tungsteno',
      ],
    }),
    createServiceSchema({
      name: 'Compra de tungsteno en Colombia',
      serviceType: 'Evaluación y compra de tungsteno industrial',
      description:
        'Servicio enfocado en Colombia para compra de tungsteno industrial, puntas, insertos, varillas y piezas de desgaste.',
      path: '/compra-de-tungsteno-colombia',
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
        description='Evaluamos tungsteno industrial para reciclaje especializado y compra directa en Colombia. Si tienes puntas, insertos, varillas o piezas de desgaste con tungsteno, te ayudamos a identificar el material y a cotizarlo con rapidez.'
        image='/img/seo/tungsteno-industrial-colombia.webp'
        imageAlt='Tungsteno industrial en piezas metálicas para compra en Colombia'
        primaryHref='#contacto'
        primaryLabel='Enviar material para revisión'
        secondaryHref='/materiales'
        secondaryLabel='Ver materiales'
        highlights={[
          'Cobertura en toda Colombia',
          'Evaluación por fotos y descripción',
          'Orientación comercial ágil',
        ]}
        metrics={[
          { value: '24h', label: 'respuesta inicial estimada' },
          { value: 'CO', label: 'cobertura nacional para la solicitud' },
          { value: '4+', label: 'formatos comunes de tungsteno que evaluamos' },
        ]}
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
            title: 'Cobertura nacional',
            text: 'El enfoque es Colombia completa. La intención de esta página es resolver búsquedas nacionales relacionadas con compra de tungsteno, no una sola ciudad.',
          },
        ]}
        ctaTitle='¿Tienes tungsteno y quieres saber si aplica?'
        ctaText='Si nos compartes fotos claras, cantidad aproximada y tu ciudad en Colombia, la revisión inicial es mucho más rápida y la orientación comercial sale mejor enfocada.'
        internalLinks={[
          {
            href: '/compra-de-carburo-de-tungsteno-colombia',
            label: 'Compra de carburo de tungsteno en Colombia',
          },
          {
            href: '/brocas-de-carburo-de-tungsteno',
            label: 'Brocas de carburo de tungsteno',
          },
          { href: '/materiales', label: 'Materiales industriales que compramos' },
        ]}
        faqs={tungstenoFaq}
      />
    </>
  )
}
