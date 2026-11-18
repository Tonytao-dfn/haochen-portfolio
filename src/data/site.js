// 全站内容与素材配置：后续替换文案、项目图、视频只需改这里。
import heroPosterImg from '../assets/img/hero-poster.jpg'
import portraitImg from '../assets/img/portrait.jpg'
import workLandscapeImg from '../assets/img/work-landscape.jpg'
import workPortraitImg from '../assets/img/work-portrait.jpg'
import workCityImg from '../assets/img/work-city.jpg'
import workArchitectureImg from '../assets/img/work-architecture.jpg'
import heroVideoFile from '../assets/video/hero.mp4'

export const profile = {
  name: '陶昊晨',
  nameEn: 'HAOCHEN TAO',
  roles: '视觉设计师 · AI 设计师 · 品牌设计师',
  // 首页背景视频：换片时把新视频放到 src/assets/video/hero.mp4 即可。
  heroVideo: heroVideoFile,
  heroPoster: heroPosterImg,
  poster: portraitImg,
  base: '深圳 · 中国',
  email: '524352059@qq.com',
  phone: '137 9061 8384',
  phoneRaw: '+8613790618384',
  wechat: 'Ultraman1sreal',
  timezone: 'Asia/Shanghai',
  status: 'OPEN FOR WORK · 2026'
}

export const hero = {
  eyebrow: 'PORTFOLIO / 2026',
  title: ['用光影，', '建立秩序。'],
  lede: [
    '以摄影为起点，把光影、结构与品牌识别串成一套可以交付的视觉系统。',
    '中英两地工作，从概念到成片全程跟进。'
  ],
  meta: [
    { k: 'BASE', v: '深圳 22.54°N / 114.06°E' },
    { k: 'FOCUS', v: '视觉 · AI · 品牌' },
    { k: 'STATUS', v: 'OPEN FOR WORK' }
  ]
}

export const about = {
  label: '01 — 个人经历 / ABOUT',
  title: ['作品是证据，', '不是装饰。'],
  lead:
    '我是陶昊晨，视觉设计师。22 岁，深圳与南昌之间往返，本科毕业于英国威斯敏斯特大学营销传媒专业。',
  body: [
    '我的路径从摄影开始：先把静物、人像与风景拍到站得住，再进剧组做制片统筹——管 40 多人的现场，在 20 万预算和 15 天工期内把片子按计划拍完。这段经历让我更在意「能不能交付」，而不只是「好不好看」。',
    '现在我把重心放在视觉与品牌：用 AI 做概念发散与批量适配，用摄影的判断力控制画面，用制片的方法管理交付节奏。'
  ],
  contacts: [
    { k: '电话 PHONE', v: '137 9061 8384', href: 'tel:+8613790618384' },
    { k: '邮箱 EMAIL', v: '524352059@qq.com', href: 'mailto:524352059@qq.com' },
    { k: '微信 WECHAT', v: 'Ultraman1sreal' },
    { k: '坐标 BASE', v: '深圳 / 南昌' }
  ],
  stats: [
    { value: '5', unit: '年', label: '影像创作' },
    { value: '40+', unit: '人', label: '剧组统筹' },
    { value: '20', unit: '万', label: '制片预算管理' },
    { value: '98', unit: '%', label: '客户满意度' }
  ],
  timeline: [
    {
      period: '2025.07 — 2025.10',
      org: '中央广播电视总台 · 统筹组',
      role: '《举世无双》戏曲频道重点项目',
      points: ['对接院团与演员邀约，完成嘉宾舆情排查与上报', '多线并行推进节目录制的前期统筹']
    },
    {
      period: '2021.09 — 2022.12',
      org: 'IKEA 宜家（英国伦敦） · 销售部经理',
      role: '家居饰品部全盘运营',
      points: ['管理 26 万英镑库存，实现财年销售 43 万英镑，同比增长 17%', '调整订货节奏，物流损耗降低 8%，获区域经理表彰', '直接管理 12 人团队，敬业度位列商场前五']
    },
    {
      period: '2021.02 — 2021.04',
      org: '中国传媒大学 · 制片人',
      role: '实践作品《涅槃》外联 / 生活制片',
      points: ['拿下北京 SKP 办公楼拍摄许可，解决剧本关键场景', '天气突变后 2 小时内协调备用场地，避免约 1 万元设备空耗', '统筹 40 余人餐饮、交通与物料，零安全事故']
    },
    {
      period: '2020.11 — 2020.12',
      org: '中国传媒大学 · 制片人',
      role: '学生短片《勿忘我》制片负责人',
      points: ['搭建 40 余人剧组，15 天拍摄按期完成', '管理 20 万元制作经费，设备与场地成本节省约 16%', '作为导演、摄影与美术之间的沟通桥梁']
    },
    {
      period: '2022.09 — 2026.06',
      org: 'University of Westminster · 英国伦敦',
      role: '营销传媒 Marketing & Communications · 本科',
      points: ['核心课程：消费者行为学、数字广告策略、影视制片管理、数字影像创作', '获学院优秀学生奖学金，毕业论文开题获导师推荐']
    }
  ]
}

export const work = {
  label: '02 — 精选项目 / SELECTED WORK',
  title: ['四组影像，', '四种秩序。'],
  note: '全部为个人拍摄与后期作品，按题材拆成四组；首页主视觉取自静物系列。',
  items: [
    {
      index: '01',
      cn: '风景 · 留白的尺度',
      en: 'LANDSCAPE',
      meta: '2023 — 2026 / 7 WORKS',
      desc: '在有限的行程里等光，用大面积留白交代远与静。',
      img: workLandscapeImg,
      span: 'wide',
      ratio: '16 / 9',
      pos: '50% 55%'
    },
    {
      index: '02',
      cn: '人物 · 情绪现场',
      en: 'PORTRAIT',
      meta: '2024 — 2026',
      desc: '现场引导与抓拍，先把人放松，再等一个真实的瞬间。',
      img: workPortraitImg,
      span: 'sm',
      ratio: '4 / 5',
      pos: '50% 18%'
    },
    {
      index: '03',
      cn: '城市 · 夜色与距离',
      en: 'URBAN',
      meta: '2024 — 2026',
      desc: '用夜色和距离交代人与城市的关系，留一盏灯做视觉落点。',
      img: workCityImg,
      span: 'lg',
      ratio: '4 / 3',
      pos: '50% 50%'
    },
    {
      index: '04',
      cn: '建筑 · 结构的秩序',
      en: 'ARCHITECTURE',
      meta: '2025',
      desc: '用对称、透视线与仰角，把建筑的几何关系讲清楚。',
      img: workArchitectureImg,
      span: 'wide',
      ratio: '2 / 1',
      pos: '50% 42%'
    }
  ]
}

export const capability = {
  label: '03 — 个人优势 / CAPABILITY',
  title: ['能被交付的', '才算能力。'],
  note: '六项能力围绕一件事：把想法稳定地做成画面。',
  items: [
    {
      index: '01',
      tag: 'NARRATIVE',
      title: '视觉叙事',
      desc: '从概念到画面，用构图、光线与节奏建立观看顺序，让作品先被读懂，再被记住。',
      span: 'lg'
    },
    {
      index: '02',
      tag: 'AI WORKFLOW',
      title: 'AI 创作流程',
      desc: '用生成式工具做概念发散、方案迭代与多尺寸适配，把重复劳动交给流程，把判断留给自己。',
      span: 'md'
    },
    {
      index: '03',
      tag: 'BRAND',
      title: '品牌视觉',
      desc: '把品牌性格落到字体、色彩、影像与版式，沉淀成可复用的规范，而不是一次性的稿子。',
      span: 'sm'
    },
    {
      index: '04',
      tag: 'IMAGE',
      title: '影像与布光',
      desc: '静物、人像、空间三类拍摄，自然光与人工布光结合，重视材质质感与情绪准确度。',
      span: 'sm'
    },
    {
      index: '05',
      tag: 'PRODUCTION',
      title: '制片统筹',
      desc: '40 余人剧组全流程：预算、通告、场地、物资与突发处理，让创作不被执行拖累。',
      span: 'sm'
    },
    {
      index: '06',
      tag: 'BILINGUAL',
      title: '中英双语沟通',
      desc: '中英两地学习与工作背景，雅思 7.5，可直接对接海外团队、客户与拍摄现场。',
      span: 'full'
    }
  ]
}

export const contact = {
  label: '04 — 联系 / CONTACT',
  title: ['把想法，', '交给我。'],
  note: '目前开放 2026 年视觉设计、品牌视觉与影像类合作，也接受全职机会。',
  scopeLabel: 'SCOPE / 合作范围',
  scope: ['视觉设计与版式', '品牌视觉系统', '影像拍摄与后期', 'AI 视觉工作流'],
  rows: [
    { k: 'PHONE', v: '137 9061 8384', href: 'tel:+8613790618384' },
    { k: 'EMAIL', v: '524352059@qq.com', href: 'mailto:524352059@qq.com' },
    { k: 'WECHAT', v: 'Ultraman1sreal' },
    { k: 'BASE', v: '深圳 · 南昌' }
  ]
}
