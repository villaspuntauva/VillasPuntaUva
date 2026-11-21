import { FaWhatsapp } from 'react-icons/fa'
import { business } from '../../data/business'
import { useLanguage } from '../../i18n/LanguageContext'
import styles from './WhatsAppButton.module.css'

export default function WhatsAppButton() {
  const { t } = useLanguage()
  const label = `${t('common.whatsapp')} (${t('common.newTab')})`

  return (
    <a
      href={business.whatsappHref}
      className={styles.btn}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={t('common.whatsapp')}
    >
      <FaWhatsapp size={32} aria-hidden="true" />
    </a>
  )
}
