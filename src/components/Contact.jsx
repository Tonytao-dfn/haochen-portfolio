import { contact, profile } from '../data/site'
import Reveal from './Reveal'
import '../styles/contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="wrap contact__inner">
        <header className="contact__top">
          <span className="u-label">{contact.label}</span>
          <span className="contact__status">
            <i className="u-dot" />
            {profile.status}
          </span>
        </header>

        <div className="contact__main">
          <div className="contact__left">
            <Reveal>
              <h2 className="contact__title">
                {contact.title.map((line) => (
                  <span key={line}>
                    {line}
                    <br />
                  </span>
                ))}
              </h2>
            </Reveal>

            <Reveal delay={100}>
              <p className="contact__note">{contact.note}</p>
            </Reveal>

            <Reveal delay={160}>
              <a className="contact__mail" href={`mailto:${profile.email}`}>
                <span>{profile.email}</span>
                <span className="contact__mail-arrow" aria-hidden="true">
                  ↗
                </span>
              </a>
            </Reveal>
          </div>

          <Reveal className="contact__scope" delay={220}>
            <span className="contact__scope-k">{contact.scopeLabel}</span>
            <ul className="contact__scope-list">
              {contact.scope.map((item, i) => (
                <li className="scope-row" key={item}>
                  <span className="scope-row__i">{`0${i + 1}`}</span>
                  <span className="scope-row__v">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200}>
          <ul className="contact__rows">
            {contact.rows.map((row) => (
              <li className="crow" key={row.k}>
                <span className="crow__k">{row.k}</span>
                {row.href ? (
                  <a className="crow__v" href={row.href}>
                    {row.v}
                  </a>
                ) : (
                  <span className="crow__v">{row.v}</span>
                )}
              </li>
            ))}
          </ul>
        </Reveal>

        <footer className="contact__foot">
          <span>© 2026 {profile.name} · ALL RIGHTS RESERVED</span>
          <span className="contact__foot-mid">REACT + VITE / BUILT 2026</span>
          <a className="contact__top-link" href="#top">
            BACK TO TOP <span aria-hidden="true">↑</span>
          </a>
        </footer>

        <div className="contact__ghost" aria-hidden="true">
          HAOCHEN TAO
        </div>
      </div>
    </section>
  )
}
