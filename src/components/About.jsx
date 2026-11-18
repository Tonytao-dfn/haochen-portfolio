import { about, profile } from '../data/site'
import Reveal from './Reveal'
import '../styles/about.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="wrap">
        <div className="head">
          <div className="head__label">
            <span className="u-label">{about.label}</span>
          </div>
          <Reveal className="head__title">
            <h2 className="u-title">
              {about.title.map((line) => (
                <span className="u-title-line" key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal className="head__note" delay={120}>
            <p className="u-note">
              22 岁，视觉设计师。从摄影、剧组到品牌视觉，习惯把「好看」落到「能交付」。
            </p>
          </Reveal>
        </div>

        <div className="about__grid">
          <Reveal className="about__left">
            <div className="portrait">
              <div className="portrait__frame">
                <img src={profile.poster} alt="陶昊晨肖像" loading="lazy" />
                <span className="portrait__tick portrait__tick--tl" aria-hidden="true" />
                <span className="portrait__tick portrait__tick--br" aria-hidden="true" />
              </div>
              <div className="portrait__caption">
                <span>{profile.name} / {profile.nameEn}</span>
                <span>{profile.base}</span>
              </div>
            </div>
          </Reveal>

          <div className="about__right">
            <Reveal>
              <p className="about__lead">{about.lead}</p>
            </Reveal>

            <Reveal delay={100}>
              <div className="about__body">
                {about.body.map((p) => (
                  <p key={p.slice(0, 12)}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal delay={140}>
              <ul className="about__contacts">
                {about.contacts.map((item) => (
                  <li className="contact-item" key={item.k}>
                    <span className="contact-item__k">{item.k}</span>
                    {item.href ? (
                      <a className="contact-item__v" href={item.href}>
                        {item.v}
                      </a>
                    ) : (
                      <span className="contact-item__v">{item.v}</span>
                    )}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal delay={180}>
              <div className="about__stats">
                {about.stats.map((stat) => (
                  <div className="stat" key={stat.label}>
                    <div className="stat__num">
                      {stat.value}
                      <span className="stat__unit">{stat.unit}</span>
                    </div>
                    <div className="stat__label">{stat.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="timeline">
          <div className="timeline__head">
            <span className="u-label">TIMELINE / 2020 — 2026</span>
            <span className="u-mono">05 ENTRIES</span>
          </div>

          <ul className="timeline__list">
            {about.timeline.map((item, i) => (
              <Reveal as="li" className="tl" key={item.period} delay={i * 60}>
                <span className="tl__period">{item.period}</span>
                <div className="tl__main">
                  <h3 className="tl__org">{item.org}</h3>
                  <p className="tl__role">{item.role}</p>
                </div>
                <ul className="tl__points">
                  {item.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
