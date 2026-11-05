import { integrations } from '../data/content'

const CDN = 'https://cdn.prod.website-files.com/66310a6d9862bf126bd9dfe7'

const moreIcons = [
  `${CDN}/6a02cee65102c743bee330d8_icon2.png`,
  `${CDN}/6a02cee6751cb16167593446_icon1.png`,
  `${CDN}/6a03f9bbe3bfafdaa103dd55_github.png`,
]

export default function Integrations() {
  return (
    <section className="integrations" id="integrations">
      <div className="container">
        <div className="integrations-header">
          <div className="integrations-header-left">
            <p className="integrations-eyebrow">Integrations</p>
            <h2>
              Works Where Your <em>Team</em> Already <em>Works</em>
            </h2>
          </div>
          <p className="integrations-lead">
            700+ native integrations across the tools your security, GRC, and GTM teams already rely
            on. Your workflows stay where they are — Secunex fits right in.
          </p>
        </div>

        <div className="integ-grid">
          {integrations.map((item) => (
            <div key={item.name} className="integ-item">
              <div className="integ-logo-wrap">
                <img src={item.src} alt="" />
              </div>
              <span className="integ-name">{item.name}</span>
            </div>
          ))}
        </div>

        <div className="integ-more">
          <div className="integ-more-icons">
            {moreIcons.map((src) => (
              <img key={src} src={src} alt="" />
            ))}
          </div>
          <div className="integ-more-copy">
            <span className="integ-more-plus">+</span>
            <span>700 more integrations</span>
          </div>
        </div>
      </div>
    </section>
  )
}
