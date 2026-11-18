import { useEffect, useState } from 'react'
import { profile } from '../data/site'
import '../styles/nav.css'

const LINKS = [
  { id: 'about', label: '经历' },
  { id: 'work', label: '项目' },
  { id: 'capability', label: '优势' },
  { id: 'contact', label: '联系' }
]

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    let raf = 0

    const update = () => {
      raf = 0
      const y = window.scrollY
      setScrolled(y > 48)

      const line = y + window.innerHeight * 0.42
      let current = ''
      LINKS.forEach((link) => {
        const el = document.getElementById(link.id)
        if (!el) return
        const top = el.getBoundingClientRect().top + y
        if (top <= line) current = link.id
      })
      setActive(current)
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <header className={`nav${scrolled ? ' is-scrolled' : ''}`}>
      <div className="wrap nav__inner">
        <a className="brand" href="#top" aria-label="回到顶部">
          <span className="brand__cn">陶昊晨</span>
          <span className="brand__en">{profile.nameEn}</span>
        </a>

        <nav className="nav__links" aria-label="主导航">
          {LINKS.map((link, i) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              className={`nav__link${active === link.id ? ' is-active' : ''}`}
            >
              <span className="nav__link-num">0{i + 1}</span>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="nav__right">
          <span className="nav__status">
            <i className="u-dot" />
            OPEN FOR WORK
          </span>
          <a className="nav__cta" href="#contact">
            联系我<span className="nav__cta-arrow">↗</span>
          </a>
        </div>
      </div>
    </header>
  )
}
