import { FaFacebookF, FaInstagram, FaTiktok } from 'react-icons/fa'
import styles from './StayConnected.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import { socialLinks } from '../../data/business'

const copy = {
  en: {
    eyebrow: 'Follow along',
    title: 'Let’s stay connected',
    text: 'See new villa photos, everyday life on the Caribbean coast, and local tips from Puerto Viejo.',
    follow: 'Follow',
    facebookHandle: 'Villas Punta Uva',
  },
  es: {
    eyebrow: 'Síganos',
    title: 'Mantengámonos en contacto',
    text: 'Vea fotos nuevas de las villas, el día a día en la costa caribeña y recomendaciones locales de Puerto Viejo.',
    follow: 'Seguir',
    facebookHandle: 'Villas Punta Uva',
  },
}

export default function StayConnected() {
  const { language, t } = useLanguage()
  const c = copy[language]

  const profiles = [
    { key: 'instagram', name: 'Instagram', handle: '@villaspuntauva', href: socialLinks.instagram, Icon: FaInstagram },
    { key: 'tiktok', name: 'TikTok', handle: '@villaspuntauva', href: socialLinks.tiktok, Icon: FaTiktok },
    { key: 'facebook', name: 'Facebook', handle: c.facebookHandle, href: socialLinks.facebook, Icon: FaFacebookF },
  ].filter((profile) => profile.href)

  return (
    <section className={styles.section} aria-labelledby="stay-connected-title">
      <div className={styles.container}>
        <p className={styles.eyebrow}>{c.eyebrow}</p>
        <h2 id="stay-connected-title" className={styles.title}>{c.title}</h2>
        <p className={styles.text}>{c.text}</p>

        <ul className={styles.list}>
          {profiles.map(({ key, name, handle, href, Icon }) => (
            <li key={key}>
              <a
                href={href}
                target="_blank"
                rel="noreferrer"
                className={`${styles.card} ${styles[key]}`}
                aria-label={`${c.follow} ${name} ${handle} (${t('common.newTab')})`}
              >
                <span className={styles.icon} aria-hidden="true"><Icon /></span>
                <span className={styles.details}>
                  <span className={styles.name}>{name}</span>
                  <span className={styles.handle}>{handle}</span>
                </span>
                <span className={styles.follow} aria-hidden="true">{c.follow}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
