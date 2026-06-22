import React from 'react'
import Link from 'next/link'
import styles from './HeroComoTrabajamos.module.css'
import { motion } from 'framer-motion'

const HeroComoTrabajamos = () => {
  return (
    <motion.section
      className={styles.heroSection}
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>¿Cómo trabajamos?</h1>
      <p>Transformamos tus residuos industriales en oportunidades reales.</p>
      <p>
        Evaluamos{' '}
        <Link href='/compra-de-tungsteno-colombia'>tungsteno en Colombia</Link>,{' '}
        <Link href='/compra-de-carburo-de-tungsteno-colombia'>
          carburo de tungsteno
        </Link>{' '}
        y otros{' '}
        <Link href='/compra-de-metales-industriales-colombia'>
          metales industriales
        </Link>{' '}
        con una revisión comercial rápida y cobertura nacional.
      </p>
    </motion.section>
  )
}

export default HeroComoTrabajamos
