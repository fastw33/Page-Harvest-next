import React from 'react'
import styles from './Linea.module.css'
import {
  FaFileInvoiceDollar,
  FaTruckMoving,
  FaMoneyBillWave,
} from 'react-icons/fa'

const pasos = [
  {
    icon: <FaFileInvoiceDollar />,
    titulo: 'Cotización en 24h',
    descripcion: 'Recibe una oferta rápida.',
  },
  {
    icon: <FaTruckMoving />,
    titulo: 'Coordinamos logística',
    descripcion: 'Recolección eficiente.',
  },
  {
    icon: <FaMoneyBillWave />,
    titulo: 'Pago',
    descripcion: 'Tras la recolección.',
  },
]

const Linea = () => {
  return (
    <div className={styles.lineaContainer}>
      <div className={styles.timeline}>
        {pasos.map((paso, index) => (
          <div key={index} className={styles.timelineItem}>
            <div className={styles.icon}>{paso.icon}</div>
            <h3>{paso.titulo}</h3>
            <p>{paso.descripcion}</p>
            {index < pasos.length - 1 && <div className={styles.line} />}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Linea
