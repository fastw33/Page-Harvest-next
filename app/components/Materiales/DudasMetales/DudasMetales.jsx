'use client'

import React from 'react'
import Link from 'next/link'
import styles from './DudasMetales.module.css'

const DudasMetales = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>¿No sabes qué metal tienes?</h2>
      <p className={styles.description}>
        No te preocupes, nuestro equipo de expertos puede ayudarte a
        identificarlo. Envíanos una foto o una descripción y te orientaremos
        para darte la mejor cotización.
      </p>
      <div className={styles.actions}>
        <Link href='/contactanos' className={styles.button}>
          Consulta rápida
        </Link>
        <Link href='/compra-de-metales-industriales-colombia' className={styles.secondaryButton}>
          Subir fotos del material
        </Link>
      </div>
    </section>
  )
}

export default DudasMetales
