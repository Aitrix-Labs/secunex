import { FormEvent, useEffect, useState } from 'react'
import Testimonials from '../components/Testimonials'

const CDN = 'https://cdn.prod.website-files.com/66310a6d9862bf126bd9dfe7'

const darkLogos = [
  `${CDN}/6a2f91342730ee1eee38f1be_1f635f9791d4db43fdb1dfc012d8fcd2_AIRTABLE-dark.webp`,
  `${CDN}/6a2f92d0a589b9cdd0710f1c_3b98fdc25a19b217a2d96eda9fad29f9_ELASTICdark.webp`,
  `${CDN}/6a2f9134bc0e9d85ec75a0e1_c918f95cde68cc2573aa4af2fe005312_OPENAI-darl.webp`,
  `${CDN}/6a2f9277d2d7b8fbe017d81d_706ebcd3299d10a2803d9abb95f559c8_FIGMAdark.webp`,
  `${CDN}/6a2f91341ffbedbed83dd1f4_ba080609e9fe110c385c6fe997995e01_GRAMMARLY-dark.webp`,
  `${CDN}/6a2f9135a589b9cdd0701f5c_74d7dfe4a96cee17dedb54e2891fd1dd_MONGODB-dark.webp`,
  `${CDN}/6a2f9135635d5e15f3e9f768_858a0272d17db703f7f3de7fc2950d79_SNAP-dark.webp`,
]

const helpOptions = [
  'Security Questionnaires & DDQs',
  'RFPs',
  'Trust Center',
  'Vendor Assessments & TPRM',
  'InfoSec Redlines',
  'Something Else',
]

const CALENDLY_URL =
  'https://calendly.com/secunex/30min?hide_event_type_details=1&hide_gdpr_banner=1&text_color=101010&primary_color=ee7f00'

type Tab = 'message' | 'demo'

export default function GetStartedPage() {
  const [tab, setTab] = useState<Tab>('message')
  const [help, setHelp] = useState<string[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    jobTitle: '',
    phone: '',
    notes: '',
  })

  useEffect(() => {
    document.title = 'Get Started Now | Secunex'
    return () => {
      document.title = 'Cybersecurity Assurance Management: AI + Certified Experts | Secunex'
    }
  }, [])

  const toggleHelp = (option: string) => {
    setHelp((prev) =>
      prev.includes(option) ? prev.filter((o) => o !== option) : [...prev, option],
    )
  }

  const onSubmit = (e: FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <main className="get-started-page">
      <section className="gs-hero">
        <div
          className="gs-hero-glow"
          style={{
            backgroundImage: `url(${CDN}/6a2f81cfdca747a0b65abb90_37a2b0e95d8a157004fac3e04c6b007b_Transition%20Gradient.avif)`,
          }}
          aria-hidden
        />
        <div className="container gs-hero-grid">
          <div className="gs-copy">
            <p className="gs-eyebrow">Talk to Our Team</p>
            <h1>
              Get Started Now with <em>Secunex</em>
            </h1>
            <p className="gs-lead">
              Faster, more accurate cybersecurity assurance management, powered by AI agents and
              always-on certified security experts.
            </p>
            <p className="gs-body">
              Streamline reviews, reduce risk, and accelerate growth. Secunex unifies
              cybersecurity assurance workflows into one end-to-end platform, handling security
              questionnaires, vendor assessments, GRC audits, and more — in hours, not weeks.
            </p>

            <div className="gs-marquee" aria-hidden>
              <div className="gs-marquee-track">
                {[...darkLogos, ...darkLogos].map((src, i) => (
                  <img key={`${src}-${i}`} src={src} alt="" />
                ))}
              </div>
            </div>
          </div>

          <div className="gs-form-shell">
            <div className="gs-form-card">
              <div className="gs-tabs" role="tablist">
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === 'message'}
                  className={`gs-tab ${tab === 'message' ? 'is-active' : ''}`}
                  onClick={() => setTab('message')}
                >
                  <img src={`${CDN}/6a4790307c248314732f3822_envelope-icon.svg`} alt="" />
                  <span>
                    <strong>Send a Message</strong>
                    <small>We&apos;ll be in touch.</small>
                  </span>
                </button>
                <button
                  type="button"
                  role="tab"
                  aria-selected={tab === 'demo'}
                  className={`gs-tab ${tab === 'demo' ? 'is-active' : ''}`}
                  onClick={() => setTab('demo')}
                >
                  <img src={`${CDN}/6a478eced24345fd7621b3a5_phone-icon.svg`} alt="" />
                  <span>
                    <strong>Book a Demo</strong>
                    <small>Pick a 30-min slot with our team.</small>
                  </span>
                </button>
              </div>

              {tab === 'message' ? (
                submitted ? (
                  <div className="gs-success">
                    <h3>Thanks — we got your message.</h3>
                    <p>Our team will be in touch shortly.</p>
                    <button type="button" className="btn btn-dark" onClick={() => setSubmitted(false)}>
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form className="gs-form" onSubmit={onSubmit}>
                    <div className="gs-row">
                      <input
                        required
                        placeholder="First Name *"
                        value={form.firstName}
                        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
                      />
                      <input
                        required
                        placeholder="Last Name *"
                        value={form.lastName}
                        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
                      />
                    </div>
                    <input
                      required
                      type="email"
                      placeholder="Work Email *"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                    />
                    <div className="gs-row">
                      <input
                        required
                        placeholder="Job Title *"
                        value={form.jobTitle}
                        onChange={(e) => setForm({ ...form, jobTitle: e.target.value })}
                      />
                      <input
                        placeholder="Phone (optional)"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      />
                    </div>

                    <p className="gs-help-label">
                      What do you need help with? <span>Select all that apply</span>
                    </p>
                    <div className="gs-help-grid">
                      {helpOptions.map((option) => (
                        <label key={option} className="gs-check">
                          <input
                            type="checkbox"
                            checked={help.includes(option)}
                            onChange={() => toggleHelp(option)}
                          />
                          <span>{option}</span>
                        </label>
                      ))}
                    </div>

                    <textarea
                      placeholder="Anything we should know? (optional)"
                      rows={4}
                      value={form.notes}
                      onChange={(e) => setForm({ ...form, notes: e.target.value })}
                    />

                    <button type="submit" className="gs-submit">
                      Get in Touch
                    </button>
                    <p className="gs-privacy">
                      By submitting, I agree to Secunex&apos;s{' '}
                      <a href="https://www.secunex.com/privacy-policy" target="_blank" rel="noreferrer">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                )
              ) : (
                <div className="gs-calendly">
                  <iframe
                    title="Book a Demo"
                    src={CALENDLY_URL}
                    loading="lazy"
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="gs-social-proof">
        <div className="container gs-social-header">
          <p className="gs-social-eyebrow">Hear It From Our Customers</p>
          <h2>
            Security and GRC Leaders, in Their <em>Own Words</em>
          </h2>
        </div>
        <div className="gs-testimonials-embed">
          <Testimonials />
        </div>
      </section>
    </main>
  )
}
