// src/components/Funcionamiento.jsx
import React from 'react'
import styles from './Funcionamiento.module.css'

const pasos = [
  {
    icon: '📤',
    title: '1. Envíanos tu material',
    description: 'Comparte los detalles básicos: tipo, fotos y cantidad.',
  },
  {
    icon: '📩💰',
    title: '2. Recibe tu cotización',
    description: 'Te damos una oferta en menos de 24 horas.',
  },
  {
    icon: '🚛💳✅',
    title: '3. Coordinamos y pagamos',
    description: 'Recolectamos y te pagamos al instante.',
  },
]

const Funcionamiento = () => {
  return (
    <div className={styles.stepsContainer}>
      {pasos.map((paso, index) => (
        <div key={index} className={styles.stepCard}>
          <span className={styles.stepIcon}>{paso.icon}</span>
          <h3>{paso.title}</h3>
          <p>{paso.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Funcionamiento
