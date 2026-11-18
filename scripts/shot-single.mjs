import puppeteer from 'puppeteer-core'

const FILE = process.argv[2]
const OUT = process.argv[3] || './preview'
const CHROME = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'

const browser = await puppeteer.launch({
  executablePath: CHROME,
  headless: 'new',
  args: ['--force-color-profile=srgb', '--hide-scrollbars', '--allow-file-access-from-files']
})
const page = await browser.newPage()
await page.setViewport({ width: 1728, height: 1080, deviceScaleFactor: 1 })

const errors = []
page.on('pageerror', (e) => errors.push('[pageerror] ' + e.message))
page.on('console', (m) => {
  if (m.type() === 'error') errors.push('[console] ' + m.text().slice(0, 200))
})

await page.goto('file:///' + encodeURI(FILE.replace(/\\/g, '/')).replace(/#/g, '%23'), {
  waitUntil: 'load',
  timeout: 60000
})
await new Promise((r) => setTimeout(r, 3500))

const info = await page.evaluate(() => {
  const v = document.querySelector('.hero__media video')
  return {
    hasReact: !!document.querySelector('#top'),
    sections: ['#top', '#about', '#work', '#capability', '#contact'].filter((s) => document.querySelector(s)).length,
    videoTag: !!v,
    videoSrcPrefix: v ? String(v.currentSrc || v.src).slice(0, 30) : null,
    readyState: v ? v.readyState : null,
    fontDisplay: getComputedStyle(document.querySelector('.hero__title')).fontFamily
  }
})
console.log(JSON.stringify(info, null, 1))
console.log('errors:', errors.slice(0, 6))

await page.screenshot({ path: `${OUT}/single-hero.png` })
console.log('shot single-hero')

await page.addStyleTag({
  content: 'html{scroll-behavior:auto!important} .nav,.progress,.loader,.grain{display:none!important}'
})
await page.evaluate(async () => {
  const step = Math.round(window.innerHeight * 0.6)
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y)
    await new Promise((r) => setTimeout(r, 240))
  }
  window.scrollTo(0, 0)
  await new Promise((r) => setTimeout(r, 600))
})
for (const id of ['about', 'work', 'contact']) {
  const el = await page.$('#' + id)
  await el.scrollIntoView()
  await new Promise((r) => setTimeout(r, 900))
  await el.screenshot({ path: `${OUT}/single-${id}.png` })
  console.log('shot single-' + id)
}

await browser.close()
