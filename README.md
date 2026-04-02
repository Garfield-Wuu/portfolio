# Garfield's Portfolio

个人技术站点 | LLM + 无人机 + 机器人研究

**网址：** https://www.garfield-wu.com

**技术栈：** Astro 6 · Tailwind CSS 4 · TypeScript（静态站点，`npm run build` 输出至 `dist/`）

---

## 前端特性（近期）

- 明暗主题切换（本地 `localStorage` 记忆，导航栏右侧）
- 网格背景、毛玻璃卡片、滚动进场动效、桌面端鼠标光晕
- 首页 Hero 分栏、技术矩阵（Bento）、精选项目主次布局
- 页脚社交：GitHub、bilibili、CSDN

---

## 📂 项目结构

```
/
├── public/                      # 静态资源（头像、favicon 等）
├── src/
│   ├── pages/
│   │   ├── index.astro          # 首页
│   │   ├── about.astro          # 关于
│   │   ├── projects.astro       # 项目展示
│   │   └── research/
│   │       ├── index.astro      # 研究热点（数据由脚本生成时写入 research.ts）
│   │       └── archive/
│   │           └── index.astro  # 研究归档
│   ├── data/
│   │   ├── profile.ts           # 个人资料与 SEO
│   │   ├── projects.ts          # 项目数据
│   │   ├── research.ts          # 研究热点数据（多为自动生成，勿手改）
│   │   └── archive/             # 归档 JSON（若使用）
│   ├── layouts/
│   │   └── Layout.astro         # 全站布局与主题脚本
│   └── styles/
│       └── global.css           # Tailwind 与设计变量
└── dist/                        # 构建输出
```

---

## 🔬 研究热点页面 (Research)

**网址：** https://www.garfield-wu.com/research

自动追踪 LLM + 无人机 + 机器人领域最新进展，每日 08:45 自动更新。

### 数据来源

| 模块 | 来源 | 更新频率 |
|------|------|---------|
| 📚 论文 | arXiv + OpenAlex | 每日 |
| 🐙 GitHub | GitHub API + 人工验证 | 每日 |
| 📰 资讯 | 每日行业简报 | 每日 |
| 🔥 趋势 | UAV-LLM Scout | 每小时 |

### 页面功能

- **类型筛选**：全部 / 论文 / GitHub / 资讯
- **标签筛选**：UAV、LLM、VLA、Embodied AI、ROS2、PX4 等 12+ 标签
- **搜索**：标题 / 摘要 / 关键词实时搜索
- **排序**：最新优先 / Stars / 重要性
- **关键词高亮**：搜索结果中高亮匹配词

### 研究归档

**网址：** https://www.garfield-wu.com/research/archive

- 超过 30 天的历史资讯自动归档
- 按月份分组展示
- 可追溯历史研究动态

---

## 🤖 自动化发布系统

位于 `~/clawd/scripts/` 目录。

### 核心脚本

| 脚本 | 功能 |
|------|------|
| `export_research_to_site.py` | 从 OpenClaw 数据源导出研究数据 |
| `validate_research_publish.py` | 发布前数据校验 (可达性 + 内容一致性) |
| `publish_research_site.sh` | 自动发布脚本 (导出→校验→Git push→通知) |
| `research_exports/latest.json` | 最新导出数据 |
| `research_exports/news_archive.json` | 归档数据 |

### 发布流程

```
┌─────────────────────────────────────────────┐
│  08:45 每日定时触发                          │
├─────────────────────────────────────────────┤
│  Step 1: 导出数据                             │
│  export_research_to_site.py                   │
│  - 解析 cron 日志、论文、简报                 │
│  - 获取 GitHub Stars (API 实时)              │
│  - 旧闻归档 (>30天)                         │
├─────────────────────────────────────────────┤
│  Step 2: 数据校验                             │
│  validate_research_publish.py                 │
│  - HTTP 可达性检查 (Papers/GitHub/News)     │
│  - 内容一致性检查 (摘要重复/错位)             │
│  - 时效性分级 (fresh/aging/stale)           │
│  - P0 错误 → 阻止发布                       │
├─────────────────────────────────────────────┤
│  Step 3: 生成 research.ts                    │
│  - 写入 src/data/research.ts                │
├─────────────────────────────────────────────┤
│  Step 4: Git commit & push                   │
│  - 自动 commit                             │
│  - 推送到 GitHub                           │
│  - 触发 Cloudflare Pages 部署               │
├─────────────────────────────────────────────┤
│  Step 5: 生成 Publish Report                 │
│  - JSON 报告保存到 logs/                    │
├─────────────────────────────────────────────┤
│  Step 6: Telegram 通知                      │
│  - 成功通知 / 失败告警                      │
└─────────────────────────────────────────────┘
```

### 数据校验规则

| 检查项 | 规则 | 级别 |
|--------|------|------|
| 论文链接 | HTTP 200，非本地路径 | P0 |
| 论文 PDF 链接 | 可达或标记降级 | P1 |
| GitHub 仓库 | HTTP 200，真实存在 | P0 |
| GitHub Stars | API 实时，失败回退缓存 | - |
| 新闻链接 | HTTP 200 | P0 |
| 摘要重复 | 相似度 >85% → P0 错误 | P0 |
| 时效性 | >30天 → 归档 | - |
| 来源-链接匹配 | 域名与来源一致性 | P1 |

### 定时任务

| 任务 | 时间 | 说明 |
|------|------|------|
| Research Site Publisher | 08:45 每日 | 发布研究页面 |
| UAV-LLM Scout | 每小时 | 检索论文/项目 |
| 每日行业简报 | 08:30 每日 | 生成行业简报 |

---

## 🛠️ 开发命令

```bash
# 安装依赖
npm install

# 本地开发
npm run dev

# 构建生产版本
npm run build

# 预览构建结果
npm run preview

# 手动触发发布
cd ~/clawd/scripts && bash publish_research_site.sh
```

---

## 📝 数据结构

### Papers

```typescript
interface Paper {
  title: string;
  authors?: string;
  venue: string;      // e.g., "arXiv:2603.29844"
  date: string;        // e.g., "2026-03-31"
  summary: string;
  link: string;        // arXiv abstract page
  pdf_url?: string;     // arXiv PDF link
  tags: string[];
  importance: 'high' | 'medium';
}
```

### GitHub Projects

```typescript
interface GitHubProject {
  name: string;
  description: string;
  stars: string;       // 实时获取 (e.g., "11.4k")
  language: string;
  link: string;
  tags: string[];
}
```

### News

```typescript
interface News {
  title: string;
  source: string;
  date: string;
  summary: string;
  link: string;
  published_at?: string;
  freshness?: 'fresh' | 'aging' | 'stale';
}
```

---

## 🔗 相关链接

- **网站：** https://www.garfield-wu.com
- **GitHub：** https://github.com/Garfield-Wuu/portfolio
- **研究归档：** https://www.garfield-wu.com/research/archive

---

## 📜 更新日志

### 2026-04-03（UI）

- ✅ 全站视觉重构：毛玻璃卡片、网格与光晕背景
- ✅ 明暗主题切换、滚动进场与鼠标光晕（渐进增强）
- ✅ 首页 Hero / 技术矩阵 / 精选项目布局优化
- ✅ 页脚 bilibili 文案、CSDN 链接、移除 Built with Astro 文案

### 2026-04-03

- ✅ Archive SEO 优化 (独立 title/description/canonical)
- ✅ 搜索结果关键词高亮
- ✅ 热度排序规则清晰化

### 2026-04-02 ~ 2026-04-03 (持续增强)

- ✅ Research 页面可用性增强 (筛选/搜索/排序)
- ✅ `/research/archive` 归档页
- ✅ Publish Report JSON 生成
- ✅ Telegram 发布通知 + 失败告警
- ✅ GitHub Stars API 实时获取
- ✅ News Archive 数据层
- ✅ Papers PDF 链接校验
- ✅ News 时效性分级 (🟢/🟡/🔴)
- ✅ News 内容一致性校验 (摘要重复检测)
- ✅ 三模块 HTTP 可达性校验
- ✅ GitHub 404 链接修复

### 2026-04-02

- ✅ 自动化发布系统上线
- ✅ Papers / GitHub / News 三模块自动生成
- ✅ 每日 08:45 自动发布
