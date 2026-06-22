'use client'

import { motion } from 'framer-motion'
import styles from '@/app/components/SobreNosotros/SobreNosotros.module.css'
import Introduccion from '@/app/components/SobreNosotros/Introduccion/Introduccion'
import Compromiso from '@/app/components/SobreNosotros/Compromiso/Compromiso'
import Objetivos from '@/app/components/SobreNosotros/Objetivos/Objetivos'
import Beneficios from '@/app/components/SobreNosotros/Beneficios/Beneficios'
import Diferenciadores from '@/app/components/SobreNosotros/Diferenciadores/Diferenciadores'
import Contacto from '@/app/components/Contacto/Contacto'

export default function SobreNosotrosContent() {
  const sectionAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1 },
    },
  }

  return (
    <>
      <main className={styles.container}>
        <motion.section
          className={styles.seccion}
          initial='hidden'
          whileInView='visible'
          variants={sectionAnimation}
          viewport={{ once: true }}
        >
          <Introduccion />
        </motion.section>

        <motion.section
          className={styles.seccion}
          initial='hidden'
          whileInView='visible'
          variants={sectionAnimation}
          viewport={{ once: true }}
        >
          <Compromiso />
        </motion.section>

        <motion.section
          className={styles.seccion}
          initial='hidden'
          whileInView='visible'
          variants={sectionAnimation}
          viewport={{ once: true }}
        >
          <Objetivos />
        </motion.section>

        <motion.section
          className={styles.seccion}
          initial='hidden'
          whileInView='visible'
          variants={sectionAnimation}
          viewport={{ once: true }}
        >
          <Beneficios />
        </motion.section>

        <motion.section
          className={styles.seccion}
          initial='hidden'
          whileInView='visible'
          variants={sectionAnimation}
          viewport={{ once: true }}
        >
          <Diferenciadores />
        </motion.section>

        <motion.section
          className={styles.seccion}
          initial='hidden'
          whileInView='visible'
          variants={sectionAnimation}
          viewport={{ once: true }}
        >
          <Contacto />
        </motion.section>
      </main>
    </>
  )
}
