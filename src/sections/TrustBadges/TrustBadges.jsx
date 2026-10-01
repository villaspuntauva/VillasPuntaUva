import { FaStar } from 'react-icons/fa'
import { FcGoogle } from 'react-icons/fc'
import { LuArrowUpRight } from 'react-icons/lu'
import styles from './TrustBadges.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

const AIRBNB_PROFILE_URL = 'https://www.airbnb.com/users/show/490093701'
const GOOGLE_PROFILE_URL = 'https://share.google/Xuwc9f20DwkVTeHBV'

// Combined across all 7 Airbnb listings — update as reviews come in.
const AIRBNB_RATING = '4.9'
const AIRBNB_REVIEW_COUNT = 360

export default function TrustBadges() {
  const { t } = useLanguage()

  const cards = [
    {
      href: AIRBNB_PROFILE_URL,
      logo: (
        <span className={styles.airbnbLogo}>
          <img src="/images/logos/airbnb-logo.png" alt="" />
          <span>airbnb</span>
        </span>
      ),
      title: t('trust.superhostTitle'),
      text: t('trust.superhostText'),
      cta: t('trust.superhostCta'),
    },
    {
      href: AIRBNB_PROFILE_URL,
      logo: (
        <span className={styles.stars} aria-hidden="true">
          {Array.from({ length: 5 }, (_, i) => <FaStar key={i} size={16} />)}
        </span>
      ),
      title: t('trust.ratingTitle', { rating: AIRBNB_RATING }),
      text: t('trust.ratingText', { count: AIRBNB_REVIEW_COUNT }),
      cta: t('trust.ratingCta'),
    },
    {
      href: GOOGLE_PROFILE_URL,
      logo: (
        <span className={styles.googleLogo}>
          <FcGoogle size={26} />
          <span>Google</span>
        </span>
      ),
      title: t('trust.googleTitle'),
      text: t('trust.googleText'),
      cta: t('trust.googleCta'),
    },
  ]

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <span className={styles.eyebrow}>{t('trust.eyebrow')}</span>
        <h2 className={styles.heading}>{t('trust.heading')}</h2>

        <div className={styles.grid}>
          {cards.map((card) => (
            <a
              key={card.title}
              href={card.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.card}
            >
              <div className={styles.logoRow}>
                {card.logo}
              </div>
              <h3 className={styles.title}>{card.title}</h3>
              <p className={styles.text}>{card.text}</p>
              <span className={styles.cta}>
                {card.cta}
                <LuArrowUpRight size={16} />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
