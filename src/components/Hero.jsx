import './Hero.css'
import bgImage from '../assets/hero-bg.png'
import personImage1 from '../assets/person1.png'
import personImage2 from '../assets/person2.png'
import logoVector from '../assets/logo-v1.svg'
import logoVector1 from '../assets/logo-v2.svg'
import logoVector2 from '../assets/logo-v3.svg'

const navLinks = ['Competence', 'Service', 'Technology', 'Quality', 'Portfolio', 'Company']

export default function Hero() {
  return (
    <section className="hero">
      <img className="hero-bg" src={bgImage} alt="" aria-hidden="true" />

      <header className="hero-header">
        <div className="hero-logo" aria-label="oXagile">
          <img className="hero-logo-v1" src={logoVector} alt="" />
          <img className="hero-logo-v2" src={logoVector1} alt="" />
          <img className="hero-logo-v3" src={logoVector2} alt="" />
        </div>

        <nav className="hero-nav" aria-label="Main navigation">
          {navLinks.map(link => (
            <a key={link} href="#" className="hero-nav-link">{link}</a>
          ))}
        </nav>

        <div className="hero-actions">
          <button className="hero-search-btn" aria-label="Search">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
              <circle cx="7.5" cy="7.5" r="6.5" stroke="white" strokeWidth="1.5" />
              <line x1="12.5" y1="12.5" x2="17" y2="17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </button>
          <button className="hero-contact-btn">Contact Us</button>
        </div>
      </header>

      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="hero-title-white">Senior </span>
            <span className="hero-title-gradient">AI Engineers, Leading&nbsp;the&nbsp;Way</span>
          </h1>
          <p className="hero-subtitle">
            Battle-tested specialists who integrate seamlessly into your team and deliver from day one
          </p>
        </div>

        <div className="hero-images">
          <div className="hero-card">
            <img src={personImage1} alt="Senior AI Engineer" />
            <div className="hero-card-overlay hero-card-overlay--purple" />
          </div>
          <div className="hero-card">
            <img src={personImage2} alt="Senior AI Engineer" />
            <div className="hero-card-overlay hero-card-overlay--blue" />
          </div>
        </div>
      </div>
    </section>
  )
}
