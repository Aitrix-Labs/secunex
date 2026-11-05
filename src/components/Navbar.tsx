import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ASSETS, navItems, type NavItem } from '../data/content'

export default function Navbar() {
  const location = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [onDark, setOnDark] = useState(false)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [previewIndex, setPreviewIndex] = useState(0)
  const [mobileExpand, setMobileExpand] = useState<string | null>(null)

  useEffect(() => {
    window.scrollTo(0, 0)
    setOpen(false)
    setActiveMenu(null)
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      setScrolled(y > 40)
      const darkSections = document.querySelectorAll(
        '.trusted, .testimonials, .hsai, .sacc, .final-cta, .gs-social-proof',
      )
      let dark = false
      darkSections.forEach((el) => {
        const r = el.getBoundingClientRect()
        if (r.top < 80 && r.bottom > 80) dark = true
      })
      const homeHeroDark = location.pathname === '/' && y > 700 && y < 1400
      setOnDark(dark || homeHeroDark)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  const openMenu = (label: string) => {
    setActiveMenu(label)
    setPreviewIndex(0)
  }

  const closeMenu = () => setActiveMenu(null)

  return (
    <>
      <header
        className={`navbar ${scrolled || onDark ? 'scrolled' : ''} ${onDark ? 'on-dark' : ''}`}
        onMouseLeave={closeMenu}
      >
        <Link to="/" aria-label="Secunex Logo" className="nav-brand">
          <span className="nav-logo-text">Secunex</span>
        </Link>

        <ul className="nav-links">
          {navItems.map((item) => (
            <li
              key={item.label}
              className={`nav-item ${item.hasMenu ? 'has-menu' : ''} ${activeMenu === item.label ? 'is-open' : ''}`}
              onMouseEnter={() => (item.hasMenu ? openMenu(item.label) : closeMenu())}
            >
              <a
                href={item.href}
                className={`nav-link ${item.hasMenu ? 'has-arrow' : ''}`}
                onClick={(e) => {
                  if (item.hasMenu) e.preventDefault()
                }}
              >
                {item.label}
                {item.hasMenu && (
                  <img className="nav-chevron" src={ASSETS.chevron} alt="" aria-hidden />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <a className="nav-login" href="https://app.secunex.com/login" target="_blank" rel="noreferrer">
            Log In
          </a>
          <Link className="nav-demo" to="/get-started">
            Get a Demo
            <span className="btn-arrow" aria-hidden>
              <img src={ASSETS.arrowUp} alt="" />
            </span>
          </Link>
          <button
            className={`hamburger ${open ? 'open' : ''}`}
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        {navItems
          .filter((i) => i.hasMenu)
          .map((item) => (
            <MegaMenu
              key={item.label}
              item={item}
              open={activeMenu === item.label}
              previewIndex={previewIndex}
              onHoverItem={setPreviewIndex}
              onClose={closeMenu}
            />
          ))}
      </header>

      <nav className={`mobile-menu ${open ? 'open' : ''}`} aria-hidden={!open}>
        <ul>
          {navItems.map((item) => (
            <li key={item.label} className={mobileExpand === item.label ? 'expanded' : ''}>
              {item.hasMenu ? (
                <>
                  <button
                    type="button"
                    className="mobile-parent"
                    onClick={() =>
                      setMobileExpand((v) => (v === item.label ? null : item.label))
                    }
                  >
                    {item.label}
                    <img src={ASSETS.chevron} alt="" />
                  </button>
                  <ul className="mobile-sub">
                    {item.items?.map((sub) => (
                      <li key={sub.title}>
                        <a
                          href={sub.href}
                          onClick={() => {
                            setOpen(false)
                            setMobileExpand(null)
                          }}
                        >
                          <img src={sub.icon} alt="" />
                          {sub.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <a href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <div className="menu-cta">
          <a
            className="btn btn-outline-light"
            href="https://app.secunex.com/login"
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
          >
            Log In
          </a>
          <Link className="btn btn-primary" to="/get-started" onClick={() => setOpen(false)}>
            Get a Demo
            <span className="btn-arrow" aria-hidden>
              <img src={ASSETS.arrowUp} alt="" />
            </span>
          </Link>
        </div>
      </nav>
    </>
  )
}

function MegaMenu({
  item,
  open,
  previewIndex,
  onHoverItem,
  onClose,
}: {
  item: NavItem
  open: boolean
  previewIndex: number
  onHoverItem: (i: number) => void
  onClose: () => void
}) {
  const items = item.items ?? []
  const active = items[previewIndex] ?? items[0]
  const isFeatured = item.variant === 'list-featured'

  return (
    <div className={`mega-menu ${open ? 'open' : ''} ${isFeatured ? 'is-featured' : ''}`} role="menu">
      <div className="mega-menu-inner">
        <div className="mega-col list-col">
          <p className="mega-title">{item.menuTitle}</p>
          <div className="mega-items">
            {items.map((sub, i) => (
              <a
                key={sub.title}
                href={sub.href}
                className={`mega-item ${i === previewIndex ? 'is-active' : ''}`}
                onMouseEnter={() => onHoverItem(i)}
                onMouseOver={() => onHoverItem(i)}
                onFocus={() => onHoverItem(i)}
                onClick={onClose}
              >
                <span className="mega-icon">
                  <img src={sub.icon} alt="" />
                </span>
                <span>{sub.title}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="mega-col preview-col">
          {isFeatured && active?.featured ? (
            <div className="mega-featured">
              {active.featured.map((f) => (
                <a key={f.title} href={active.href} className="mega-featured-card" onClick={onClose}>
                  <img src={f.image} alt="" />
                  <p>{f.title}</p>
                </a>
              ))}
            </div>
          ) : (
            <div className="mega-preview">
              {items.map((sub, i) =>
                sub.image ? (
                  <img
                    key={sub.title}
                    src={sub.image}
                    alt=""
                    className={i === previewIndex ? 'is-active' : ''}
                  />
                ) : null,
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
