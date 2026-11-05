import { clientLogos } from '../data/content'

export default function TrustedBy() {
  const logos = [...clientLogos, ...clientLogos]

  return (
    <section className="trusted" id="trusted">
      <h2>
        Trusted by <span className="italic-title">Fortune 500s</span>,{' '}
        <span className="italic-title">Global 2000s</span> and Category-Defining Companies
      </h2>
      <div className="logo-marquee">
        <div className="logo-track">
          {logos.map((logo, i) => (
            <div className="logo-slot" key={`${logo.name}-${i}`}>
              <img src={logo.src} alt={logo.name} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
