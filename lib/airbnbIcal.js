// Shared between scripts/sync-availability.mjs (scheduled snapshot) and
// api/availability.js (live Vercel function).

// Known suite slugs, each read from an AIRBNB_ICAL_<SLUG> env var.
export const KNOWN_SLUGS = [
  'villa-mariposa',
  'villa-tucan',
  'villa-presidente',
  'villa-colibri',
  'villa-angel',
  'villa-cacha',
  'carey-house',
]

export function envVarName(slug) {
  return `AIRBNB_ICAL_${slug.toUpperCase().replace(/-/g, '_')}`
}

export function getEnvConfig(env = process.env) {
  const config = {}
  for (const slug of KNOWN_SLUGS) {
    const value = env[envVarName(slug)]
    if (value) config[slug] = value
  }
  return config
}

function toIsoDate(icalDate) {
  // icalDate is YYYYMMDD
  return `${icalDate.slice(0, 4)}-${icalDate.slice(4, 6)}-${icalDate.slice(6, 8)}`
}

export function parseIcal(text) {
  const ranges = []
  const events = text.split('BEGIN:VEVENT').slice(1)

  for (const event of events) {
    const startMatch = event.match(/DTSTART;VALUE=DATE:(\d{8})/)
    const endMatch = event.match(/DTEND;VALUE=DATE:(\d{8})/)
    if (!startMatch || !endMatch) continue

    ranges.push({
      start: toIsoDate(startMatch[1]),
      end: toIsoDate(endMatch[1]),
    })
  }

  return ranges
}

export async function fetchIcalRanges(url, { timeoutMs } = {}) {
  const response = await fetch(url, timeoutMs ? { signal: AbortSignal.timeout(timeoutMs) } : undefined)
  if (!response.ok) throw new Error(`HTTP ${response.status}`)
  return parseIcal(await response.text())
}
