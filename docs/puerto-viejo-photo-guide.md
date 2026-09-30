# Discover Puerto Viejo: photo guide

Shot list and file names for the photos on the Discover Puerto Viejo page at `/puerto-viejo-costa-rica`.

## How to deliver files

- **Format:** `.webp`, 80–85% quality. Landscape shots should be about 2400px wide. Portrait and square shots should be about 1600px on the long side.
- **Naming:** lowercase words joined by hyphens, and the name describes what's in the photo. Use `rambutan-puerto-viejo-costa-rica.webp`, not `IMG_4837.webp`.
- **Folder:** put each file in the matching folder under `public/images/puerto-viejo/`, using the file name listed below.
- **Accuracy:** only use a place name when the photo was taken there. A Playa Cocles photo can't stand in for Playa Negra.

Each photo is listed in `images` at the top of `src/data/puertoViejo.js`. When a photo arrives, replace that slot's current path or `null` with the new path. Any slot left as `null` shows the "Photo coming soon" placeholder.

## Shot list

| Page section | Slot | Orientation | Suggested file name | What to shoot |
|---|---|---|---|---|
| Hero | `hero` | Landscape, cinematic | `hero/puerto-viejo-caribbean-coast-costa-rica.webp` | Atmospheric, not a postcard: early light, the coast road, or the town waking up |
| 01 Culture | `culture` | Portrait 4:5 | `culture/afro-caribbean-architecture-puerto-viejo.webp` | Colorful wooden Caribbean building, people, daily life |
| 01 Culture | `cultureDetail1` | Landscape 4:3 | `town/bicycles-street-life-puerto-viejo.webp` | Bicycles, street detail |
| 01 Culture | `cultureDetail2` | Landscape 4:3 | `culture/calypso-music-puerto-viejo.webp` | Music, a local business, or people talking |
| 02 Food | `food` | Portrait 4:5 | `food/rice-and-beans-caribbean-food-puerto-viejo.webp` | A Caribbean plate: rice and beans, rondón or patí |
| 02 Fruits | `fruits.*` (17 slots) | Square crop | `fruits/<fruit>-puerto-viejo-costa-rica.webp` | **Done.** The full shoot is in `fruits/` as an album: each fruit's best photo has the plain name and is used on the page, and extra shots are numbered `-2`, `-3`, and so on. Group shots are named `tropical-fruit-display-*`, `mixed-tropical-fruit-*` and `cut-tropical-fruit-*`. Rename `unidentified-fruit-*` once you know what it is |
| 03 Beaches | `beachesFeature` | Wide landscape | `beaches/playa-punta-uva-caribbean-coast-costa-rica.webp` | The strongest beach photo of the whole shoot |
| 03 Beaches | `beaches.playaNegra` | Portrait 3:4 | `beaches/playa-negra-puerto-viejo-costa-rica.webp` | Playa Negra's dark sand |
| 03 Beaches | `beaches.cocles` | Portrait 3:4 | `beaches/playa-cocles-surf-puerto-viejo.webp` | Surf at Playa Cocles |
| 03 Beaches | `beaches.chiquita` | Portrait 3:4 | `beaches/playa-chiquita-puerto-viejo-costa-rica.webp` | Playa Chiquita, tide pools |
| 03 Beaches | `beaches.puntaUva` | Portrait 3:4 | `beaches/punta-uva-beach-costa-rica.webp` | Punta Uva's turquoise water |
| 03 Beaches | `beaches.manzanillo` | Portrait 3:4 | `beaches/manzanillo-beach-costa-rica.webp` | Manzanillo, end of the road |
| 04 Wildlife | `jungle` | Portrait or tall | `jungle/jungle-canopy-punta-uva-costa-rica.webp` | Jungle meeting the sea, canopy |
| 04 Wildlife | `wildlife.sloths` | Landscape 3:2 | `wildlife/sloth-jungle-punta-uva-costa-rica.webp` | Sloth |
| 04 Wildlife | `wildlife.howlers` | Landscape 3:2 | `wildlife/howler-monkey-puerto-viejo-costa-rica.webp` | Howler monkey |
| 04 Wildlife | `wildlife.toucans` | Landscape 3:2 | `wildlife/toucan-puerto-viejo-costa-rica.webp` | Toucan |
| 04 Wildlife | `wildlife.frogs` | Landscape 3:2 | `wildlife/strawberry-poison-dart-frog-puerto-viejo.webp` | Strawberry poison dart frog ("blue jeans") |
| 04 Wildlife | `wildlife.morpho` | Landscape 3:2 | `wildlife/blue-morpho-butterfly-costa-rica.webp` | Blue morpho butterfly |
| 04 Wildlife | `wildlife.macaws` | Landscape 3:2 | `wildlife/great-green-macaw-manzanillo-costa-rica.webp` | Great green macaw |
| 05 Long stays | `living` | Wide landscape | `lifestyle/remote-work-jungle-villa-punta-uva.webp` | Daily life: working, cycling, a market run. Keep one side calm for the text overlay |
| Closing | `stay` | Wide landscape | `beaches/punta-uva-aerial-costa-rica.webp` | Aerial of Punta Uva with the jungle |

## Original files

Keep full-size originals (for example `fruits/Fruits FINAL/`) out of git. That folder is listed in `.gitignore`. Only the resized `.webp` files are published.

## Text to check before publishing

A local should check these parts of `src/data/puertoViejo.js` in both languages:

- **Chapter 01 (culture):** the history and language paragraphs. Ideally someone from the community rewrites them in their own words.
- **Chapter 02 (food):** dish names and descriptions, and the local fruit names.
- **Chapter 05 (long stays):** internet, groceries, healthcare and weather. These change over time, so review them every few months.
