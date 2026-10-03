import { useEffect, useId, useRef, useState } from 'react'
import { LuChevronDown, LuMinus, LuPlus } from 'react-icons/lu'
import styles from './GuestPicker.module.css'
import { useLanguage } from '../../i18n/LanguageContext'
import { useCurrency } from '../../i18n/CurrencyContext'
import { PET_NIGHTLY_FEE } from '../../data/suites'

function Stepper({ label, description, value, min, max, onDecrement, onIncrement }) {
  const { t } = useLanguage()
  return (
    <div className={styles.row}>
      <div className={styles.rowText}>
        <span className={styles.rowLabel}>{label}</span>
        {description && <span className={styles.rowDescription}>{description}</span>}
      </div>
      <div className={styles.counter}>
        <button
          type="button"
          className={styles.counterBtn}
          onClick={onDecrement}
          disabled={value <= min}
          aria-label={t('common.decrease', { label })}
        >
          <LuMinus size={14} />
        </button>
        <span className={styles.counterValue} aria-live="polite">{value}</span>
        <button
          type="button"
          className={styles.counterBtn}
          onClick={onIncrement}
          disabled={value >= max}
          aria-label={t('common.increase', { label })}
        >
          <LuPlus size={14} />
        </button>
      </div>
    </div>
  )
}

export default function GuestPicker({ value, onChange, maxGuests = 12, maxKids = 6, maxPets = 4 }) {
  const { t } = useLanguage()
  const { formatPrice } = useCurrency()
  const [open, setOpen] = useState(false)
  const containerRef = useRef(null)
  const triggerRef = useRef(null)
  const panelId = useId()

  const guests = Number(value.guests) || 1
  const kidsUnder5 = Number(value.kidsUnder5) || 0
  const pets = Number(value.pets) || 0

  useEffect(() => {
    if (!open) return undefined

    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
        triggerRef.current?.focus()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [open])

  const set = (key, nextValue) => {
    onChange({ ...value, [key]: nextValue })
  }

  const summary = [
    `${guests} ${guests === 1 ? t('common.guest') : t('common.guests')}`,
    kidsUnder5 > 0 ? `${kidsUnder5} ${kidsUnder5 === 1 ? t('common.kid') : t('common.kids')}` : null,
    pets > 0 ? `${pets} ${pets === 1 ? t('common.pet') : t('common.pets')}` : null,
  ].filter(Boolean).join(' · ')

  return (
    <div className={styles.wrapper} ref={containerRef}>
      <button
        ref={triggerRef}
        type="button"
        className={styles.trigger}
        onClick={() => setOpen((current) => !current)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={`${t('common.guests')}: ${summary}`}
      >
        <span>{summary}</span>
        <LuChevronDown size={16} className={open ? styles.chevronOpen : ''} />
      </button>

      {open && (
        <div id={panelId} className={styles.panel} role="group" aria-label={t('common.guests')}>
          <Stepper
            label={t('common.guests')}
            description={t('common.guestsNote')}
            value={guests}
            min={1}
            max={maxGuests}
            onDecrement={() => set('guests', String(Math.max(1, guests - 1)))}
            onIncrement={() => set('guests', String(Math.min(maxGuests, guests + 1)))}
          />
          <Stepper
            label={t('common.kidsUnder5')}
            description={t('common.kidsUnder5Note')}
            value={kidsUnder5}
            min={0}
            max={maxKids}
            onDecrement={() => set('kidsUnder5', Math.max(0, kidsUnder5 - 1))}
            onIncrement={() => set('kidsUnder5', Math.min(maxKids, kidsUnder5 + 1))}
          />
          <Stepper
            label={t('common.pets')}
            description={t('common.petsNote', { price: formatPrice(PET_NIGHTLY_FEE) })}
            value={pets}
            min={0}
            max={maxPets}
            onDecrement={() => set('pets', Math.max(0, pets - 1))}
            onIncrement={() => set('pets', Math.min(maxPets, pets + 1))}
          />
          <button
            type="button"
            className={styles.doneBtn}
            onClick={() => {
              setOpen(false)
              triggerRef.current?.focus()
            }}
          >
            {t('common.done')}
          </button>
        </div>
      )}
    </div>
  )
}
