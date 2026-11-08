import { Link } from 'react-router-dom'
import { plans } from '../data/content'

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container">
        <div className="pricing-header">
          <h2 className="section-heading">
            Built For Where You Are Today.
            <br />
            Adaptive For Where AI Is Headed Tomorrow.
          </h2>
          <p>
            Every organization is at a different stage of assurance maturity. Our flexible
            deployment model meets you there.
          </p>
        </div>
        <div className="pricing-grid">
          {plans.map((plan) => (
            <article key={plan.name} className={`plan-card ${plan.featured ? 'featured' : ''}`}>
              <div className="plan-badge">{plan.badge}</div>
              <h3>{plan.name}</h3>
              <p>{plan.description}</p>
              <div className="whats">What&apos;s included</div>
              <ul>
                {plan.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <Link className={`btn ${plan.featured ? 'btn-primary' : 'btn-dark'}`} to="/get-started">
                {plan.featured ? 'Book a Demo' : 'Contact Us'}
              </Link>
            </article>
          ))}
        </div>
        <p style={{ textAlign: 'center', marginTop: 32, fontSize: 15 }}>
          Talk to our team to find the right deployment model, or see the platform live in a demo.
        </p>
      </div>
    </section>
  )
}
