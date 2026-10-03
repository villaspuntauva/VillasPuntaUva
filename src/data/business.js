// Single source for the business identity shown in the footer, contact page,
// and legal pages.

export const business = {
  tradeName: 'Villas Punta Uva',
  legalName: 'Peter Tang',
  // Optional. Leave empty to keep the ID number off the website; if set, the
  // legal pages and footer show it after the legal name.
  legalId: '',
  address: 'Punta Uva, Puerto Viejo de Talamanca, Limón, Costa Rica',
  phone: '+506 6145 9916',
  phoneHref: 'tel:+50661459916',
  whatsappHref: 'https://wa.me/50661459916',
  email: 'villaspuntauva@gmail.com',
  website: 'https://www.villaspuntauva.com',
}

// Date the legal pages were last revised. Update whenever their text changes.
export const LEGAL_LAST_UPDATED = '2026-10-03'

// "Peter Tang" or, when an ID is set, "Peter Tang (identification 1-2345-6789)".
export function legalIdentity(idLabel) {
  return business.legalId ? `${business.legalName} (${idLabel} ${business.legalId})` : business.legalName
}
