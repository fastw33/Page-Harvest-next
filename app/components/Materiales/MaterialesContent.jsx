'use client'

import { motion } from 'framer-motion'
import styles from '@/app/components/Materiales/Materiales.module.css'
import ListadoMateriales from '@/app/components/Materiales/ListadoMateriales/ListadoMateriales'
import GaleriaEjemplos from '@/app/components/Materiales/GaleriaEjemplos/GaleriaEjemplos'
import Contacto from '@/app/components/Contacto/Contacto'
import IntroMateriales from '@/app/components/Materiales/IntroMateriales/IntroMateriales'
import DudasMetales from '@/app/components/Materiales/DudasMetales/DudasMetales'
import FAQMateriales from '@/app/components/Materiales/FAQMateriales/FAQMateriales'

export default function MaterialesContent() {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  }

  const sections = [
    { Component: IntroMateriales, key: 'intro' },
    { Component: ListadoMateriales, key: 'listado' },
    { Component: DudasMetales, key: 'dudas' },
    { Component: GaleriaEjemplos, key: 'galeria' },
    { Component: FAQMateriales, key: 'faq' },
    { Component: Contacto, key: 'contacto' },
  ]

  return (
    <>
      <main className={styles.container}>
        {sections.map(({ Component, key }) => (
          <motion.section
            key={key}
            className={styles.seccion}
            initial='hidden'
            whileInView='visible'
            viewport={{ once: true }}
            variants={sectionAnimation}
          >
            <Component />
          </motion.section>
        ))}
      </main>
    </>
  )
}
