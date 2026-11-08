import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ASSETS, heroRotating, mountainPins } from '../data/content'

export default function Hero() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroRotating.length)
    }, 2200)
    return () => window.clearInterval(id)
  }, [])

  return (
    <section className="hero" id="top">
      <div className="hero-clouds" aria-hidden>
        <img className="cloud-img cloud-top" src={ASSETS.cloudTop} alt="" />
        <img className="cloud-img cloud-bottom" src={ASSETS.cloudBottom} alt="" />
        <div className="hero-clouds-main" />
        <div className="hero-clouds-shadow" />
      </div>

      <div className="hero-content">
        <p className="hero-eyebrow">Hyper-Supervised Intelligence for Cybersecurity Assurance</p>
        <h1 className="hero-title">
          <strong className="italic-title">Harness AI</strong> With Concierge Experts Same-Day or{' '}
          <strong className="italic-title">Faster</strong> Turnaround On
        </h1>
        <div className="hero-rotating" aria-live="polite">
          <span key={heroRotating[index]}>{heroRotating[index]}</span>
        </div>
        <p className="hero-sub">
          Not a tool you manage. An end-to-end system with expertise that owns the job from intake{' '}
          <span
            className="inline-icon"
            style={{ backgroundImage: `url(${ASSETS.mailIcon})` }}
            aria-hidden
          />{' '}
          to done{' '}
          <span
            className="inline-icon"
            style={{ backgroundImage: `url(${ASSETS.checkIcon})` }}
            aria-hidden
          />
        </p>
        <div className="hero-ctas">
          <Link className="btn btn-primary btn-with-arrow" to="/get-started">
            Get a Demo
            <span className="btn-arrow" aria-hidden>
              <img src={ASSETS.arrowUp} alt="" />
            </span>
          </Link>
          <a className="btn btn-outline" href="#case-studies">
            Case Studies
          </a>
        </div>
      </div>

      <div className="hero-mountain-wrap">
        <img className="hero-mountain-img desktop" src={ASSETS.mountain} alt="" />
        <img className="hero-mountain-img mobile" src={ASSETS.mountainMobile} alt="" />
        <div className="mountain-pins">
          {mountainPins.map((pin) => (
            <div
              key={pin.label}
              className={`mountain-pin ${pin.side}`}
              style={{ top: pin.top, left: pin.left }}
            >
              <span className="pin-dot" />
              <span className="pin-label">{pin.label}</span>
            </div>
          ))}
        </div>
        <div className="hero-mountain-overlay" aria-hidden />
      </div>
    </section>
  )
}
