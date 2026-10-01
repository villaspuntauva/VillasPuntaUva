import { fetchIcalRanges, getEnvConfig } from '../lib/airbnbIcal.js'

// Live Airbnb availability. Vercel's CDN caches the response for 10 minutes
// (and serves the stale copy while refreshing), so Airbnb is hit at most a
// few times an hour no matter how much traffic the site gets. Suites whose
// feed fails are left out, and the client keeps its bundled snapshot for them.
export default async function handler(req, res) {
  const config = getEnvConfig()
  const output = {}

  await Promise.all(
    Object.entries(config).map(async ([slug, url]) => {
      try {
        output[slug] = await fetchIcalRanges(url, { timeoutMs: 8000 })
      } catch (error) {
        console.error(`${slug}: failed to fetch iCal (${error.message})`)
      }
    }),
  )

  output.generatedAt = new Date().toISOString()

  res.setHeader('Cache-Control', 'public, max-age=0, s-maxage=600, stale-while-revalidate=3600')
  res.status(200).json(output)
}
