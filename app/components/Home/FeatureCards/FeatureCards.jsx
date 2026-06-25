import React from 'react'
import Image from 'next/image'
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

const FeatureCards = () => {
  return (
    <div className={styles.grid}>
      {features.map((item, index) => (
        <div className={styles.card} key={index}>
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
        </div>
      ))}
    </div>
  )
}

export default FeatureCards
