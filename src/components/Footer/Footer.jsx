import { Link } from 'react-router-dom'
import { FaInstagram, FaTiktok } from 'react-icons/fa'
import { getLocalizedSuites } from '../../data/suites'
import { business, isPlaceholder } from '../../data/business'
import { legalContent, legalPages } from '../../data/legal'
import styles from './Footer.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function Footer() {
  const { language, t, localizePath } = useLanguage()
  const suites = getLocalizedSuites(language)
  const legal = legalContent[language].pages
  const showLegalIdentity = !isPlaceholder(business.legalName) && !isPlaceholder(business.legalId)
  return (
    <footer className={styles.footer}>
      <div className={styles.topBanner}>
        <div className={styles.topBannerInner}>
          <div className={styles.topBannerText}>
            <h3 className={styles.topBannerHeading}>{t('footer.ready')}</h3>
            <p className={styles.topBannerSub}>{t('footer.text')}</p>
          </div>
          <a href={business.phoneHref} className={styles.topBannerPhone}>{business.phone}</a>
        </div>
      </div>

      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brand}>
            <img
              src="/images/logos/logo-white-text.png"
              alt="Villas Punta Uva"
              className={styles.logo}
            />
            <p className={styles.tagline}>
              {t('footer.tagline')}
            </p>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t('footer.quickLinks')}</h4>
            <nav className={styles.links} aria-label={t('footer.quickLinks')}>
              <Link to={localizePath('/')}>{t('nav.home')}</Link>
              <Link to={localizePath('/suites')}>{t('nav.suites')}</Link>
              <Link to={localizePath('/location')}>{t('nav.location')}</Link>
              <Link to={localizePath('/puerto-viejo-costa-rica')}>{t('nav.puertoViejo')}</Link>
              <Link to={localizePath('/about')}>{t('nav.about')}</Link>
              <Link to={localizePath('/explore')}>{t('nav.explore')}</Link>
              <Link to={localizePath('/contact')}>{t('nav.contact')}</Link>
              <Link to={localizePath('/faq')}>{t('nav.faqs')}</Link>
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t('nav.suites')}</h4>
            <nav className={styles.links} aria-label={t('nav.suites')}>
              {suites.map((suite) => (
                <Link key={suite.id} to={localizePath(`/suites/${suite.slug}`)}>{suite.name}</Link>
              ))}
            </nav>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t('footer.contact')}</h4>
            <div className={styles.contactInfo}>
              <p>Punta Uva, Puerto Viejo</p>
              <p>Limón, Costa Rica</p>
              <p><a href={business.phoneHref}>{business.phone}</a></p>
              <p><a href={`mailto:${business.email}`}>{business.email}</a></p>
            </div>
          </div>

          <div className={styles.column}>
            <h4 className={styles.columnTitle}>{t('footer.follow')}</h4>
            <div className={styles.socials}>
              <a
                href="https://www.instagram.com/villaspuntauva/"
                aria-label={`Instagram (${t('common.newTab')})`}
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram size={22} />
              </a>
              <a
                href="https://www.tiktok.com/@villaspuntauva"
                aria-label={`TikTok (${t('common.newTab')})`}
                target="_blank"
                rel="noreferrer"
              >
                <FaTiktok size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>
        <nav className={styles.legalLinks} aria-label={t('footer.legal')}>
          {legalPages.map((item) => (
            <Link key={item.key} to={localizePath(item.path)}>{legal[item.key].title}</Link>
          ))}
        </nav>
        <p>&copy; {new Date().getFullYear()} Villas Punta Uva. {t('footer.rights')}</p>
        {showLegalIdentity && (
          <p>{business.legalName} · {business.legalId}</p>
        )}
      </div>
    </footer>
  )
}
