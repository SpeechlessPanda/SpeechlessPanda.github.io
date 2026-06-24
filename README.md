# SpeechlessPanda's Blog

> 个人博客，主要分享个人成长与随笔，以及作者想写的一切内容。

- 🌐 **博客地址**：[https://speechlesspanda.github.io](https://speechlesspanda.github.io)
- 📦 **源码仓库**：[SpeechlessPanda/blog-s-code](https://github.com/SpeechlessPanda/blog-s-code)（Hexo 源码，push 即自动发布）
- 📦 **发布仓库**：[SpeechlessPanda/SpeechlessPanda.github.io](https://github.com/SpeechlessPanda/SpeechlessPanda.github.io)（生成的静态站点）

---

## ✨ 功能特性

### 📝 内容

- **博客文章**：Markdown 撰写，支持分类、标签、封面、摘要、目录（TOC）、相关文章推荐、上下篇导航、版权声明
- **碎碎念（Memos）**：独立 `/memos/` 页面，记录短动态；支持分页（每页 8 条）、每条独立评论、标签、相对时间、图片灯箱；数据写在 `source/_data/shuoshuo.yml`，复用主题内置 shuoshuo 系统，无 key 时自动用日期生成评论标识
- **OG 分享图自动生成**：构建时为每篇文章生成 1200×630 PNG（SVG 模板 + `@resvg/resvg-js` + 内嵌 LXGW WenKai 字体），蓝→橙主题渐变；自动注入 `og:image` / `twitter:image` / `twitter:card=summary_large_image`，分享到微信 / Twitter / Discord 等平台带预览图
- **独立页面**：关于、友链、分类、标签、归档

### 💬 评论与互动

- **Giscus 评论**：基于 GitHub Discussions，支持 Reactions、多语言、暗色模式联动
- **碎碎念每条可独立评论**：每条对应一个 Giscus discussion
- **评论邮件通知**：有人评论时通过 CI（`comment-email-notify.yml`）自动发邮件通知作者

### 📊 统计与分析

- **busuanzi（不蒜子）**：站点 UV / PV、各文章浏览量统计（轻量第三方计数服务，免后端）

### 🔍 搜索

- **本地搜索**：`hexo-generator-searchdb`，全文即时搜索，无外部服务依赖

### 🌐 SEO 与分发

- **Open Graph meta** + 自动生成的 OG 图
- **RSS 订阅**：`atom.xml`（`hexo-generator-feed`）
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
- **侧边栏组件**：作者卡片、公告、最近文章、分类、标签、归档、网站信息

### 🔤 字体

- **LXGW WenKai**：正文、标题、代码、OG 图统一使用，中英文混排清晰

---

## 🛠️ 技术栈

| 类别 | 技术 | 说明 |
|------|------|------|
| 框架 | [Hexo](https://hexo.io/) 8.1.1 | 静态博客框架 |
| 主题 | [Butterfly](https://butterfly.js.org/) | 功能丰富，本地源码（`themes/butterfly/`） |
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
├── _config.yml                       # Hexo 全局配置（含 og_image 配置块）
├── package.json                      # 依赖与脚本
├── pnpm-lock.yaml
├── README.md
├── source/
│   ├── _posts/                       # 博客文章（Markdown）
│   ├── _data/
│   │   └── shuoshuo.yml              # 碎碎念数据
│   ├── memos/                        # 碎碎念页面（type: shuoshuo）
│   ├── about/ categories/ tags/ link/   # 独立页面
│   └── img/                          # 静态图片（头像、打赏码等）
├── scripts/
│   ├── og-image.js                   # OG 图生成（hexo generator + helper）
│   └── events/
│       ├── sync_comment_notify_workflow.js   # 把发布仓 workflow 同步到 public
│       └── sync_readme_to_public.js          # 把 README 同步到 public
├── themes/
│   └── butterfly/                    # Butterfly 主题（本地源码，配置在其 _config.yml）
├── scaffolds/                        # 文章 / 页面模板（post / page / draft）
├── .github/workflows/
│   ├── deploy-from-source.yml        # push → 自动构建部署
│   ├── comment-email-notify.yml      # Giscus 评论 → 邮件通知
│   └── search-engine-ping.yml        # 部署后 ping 搜索引擎
├── docs/superpowers/                 # 设计文档与实现计划
├── fonts/                            # OG 字体（构建时下载，gitignore）
└── public/                           # 生成产物（gitignore）
```

> 注：本站主题配置直接写在 `themes/butterfly/_config.yml`（站点根没有 `_config.butterfly.yml` 覆盖文件）。

---

## 🚀 自动部署

push 到 `blog-s-code` 的 `main` 分支 → GitHub Actions 自动构建 → 部署到 `SpeechlessPanda.github.io`。

**流程**（`.github/workflows/deploy-from-source.yml`）：
1. checkout 源码
2. setup Node 20 + pnpm 10
3. `pnpm install --frozen-lockfile`
4. **缓存 OG 字体**（`fonts/`，key 基于 `_config.yml`）
5. `pnpm run build`（hexo generate，自动生成碎碎念页面、OG 图、RSS、sitemap 等）
6. sync README 到 public
7. push `public/` 到发布仓库（peaceiris/actions-gh-pages）

触发条件：`main` 分支 push / 手动 `workflow_dispatch`。

---

## 💻 本地开发

```bash
pnpm install        # 安装依赖
pnpm run server     # 本地预览 http://localhost:4000
pnpm run build      # 构建到 public/
pnpm run clean      # 清理缓存与 public
pnpm run publish    # 清理 + 构建 + 部署（本地直接发布）
```

> 首次 build 会自动从 GitHub 下载 LXGW WenKai 字体到 `fonts/`（约 20MB，已 gitignore，后续构建复用）。

### 写新文章

```bash
pnpm run new "文章标题"   # 在 source/_posts/ 生成草稿
```

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

- **Email**：[859635282@qq.com](mailto:859635282@qq.com)
- **GitHub**：[SpeechlessPanda](https://github.com/SpeechlessPanda)
- **RSS**：[https://speechlesspanda.github.io/atom.xml](https://speechlesspanda.github.io/atom.xml)

---

## 📄 许可证

本博客文章内容版权归作者所有，转载请注明出处。

主题 Butterfly 遵循 [GPL-3.0 License](https://github.com/jerryc127/hexo-theme-butterfly/blob/dev/LICENSE)。
