import puppeteer from 'puppeteer-core'
import fs from 'node:fs'

const OUT = process.argv[2] || './preview'
const URL = process.argv[3] || 'http://localhost:5173'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

fs.mkdirSync(OUT, { recursive: true })

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--force-color-profile=srgb', '--hide-scrollbars', '--font-render-hinting=none']
})

const page = await browser.newPage()
await page.setViewport({ width: 1728, height: 1080, deviceScaleFactor: 1 })
page.on('pageerror', (err) => console.log('[pageerror]', err.message))
page.on('console', (msg) => {
  if (msg.type() === 'error') console.log('[page error]', msg.text().slice(0, 200))
})

await page.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
await page.addStyleTag({ content: 'html { scroll-behavior: auto !important; }' })
await page.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 2800))

// 先滚一遍，触发所有滚动出现动画
await page.evaluate(async () => {
  const step = Math.round(window.innerHeight * 0.6)
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 280))
  }
  window.scrollTo(0, 0)
  await new Promise((r) => setTimeout(r, 700))
})

// 首页按真实首屏截图（保留导航）
await page.screenshot({ path: `${OUT}/01-hero.png` })
console.log('shot 01-hero')

// 其余区块整段截图，隐藏固定层避免叠加
await page.addStyleTag({
  content: '.nav, .progress, .loader, .grain { display: none !important; }'
})

const shots = [
  { name: '02-about', selector: '#about' },
  { name: '03-work', selector: '#work' },
  { name: '04-capability', selector: '#capability' },
  { name: '05-contact', selector: '#contact' }
]

for (const shot of shots) {
  const el = await page.$(shot.selector)
  if (!el) {
    console.log('missing', shot.selector)
    continue
  }
  await el.scrollIntoView()
  await new Promise((r) => setTimeout(r, 1200))
  await el.screenshot({ path: `${OUT}/${shot.name}.png` })
  console.log('shot', shot.name)
}

await browser.close()

// 1920 宽屏首屏复核
const wide = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--force-color-profile=srgb', '--hide-scrollbars']
})
const page2 = await wide.newPage()
await page2.setViewport({ width: 1920, height: 1080, deviceScaleFactor: 1 })
await page2.goto(URL, { waitUntil: 'networkidle2', timeout: 90000 })
await page2.evaluate(() => document.fonts.ready)
await new Promise((r) => setTimeout(r, 2800))
await page2.screenshot({ path: `${OUT}/01-hero-1920.png` })
console.log('shot 01-hero-1920')
await wide.close()
