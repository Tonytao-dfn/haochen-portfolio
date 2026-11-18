# 陶昊晨 · 个人作品集 / HAOCHEN TAO — PORTFOLIO 2026

暗色系个人作品集站点，定位「视觉设计师 · AI 设计师 · 品牌设计师」。
React 18 + Vite 5 实现，已打包成**单文件 HTML**，双击可开、也可以直接托管到 GitHub Pages。

线上地址：`https://<你的用户名>.github.io/haochen-portfolio/`（部署完成后替换）

---

## 〇、当前状态（已经替你做完的部分）

这个文件夹**已经是一个合法的 git 仓库**了：分支 `main`，42 个文件已提交（commit `4fe1e6e`），工作区干净。
初始化用的是 GitHub Desktop 自带的 git（`%LOCALAPPDATA%\GitHubDesktop\app-3.6.11\resources\app\git\cmd\git.exe`，版本 2.56.1），所以本机不需要再单独装 Git。

因此你现在在 GitHub Desktop 里可以直接：

1. 菜单 **File → Add local repository…** → 选中本文件夹 `haochen-portfolio` → Add
2. 顶部出现 `haochen-portfolio` 仓库后，点右上角 **Publish repository**
   - Name 保持 `haochen-portfolio`（它会成为地址里的仓库名）
   - **取消勾选 "Keep this code private"**（私有仓库不能免费开 Pages）
3. 发布完成后，去仓库网页 **Settings → Pages**，Source 选 `Deploy from a branch`，Branch `main`，Folder `/docs` → Save

提交作者目前设为「陶昊晨 / 524352059@qq.com」，可在 GitHub Desktop 的 Repository settings 里改。想让提交显示你的 GitHub 头像，邮箱要和你账号绑定的邮箱一致。

---

## 一、目录说明

```
haochen-portfolio/
├─ docs/
│  ├─ index.html        ★ 已构建的整站单文件（JS / CSS / 6 张图 / 首页视频全部内联，约 2MB）
│  └─ .nojekyll         让 GitHub Pages 跳过 Jekyll 处理
├─ src/
│  ├─ data/site.js      ★ 全站文案、联系方式、项目图映射（改内容只改这里）
│  ├─ components/       Nav / Hero / About / Marquee / Work / Capability / Contact
│  ├─ styles/           base.css（设计 token）+ 各区块样式
│  └─ assets/           img（作品图）、video/hero.mp4（首页视频）
├─ index.html           Vite 开发入口
├─ single.html          单文件构建入口
├─ vite.config.js       常规构建
├─ vite.config.single.js 单文件构建（把一切内联进一个 html）
├─ scripts/shot.mjs     截图核对脚本（不影响部署，可删）
├─ package.json
└─ README.md
```

设计系统速记：底色 `#08090A`、暖白墨色文字 `#E9E6DF`、荧光酸绿强调 `#C9F45C`（仅用于序号/状态点/悬停线）；
标题 Noto Serif SC、正文 Inter、标签 IBM Plex Mono；版心 `--max 1800px` + 48px gutter ≈ 1704px。

---

## 二、部署到 GitHub Pages（三种方式，任选一种）

### 方式 A：网页上传，不装任何软件（最快，推荐先用这个上线）

1. 打开 github.com → 右上角 **+** → **New repository**
   - Repository name：`haochen-portfolio`
   - 选 **Public**（私有仓库不能免费开 Pages）
   - 不要勾选 "Add a README file"
2. 进入空仓库 → **Add file** → **Upload files** → 把 `haochen-portfolio` 文件夹里的**全部内容**（docs、src、public、scripts、配置文件、README）拖进去 → **Commit changes**
   - 若一次上传文件过多，可分两次：先传根目录文件，再拖 `src`、`docs` 两个文件夹
3. 仓库 → **Settings** → 左侧 **Pages**
   - **Source**: Deploy from a branch
   - **Branch**: `main`，**Folder**: `/docs` → **Save**
4. 等 1–2 分钟，访问 `https://<你的用户名>.github.io/haochen-portfolio/`

### 方式 B：装 Git 后用命令行推

先安装 Git for Windows（git-scm.com），装完重开终端，然后：

```bash
cd "C:\Users\ZhuanZ\Doubao\chats\2026-11-18\new-chat\haochen-portfolio"
git branch -M main              # 已存在，可跳过
git remote add origin https://github.com/<你的用户名>/haochen-portfolio.git
git push -u origin main
```

> 本地已 init 并有一次提交，所以这里不用再 `git init`。
> 如果不想装 Git，可以直接调用 GitHub Desktop 自带的那份：
> `& "$env:LOCALAPPDATA\GitHubDesktop\app-3.6.11\resources\app\git\cmd\git.exe" push -u origin main`

> 远程仓库要先在 GitHub 网页上建好（空仓库，公开）。
> 推送时若要求登录，用 GitHub 的 Personal Access Token 当密码（Settings → Developer settings → Tokens）。
> 推完仍然要去 Settings → Pages 选 `main` / `/docs`。

### 方式 C：GitHub Desktop（图形化，以后更新最省事）

装 GitHub Desktop → **File → Add local repository** → 选 `haochen-portfolio` 文件夹 →
**Publish repository**（勾选保持公开）→ 推送完成后同样去 Settings → Pages 选 `main` / `/docs`。

---

## 三、以后怎么更新内容

1. 改文案 / 换作品图：编辑 `src/data/site.js`；换图把新图放进 `src/assets/img/` 并改里面的引用
2. 重新打包单文件：
   ```bash
   npm install          # 首次
   npm run build:single # 产出 dist-single/single.html
   ```
3. 把 `dist-single/single.html` 覆盖成 `docs/index.html`
4. 提交并推送（或在网页上直接重新上传这个文件），Pages 会在一两分钟内自动更新

只想临时改一两句话，也可以直接改 `docs/index.html` 里的构建产物——但下次打包会覆盖，长期还是改源码。

---

## 四、几个注意点

- **不要提交 `node_modules/`**：`.gitignore` 已排除。
- `docs/index.html` 有 2MB，是因为 6 张作品图和 6 秒首页视频都内联成了 base64。好处是**一个文件就能发布、不依赖任何图床**；坏处是文件偏大，后续如果图更多，建议改回 `public/` 外链方式。
- 首页视频是 1280×720，在 2K 以上屏幕上会略软；换更高分辨率素材时直接替换 `src/assets/video/hero.mp4` 再打包。
- 想绑自己的域名：Settings → Pages → **Custom domain**，然后在 `docs/` 下加一个 `CNAME` 文件写域名。
- 想改成 Actions 自动构建（push 源码后自动生成并部署，不用手动覆盖 docs），可以把下面这段存成 `.github/workflows/pages.yml`，并把 Pages 的 Source 改成 **GitHub Actions**：

```yaml
name: Deploy portfolio
on:
  push:
    branches: [main]
permissions:
  contents: read
  pages: write
  id-token: write
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - run: npm ci
      - run: npm run build:single
      - run: mkdir -p out && cp dist-single/single.html out/index.html && touch out/.nojekyll
      - uses: actions/upload-pages-artifact@v3
        with:
          path: out
  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment: github-pages
    steps:
      - uses: actions/deploy-pages@v4
```

---

## 五、内容来源

全部文案与数据取自《陶昊晨个人简历》与《个人摄影作品集》，未虚构数据。
站点身份定位按本人要求写作「视觉设计师 / AI 设计师 / 品牌设计师」；简历中的求职意向为制片 / 编导 / 摄影类，如需与投递岗位统一，改 `src/data/site.js` 里的 `profile.roles` 即可。
</content>
