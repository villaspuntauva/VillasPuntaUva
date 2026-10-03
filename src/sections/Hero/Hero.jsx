import styles from './Hero.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Hero() {
  const { t } = useLanguage()
  return (
    <section className={styles.hero}>
      <div className={styles.overlay} />
      <div className={styles.content}>
        <img
          src="/images/logos/logo-white.png"
          alt=""
          className={styles.icon}
        />
        {/* The tagline sits inside the h1 so the main heading carries the
            location keywords, while still looking like a separate line. */}
        <h1 className={styles.heading}>
          <span className={styles.title}>Villas Punta Uva</span>
          <span className={styles.subtitle}>{t('home.tagline')}</span>
        </h1>
      </div>
    </section>
  )
}
