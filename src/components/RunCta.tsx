import { Lottie } from 'lottie-react'
import { Link } from 'react-router-dom'

const LOTTIE_URL =
  'https://cdn.prod.website-files.com/66310a6d9862bf126bd9dfe7/6a05bd4618cdee702e90de53_See%20the%20work%20animation.json'

export default function RunCta() {
  return (
    <section className="run-cta" id="demo">
      <div className="container">
        <div className="run-cta-grid">
          <div className="run-cta-copy">
            <h2>
              Run It on <em>Real Work.</em>
              <br />
              <em>Today.</em>
            </h2>
            <p>
              Bring a real questionnaire, vendor assessment, or request from your queue. We&apos;ll
              run it end-to-end and walk you through the result — not a slide deck.
            </p>
            <Link className="btn btn-dark run-cta-btn desktop" to="/get-started">
              See It in Action
            </Link>
          </div>

          <div className="run-cta-visual">
            <Lottie src={LOTTIE_URL} loop autoplay className="run-cta-lottie" />
          </div>

          <Link className="btn btn-dark run-cta-btn mobile" to="/get-started">
            See It in Action
          </Link>
        </div>
      </div>
    </section>
  )
}
