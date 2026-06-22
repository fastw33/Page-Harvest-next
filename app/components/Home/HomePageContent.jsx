'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Carousel from './Carrusel/Carousel'
import HeroCarrusel from './HeroCarrusel/HeroCarrusel'
import Funcionamiento from './Funcionamiento/Funcionamiento'
import FeatureCards from './FeatureCards/FeatureCards'
import Linea from './Linea/Linea'
import SobreMetal from './SobreMetal/SobreMetal'
import IndustrialScope from './IndustrialScope/IndustrialScope'
import Contacto from '@/app/components/Contacto/Contacto'
import styles from '@/app/components/Home/Home.module.css'

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
}

export default function HomePageContent() {
  return (
    <>
      <section className={styles.heroOverlay}>
        <div className={styles.heroInner}>
          <Carousel />
          <HeroCarrusel />
        </div>
      </section>

      <div className={styles.container}>
        <motion.section
          className={styles.howItWorksSection}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.howItWorksTitle}>
            ¿Cómo funciona Metal Harvest?
          </h2>
          <Funcionamiento />
        </motion.section>

        <motion.section
          className={styles.materialsSection}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>
            Tungsteno, carburo de tungsteno y materiales que compramos
          </h2>
          <p className={styles.sectionDescription}>
            En Metal Harvest nos especializamos en la recolección, análisis y
            compra de materiales metálicos industriales. Recibimos tungsteno,
            carburo de tungsteno, brocas, insertos, puntas y otras aleaciones
            especiales para garantizar un proceso de reciclaje eficiente,
            seguro y sostenible.
          </p>
          <p className={styles.sectionDescription}>
            Explora nuestras páginas dedicadas de{' '}
            <Link href='/compra-de-tungsteno-colombia'>
              compra de tungsteno en Colombia
            </Link>{' '}
            y{' '}
            <Link href='/compra-de-carburo-de-tungsteno-colombia'>
              carburo de tungsteno en Colombia
            </Link>{' '}
            para ver formatos, criterios de evaluación y opciones de
            cotización. También puedes revisar la{' '}
            <Link href='/guia-tungsteno-carburo-de-tungsteno-colombia'>
              guía de tungsteno y carburo de tungsteno en Colombia
            </Link>{' '}
            para entender diferencias, piezas comunes y cómo preparar mejor tu
            solicitud.
          </p>
          <p className={styles.sectionDescription}>
            Si tu búsqueda es más específica, también puedes ir directo a{' '}
            <Link href='/brocas-de-carburo-de-tungsteno'>
              brocas de carburo de tungsteno
            </Link>{' '}
            o{' '}
            <Link href='/insertos-de-carburo-de-tungsteno'>
              insertos de carburo de tungsteno
            </Link>
            , dos URLs que refuerzan el clúster principal y ayudan a resolver
            mejor la intención de compra por tipo de pieza.
          </p>
          <FeatureCards />
        </motion.section>

        <motion.section
          className={styles.scopeSection}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <IndustrialScope />
        </motion.section>

        <motion.section
          className={styles.seccion}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className={styles.sectionTitle}>¿Cómo trabajamos?</h2>
          <Linea />
        </motion.section>

        <motion.section
          className={styles.sectionTitle}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Sobre Metal Harvest</h2>
          <br />
          <SobreMetal />
        </motion.section>

        <motion.section
          className={styles.sectionTitle}
          variants={fadeUp}
          initial='hidden'
          whileInView='visible'
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Contáctanos</h2>
          <Contacto />
        </motion.section>
      </div>

      <motion.div style={{ display: 'none' }} />
    </>
  )
}
