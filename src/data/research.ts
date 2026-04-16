// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-16T08:45:07.342321
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
export const recentPapers: Paper[] = [
  {
    "title": "E2E-Fly",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.12916",
    "date": "2026-04-12",
    "summary": "端到端四旋翼全栈系统 ⭐⭐⭐⭐⭐ 首个统一可微分物理学习 + 训练 + 验证 + 部署 VisFly仿真器: 6000 FPS, 全可微分动力学。完整的视觉策略训练→PX4部署流程参考！",
    "problem": "端到端四旋翼训练→部署系统方向的核心问题与挑战",
    "method": "端到端四旋翼全栈系统 ⭐⭐⭐⭐⭐ 首个统一可微分物理学习 + 训练 + 验证 + 部署 VisFly仿真器: 6000 FPS, 全可微分动力学",
    "value": "完整的视觉策略训练→PX4部署流程参考！",
    "why_relevant": "完整的视觉策略训练→PX4部署流程参考！",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.12916",
    "pdf_url": "https://arxiv.org/pdf/2604.12916",
    "tags": [
      "端到端四旋翼训练→部署系统"
    ],
    "importance": "high"
  },
  {
    "title": "VULCAN",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.12831",
    "date": "2026-04-12",
    "summary": "VLM多智能体火灾救援 ⭐⭐⭐⭐ VLM Global Planner + FMM Local Planner分层架构 Habitat-Matterport3D扩展火灾模拟。VLM规划层 + 多无人机编队协调参考",
    "problem": "VLM多智能体协同(火灾救援)方向的核心问题与挑战",
    "method": "VLM多智能体火灾救援 ⭐⭐⭐⭐ VLM Global Planner + FMM Local Planner分层架构 Habitat-Matterport3D扩展火灾模拟",
    "value": "VLM规划层 + 多无人机编队协调参考",
    "why_relevant": "VLM规划层 + 多无人机编队协调参考",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.12831",
    "pdf_url": "https://arxiv.org/pdf/2604.12831",
    "tags": [
      "VLM多智能体协同(火灾救援)"
    ],
    "importance": "high"
  },
  {
    "title": "EagleVision",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.11400",
    "date": "2026-04-11",
    "summary": "高速竞速感知基准 ⭐⭐⭐⭐ LiDAR 3D检测+轨迹预测 跨域泛化: Urban→Racing (NDS 0.726)。感知跨域迁移方法论",
    "problem": "高速竞速感知基准方向的核心问题与挑战",
    "method": "高速竞速感知基准 ⭐⭐⭐⭐ LiDAR 3D检测+轨迹预测 跨域泛化: Urban→Racing (NDS 0.726)",
    "value": "感知跨域迁移方法论",
    "why_relevant": "感知跨域迁移方法论",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.11400",
    "pdf_url": "https://arxiv.org/pdf/2604.11400",
    "tags": [
      "高速竞速感知基准"
    ],
    "importance": "high"
  },
  {
    "title": "DA-PTQ",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.11572",
    "date": "2026-04-11",
    "summary": "VLA量化 ⭐⭐⭐⭐⭐ 发现时序误差累积是量化失败主因 跨空间表示补偿 + 运动驱动混合精度。Jetson边缘VLA量化，内存/延迟优化",
    "problem": "VLA量化/时序误差方向的核心问题与挑战",
    "method": "VLA量化 ⭐⭐⭐⭐⭐ 发现时序误差累积是量化失败主因 跨空间表示补偿 + 运动驱动混合精度",
    "value": "Jetson边缘VLA量化，内存/延迟优化",
    "why_relevant": "Jetson边缘VLA量化，内存/延迟优化",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.11572",
    "pdf_url": "https://arxiv.org/pdf/2604.11572",
    "tags": [
      "VLA量化/时序误差"
    ],
    "importance": "high"
  },
  {
    "title": "StarVLA-α",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.11757",
    "date": "2026-04-11",
    "summary": "VLA架构简化 ⭐⭐⭐⭐ 最小化设计达到SOTA 单一模型超越π₀.₅达20%。简化pipeline更易部署",
    "problem": "VLA架构简化方向的核心问题与挑战",
    "method": "VLA架构简化 ⭐⭐⭐⭐ 最小化设计达到SOTA 单一模型超越π₀.₅达20%",
    "value": "简化pipeline更易部署",
    "why_relevant": "简化pipeline更易部署",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.11757",
    "pdf_url": "https://arxiv.org/pdf/2604.11757",
    "tags": [
      "VLA架构简化"
    ],
    "importance": "high"
  },
  {
    "title": "Grounded World Model",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.11751",
    "date": "2026-04-11",
    "summary": "语义可泛化规划 ⭐⭐⭐⭐⭐ 87%语义泛化 vs 传统VLA 22% VLM对齐空间学习世界模型。新环境快速适应，语义级规划",
    "problem": "语义可泛化规划方向的核心问题与挑战",
    "method": "语义可泛化规划 ⭐⭐⭐⭐⭐ 87%语义泛化 vs 传统VLA 22% VLM对齐空间学习世界模型",
    "value": "新环境快速适应，语义级规划",
    "why_relevant": "新环境快速适应，语义级规划",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.11751",
    "pdf_url": "https://arxiv.org/pdf/2604.11751",
    "tags": [
      "语义可泛化规划"
    ],
    "importance": "high"
  },
  {
    "title": "AffordSim",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.11674",
    "date": "2026-04-11",
    "summary": "Affordance数据生成 ⭐⭐⭐⭐⭐ 首个affordance感知仿真数据生成 IsaacSim + 3D Gaussian。自动化仿真数据生成",
    "problem": "Affordance感知数据生成方向的核心问题与挑战",
    "method": "Affordance数据生成 ⭐⭐⭐⭐⭐ 首个affordance感知仿真数据生成 IsaacSim + 3D Gaussian",
    "value": "自动化仿真数据生成",
    "why_relevant": "自动化仿真数据生成",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.11674",
    "pdf_url": "https://arxiv.org/pdf/2604.11674",
    "tags": [
      "Affordance感知数据生成"
    ],
    "importance": "high"
  },
  {
    "title": "Ro-SLM",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.10929",
    "date": "2026-04-10",
    "summary": "机载SLM任务规划 ⭐⭐⭐⭐⭐ 蒸馏训练使SLM接近LLM性能 支持无人机等嵌入式平台部署。LLM指令理解层可机载部署，不依赖网络",
    "problem": "机载SLM任务规划方向的核心问题与挑战",
    "method": "机载SLM任务规划 ⭐⭐⭐⭐⭐ 蒸馏训练使SLM接近LLM性能 支持无人机等嵌入式平台部署",
    "value": "LLM指令理解层可机载部署，不依赖网络",
    "why_relevant": "LLM指令理解层可机载部署，不依赖网络",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.10929",
    "pdf_url": "https://arxiv.org/pdf/2604.10929",
    "tags": [
      "机载SLM任务规划"
    ],
    "importance": "high"
  }
];

// GitHub 热门项目（含 stars 缓存元数据）
export const hotProjects: GitHubProject[] = [
  {
    "name": "PX4 Autopilot",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": "11.5k",
    "language": "C++",
    "link": "https://github.com/PX4/PX4-Autopilot",
    "tags": [
      "PX4",
      "UAV",
      "ROS",
      "Autonomous Flight",
      "Drone"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-15T08:45:47.639542",
    "stars_source": "stale_cache"
  },
  {
    "name": "Prometheus (amov-lab)",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    "stars": "3.1k",
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus",
    "tags": [
      "PX4",
      "UAV",
      "ROS",
      "Autonomous Flight",
      "Tracking"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-15T08:45:48.569191",
    "stars_source": "stale_cache"
  },
  {
    "name": "embodied-drone-agents",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": "18",
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": [
      "LLM",
      "MAVSDK",
      "LangGraph",
      "Agent",
      "UAV"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-15T08:45:49.574153",
    "stars_source": "stale_cache"
  },
  {
    "name": "llm-uav (Atmaca)",
    "description": "集成Gemma 3 4B与无人机控制，支持自然语言指令，边缘部署。",
    "stars": "0",
    "language": "Python",
    "link": "https://github.com/furkanisikay/llm-uav",
    "tags": [
      "LLM",
      "UAV",
      "Edge AI",
      "NLP"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-15T08:45:50.477394",
    "stars_source": "stale_cache"
  },
  {
    "name": "MAVLinkMCP",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": "16",
    "language": "Python",
    "link": "https://github.com/ion-g-ion/MAVLinkMCP",
    "tags": [
      "MAVLink",
      "MCP",
      "PX4",
      "LLM"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-15T08:45:51.404743",
    "stars_source": "stale_cache"
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "630",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-15T08:45:52.389479",
    "stars_source": "stale_cache"
  },
  {
    "name": "Awesome-LLM-Robotics",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": "4.3k",
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": [
      "LLM",
      "Robot",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-15T08:45:53.353033",
    "stars_source": "stale_cache"
  },
  {
    "name": "Awesome-Aerial-VLN",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": "51",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": [
      "UAV",
      "VLN",
      "Navigation",
      "Survey"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-15T08:45:54.321777",
    "stars_source": "stale_cache"
  }
];

// 新闻摘要（含 why_it_matters）
export const recentNews: News[] = [
  {
    "title": "NVIDIA GTC 2026：Cosmos 3 + Isaac GR00T 更新",
    "link": "https://blogs.nvidia.com/blog/national-robotics-week-2026/",
    "summary": "*\n> NVIDIA 在 Physical AI 的布局已经完整：\n> - 仿真（Isaac Sim）→ 训练（Cosmos）→ 部署（GR00T）→ 边缘（Jetson）\n> - 对毕设的启发：可以优先考虑用 Isaac Sim 做仿真验证",
    "source": "NVIDIA",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "AERO-MPPI：GPU加速的无地图敏捷无人机导航",
    "link": "https://github.com/XinChen-stars/AERO_MPPI",
    "summary": "2026.03（ICRA 2026录用） | 来源：arXiv:2509.17340 💡 核心创新： - 全 GPU 加速：用 NVIDIA Warp GPU 内核，实时运行于 Jetson Orin NX",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "awesome-humanoid-robot-learning：人形机器人学习论文列表",
    "link": "https://github.com/YanjieZe/awesome-humanoid-robot-learning",
    "summary": "持续更新 | 来源：GitHub 💡 收录人形机器人领域的最新论文，包括 2026.03 的 Heracles 工作  https://github.com/YanjieZe/awesome-humanoid-robot-learning",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "open-dronelog ⭐ New!",
    "link": "https://github.com/arpanghosh8453/open-dronelog",
    "summary": "Tauri v2 + React + DuckDB | 来源：arpanghosh8453 💡 核心：DJI/Litchi 飞行日志分析仪表盘 🎯 亮点：",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "AutoResearchClaw ⭐ Updated v0.4.0",
    "link": "https://github.com/aiming-lab/AutoResearchClaw",
    "summary": "Python | 来源：aiming-lab 💡 核心：自主科研自动化工具（idea → paper） 🎯 亮点：",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "Generalist AI GEN-1：机器人「肌肉记忆」实现 99% 成功率",
    "link": "https://roboticsandautomationnews.com/2026/04/11/generalist-ai-unveils-gen-1-model-claiming-breakthrough-in-real-world-robotic-task-performance/100516/",
    "summary": "2026.04.11 | 来源：Robotics and Automation News 💡 核心创新： - 提出「Data Hands」方案：用穿戴式夹具采集人类操作数据",
    "source": "网络",
    "date": "2026-04-11",
    "published_at": "2026-04-11",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false
  }
];

// 研究趋势
export const trends: Trend[] = [
  {
    "icon": "📡",
    "title": "全栈系统整合",
    "description": "E2E-Fly等展示训练→部署完整流程成为新范式"
  },
  {
    "icon": "📡",
    "title": "VLM进入多智能体",
    "description": "从单智能体VLN扩展到多智能体协同"
  },
  {
    "icon": "📡",
    "title": "灾难响应机器人",
    "description": "火灾/搜救成为VLA新战场"
  },
  {
    "icon": "👁️",
    "title": "Thermal感知",
    "description": "烟雾环境thermal > RGB视觉成为共识"
  }
];

// 元数据
export const lastUpdated = "2026-04-16T08:45:07.342321";
