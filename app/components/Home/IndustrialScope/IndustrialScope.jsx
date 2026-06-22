import Link from 'next/link'
import styles from './IndustrialScope.module.css'

const scopeItems = [
  {
    title: 'Mecanizado y corte',
    text: 'Material proveniente de brocas, insertos, puntas, desgaste de herramienta y remanentes de producción.',
  },
  {
    title: 'Minería e industria pesada',
    text: 'Piezas de alto desgaste, componentes técnicos y lotes industriales que requieren evaluación ágil.',
  },
  {
    title: 'Aceros y aleaciones especiales',
    text: 'También trabajamos con aceros inoxidables, aceros especiales, níquel, cobalto y otros materiales valorizables.',
  },
  {
    title: 'Recuperación y logística',
    text: 'Acompañamos procesos de identificación, clasificación inicial y contacto comercial para Colombia.',
  },
]

export default function IndustrialScope() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.header}>
        <p className={styles.eyebrow}>Cobertura de negocio</p>
        <h2 className={styles.title}>Sectores y materiales que atendemos</h2>
        <p className={styles.description}>
          Metal Harvest no trabaja solo una línea. La operación está orientada a
          materiales industriales con valor técnico y comercial, desde tungsteno
          y carburo de tungsteno hasta aleaciones especiales y residuos
          metálicos de proceso.
        </p>
      </div>

      <div className={styles.grid}>
        {scopeItems.map(item => (
          <article key={item.title} className={styles.card}>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        ))}
      </div>

      <div className={styles.actions}>
        <Link href='/compra-de-metales-industriales-colombia' className={styles.primaryLink}>
          Ver metales industriales en Colombia
        </Link>
        <Link href='/materiales' className={styles.secondaryLink}>
          Explorar materiales
        </Link>
      </div>
    </section>
  )
}
