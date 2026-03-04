# SpeechlessPanda's Blog

> 个人博客，主要分享个人成长与随笔，以及作者想写的一切内容。

🌐 **博客地址**：[https://speechlesspanda.github.io](https://speechlesspanda.github.io)

---

## 📖 关于博客

本博客由 **SpeechlessPanda** 维护，主要内容包括：

- **个人成长与随笔**：记录大学生活、学习经验、人生选择与思考
- **不定主题内容**：作者想写的任何内容，包括但不限于技术感悟、生活观察等

---

## 🛠️ 技术栈

### 核心框架

| 技术                                             | 版本                 | 说明                       |
|--------------------------------------------------|----------------------|----------------------------|
| [Hexo](https://hexo.io/)                         | ^8.0.0（当前 8.1.1） | 静态博客框架，基于 Node.js |
| [Hexo Butterfly 主题](https://butterfly.js.org/) | —                    | 功能丰富的 Hexo 主题       |

### 包管理器

| 工具                     | 说明                    |
|--------------------------|-------------------------|
| [pnpm](https://pnpm.io/) | 高效的 Node.js 包管理器 |

### 评论系统

| 技术                          | 说明                                                                     |
|-------------------------------|--------------------------------------------------------------------------|
| [Giscus](https://giscus.app/) | 基于 GitHub Discussions 的评论系统，支持 Reactions、多语言，无需独立后端 |

评论数据存储于本博客对应的 [GitHub 仓库 Discussions](https://github.com/SpeechlessPanda/SpeechlessPanda.github.io/discussions) 中，登录 GitHub 账号即可参与评论。

### 访客流量统计

| 技术                                 | 说明                                                                |
|--------------------------------------|---------------------------------------------------------------------|
| [Umami Analytics](https://umami.is/) | 开源、注重隐私的网站流量统计工具，支持 UV / PV 统计，无 Cookie 追踪 |

使用 Umami Cloud 托管，统计站点 UV（独立访客数）、站点 PV（页面总访问量）及各页面 PV。

### 语法高亮

- 使用 **highlight.js** 进行代码高亮

### 部署平台

| 平台                                      | 说明                     |
|-------------------------------------------|--------------------------|
| [GitHub Pages](https://pages.github.com/) | 静态页面托管，免费、稳定 |

---

## 📁 项目结构

```
blog/
├── _config.yml          # Hexo 全局配置
├── package.json         # 项目依赖
├── source/
│   ├── _posts/          # 博客文章（Markdown）
│   ├── about/           # 关于页面
│   ├── categories/      # 分类页面
│   ├── tags/            # 标签页面
│   └── link/            # 友链页面
├── themes/
│   └── butterfly/       # Butterfly 主题及配置
├── public/              # 生成的静态文件（部署目录）
└── scaffolds/           # 文章/页面模板
```

---

## 📬 联系方式

- **Email**：[859635282@qq.com](mailto:859635282@qq.com)
- **GitHub**：[SpeechlessPanda](https://github.com/SpeechlessPanda)
- **RSS 订阅**：[https://speechlesspanda.github.io/atom.xml](https://speechlesspanda.github.io/atom.xml)

---

## 📄 许可证

本博客文章内容版权归作者所有，转载请注明出处。
主题 Butterfly 遵循 [GPL-3.0 License](https://github.com/jerryc127/hexo-theme-butterfly/blob/dev/LICENSE)。
