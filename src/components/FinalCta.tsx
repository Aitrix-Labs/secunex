import { Link } from 'react-router-dom'
import { ASSETS } from '../data/content'

export default function FinalCta() {
  return (
    <section className="final-cta" id="resources">
      <div className="container">
        <div className="final-cta-card">
          <div className="final-cta-overlay outer" aria-hidden />
          <div className="final-cta-overlay inner" aria-hidden />

          <div className="final-cta-inner">
            <p className="final-cta-eyebrow">Get Started</p>
            <h2>
              Engineered With <em>Modern AI.</em>
              <br />
              Designed for <em>Enterprise-Grade Precision.</em>
              <br />
              Offload Assurance <em>Work Today</em>
            </h2>
            <p className="final-cta-lead">
              Accelerate your business and product. Leave the busywork to us.
            </p>
            <Link className="btn btn-primary btn-with-arrow" to="/get-started">
              Book a Demo
              <span className="btn-arrow" aria-hidden>
                <img src={ASSETS.arrowUp} alt="" />
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
