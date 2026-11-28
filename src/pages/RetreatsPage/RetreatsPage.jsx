import { Link } from 'react-router-dom'
import { FaWhatsapp } from 'react-icons/fa'
import styles from './RetreatsPage.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import SEO, { SITE_URL } from '../../components/SEO/SEO'
import { business } from '../../data/business'
import { suites } from '../../data/suites'

const IMG = '/images/retreats'

// Capacity figures come from the villa data so they stay correct if a villa
// changes. The five Punta Uva villas share the pool, gym, and yoga platform;
// Villa Cacha and Villa Carey are at the sister property a short walk away.
const totalVillas = suites.length
const totalBedrooms = suites.reduce((sum, suite) => sum + suite.bedrooms, 0)
const totalSleeps = suites.reduce((sum, suite) => sum + suite.sleeps, 0)

const content = {
  en: {
    seoTitle: `Yoga Retreat Venue in Punta Uva, Costa Rica | ${totalVillas} Villas`,
    seoDescription: `Host a yoga, wellness, or group retreat in Punta Uva, Costa Rica: ${totalVillas} private villas, a yoga platform, gym, infinity pool, and a beach five minutes away.`,
    heroEyebrow: 'Retreats',
    heroTitle: 'Retreats on the Caribbean coast',
    heroText: 'Yoga, wellness, and group retreats in private jungle villas in quiet Punta Uva, a five-minute walk from the beach.',
    heroCta: 'Plan your retreat',
    introEyebrow: 'Gather here',
    introTitle: 'A place for your group to slow down together',
    introText: [
      'Villas Punta Uva brings everything a retreat needs into one quiet corner of Costa Rica’s southern Caribbean: private villas for rest, an open-air platform for practice, a shared infinity pool, and long tables made for meals together.',
      'Hold your sessions on the yoga platform, spend free time at the pool or the beach, and get together for meals in the villas. Your group can spend the day together, and everyone still has a private room to go back to at night.',
    ],
    stats: [
      { value: totalVillas, label: 'Private villas' },
      { value: totalBedrooms, label: 'Bedrooms' },
      { value: totalSleeps, label: 'Guests in base capacity' },
      { value: '5 min', label: 'Walk to the beach' },
    ],
    locationEyebrow: 'The location',
    locationTitle: 'Quiet Punta Uva, a short walk from the sand',
    locationText: [
      'The villas sit in Punta Uva, a quiet, green neighbourhood on Costa Rica’s southern Caribbean coast, away from the hustle and bustle of Puerto Viejo town. Days here follow the rhythm of the jungle and the sea, not traffic and nightlife, which is exactly the calm a retreat needs.',
      'Playa Punta Uva is about a five-minute walk away and was ranked #41 on The World’s 50 Best Beaches list for 2025. Morning swims, sunset walks, and free afternoons on the sand fit easily into every day.',
    ],
    locationPoints: [
      'A peaceful neighbourhood surrounded by jungle',
      'Five-minute walk to Punta Uva beach',
      'Puerto Viejo’s restaurants and tours a short drive away',
    ],
    locationImageAlt: 'Aerial view of turquoise water and a jungle-lined beach at Punta Uva',
    spacesEyebrow: 'On the property',
    spacesTitle: 'Spaces for practice, rest, and gathering',
    spaces: [
      { title: 'Yoga platform & gym', text: 'A covered, open-air deck surrounded by bamboo and gardens, with room for mats as well as weights, kettlebells, and training gear.', image: '/images/ammenities%20yoga/platform2.webp', alt: 'Two guests stretching on the bamboo-lined yoga platform' },
      { title: 'Shared infinity pool', text: 'A two-level pool set in tropical gardens, shared by the Punta Uva villas, for slow afternoons between sessions.', image: '/images/infinity%20pool/drone-3.webp', alt: 'Aerial view of the two-level infinity pool surrounded by tropical plants' },
      { title: 'Long tables & chef-ready kitchens', text: 'Big kitchens and long dining tables for group meals, from fresh fruit breakfasts to family-style lunches with views of the jungle.', image: `${IMG}/retreat-23.webp`, alt: 'Retreat guests sharing lunch at a long table beside windows looking out on the jungle' },
    ],
    foodEyebrow: 'Around the table',
    foodTitle: 'Food that brings everyone together',
    foodText: [
      'Meals are often the heart of a retreat. The villas’ large, fully equipped kitchens have room for your group to cook together, and the long tables seat everyone at once.',
      'Think tropical fruit plates in the morning, colourful bowls and salads at lunch, and fresh juices served straight from the counter. If you’d rather have someone else do the cooking, we’re happy to share contacts for local private chefs and caterers you can book directly.',
    ],
    galleryEyebrow: 'Retreat moments',
    galleryTitle: 'A taste of a retreat at Villas Punta Uva',
    stayEyebrow: 'Where your group stays',
    stayTitle: 'Mix and match villas to fit your group',
    stayText: `Book a single villa for an intimate circle, or the whole property for up to ${totalSleeps} guests. Villa Mariposa and Villa Presidente each have five bedrooms with their own bathroom, so larger groups can share a home without sharing a bathroom.`,
    stayLink: 'See all villas',
    ctaTitle: 'Let’s plan your retreat',
    ctaText: 'Tell us your dates, group size, and the kind of retreat you have in mind. We’ll help you choose the right villas and put together a quote.',
    ctaWhatsapp: 'Message us on WhatsApp',
    ctaEmail: 'Email us',
  },
  es: {
    seoTitle: 'Retiros en Costa Rica | Sede para Retiros de Yoga y Bienestar',
    seoDescription: `Organice un retiro de yoga, bienestar o grupal en Punta Uva, Costa Rica: ${totalVillas} villas privadas, plataforma de yoga, gimnasio, piscina infinita y playa a cinco minutos.`,
    heroEyebrow: 'Retiros',
    heroTitle: 'Retiros en la costa caribeña',
    heroText: 'Retiros de yoga, bienestar y grupos en villas privadas en la selva, en el tranquilo Punta Uva, a cinco minutos a pie de la playa.',
    heroCta: 'Planifique su retiro',
    introEyebrow: 'Reúnanse aquí',
    introTitle: 'Un lugar para que su grupo baje el ritmo en conjunto',
    introText: [
      'Villas Punta Uva reúne todo lo que un retiro necesita en un rincón tranquilo del Caribe sur de Costa Rica: villas privadas para descansar, una plataforma al aire libre para practicar, una piscina infinita compartida y mesas largas pensadas para comer juntos.',
      'Haga sus sesiones en la plataforma de yoga, pase el tiempo libre en la piscina o en la playa y reúnanse para comer en las villas. Su grupo puede compartir el día y cada persona tiene su propia habitación para descansar en la noche.',
    ],
    stats: [
      { value: totalVillas, label: 'Villas privadas' },
      { value: totalBedrooms, label: 'Habitaciones' },
      { value: totalSleeps, label: 'Huéspedes en capacidad base' },
      { value: '5 min', label: 'A pie de la playa' },
    ],
    locationEyebrow: 'La ubicación',
    locationTitle: 'El tranquilo Punta Uva, a pasos de la arena',
    locationText: [
      'Las villas están en Punta Uva, un barrio tranquilo y verde en la costa del Caribe sur de Costa Rica, lejos del ajetreo del pueblo de Puerto Viejo. Aquí los días siguen el ritmo de la selva y el mar, no del tráfico ni de la vida nocturna: justo la calma que necesita un retiro.',
      'La playa Punta Uva está a unos cinco minutos a pie y ocupó el puesto #41 en la lista The World’s 50 Best Beaches de 2025. Nadar por la mañana, caminar al atardecer y pasar tardes libres en la arena encaja fácilmente en cada día.',
    ],
    locationPoints: [
      'Un barrio tranquilo rodeado de selva',
      'A cinco minutos a pie de la playa Punta Uva',
      'Restaurantes y tours de Puerto Viejo a poca distancia en carro',
    ],
    locationImageAlt: 'Vista aérea de agua turquesa y una playa rodeada de selva en Punta Uva',
    spacesEyebrow: 'En la propiedad',
    spacesTitle: 'Espacios para practicar, descansar y reunirse',
    spaces: [
      { title: 'Plataforma de yoga y gimnasio', text: 'Una terraza techada al aire libre rodeada de bambú y jardines, con espacio para mats y también pesas, kettlebells y equipo de entrenamiento.', image: '/images/ammenities%20yoga/platform2.webp', alt: 'Dos huéspedes estirándose en la plataforma de yoga rodeada de bambú' },
      { title: 'Piscina infinita compartida', text: 'Una piscina de dos niveles entre jardines tropicales, compartida por las villas de Punta Uva, para tardes tranquilas entre sesiones.', image: '/images/infinity%20pool/drone-3.webp', alt: 'Vista aérea de la piscina infinita de dos niveles rodeada de plantas tropicales' },
      { title: 'Mesas largas y cocinas equipadas', text: 'Cocinas amplias y mesas de comedor largas para comidas en grupo, desde desayunos de fruta fresca hasta almuerzos familiares con vista a la selva.', image: `${IMG}/retreat-23.webp`, alt: 'Huéspedes de un retiro almorzando en una mesa larga junto a ventanales con vista a la selva' },
    ],
    foodEyebrow: 'Alrededor de la mesa',
    foodTitle: 'Comida que une a todos',
    foodText: [
      'Las comidas suelen ser el corazón de un retiro. Las cocinas amplias y completamente equipadas de las villas tienen espacio para que su grupo cocine en conjunto, y las mesas largas reciben a todos a la vez.',
      'Platos de fruta tropical por la mañana, tazones y ensaladas coloridas al almuerzo y jugos frescos servidos directamente en la barra. Si prefiere que otra persona se encargue de cocinar, con gusto le compartimos contactos de chefs privados y servicios de catering locales que puede contratar directamente.',
    ],
    galleryEyebrow: 'Momentos de retiro',
    galleryTitle: 'Un vistazo a un retiro en Villas Punta Uva',
    stayEyebrow: 'Dónde se hospeda su grupo',
    stayTitle: 'Combine villas según su grupo',
    stayText: `Reserve una sola villa para un círculo íntimo, o toda la propiedad para hasta ${totalSleeps} huéspedes. Villa Mariposa y Villa Presidente tienen cinco habitaciones, cada una con su propio baño, para que los grupos grandes compartan casa sin compartir baño.`,
    stayLink: 'Ver todas las villas',
    ctaTitle: 'Planifiquemos su retiro',
    ctaText: 'Cuéntenos sus fechas, el tamaño de su grupo y el tipo de retiro que imagina. Le ayudaremos a elegir las villas adecuadas y a preparar una cotización.',
    ctaWhatsapp: 'Escríbanos por WhatsApp',
    ctaEmail: 'Envíenos un correo',
  },
}

const gallery = [
  { src: `${IMG}/retreat-16.webp`, alt: 'Bowls of salad, grains, and roasted vegetables on a long wooden table', altEs: 'Tazones de ensalada, granos y vegetales asados en una mesa larga de madera' },
  { src: `${IMG}/retreat-14.webp`, alt: 'A chef plating fruit and pancake breakfasts in a villa kitchen', altEs: 'Un chef sirviendo desayunos de fruta y panqueques en la cocina de una villa' },
  { src: `${IMG}/retreat-1.webp`, alt: 'A glass drink dispenser surrounded by tropical flowers and fresh fruit', altEs: 'Un dispensador de bebidas rodeado de flores tropicales y fruta fresca' },
  { src: `${IMG}/retreat-4.webp`, alt: 'Retreat guests sharing a meal around a long table in a villa', altEs: 'Huéspedes de un retiro compartiendo una comida en una mesa larga de una villa' },
  { src: `${IMG}/retreat-8.webp`, alt: 'Honey being poured over a bowl of granola and fruit', altEs: 'Miel vertida sobre un tazón de granola y fruta' },
  { src: `${IMG}/retreat-5.webp`, alt: 'A cook slicing fresh fruit in a bright villa kitchen', altEs: 'Una cocinera cortando fruta fresca en una cocina luminosa' },
  { src: `${IMG}/retreat-24.webp`, alt: 'Two retreat guests sharing a warm hug in a villa', altEs: 'Dos huéspedes de un retiro compartiendo un abrazo en una villa' },
  { src: `${IMG}/retreat-10.webp`, alt: 'Breakfast plates of watermelon, mango, and pancakes', altEs: 'Platos de desayuno con sandía, mango y panqueques' },
  { src: `${IMG}/retreat-18.webp`, alt: 'A long table set for lunch with the ocean in the background', altEs: 'Una mesa larga lista para el almuerzo con el mar de fondo' },
]

export default function RetreatsPage() {
  const { language } = useLanguage()
  const spanish = language === 'es'
  const c = content[language]

  return (
    <div className={styles.page}>
      <SEO
        title={c.seoTitle}
        description={c.seoDescription}
        path="/retreats"
        image={`${SITE_URL}${IMG}/retreat-23.webp`}
      />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>{c.heroEyebrow}</p>
          <h1>{c.heroTitle}</h1>
          <p className={styles.heroText}>{c.heroText}</p>
          <a href="#plan" className={styles.heroButton}>{c.heroCta}</a>
        </div>
      </section>

      <section className={styles.intro}>
        <div className={styles.introText}>
          <p className={styles.eyebrow}>{c.introEyebrow}</p>
          <h2>{c.introTitle}</h2>
          {c.introText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
        <img
          className={styles.introImage}
          src={`${IMG}/retreat-22.webp`}
          alt={spanish ? 'Mesa larga de almuerzo junto a la playa con tazones de comida fresca' : 'A beachside lunch table set with bowls of fresh food'}
          loading="lazy"
        />
      </section>

      <section className={styles.stats} aria-label={spanish ? 'La propiedad en cifras' : 'The property at a glance'}>
        <dl className={styles.statsInner}>
          {c.stats.map((stat) => (
            <div key={stat.label} className={styles.stat}>
              <dt>{stat.label}</dt>
              <dd>{stat.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={styles.spaces}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{c.spacesEyebrow}</p>
          <h2>{c.spacesTitle}</h2>
        </div>
        <div className={styles.spaceGrid}>
          {c.spaces.map((space) => (
            <article key={space.title} className={styles.spaceCard}>
              <img src={space.image} alt={space.alt} loading="lazy" />
              <div className={styles.spaceBody}>
                <h3>{space.title}</h3>
                <p>{space.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.location}>
        <img
          className={styles.locationImage}
          src="/images/beach/arrecife-punta-uva-7.webp"
          alt={c.locationImageAlt}
          loading="lazy"
        />
        <div className={styles.locationText}>
          <p className={styles.eyebrow}>{c.locationEyebrow}</p>
          <h2>{c.locationTitle}</h2>
          {c.locationText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          <ul className={styles.locationPoints}>
            {c.locationPoints.map((point) => <li key={point}>{point}</li>)}
          </ul>
        </div>
      </section>

      <section className={styles.food}>
        <div className={styles.foodImages}>
          <img src={`${IMG}/retreat-6.webp`} alt={spanish ? 'Una cocinera preparando fruta fresca entre flores tropicales' : 'A cook preparing fresh fruit framed by tropical flowers'} loading="lazy" />
          <img src={`${IMG}/retreat-15.webp`} alt={spanish ? 'Platos de desayuno con fruta servidos en una mesa larga' : 'Fruit breakfast plates lined up on a long table'} loading="lazy" />
        </div>
        <div className={styles.foodText}>
          <p className={styles.eyebrow}>{c.foodEyebrow}</p>
          <h2>{c.foodTitle}</h2>
          {c.foodText.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>
      </section>

      <section className={styles.gallery}>
        <div className={styles.sectionHeader}>
          <p className={styles.eyebrow}>{c.galleryEyebrow}</p>
          <h2>{c.galleryTitle}</h2>
        </div>
        <div className={styles.galleryGrid}>
          {gallery.map((photo) => (
            <img key={photo.src} src={photo.src} alt={spanish ? photo.altEs : photo.alt} loading="lazy" />
          ))}
        </div>
      </section>

      <section className={styles.stay}>
        <div className={styles.stayInner}>
          <p className={styles.eyebrow}>{c.stayEyebrow}</p>
          <h2>{c.stayTitle}</h2>
          <p>{c.stayText}</p>
          <Link to={spanish ? '/es/suites' : '/suites'} className={styles.textLink}>{c.stayLink} →</Link>
        </div>
      </section>

      <section id="plan" className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2>{c.ctaTitle}</h2>
          <p>{c.ctaText}</p>
          <div className={styles.ctaButtons}>
            <a href={business.whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.ctaPrimary}>
              <FaWhatsapp aria-hidden="true" /> {c.ctaWhatsapp}
            </a>
            <a href={`mailto:${business.email}`} className={styles.ctaSecondary}>{c.ctaEmail}</a>
          </div>
        </div>
      </section>
    </div>
  )
}
