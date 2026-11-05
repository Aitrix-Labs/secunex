import { useState } from 'react'
import { industries } from '../data/content'

export default function Industries() {
  const [active, setActive] = useState(0)
  const industry = industries[active]

  return (
    <section className="industries" id="industries">
      <div className="container">
        <div className="industries-header">
          <p className="eyebrow">Tailored to Your Industry</p>
          <h2 className="section-heading">Built for Industries Where Trust Matters Most</h2>
          <p>
            Where accuracy and precision are non-negotiable, Secunex helps security, GRC, and
            revenue teams automate cybersecurity assurance with AI agents and certified experts,
            accelerating reviews, reducing manual work, and delivering audit-ready responses at
            scale.
          </p>
        </div>

        <div className="industry-tabs" role="tablist">
          {industries.map((ind, i) => (
            <button
              key={ind.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`industry-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={ind.icon} alt="" />
              {ind.title}
            </button>
          ))}
        </div>

        <div className="industry-panel" role="tabpanel">
          <div className="industry-image">
            <img src={industry.image} alt={industry.title} />
          </div>
          <div className="industry-copy">
            <h3>{industry.title}</h3>
            <p>{industry.description}</p>
            <ul>
              {industry.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
