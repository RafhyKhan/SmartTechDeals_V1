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
  PRODUCT_SLIDES,
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

      <section className="products">
        <h2>Real products from our store</h2>
        <p>Every device is photographed, tested and sold by us. What you see is what you get.</p>
        <Slideshow slides={PRODUCT_SLIDES} interval={SLIDE_INTERVAL_MS} className="square" />
      </section>

      <section className="reviews">
        <div className="elfsight-app-a4c3bfad-bc7b-4b48-aaef-9dbee8cb6c79" data-elfsight-app-lazy></div>
      </section>

      <section className="local">
        <h2></h2>
        <p>We're a local Calgary business!</p>
        <div className="local-images">
          <img src="/images/calgary-map.png" alt="Map of Calgary" />
          <img src="/images/calgary-tower.png" alt="The Calgary Tower" />
        </div>
      </section>

      <footer className="footer">
        <address>
          <strong>Contact us at </strong>
          <a href={`tel:${CONTACT.phone.replace(/\D/g, '')}`}>{CONTACT.phone}</a>
          {'  |  '}
          <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        </address>
        <p className="social">
          <strong>Check us out at </strong>
          <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
          {' | '}
          <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>
        </p>
        <p className="copyright">© {new Date().getFullYear()} {STORE_NAME}</p>
      </footer>
    </main>
  )
}
