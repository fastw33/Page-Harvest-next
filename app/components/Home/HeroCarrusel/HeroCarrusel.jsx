import { useState, useEffect, useRef } from 'react'
import styles from './HeroCarrusel.module.css'
import { sendContacto } from '../../../services/contacto.service'

const textos = [
  'Evaluación técnica y compra directa para industria en toda Colombia',
  'Recibimos brocas, insertos, puntas, varillas y piezas de desgaste industrial',
  'Procesos ágiles para reciclaje especializado y valorización de materiales',
  'También recuperamos aleaciones especiales y otros metales industriales de alto valor',
]

const HeroCarrusel = () => {
  const [index, setIndex] = useState(0)
  const [animando, setAnimando] = useState(false)
  const [mensajeKey, setMensajeKey] = useState(null)
  const [enviado, setEnviado] = useState(false)
  const [errorMsg, setErrorMsg] = useState(null)
  const [loading, setLoading] = useState(false)

  const formRef = useRef(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(prev => (prev + 1) % textos.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    setErrorMsg(null)

    if (!formRef.current) return
    const form = formRef.current

    // mostrar animación de ícono
    setMensajeKey(Date.now())
    setAnimando(true)
    setLoading(true)

    // armar payload desde el form
    const payload = {
      nombre: form.nombre.value,
      email: form.email.value,
      telefono: form.telefono.value,
      material: form.material.value,
      // opcional: marca de dónde viene
      origen: 'heroCarrusel',
    }

    // archivos
    const files = Array.from(form.fotos?.files || [])

    try {
      const res = await sendContacto(payload, files, {
        formId: 'heroCarruselCotizacion',
      })

      if (res.ok) {
        setEnviado(true)
        form.reset()
      } else {
        setEnviado(false)
        setErrorMsg(res.message || 'No se pudo enviar la cotización.')
      }
    } catch (err) {
      console.error(err)
      setEnviado(false)
      setErrorMsg('Error inesperado al enviar la cotización.')
    } finally {
      setLoading(false)

      // ocultar animación del ícono
      setTimeout(() => {
        setAnimando(false)
      }, 900)

      // ocultar mensaje éxito/error
      setTimeout(() => {
        setEnviado(false)
        setErrorMsg(null)
      }, 2500)
    }
  }

  return (
    <div className={styles.overlay}>
      <div className={styles.texto}>
        <h1 className={styles.headline}>
          Compra de tungsteno y carburo de tungsteno en Colombia
        </h1>
        <p>{textos[index]}</p>
      </div>

      <form
        ref={formRef}
        className={styles.formulario}
        onSubmit={handleSubmit}
      >
        <div className={styles.formGrid}>
          <div className={styles.fieldGroup}>
            <label htmlFor='hero-nombre' className={styles.visuallyHidden}>
              Tu nombre
            </label>
            <input
              id='hero-nombre'
              type='text'
              name='nombre'
              className={styles.fieldInput}
              placeholder='Tu nombre'
              autoComplete='name'
              required
            />
          </div>

          <div className={styles.fieldGroup}>
            <label htmlFor='hero-email' className={styles.visuallyHidden}>
              Tu correo
            </label>
            <input
              id='hero-email'
              type='email'
              name='email'
              className={styles.fieldInput}
              placeholder='Tu correo'
              autoComplete='email'
              required
            />
          </div>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor='hero-telefono' className={styles.visuallyHidden}>
            Tu teléfono
          </label>
          <input
            id='hero-telefono'
            type='tel'
            name='telefono'
            className={styles.fieldInput}
            placeholder='Tu teléfono'
            autoComplete='tel'
            required
          />
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor='hero-material' className={styles.visuallyHidden}>
            Material
          </label>
          <select
            id='hero-material'
            name='material'
            className={styles.fieldInput}
            defaultValue=''
            required
          >
            <option value=''>Selecciona un material</option>
            <option value='tungsteno'>Tungsteno</option>
            <option value='carburo_de_tungsteno'>Carburo de tungsteno</option>
            <option value='bronce'>Bronce</option>
            <option value='aceros_inox'>Aceros Inoxidables</option>
            <option value='aceros_especiales'>Aceros Especiales</option>
            <option value='no_se'>No se qué tipo es</option>
          </select>
        </div>

        <div className={styles.fieldGroup}>
          <label htmlFor='hero-fotos' className={styles.fileLabel}>
            Adjunta fotos o PDF del material
          </label>
          <input
            id='hero-fotos'
            type='file'
            name='fotos'
            className={styles.fieldInput}
            accept='image/*,application/pdf'
            multiple
            required
          />
        </div>

        <button
          type='submit'
          disabled={loading}
          className={styles.botonAnimado}
        >
          {loading ? 'Enviando...' : 'Cotizar Rápido'}
        </button>

        {/* Ícono animado */}
        {animando && (
          <div key={mensajeKey} className={styles.mensaje}>
            📩
          </div>
        )}

        {/* Mensaje de éxito */}
        {enviado && (
          <div className={styles.statusSuccess} role='status'>
            ¡Tu cotización ha sido enviada!
          </div>
        )}

        {/* Mensaje de error */}
        {errorMsg && (
          <div className={styles.statusError} role='alert'>
            {errorMsg}
          </div>
        )}
        <div className={styles.disclaimer}>
          Respuesta inicial en horario laboral en pocas horas.
        </div>
      </form>
    </div>
  )
}

export default HeroCarrusel
