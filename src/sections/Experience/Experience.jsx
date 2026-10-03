import { useMemo } from 'react'
import styles from './Experience.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import PhotoCarousel from '../../components/PhotoCarousel/PhotoCarousel'

// Each lifestyle photo hand-tagged to match what's actually pictured.
const PHOTO_CATEGORIES = {
  1: 'solos',
  2: 'solos',
  3: 'solos',
  4: 'solos',
  5: 'nomads',
  6: 'nomads',
  7: 'solos',
  8: 'solos',
  9: 'families',
  10: 'families',
  11: 'families',
  12: 'families',
  13: 'solos',
  14: 'solos',
  15: 'friends',
  16: 'solos',
  17: 'friends',
  18: 'solos',
  20: 'friends',
  21: 'solos',
  22: 'couples',
  23: 'couples',
  24: 'friends',
  25: 'solos',
  26: 'solos',
  27: 'friends',
  28: 'friends',
  29: 'friends',
  30: 'friends',
  31: 'solos',
  32: 'families',
  33: 'families',
  34: 'families',
  35: 'couples',
}

// Describes what each lifestyle photo actually shows, for alt text.
const PHOTO_ALTS = {
  1: { en: 'Woman with a book and a plate of fruit on a villa balcony', es: 'Mujer con un libro y un plato de fruta en el balcón de una villa' },
  2: { en: 'Woman relaxing in a freestanding bathtub by a window', es: 'Mujer relajándose en una bañera independiente junto a una ventana' },
  3: { en: 'Woman stretching on a balcony overlooking the jungle', es: 'Mujer estirándose en un balcón con vista a la selva' },
  4: { en: 'Woman with a drink in the villa kitchen by the window', es: 'Mujer con una bebida en la cocina de la villa junto a la ventana' },
  5: { en: 'Woman working on a laptop at a desk in a villa', es: 'Mujer trabajando en una laptop en un escritorio de la villa' },
  6: { en: 'Woman working on a laptop on the bed', es: 'Mujer trabajando en una laptop sobre la cama' },
  7: { en: 'Woman on a villa balcony framed by palm trees', es: 'Mujer en el balcón de una villa entre palmeras' },
  8: { en: 'Woman in a sun hat walking across a wooden rancho', es: 'Mujer con sombrero caminando por un rancho de madera' },
  9: { en: 'Parents lifting their toddler by a window with jungle views', es: 'Padres levantando a su bebé junto a una ventana con vista a la selva' },
  10: { en: 'Family relaxing together on a sofa', es: 'Familia relajándose junta en un sofá' },
  11: { en: 'Mother and two children walking through the tropical garden with a dog', es: 'Madre y dos niños caminando por el jardín tropical con un perro' },
  12: { en: 'Man splashing in the pool beside the waterfall wall', es: 'Hombre chapoteando en la piscina junto a la pared de cascada' },
  13: { en: 'Woman reading with her feet up on a balcony railing', es: 'Mujer leyendo con los pies sobre la baranda de un balcón' },
  14: { en: 'Woman reading on a sun lounger', es: 'Mujer leyendo en una tumbona' },
  15: { en: 'Two glasses of white wine raised in a toast', es: 'Dos copas de vino blanco en un brindis' },
  16: { en: 'Reading on a lounger next to the pool waterfall', es: 'Leyendo en una tumbona junto a la cascada de la piscina' },
  17: { en: 'Two friends with glasses of wine in the garden', es: 'Dos amigas con copas de vino en el jardín' },
  18: { en: 'Woman in a sun hat sitting on the edge of the pool', es: 'Mujer con sombrero sentada al borde de la piscina' },
  20: { en: 'Three friends arriving with luggage through the garden', es: 'Tres amigos llegando con su equipaje por el jardín' },
  21: { en: 'Woman unpacking a suitcase', es: 'Mujer desempacando una maleta' },
  22: { en: 'Couple laughing at a table on the balcony', es: 'Pareja riendo en una mesa del balcón' },
  23: { en: 'Couple with coffee mugs at the balcony railing', es: 'Pareja con tazas de café en la baranda del balcón' },
  24: { en: 'Two friends stretching beside a stand of bamboo', es: 'Dos amigas estirándose junto a un bambú' },
  25: { en: 'Woman lifting weights at the gym', es: 'Mujer levantando pesas en el gimnasio' },
  26: { en: 'Man training with weights at the gym', es: 'Hombre entrenando con pesas en el gimnasio' },
  27: { en: 'Friends playing cards on the patio', es: 'Amigas jugando cartas en la terraza' },
  28: { en: 'Friends relaxing while one grills on the barbecue', es: 'Amigos relajándose mientras uno cocina en la parrilla' },
  29: { en: 'Two friends sharing wine on an outdoor sofa', es: 'Dos amigas compartiendo vino en un sofá exterior' },
  30: { en: 'Friends chatting on the patio', es: 'Amigos conversando en la terraza' },
  31: { en: 'Woman in a patterned dress walking through the garden', es: 'Mujer con vestido estampado caminando por el jardín' },
  32: { en: 'Three children playing on a bed', es: 'Tres niños jugando sobre una cama' },
  33: { en: 'Parents holding their child on a balcony and pointing at the jungle', es: 'Padres cargando a su hija en un balcón y señalando la selva' },
  34: { en: 'Two children relaxing in a hammock on a wooden deck', es: 'Dos niños descansando en una hamaca sobre una terraza de madera' },
  35: { en: 'Couple relaxing on lounge chairs in the garden', es: 'Pareja descansando en tumbonas en el jardín' },
}

function shuffle(array) {
  const result = [...array]
  for (let i = result.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[result[i], result[j]] = [result[j], result[i]]
  }
  return result
}

export default function Experience() {
  const { language, t } = useLanguage()

  const photoOrder = useMemo(() => {
    const base = Object.keys(PHOTO_CATEGORIES).map(Number)
    return shuffle(base)
  }, [])

  const photos = photoOrder.map((id) => ({
    id,
    src: `/images/about/lifestyle/experience${id}.webp`,
    alt: PHOTO_ALTS[id][language === 'es' ? 'es' : 'en'],
  }))

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{t('home.experienceHeading')}</h2>
        <p className={styles.subheading}>{t('home.experienceText')}</p>

        <PhotoCarousel photos={photos} />
      </div>
    </section>
  )
}
