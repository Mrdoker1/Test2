import './Minds.css'
import bgImage from '../assets/section2-bg.png'
import wave1 from '../assets/wave1.png'
import wave2 from '../assets/wave2.png'
import alekseyPhoto from '../assets/aleksey.png'
import yarivPhoto from '../assets/yariv.png'
import voiagerLogo from '../assets/voiager.svg'
import quoteIcon from '../assets/quote.svg'

const experts = [
  {
    photo: alekseyPhoto,
    name: 'Aleksey Karankevich',
    role: 'Head of AI, engineering manager',
    years: '15+ years of expertise',
    quote: "For me, AI transformation is about more than models. It's balancing research with delivery, guiding teams to build reliable systems, and solving the practical challenges of bringing AI into prod.",
    gradient: 'linear-gradient(rgba(76, 82, 195, 0) 43.731%, rgba(37, 117, 255, 0.2) 100%)',
    photoStyle: { width: '239.42%', height: '253.58%', left: '-54.21%', top: '-19.71%' },
  },
  {
    photo: yarivPhoto,
    name: 'Yariv Z. Levy, PhD',
    role: 'AI strategy advisor',
    years: '20+ years of expertise',
    quote: "My goal is to translate AI research into usable solutions across domains. I've helped pharma, consumer goods, and consulting teams adopt AI to improve operations, products, and decisions.",
    gradient: 'linear-gradient(rgba(130, 126, 234, 0) 43.731%, rgba(130, 126, 234, 0.2) 100%)',
    photoStyle: { width: '215.26%', height: '257.91%', left: '-66.08%', top: '-20.48%' },
  },
]

export default function Minds() {
  return (
    <section className="minds">
      <img className="minds-bg" src={bgImage} alt="" aria-hidden="true" />

      <div className="minds-intro">
        <h2 className="minds-title">The minds powering our AI initiatives</h2>
        <p className="minds-lead">
          Being AI-driven at Oxagile begins with people, not tech platforms. Engineers apply AI to uncover patterns in
          complex datasets, optimize system behavior, and embed intelligence directly into workflows. This AI-native
          mindset runs across teams, shaping the way we approach every project.
        </p>
      </div>

      <div className="minds-voiager-row">
        <div className="minds-wave">
          <img src={wave1} alt="" aria-hidden="true" />
          <img src={wave2} alt="" aria-hidden="true" />
        </div>

        <div className="minds-voiager-content">
          <div className="minds-voiager-heading">
            <h3 className="minds-voiager-title">Discover our AI expertise</h3>
            <div className="minds-voiager-through">
              <span className="minds-voiager-through-text">through</span>
              <img src={voiagerLogo} alt="Voiager" className="minds-voiager-logo" />
            </div>
          </div>
          <p className="minds-voiager-desc">
            Built by Oxagile's AI team, Voiager is an AI voice assistant that conducts interviews, collects insights,
            and delivers real-time operational intelligence.
          </p>
          <button className="minds-voiager-btn">Schedule a discovery</button>
        </div>
      </div>

      <div className="minds-cards">
        {experts.map(expert => (
          <div
            key={expert.name}
            className="minds-card"
            style={{ backgroundImage: `${expert.gradient}, linear-gradient(90deg, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0.02) 100%)` }}
          >
            <div className="minds-card-header">
              <div className="minds-card-avatar">
                <img src={expert.photo} alt={expert.name} style={expert.photoStyle} />
              </div>
              <div className="minds-card-info">
                <p className="minds-card-name">{expert.name}</p>
                <p className="minds-card-role">{expert.role}<br />{expert.years}</p>
              </div>
            </div>
            <div className="minds-card-quote">
              <img src={quoteIcon} alt="" aria-hidden="true" className="minds-quote-icon" />
              <p>{expert.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
