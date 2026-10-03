import { Link } from 'react-router-dom'
import styles from './LegalPage.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import SEO from '../../components/SEO/SEO'
import { legalContent, legalLastUpdated, legalPages } from '../../data/legal'

export default function LegalPage({ page }) {
  const { language, locale, localizePath } = useLanguage()
  const content = legalContent[language]
  const { title, intro, seoDescription, sections } = content.pages[page]
  const path = legalPages.find((item) => item.key === page).path
  const updated = new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(legalLastUpdated))

  return (
    <div className={styles.page}>
      <SEO title={`${title} | Villas Punta Uva`} description={seoDescription} path={path} />
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>{title}</h1>
          <p className={styles.updated}>
            {content.lastUpdated}: <time dateTime={legalLastUpdated}>{updated}</time>
          </p>
        </div>
      </section>

      <article className={styles.body}>
        <p className={styles.intro}>{intro}</p>

        {sections.map((section) => (
          <section key={section.heading} className={styles.section}>
            <h2>{section.heading}</h2>
            {section.body.map((block, index) =>
              typeof block === 'string' ? (
                <p key={index}>{block}</p>
              ) : (
                <ul key={index}>
                  {block.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ),
            )}
          </section>
        ))}

        <nav className={styles.related} aria-label={content.related}>
          <h2>{content.related}</h2>
          <ul>
            {legalPages
              .filter((item) => item.key !== page)
              .map((item) => (
                <li key={item.key}>
                  <Link to={localizePath(item.path)}>{content.pages[item.key].title}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </article>
    </div>
  )
}
