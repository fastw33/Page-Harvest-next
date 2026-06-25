'use client'

import React, { useState } from 'react'
import styles from './Contacto.module.css'
import { sendContacto } from '../../services/contacto.service'

const Contacto = () => {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)

  const handleSubmit = async e => {
    e.preventDefault()
    setMessage(null)
    setLoading(true)

    const form = e.currentTarget

    // payload JSON (va dentro de FormData como string)
    const payload = {
      nombre: form.nombre.value,
      email: form.email.value,
      telefono: form.telefono.value,
      tipoPersona: form.tipoPersona.value,
      documento: form.documento.value,
      descripcion: form.descripcion.value,
      precioEstimado: form.precioEstimado.value,
    }

    // archivos
    const files = Array.from(form.fotos?.files || [])

    try {
      const res = await sendContacto(payload, files, {
        formId: 'contactoMaterialLanding',
      })

      if (res.ok) {
        setMessage({ type: 'success', text: res.message })
        form.reset()
      } else {
        setMessage({ type: 'error', text: res.message })
      }
    } catch (err) {
      console.error(err)
      setMessage({
        type: 'error',
        text: 'Error inesperado al enviar la información.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className={styles.section} id='contacto'>
      <div className={styles.container}>
        <div className={styles.card}>
          <h2 className={styles.title}>¿Listo para vender tu material?</h2>

          <p className={styles.intro}>
            Cuéntanos qué tienes y cómo deseas que te contactemos.
          </p>

          {message && (
            <div
              className={`${styles.alert} ${
                message.type === 'success'
                  ? styles.alertSuccess
                  : styles.alertError
              }`}
            >
              {message.text}
            </div>
          )}

          <form className={styles.formGrid} onSubmit={handleSubmit}>
            <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
              <label htmlFor='contacto-nombre' className={styles.visuallyHidden}>
                Nombre completo
              </label>
              <input
                id='contacto-nombre'
                type='text'
                name='nombre'
                className={styles.fieldInput}
                placeholder='Nombre completo'
                autoComplete='name'
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor='contacto-email' className={styles.visuallyHidden}>
                Correo electrónico
              </label>
              <input
                id='contacto-email'
                type='email'
                name='email'
                className={styles.fieldInput}
                placeholder='Correo electrónico'
                autoComplete='email'
                required
              />
            </div>

            <div className={styles.fieldGroup}>
              <label htmlFor='contacto-telefono' className={styles.visuallyHidden}>
                Teléfono
              </label>
              <input
                id='contacto-telefono'
                type='tel'
                name='telefono'
                className={styles.fieldInput}
                placeholder='Teléfono (opcional)'
                autoComplete='tel'
              />
            </div>

            <div className={styles.fieldGroup}>
              <label
                htmlFor='contacto-tipo-persona'
                className={styles.visuallyHidden}
              >
                Tipo de persona
              </label>
              <select
                id='contacto-tipo-persona'
                name='tipoPersona'
                className={styles.fieldInput}
                defaultValue=''
                required
              >
                <option value=''>¿Persona natural o jurídica?</option>
                <option value='natural'>Persona natural</option>
                <option value='juridica'>Persona jurídica</option>
              </select>
            </div>

            <div className={styles.fieldGroup}>
              <label
                htmlFor='contacto-documento'
                className={styles.visuallyHidden}
              >
                Cédula o NIT
              </label>
              <input
                id='contacto-documento'
                type='text'
                name='documento'
                className={styles.fieldInput}
                placeholder='Cédula o NIT'
                required
              />
            </div>

            <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
              <label
                htmlFor='contacto-descripcion'
                className={styles.visuallyHidden}
              >
                Descripción del material
              </label>
              <textarea
                id='contacto-descripcion'
                name='descripcion'
                className={`${styles.fieldInput} ${styles.textarea}`}
                placeholder='Describe el material que deseas vender'
                required
              />
            </div>

            <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
              <label
                htmlFor='contacto-precio-estimado'
                className={styles.visuallyHidden}
              >
                Precio estimado
              </label>
              <input
                id='contacto-precio-estimado'
                type='number'
                name='precioEstimado'
                className={styles.fieldInput}
                placeholder='Precio estimado (opcional)'
              />
            </div>

            <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
              <label htmlFor='fotos' className={styles.fileLabel}>
                <span className={styles.fileLabelContent}>
                  <span className={styles.iconAnimado}>📎</span>
                  Adjunta fotos del material
                </span>
              </label>

              <input
                type='file'
                name='fotos'
                id='fotos'
                multiple
                accept='image/*,application/pdf'
                className={styles.fieldInput}
              />
            </div>

            <div className={styles.actions}>
              <button
                type='submit'
                disabled={loading}
                className={`${styles.btnNaranja} ${styles.pulse}`}
              >
                {loading ? 'Enviando...' : 'Enviar información'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contacto
