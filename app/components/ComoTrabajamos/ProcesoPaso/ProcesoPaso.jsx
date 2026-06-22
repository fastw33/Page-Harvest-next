import React from 'react'
import styles from './ProcesoPaso.module.css'
import { motion } from 'framer-motion'
import {
  FaClipboardList,
  FaSearch,
  FaWeight,
  FaMoneyCheckAlt,
  FaTruckLoading,
} from 'react-icons/fa'

const pasos = [
  {
    icon: <FaTruckLoading />,
    titulo: 'Recogida por transportador',
    descripcion:
      'Recogemos equipos y maquinarias con el transportador asignado.',
  },
  {
    icon: <FaClipboardList />,
    titulo: 'Registro de insumos',
    descripcion:
      'Se registra vendedor, fecha de recepción, artículos recibidos y peso total.',
  },
  {
    icon: <FaSearch />,
    titulo: 'Clasificación en bodega',
    descripcion: 'Separación por tipo y verificación de aleaciones.',
  },
  {
    icon: <FaWeight />,
    titulo: 'Pesaje e inventario',
    descripcion: 'Pesaje y control en inventario para trazabilidad.',
  },
  {
    icon: <FaMoneyCheckAlt />,
    titulo: 'Liquidación y pago',
    descripcion: 'Liquidación final y pago una vez aceptada.',
  },
]

const ProcesoPaso = () => {
  return (
    <section className={styles.procesoSection}>
      <div className={styles.flujoContainer}>
        {pasos.map((paso, index) => (
          <div className={styles.flujoItem} key={index}>
            <motion.div
              className={styles.pasoCard}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <div className={styles.icon}>{paso.icon}</div>
              <h3>{paso.titulo}</h3>
              <p>{paso.descripcion}</p>
            </motion.div>
            {index !== pasos.length - 1 && (
              <div className={styles.flecha}>&rarr;</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProcesoPaso
