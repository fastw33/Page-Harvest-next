import Link from 'next/link'
import Image from 'next/image'
import Contacto from '@/app/components/Contacto/Contacto'
import styles from './TopicLanding.module.css'

export default function TopicLanding({
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel,
  highlights = [],
  metrics = [],
  sections,
  ctaTitle,
  ctaText,
  internalLinks,
  faqs,
}) {
  return (
    <main className={styles.page}>
      <div className={styles.heroBackdrop} />
      <nav className={styles.breadcrumbs} aria-label='Breadcrumb'>
        <Link href='/'>Inicio</Link>
        <span>/</span>
        <span>{title}</span>
      </nav>
      <section className={styles.hero}>
        <div className={styles.heroCopy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{description}</p>
          {highlights.length ? (
            <div className={styles.highlightRow}>
              {highlights.map(item => (
                <span key={item} className={styles.highlightChip}>
                  {item}
                </span>
              ))}
            </div>
          ) : null}
          <div className={styles.actions}>
            <Link href={primaryHref} className={styles.primaryButton}>
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className={styles.secondaryButton}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </div>

        <div className={styles.heroImageCard}>
          <Image
            className={styles.heroImage}
            src={image}
            alt={imageAlt}
            width={900}
            height={700}
            sizes='(max-width: 900px) 100vw, 38vw'
            priority
          />
        </div>
      </section>

      {metrics.length ? (
        <section className={styles.metricsSection}>
          {metrics.map(item => (
            <article key={`${item.value}-${item.label}`} className={styles.metricCard}>
              <strong className={styles.metricValue}>{item.value}</strong>
              <span className={styles.metricLabel}>{item.label}</span>
            </article>
          ))}
        </section>
      ) : null}

      <section className={styles.contentBlock}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Información clave</p>
          <h2 className={styles.sectionTitle}>Lo que necesitas para cotizar mejor</h2>
        </div>

        <div className={styles.sectionGrid}>
          {sections.map((section, index) => (
            <article key={section.title} className={styles.card}>
              <span className={styles.cardIndex}>{String(index + 1).padStart(2, '0')}</span>
              <h3 className={styles.cardTitle}>{section.title}</h3>
              {section.text ? <p className={styles.cardText}>{section.text}</p> : null}
              {section.list ? (
                <ul className={styles.list}>
                  {section.list.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </section>

      {ctaTitle || ctaText ? (
        <section className={styles.ctaPanel}>
          <div>
            {ctaTitle ? <p className={styles.ctaEyebrow}>Siguiente paso</p> : null}
            {ctaTitle ? <h2 className={styles.ctaTitle}>{ctaTitle}</h2> : null}
            {ctaText ? <p className={styles.ctaText}>{ctaText}</p> : null}
          </div>
          <div className={styles.ctaActions}>
            <Link href={primaryHref} className={styles.primaryButton}>
              {primaryLabel}
            </Link>
            {secondaryHref && secondaryLabel ? (
              <Link href={secondaryHref} className={styles.secondaryButton}>
                {secondaryLabel}
              </Link>
            ) : null}
          </div>
        </section>
      ) : null}

      {internalLinks?.length ? (
        <section className={styles.internalLinks}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Explora más</p>
            <h2 className={styles.sectionTitle}>Páginas relacionadas</h2>
          </div>
          <div className={styles.linkGrid}>
            {internalLinks.map(item => (
              <Link key={item.href} href={item.href} className={styles.relatedLink}>
                {item.label}
              </Link>
            ))}
          </div>
        </section>
      ) : null}

      {faqs?.length ? (
        <section className={styles.faqSection}>
          <div className={styles.sectionHeading}>
            <p className={styles.sectionEyebrow}>Preguntas frecuentes</p>
            <h2 className={styles.sectionTitle}>Dudas comunes sobre el material</h2>
          </div>
          {faqs.map(item => (
            <article key={item.question} className={styles.faqCard}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </article>
          ))}
        </section>
      ) : null}

      <section id='contacto' className={styles.contactWrap}>
        <div className={styles.sectionHeading}>
          <p className={styles.sectionEyebrow}>Contacto directo</p>
          <h2 className={styles.sectionTitle}>Envíanos tu información</h2>
        </div>
        <Contacto />
      </section>
    </main>
  )
}
