import { footerColumns } from '../data/content'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {footerColumns.map((col) => (
            <div key={col.title} className="footer-col">
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((link) => (
                  <li key={link}>
                    <a href={link === 'Book a Demo' ? '/get-started' : '#'}>{link}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span className="footer-logo-text">Secunex</span>
          <p>© 2026 Secunex. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
