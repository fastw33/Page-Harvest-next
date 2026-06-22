// src/components/SobreMetal.jsx
import React from 'react'
import Link from 'next/link'
import styles from './SobreMetal.module.css'

const SobreMetal = () => {
  return (
    <section className={styles.wrapper}>
      <div className={styles.overlay}>
        <h2 className={styles.titulo}> Compramos.</h2>
        <p className={styles.texto}>
          En Metal Harvest no te pedimos que confíes,{' '}
          <span className={styles.destacado}>
            te demostramos por qué puedes hacerlo
          </span>
          . Nos dedicamos exclusivamente a{' '}
          <strong>comprar materiales industriales</strong>, con procesos
          rápidos, trato directo y
          <span className={styles.textoClaro}> pagos inmediatos.</span>{' '}
          También trabajamos con{' '}
          <Link href='/compra-de-tungsteno-colombia'>
            tungsteno en Colombia
          </Link>{' '}
          y{' '}
          <Link href='/compra-de-carburo-de-tungsteno-colombia'>
            carburo de tungsteno
          </Link>{' '}
          para aplicaciones industriales.
        </p>
        <Link href='/contactanos' className={styles.badge}>
          Especialistas en compra directa
        </Link>
      </div>
    </section>
  )
}

export default SobreMetal
