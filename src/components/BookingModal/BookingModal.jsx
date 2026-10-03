import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { HiX } from 'react-icons/hi'
import styles from './BookingModal.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import { useDialogFocus } from '../../hooks/useDialogFocus'
import { business } from '../../data/business'

export default function BookingModal({ onClose }) {
  const { t, localizePath } = useLanguage()
  const dialogRef = useDialogFocus(true, onClose)

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previousOverflow
    }
  }, [])

  return (
    <div className={styles.overlay} onClick={onClose} role="presentation">
      <div
        ref={dialogRef}
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="booking-modal-title"
        aria-describedby="booking-modal-text"
        tabIndex={-1}
        onClick={(event) => event.stopPropagation()}
      >
        <button
          type="button"
          className={styles.close}
          onClick={onClose}
          aria-label={t('common.close')}
        >
          <HiX size={24} />
        </button>
        <img
          src="/images/logos/logo-blue.png"
          alt=""
          className={styles.icon}
        />
        <h2 id="booking-modal-title">{t('booking.modalTitle')}</h2>
        <p id="booking-modal-text">
          {t('booking.modalText', { phone: business.phone })}
        </p>
        <a href={business.whatsappHref} className={styles.action} target="_blank" rel="noopener noreferrer">
          {t('booking.message', { phone: business.phone })}
        </a>
        <p className={styles.notice}>
          {t('booking.privacyNotice')}{' '}
          <Link to={localizePath('/privacy')} onClick={onClose}>{t('booking.privacyLink')}</Link>
          {' · '}
          <Link to={localizePath('/refunds')} onClick={onClose}>{t('booking.refundLink')}</Link>
        </p>
      </div>
    </div>
  )
}
