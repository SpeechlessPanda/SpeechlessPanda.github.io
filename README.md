# SpeechlessPanda's Blog

> 个人博客，主要分享个人成长与随笔，以及作者想写的一切内容。

- 🌐 **博客地址**：[https://speechlesspanda.github.io](https://speechlesspanda.github.io)
- 📦 **源码仓库**：[SpeechlessPanda/blog-s-code](https://github.com/SpeechlessPanda/blog-s-code)（Hexo 源码，push 即自动发布）
- 📦 **发布仓库**：[SpeechlessPanda/SpeechlessPanda.github.io](https://github.com/SpeechlessPanda/SpeechlessPanda.github.io)（生成的静态站点）

---

## ✨ 功能特性

### 📝 内容

- **博客文章**：Markdown 撰写，支持分类、标签、封面、摘要、目录（TOC）、相关文章推荐、上下篇导航、版权声明
- **博客系列**：`source/_posts/<系列名>/index.md` 只存系列标题和描述（无创建时间）；同文件夹其它 md 是章节，出现在 `/series/<系列名>/`，**不**出现在 `/blog/` 文章流。文章流按独立文章和系列卡片混排，卡片时间取该系列最新一章。把已发表文章拖进文件夹即可重组，不用改 front-matter
- **碎碎念（Memos）**：独立 `/memos/` 页面，记录短动态；支持分页（每页 8 条）、每条独立评论、标签、相对时间、图片灯箱；数据写在 `source/_data/shuoshuo.yml`，复用主题内置 shuoshuo 系统，无 key 时自动用日期生成评论标识
- **OG 分享图自动生成**：构建时为每篇文章生成 1200×630 PNG（SVG 模板 + `@resvg/resvg-js` + 内嵌 LXGW WenKai 字体），蓝→橙主题渐变；自动注入 `og:image` / `twitter:image` / `twitter:card=summary_large_image`，分享到微信 / Twitter / Discord 等平台带预览图
- **站点导航**：首页（`/`）即「关于」页，复用 `source/about/index.md` 的内容（单一来源），全屏封面 + 打字机，右侧栏保留（作者卡片 / 公告 / 网站信息）；文章列表（含最新碎碎念、系列卡片）位于 `/blog/`（矮页头，和关于/友链一样，不显示右侧栏）；另有**友链、标签、归档、碎碎念**等页面；「分类」功能已停用并移除

### 💬 评论与互动

- **Giscus 评论**：基于 GitHub Discussions，支持 Reactions、多语言、暗色模式联动
- **碎碎念每条可独立评论**：同页多条评论区用独立 iframe 直嵌 giscus `/widget`（绕过 client.js 单例），每条对应一个 Giscus discussion；登录态写入 localStorage（`giscus-session`，与官方 client.js 格式一致），iframe 回传 session 失效错误时自动清除并按未登录态重载，避免过期 session 触发 `oauth/token` 400 导致整条评论区空白；giscus.app 被广告拦截/跟踪防护屏蔽时，每条评论区常驻"在新标签页打开评论 ↗"一键出口
- **评论邮件通知**：`comment-email-notify.yml` 监听 `discussion`（首评/新建讨论）与 `discussion_comment`（后续回复），有评论即通过 QQ SMTP 自动发邮件通知作者（在发布仓运行）
- **评论触发重建**：新评论到达时，`comment-email-notify.yml` 还会向源仓派发 `repository_dispatch`（`rebuild-on-comment`），`deploy-from-source.yml` 监听该事件自动重建，刷新碎碎念/文章的 `commentCount`，让有评论的碎碎念评论区自动展开（否则要等下次推送）。需在发布仓配置 `SOURCE_DEPLOY_PAT`（对源仓有 Actions:write 权限的 PAT）；未配置则跳过，不影响邮件通知

### 📊 统计与分析

- **busuanzi（不蒜子）**：站点 UV / PV、各文章浏览量统计（轻量第三方计数服务，免后端）

### 🔍 搜索

- **本地搜索**:`hexo-generator-searchdb`,全文即时搜索,无外部服务依赖(碎碎念由主题注入 `search.xml`,搜索结果直达 `/memos/<时间戳>/` 独立页)

### 🌐 SEO 与分发

- **Open Graph meta** + 自动生成的 OG 图
- **RSS 订阅**:`atom.xml` 由 Panda 主题内置生成器生成(`feed.enable`,官方 `hexo-generator-feed` 已停用):**独立文章 + 系列章节 + 碎碎念按日期倒序混排**（系列 `index.md` 不是文章、不进 feed）；碎碎念日期按站点时区解析;每条碎碎念生成独立页 `/memos/<时间戳>/`(noindex),旧文更新(距发布超 1 天,依赖 CI 恢复文件 mtime)生成 stub 页 `文章路径/u/<更新时间>/`——条目 id/link 的区分信息全部放在 URL **路径**里(有阅读器丢 fragment、有的丢 query,路径是唯一全阅读器普适的成分),任何 RSS 阅读器都能正确识别新碎碎念、新章节与旧文更新
- **站点地图**：`sitemap.xml` + `baidusitemap.xml`（百度）+ `robots.txt`（`hexo-generator-robotstxt`）
- **搜索引擎 ping**：CI 部署后自动通知搜索引擎（`search-engine-ping.yml`）
- **分享按钮**：sharejs（微信 / X / 微博 / QQ / Facebook）

### ⚡ 性能

- **pjax**：无刷新页面跳转
- **图片懒加载**：vanilla-lazyload
- **instant.page**：鼠标悬停预加载链接
- **字体异步加载**：LXGW WenKai webfont（非阻塞）
- **加载动画**：fullpage-loading preloader
- **CDN**：第三方资源走 jsdelivr

### 🎨 视觉与体验

- **暗色模式**：跟随系统设置，可手动切换并记忆
- **阅读模式**：readmode，沉浸式阅读
- **主题渐变**：自定义蓝→橙渐变（`#6ec6ff → #90b7ff → #ffd2a8`）应用于 header / footer / 导航栏（通过 inject CSS）
- **代码高亮**：highlight.js，Mac 风格代码窗口，darker 主题，一键复制
- **图片灯箱**：fancybox
- **打赏**：微信 / 支付宝二维码
- **版权声明**：CC BY-NC-SA 4.0
- **字数统计 / 阅读时长**：hexo-wordcount
- **打字机副标题**：typed.js（首页一言式轮播）
- **进入动画 / 圆角 UI / 分割线图标**
- **侧边栏组件**：作者卡片、公告、最近文章、标签、归档、网站信息（分类卡片已随分类功能停用；首页侧栏精简为作者卡片、公告、网站信息，文章内容页保留最近文章等）

### 🔤 字体

- **LXGW WenKai**：正文、标题、代码、OG 图统一使用，中英文混排清晰

---

## 🛠️ 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 框架 | [Hexo](https://hexo.io/) 8.1.2 | 静态博客框架 |
| 主题 | [Panda](https://github.com/SpeechlessPanda/hexo-theme-panda) 1.1.2 | 本站自建主题（npm 依赖 `hexo-theme-panda`），基于 Butterfly 5.7.0 二次开发(Apache-2.0) |
| 包管理 | [pnpm](https://pnpm.io/) 10 | 高效磁盘 |
| 运行时 | Node.js 20 | CI 运行环境 |
| OG 渲染 | [@resvg/resvg-js](https://github.com/thx/resvg-js) | SVG → PNG，跨平台中文字体 |
| 评论 | [Giscus](https://giscus.app/) | GitHub Discussions |
| 统计 | [busuanzi](https://busuanzi.ibruce.info/) | UV/PV 计数 |
| 部署 | [GitHub Pages](https://pages.github.com/) + Actions | 自动 |

---

## 📁 项目结构

```text
blog/
├── _config.yml                       # Hexo 全局配置(index_generator 文章流指向 /blog)
├── _config.panda.yml                 # 个人主题配置(覆盖 node_modules/hexo-theme-panda/_config.yml 默认值)
├── package.json                      # 依赖与脚本
├── pnpm-lock.yaml
├── README.md
├── source/
│   ├── _posts/                       # 独立文章；系列为 _posts/<系列名>/index.md + 同级章节 md
│   ├── _data/
│   │   └── shuoshuo.yml              # 碎碎念数据
│   ├── index.md                      # 首页:渲染「关于」内容(layout: home,主题特性 home_about)
│   ├── memos/                        # 碎碎念页面（type: shuoshuo）
│   ├── about/ tags/ link/            # 独立页面（分类页已停用并删除）
│   ├── img/                          # 个人头像、favicon、微信/支付宝打赏码（保留 /img/ URL）
│   └── _drafts/                      # 草稿（render_drafts: false，不发布）
├── scripts/
│   └── events/                       # 站点级构建事件（CI 相关，不属于主题）
│       ├── sync_comment_notify_workflow.js   # 把发布仓 workflow 同步到 public
│       └── sync_readme_to_public.js          # 把 README 同步到 public
├── tools/
│   └── verify-feed.js                # atom.xml 条目身份标识校验（pnpm run verify，CI 构建后自动执行）
├── themes/
│   └── panda/                        # Panda 主题（碎碎念增强/博客系列/feed/OG 图/渐变等已内建为主题特性）
├── scaffolds/                        # 文章 / 页面模板（post / page / draft）
├── .github/workflows/
│   ├── deploy-from-source.yml        # push → 自动构建并部署到发布仓(设 exclude_assets="" 把 .github/workflows 一起带过去)
│   ├── retry-pages-deploy.yml        # 发布仓 pages 部署失败时自动重跑（同步到发布仓运行，源仓里被守卫跳过）
│   ├── comment-email-notify.yml      # Giscus 评论(首评+回复)→ 邮件通知(在发布仓运行)
│   └── search-engine-ping.yml        # 发布仓部署后 ping 搜索引擎(在发布仓运行)
├── docs/superpowers/                 # 设计文档与实现计划
├── fonts/                            # OG 字体（构建时下载，gitignore）
└── public/                           # 生成产物（gitignore）
```

> 注:个人配置集中在站点根 `_config.panda.yml`(菜单、Giscus、头像、字体、侧栏、feed/OG 开关等);主题自带 `_config.yml` 是默认配置,含每个键的注释,不要改——升级主题会被覆盖。碎碎念增强、博客系列、Atom feed、OG 图、渐变外观、链接新标签页、fish/typst 高亮均由主题脚本提供,不在本站 scripts/ 里。系列作者指南见主题包的 `README_CN.md`。
>
> 主题是 npm 依赖(`package.json` 的 `hexo-theme-panda`),不在 `themes/` 目录里。升级只需改版本号:
>
> ```bash
> pnpm update hexo-theme-panda
> ```
>
> ⚠️ Hexo **优先**加载 `themes/<主题名>`,其次才是 `node_modules/hexo-theme-<主题名>`。所以 `themes/` 下不要留 Panda 的副本,否则 npm 更新会悄悄失效(1.1.3 起构建时会打印警告)。

---

## 🚀 自动部署

push 到 `blog-s-code` 的 `main` 分支 → GitHub Actions 自动构建 → 部署到 `SpeechlessPanda.github.io`。

**流程**（`.github/workflows/deploy-from-source.yml`）：
1. checkout 源码（`fetch-depth: 0`）并**按 git 提交时间恢复文件 mtime**——否则所有文章的 `updated` 都等于 checkout 时间，RSS 旧文更新推送会误判刷屏
2. setup Node 20 + pnpm 10
3. `pnpm install --frozen-lockfile`
4. **缓存 OG 字体**（`fonts/`，key 基于 `_config.yml`）
5. `pnpm run build`（hexo generate，自动生成碎碎念页面、OG 图、RSS、sitemap 等）
6. `node tools/verify-feed.js` 校验 atom.xml 条目身份标识，失败即中断部署
7. sync README + 发布仓 workflow（comment-email-notify / search-engine-ping / retry-pages-deploy）到 public
8. push `public/`（含 `.github/workflows`，通过 `exclude_assets: ""` 不再排除）到发布仓库（peaceiris/actions-gh-pages）

触发条件：`main` 分支 push / 手动 `workflow_dispatch` / 发布仓收到新评论时派发的 `repository_dispatch`（`rebuild-on-comment`，用于刷新 `commentCount`，详见「评论触发重建」）。

> 发布仓的 `pages-build-deployment` 偶发平台错误 "Deployment failed, try again later." 时，`retry-pages-deploy.yml`（同步到发布仓，由 workflow_run 立即触发 + 每 15 分钟定时兜底）会自动重跑（最多 3 次，防死循环），无需人工介入。
> 注：`comment-email-notify` / `search-engine-ping` / `retry-pages-deploy` 由 scripts/events/sync_comment_notify_workflow.js 同步到发布仓后在那里激活（均带 `if: github.repository=='SpeechlessPanda/SpeechlessPanda.github.io'` 守卫，源仓里自动跳过）。

---

## 💻 本地开发

```bash
pnpm install        # 安装依赖
pnpm run server     # 本地预览 http://localhost:4000
pnpm run build      # 构建到 public/
pnpm run verify     # 校验 atom.xml 条目身份标识（需在 build 之后）
pnpm run clean      # 清理缓存与 public
pnpm run publish    # 清理 + 构建 + 部署（本地直接发布）
```

> 首次 build 会自动从 GitHub 下载 LXGW WenKai 字体到 `fonts/`（约 20MB，已 gitignore，后续构建复用）。

### 写新文章 / 系列

站点没有 `pnpm run new` 脚本，用 Hexo 原生命令（主题提供 `series` layout 和 `--series`）：

```bash
pnpm exec hexo new "文章标题"                          # source/_posts/文章标题.md
pnpm exec hexo new series "大学道路入门"               # source/_posts/大学道路入门/index.md
pnpm exec hexo new --series "大学道路入门" "第一章"    # source/_posts/大学道路入门/第一章.md
```

`index.md` 必须有 `title`、`description` 两个键（描述可空），不要写 `date`。`cover` 是系列封面（和文章 `cover` 一样）：填 `/img/foo.jpg` 或图片 URL 当封面图，填渐变/`#色值` 当 CSS 背景，留空或 `false` 则卡片无图、系列页页头用主题默认顶图。把已有文章拖进该文件夹即可并入系列，下次构建后它们会从 `/blog/` 消失、出现在系列页。

### 写新碎碎念

编辑 `source/_data/shuoshuo.yml`，按格式追加一条：

```yaml
- date: 2026-06-25 10:00      # 必填
  content: |                   # 必填，支持 markdown
    一条新的碎碎念。
  tags: [生活]                 # 可选
  # key 可选；不写会自动用日期生成（默认就能评论）
```

然后 `pnpm run build` 或直接 push（CI 自动发布）。

---

## 🔄 多设备协作

- **源码仓库**（`blog-s-code`）：保存 Hexo 源码，所有设备 push 此处
- **发布仓库**（`SpeechlessPanda.github.io`）：CI 自动推送静态文件，勿手动改

### 一次性配置

在源码仓库 `Settings → Secrets and variables → Actions` 新增 Secret：
- `PAGES_DEPLOY_TOKEN`：GitHub PAT（classic），至少勾选 `repo`（用于向发布仓库推送）

### 日常更新

1. 任意设备 `clone` 源码仓库
2. 修改文章 / 配置后提交并 push 到 `main`
3. Actions 自动构建并部署

---

## 📬 联系方式

- **Email**：[zhoushimingyu@qq.com](mailto:zhoushimingyu@qq.com)
- **GitHub**：[SpeechlessPanda](https://github.com/SpeechlessPanda)
- **RSS**：[https://speechlesspanda.github.io/atom.xml](https://speechlesspanda.github.io/atom.xml)

---

## 📄 许可证

本博客文章内容版权归作者所有，转载请注明出处。

主题 Panda 遵循 [Apache-2.0 License](https://github.com/SpeechlessPanda/hexo-theme-panda/blob/main/LICENSE),其上游 Butterfly 同样为 [Apache-2.0](https://github.com/jerryc127/hexo-theme-butterfly/blob/master/LICENSE)。
