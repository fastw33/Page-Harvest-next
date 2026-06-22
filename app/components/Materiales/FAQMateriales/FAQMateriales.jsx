'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import styles from './FAQMateriales.module.css'
import { preguntasFrecuentes } from '../data/faqData' // Importamos nuestro archivo de data

const FAQMateriales = () => {
  const [activo, setActivo] = useState(null)

  const toggle = index => {
    setActivo(activo === index ? null : index)
  }

  return (
    <motion.section
      className={styles.container}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className={styles.title}>
        Preguntas frecuentes sobre nuestros materiales
      </h2>
      <div className={styles.accordion}>
        {preguntasFrecuentes.map((item, index) => (
          <div
            key={index}
            className={`${styles.item} ${
              activo === index ? styles.active : ''
            }`}
            onClick={() => toggle(index)}
          >
            <div className={styles.pregunta}>
              <span>{item.pregunta}</span>
              <span>{activo === index ? '⯆' : '⯈'}</span>
            </div>
            {activo === index && (
              <motion.div
                className={styles.respuesta}
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.4 }}
              >
                {item.respuesta}
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </motion.section>
  )
}

export default FAQMateriales
