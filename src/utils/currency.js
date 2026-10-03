// All villa rates and fees are maintained in USD in src/data/suites.js.
// Visitors can view them in US dollars or in Costa Rican colones, converted
// at this fixed rate (see CurrencyContext).
export const USD_TO_CRC_RATE = 500

export const CURRENCIES = ['USD', 'CRC']

export function usdToColones(usdAmount) {
  return usdAmount * USD_TO_CRC_RATE
}

export function formatColones(usdAmount, locale = 'en-US') {
  return `₡${new Intl.NumberFormat(locale, { maximumFractionDigits: 0 }).format(usdToColones(usdAmount))}`
}

// "$1,234" in English; "US$1 234" in Spanish, where a bare "$" is ambiguous.
// Cents are shown only when the amount isn't a whole dollar (e.g. $13.50).
export function formatDollars(usdAmount, locale = 'en-US') {
  const fractionDigits = Number.isInteger(usdAmount) ? 0 : 2
  const number = new Intl.NumberFormat(locale, {
    minimumFractionDigits: fractionDigits,
    maximumFractionDigits: fractionDigits,
  }).format(usdAmount)
  return `${locale.startsWith('es') ? 'US$' : '$'}${number}`
}

export function formatPrice(usdAmount, currency, locale = 'en-US') {
  return currency === 'USD' ? formatDollars(usdAmount, locale) : formatColones(usdAmount, locale)
}

// Both currencies at once, for static text such as FAQ answers.
export function formatBoth(usdAmount, locale = 'en-US') {
  return `${formatColones(usdAmount, locale)} (${formatDollars(usdAmount, locale).replace(/^\$/, 'US$')})`
}
