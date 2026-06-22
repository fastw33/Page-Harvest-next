'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import styles from './ListadoMateriales.module.css'
import { materiales } from '../data/materialesData'

const ListadoMateriales = () => {
  const [activo, setActivo] = useState(null)
  const [imagenGrande, setImagenGrande] = useState(null)

  const toggle = index => {
    setActivo(activo === index ? null : index)
  }

  return (
    <section className={styles.container}>
      {materiales.map((material, index) => (
        <div key={index} className={styles.categoria}>
          <div
            className={styles.header}
            onClick={() => toggle(index)}
            role='button'
            tabIndex={0}
            onKeyDown={event => {
              if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault()
                toggle(index)
              }
            }}
            aria-expanded={activo === index}
            aria-label={`Desplegar categoría ${material.tipo}`}
          >
            <h2>{material.tipo}</h2>
            <span>{activo === index ? '⯆' : '⯈'}</span>
          </div>

          {activo === index && (
            <div className={styles.grid}>
              {material.items.map((item, i) => (
                (() => {
                  const itemLabel =
                    item.nombre ||
                    (material.tipo === 'TUNGSTENO'
                      ? `pieza industrial de tungsteno o carburo de tungsteno ${i + 1}`
                      : `pieza industrial de ${material.tipo.toLowerCase()} ${i + 1}`)

                  return (
                    <div
                      key={i}
                      className={styles.item}
                      onClick={() => setImagenGrande(item.imagen)}
                      role='button'
                      tabIndex={0}
                      onKeyDown={event => {
                        if (event.key === 'Enter' || event.key === ' ') {
                          event.preventDefault()
                          setImagenGrande(item.imagen)
                        }
                      }}
                      aria-label={`Ver imagen ampliada de ${itemLabel}`}
                    >
                      <Image
                        src={item.imagen}
                        alt={itemLabel}
                        width={320}
                        height={130}
                        sizes='(max-width: 768px) 50vw, 180px'
                        loading='lazy'
                      />
                      {item.nombre ? <p>{item.nombre}</p> : null}
                    </div>
                  )
                })()
              ))}
            </div>
          )}
        </div>
      ))}

      {imagenGrande && (
        <div className={styles.overlay} onClick={() => setImagenGrande(null)}>
          <img
            className={styles.zoomedImg}
            src={imagenGrande}
            alt='Vista ampliada del material seleccionado'
            onWheel={e => {
              e.stopPropagation()
              const img = e.currentTarget
              const currentScale = Number(img.dataset.scale) || 1
              const newScale =
                e.deltaY < 0 ? currentScale + 0.1 : currentScale - 0.1
              img.style.transform = `scale(${Math.max(
                1,
                Math.min(newScale, 5)
              )})`
              img.dataset.scale = newScale
            }}
            data-scale='1'
          />
        </div>
      )}
    </section>
  )
}

export default ListadoMateriales
