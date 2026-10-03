import { HiArrowUp } from 'react-icons/hi'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import styles from './ScrollToTop.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

export default function ScrollToTop() {
  const { t } = useLanguage()
  const scrollY = useScrollPosition()
  const visible = scrollY > 300

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      type="button"
      onClick={handleClick}
      aria-label={t('common.scrollTop')}
      aria-hidden={!visible}
      tabIndex={visible ? 0 : -1}
    >
      <HiArrowUp size={22} />
    </button>
  )
}
