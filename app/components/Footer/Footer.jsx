'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <div className={styles.footerDesktop}>
      <footer className={styles.footer} aria-label='Pie de página'>
        <div className={styles.container}>
          <div className={styles.grid}>
            <div>
              <h5 className={styles.brandTitle}>♻️ Metal Harvest</h5>
              <p>
                Transformamos tus metales industriales en valor. Recibe tu
                oferta en menos de 24 horas.
              </p>
            </div>

            <div>
              <h6 className={styles.sectionTitle}>Navegación</h6>
              <ul className={styles.linkList}>
                <li>
                  <Link href='/'>Inicio</Link>
                </li>
                <li>
                  <Link href='/materiales'>Materiales</Link>
                </li>
                <li>
                  <Link href='/contactanos'>Contacto</Link>
                </li>
                <li>
                  <Link href='/comotrabajamos'>¿Cómo trabajamos?</Link>
                </li>
                <li>
                  <Link href='/sobrenosotros'>Sobre nosotros</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className={styles.sectionTitle}>¿Tienes dudas?</h6>
              <ul className={styles.linkList}>
                <li>
                  <Link href='/materiales'>Preguntas frecuentes</Link>
                </li>
                <li>
                  <Link href='/compra-de-tungsteno-colombia'>
                    Guía de evaluación de tungsteno
                  </Link>
                </li>
                <li>
                  <Link href='/compra-de-carburo-de-tungsteno-colombia'>
                    Carburo de tungsteno en Colombia
                  </Link>
                </li>
                <li>
                  <Link href='/compra-de-metales-industriales-colombia'>
                    Metales industriales en Colombia
                  </Link>
                </li>
                <li>
                  <Link href='/guia-tungsteno-carburo-de-tungsteno-colombia'>
                    Guía de tungsteno en Colombia
                  </Link>
                </li>
                <li>
                  <Link href='/materiales'>Soporte</Link>
                </li>
              </ul>
            </div>

            <div>
              <h6 className={styles.sectionTitle}>Últimas noticias</h6>
              <div className={styles.blogPost}></div>
            </div>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <div className={styles.bottomContainer}>
            <div className={styles.legalLinks}>
              <span>Diseñado por: ED Soft</span>
              <span>Propiedad de Metal Harvest</span>
            </div>
            <span>&copy; {new Date().getFullYear()} Metal Harvest</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
