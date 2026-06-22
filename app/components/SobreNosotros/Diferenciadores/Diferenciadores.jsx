import React from 'react'
import { motion } from 'framer-motion'
import styles from './Diferenciadores.module.css'

const Diferenciadores = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Diferenciadores Claves</h2>

      <div className={styles.timeline}>
        {/* Item 1 */}
        <motion.div
          className={`${styles.item} ${styles.left}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.point}></div>
          <div className={styles.content}>
            <h3 className={styles.itemTitle}>Calidad y eficiencia</h3>
            <p>
              Procesos optimizados para la gestión de residuos que garantizan
              eficiencia y cumplimiento en cada operación.
            </p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          className={`${styles.item} ${styles.right}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.point}></div>
          <div className={styles.content}>
            <h3 className={styles.itemTitle}>
              Reducción del impacto ambiental
            </h3>
            <p>
              Implementamos estrategias sostenibles que minimizan la huella de
              carbono y contribuyen activamente al medio ambiente.
            </p>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          className={`${styles.item} ${styles.left}`}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.point}></div>
          <div className={styles.content}>
            <h3 className={styles.itemTitle}>Seguridad y protección laboral</h3>
            <p>
              Priorizamos la seguridad de nuestros colaboradores, promoviendo un
              entorno de trabajo responsable y seguro.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Diferenciadores
