'use client'

import React, { useEffect, useState } from 'react'
import styles from './Carousel.module.css'

// En Next.js necesitamos importar las imágenes explícitamente
const carouselImages = [
  '/assets/carrusel/1.webp',
  '/assets/carrusel/2.webp',
  '/assets/carrusel/3.webp',
  '/assets/carrusel/4.webp',
]

export default function Carousel() {
  const images = carouselImages
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (!images.length) return

    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % images.length)
    }, 3000)

    return () => clearInterval(id)
  }, [images.length])

  if (!images.length) {
    return (
      <div className={styles.fallback}>
        No se cargaron imágenes. Revisa que existan en:{' '}
        <b>public/assets/carrusel</b>
      </div>
    )
  }

  return (
    <div className={styles.carousel}>
      {images.map((img, i) => (
        <div
          key={img}
          className={`${styles.slide} ${i === index ? styles.active : ''}`}
          style={{
            backgroundImage: `url("${img}")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden={i !== index}
        />
      ))}

      {/* puntitos de navegación */}
      <div className={styles.dots}>
        {images.map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === index ? styles.dotActive : ''}`}
            onClick={() => setIndex(i)}
            aria-label={`Ir a slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
