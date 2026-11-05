import { caseStudies } from '../data/content'

export default function CaseStudies() {
  return (
    <section className="case-studies" id="case-studies">
      <div className="container">
        <div className="case-studies-header">
          <h2 className="section-heading">
            Unblock Revenue
            <br />
            Scale Security
          </h2>
          <p style={{ marginTop: 16 }}>
            See how Secunex accelerates sales, builds trust, and saves time for global
            enterprises by streamlining cybersecurity assurance management.
          </p>
        </div>
        <div className="case-grid">
          {caseStudies.map((c) => (
            <a key={c.title} className="case-card" href="#case-studies">
              <img src={c.image} alt="" />
              <h3>{c.title}</h3>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
