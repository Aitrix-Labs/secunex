import { useEffect, useRef, useState } from 'react'
import { ASSETS, testimonials } from '../data/content'

export default function Testimonials() {
  const [index, setIndex] = useState(0)
  const timer = useRef<number | null>(null)
  const n = testimonials.length

  const clear = () => {
    if (timer.current) window.clearInterval(timer.current)
  }

  const start = () => {
    clear()
    timer.current = window.setInterval(() => {
      setIndex((i) => (i + 1) % n)
    }, 6500)
  }

  useEffect(() => {
    start()
    return clear
  }, [])

  const prev = () => {
    setIndex((i) => (i - 1 + n) % n)
    start()
  }

  const next = () => {
    setIndex((i) => (i + 1) % n)
    start()
  }

  const slots = [
    { offset: -1, key: 'prev' },
    { offset: 0, key: 'active' },
    { offset: 1, key: 'next' },
  ] as const

  return (
    <section className="testimonials" aria-label="Customer testimonials">
      <div className="testimonial-main">
        <div className="testimonial-pagination">
          <button type="button" className="ts-arrow is-prev" onClick={prev} aria-label="Previous slide">
            <img src={ASSETS.arrowSlide} alt="" />
          </button>
          <button type="button" className="ts-arrow is-next" onClick={next} aria-label="Next slide">
            <img src={ASSETS.arrowSlide} alt="" />
          </button>
        </div>

        <div className="testimonial-stage">
          {slots.map(({ offset, key }) => {
            const i = (index + offset + n) % n
            const t = testimonials[i]
            const pos = offset === 0 ? 'is-active' : offset < 0 ? 'is-prev' : 'is-next'
            return (
              <article key={`${key}-${t.name}`} className={`testimonial-card ${pos}`} aria-hidden={offset !== 0}>
                <p className="testimonial-quote">{t.quote}</p>
                <div className="testimonial-info">
                  <div className="testimonial-person">
                    <img className="avatar" src={t.avatar} alt="" />
                    <div className="person-text">
                      <div className="name">{t.name}</div>
                      <div className="role">{t.role}</div>
                    </div>
                  </div>
                  <img className="company-logo" src={t.logo} alt="" />
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
