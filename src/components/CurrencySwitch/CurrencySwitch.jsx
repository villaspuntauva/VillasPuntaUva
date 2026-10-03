import styles from './CurrencySwitch.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import { useCurrency } from '../../i18n/CurrencyContext'
import { CURRENCIES } from '../../utils/currency'

const SYMBOLS = { USD: '$', CRC: '₡' }

export default function CurrencySwitch({ className = '' }) {
  const { t } = useLanguage()
  const { currency, setCurrency } = useCurrency()

  return (
    <div className={`${styles.switch} ${className}`} role="group" aria-label={t('common.currency')}>
      {CURRENCIES.map((option) => (
        <button
          key={option}
          type="button"
          className={currency === option ? styles.active : ''}
          onClick={() => setCurrency(option)}
          aria-pressed={currency === option}
          aria-label={option === 'USD' ? t('common.currencyUsd') : t('common.currencyCrc')}
        >
          {SYMBOLS[option]} {option}
        </button>
      ))}
    </div>
  )
}
