'use client'

import { useEffect } from 'react'
import { usePathname } from 'next/navigation'

export default function ScrollToTop() {
  const pathname = usePathname()

  useEffect(() => {
    const element = document.getElementById('app-scroll')
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })

    if (element instanceof HTMLElement) {
      try {
        element.focus({ preventScroll: true })
      } catch {
        element.focus()
      }
    }
  }, [pathname])

  return null
}
