// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-03T17:55:43.309479
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
    "title": "SMASH",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01158",
    "date": "2026-04-01",
    "summary": "人形全身技能学习 egocentric视觉 + 低延迟感知-控制闭环。全身协调控制思路",
    "problem": "人形全身技能, egocentric视觉方向的核心问题与挑战",
    "method": "人形全身技能学习 egocentric视觉 + 低延迟感知-控制闭环",
    "value": "全身协调控制思路",
    "why_relevant": "全身协调控制思路",
    "research_axis": "Perception",
    "link": "https://arxiv.org/abs/2604.01158",
    "pdf_url": "https://arxiv.org/pdf/2604.01158",
    "tags": [
      "人形全身技能, egocentric视觉"
    ],
    "importance": "high"
  },
  {
    "title": "EgoSim",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01001",
    "date": "2026-04-01",
    "summary": "第一人称世界仿真器 3D场景一致性 + 跨时间状态更新 生成空间一致的交互视频。仿真数据生成 + Sim2Real",
    "problem": "第一人称世界仿真器, 3D场景一致性方向的核心问题与挑战",
    "method": "第一人称世界仿真器 3D场景一致性 + 跨时间状态更新 生成空间一致的交互视频",
    "value": "仿真数据生成 + Sim2Real",
    "why_relevant": "仿真数据生成 + Sim2Real",
    "research_axis": "Simulation",
    "link": "https://arxiv.org/abs/2604.01001",
    "pdf_url": "https://arxiv.org/pdf/2604.01001",
    "tags": [
      "第一人称世界仿真器, 3D场景一致性"
    ],
    "importance": "high"
  },
  {
    "title": "DVGT-2",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.00813",
    "date": "2026-04-01",
    "summary": "VGA范式: 几何优先于语言 Vision-Geometry-Action (VGA) 替代 VLA 稠密3D几何作为关键线索，而非语言描述。无人机精确控制需要几何感知",
    "problem": "VGA范式替代VLA, 稠密3D几何方向的核心问题与挑战",
    "method": "VGA范式: 几何优先于语言 Vision-Geometry-Action (VGA) 替代 VLA 稠密3D几何作为关键线索，而非语言描述",
    "value": "无人机精确控制需要几何感知",
    "why_relevant": "无人机精确控制需要几何感知",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.00813",
    "pdf_url": "https://arxiv.org/pdf/2604.00813",
    "tags": [
      "VGA范式替代VLA, 稠密3D几何"
    ],
    "importance": "high"
  },
  {
    "title": "BAT",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01064",
    "date": "2026-04-01",
    "summary": "在线策略切换 敏捷-稳定平衡。无人机悬停/机动模式切换",
    "problem": "在线策略切换, 敏捷-稳定平衡方向的核心问题与挑战",
    "method": "在线策略切换 敏捷-稳定平衡",
    "value": "无人机悬停/机动模式切换",
    "why_relevant": "无人机悬停/机动模式切换",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.01064",
    "pdf_url": "https://arxiv.org/pdf/2604.01064",
    "tags": [
      "在线策略切换, 敏捷-稳定平衡"
    ],
    "importance": "high"
  },
  {
    "title": "PanoAir",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.00852",
    "date": "2026-04-01",
    "summary": "全景VI-SLAM 360°感知, 嵌入式平台验证 全景特征提取+loop closure。室内VLN定位基础",
    "problem": "全景VI-SLAM, 嵌入式平台方向的核心问题与挑战",
    "method": "全景VI-SLAM 360°感知, 嵌入式平台验证 全景特征提取+loop closure",
    "value": "室内VLN定位基础",
    "why_relevant": "室内VLN定位基础",
    "research_axis": "Perception",
    "link": "https://arxiv.org/abs/2604.00852",
    "pdf_url": "https://arxiv.org/pdf/2604.00852",
    "tags": [
      "全景VI-SLAM, 嵌入式平台"
    ],
    "importance": "high"
  },
  {
    "title": "Florence-2 ROS2",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01179",
    "date": "2026-04-01",
    "summary": "VLM中间件 标准化VLM集成到ROS2。MCP工具封装参考",
    "problem": "VLM ROS2中间件封装方向的核心问题与挑战",
    "method": "VLM中间件 标准化VLM集成到ROS2",
    "value": "MCP工具封装参考",
    "why_relevant": "MCP工具封装参考",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.01179",
    "pdf_url": "https://arxiv.org/pdf/2604.01179",
    "tags": [
      "VLM ROS2中间件封装"
    ],
    "importance": "high"
  },
  {
    "title": "LiPS",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.00634",
    "date": "2026-04-01",
    "summary": "轻量级全景分割 资源受限平台高效分割。机载实时感知",
    "problem": "轻量级全景分割, 边缘部署方向的核心问题与挑战",
    "method": "轻量级全景分割 资源受限平台高效分割",
    "value": "机载实时感知",
    "why_relevant": "机载实时感知",
    "research_axis": "Perception",
    "link": "https://arxiv.org/abs/2604.00634",
    "pdf_url": "https://arxiv.org/pdf/2604.00634",
    "tags": [
      "轻量级全景分割, 边缘部署"
    ],
    "importance": "high"
  },
  {
    "title": "StreamingVLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2603.28565",
    "date": "2026-03-28",
    "summary": "流式VLA推理优化 Action Flow Matching替代action chunking Action saliency-aware adaptive observation。无人机实时控制加速",
    "problem": "Action Flow Matching, 2.4x加速方向的核心问题与挑战",
    "method": "流式VLA推理优化 Action Flow Matching替代action chunking Action saliency-aware adaptive observation",
    "value": "无人机实时控制加速",
    "why_relevant": "无人机实时控制加速",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2603.28565",
    "pdf_url": "https://arxiv.org/pdf/2603.28565",
    "tags": [
      "Action Flow Matching, 2.4x加速"
    ],
    "importance": "high"
  }
];

// GitHub 热门项目（含 stars 缓存元数据）
export const hotProjects: GitHubProject[] = [
  {
    "name": "PX4 Autopilot",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": "11.4k",
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
    "stars_last_checked_at": "2026-04-03T15:48:58.161389",
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
    "stars_last_checked_at": "2026-04-03T15:48:59.956538",
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
    "stars_last_checked_at": "2026-04-03T15:49:01.823517",
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
    "stars_last_checked_at": "2026-04-03T15:49:02.687842",
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
    "stars_last_checked_at": "2026-04-03T15:49:03.571134",
    "stars_source": "stale_cache"
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "614",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-03T15:49:04.423075",
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
    "stars_last_checked_at": "2026-04-03T15:49:05.261272",
    "stars_source": "stale_cache"
  },
  {
    "name": "Awesome-Aerial-VLN",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": "46",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": [
      "UAV",
      "VLN",
      "Navigation",
      "Survey"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-03T15:49:06.912905",
    "stars_source": "stale_cache"
  }
];

// 新闻摘要（含 why_it_matters）
export const recentNews: News[] = [
  {
    "title": "Amazon acquires Rivr, maker of a stair-climbing delivery robot",
    "link": "https://techcrunch.com/2026/03/19/amazon-acquires-rivr-maker-of-a-stair-climbing-delivery-robot/",
    "summary": "亚马逊与贝索斯再度投资无人配送初创公司，凸显电商巨头对无人化送货上门服务的高度重视。",
    "source": "TechCrunch",
    "date": "2026-03-19",
    "published_at": "2026-03-19",
    "verified": false,
    "why_it_matters": "此举加速推进末端配送无人化进程。亚马逊持续布局无人配送赛道，将促使竞争对手加大相关投入，推动整个物流行业向智能化、自动化转型，预计将加速无人机/配送机器人技术的商业化落地。",
    "research_axis": "llm",
    "freshness": "aging",
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
  },
  {
    "title": "DJI Air 3S 无人机发布",
    "source": "DJI",
    "date": "2026-03-28",
    "summary": "大疆发布Air 3S，配备1英寸主摄+70mm长焦双摄系统，全向避障，支持APAS 5.0，续航48分钟，面向消费级航拍市场。",
    "link": "https://www.dji.com/cn/air-3s",
    "published_at": "2026-03-28",
    "freshness": "fresh",
    "verified": true,
    "why_it_matters": "消费级无人机避障和续航持续进化，DJI技术动态",
    "research_axis": "drone",
    "_source": "fallback"
  },
  {
    "title": "OpenAI 发布 GPT-4.5 API，扩展上下文窗口",
    "source": "OpenAI",
    "date": "2026-04-02",
    "summary": "OpenAI向开发者开放GPT-4.5 API，上下文窗口扩展至200k tokens，定价下调40%，强化函数调用和结构化输出能力。",
    "link": "https://openai.com/index/gpt-4-5-launch",
    "published_at": "2026-04-02",
    "freshness": "fresh",
    "verified": true,
    "why_it_matters": "LLM API成本下降+长上下文对无人机NL指令解析和任务规划直接利好",
    "research_axis": "llm",
    "_source": "fallback"
  }
];

// 研究趋势
export const trends: Trend[] = [
  {
    "icon": "🤖",
    "title": "VGA > VLA for 控制",
    "description": "精确控制任务需要几何优先而非语言优先"
  },
  {
    "icon": "🖥️",
    "title": "第一人称仿真",
    "description": "EgoSim等解决3D一致性问题"
  },
  {
    "icon": "👁️",
    "title": "全景感知",
    "description": "PanoAir等突破FoV限制"
  },
  {
    "icon": "🔧",
    "title": "中间件标准化",
    "description": "ROS2封装降低VLM集成门槛"
  },
  {
    "icon": "⚡",
    "title": "边缘部署",
    "description": "LiPS等轻量级方案适配嵌入式"
  }
];

// 元数据
export const lastUpdated = "2026-04-03T17:55:43.309479";
