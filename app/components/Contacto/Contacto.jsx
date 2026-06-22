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
    <section className='bg-white py-5' id='contacto'>
      <div className='container'>
        <div
          className='bg-white rounded-4 shadow p-5 mx-auto'
          style={{ maxWidth: '700px' }}
        >
          <h2
            className='text-center text-success fw-bold mb-3'
            style={{ fontFamily: 'lemon milk' }}
          >
            ¿Listo para vender tu material?
          </h2>

          <p className='text-center text-secondary mb-4 fs-5'>
            Cuéntanos qué tienes y cómo deseas que te contactemos.
          </p>

          {message && (
            <div
              className={`alert ${
                message.type === 'success' ? 'alert-success' : 'alert-danger'
              }`}
            >
              {message.text}
            </div>
          )}

          <form className='row g-3' onSubmit={handleSubmit}>
            <div className='col-12'>
              <input
                type='text'
                name='nombre'
                className='form-control'
                placeholder='Nombre completo'
                aria-label='Nombre completo'
                autoComplete='name'
                required
              />
            </div>

            <div className='col-md-6'>
              <input
                type='email'
                name='email'
                className='form-control'
                placeholder='Correo electrónico'
                aria-label='Correo electrónico'
                autoComplete='email'
                required
              />
            </div>

            <div className='col-md-6'>
              <input
                type='tel'
                name='telefono'
                className='form-control'
                placeholder='Teléfono (opcional)'
                aria-label='Teléfono'
                autoComplete='tel'
              />
            </div>

            <div className='col-md-6'>
              <select name='tipoPersona' className='form-select' required>
                <option value=''>¿Persona natural o jurídica?</option>
                <option value='natural'>Persona natural</option>
                <option value='juridica'>Persona jurídica</option>
              </select>
            </div>

            <div className='col-md-6'>
              <input
                type='text'
                name='documento'
                className='form-control'
                placeholder='Cédula o NIT'
                aria-label='Cédula o NIT'
                required
              />
            </div>

            <div className='col-12'>
              <textarea
                name='descripcion'
                className='form-control'
                rows='4'
                placeholder='Describe el material que deseas vender'
                aria-label='Descripción del material'
                required
              />
            </div>

            <div className='col-12'>
              <input
                type='number'
                name='precioEstimado'
                className='form-control'
                placeholder='Precio estimado (opcional)'
                aria-label='Precio estimado'
              />
            </div>

            <div className='col-12 mt-3'>
              <label
                htmlFor='fotos'
                className='form-label text-muted small mb-1'
              >
                <span className='d-inline-flex align-items-center gap-2'>
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
                className='form-control'
                aria-label='Adjuntar fotos o PDF del material'
              />
            </div>

            <div className='col-12 text-center mt-4'>
              <button
                type='submit'
                disabled={loading}
                className={`btn px-5 py-2 fw-bold ${styles.btnNaranja} ${styles.pulse}`}
                style={{
                  fontFamily: 'lemon milk',
                  borderRadius: '50px',
                }}
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
