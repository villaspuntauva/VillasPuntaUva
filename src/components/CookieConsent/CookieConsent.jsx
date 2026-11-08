import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './CookieConsent.module.css'

// Google Analytics only loads after the visitor clicks Accept. The loader
// itself (window.loadGoogleAnalytics) lives in index.html; this banner just
// records the choice and calls it. The footer's "Cookie settings" link
// reopens the banner via OPEN_EVENT.
export const CONSENT_KEY = 'vpu-analytics-consent'
export const OPEN_EVENT = 'vpu:open-cookie-settings'

const text = {
  en: {
    label: 'Cookie consent',
    message: 'We use Google Analytics cookies to understand how visitors use our website, only if you agree.',
    policy: 'Cookie Policy',
    accept: 'Accept',
    decline: 'Decline',
  },
  es: {
    label: 'Consentimiento de cookies',
    message: 'Usamos cookies de Google Analytics para entender cómo se usa nuestro sitio, solo si usted lo acepta.',
    policy: 'Política de Cookies',
    accept: 'Aceptar',
    decline: 'Rechazar',
  },
}

function readConsent() {
  try {
    return localStorage.getItem(CONSENT_KEY)
  } catch {
    return null
  }
}

function saveConsent(value) {
  try {
    localStorage.setItem(CONSENT_KEY, value)
  } catch {
    // Storage blocked (e.g. private mode): the choice just isn't remembered.
  }
}

// Removes the _ga cookies Google Analytics set on this domain.
function clearAnalyticsCookies() {
  const domain = window.location.hostname.replace(/^www\./, '')
  document.cookie.split(';').forEach((cookie) => {
    const name = cookie.split('=')[0].trim()
    if (!name.startsWith('_ga')) return
    for (const scope of ['', `; domain=${domain}`, `; domain=.${domain}`]) {
      document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${scope}`
    }
  })
}

export default function CookieConsent() {
  const { language, localizePath } = useLanguage()
  const [open, setOpen] = useState(false)
  const copy = text[language] ?? text.en

  useEffect(() => {
    // The prerender script drives a headless browser (navigator.webdriver);
    // keep the banner out of the saved HTML snapshots crawlers see.
    if (!navigator.webdriver && !readConsent()) setOpen(true)

    const reopen = () => setOpen(true)
    window.addEventListener(OPEN_EVENT, reopen)
    return () => window.removeEventListener(OPEN_EVENT, reopen)
  }, [])

  if (!open) return null

  const accept = () => {
    saveConsent('granted')
    window.loadGoogleAnalytics?.()
    setOpen(false)
  }

  const decline = () => {
    const wasGranted = readConsent() === 'granted'
    saveConsent('denied')
    setOpen(false)
    // Analytics may already be running from an earlier Accept; clearing its
    // cookies and reloading is the only way to fully stop it.
    if (wasGranted) {
      clearAnalyticsCookies()
      window.location.reload()
    }
  }

  return (
    <section className={styles.banner} role="region" aria-label={copy.label}>
      <p className={styles.message}>
        {copy.message}{' '}
        <Link to={localizePath('/cookies')}>{copy.policy}</Link>
      </p>
      <div className={styles.actions}>
        <button type="button" className={styles.decline} onClick={decline}>{copy.decline}</button>
        <button type="button" className={styles.accept} onClick={accept}>{copy.accept}</button>
      </div>
    </section>
  )
}
