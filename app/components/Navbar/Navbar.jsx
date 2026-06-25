'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'
import styles from './Navbar.module.css'

// Íconos
import { FaHome, FaBox, FaTruck, FaInfoCircle, FaPhone } from 'react-icons/fa'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Efecto de scroll para aplicar fondo transparente al menú
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const isActive = path => pathname === path

  const renderMenu = (
    <nav
      className={`${styles.menuBox} ${scrolled ? styles.menuScrolled : ''}`}
      aria-label='Navegación principal'
    >
      <ul className={styles.menu}>
        <li>
          <Link
            href='/'
            className={`${styles.link} ${isActive('/') ? styles.active : ''}`}
            aria-current={isActive('/') ? 'page' : undefined}
            aria-label='Inicio'
          >
            <span className={styles.icon}>
              <FaHome />
            </span>
            <span className={styles.text}>Inicio</span>
          </Link>
        </li>
        <li>
          <Link
            href='/materiales'
            className={`${styles.link} ${isActive('/materiales') ? styles.active : ''}`}
            aria-current={isActive('/materiales') ? 'page' : undefined}
            aria-label='Materiales'
          >
            <span className={styles.icon}>
              <FaBox />
            </span>
            <span className={styles.text}>Materiales</span>
          </Link>
        </li>
        <li>
          <Link
            href='/comotrabajamos'
            className={`${styles.link} ${isActive('/comotrabajamos') ? styles.active : ''}`}
            aria-current={isActive('/comotrabajamos') ? 'page' : undefined}
            aria-label='¿Cómo trabajamos?'
          >
            <span className={styles.icon}>
              <FaTruck />
            </span>
            <span className={styles.text}>¿Cómo trabajamos?</span>
          </Link>
        </li>
        <li>
          <Link
            href='/sobrenosotros'
            className={`${styles.link} ${isActive('/sobrenosotros') ? styles.active : ''}`}
            aria-current={isActive('/sobrenosotros') ? 'page' : undefined}
            aria-label='Sobre Nosotros'
          >
            <span className={styles.icon}>
              <FaInfoCircle />
            </span>
            <span className={styles.text}>Sobre Nosotros</span>
          </Link>
        </li>
        <li>
          <Link
            href='/contactanos'
            className={`${styles.link} ${isActive('/contactanos') ? styles.active : ''}`}
            aria-current={isActive('/contactanos') ? 'page' : undefined}
            aria-label='Contáctanos'
          >
            <span className={styles.icon}>
              <FaPhone />
            </span>
            <span className={styles.text}>Contáctanos</span>
          </Link>
        </li>
      </ul>
    </nav>
  )

  return (
    <header className={styles.header}>
      <div className={styles.logoBox}>
        <Link
          href='/'
          className='navbar-brand'
          style={{ textDecoration: 'none' }}
        >
          <Image
            src='/assets/Harvest.webp'
            alt='Metal Harvest Logo'
            width={150}
            height={150}
            className={styles.logo}
            priority
          />
        </Link>
      </div>
      {renderMenu}
    </header>
  )
}
