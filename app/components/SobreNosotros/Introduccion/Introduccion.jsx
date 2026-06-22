import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Introduccion.module.css'

const Introduccion = () => {
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
        <h1 className={styles.title}>¿Quiénes somos?</h1>
        <p className={styles.text}>
          En METAL HARVEST, nos especializamos en optimizar la gestión de
          residuos industriales y la logística internacional para nuestros
          aliados. Aseguramos prácticas ambientales, laborales y sociales
          responsables, transformando la logística y el comercio exterior en un
          motor de desarrollo sostenible.
        </p>
        <p className={styles.text}>
          Ofrecemos soluciones integrales que potencian el reciclaje de metales,
          reducen costos y optimizan sus importaciones, alineados con una visión
          comprometida con la sostenibilidad y el progreso.
        </p>
      </motion.div>

      {/* Imagen */}
      <motion.div
        className={styles.imageContainer}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <Image
          src='/img/SobreNosotros/Harvest.webp'
          alt='Equipo y operación de Metal Harvest'
          className={styles.image}
          width={500}
          height={500}
          sizes='(max-width: 768px) 100vw, 500px'
          loading='lazy'
        />
      </motion.div>
    </div>
  )
}

export default Introduccion
