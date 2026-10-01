import { useSyncExternalStore } from 'react'
import bundledAvailability from './airbnbAvailability.json'

// Starts from the build-time snapshot (scripts/sync-availability.mjs), then
// swaps in live data from /api/availability once it loads. Any suite missing
// from the live response keeps its snapshot ranges.
let availability = bundledAvailability
let liveRequest = null
const listeners = new Set()

export function getAvailability() {
  return availability
}

export function getReservedRanges(slug) {
  return availability[slug] ?? []
}

export function loadLiveAvailability() {
  if (liveRequest || typeof window === 'undefined') return liveRequest

  liveRequest = fetch('/api/availability')
    .then((response) => {
      if (!response.ok) throw new Error(`HTTP ${response.status}`)
      return response.json()
    })
    .then((live) => {
      availability = { ...availability, ...live }
      listeners.forEach((listener) => listener())
    })
    .catch(() => {
      // Keep the bundled snapshot (e.g. local dev, where the API isn't served).
    })

  return liveRequest
}

function subscribe(listener) {
  listeners.add(listener)
  loadLiveAvailability()
  return () => listeners.delete(listener)
}

// Re-renders the caller when live availability arrives; pass the returned
// object as a memo dependency wherever availability is read.
export function useAvailability() {
  return useSyncExternalStore(subscribe, getAvailability, getAvailability)
}
