import React from 'react'
import Link from 'next/link'
import styles from './ConfianzaMensaje.module.css'

const ConfianzaMensaje = () => {
  return (
    <section className={styles.confianzaSection}>
      <div className={styles.contenido}>
        <h2 className={styles.titulo}>Confianza que genera resultados</h2>
        <p className={styles.subtitulo}>
          Más de 10 años de experiencia transformando metales en valor para
          nuestros clientes.
        </p>
        <p className={styles.descripcion}>
          Nos enfocamos en ofrecerte procesos claros y seguros, con
          transparencia en cada operación. Nuestro compromiso es garantizar una
          experiencia eficiente y profesional, desde la recogida de tus
          materiales hasta la liquidación final. Si quieres ver formatos
          frecuentes, puedes revisar{' '}
          <Link href='/materiales'>los materiales que compramos</Link>, la{' '}
          <Link href='/guia-tungsteno-carburo-de-tungsteno-colombia'>
            guía de tungsteno y carburo de tungsteno
          </Link>{' '}
          o la página de{' '}
          <Link href='/compra-de-metales-industriales-colombia'>
            metales industriales en Colombia
          </Link>
          .
        </p>
        <div className={styles.badges}>
          <span className={styles.badge}>✔️ Transparencia garantizada</span>
          <span className={styles.badge}>🚚 Logística eficiente</span>
          <span className={styles.badge}>💰 Pago seguro y rápido</span>
        </div>
      </div>
    </section>
  )
}

export default ConfianzaMensaje
