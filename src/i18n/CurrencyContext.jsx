import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { useLanguage } from './LanguageContext'
import { CURRENCIES, formatPrice } from '../utils/currency'

const CurrencyContext = createContext(null)
const STORAGE_KEY = 'vpu-currency'

// Remembering the visitor's choice is a functional preference, not tracking;
// it never leaves the browser (see the Cookie Policy). Storage can be
// unavailable (private mode, blocked site data), so every access is guarded.
function readStoredCurrency() {
  try {
    const value = window.localStorage.getItem(STORAGE_KEY)
    return CURRENCIES.includes(value) ? value : null
  } catch {
    return null
  }
}

export function CurrencyProvider({ children }) {
  const { language, locale } = useLanguage()
  const [chosen, setChosen] = useState(readStoredCurrency)
  // Until the visitor picks one, English pages show dollars and Spanish
  // pages show colones.
  const currency = chosen ?? (language === 'es' ? 'CRC' : 'USD')

  const setCurrency = useCallback((next) => {
    if (!CURRENCIES.includes(next)) return
    setChosen(next)
    try {
      window.localStorage.setItem(STORAGE_KEY, next)
    } catch {
      // Preference just won't persist across visits.
    }
  }, [])

  const value = useMemo(() => ({
    currency,
    setCurrency,
    formatPrice: (usdAmount) => formatPrice(usdAmount, currency, locale),
  }), [currency, setCurrency, locale])

  return <CurrencyContext.Provider value={value}>{children}</CurrencyContext.Provider>
}

export function useCurrency() {
  const value = useContext(CurrencyContext)
  if (!value) throw new Error('useCurrency must be used within CurrencyProvider')
  return value
}
