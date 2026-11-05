import { useState } from 'react'
import { platformFeatures } from '../data/content'

export default function Platform() {
  const [active, setActive] = useState(0)
  const feature = platformFeatures[active]

  return (
    <section className="platform" id="platform">
      <div className="container platform-inner">
        <div className="platform-header">
          <p className="eyebrow">Architected for Modern Security, GRC, and GTM Teams</p>
          <h2 className="section-heading">Cybersecurity Assurance Management Platform</h2>
          <p>
            Stop owning assurance busywork. Hand it off to concierge experts. From a single
            questionnaire to a full enterprise assurance program, Secunex&apos;s Cybersecurity
            Assurance Management Platform (CAMP) is a trusted, end-to-end execution layer with a
            certified analyst accountable for every outcome.
          </p>
        </div>

        <div className="platform-tabs" role="tablist">
          {platformFeatures.map((f, i) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={i === active}
              className={`platform-tab ${i === active ? 'active' : ''}`}
              onClick={() => setActive(i)}
            >
              <img src={f.icon} alt="" />
              {f.title}
            </button>
          ))}
        </div>

        <div className="platform-panel" role="tabpanel">
          <div className="platform-copy">
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
            <ul>
              {feature.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
          <div className="platform-image">
            <img src={feature.image} alt={feature.title} />
          </div>
        </div>
      </div>
    </section>
  )
}
