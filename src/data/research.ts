// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-07T08:45:07.816376
// ============================================

// P0-2: Paper interface 升级，增加结构化摘要字段
export interface Paper {
  title: string;
  authors?: string;
  venue: string;
  date: string;
  summary: string;
  link: string;
  pdf_url?: string;
  tags: string[];
  importance: 'high' | 'medium';
  // === 增强字段（P0-2: 结构化摘要）===
  problem?: string;           // 研究问题
  method?: string;             // 核心方法
  value?: string;              // 主要价值/结果
  why_relevant?: string;       // 与 Garfield 研究的关系
  research_axis?: string;     // 所属层级: Perception | VLA | Simulation | Control | Edge | ...
  summary_structured?: string; // 结构化摘要（problem + method + value 组合）
}

// P0-3: GitHubProject interface 升级，增加 stars 缓存元数据
export interface GitHubProject {
  name: string;
  description: string;
  stars: string;
  language: string;
  link: string;
  tags: string[];
  // === 增强字段（P0-3: 缓存元数据）===
  stars_source?: 'api' | 'cache' | 'stale_cache' | 'fallback';
  stars_last_checked_at?: string;
}

export interface Trend {
  title: string;
  description: string;
  icon: string;
}

// P0-1: News interface 升级，增加 why_it_matters 和 research_axis
export interface News {
  title: string;
  source: string;
  date: string;
  summary: string;
  link: string;
  published_at?: string;
  freshness?: string;
  // === 增强字段（P0-1: 行业资讯语义增强）===
  why_it_matters?: string;     // 为什么重要（帮助快速判断价值）
  research_axis?: string;     // 所属领域: llm | robotics | drone | ...
}

// 最新论文（含结构化摘要）
export const papers: Paper[] = [
  {
    "title": "MV-VDP",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.03181",
    "date": "2026-04-03",
    "summary": "多视角视频扩散策略 联合预测多视角热图视频+RGB视频 建模环境3D时空状态。视频生成作为仿真数据代理",
    "problem": "多视角视频扩散策略, 3D时空感知方向的核心问题与挑战",
    "method": "多视角视频扩散策略 联合预测多视角热图视频+RGB视频 建模环境3D时空状态",
    "value": "视频生成作为仿真数据代理",
    "why_relevant": "视频生成作为仿真数据代理",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.03181",
    "pdf_url": "https://arxiv.org/pdf/2604.03181",
    "tags": [
      "多视角视频扩散策略, 3D时空感知"
    ],
    "importance": "high"
  },
  {
    "title": "The Compression Gap",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.03191",
    "date": "2026-04-03",
    "summary": "信息瓶颈理论 离散tokenization限制VLA扩展 连续动作(Diffusion Policy)受益于编码器升级。架构选择指导，优先扩散动作",
    "problem": "离散Token化限制VLA扩展方向的核心问题与挑战",
    "method": "信息瓶颈理论 离散tokenization限制VLA扩展 连续动作(Diffusion Policy)受益于编码器升级",
    "value": "架构选择指导，优先扩散动作",
    "why_relevant": "架构选择指导，优先扩散动作",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.03191",
    "pdf_url": "https://arxiv.org/pdf/2604.03191",
    "tags": [
      "离散Token化限制VLA扩展"
    ],
    "importance": "high"
  },
  {
    "title": "FSUNav",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.03139",
    "date": "2026-04-03",
    "summary": "双脑架构 Cerebellum: DRL通用局部规划器 Cerebrum: VLM三层推理。与ROSClaw/Aerial Agentic AI架构一致",
    "problem": "双脑架构零样本导航方向的核心问题与挑战",
    "method": "双脑架构 Cerebellum: DRL通用局部规划器 Cerebrum: VLM三层推理",
    "value": "与ROSClaw/Aerial Agentic AI架构一致",
    "why_relevant": "与ROSClaw/Aerial Agentic AI架构一致",
    "research_axis": "Navigation",
    "link": "https://arxiv.org/abs/2604.03139",
    "pdf_url": "https://arxiv.org/pdf/2604.03139",
    "tags": [
      "双脑架构零样本导航"
    ],
    "importance": "high"
  },
  {
    "title": "Off-Road Nav",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.03096",
    "date": "2026-04-03",
    "summary": "LiDAR+单目越野导航栈方向最新研究。",
    "problem": "LiDAR+单目越野导航栈方向的核心问题与挑战",
    "method": "LiDAR+单目越野导航栈",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "Navigation",
    "link": "https://arxiv.org/abs/2604.03096",
    "pdf_url": "https://arxiv.org/pdf/2604.03096",
    "tags": [
      "LiDAR+单目越野导航栈"
    ],
    "importance": "high"
  },
  {
    "title": "Multi-Robot Exploration",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.03042",
    "date": "2026-04-03",
    "summary": "多智能体探索 DP-GMM概率边界优先级 双无人机真实部署，10-14%增益。多机编队理论基础",
    "problem": "DP-GMM概率边界优先级方向的核心问题与挑战",
    "method": "多智能体探索 DP-GMM概率边界优先级 双无人机真实部署，10-14%增益",
    "value": "多机编队理论基础",
    "why_relevant": "多机编队理论基础",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.03042",
    "pdf_url": "https://arxiv.org/pdf/2604.03042",
    "tags": [
      "DP-GMM概率边界优先级"
    ],
    "importance": "high"
  },
  {
    "title": "SV-VLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.02965",
    "date": "2026-04-02",
    "summary": "Speculative Verification Heavy VLA宏规划 + Lightweight Verifier闭环监测 仅在必要时触发重规划。PX4 Offboard安全护栏设计",
    "problem": "Speculative Verification for VLA方向的核心问题与挑战",
    "method": "Speculative Verification Heavy VLA宏规划 + Lightweight Verifier闭环监测 仅在必要时触发重规划",
    "value": "PX4 Offboard安全护栏设计",
    "why_relevant": "PX4 Offboard安全护栏设计",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.02965",
    "pdf_url": "https://arxiv.org/pdf/2604.02965",
    "tags": [
      "Speculative Verification for VLA"
    ],
    "importance": "high"
  },
  {
    "title": "UAV-Track VLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.02241",
    "date": "2026-04-02",
    "summary": "π₀.₅架构的无人机跟踪 基于π₀.₅架构，引入时序压缩网络 并行双分支解码器: 空间感知接地头 + Flow Matching动作专家。无人机VLA跟踪完整pipeline",
    "problem": "VLA无人机跟踪, π₀.₅架构方向的核心问题与挑战",
    "method": "π₀.₅架构的无人机跟踪 基于π₀.₅架构，引入时序压缩网络 并行双分支解码器: 空间感知接地头 + Flow Matching动作专家",
    "value": "无人机VLA跟踪完整pipeline",
    "why_relevant": "无人机VLA跟踪完整pipeline",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.02241",
    "pdf_url": "https://arxiv.org/pdf/2604.02241",
    "tags": [
      "VLA无人机跟踪, π₀.₅架构"
    ],
    "importance": "high"
  },
  {
    "title": "Stop Wandering / MetaNav",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.02318",
    "date": "2026-04-02",
    "summary": "元认知VLN, VLM查询↓20.7%方向最新研究。",
    "problem": "元认知VLN, VLM查询↓20.7%方向的核心问题与挑战",
    "method": "元认知VLN, VLM查询↓20.7%",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.02318",
    "pdf_url": "https://arxiv.org/pdf/2604.02318",
    "tags": [
      "元认知VLN, VLM查询↓20.7%"
    ],
    "importance": "high"
  }
];

// 趋势
export const trends: Trend[] = [
  {
    "icon": "🤖",
    "title": "统一扩散VLA",
    "description": "MMaDA-VLA展示单一框架处理多模态的优势"
  },
  {
    "icon": "📡",
    "title": "轻量化微调",
    "description": "Fast-dVLA等参数空间解耦成为新范式"
  },
  {
    "icon": "🤖",
    "title": "VLA+WM协同",
    "description": "VLAW等展示联合训练的价值"
  },
  {
    "icon": "📡",
    "title": "导航工具链完善",
    "description": "InternNav等提供完整的VLN研究平台"
  }
];

// GitHub 项目（含 stars 缓存元数据）
export const githubProjects: GitHubProject[] = [];

// 新闻
export const news: News[] = [
  {
    "title": "Nature Machine Intelligence: ROS-LLM 框架正式发表",
    "link": "https://www.nature.com/articles/s42256-026-01186-z",
    "summary": "2026.03 | 来源：Nature Machine Intelligence ROS-LLM 核心功能： - 让非专业用户用自然语言控制机器人",
    "source": "网络",
    "date": "_2026-04-0",
    "published_at": "_2026-04-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "Embedded World 2026 — Arduino VENTUNO Q 发布",
    "link": "https://github.com/commaai/openpilot",
    "summary": "2026.03 | 来源：Arduino 官方 💡 新一代 AI + 机器人 + 执行平台，集成 Edge Impulse 🎯 树莓派替代方案，适合毕设硬件选型",
    "source": "GitHub",
    "date": "_2026-04-0",
    "published_at": "_2026-04-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "PrismML 发布全球首个商用 1-Bit LLM",
    "link": "https://www.forbes.com/sites/jonmarkman/2026/04/02/prismml-introduces-the-first-commercially-viable-1-bit-llm/",
    "summary": "2026.04.02 | 来源：Forbes 💡 核心突破：   - 80亿参数模型压缩至 1.15GB（传统 16-bit 需要 16GB）",
    "source": "网络",
    "date": "2026-04-02",
    "published_at": "2026-04-02",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "fresh",
    "archived": false
  },
  {
    "title": "NVIDIA GR00T N1.6 + Cosmos Reason 2 发布",
    "source": "NVIDIA Newsroom",
    "date": "2026-04-01",
    "summary": "NVIDIA发布开源物理AI模型GR00T N1.6和Cosmos Reason世界模型，全球合作伙伴推出下一代机器人，机器人的ChatGPT时刻已至。",
    "link": "https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots",
    "published_at": "2026-04-01",
    "freshness": "fresh",
    "verified": true,
    "why_it_matters": "开源物理AI+世界模型对机器人仿真和无人机Sim2Real有直接参考价值",
    "research_axis": "robotics",
    "_source": "fallback"
  },
  {
    "title": "Unitree B2-W 四足机器人发布",
    "source": "Unitree",
    "date": "2026-03-25",
    "summary": "宇树科技发布B2-W工业四足机器人，负载30kg，续航4小时，支持复杂地形巡检，配备深度相机和激光雷达。",
    "link": "https://www.unitree.com.cn/",
    "published_at": "2026-03-25",
    "freshness": "fresh",
    "verified": true,
    "why_it_matters": "四足机器人硬件迭代，负载和续航大幅提升，工业巡检应用加速落地",
    "research_axis": "robotics",
    "_source": "fallback"
  }
];
