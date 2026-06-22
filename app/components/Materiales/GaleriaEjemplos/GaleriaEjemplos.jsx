'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './GaleriaEjemplos.module.css'
import { motion, AnimatePresence } from 'framer-motion'
import { galeriaItems } from '../data/galeriaData'

// Posiciones fijas (mantienen orden y tamaño)
const posiciones = ['grande', 'cuadro', 'media', 'cuadro', 'cuadro', 'cuadro']

const GaleriaEjemplos = () => {
  const [imagenes, setImagenes] = useState(galeriaItems)
  const [zoomImg, setZoomImg] = useState(null)

  // Cada 5 segundos rota el contenido visual
  useEffect(() => {
    const interval = setInterval(() => {
      setImagenes(prev => {
        const siguiente = [...prev]
        const primero = siguiente.shift()
        siguiente.push(primero)
        return siguiente
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className={styles.container}>
      <h2 className={styles.titulo}>Ejemplos de Materiales</h2>
      <br />
      <motion.div layout className={styles.grid}>
        {imagenes.map((img, i) => (
          <motion.div
            key={img.src}
            layout
            className={`${styles.card} ${styles[posiciones[i]]}`}
            whileHover={{ scale: 1.03 }}
            onClick={() => setZoomImg(img)}
          >
            <Image
              src={img.src}
              alt={img.alt}
              width={900}
              height={900}
              sizes='(max-width: 768px) 100vw, 33vw'
            />
            <span className={styles.texto}>{img.alt}</span>
          </motion.div>
        ))}
      </motion.div>

      <AnimatePresence>
        {zoomImg && (
          <motion.div
            className={styles.overlay}
            onClick={() => setZoomImg(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.img
              src={zoomImg.src}
              alt={zoomImg.alt}
              initial={{ scale: 0.7 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.7 }}
              className={styles.zoomedImg}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default GaleriaEjemplos
