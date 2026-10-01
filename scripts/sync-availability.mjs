import { readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { envVarName, fetchIcalRanges, getEnvConfig } from '../lib/airbnbIcal.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const CONFIG_PATH = path.join(__dirname, '..', 'airbnb-ical.config.json')
const OUTPUT_PATH = path.join(__dirname, '..', 'src', 'data', 'airbnbAvailability.json')

// Falls back to AIRBNB_ICAL_<SLUG> env vars when no local config file is
// present (e.g. in CI, where the gitignored config isn't checked out).
async function loadConfig() {
  const fileConfig = await readJson(CONFIG_PATH, null)
  return fileConfig ?? getEnvConfig()
}

async function readJson(filePath, fallback) {
  try {
    return JSON.parse(await readFile(filePath, 'utf-8'))
  } catch {
    return fallback
  }
}

async function main() {
  const config = await loadConfig()

  if (Object.keys(config).length === 0) {
    console.error(
      `No iCal URLs found. Either copy airbnb-ical.config.example.json to airbnb-ical.config.json and fill in each villa's iCal export URL, or set AIRBNB_ICAL_<SLUG> environment variables (e.g. ${envVarName('villa-mariposa')}).`,
    )
    process.exitCode = 1
    return
  }

  const existing = await readJson(OUTPUT_PATH, {})
  const output = { ...existing }

  for (const [slug, url] of Object.entries(config)) {
    try {
      const ranges = await fetchIcalRanges(url)
      output[slug] = ranges
      console.log(`${slug}: synced ${ranges.length} reserved date range(s)`)
    } catch (error) {
      console.error(`${slug}: failed to sync (${error.message}) — keeping previous data`)
    }
  }

  output.generatedAt = new Date().toISOString()

  await writeFile(OUTPUT_PATH, JSON.stringify(output, null, 2) + '\n')
  console.log(`Wrote ${path.relative(process.cwd(), OUTPUT_PATH)}`)
}

main()
