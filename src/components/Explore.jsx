import './Explore.css'
import kirylPhoto from '../assets/kiryl.png'
import ravshapPhoto from '../assets/ravshan.png'

const engineers = [
  {
    photo: kirylPhoto,
    quote: '"My approach brings together coding and architecture to craft systems that are robust, usable, and trusted."',
    name: 'Kiryl Surahatau',
    role: 'Head of JavaScript department',
  },
  {
    photo: ravshapPhoto,
    quote: '"I focus on creating LLM and agentic AI solutions that are solid and reliable for both teams and users."',
    name: 'Ravshan Samandarov',
    role: 'Senior software engineer',
  },
  {
    photo: ravshapPhoto,
    quote: '"I connect client goals with data and models, delivering AI solutions that work reliably beyond the lab."',
    name: 'Kirill Karelskii',
    role: 'Machine learning engineer',
  },
]

export default function Explore() {
  return (
    <section className="explore">
      <div className="explore-intro">
        <h2 className="explore-title">Looking to explore the potential of your AI initiative?</h2>
        <p className="explore-lead">
          Our AI experts are ready to analyze your data, uncover high-value opportunities, and outline strategies to maximize ROI.
        </p>
        <button className="explore-btn">Schedule a discovery</button>
      </div>

      <div className="explore-cards">
        {engineers.map((eng, i) => (
          <div key={i} className="explore-card">
            <p className="explore-card-quote">{eng.quote}</p>
            <div className="explore-card-person">
              <div className="explore-card-avatar">
                <img src={eng.photo} alt={eng.name} />
              </div>
              <div className="explore-card-info">
                <p className="explore-card-name">{eng.name}</p>
                <p className="explore-card-role">{eng.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
