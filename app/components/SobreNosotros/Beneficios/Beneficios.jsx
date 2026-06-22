import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import styles from './Beneficios.module.css'

const Beneficios = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContent}>
        <h2 className={styles.title}>Beneficios Claves</h2>

        {/* Beneficio 1 */}
        <motion.div
          className={styles.benefit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.number}>01</div>
          <div className={styles.description}>
            <h3 className={styles.benefitTitle}>Precios Competitivos</h3>
            <p>
              Ofrecemos tarifas justas y transparentes en la adquisición de
              residuos industriales, asegurando una gestión eficiente y
              sostenible.
            </p>
          </div>
        </motion.div>

        {/* Beneficio 2 */}
        <motion.div
          className={styles.benefit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.number}>02</div>
          <div className={styles.description}>
            <h3 className={styles.benefitTitle}>
              Trazabilidad y Aprovechamiento
            </h3>
            <p>
              Proporcionamos datos precisos sobre la gestión y destino final de
              los residuos para garantizar transparencia.
            </p>
          </div>
        </motion.div>

        {/* Beneficio 3 */}
        <motion.div
          className={styles.benefit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.number}>03</div>
          <div className={styles.description}>
            <h3 className={styles.benefitTitle}>Optimización Logística</h3>
            <p>
              Integramos logística nacional e internacional para maximizar la
              eficiencia y reducir costos operativos.
            </p>
          </div>
        </motion.div>

        {/* Beneficio 4 */}
        <motion.div
          className={styles.benefit}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.number}>04</div>
          <div className={styles.description}>
            <h3 className={styles.benefitTitle}>Estrategias Sostenibles</h3>
            <p>
              Implementamos soluciones de transporte sostenible y compensación
              de emisiones de carbono.
            </p>
          </div>
        </motion.div>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src='/img/SobreNosotros/Harvest.webp'
          alt='Beneficios operativos y sostenibles de Metal Harvest'
          className={styles.image}
          width={450}
          height={450}
          sizes='(max-width: 768px) 100vw, 38vw'
          loading='lazy'
        />
      </div>
    </div>
  )
}

export default Beneficios
