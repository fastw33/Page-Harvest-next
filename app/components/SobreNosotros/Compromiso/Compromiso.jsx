import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Compromiso.module.css'

const Compromiso = () => {
  return (
    <div className={styles.container}>
      {/* Sección de texto */}
      <motion.div
        className={styles.textContent}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className={styles.title}>Compromiso con la Sostenibilidad</h2>
        <p className={styles.text}>
          En METAL HARVEST, somos una empresa comprometida con la triple
          rentabilidad: económica, social y ambiental. Nuestra certificación nos
          exige cumplir con los más altos estándares de sostenibilidad,
          respaldados por auditorías y regulados por la Superintendencia de
          Sociedades.
        </p>
        <p className={styles.text}>
          Nuestro enfoque está alineado con prácticas responsables que
          garantizan la trazabilidad, el respeto por el medio ambiente y la
          contribución activa a la economía circular.
        </p>
        <p className={styles.text}>
          Cada acción que emprendemos busca generar valor para nuestros aliados
          y el entorno, consolidando un camino hacia un futuro más verde y
          eficiente.
        </p>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src='/img/SobreNosotros/sinfondocadena.webp'
          alt='Cadena de valor sostenible en Metal Harvest'
          className={styles.image}
          width={500}
          height={500}
          sizes='(max-width: 768px) 100vw, 40vw'
          loading='lazy'
        />
      </motion.div>
    </div>
  )
}

export default Compromiso
