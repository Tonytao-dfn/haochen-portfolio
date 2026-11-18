import { useEffect, useState } from 'react'
import { work } from '../data/site'
import Reveal from './Reveal'
import '../styles/work.css'

export default function Work() {
  const [active, setActive] = useState(null)

  useEffect(() => {
    if (active === null) return
    const onKey = (event) => {
      if (event.key === 'Escape') setActive(null)
    }
    document.addEventListener('keydown', onKey)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = prev
    }
  }, [active])

  const current = active === null ? null : work.items[active]

  return (
    <section id="work" className="section section--hairline work">
      <div className="wrap">
        <div className="head">
          <div className="head__label">
            <span className="u-label">{work.label}</span>
          </div>
          <Reveal className="head__title">
            <h2 className="u-title">
              {work.title.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </h2>
          </Reveal>
          <Reveal className="head__note" delay={120}>
            <p className="u-note">{work.note}</p>
          </Reveal>
        </div>

        <div className="work__grid">
          {work.items.map((item, i) => (
            <Reveal
              className={`project project--${item.span}`}
              delay={(i % 2) * 90}
              key={item.index}
            >
              <button
                type="button"
                className="project__btn"
                onClick={() => setActive(i)}
                aria-label={`放大查看：${item.cn}`}
              >
                <div
                  className="project__media"
                  style={{ aspectRatio: item.ratio }}
                >
                  <img
                    src={item.img}
                    alt={`${item.cn} — ${item.en}`}
                    loading="lazy"
                    style={{ objectPosition: item.pos }}
                  />
                  <span className="project__index">{item.index}</span>
                  <span className="project__cat">{item.en}</span>
                  <span className="project__hint">
                    放大查看<span aria-hidden="true">↗</span>
                  </span>
                </div>

                <div className="project__foot">
                  <div className="project__text">
                    <h3 className="project__title">{item.cn}</h3>
                    <p className="project__desc">{item.desc}</p>
                  </div>
                  <span className="project__meta">{item.meta}</span>
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {current && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label={current.cn}>
          <button
            type="button"
            className="lightbox__backdrop"
            onClick={() => setActive(null)}
            aria-label="关闭"
          />
          <img className="lightbox__img" src={current.img} alt={current.cn} />
          <button type="button" className="lightbox__close" onClick={() => setActive(null)}>
            关闭 ESC
          </button>
          <div className="lightbox__cap">
            <span>{current.cn}</span>
            <span>{current.en}</span>
            <span>{current.meta}</span>
          </div>
        </div>
      )}
    </section>
  )
}
