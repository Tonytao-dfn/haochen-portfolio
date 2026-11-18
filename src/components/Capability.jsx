import { capability } from '../data/site'
import Reveal from './Reveal'
import '../styles/capability.css'

export default function Capability() {
  return (
    <section id="capability" className="section section--hairline cap">
      <div className="wrap">
        <div className="head">
          <div className="head__label">
            <span className="u-label">{capability.label}</span>
          </div>
          <Reveal className="head__title">
            <h2 className="u-title">
              {capability.title.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal className="head__note" delay={120}>
            <p className="u-note">{capability.note}</p>
          </Reveal>
        </div>

        <div className="cap__grid">
          {capability.items.map((item, i) => (
            <Reveal
              className={`cap__cell cap__cell--${item.span}`}
              delay={i * 50}
              key={item.index}
            >
              <div className="cap__top">
                <span className="cap__index">{item.index}</span>
                <span className="cap__tag">{item.tag}</span>
              </div>
              <div className="cap__bottom">
                <h3 className="cap__title">{item.title}</h3>
                <p className="cap__desc">{item.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
