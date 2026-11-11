import { useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import { Link } from 'react-router-dom'
import styles from './VideoStory.module.css'
import { useLanguage } from '../../i18n/LanguageContext'

const VIDEO_SRC = '/videos/villas-punta-uva-story.mp4'
const POSTER_SRC = '/videos/villas-punta-uva-story-poster.jpg'

export default function VideoStory() {
  const { t, localizePath } = useLanguage()
  const sectionRef = useRef(null)
  const videoRef = useRef(null)
  const [loaded, setLoaded] = useState(false)
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(true)
  const [expanded, setExpanded] = useState(false)
  const modalVideoRef = useRef(null)
  const expandButtonRef = useRef(null)
  const closeButtonRef = useRef(null)

  // Only fetch the video once the section nears the viewport, then play while
  // visible and pause when scrolled away so it never runs off-screen.
  useEffect(() => {
    const section = sectionRef.current
    if (!section || typeof IntersectionObserver === 'undefined') {
      setLoaded(true)
      return undefined
    }
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current
        if (entry.isIntersecting) {
          setLoaded(true)
          if (video && !reduceMotion) video.play().catch(() => {})
        } else if (video && !video.paused) {
          video.pause()
        }
      },
      { rootMargin: '200px 0px', threshold: 0.25 },
    )
    observer.observe(section)
    return () => observer.disconnect()
  }, [])

  // Autoplay on first load once the source is attached.
  useEffect(() => {
    const video = videoRef.current
    if (!loaded || !video) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    video.play().catch(() => {})
  }, [loaded])

  const toggleSound = () => {
    const video = videoRef.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted && video.paused) video.play().catch(() => {})
  }

  const openExpanded = () => {
    const video = videoRef.current
    if (video) video.pause()
    setExpanded(true)
  }

  const closeExpanded = () => {
    const inline = videoRef.current
    const modal = modalVideoRef.current
    if (inline && modal) inline.currentTime = modal.currentTime
    setExpanded(false)
    if (inline) inline.play().catch(() => {})
    expandButtonRef.current?.focus()
  }

  // Enlarged view: pick up where the inline video was, with sound on, lock
  // page scroll, and close on Escape.
  useEffect(() => {
    if (!expanded) return undefined
    const modal = modalVideoRef.current
    const inline = videoRef.current
    if (modal) {
      if (inline) modal.currentTime = inline.currentTime
      modal.muted = false
      modal.play().catch(() => {
        // Browser refused audible playback; fall back to muted.
        modal.muted = true
        modal.play().catch(() => {})
      })
    }
    closeButtonRef.current?.focus()

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e) => {
      if (e.key === 'Escape') closeExpanded()
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [expanded])

  const togglePlay = () => {
    const video = videoRef.current
    if (!video) return
    if (video.paused) video.play().catch(() => {})
    else video.pause()
  }

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className={styles.label}>{t('home.videoLabel')}</span>
          <h2 className={styles.heading}>{t('home.videoHeading')}</h2>
          <p className={styles.text}>{t('home.videoText')}</p>
          <Link to={localizePath('/suites')} className={styles.btn}>
            {t('home.discover')}
          </Link>
        </div>

        <div className={styles.frame}>
          <video
            ref={videoRef}
            className={styles.video}
            src={loaded ? VIDEO_SRC : undefined}
            poster={POSTER_SRC}
            aria-label={t('home.videoAlt')}
            muted
            loop
            playsInline
            preload="none"
            onPlay={() => setPaused(false)}
            onPause={() => setPaused(true)}
            onClick={togglePlay}
          />
          <div className={styles.controls}>
            <button
              ref={expandButtonRef}
              type="button"
              className={styles.control}
              onClick={openExpanded}
              aria-label={t('home.videoExpand')}
            >
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M4 9V4h5M20 9V4h-5M4 15v5h5M20 15v5h-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
              </svg>
            </button>
            <button
              type="button"
              className={styles.control}
              onClick={togglePlay}
              aria-label={paused ? t('home.videoPlay') : t('home.videoPause')}
            >
              {paused ? (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 5v14l11-7z" fill="currentColor" /></svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 5h4v14H7zM13 5h4v14h-4z" fill="currentColor" /></svg>
              )}
            </button>
            <button
              type="button"
              className={styles.control}
              onClick={toggleSound}
              aria-label={muted ? t('home.videoUnmute') : t('home.videoMute')}
            >
              {muted ? (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
                  <path d="M16 9l5 6M21 9l-5 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M4 9v6h4l5 4V5L8 9H4z" fill="currentColor" />
                  <path d="M16 8.5a5 5 0 0 1 0 7M18.5 6a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {expanded && createPortal(
        <div
          className={styles.overlay}
          role="dialog"
          aria-modal="true"
          aria-label={t('home.videoAlt')}
          onClick={closeExpanded}
        >
          <button
            ref={closeButtonRef}
            type="button"
            className={styles.close}
            onClick={closeExpanded}
            aria-label={t('home.videoClose')}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" fill="none" />
            </svg>
          </button>
          <video
            ref={modalVideoRef}
            className={styles.modalVideo}
            src={VIDEO_SRC}
            poster={POSTER_SRC}
            aria-label={t('home.videoAlt')}
            controls
            loop
            playsInline
            onClick={(e) => e.stopPropagation()}
          />
        </div>,
        document.body,
      )}
    </section>
  )
}
