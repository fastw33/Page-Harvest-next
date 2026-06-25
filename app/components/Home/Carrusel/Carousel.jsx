'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import styles from './Carousel.module.css'

const carouselImages = [
  {
    src: '/assets/carrusel/1.webp',
    alt: 'Piezas industriales de tungsteno y carburo de tungsteno para evaluación',
  },
  {
    src: '/assets/carrusel/2.webp',
    alt: 'Material industrial listo para proceso de compra y valorización',
  },
  {
    src: '/assets/carrusel/3.webp',
    alt: 'Componentes metálicos especiales recuperados para reciclaje industrial',
  },
  {
    src: '/assets/carrusel/4.webp',
    alt: 'Lote de piezas de desgaste industrial para evaluación técnica',
  },
]

export default function Carousel() {
  const [index, setIndex] = useState(0)
  const currentImage = carouselImages[index]

  useEffect(() => {
    if (!carouselImages.length) return

    const id = setInterval(() => {
      setIndex(prev => (prev + 1) % carouselImages.length)
    }, 3000)

    return () => clearInterval(id)
  }, [])

  if (!carouselImages.length) {
    return (
      <div className={styles.fallback}>
        No se cargaron imágenes. Revisa que existan en:{' '}
        <b>public/assets/carrusel</b>
      </div>
    )
  }

  return (
    <div className={styles.carousel}>
      <Image
        key={currentImage.src}
        src={currentImage.src}
        alt={currentImage.alt}
        fill
        priority={index === 0}
        fetchPriority={index === 0 ? 'high' : 'auto'}
        sizes='100vw'
        className={styles.slideImage}
      />

      {/* puntitos de navegación */}
      <div className={styles.dots}>
        {carouselImages.map((_, i) => (
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
