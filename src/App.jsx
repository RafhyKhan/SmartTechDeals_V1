import Slideshow from './Slideshow.jsx'
import {
  STORE_NAME,
  LOGO,
  TAGLINE,
  FACEBOOK_MARKETPLACE_URL,
  GOOGLE_REVIEWS_URL,
  DESCRIPTION,
  HIGHLIGHTS,
  SERVICES,
  CONTACT,
  SLIDES,
  SLIDE_INTERVAL_MS,
} from './siteConfig.js'

export default function App() {
  return (
    <main className="page">
      <header className="header">
        <h1>
          <img src={LOGO} alt={STORE_NAME} className="logo" />
        </h1>
        <p className="tagline">{TAGLINE}</p>
      </header>

      <div className="hero">
        <Slideshow slides={SLIDES} interval={SLIDE_INTERVAL_MS} />

        <section className="info">
          {DESCRIPTION.map((text) => (
            <p key={text}>{text}</p>
          ))}

          <ul className="highlights">
            {HIGHLIGHTS.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <h2>In-store services</h2>
          <ul className="services">
            {SERVICES.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="actions">
            <a className="btn btn-primary" href={FACEBOOK_MARKETPLACE_URL} target="_blank" rel="noopener noreferrer">
              Shop our Facebook Marketplace
            </a>
            <a className="btn btn-secondary" href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
              <img src="/images/google.png" alt="" className="btn-icon" />
              Review us on Google
            </a>
          </div>
        </section>
      </div>

      <footer className="footer">
        <address>
          <strong>Visit us:</strong> {CONTACT.address}, {CONTACT.city}
          <br />
          <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}>{CONTACT.phone}</a>
          {' · '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </address>
        <p className="social">
          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          {' · '}
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
        <p className="copyright">© {new Date().getFullYear()} {STORE_NAME}</p>
      </footer>
    </main>
  )
}
