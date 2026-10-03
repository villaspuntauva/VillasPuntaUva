import { HiPause, HiPlay } from 'react-icons/hi'
import styles from './CarouselPause.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

// Pause/play control for auto-advancing carousels (WCAG 2.2.2: moving
// content that lasts more than 5 seconds needs a way to stop it).
export default function CarouselPause({ paused, onToggle, className = '' }) {
  const { t } = useLanguage()
  return (
    <button
      type="button"
      className={`${styles.button} ${className}`}
      onClick={onToggle}
      aria-pressed={paused}
      aria-label={paused ? t('common.play') : t('common.pause')}
    >
      {paused ? <HiPlay size={16} /> : <HiPause size={16} />}
    </button>
  )
}
