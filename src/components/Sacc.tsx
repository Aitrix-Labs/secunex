import { ASSETS, certifications } from '../data/content'

export default function Sacc() {
  return (
    <section className="sacc" id="sacc">
      <div className="container">
        <div className="sacc-header">
          <p className="eyebrow">Meet the Elite Operating Team</p>
          <h2 className="section-heading">Security Assurance Command Center</h2>
          <p>The Industry&apos;s First Concierge Assurance Center of Excellence</p>
          <p>
            Our 24/7/365 SACC in Kathmandu is powered by full-time Secunex experts certified,
            verified, and named on every deliverable, with a 35,000 sq. ft. on-demand cybersecurity
            facility. Any Time, Any Where, Any Language.
          </p>
        </div>

        <div className="sacc-stats">
          <div className="sacc-stat">
            <div className="num">150+</div>
            <div className="label">Full-Time Certified Analysts</div>
          </div>
          <div className="sacc-stat">
            <div className="num">24/7</div>
            <div className="label">On-Call Concierge Service</div>
          </div>
          <div className="sacc-stat">
            <div className="num">365</div>
            <div className="label">Always-On Global Operations</div>
          </div>
          <div className="sacc-stat">
            <div className="num">12+</div>
            <div className="label">Unique Certifications</div>
          </div>
        </div>

        <div className="sacc-visual">
          <img src={ASSETS.saccImg} alt="Security Assurance Command Center" />
          <div>
            <h3 style={{ fontSize: 24, fontWeight: 500, marginBottom: 16, color: '#fff' }}>
              150+ Certified Cybersecurity Professionals
            </h3>
            <p style={{ marginBottom: 24, color: 'rgba(255,255,255,0.65)' }}>
              Certifications and Attestations Held by Our Expert Analysts &amp; Engineers
            </p>
            <div className="cert-list">
              {certifications.map((c) => (
                <span key={c} className="cert-pill">
                  {c}
                </span>
              ))}
            </div>
            <div className="sacc-cta">
              <a className="btn btn-outline-light" href="#sacc">
                Learn More About SACC
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}