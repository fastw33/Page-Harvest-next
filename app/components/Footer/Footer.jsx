'use client'

import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <>
      {/* Footer de escritorio */}
      <div className={styles.footerDesktop}>
        <footer
          className={`${styles.footer} text-white`}
          aria-label='Pie de página'
        >
          <div className='container py-5'>
            <div className='row gy-4'>
              {/* Columna 1 */}
              <div className='col-md-3'>
                <h5 className='mb-3'>♻️ Metal Harvest</h5>
                <p>
                  Transformamos tus metales industriales en valor. Recibe tu
                  oferta en menos de 24 horas.
                </p>
              </div>

              {/* Columna 2 */}
              <div className='col-md-2'>
                <h6 className='fw-bold mb-3'>Navegación</h6>
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

              {/* Columna 3 */}
              <div className='col-md-3'>
                <h6 className='fw-bold mb-3'>¿Tienes dudas?</h6>
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

              {/* Columna 4 */}
              <div className='col-md-4'>
                <h6 className='fw-bold mb-3'>Últimas noticias</h6>
                <div className={styles.blogPost}></div>
              </div>
            </div>
          </div>

          <div className={`text-center py-3 border-top ${styles.bottomBar}`}>
            <div className='container d-flex flex-column flex-md-row justify-content-between align-items-center'>
              <div className={styles.legalLinks}>
                <span>Diseñado por: ED Soft</span>
                <span>Propiedad de Metal Harvest</span>
              </div>
              <span>&copy; {new Date().getFullYear()} Metal Harvest</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}
