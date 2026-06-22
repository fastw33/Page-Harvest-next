import React from 'react'
import styles from './MaterialesAceptados.module.css'
import { motion } from 'framer-motion'

const MaterialesAceptados = () => {
  const aceptados = [
    'Metales industriales limpios',
    'Cobre en láminas o cables',
    'Varillas de tungsteno o niquel',
    'Piezas enteras no contaminadas',
  ]

  const rechazados = [
    'Residuos electrónicos',
    'Materiales con químicos o aceites',
    'Plásticos, madera u orgánicos mezclados',
    'Metales quemados o contaminados',
  ]

  const containerVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: i => ({
      opacity: 1,
      x: 0,
      transition: { delay: i * 0.1 },
    }),
  }

  return (
    <motion.section
      className={styles.container}
      initial='hidden'
      whileInView='visible'
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <h2 className={styles.titulo}>¿Qué materiales aceptamos?</h2>
      <div className={styles.listas}>
        <motion.div className={styles.columna} whileHover={{ scale: 1.03 }}>
          <h3 className={styles.si}>✅ Aceptamos</h3>
          <ul>
            {aceptados.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                initial='hidden'
                animate='visible'
                variants={itemVariants}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>

        <motion.div className={styles.columna} whileHover={{ scale: 1.03 }}>
          <h3 className={styles.no}>❌ No aceptamos</h3>
          <ul>
            {rechazados.map((item, i) => (
              <motion.li
                key={i}
                custom={i}
                initial='hidden'
                animate='visible'
                variants={itemVariants}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </div>
    </motion.section>
  )
}

export default MaterialesAceptados
