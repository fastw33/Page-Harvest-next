'use client'

import { motion } from 'framer-motion'
import Contacto from '@/app/components/Contacto/Contacto'
import HeroComoTrabajamos from '@/app/components/ComoTrabajamos/HeroComoTrabajamos/HeroComoTrabajamos'
import ProcesoPaso from '@/app/components/ComoTrabajamos/ProcesoPaso/ProcesoPaso'
import ConfianzaMensaje from '@/app/components/ComoTrabajamos/ConfianzaMensaje/ConfianzaMensaje'
import styles from '@/app/components/ComoTrabajamos/ComoTrabajamos.module.css'

export default function ComoTrabajamosContent() {
  return (
    <>
      <main className={styles.container}>
        <section className={styles.seccion}>
          <HeroComoTrabajamos />
        </section>

        <section className={styles.seccion}>
          <ProcesoPaso />
        </section>

        <section className={styles.seccion}>
          <ConfianzaMensaje />
        </section>

        <section className={styles.seccion}>
          <Contacto />
        </section>
      </main>
    </>
  )
}
