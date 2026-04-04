// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-04T08:46:59.819021
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
  published_at: string;
  verified: boolean;
  why_it_matters: string | null;
  research_axis?: string;
  freshness: 'fresh' | 'aging' | 'stale' | 'unknown';
  archived: boolean;
}

// 论文列表
export const papers: Paper[] = [
  {
    title: "UAV-Track VLA",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.02241",
    date: "2026-04-02",
    summary: "π₀.₅架构的无人机跟踪 基于π₀.₅架构，引入时序压缩网络 并行双分支解码器: 空间感知接地头 + Flow Matching动作专家。无人机VLA跟踪完整pipeline",
    link: "https://arxiv.org/abs/2604.02241",
    pdf_url: "https://arxiv.org/pdf/2604.02241",
    tags: ["VLA无人机跟踪, π₀.₅架构"],
    importance: "high" as const,
    problem: "VLA无人机跟踪, π₀.₅架构方向的核心问题与挑战",
    method: "π₀.₅架构的无人机跟踪 基于π₀.₅架构，引入时序压缩网络 并行双分支解码器: 空间感知接地头 + Flow Matching动作专家",
    value: "无人机VLA跟踪完整pipeline",
    why_relevant: "无人机VLA跟踪完整pipeline",
    research_axis: "VLA",
  },
  {
    title: "Stop Wandering / MetaNav",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.02318",
    date: "2026-04-02",
    summary: "元认知VLN, VLM查询↓20.7%方向最新研究。",
    link: "https://arxiv.org/abs/2604.02318",
    pdf_url: "https://arxiv.org/pdf/2604.02318",
    tags: ["元认知VLN, VLM查询↓20.7%"],
    importance: "high" as const,
    problem: "元认知VLN, VLM查询↓20.7%方向的核心问题与挑战",
    method: "元认知VLN, VLM查询↓20.7%",
    value: "与LLM无人机研究相关",
    why_relevant: "与LLM无人机研究相关",
    research_axis: "VLM",
  },
  {
    title: "UniDriveVLA",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.02190",
    date: "2026-04-02",
    summary: "MoT专家解耦架构 三个专家: 驾驶理解 + 场景感知 + 动作规划 掩码注意力协调专家间通信。VLA架构设计参考",
    link: "https://arxiv.org/abs/2604.02190",
    pdf_url: "https://arxiv.org/pdf/2604.02190",
    tags: ["MoT专家解耦, 感知-推理分离"],
    importance: "high" as const,
    problem: "MoT专家解耦, 感知-推理分离方向的核心问题与挑战",
    method: "MoT专家解耦架构 三个专家: 驾驶理解 + 场景感知 + 动作规划 掩码注意力协调专家间通信",
    value: "VLA架构设计参考",
    why_relevant: "VLA架构设计参考",
    research_axis: "VLA",
  },
  {
    title: "PRO-SPECT",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.02109",
    date: "2026-04-02",
    summary: "UAV-UGV概率安全协同规划方向最新研究。",
    link: "https://arxiv.org/abs/2604.02109",
    pdf_url: "https://arxiv.org/pdf/2604.02109",
    tags: ["UAV-UGV概率安全协同规划"],
    importance: "high" as const,
    problem: "UAV-UGV概率安全协同规划方向的核心问题与挑战",
    method: "UAV-UGV概率安全协同规划",
    value: "与LLM无人机研究相关",
    why_relevant: "与LLM无人机研究相关",
    research_axis: "VLA",
  },
  {
    title: "SMASH",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.01158",
    date: "2026-04-01",
    summary: "人形全身技能学习 egocentric视觉 + 低延迟感知-控制闭环。全身协调控制思路",
    link: "https://arxiv.org/abs/2604.01158",
    pdf_url: "https://arxiv.org/pdf/2604.01158",
    tags: ["人形全身技能, egocentric视觉"],
    importance: "high" as const,
    problem: "人形全身技能, egocentric视觉方向的核心问题与挑战",
    method: "人形全身技能学习 egocentric视觉 + 低延迟感知-控制闭环",
    value: "全身协调控制思路",
    why_relevant: "全身协调控制思路",
    research_axis: "Perception",
  },
  {
    title: "EgoSim",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.01001",
    date: "2026-04-01",
    summary: "第一人称世界仿真器 3D场景一致性 + 跨时间状态更新 生成空间一致的交互视频。仿真数据生成 + Sim2Real",
    link: "https://arxiv.org/abs/2604.01001",
    pdf_url: "https://arxiv.org/pdf/2604.01001",
    tags: ["第一人称世界仿真器, 3D场景一致性"],
    importance: "high" as const,
    problem: "第一人称世界仿真器, 3D场景一致性方向的核心问题与挑战",
    method: "第一人称世界仿真器 3D场景一致性 + 跨时间状态更新 生成空间一致的交互视频",
    value: "仿真数据生成 + Sim2Real",
    why_relevant: "仿真数据生成 + Sim2Real",
    research_axis: "Simulation",
  },
  {
    title: "DVGT-2",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.00813",
    date: "2026-04-01",
    summary: "VGA范式: 几何优先于语言 Vision-Geometry-Action (VGA) 替代 VLA 稠密3D几何作为关键线索，而非语言描述。无人机精确控制需要几何感知",
    link: "https://arxiv.org/abs/2604.00813",
    pdf_url: "https://arxiv.org/pdf/2604.00813",
    tags: ["VGA范式替代VLA, 稠密3D几何"],
    importance: "high" as const,
    problem: "VGA范式替代VLA, 稠密3D几何方向的核心问题与挑战",
    method: "VGA范式: 几何优先于语言 Vision-Geometry-Action (VGA) 替代 VLA 稠密3D几何作为关键线索，而非语言描述",
    value: "无人机精确控制需要几何感知",
    why_relevant: "无人机精确控制需要几何感知",
    research_axis: "VLA",
  },
  {
    title: "BAT",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.01064",
    date: "2026-04-01",
    summary: "在线策略切换 敏捷-稳定平衡。无人机悬停/机动模式切换",
    link: "https://arxiv.org/abs/2604.01064",
    pdf_url: "https://arxiv.org/pdf/2604.01064",
    tags: ["在线策略切换, 敏捷-稳定平衡"],
    importance: "high" as const,
    problem: "在线策略切换, 敏捷-稳定平衡方向的核心问题与挑战",
    method: "在线策略切换 敏捷-稳定平衡",
    value: "无人机悬停/机动模式切换",
    why_relevant: "无人机悬停/机动模式切换",
    research_axis: "VLA",
  },
];

// GitHub 项目列表
export const githubProjects: GitHubProject[] = [
  {
    name: "PX4 Autopilot",
    description: "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    stars: "11.4k",
    language: "C++",
    link: "https://github.com/PX4/PX4-Autopilot",
    tags: ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    stars_source: "stale_cache" as const,
    stars_last_checked_at: "2026-04-03T15:48:58.161389",
  },
  {
    name: "Prometheus (amov-lab)",
    description: "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    stars: "3.1k",
    language: "C++",
    link: "https://github.com/amov-lab/Prometheus",
    tags: ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    stars_source: "stale_cache" as const,
    stars_last_checked_at: "2026-04-03T15:48:59.956538",
  },
  {
    name: "embodied-drone-agents",
    description: "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    stars: "18",
    language: "Python",
    link: "https://github.com/EmergenceAI/embodied-drone-agents",
    tags: ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    stars_source: "stale_cache" as const,
    stars_last_checked_at: "2026-04-03T15:49:01.823517",
  },
  {
    name: "llm-uav (Atmaca)",
    description: "集成Gemma 3 4B与无人机控制，支持自然语言指令，边缘部署。",
    stars: "0",
    language: "Python",
    link: "https://github.com/furkanisikay/llm-uav",
    tags: ["LLM", "UAV", "Edge AI", "NLP"],
    stars_source: "stale_cache" as const,
    stars_last_checked_at: "2026-04-03T15:49:02.687842",
  },
  {
    name: "MAVLinkMCP",
    description: "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    stars: "16",
    language: "Python",
    link: "https://github.com/ion-g-ion/MAVLinkMCP",
    tags: ["MAVLink", "MCP", "PX4", "LLM"],
    stars_source: "stale_cache" as const,
    stars_last_checked_at: "2026-04-03T15:49:03.571134",
  },
  {
    name: "Awesome-RL-VLA",
    description: "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    stars: "614",
    language: "Python",
    link: "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    tags: ["VLA", "RL", "Survey", "Papers"],
    stars_source: "stale_cache" as const,
    stars_last_checked_at: "2026-04-03T15:49:04.423075",
  },
  {
    name: "Awesome-LLM-Robotics",
    description: "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    stars: "4.3k",
    language: "Python",
    link: "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    tags: ["LLM", "Robot", "Survey", "Papers"],
    stars_source: "stale_cache" as const,
    stars_last_checked_at: "2026-04-03T15:49:05.261272",
  },
  {
    name: "Awesome-Aerial-VLN",
    description: "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    stars: "46",
    language: "Python",
    link: "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    tags: ["UAV", "VLN", "Navigation", "Survey"],
    stars_source: "stale_cache" as const,
    stars_last_checked_at: "2026-04-03T15:49:06.912905",
  },
];

// 新闻列表
export const news: News[] = [
  {
    title: "SoftAct：力感知跨形体技能迁移框架",
    link: "https://soft-act.github.io/",
    summary: "2026.04.01 | 来源：arXiv:2604.01224 💡 核心问题：如何将人类演示的力控制技能迁移到软体机器人手？ 💡 解决方案：",
    source: "GitHub",
    date: "2026-04-01",
    published_at: "2026-04-01",
    verified: false,
    why_it_matters: null,
    research_axis: "robotics",
    freshness: "fresh",
    archived: false,
  },
  {
    title: "多智能体异构机器人协同规划（MAPPO）",
    link: "https://arxiv.org/abs/2604.01213",
    summary: "2026.04.01 | 来源：arXiv:2604.01213 💡 核心问题：外太空探测中，多台具有不同能力的机器人如何高效协同？ 💡 解决方案：",
    source: "arXiv",
    date: "2026-04-01",
    published_at: "2026-04-01",
    verified: true,
    why_it_matters: null,
    research_axis: "robotics",
    freshness: "fresh",
    archived: false,
  },
  {
    title: "Florence-2 ROS 2 封装：视觉-语言模型进入机器人主流软件栈",
    link: "https://github.com/JEDominguezVidal/florence2_ros2_wrapper",
    summary: "2026.04.01 | 来源：arXiv:2604.01179 💡 核心创新： - Florence-2 统一了 captioning、OCR、开放词汇检测、定位等多视觉任务",
    source: "GitHub",
    date: "2026-04-01",
    published_at: "2026-04-01",
    verified: false,
    why_it_matters: null,
    research_axis: "robotics",
    freshness: "fresh",
    archived: false,
  },
  {
    title: "TypeFly：LLM 驱动的低延迟无人机规划",
    link: "https://ieeexplore.ieee.org/document/10970379/",
    summary: "2024（论文）| 来源：IEEE Xplore 💡 核心创新：用 MiniSpec 语言 + 运行时压缩 LLM 生成延迟 💡 意义：解决了 LLM token 顺序生成的根本性延迟问题",
    source: "IEEE",
    date: "2024",
    published_at: "2024",
    verified: false,
    why_it_matters: null,
    research_axis: "drone",
    freshness: "unknown",
    archived: false,
  },
  {
    title: "ChatFly：自然语言控制 PX4/Gazebo 无人机",
    link: "https://github.com/Hub-Tian/UAVs_Meet_LLMs",
    summary: "*：将 OpenAI ChatGPT 集成到 PX4/Gazebo 仿真栈",
    source: "GitHub",
    date: "2026-04-01",
    published_at: "2026-04-01",
    verified: false,
    why_it_matters: null,
    research_axis: "drone",
    freshness: "unknown",
    archived: false,
  },
  {
    title: "commaai/openpilot ⭐ 60,508",
    link: "https://github.com/commaai/openpilot",
    summary: "Python | 自动驾驶操作系统 💡 支撑 300+ 车型的辅助驾驶升级  https://github.com/commaai/openpilot",
    source: "GitHub",
    date: "2026-04-01",
    published_at: "2026-04-01",
    verified: false,
    why_it_matters: null,
    research_axis: "llm",
    freshness: "unknown",
    archived: false,
  },
  {
    title: "NVIDIA 发布 Cosmos Reason 2 + GR00T N1.6",
    link: "https://github.com/nvidia-cosmos",
    summary: "*：NVIDIA 发布新一代 Physical AI 开源模型：\n-",
    source: "NVIDIA",
    date: "2026-03-16",
    published_at: "2026-03-16",
    verified: false,
    why_it_matters: null,
    research_axis: "robotics",
    freshness: "aging",
    archived: false,
  },
];

// 研究趋势
export const trends: Trend[] = [
  {
    icon: "🤖",
    title: "VLA视觉优化成新热点",
    description: "FocusVLA等说明视觉信息利用是关键瓶颈",
  },
  {
    icon: "👁️",
    title: "长时域任务进展感知",
    description: "ProgressVLA等进展估计器成为标配",
  },
  {
    icon: "🤖",
    title: "多模态VLA扩展",
    description: "热成像/触觉等信息集成成为新方向",
  },
  {
    icon: "📡",
    title: "对抗鲁棒性",
    description: "GPS/传感器欺骗下的安全保证日益重要",
  },
];

// 元数据
export const lastUpdated = "2026-04-04T08:46:59.819473";
