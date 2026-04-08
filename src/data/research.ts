// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-08T08:58:15.825196
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
export const papers: Paper[] = [
  {
    "title": "Veo-Act",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.04502",
    "date": "2026-04-04",
    "summary": "视频生成+层次化VLA Veo-3 作为高层运动规划器 VLA policy 作为低层执行器。分层架构参考 (高层规划 + 低层执行)",
    "problem": "视频模型+层次化VLA控制方向的核心问题与挑战",
    "method": "视频生成+层次化VLA Veo-3 作为高层运动规划器 VLA policy 作为低层执行器",
    "value": "分层架构参考 (高层规划 + 低层执行)",
    "why_relevant": "分层架构参考 (高层规划 + 低层执行)",
    "research_axis": "Control",
    "link": "https://arxiv.org/abs/2604.04502",
    "pdf_url": "https://arxiv.org/pdf/2604.04502",
    "tags": [
      "视频生成+层次化VLA Veo-3 作为高层运动规划器 VL"
    ],
    "importance": "high"
  },
  {
    "title": "Adaptive Action Chunking",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.04161",
    "date": "2026-04-04",
    "summary": "自适应动作分块 动作熵作为线索自适应确定chunk size 平衡响应性与一致性。PX4 Offboard 动态规划频率优化",
    "problem": "动作熵自适应分块策略方向的核心问题与挑战",
    "method": "自适应动作分块 动作熵作为线索自适应确定chunk size 平衡响应性与一致性",
    "value": "PX4 Offboard 动态规划频率优化",
    "why_relevant": "PX4 Offboard 动态规划频率优化",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.04161",
    "pdf_url": "https://arxiv.org/pdf/2604.04161",
    "tags": [
      "自适应动作分块 动作熵作为线索自适应确定chunk size"
    ],
    "importance": "high"
  },
  {
    "title": "ROSClaw v2",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.04664",
    "date": "2026-04-04",
    "summary": "具身AI操作系统 e-URDF语义-物理拓扑映射 Sim2Real状态对齐。多无人机协同 + PX4仿真集成",
    "problem": "OS级多智能体协作框架方向的核心问题与挑战",
    "method": "具身AI操作系统 e-URDF语义-物理拓扑映射 Sim2Real状态对齐",
    "value": "多无人机协同 + PX4仿真集成",
    "why_relevant": "多无人机协同 + PX4仿真集成",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.04664",
    "pdf_url": "https://arxiv.org/pdf/2604.04664",
    "tags": [
      "具身AI操作系统 e-URDF语义-物理拓扑映射 Sim2R"
    ],
    "importance": "high"
  },
  {
    "title": "E-VLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.04834",
    "date": "2026-04-04",
    "summary": "事件相机增强VLA DAVIS346事件相机直接利用运动和结构线索 20 lux暗光: 0%→90%成功率。夜间飞行/高速机动感知增强",
    "problem": "事件相机增强VLA, 暗光/模糊鲁棒方向的核心问题与挑战",
    "method": "事件相机增强VLA DAVIS346事件相机直接利用运动和结构线索 20 lux暗光: 0%→90%成功率",
    "value": "夜间飞行/高速机动感知增强",
    "why_relevant": "夜间飞行/高速机动感知增强",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.04834",
    "pdf_url": "https://arxiv.org/pdf/2604.04834",
    "tags": [
      "事件相机增强VLA DAVIS346事件相机直接利用运动和结"
    ],
    "importance": "high"
  },
  {
    "title": "VLA-Forget",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.03956",
    "date": "2026-04-03",
    "summary": "VLA安全遗忘 移除不安全/隐私敏感行为 三目标: 遗忘效果+感知保持+推理保留。部署后安全更新机制",
    "problem": "VLA遗忘学习/安全移除方向的核心问题与挑战",
    "method": "VLA安全遗忘 移除不安全/隐私敏感行为 三目标: 遗忘效果+感知保持+推理保留",
    "value": "部署后安全更新机制",
    "why_relevant": "部署后安全更新机制",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.03956",
    "pdf_url": "https://arxiv.org/pdf/2604.03956",
    "tags": [
      "VLA安全遗忘 移除不安全/隐私敏感行为 三目标: 遗忘效果"
    ],
    "importance": "high"
  },
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
      "多视角视频扩散策略 联合预测多视角热图视频+RGB视频 建模"
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
      "信息瓶颈理论 离散tokenization限制VLA扩展 连"
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
      "双脑架构 Cerebellum: DRL通用局部规划器 Ce"
    ],
    "importance": "high"
  },
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
    "link": "https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots",
    "summary": "NVIDIA发布开源物理AI模型GR00T N1.6和Cosmos Reason世界模型，全球合作伙伴推出下一代机器人，机器人的ChatGPT时刻已至。",
    "source": "NVIDIA Newsroom",
    "date": "2026-04-01",
    "published_at": "2026-04-01",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false
  },
  {
    "title": "Unitree B2-W 四足机器人发布",
    "link": "https://www.unitree.com.cn/",
    "summary": "宇树科技发布B2-W工业四足机器人，负载30kg，续航4小时，支持复杂地形巡检，配备深度相机和激光雷达。",
    "source": "Unitree",
    "date": "2026-03-25",
    "published_at": "2026-03-25",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false
  },
];
