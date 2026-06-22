import React from 'react'
import { motion } from 'framer-motion'
import styles from './Objetivos.module.css'

const Objetivos = () => {
  return (
    <div className={styles.container}>
      {/* Título */}
      <motion.h2
        className={styles.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        Nuestros Objetivos de Sostenibilidad
      </motion.h2>

      {/* Subtítulo */}
      <motion.p
        className={styles.subtitle}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        En METAL HARVEST, trabajamos alineados con los Objetivos de Desarrollo
        Sostenible (ODS) para impactar positivamente en cada eslabón de la
        cadena.
      </motion.p>

      {/* Contenedor de objetivos */}
      <div className={styles.goals}>
        {/* Objetivo 1 */}
        <motion.div
          className={styles.goal}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.goalTitle}>
            Reducción de la Huella de Carbono
          </h3>
          <p className={styles.goalText}>
            Medimos y optimizamos las emisiones de CO₂ en cada proceso logístico
            que ejecutamos.
          </p>
        </motion.div>

        {/* Objetivo 2 */}
        <motion.div
          className={styles.goal}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.goalTitle}>Inclusión Social</h3>
          <p className={styles.goalText}>
            Integramos comunidades y formamos talento humano en torno a la
            economía circular.
          </p>
        </motion.div>

        {/* Objetivo 3 */}
        <motion.div
          className={styles.goal}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.goalTitle}>Ahorro para el Futuro</h3>
          <p className={styles.goalText}>
            Promovemos prácticas de reutilización y reciclaje con trazabilidad
            completa.
          </p>
        </motion.div>

        {/* Objetivo 4 */}
        <motion.div
          className={styles.goal}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <h3 className={styles.goalTitle}>
            Responsabilidad Social Empresarial (RSE)
          </h3>
          <p className={styles.goalText}>
            Programas de bienestar y capacitación para nuestros colaboradores y
            aliados.
          </p>
        </motion.div>
      </div>
    </div>
  )
}

export default Objetivos
