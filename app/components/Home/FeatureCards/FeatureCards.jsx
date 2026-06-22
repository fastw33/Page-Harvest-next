// FeatureCards.jsx
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './FeatureCards.module.css'

const features = [
  {
    titulo: 'Metales Ferrosos',
    descripcion:
      'Hierro y acero utilizados en estructuras metálicas, maquinaria pesada, motores, ejes y herramientas industriales. Común en chatarra de construcción, talleres y procesos mecánicos.',
    icono: '/img/1.webp',
  },
  {
    titulo: 'Metales No Ferrosos',
    descripcion:
      'Metales como aluminio, bronce y zinc. Se encuentran en radiadores, perfiles, tuberías, griferías, piezas automotrices, componentes industriales y domésticos sin contenido de hierro.',
    icono: '/img/2.webp',
  },
  {
    titulo: 'Cobre',
    descripcion:
      'Material valioso presente en cables eléctricos pelados, tuberías, conectores, bobinas, motores y transformadores. Muy común en obras eléctricas y sistemas de energía.',
    icono: '/img/3.webp',
  },
  {
    titulo: 'Tungsteno y Aleaciones Duras',
    descripcion:
      'Materiales de alta dureza como tungsteno y carburo de tungsteno usados en brocas, insertos, punteros de corte, herramientas de minería y maquinaria de desgaste industrial.',
    icono: '/img/4.webp',
  },
]

// Variantes para el contenedor (staggerChildren para aparición secuencial)
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

// Variantes para cada tarjeta
const cardVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

const FeatureCards = () => {
  return (
    <motion.div
      className={styles.grid}
      variants={containerVariants}
      initial='hidden'
      whileInView='show' // <- Se anima cuando entra al viewport
      viewport={{ once: true }} // <- La animación solo ocurre una vez
    >
      {features.map((item, index) => (
        <motion.div
          className={styles.card}
          key={index}
          variants={cardVariants} // Aplica la animación a cada tarjeta
        >
          <div className={styles.inner}>
            <div className={styles.front}>
              <Image
                src={item.icono}
                alt={item.titulo}
                width={260}
                height={140}
                sizes='(max-width: 768px) 100vw, 260px'
              />
              <h3>{item.titulo}</h3>
            </div>
            <div className={styles.back}>
              <p>{item.descripcion}</p>
            </div>
          </div>
        </motion.div>
      ))}
    </motion.div>
  )
}

export default FeatureCards
