// Single source for the business identity shown in the footer, contact page,
// and legal pages. Anything in [BRACKETS] is a placeholder the owner must
// fill in before publishing — see LEGAL_TODO in the legal pages.

export const business = {
  tradeName: 'Villas Punta Uva',
  legalName: '[LEGAL NAME OF OWNER OR COMPANY]',
  legalId: '[CÉDULA FÍSICA OR JURÍDICA NUMBER]',
  address: 'Punta Uva, Puerto Viejo de Talamanca, Limón, Costa Rica',
  phone: '+506 6145 9916',
  phoneHref: 'tel:+50661459916',
  whatsappHref: 'https://wa.me/50661459916',
  email: 'villaspuntauva@gmail.com',
  website: 'https://www.villaspuntauva.com',
}

// Date the legal pages were last revised. Update whenever their text changes.
export const LEGAL_LAST_UPDATED = '2026-10-03'

export const isPlaceholder = (value) => /^\[.*\]$/.test(value)
