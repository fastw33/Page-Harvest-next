import React from 'react'
import Link from 'next/link'
import styles from './IntroMateriales.module.css'

const IntroMateriales = () => {
  return (
    <section className={styles.introContainer}>
      <h1 className={styles.title}>
        Tungsteno, carburo de tungsteno y materiales que compramos
      </h1>
      <h2 className={styles.subtitle}>
        Transformamos tus metales industriales en valor
      </h2>
      <p className={styles.description}>
        Somos especialistas en metales industriales y aleaciones de alta
        resistencia. Compramos tungsteno, carburo de tungsteno y otros
        materiales presentes en brocas, insertos, puntas, varillas y residuos
        industriales valorizables. Si tienes dudas sobre tu metal, aquí te
        guiamos.
      </p>
      <p className={styles.description}>
        Si buscas información puntual, revisa nuestra{' '}
        <Link href='/compra-de-tungsteno-colombia'>compra de tungsteno en Colombia</Link>,{' '}
        <Link href='/compra-de-carburo-de-tungsteno-colombia'>
          compra de carburo de tungsteno en Colombia
        </Link>{' '}
        , la{' '}
        <Link href='/compra-de-metales-industriales-colombia'>
          compra de metales industriales en Colombia
        </Link>{' '}
        y la{' '}
        <Link href='/guia-tungsteno-carburo-de-tungsteno-colombia'>
          guía de tungsteno y carburo de tungsteno en Colombia
        </Link>
        .
      </p>
    </section>
  )
}

export default IntroMateriales
