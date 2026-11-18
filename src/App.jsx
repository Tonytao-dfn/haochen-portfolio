import './styles/loader.css'
import Nav from './components/Nav'
import ScrollProgress from './components/ScrollProgress'
import Hero from './components/Hero'
import About from './components/About'
import Marquee from './components/Marquee'
import Work from './components/Work'
import Capability from './components/Capability'
import Contact from './components/Contact'

export default function App() {
  return (
    <>
      <div className="loader" aria-hidden="true">
        <div className="loader__inner">
          <span className="loader__name">TAO HAOCHEN</span>
          <span className="loader__meta">PORTFOLIO 2026</span>
          <span className="loader__bar">
            <i />
          </span>
        </div>
      </div>

      <ScrollProgress />
      <Nav />

      <main>
        <Hero />
        <About />
        <Marquee />
        <Work />
        <Capability />
        <Contact />
      </main>

      <div className="grain" aria-hidden="true" />
    </>
  )
}
