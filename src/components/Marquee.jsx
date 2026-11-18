import '../styles/marquee.css'

const ITEMS = [
  'VISUAL DESIGN',
  'AI WORKFLOW',
  'BRAND SYSTEM',
  'PHOTOGRAPHY',
  'ART DIRECTION',
  'PRODUCTION'
]

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS]

  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {[...row, ...row].map((item, i) => (
          <span className="marquee__item" key={`${item}-${i}`}>
            {item}
            <i className="marquee__dot" />
          </span>
        ))}
      </div>
    </div>
  )
}
