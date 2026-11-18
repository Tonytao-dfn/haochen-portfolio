import { useEffect, useState } from 'react'
import { hero, profile } from '../data/site'
import '../styles/hero.css'

function useLocalClock(timeZone) {
  const [time, setTime] = useState('')
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat('en-GB', {
        timeZone,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
      }).format(new Date())
    setTime(format())
    const timer = setInterval(() => setTime(format()), 1000)
    return () => clearInterval(timer)
  }, [timeZone])
  return time
}

export default function Hero() {
  const clock = useLocalClock(profile.timezone)

  return (
    <section id="top" className="hero">
      <div className="hero__media" aria-hidden="true">
        {profile.heroVideo ? (
          <video
            src={profile.heroVideo}
            poster={profile.heroPoster}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
          />
        ) : (
          <img src={profile.heroPoster} alt="" />
        )}
      </div>

      <div className="hero__scrim" aria-hidden="true" />

      <div className="hero__ticks" aria-hidden="true">
        <span />
        <span />
        <span />
        <span />
      </div>

      <div className="hero__content">
        <div className="wrap">
          <div className="hero__eyebrow">
            <span className="hero__roles">{profile.roles}</span>
            <span className="hero__sep" aria-hidden="true" />
            <span className="hero__year">{hero.eyebrow}</span>
          </div>

          <h1 className="hero__title">
            {hero.title.map((line, i) => (
              <span className="hero__line" key={line}>
                <span className="hero__line-in" style={{ '--i': i }}>
                  {line}
                </span>
              </span>
            ))}
          </h1>

          <p className="hero__lede">
            {hero.lede.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </p>
        </div>
      </div>

      <div className="hero__foot">
        <div className="wrap hero__foot-inner">
          {hero.meta.map((item) => (
            <div className="hero__meta" key={item.k}>
              <span className="hero__meta-k">{item.k}</span>
              <span className="hero__meta-v">{item.v}</span>
            </div>
          ))}

          <div className="hero__right">
            <span className="hero__clock">
              <span className="hero__meta-k">LOCAL</span>
              <span className="hero__meta-v">{clock}</span>
              <span className="hero__meta-k">GMT+8</span>
            </span>
            <a className="hero__scroll" href="#about">
              <span>SCROLL</span>
              <span className="hero__scroll-line" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
