# 项目收藏

> 这篇博客是由 AI 编写，但里面的项目是由我自己 github 上 star 的仓库。后续会持续更新。 本次新增： dsh-superagent 、 OpenVaala 、 Anti-Defensive Writing 、 dsh-our-free-model 、 Oleafly 、 Fly Island 、 MyGo 、 Craft Anything 、 gpu-unlock-ada 。 收集…

- Published: 2026-06-06
- Author: SpeechlessPanda
- Tags: 编程, 知识
- Original page: https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/index.html
- License: [CC BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/)

---

> 这篇博客是由 AI 编写，但里面的项目是由我自己 github 上 star 的仓库。后续会持续更新。

本次新增：[dsh-superagent](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-dsh-superagent)、[OpenVaala](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-openvaala)、[Anti-Defensive Writing](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-anti-defensive-writing)、[dsh-our-free-model](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-dsh-our-free-model)、[Oleafly](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-oleafly)、[Fly Island](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-fly-island)、[MyGo](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-mygo)、[Craft Anything](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-craft-anything)、[gpu-unlock-ada](https://speechlesspanda.github.io/2026/06/06/%E9%A1%B9%E7%9B%AE%E6%94%B6%E8%97%8F/#proj-gpu-unlock-ada)。

收集 GitHub 上值得关注的优质开源项目，按类别整理，持续更新。Star 数截至 2026-11-16（每月更新一次）。🆕 标记表示最近一次同步新增的项目，点击下方分类标题可展开查看详情。

**AI 编码代理**

这类项目是当前最火的赛道——让 AI 直接在终端里帮你写代码、跑任务。

- [Cherry Studio](https://github.com/CherryHQ/cherry-studio) ⭐ 53.6k — 跨平台 AI 工作台（Windows/macOS/Linux）：多模型对话、可自定指令与工具权限的代理、本地知识库、图像生成与定时任务都在一处，还能通过 Channels 接入消息平台。亮点是桌面 GUI 里把对话、代理、知识与自动化打包，适合不想在终端里用 AI 的用户。

- [Goose](https://github.com/aaif-goose/goose) ⭐ 56.7k — 开源可扩展 AI 代理。以原生桌面应用为主，同时提供 CLI 和 API，超越简单的代码建议，支持安装、执行、编辑和测试，可搭配任意 LLM 使用。亮点是基于 MCP 开放标准的扩展架构（70+ extensions），从桌面到自动化流程都能接。

- [Warp](https://github.com/warpdotdev/warp) ⭐ 66.0k — 诞生于终端的 agentic 开发环境。内置 Warp Agent，也可接入 Claude Code、Codex、Gemini CLI 等编码代理，把终端变成编排代理的工作台。

- [Toad](https://github.com/batrachianai/toad) ⭐ 3.5k — 终端 AI 统一接口。用一个工具统一管理 Claude、Gemini、Codex 等不同厂商的编码代理，可同时运行多个代理并统一查看状态，解决终端环境下多 AI 后端切换的痛点。

- [CC-Switch](https://github.com/farion1231/cc-switch) ⭐ 154.8k — 跨平台桌面 All-in-One 管理器（Tauri 构建）。统一管理 Claude Code、Claude Desktop、Codex、Gemini CLI、Grok Build、OpenCode、OpenClaw、Hermes Agent、Pi、MiniMax Code 共 10 款 AI 编码工具的 API 供应商配置，一键导入、托盘即时切换，并统一管理 MCP 与 Skills。亮点是真正做到了多工具配置的一站式管理。

- [Codex Web](https://github.com/0xcaff/codex-web) ⭐ 349 — Codex Desktop 的浏览器前端。后端留在你控制的机器上（云服务器、家庭实验室、Mac mini），合盖后代理继续运行，可从任意设备的浏览器重连，解决了纯终端交互不够直观的问题。

- [DeepSeek Harness](https://github.com/deepseek-ai/deepseek-harness) ⭐ 282.0k — DeepSeek 官方开源的 agent harness（dsh），"一切皆插件"架构，基于 Cordis 构建。一行 `npx @deepseek-ai/dsh web` 即可启动 Web UI。亮点是官方出品加彻底插件化的架构；注意仍处 developer preview，迭代快、存在破坏性变更。

- [oh-my-pi](https://github.com/can1357/oh-my-pi) ⭐ 39.1k — 把 IDE 接线进来的终端 AI 编码代理（pi-mono 的 fork）。支持 hash-anchored 编辑、14 个 LSP 操作、Python/浏览器/子代理和 60+ 模型提供商，核心约 8 万行 Rust。亮点是把 IDE 的代码智能直接接进终端代理。

- [OpenCodeReview](https://github.com/alibaba/open-code-review) ⭐ 52.5k — 阿里开源的代码评审工具，源自阿里内部官方 AI 评审助手，服务数万开发者后开源。确定性流水线 + LLM Agent 混合架构，行级精确评论，内置 NPE、线程安全、XSS、SQL 注入等多语言规则集。亮点是同模型下 Precision/F1 显著高于通用代理，token 消耗仅约 1/9。

- [Pi](https://github.com/earendil-works/pi) ⭐ 122.3k — AI 代理工具包（单体仓库）：统一多提供商 LLM API、Agent 运行时、TUI 终端 UI 库和可自扩展的编码代理 CLI，Discord/Telegram 聊天自动化在独立仓库 pi-chat。亮点是从底层 LLM 调用到上层编码代理全链路自研，供应链加固严格（install-lock 锁定传递依赖、预提交拦截 lockfile 变更、定时 `npm audit signatures`）。

- [Happy](https://github.com/slopus/happy) ⭐ 24.7k — 在同一个应用里编排 Claude、Codex、Grok 等编码代理（MIT 开源）。复用你已有的订阅，不另买席位；本仓库包含 iOS/Android/Web 客户端、原版 CLI 与中继服务器，桌面端在 happy-desktop。会话可跨设备接力，端到端加密，还能拉人进同一会话一起看、一起操作。

- [HAPI](https://github.com/tiann/hapi) ⭐ 5.4k — 本地优先的编码代理远程接管 hub。包住官方 Claude Code、Codex、Cursor Agent、Grok Build、OpenCode、Kimi、Copilot、Pi、DeepSeek Harness 等会话，用 iOS/Android 原生 App、Web/PWA 或 Telegram Mini App 远程操作。亮点是接管而不是替换原 CLI（终端体验不变），手机上可一键批准请求、语音下指令；README 自称 Happy 的本地优先替代。

- <span id="proj-dsh-superagent"></span>🆕 [dsh-superagent](https://github.com/deepseek-ai/dsh-superagent-prototype) ⭐ 23.4k — DeepSeek Harness 的一个 bundle：面向单个 GitHub 仓库的主动式编码代理。它监听仓库与（可选的）飞书，有人允许它干活时开一个工作项，在自己的代理会话和目录里做完，再回到原会话答复（通常是开 PR），Web 面板列出需要人处理的事。亮点是把「尽量少占用人的注意力」写成授权与会话规则；官方明示这是研究原型，不是 DeepSeek 正式产品，工程风格不统一，用前需自行审查（MIT）。

- <span id="proj-openvaala"></span>🆕 [OpenVaala](https://github.com/VaalaCat/openvaala) ⭐ 14 — 可自托管的通用代理系统（Go，MIT）：代理循环集中在运行时，工具执行分发到你指定的机器。终端 UI、Web UI、桌面端、Zed 等 ACP 编辑器、Codex 客户端都接到同一运行时和同一会话，流式输出与排队消息共享；一个对话可同时使用本机、内置沙箱和多台 SSH 主机，模型走 OpenAI Chat Completions / Responses 或 Claude Messages，工具走 MCP。注意目前只支持 Linux 与 macOS。

**AI 代理技能与框架**

这类项目关注 AI 代理的能力扩展和编排方式。

- [Superpowers](https://github.com/obra/superpowers) ⭐ 318.2k — 代理技能框架与软件开发方法论。提供一套完整的 agentic skills 框架，让 AI 编码工具遵循结构化的开发流程。亮点是经过实战验证的方法论，而非理论框架。

- [MattPocock Skills](https://github.com/mattpocock/skills) ⭐ 325.5k — 面向"真实工程"的实战代理技能集。来自 Total TypeScript 作者 Matt Pocock 的 skills 集，提供 /grill-me、/grill-with-docs 等需求对齐技能，让代理就你的计划不断追问直到设计收敛，解决代理与用户需求错位的核心痛点。亮点是技能小巧、可组合、易改造，适配任意模型。

- [SkillOpt](https://github.com/microsoft/SkillOpt) ⭐ 19.1k — 微软出品的文本空间技能优化器。通过轨迹驱动编辑和验证门控更新，为冻结的 LLM 代理训练可复用的自然语言技能，输出 best_skill.md 制品。解决手写 agent 技能难以调优、效果不稳定的问题。亮点是学术级方法论与可直接部署的技能制品相结合。

- [Ponytail](https://github.com/DietrichGebert/ponytail) ⭐ 191.7k — 让 AI 代理像"最懒的资深工程师"一样思考的技能。核心理念是"最好的代码是你永远不用写的代码"，引导代理优先复用、删除、减少改动。解决代理过度生成代码、引入不必要复杂度的问题。亮点是反直觉的"少即是多"工程哲学。

- [OpenCLI](https://github.com/jackwener/OpenCLI) ⭐ 31.1k — 将任意网站变成 CLI 工具。借助 AI 代理使用你已登录的浏览器，把 Web 操作转化为命令行交互。亮点是支持已登录状态的浏览器复用，绕过认证难题。

- [Open Connector](https://github.com/oomol-lab/open-connector) ⭐ 6.3k — 开源的 AI 代理连接网关（Pipedream/Composio 替代）。一次授权用户的 SaaS 账号，再通过 SDK、CLI、MCP、HTTP 和 OpenAPI 把 1000+ 提供商、10000+ 预置 Action 暴露给代理。亮点是可托管也可自建，OAuth 一次接入到处用。

- [MemPalace](https://github.com/MemPalace/mempalace) ⭐ 60.6k — 开源、本地优先的 AI 记忆系统，完全免费。官方自报 LongMemEval raw R@5 96.6%（数据与逐题结果随仓库提交），明确不做与 Mem0/Zep 等的横向对比。解决 AI 代理缺乏长期记忆的问题。

- [Herdr](https://github.com/herdrdev/herdr) ⭐ 51.3k — 编码代理的常驻运行时（"the runtime your coding agents live on"）。后台服务器架构，终端活在它内部：合盖/断网后进程继续跑；机器重启后恢复布局，且仅对支持 native session restore 的代理真正 resume。可从任意终端或 SSH 重连。代理还能通过 CLI 与 socket API 自主操控它（互相开 pane、发提示）。单一 Rust 二进制，支持 Claude Code、Codex、Cursor、OpenCode 等。

- [Paseo](https://github.com/getpaseo/paseo) ⭐ 24.2k — 从桌面和移动端编排多个编码代理。支持 Claude Code、Codex、Copilot、OpenCode、Pi 等主流代理，提供 iOS/Android 客户端，出门在外也能接管和调度本地跑着的代理任务。

- [Munder Difflin](https://github.com/HarnessMD/munder-difflin) ⭐ 9.6k — 在本机跑「一整层办公室克隆人」的多代理 harness（Electron 桌面应用）。复用你已有的 Claude Code、Codex、Gemini CLI、OpenCode、Pi、Cursor 等订阅，把终端编码 CLI 变成可互相传话、路由和记忆的工位角色。亮点是不另买席位、可视化办公楼层。

- [Awesome Persona Distill Skills](https://github.com/xixu-me/awesome-persona-distill-skills) ⭐ 4.7k — 以人物关系、纪念场景和方法论视角为主题的代理技能集合。解决的是 AI 在人际交往和情感场景下的表达能力问题。

- [dsh-anchored-standard](https://github.com/xiaobright/dsh-anchored-standard) ⭐ 3.7k — 社区实验性 DeepSeek Harness 预设（非官方）。两阶段锚定：首个请求走 Minimal（2 个工具、无注入上下文），稳定后晋升到 resident catalog（bootstrap 双工具 + discovery），而不是完整 Standard。2026-09-10 起因 V4 Pro 退役处于 frozen，仓库保留但不再接 issue/PR。另有 Zero-Anchored、Whoami 两个 0 工具变体，以及 Prefab Anchored、Eternal Minimal、Wire Think-Execute、Combo Anchored，共 7 种模式。

- [book-to-skill](https://github.com/virgiliojr94/book-to-skill) ⭐ 38.0k — 把任意技术书籍或文档集变成统一的代理技能。支持 PDF/EPUB/DOCX/MD/HTML/RTF/MOBI 等格式，产出符合开放 Agent Skills 标准（SKILL.md），Claude Code、GitHub Copilot CLI、Amp 通用。解决"书读完就忘、知识无法随取随用"的问题。

- [Harness Anything](https://github.com/yb2460/harness-anything) ⭐ 3.1k — AI 代理全栈操控中心（Windows）。47 个 CLI 命令经 COM 自动化操控 WPS/MS Office（Word/Excel/PowerPoint），Zotero 集成 27 个学术 Skill，另有 Photoshop / Illustrator COM 操控。让 AI 代理直接驱动办公和设计软件。

- [Pydantic AI](https://github.com/pydantic/pydantic-ai) ⭐ 21.2k — Python 侧的类型化 AI SDK / 代理循环。同一套 agent 可跑在 Web、终端、语音通话、后台队列和 GitHub Actions，模型切换是字符串级，图像生成与 embedding 同箱。亮点是端到端类型约束，Pydantic 生态原生。

- [LLM-as-a-Verifier](https://github.com/llm-as-a-verifier/llm-as-a-verifier) ⭐ 3.3k — 通用代理验证框架，给任意代理细粒度反馈而无需额外训练。用评分 token 的 logprob 期望做细粒度打分，可用于测试时扩展、进度跟踪和强化学习。官方称在 Terminal-Bench、SWE-Bench Verified 等代理基准上达到 SOTA（以论文/仓库自报为准）。

- [Agent Foundation](https://github.com/converge-ai-labs/agent-foundation) ⭐ 1.3k — 开源可自托管的 AI 代理基础设施（a13n，Python 3.13+，Apache-2.0）。把托管代理、记忆、沙箱、computer use 和可恢复执行打包成一套服务，通过 SDK、HTTP API、Console 和 Harness UI 接入自己的应用。亮点是权限、资源管理和执行恢复都现成，不用自己拼一套 agent 后端；也可以用 Harness UI 先在终端/网页里试配置再落代码。

- [人生发展 Skill](https://github.com/Chami537/life-development-skill) ⭐ 194 — 中文「人生发展」答疑技能，基于《高性价比人生指南》提炼。先弄清你想保住什么、受哪些限制，再从健康、金钱、时间精力、权利、关系和个人意义几个维度比较路径，最后给一到三个能随时退出的小尝试。亮点是把人生建议做成有资料依据、可执行下一步的技能，而不是空泛鸡汤。

- <span id="proj-anti-defensive-writing"></span>🆕 [Anti-Defensive Writing](https://github.com/Kiterlin/anti-defensive-writing) ⭐ 2.1k — 给 Codex / Claude Code 的学术与技术写作技能（MIT）。针对「防御性写作」——预先道歉、重复免责声明、层层模糊限定、自我贬低——按四步改：诊断哪些是多余免责、哪些是必要边界，删掉无信息量的免责，把「本文不主张 X」改成「本文聚焦 Y」，把不确定性锚定到具体实验条件。附带中英规则与改写示例。亮点是用正向范围声明替代否定式回避，而不是把语气改硬。

**AI 设计与前端**

这类项目用 AI 提升设计质量和前端开发效率。

- [Open Design](https://github.com/nexu-io/open-design) ⭐ 107.8k — 本地优先的开源 Claude Design 替代品，原生桌面应用。内置 100+ 功能技能、277 个插件与 151 套设计系统，支持 Web/桌面/移动端原型、仪表盘、幻灯片、图片和视频，可导出 HTML/PDF/PPTX/MP4，适配 DeepSeek Harness、Claude Code、Codex、Cursor 等 26 种本地 CLI。亮点是设计系统生态丰富，且持续高速迭代。

- [OpenMotion](https://github.com/nexu-io/openmotion) ⭐ 10.0k — Open Design 团队的全栈 agentic 视频工具（Apache-2.0，原名 HTML Anything，原 HTML 编辑器留在 `legacy` 分支）。给一段参考视频或社交链接，代理拆解镜头与转场、用 HTML/CSS 重建并补素材，Studio 里调时间轴后输出 MP4；Motion.md 用 Markdown 描述镜头顺序、时长与转场，可进 git 共享。亮点是用 BYOA + BYOK 驱动本机 22 种编码 CLI，不另付渲染费。

- [Impeccable](https://github.com/pbakaus/impeccable) ⭐ 111.0k — 给 AI 编码代理的设计指导。1 个 skill + 24 条命令（polish/audit/critique/distill 等）+ 62 条确定性检测规则，规则不调用 LLM，可在浏览器里实时迭代，用来约束生成 UI 的视觉质量，减少"看起来像 AI 做的"的默认输出。

- [Awesome Design MD](https://github.com/VoltAgent/awesome-design-md) ⭐ 127.7k — 知名品牌设计系统的 DESIGN.md 文件合集。将设计系统以 AI 可读的方式呈现，让编码代理能生成符合品牌规范的 UI。

- [UI/UX Pro Max Skill](https://github.com/nextlevelbuilder/ui-ux-pro-max-skill) ⭐ 150.1k — 为 AI 提供专业级 UI/UX 设计智能的技能包。覆盖多平台设计规范，给编码代理一套可调用的 UI/UX 设计智能。

- [Taste Skill](https://github.com/Leonxlnx/taste-skill) ⭐ 116.5k — 给 AI 注入"好品味"。阻止 AI 生成无聊、通用的设计输出，让结果更具个性和辨识度。

- [Diagram Design](https://github.com/cathrynlavery/diagram-design) ⭐ 67.5k — 编辑风格的图表技能（Claude Code / Codex / Pi / Cursor / Copilot / Gemini CLI 等），口号是"你的设计师不会讨厌的图表"。内置 50 种编辑风格图表类型，每种含 minimal light / minimal dark / full-editorial 三种静态变体，输出自包含 HTML + SVG，告别 Mermaid 味儿的默认图。

- [Archify](https://github.com/tt-a1i/archify) ⭐ 97.0k — 把代码库或系统描述变成可交互系统地图的代理技能。代理产出类型化 JSON IR，Archify 确定性编译为自包含 HTML/SVG，另可导出 PNG/WebP/JPG 长图或打印 PDF。十种图类型、四套视觉样式与明暗主题，架构对比用 After/Delta/Before 快照。亮点是每条结论标编号来源、代码片段钉到具体 commit，图结构可验证而不是靠模型即兴编拓扑。

- [Anatomy](https://github.com/wheresryan22/anatomy) ⭐ 27.6k — 用「造一个真东西」来讲清概念的代理技能（Claude Code / Antigravity / OpenCode / Codex / MiniMax Code，MIT）。把抽象机制变成一个可交互的等距插图：缓存命中做成只有所有弹子对齐才转的弹子锁，再拆成几十个带明暗的小零件，配上标题、说明和实时读数，SVG / WebGL / 3D 混用。亮点是图里的每个数字都由同一套小模型驱动，代理还会自己放大检查每个关节。

- [Frontend Slides](https://github.com/zarazhangrui/frontend-slides) ⭐ 32.4k — 利用编码代理的前端技能在 Web 上创建精美幻灯片。巧妙地将 AI 的前端编码能力转化为演示文稿制作能力。

- [Open Slide](https://github.com/open-slide/open-slide) ⭐ 9.8k — 专为 AI 代理打造的 React 幻灯片运行时。代理直接写 React 组件，每页渲染进固定 1920×1080 画布（不是受约束的 DSL），框架负责缩放、导航、热重载和演示模式，构建产物是纯静态站点。

- [Knowledge HTML Learning Page](https://github.com/MoveCloudROY/knowledge-html-learning-page) ⭐ 5 — 从 PDF、Office、Markdown、代码库生成有据可查的中文 HTML 学习页面的代理技能。核心流程为收集证据→草稿→规划→人工评审门→逐章生成 HTML，解决把零散课件和代码整理成系统化中文教程的痛点。亮点是源可追溯、review-gate 把关内容质量。

- [Ian Xiaohei Illustrations](https://github.com/helloianneo/ian-xiaohei-illustrations) ⭐ 13.2k — 中文小黑怪诞风格正文配图生成 Skill。16:9 白底手绘风格，搭配少量红橙蓝批注色彩，专为文章配图场景设计。亮点是将独特的怪诞美学风格标准化为可复用的 AI 技能，一键生成风格一致的插图。

- [拾景 zine](https://github.com/Zeejay0/gathered-scenes-zine-skill) ⭐ 5.7k — 为 Codex 编写的生图 Skill（仓库含互补的一组 skill）。不把照片当作等待套用的模板，而是先阅读场景（辨认主体、空间、色彩与情绪），再选择保留真实现场或将其蒸馏为一件纸上作品。个人非商用许可。亮点是"先理解再创作"的编辑式生图流程。

- [Photo Abstract Editorial](https://github.com/ZzzLc0405/photo-abstract-editorial) ⭐ 6.1k — Codex Skill，将一张照片转化为"原始摄影区域 + 抽象记忆面板 + 诗意英文标题"的竖向编辑作品。只从照片本身提炼空间关系、构图节奏和色彩关系，不是滤镜或风格迁移。注意许可证为 CC BY-NC-SA，禁止商用。

- [GC Minimal Zine Poster](https://github.com/LiamGvchi/gc-minimal-zine-poster) ⭐ 7.5k — Codex Skill，把主题、句子、文章灵感、照片或参考集转化为极简纸质纹理的编辑海报、生产级图像提示词或可复用视觉系统。默认 3:5 旧纸画布、70-90% 留白，内置构图与色彩的质量检查。

**AI 提效与优化**

这类项目关注如何让 AI 工具跑得更快、用得更省。

- [RTK](https://github.com/rtk-ai/rtk) ⭐ 86.7k — CLI 代理，在常见开发命令的输出传入 LLM 之前进行过滤和压缩，使命令输出的 token 减少 60-90%（针对代理读取的 bash 输出，不等于账单等比下降）。单个 Rust 二进制文件，零依赖，支持 100+ 命令，每条命令开销低于 25ms。亮点是极低性能开销、零侵入：`rtk init -g` 装一次 hook 即对 Claude Code / Copilot 生效（`--codex`、`--gemini`、`--agent cursor` 分别适配）。注意完整版含 BUSL-1.1 的压缩引擎，纯 Apache-2.0 的 rtk-oss 不含引擎。

- [Headroom](https://github.com/headroomlabs-ai/headroom) ⭐ 79.8k — 在工具输出、日志、文件和 RAG 数据传入 LLM 之前进行内容感知压缩。官方实测四种 agent 场景少 21–57% 输入 token，重复 JSON 数组和日志行可达 90%+，散文收益很小；压缩在本地完成，不往外发内容。提供库、零改代码代理和 MCP Server 三种接入方式，单次压缩约 0.2 ms。亮点是显著降低 token 成本且不影响答案。

- [AirLLM](https://github.com/lyogavin/airllm) ⭐ 42.5k — 大幅降低 LLM 推理显存占用的推理库。70B 模型单张 4GB GPU 即可运行，无需量化、蒸馏或剪枝；405B 约需 8GB，DeepSeek-V3 671B 约 12GB；稀疏 MoE 模型按专家流式加载，甚至能在 4GB 以内跑最大开源模型。让消费级硬件跑超大模型成为可能。

- [FreeToken](https://github.com/FlashML-org/FreeToken) ⭐ 17.2k — 面向消费级硬件的边端 MoE 推理引擎。把 GPU/CPU/主机内存当成弹性推理平台，宣称可在游戏 PC 上本地跑 290B+ 级开源 MoE（DeepSeek-V4-Flash、Qwen、GLM 等），提供 Anthropic/OpenAI 兼容 API 对接编码代理。亮点是专家缓存与语义 KV 缓存，针对 agent 场景减少重复预填。

- [Readme AI](https://github.com/eli64s/readme-ai) ⭐ 3.0k — AI 驱动的 README 文件生成器。自动分析项目结构和代码，生成专业规范的 README 文档，省去手动编写的繁琐工作。

- <span id="proj-dsh-our-free-model"></span>🆕 [dsh-our-free-model](https://github.com/Ebony-Vinyl/dsh-our-free-model) ⭐ 76.6k — DeepSeek Harness 的免费模型插件（MIT）：装上后不用登录、注册或填 API Key，就能用 DeepSeek V4.1 Flash、Kimi K3 等模型。免费车道直连 OpenCode 的 Zen 网关与 Kilo AI 公共网关，模型清单每次向上游重新拉取；另带思考档位下发、本机用量看板、OpenAI 兼容转发端口，以及按出口 IP 计配额、遇 429 自动熔断的断路器。亮点是纯插件挂载，不改内核、无构建步骤、零依赖；上游网关可能记录 prompt 用于改进服务，别发敏感内容。

**学术科研工具**

面向研究人员的效率工具，覆盖论文写作、绘图、灵感获取等环节。

- [Paper2Poster](https://github.com/Paper2Poster/Paper2Poster) ⭐ 4.1k — NeurIPS 2025 Dataset & Benchmark Track 的多代理论文海报生成系统。输入一篇论文 PDF，多代理 PosterAgent 自动输出学术海报（.pptx）。官方基准上优于 GPT-4o / PPTAgent / OWL，并称相对 GPT-4o 方案少用约 87% token。

- [PaperX](https://github.com/yutao1024/PaperX) ⭐ 73 — 多模态学术演示生成框架。从论文 PDF 自动生成 PPT、学术海报和宣传稿（PR），统一框架、低成本、设计现代。附 arXiv 论文与 HuggingFace 在线 demo，与 Paper2Poster 同属"论文转演示"赛道但覆盖面更广。

- [Nature Skills](https://github.com/Yuan1z0825/nature-skills) ⭐ 53.7k — 面向科研写作与绘图的 22 项代理技能包，风格对标 Nature 类期刊表达（非期刊官方背书）。覆盖写作、作图、审稿、检索、专利等，缓解 AI 文稿「不像论文」的问题。

- [Supervisor Skills](https://github.com/HKUSTDial/Supervisor-Skills) ⭐ 12.6k — 港科广（广州）团队把博导十年科研经验炼成的 AI 副导师技能集。覆盖 Idea 评估、论文写作/润色、文献调研到投稿前检查。亮点是把隐性审稿品味做成可执行 skill；许可证为 CC BY-NC-SA，禁止商用。

- [Scientific Agent Skills](https://github.com/K-Dense-AI/scientific-agent-skills) ⭐ 57.4k — 把任意 AI 代理变成科研助手的技能库（原 Claude Scientific Skills，现兼容开放 Agent Skills）。README 徽章为 177 项技能 + 100+ 科学数据库，覆盖生物、化学、医学、物理、工程、地球科学等领域。亮点是可复用的实验/数据分析流程，而不是论文写作套话。

- [Idea Stream](https://github.com/5eqn/idea-stream) ⭐ 11 — 按主题从 arXiv 拉取论文流，按质量、相关性和时效性排序。帮助跟踪 cs.AI/RO/LG 等方向的新文，而不是自动「发现研究空白」。

- [Diagrams](https://github.com/janosh/diagrams) ⭐ 714 — 物理学、化学和机器学习核心概念的示意图集（官网写 124 Scientific Diagrams；主打 Typst/CeTZ，其中 72 张另有 LaTeX/TikZ 版本）。官网支持搜索、下载 PDF/SVG/PNG，适合直接用于论文、教学和学术演示。

- [Touying Exporter](https://github.com/touying-typ/touying-exporter) ⭐ 143 — 为 Touying 演示框架提供多格式导出支持。解决 Typst/Touying 生态中导出格式受限的问题。

- <span id="proj-oleafly"></span>🆕 [Oleafly](https://github.com/Oleafly/Oleafly) ⭐ 1.2k — 开源的 LaTeX / Typst / Markdown 论文编辑器（AGPL-3.0，macOS/Windows/Linux，beta）。源码、PDF、引用、图表、检查结果和 Git 历史放在同一处，协作靠自建的 Oleafly Server 实时同步，免费且不限协作者；内置 Tectonic / Typst / Pandoc 编译，可点 PDF 跳源码，Zotero 与 arXiv/Semantic Scholar/Crossref 检索可边写边引，投稿前 Preflight 查断引用、缺图、字体未嵌入和盲审泄露，另有 1700+ 论文/学位/幻灯片/海报模板。亮点是把 Overleaf 常收费的实时协作、版本历史和 AI 都做成免费自托管项，AI 改动以 diff 形式可审可撤。

**排版模板**

各种好用的排版模板。

- [Universal HIT Thesis](https://github.com/hitszosa/universal-hit-thesis) ⭐ 61 — 哈尔滨工业大学 Typst 论文模板（民间模板，积极开发中）。计划覆盖一校三区本科到博士各学位类型的论文排版需求，用 Typst 替代 LaTeX 实现更快的编译速度和更简洁的语法。

- [Quite Elegant Typ](https://github.com/a31474/quite-elegant-typ) ⭐ 22 — 基于 Typst 的 ElegantBook 复刻模板。将 LaTeX 生态中广受欢迎的 ElegantBook 书籍风格移植到 Typst，适合制作精美笔记和技术文档。

- [HITSZ 中文简历](https://github.com/IceFerryLing/resume) ⭐ 16 — 哈工深中文简历 LaTeX 模板。公开 `main.tex` 只有占位内容，个人信息放在 gitignore 的 `main.local.tex`，XeLaTeX 编译。基于西工大 / 北邮简历模板改版。

**学习资源与教程**

优质的编程学习资源和教程合集。

- [Hello 算法](https://github.com/krahets/hello-algo) ⭐ 132.4k — 动画图解、一键运行的数据结构与算法教程。支持十余种编程语言实现，以可视化方式降低算法学习门槛。

- [LeetCode Book](https://github.com/krahets/LeetCode-Book) ⭐ 8.6k — 《剑指 Offer》《图解算法数据结构》《Krahets 笔面试精选 88 题》配套代码合集。提供 Python、Java、C++ 三种语言实现，是面试刷题的经典参考。

- [Build Your Own X](https://github.com/codecrafters-io/build-your-own-x) ⭐ 563.0k — 通过重建你喜爱的技术来掌握编程。涵盖从数据库到操作系统到编译器的各种"造轮子"教程，是从零实现常见系统的经典教程合集。

- [Project Based Learning](https://github.com/practical-tutorials/project-based-learning) ⭐ 289.8k — 项目驱动学习教程合集。按编程语言分类的外链项目教程清单。

- [Dive into LLMs](https://github.com/Lordog/dive-into-llms) ⭐ 60.2k — 《动手学大模型》系列编程实践教程，由上海交大课程讲义拓展而来的公益教程。覆盖微调与部署、提示学习与思维链、知识编辑、模型水印、越狱攻击、多模态模型、GUI 智能体、RLHF 安全对齐等主题，含课件与可运行脚本。

- [Learn Claude Code](https://github.com/shareAI-lab/learn-claude-code) ⭐ 80.5k — 从零构建类 Claude Code 的代理框架。以 "Bash is all you need" 为理念，17 课从零搭建类 Claude Code 的 agent harness，适合理解 agentic coding 的底层逻辑。

- [TorchCode](https://github.com/duoan/TorchCode) ⭐ 4.7k — PyTorch 版 LeetCode。通过从零实现 softmax、注意力机制、GPT-2 等核心组件来深度学习深度学习，自带自动评分。亮点是 Jupyter 交互式学习体验。

- [MiniMind](https://github.com/jingyaogong/minimind) ⭐ 65.4k — 在单卡 3090 上约 2 小时完成 64M 模型的 SFT 1 epoch（不是全流程预训练）。把 LLM 训练链路缩到可动手的最小规模，适合入门理解训练步骤。

- [Awesome OpenSource AI](https://github.com/alvinreal/awesome-opensource-ai) ⭐ 5.0k — 精选真正开源的 AI 项目、模型、工具和基础设施合集。帮助快速了解开源 AI 生态全貌。

- [大模型世界](https://github.com/liyupi/ai-model-world) ⭐ 274 — 把 500+ 大模型拟人化成像素小镇的可视化站点。数据来自 Epoch AI、models.dev、LiveBench 与 Hugging Face，每小时自动同步；文案由真实数据套模板生成，不调用 LLM。亮点是「今日格局」领奖台、厂商广场和互不混算的多榜排行。

- [Awesome HITSZ](https://github.com/hitszosa/awesome-hitsz) ⭐ 61 — 哈工大（深圳）相关项目的资源导航合集。汇总各专业课程攻略（教材、笔记、试卷）、报告与论文模板、校内实用脚本，为哈深学生提供一站式入口。

- [RTL Datapath Renderer](https://github.com/Fun10165/rtl-datapath-renderer) ⭐ 1 — 把 JSON 描述的 CPU 数据通路渲染成独立 SVG 的小工具（Node + elkjs）。声明模块、端口和连线，自动做分层正交布局，画出总线位宽、虚线控制通路和端口标签；自带单周期 miniRV、RV32M 和五级流水线三个示例。亮点是图形即代码、可进 git 版本管理，输入有宽度不匹配、多驱动等问题时只报警告不硬停。

- [Agile Learning Example](https://github.com/Fun10165/agile-learning-example) ⭐ 9 — 「敏捷学习」示例包：用 AGENTS.md / RULES.md 约束代理行为，用 guided-concept-learning skill 按动机驱动的版本迭代学一个主题，笔记由 git 管理。附完整实例（POSIX 权限系统逐版迭代）以及 rigorous-anki-card-authoring、anki-open-template 的制卡出包链路。亮点是把「学明白」拆成可复盘的历史版本，而不是一次性写篇长笔记。

**实用工具**

解决日常开发和工作中的实际需求。

- [LinkSwift](https://github.com/hmjz100/LinkSwift) ⭐ 40.1k — 九大网盘下载地址获取工具。支持百度网盘、阿里云盘、中国移动云盘、天翼云盘、迅雷云盘、夸克网盘、UC 网盘、123 云盘、光鸭云盘，一键获取直链。

- [Lark CLI](https://github.com/larksuite/cli) ⭐ 18.1k — 飞书/Lark 官方命令行工具。覆盖消息、文档、多维表格、日历、邮件等核心业务场景，提供 200+ 命令和 26 个 AI Agent Skills，是飞书深度用户的效率工具。

- [AlwaysBindWindow](https://github.com/XR-stb/AlwaysBindWindow) ⭐ 135 — Windows 窗口绑定工具。把不同程序的窗口编成一组，拖动、点击激活、最小化/还原都同步进行，组内窗口保持相对位置；`Ctrl+Alt+G` 拉框选窗，也能从列表里挑被遮挡或已最小化的窗口。亮点是跨应用的多窗口（比如一边查资料一边写代码）终于能当一个整体搬动，热键和分组策略都可调。

- [FRP Panel](https://github.com/VaalaCat/frp-panel) ⭐ 1.9k — 多节点 FRP 内网穿透管理面板。提供可视化 Web UI 管理 FRP 服务端和客户端。

- [Headplane](https://github.com/tale/headplane) ⭐ 3.3k — Headscale（自托管 Tailscale）的功能完整 Web UI。管理节点、网络、ACL、DNS 和 OIDC 登录，目标是对齐官方 Tailscale 控制台体验。亮点是给默认没有面板的 Headscale 补上一套可用的图形管理。

- [Public APIs](https://github.com/public-apis/public-apis) ⭐ 499.4k — 免费 API 合集。社区精选的公开 API 清单（不少接口仍需申请密钥）。

- [Free For Dev](https://github.com/ripienaar/free-for-dev) ⭐ 143.0k — 面向开发者的免费服务清单。汇总对 devops 和后端有价值的 SaaS/PaaS/IaaS 免费额度，解决"哪些云服务能白嫖"的信息分散问题。亮点是分类极其详尽、社区持续维护，分类详尽、社区持续维护。

- [Career Ops](https://github.com/career-ops-hq/career-ops) ⭐ 82.9k — CLI 无关的开源 AI 求职系统（支持 Claude Code、Codex、OpenCode 等）。按预配置公司/ATS 扫描职位，用 A-H 结构化报告（全局 1–5 分，非算术加权）评估，提供 Go 终端仪表盘、ATS 简历 PDF 生成与并行批量处理，覆盖从发现岗位到面试准备的全流程。亮点是将 AI 代理能力系统性地应用于求职场景。

- [MapPoster Online](https://github.com/ianho7/maptoposter-online) ⭐ 986 — 把你爱的城市变成精美海报。浏览器端地图海报生成器，无需安装即可将任意城市生成极简风格的地图艺术海报，适合做家居装饰或独特礼物。亮点是基于 maptoposter Python CLI 的网页升级版，开箱即用。

- [Termux](https://github.com/termux/termux-app) ⭐ 65.0k — Android 终端模拟器和 Linux 环境。在手机上获得完整的 Linux 命令行体验，通过 apt 包管理安装 Python、Node.js、Git 等开发工具链。亮点是无需 root 即可运行，让移动设备瞬间变成便携开发环境。

- [terminal-code](https://github.com/zenbu-labs/terminal-code) ⭐ 2.3k — 把 VS Code 塞进终端。底层是 terminal-browser + code-server，命令 `tode` 打开目录/文件，支持 diff、SSH、从 VS Code 导入设置与扩展。亮点是在终端/SSH 里也能用完整编辑器，而不是再开一套 GUI；注意依赖 kitty graphics protocol，普通 TTY 跑不起来，也没有官方 Windows 构建（只能走 WSL）。

- [Termtunnel](https://github.com/beordle/termtunnel) ⭐ 373 — 跨平台终端隧道。像 lrzsz 一样走已有 SSH/跳板会话传文件，还能在远端开 socks5/HTTP 代理，打穿内网隔离。用法是本地 `termtunnel ssh ...`，远端 `termtunnel -a` 进入控制台。

- [Iconify](https://github.com/iconify/iconify) ⭐ 6.4k — 统一图标框架。用一套语法接入 FontAwesome、Material、Feather 等 200+ 图标集（超 25 万个图标），提供 iconify-icon Web Component 以及 React/Vue/Svelte 等框架包装。解决项目里多图标库混用、格式不统一的问题。亮点是海量图标统一调用且按需加载，不增加打包体积。

- [Icones](https://github.com/antfu-collective/icones) ⭐ 7.5k — 基于 Iconify 的即时图标搜索浏览器。让设计师和开发者按关键词秒级检索、预览海量图标并一键导出 SVG，解决"找图标难"的痛点。亮点是离线可用、支持收藏与多格式复制，Vue 核心团队成员 Anthony Fu 出品。

- [Memos](https://github.com/usememos/memos) ⭐ 64.5k — 开源自托管的轻量速记工具。Markdown 原生、主打快速捕捉灵感，数据完全自有。解决云端笔记的隐私和锁定问题。亮点是极简、可自建、部署门槛低。

- [Anki](https://github.com/ankitects/anki) ⭐ 32.8k — 老牌开源的智能间隔重复记忆卡片程序。用科学的间隔重复算法安排复习节奏，全平台同步，插件与共享牌组生态庞大。背单词、备考、记知识点的常用开源间隔重复工具。

- [Bento](https://github.com/nyblnet/bento) ⭐ 5.7k — 能装进一个文件里的办公套件。单个 HTML 文件自带查看器、演示器和编辑器，打开即编辑、保存即自我重写，约 560KB 的 PowerPoint 替代品。亮点是发给别人时对方无需安装任何东西——文件本身就是软件。

- [EZ4Connect](https://github.com/chenx-dust/EZ4Connect) ⭐ 550 — ZJU-Connect 的改进图形界面（前身为 HITsz Connect for Windows）。支持 aTrust 和 EasyConnect 协议的校园网/企业 VPN 客户端，GUI 操作免去命令行配置的麻烦。

- [FlClash-Patched](https://github.com/chenx-dust/FlClash-Patched) ⭐ 152 — FlClash 的软性分支。基于 mihomo 的多平台代理客户端，在上游基础上修复 bug、改进能效并加入新功能，开源无广告。

- [HITA](https://github.com/HIT-A/HITA_Android) ⭐ 22 — 面向哈工大三校区（深圳/本部/威海）学生的工具类 App（非官方）。涵盖课表与日程、成绩与空教室查询、选课助手、课程资源搜索、教师搜索和 ReAct 框架 AI 助手，源自 HITSZ 大一年度立项项目。

- [LibreSpeed](https://github.com/librespeed/speedtest) ⭐ 15.3k — 自托管的 HTML5 网速测试。纯 JS + XHR/Web Worker，测下载/上传/延迟/抖动，可选遥测与多测点。亮点是不依赖商业测速站，可部署在自己的服务器上。

- [MCTier](https://github.com/pmh1314520/MCTier) ⭐ 1.1k — 基于 EasyTier 与 WebRTC 的虚拟局域网组网工具（Windows/Android）。把不同网络的设备拉进同一个大厅，用于游戏联机、跨网访问局域网服务、语音和文件/屏幕共享。亮点是不限于 Minecraft，手机和电脑可进同一房间。

- [ZHS Fucker](https://github.com/VermiIIi0n/fuckZHS) ⭐ 2.7k — 自动刷智慧树课程的 Python 脚本。走后端接口，支持校内学分课与共享课、自动答弹题；因前端混淆与 DevTools 检测，多数浏览器脚本已失效。仅作技术记录，请自行承担使用后果。

- [LocalSend](https://github.com/localsend/localsend) ⭐ 99.2k — 开源跨平台 AirDrop 替代品。同一局域网内直接传文件和文本，不经过服务器、不需要联网，覆盖 Windows/macOS/Linux/Android/iOS。亮点是无账号、无云端，跨系统互传最省事的一档。

- [Microsoft Activation Scripts](https://github.com/massgravel/Microsoft-Activation-Scripts) ⭐ 199.6k — Windows / Office 激活脚本合集（HWID、Ohook、TSforge、Online KMS 等方式）。一条 PowerShell 命令或一个 cmd 脚本即可跑，附排障文档和多语言说明。仅作技术记录：它绕过官方授权，使用前请自行确认所在地法律与授权风险。

- [Filee](https://github.com/KnifeLemon/Filee) ⭐ 27.8k — 拖拽即转的开源文件转换器（Windows 10/11 正式，macOS/Linux 预览，MIT）。按住 Ctrl 把文件拖到光标处的格式环上松手就转换，支持 270 种格式，覆盖图片、PDF、Word/Excel/PPT、HWP、电子书、压缩包、字体、CAD 和 3D，不依赖 Office 或 LibreOffice。亮点是全程离线、不上传，结果直接落在原文件旁边。

- <span id="proj-fly-island"></span>🆕 [Fly Island](https://github.com/flyl1u/fly-island) ⭐ 798 — Windows 优先的轻量灵动岛（Tauri 2 + React 19 + Rust，GPL-3.0）。微信、QQ、邮件消息弹到岛上，Claude Code / Codex / DSH 的会话进度和审批请求也在这里处理，另有音乐与同步歌词、文件中转、剪贴板历史、快捷翻译、待办与日历。亮点是把高频操作收进一个「需要时展开、用完收起」的悬浮岛，少切窗口；待办、剪贴板与设置存本机，消息摘要只在内存里。

- <span id="proj-mygo"></span>🆕 [MyGo](https://github.com/egoist/mygo) ⭐ 6.3k — 用 Go 写桌面应用的框架（MIT）。每个窗口可以是系统 WebView 里的网页（前端用任意 Web 工具，通过由 Go 代码生成的 TypeScript 客户端调用后端），也可以是纯 Go 原生 UI：自带 flexbox/grid、输入法、虚拟列表、SVG 图标、动画与屏幕阅读器支持，不开 webview。纯 Go 无 cgo，产物是几 MB 单二进制，附打包、签名、公证与差分自动更新。亮点是网页与原生界面能在同一窗口混排。

**建站与主题**

自建网站、博客和导航站用到的框架与主题。

- [AIHOT](https://github.com/KKKKhazix/AIHOT) ⭐ 10.8k — 「自己找热点、自己写日报」的行业资讯站框架（Node 24 + PostgreSQL + Docker Compose，MIT）。每天从一批信源收资料，用 LLM 先筛再独立打两次分，把同一事件聚成热点，早上出日报；提示词原文和入选门槛都在仓库里。亮点是把信源和精选标准换成你自己的，就能变成某个行业的热点站。

- [WebStack](https://github.com/owen0o0/WebStack) ⭐ 2.5k — WordPress 版 WebStack 导航主题。把常用站点整理成分类导航页，带后台管理，适合做个人或团队的上网入口。注意作者已声明 Webstack Pro 早在 2019 年就停止维护，网络上流传的收费版均为盗用。

**安全研究**

- [PoC Lab](https://github.com/Unclecheng-li/poc-lab) ⭐ 830 — 最新 CVE 漏洞的 PoC 和复现脚本合集。聚焦 Linux 内核/KVM、Web、数据库、浏览器和 AI 基础设施等方向的高危漏洞 PoC，适合跟踪最新漏洞并做复现实验。

- [REA](https://github.com/morluto/rea) ⭐ 462.7k — 面向逆向工程的 MCP 服务（`npx rea-agents setup`）。让代理从应用行为一路下钻到原生二进制：动态分析、反编译、调试器桥接都能接，在 Hopper/IDA 里跟着代理的步骤走。亮点是把「逆向」拆成代理可调用的工具链，而不是让模型瞎猜二进制结构；官方提醒只从 rea.tools / npm 官方源安装，同名仓库不等于官方。

- [Rizin Book](https://github.com/rizinorg/book) ⭐ 107 — Rizin 逆向框架的官方手册（源自 radare2 book）。在线阅读或用 Quarto 导出 PDF，覆盖常见逆向与调试用例。亮点是官方维护、面向实际问题而不是命令清单。

- <span id="proj-craft-anything"></span>🆕 [Craft Anything](https://github.com/storytold/craft-anything) ⭐ 34.2k — 「看懂任何软件，然后做一个自己的」桌面应用 + 纯 Rust 逆向引擎（MIT / Apache-2.0，early alpha）。指一个网站、桌面应用、手机应用或游戏，先说清楚要什么：它用真实检查工具拆解原作的页面、代码与文件，让编码代理用你指定的语言/框架重建，再把成品与原作逐项比对、列出差异并继续改。320 个工具每个既是 CLI 也是 MCP 工具，代理可直接驱动同一引擎。Clean room 模式默认不读原作内部，只按访客所见重建；Deep 模式才动用反编译。亮点是把「逆向」和「复刻验证」做成一条可审计流水线，而不是让模型凭印象仿一个。

- <span id="proj-gpu-unlock-ada"></span>🆕 [gpu-unlock-ada](https://github.com/JustAResearcher/gpu-unlock-ada) ⭐ 4.9k — 在 NVIDIA 驱动启动前改写 SM 速度选择寄存器的 Linux 内核模块（GPL-2.0），把 Ada 显卡的 FP32 累加张量通路打开。RTX 4090 上 FP16/BF16 → FP32 的指令吞吐实测从约 165 涨到约 331 TF/s（2×），INT8、dp4a 和标量 FP32 基本不动；另有一张 4070 Ti SUPER 的 AD103 实验记录。作者明确这是寄存器级指令速率，不等于真实 GEMM 或推理提速——同卡量化 MoE 服务实测没有收益。亮点是完整披露测量方法与失败案例，而不是只报倍数。

**创业与营销**

- [Marketing for Founders](https://github.com/EdoStra/Marketing-for-Founders) ⭐ 7.2k — 面向独立开发者和创业者的实战营销资源。目标是拿下前 10 / 100 / 1000 个用户，内容按获客渠道组织（Launch 平台、Product Hunt、SEO、Reddit、邮件等），适合技术背景的创始人补齐营销短板。

**程序员生活**

技术人也需要好好生活。这里收录程序员文化相关的趣味项目。

- [程序员在家做饭方法指南](https://github.com/Anduin2017/HowToCook) ⭐ 104.0k — 程序员社区协作编写的"程序化"菜谱合集。用精确到克和分钟的工科思维教做菜，解决"程序员不会做饭、外卖吃腻"的生活痛点。亮点是极强的社区参与度和工程化的烹饪步骤。

- [BongoCat](https://github.com/vladelaina/BongoCat) ⭐ 4.1k — 桌面 Bongo Cat 宠物（C/C++ × SDL3 × OpenGL）。监听键盘/指针，在覆盖层里敲击动画，可换模型。亮点是原生渲染、跨语言文档齐全，适合当一块无功能压力的桌面摆件。

- [openGym](https://github.com/DuarteSantos8/openGym) ⭐ 21.7k — 自托管的健身与自重训练记录器（AGPL-3.0）。排训练计划、跟练、记录每组重量和体重，支持超级组/热身/有氧，数据在自己服务器上，用 passkey 登录。亮点是不订阅、不锁数据，手机端和桌面同步。

- [MOE 购机指南](https://github.com/lkyu-ly/purchase-guide) ⭐ 16 — MOE 频道出品的《2025 年笔记本购机指南》。面向大学同学的电脑科普与选购一体方案，先讲清基础知识再给机型参考，VitePress 构建、持续维护。

**即时通讯与机器人**

这类项目围绕 QQ / IM 平台的协议端、机器人框架与生态，解决消息平台接入与自动化的问题。

- [NapCat](https://github.com/NapNeko/NapCatQQ) ⭐ 12.9k — 基于 NTQQ 的现代化 Bot 协议端实现。完整实现了大部分标准 OneBot 接口，在低内存系统上可长时稳定运行，解决 NTQQ 时代缺少稳定 QQ 机器人协议端的问题。注意项目已于 2026-11-12 宣告结束：仓库清空为只留 README（「到这里告一段落」），代码与发布随之下线，旧版本只能从既有部署或镜像获取，不再有维护。

- [AstrBot](https://github.com/AstrBotDevs/AstrBot) ⭐ 47.0k — 易上手的多平台即时通讯 AI 代理助手与开发框架。集成 QQ、企业微信/公众号、Telegram、钉钉、飞书、Discord 等多种 IM 平台，统一接入各类 LLM 与插件。解决要在多个 IM 平台同时部署 AI 助手、各自适配协议繁琐的问题。亮点是多平台一套代码、插件生态丰富、自带 WebUI 可视化管理。

- [EdgeChat](https://github.com/aozorae/Edgechat) ⭐ 1.5k — 跑在 Cloudflare 上的开源自部署团队聊天系统。群聊、私信、语音、文件都有，消息与附件在服务端加密；应用和数据放在自己的 Cloudflare 账号（D1/KV/R2），用 GitHub Actions 自动部署。亮点是不用维护常驻服务器，还能和 Telegram 群组双向桥接，两边继续用各自习惯的入口。

---

**同类项目对比**

以下是功能相近的项目横向对比，方便按场景快速选择。

## AI 代理平台：Cherry Studio vs Goose

| 维度 | [Cherry Studio](https://github.com/CherryHQ/cherry-studio) | [Goose](https://github.com/aaif-goose/goose) |
| --- | --- | --- |
| 交互形式 | 桌面 GUI 应用 | 桌面应用 + CLI + API |
| 定位 | 通用 AI 生产力工具 | 开发者自动化代理 |
| LLM 支持 | 统一接入多家前沿模型 | 支持任意 LLM |
| 扩展方式 | 300+ 内置助手市场 | 基于 MCP 的 extensions，可自行开发 |
| 适合人群 | 非技术用户、产品经理、内容创作者 | 开发者、DevOps、自动化场景 |
| 选择建议 | 想要图形界面、开箱即用 → **Cherry Studio** | 想要终端集成、自动化流程 → **Goose** |

## Token 压缩：RTK vs Headroom

| 维度 | [RTK](https://github.com/rtk-ai/rtk) | [Headroom](https://github.com/headroomlabs-ai/headroom) |
| --- | --- | --- |
| 实现语言 | Rust（单二进制，零依赖） | Python/TypeScript |
| 压缩方式 | CLI 代理，过滤和压缩命令输出 | 库/代理/MCP Server，内容感知压缩日志和 RAG 数据 |
| 支持范围 | 100+ 常见开发命令（git、ls、cat 等） | 通用文本压缩，不限命令类型 |
| 性能开销 | <10ms | 较低 |
| 接入方式 | `rtk init -g` 装一次 hook 即生效 | 需选择库/代理/MCP 其中一种接入 |
| 压缩率 | 命令输出 token 减少 60-90% | JSON 数据 60-95%，编码代理场景约 20% |
| 选择建议 | 追求极致性能和零配置 → **RTK** | 需要灵活接入方式或压缩 RAG 数据 → **Headroom** |

## 工程代理技能：Superpowers vs Matt Pocock Skills

| 维度 | [Superpowers](https://github.com/obra/superpowers) | [Matt Pocock Skills](https://github.com/mattpocock/skills) |
| --- | --- | --- |
| 作者背景 | 软件开发方法论实践者 | Total TypeScript 作者（TS 教育权威） |
| 设计哲学 | 完整方法论，端到端流程 | 小巧、可组合、易改造 |
| 核心能力 | TDD、调试、计划等结构化开发纪律 | /grill-me、/grill-with-docs 需求对齐 |
| 解决痛点 | 代理缺乏工程纪律和方法 | 代理与用户需求错位、输出冗长 |
| 模型适配 | 支持 16 种 harness（Claude Code、Codex、Cursor、Gemini CLI、Pi、OpenCode 等） | 适配任意编码代理和模型 |
| 扩展方式 | 框架化，按 skill 规范加载 | 可直接 fork 改造成自己的技能 |
| 适合人群 | 想要完整工程方法论的团队 | 想要轻量灵活技能的个人开发者 |
| 选择建议 | 想要系统化、有纪律的开发流程 → **Superpowers** | 想要轻量、即拿即改的实用技能 → **Matt Pocock Skills** |

## 免费资源清单：Public APIs vs Free For Dev

| 维度 | [Public APIs](https://github.com/public-apis/public-apis) | [Free For Dev](https://github.com/ripienaar/free-for-dev) |
| --- | --- | --- |
| 收录对象 | 免费/开放的 API 接口 | 提供免费额度的 SaaS/PaaS/IaaS 服务 |
| 典型内容 | 天气、支付、AI、地图等接口能力 | 云数据库、监控、CI/CD、DNS 等托管服务 |
| 解决问题 | 找第三方 API 接入点 | 找能白嫖的云服务和基础设施额度 |
| 适用阶段 | 应用集成、调用外部能力 | 项目起步、控制运维成本 |
| 选择建议 | 要调用外部接口能力 → **Public APIs** | 要找免费云服务/托管额度 → **Free For Dev** |

## 设计与视频：Open Design vs OpenMotion

| 维度 | [Open Design](https://github.com/nexu-io/open-design) | [OpenMotion](https://github.com/nexu-io/openmotion) |
| --- | --- | --- |
| 定位 | 协作式 AI 设计工作台（Claude Design 替代品） | 全栈 agentic 视频工具 |
| 形态 | 原生桌面应用 | 本地 Web 应用（Studio + MCP） |
| 能力范围 | 原型、仪表盘、幻灯片、图片、视频，151 套设计系统 | 参考视频逆向重建、镜头/转场/素材补全、Motion.md |
| 导出 | HTML/PDF/PPTX/MP4 | MP4（Studio 时间轴渲染） |
| 模型接入 | 官方云服务或 BYOK，26 种编码 CLI | BYOA + BYOK，22 种本地编码 CLI |
| 适合人群 | 要完整设计系统与多类型产出 | 要把参考视频重做成自有品牌片 |
| 选择建议 | 要设计全家桶与设计系统 → **Open Design** | 要视频改造与可版本化的 Motion.md → **OpenMotion** |

## 架构图表：Diagram Design vs Archify

| 维度 | [Diagram Design](https://github.com/cathrynlavery/diagram-design) | [Archify](https://github.com/tt-a1i/archify) |
| --- | --- | --- |
| 定位 | 编辑风格的通用图表技能 | 可验证的系统/架构地图 |
| 图类型 | 50 种，每种三个静态变体 | 十种图类型 + 四套视觉样式 |
| 输入 | 描述或重绘 draw.io / Mermaid | 代理产出的类型化 JSON IR，或直接读仓库 |
| 输出 | 自包含 HTML + SVG | HTML/SVG，另可导出 PNG/WebP/JPG 长图或 PDF |
| 校验 | 视觉与品牌约束 | 结论标编号来源、片段钉 commit，After/Delta/Before 快照 |
| 选择建议 | 要海报级、多类型信息图 → **Diagram Design** | 要架构可追溯、能对 diff → **Archify** |

## 多代理办公室：Herdr vs Paseo vs Munder Difflin

| 维度 | [Herdr](https://github.com/herdrdev/herdr) | [Paseo](https://github.com/getpaseo/paseo) | [Munder Difflin](https://github.com/HarnessMD/munder-difflin) |
| --- | --- | --- | --- |
| 定位 | 编码代理常驻运行时 | 多代理编排器 | 本机「办公室克隆人」harness |
| 形态 | 单 Rust 二进制 TUI | 桌面 + iOS/Android | Electron 桌面，工位可视化 |
| 核心能力 | 合盖后续跑、SSH 重连 | 出门远程接管 | 多 CLI 订阅复用、代理互传话 |
| 适合人群 | 本机/服务器长期挂会话 | 需要移动端盯进度 | 想在一台机器上并行一办公室代理 |
| 选择建议 | 要会话持久化 → **Herdr** | 要手机编排 → **Paseo** | 要可视化多代理工位 → **Munder Difflin** |

## 手机接管编码代理：Happy vs HAPI

| 维度 | [Happy](https://github.com/slopus/happy) | [HAPI](https://github.com/tiann/hapi) |
| --- | --- | --- |
| 定位 | 多模型编码代理客户端（自带 CLI 与中继） | 远程接管 hub，包住官方 CLI |
| 支持代理 | Claude、Codex、Grok | Claude Code、Codex、Cursor、Grok Build、OpenCode、Kimi、Copilot、Pi、DeepSeek Harness 等 |
| 交互端 | iOS/Android/Web，桌面端在 happy-desktop | 原生 iOS/Android、Web/PWA、Telegram Mini App |
| 加密 | 端到端加密 | 中继走 WireGuard + TLS，端到端加密 |
| 特色 | 多人进同一会话、原 CLI 会话可续 | 不改原终端体验、手机一键批准、语音控制 |
| 选择建议 | 想换统一客户端、还要拉人协作 → **Happy** | 想保留原 CLI 工作流、只要远程接管 → **HAPI** |

## 本地跑大模型：AirLLM vs FreeToken

| 维度 | [AirLLM](https://github.com/lyogavin/airllm) | [FreeToken](https://github.com/FlashML-org/FreeToken) |
| --- | --- | --- |
| 思路 | 分层/专家流式加载，压推理显存 | 边端 MoE 服务引擎，CPU-GPU 协同 |
| 典型场景 | 单卡跑 70B/超大模型推理 | 游戏 PC 上跑 290B+ 开源 MoE |
| API | Python 推理库 | Anthropic/OpenAI 兼容，对接编码代理 |
| 选择建议 | 要在小显存卡上加载大模型 → **AirLLM** | 要本地当模型服务给 agent 用 → **FreeToken** |

## 把外部服务接到代理：OpenCLI vs Open Connector

| 维度 | [OpenCLI](https://github.com/jackwener/OpenCLI) | [Open Connector](https://github.com/oomol-lab/open-connector) |
| --- | --- | --- |
| 接入对象 | 任意已登录网站（浏览器） | 1000+ SaaS 提供商的 OAuth/API |
| 形态 | 浏览器驱动的 CLI | 连接网关（SDK/CLI/MCP/HTTP/OpenAPI） |
| 替代谁 | 手点网页 | Pipedream / Composio |
| 选择建议 | 网站没有正式 API、只能点页面 → **OpenCLI** | 要稳定 OAuth 和预置 Action → **Open Connector** |

## 自托管代理后端：Agent Foundation vs OpenVaala

| 维度 | [Agent Foundation](https://github.com/converge-ai-labs/agent-foundation) | [OpenVaala](https://github.com/VaalaCat/openvaala) |
| --- | --- | --- |
| 语言与许可 | Python 3.13+，Apache-2.0 | Go，MIT |
| 核心抽象 | 托管代理 + 记忆 + 沙箱 + computer use + 可恢复执行 | 集中式代理循环 + 分布式工具执行器 |
| 工具执行位置 | 内置沙箱 | 本机、内置沙箱、任意 SSH 主机，逐次选择 |
| 客户端 | SDK、HTTP API、Console、Harness UI | 终端 UI、Web UI、桌面端、ACP 编辑器、Codex 客户端 |
| 平台 | 未特别声明 | 仅 Linux / macOS |
| 选择建议 | 要现成的权限/资源/恢复能力，接进自己的应用 → **Agent Foundation** | 要跨机器分发工具、多客户端共享同一会话 → **OpenVaala** |

## 科研技能：Nature Skills vs Supervisor Skills vs Scientific Agent Skills

| 维度 | [Nature Skills](https://github.com/Yuan1z0825/nature-skills) | [Supervisor Skills](https://github.com/HKUSTDial/Supervisor-Skills) | [Scientific Agent Skills](https://github.com/K-Dense-AI/scientific-agent-skills) |
| --- | --- | --- | --- |
| 重心 | 顶刊文风与科研绘图 | 从 Idea 到投稿的博导流程 | 生物/化学/医学实验与数据库 |
| 产出 | 写作风格、图 | 评估、写作、文献、审稿检查 | 177 技能 + 80 个科学数据库 |
| 许可 | 开源技能 | CC BY-NC-SA（非商用） | MIT |
| 选择建议 | 要把论文写得更「学术」 → **Nature Skills** | 要全流程副导师 → **Supervisor Skills** | 要实验室数据分析/药物发现工作流 → **Scientific Agent Skills** |
