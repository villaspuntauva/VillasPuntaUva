import { Link } from 'react-router-dom'
import { LuArrowDown, LuArrowRight } from 'react-icons/lu'
import styles from './PuertoViejoPage.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import SEO, { SITE_URL } from '../../components/SEO/SEO'
import { images, puertoViejoContent } from '../../data/puertoViejo'

const PAGE_PATH = '/puerto-viejo-costa-rica'

function fill(template, name) {
  return template.replace('{{name}}', name)
}

// Renders a real photo when the slot has one, otherwise the branded
// placeholder so missing shots never show a mislabeled stand-in.
function Photo({ src, alt, className, placeholderLabel, loading = 'lazy' }) {
  if (!src) {
    return (
      <div className={`${styles.photoPlaceholder} ${className ?? ''}`} role="img" aria-label={alt}>
        <img src="/images/logos/logo-white.png" alt="" className={styles.placeholderMark} />
        <span className={styles.placeholderLabel}>{placeholderLabel}</span>
      </div>
    )
  }

  return <img src={src} alt={alt} className={`${styles.photo} ${className ?? ''}`} loading={loading} decoding="async" />
}

export default function PuertoViejoPage() {
  const { language, localizePath } = useLanguage()
  const c = puertoViejoContent[language]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: 'Puerto Viejo de Talamanca',
    description: c.seo.description,
    url: `${SITE_URL}${localizePath(PAGE_PATH)}`,
    image: `${SITE_URL}${images.hero}`,
    touristType: ['Beach', 'Nature', 'Culture', 'Long stays'],
    containedInPlace: { '@type': 'AdministrativeArea', name: 'Limón, Costa Rica' },
    includesAttraction: c.beaches.list.map((beach) => ({ '@type': 'Beach', name: beach.name })),
  }

  return (
    <div className={styles.page}>
      <SEO
        title={c.seo.title}
        description={c.seo.description}
        path={PAGE_PATH}
        image={`${SITE_URL}${images.hero}`}
        jsonLd={jsonLd}
      />

      <section className={styles.hero}>
        <img src={images.hero} alt={c.hero.alt} className={styles.heroImage} fetchpriority="high" />
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>{c.hero.eyebrow}</p>
          <h1 className={styles.heroTitle}>{c.hero.title}</h1>
          <p className={styles.heroText}>{c.hero.text}</p>
        </div>
      </section>

      <section className={styles.intro}>
        <p className={styles.introText}>{c.intro.text}</p>
        <p className={styles.introExplore}>
          {c.intro.explore}
          <LuArrowDown size={16} />
        </p>
        <nav className={styles.chapterNav} aria-label={c.intro.explore}>
          {c.chapters.map((chapter, index) => (
            <a key={chapter.id} href={`#${chapter.id}`} className={styles.chapterLink}>
              <span className={styles.chapterNumber}>{String(index + 1).padStart(2, '0')}</span>
              {chapter.label}
            </a>
          ))}
        </nav>
      </section>

      {/* Chapter 01: editorial photo | text */}
      <section id="caribbean-culture" className={styles.culture}>
        <div className={styles.cultureMedia}>
          <Photo src={images.culture} alt={c.culture.alt} className={styles.cultureMain} placeholderLabel={c.photoComing} />
          <div className={styles.cultureDetails}>
            <Photo src={images.cultureDetail1} alt={c.culture.detail1Alt} placeholderLabel={c.photoComing} />
            <Photo src={images.cultureDetail2} alt={c.culture.detail2Alt} placeholderLabel={c.photoComing} />
          </div>
        </div>
        <div className={styles.cultureText}>
          <p className={styles.eyebrow}>{c.culture.eyebrow}</p>
          <h2 className={styles.heading}>{c.culture.title}</h2>
          {c.culture.paragraphs.map((paragraph) => (
            <p key={paragraph} className={styles.bodyText}>{paragraph}</p>
          ))}
          <dl className={styles.detailList}>
            {c.culture.details.map((detail) => (
              <div key={detail.title}>
                <dt>{detail.title}</dt>
                <dd>{detail.text}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Chapter 02: dishes + fruit grid */}
      <section id="food" className={styles.food}>
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{c.food.eyebrow}</p>
            <h2 className={styles.heading}>{c.food.title}</h2>
            <p className={styles.subtitle}>{c.food.subtitle}</p>
          </header>

          <div className={styles.foodSplit}>
            <div>
              <p className={styles.bodyText}>{c.food.text}</p>
              <ul className={styles.dishList}>
                {c.food.dishes.map((dish) => (
                  <li key={dish.name}>
                    <h3>{dish.name}</h3>
                    <p>{dish.text}</p>
                  </li>
                ))}
              </ul>
            </div>
            <Photo src={images.food} alt={c.food.alt} className={styles.foodPhoto} placeholderLabel={c.photoComing} />
          </div>

          <header className={`${styles.sectionHeader} ${styles.subHeader}`}>
            <h3 className={styles.subHeading}>{c.food.fruitsTitle}</h3>
            <p className={styles.bodyText}>{c.food.fruitsText}</p>
          </header>
          <ul className={styles.fruitGrid}>
            {c.food.fruits.map((fruit) => (
              <li key={fruit.key} className={`${styles.fruitCard} ${fruit.featured ? styles.fruitCardFeatured : ''}`}>
                <Photo
                  src={images.fruits[fruit.key]}
                  alt={fruit.alt ?? fill(c.food.fruitAlt, fruit.name)}
                  className={styles.fruitPhoto}
                  placeholderLabel={c.photoComing}
                />
                <div className={styles.fruitBody}>
                  <h4>{fruit.name}</h4>
                  <p className={styles.fruitLocal}>{fruit.local}</p>
                  <p>{fruit.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Chapter 03: large horizontal photo + beach cards */}
      <section id="beaches" className={styles.beaches}>
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{c.beaches.eyebrow}</p>
            <h2 className={styles.heading}>{c.beaches.title}</h2>
          </header>
        </div>
        <figure className={styles.beachFeature}>
          <Photo src={images.beachesFeature} alt={c.beaches.featureAlt} className={styles.beachFeaturePhoto} placeholderLabel={c.photoComing} />
          <figcaption>{c.beaches.featureCaption}</figcaption>
        </figure>
        <div className={styles.container}>
          <p className={`${styles.bodyText} ${styles.centered}`}>{c.beaches.text}</p>
          <ul className={styles.beachGrid}>
            {c.beaches.list.map((beach) => (
              <li key={beach.key} className={`${styles.beachCard} ${beach.featured ? styles.beachCardFeatured : ''}`}>
                <div className={styles.beachPhotoWrap}>
                  <Photo
                    src={images.beaches[beach.key]}
                    alt={`${beach.name}, Puerto Viejo, Costa Rica`}
                    className={styles.beachPhoto}
                    placeholderLabel={c.photoComing}
                  />
                  {beach.featured && <span className={styles.beachBadge}>{c.beaches.ourBeach}</span>}
                </div>
                <h3>{beach.name}</h3>
                <p>{beach.text}</p>
                {beach.featured && (
                  <Link to={localizePath('/suites')} className={styles.inlineLink}>
                    {c.beaches.stayLink}
                    <LuArrowRight size={15} />
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <div className={styles.oceanLife}>
            <h3 className={styles.subHeading}>{c.beaches.lifeTitle}</h3>
            <p className={styles.bodyText}>{c.beaches.lifeText}</p>
            <Link to={localizePath('/suites')} className={styles.primaryBtn}>
              {c.beaches.stayCta}
              <LuArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Chapter 04: jungle intro + small editorial wildlife cards */}
      <section id="wildlife" className={styles.wildlife}>
        <div className={styles.wildlifeIntro}>
          <div className={styles.wildlifeText}>
            <p className={styles.eyebrow}>{c.wildlife.eyebrow}</p>
            <h2 className={styles.heading}>{c.wildlife.title}</h2>
            <p className={styles.bodyText}>{c.wildlife.text}</p>
          </div>
          <Photo src={images.jungle} alt={c.wildlife.jungleAlt} className={styles.junglePhoto} placeholderLabel={c.photoComing} />
        </div>
        <div className={styles.container}>
          <h3 className={`${styles.subHeading} ${styles.centered}`}>{c.wildlife.whoTitle}</h3>
          <ul className={styles.animalGrid}>
            {c.wildlife.animals.map((animal) => (
              <li key={animal.key} className={styles.animalCard}>
                <Photo
                  src={images.wildlife[animal.key]}
                  alt={fill(c.wildlife.animalAlt, animal.name)}
                  className={styles.animalPhoto}
                  placeholderLabel={c.photoComing}
                />
                <h4>{animal.name}</h4>
                <p>{animal.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Chapter 05: full-width photo with overlay + practical notes */}
      <section id="long-stays" className={styles.living}>
        <div className={styles.container}>
          <header className={styles.sectionHeader}>
            <p className={styles.eyebrow}>{c.living.eyebrow}</p>
            <h2 className={styles.heading}>{c.living.title}</h2>
          </header>
        </div>
        <div className={styles.livingBanner}>
          <Photo src={images.living} alt={c.living.alt} className={styles.livingPhoto} placeholderLabel={c.photoComing} />
          <div className={styles.livingOverlay}>
            <h3>{c.living.overlayTitle}</h3>
            <p>{c.living.overlayText}</p>
          </div>
        </div>
        <div className={styles.container}>
          <h3 className={`${styles.subHeading} ${styles.centered}`}>{c.living.considerTitle}</h3>
          <dl className={styles.considerGrid}>
            {c.living.considerations.map((item) => (
              <div key={item.title} className={styles.considerCard}>
                <dt>{item.title}</dt>
                <dd>{item.text}</dd>
              </div>
            ))}
          </dl>
          <p className={styles.note}>
            {c.living.note}{' '}
            <Link to={localizePath('/contact')} className={styles.inlineLink}>
              {c.living.contact}
              <LuArrowRight size={15} />
            </Link>
          </p>
        </div>
      </section>

      {/* Funnel back to the villas */}
      <section className={styles.stay}>
        <Photo src={images.stay} alt={c.stay.alt} className={styles.stayPhoto} placeholderLabel={c.photoComing} />
        <div className={styles.stayContent}>
          <p className={styles.eyebrowLight}>{c.stay.eyebrow}</p>
          <h2 className={styles.stayHeading}>{c.stay.title}</h2>
          <p className={styles.stayText}>{c.stay.text}</p>
          <div className={styles.stayActions}>
            <Link to={localizePath('/suites')} className={styles.primaryBtn}>{c.stay.villas}</Link>
            <Link to={localizePath('/location')} className={styles.ghostBtn}>{c.stay.location}</Link>
          </div>
        </div>
      </section>
    </div>
  )
}
