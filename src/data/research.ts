// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-03T12:34:44.213879
// ============================================

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
}

export interface GitHubProject {
  name: string;
  description: string;
  stars: string;
  language: string;
  link: string;
  tags: string[];
}

export interface Trend {
  title: string;
  description: string;
  icon: string;
}

export interface News {
  title: string;
  source: string;
  date: string;
  summary: string;
  link: string;
  published_at?: string;
  freshness?: string;
}

// 最新论文
export const recentPapers: Paper[] = [
  {
    "title": "SMASH",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01158",
    "date": "2026-04-01",
    "summary": "人形全身技能, egocentric视觉。来源：UAV-LLM Scout 持续调研。",
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
    "summary": "第一人称世界仿真器, 3D场景一致性。来源：UAV-LLM Scout 持续调研。",
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
    "summary": "VGA范式替代VLA, 稠密3D几何。来源：UAV-LLM Scout 持续调研。",
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
    "summary": "在线策略切换, 敏捷-稳定平衡。来源：UAV-LLM Scout 持续调研。",
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
    "summary": "全景VI-SLAM, 嵌入式平台。来源：UAV-LLM Scout 持续调研。",
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
    "summary": "VLM ROS2中间件封装。来源：UAV-LLM Scout 持续调研。",
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
    "summary": "轻量级全景分割, 边缘部署。来源：UAV-LLM Scout 持续调研。",
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
    "summary": "Action Flow Matching, 2.4x加速。来源：UAV-LLM Scout 持续调研。",
    "link": "https://arxiv.org/abs/2603.28565",
    "pdf_url": "https://arxiv.org/pdf/2603.28565",
    "tags": [
      "Action Flow Matching, 2.4x加速"
    ],
    "importance": "high"
  }
];

// GitHub 热门项目
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
    "stars_last_checked_at": "2026-04-03T12:34:44.506603",
    "stars_source": "api"
  },
  {
    "name": "Prometheus_PX4",
    "description": "PX4无人机自主飞行解决方案，包含目标追踪、集群控制、SLAM等应用模块。活跃开源社区。",
    "stars": "11",
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus_PX4",
    "tags": [
      "PX4",
      "UAV",
      "ROS",
      "Autonomous Flight",
      "Tracking"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-03T12:34:44.800341",
    "stars_source": "api"
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
    "stars_last_checked_at": "2026-04-03T12:34:45.057919",
    "stars_source": "api"
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
    "stars_last_checked_at": "2026-04-03T12:34:45.345986",
    "stars_source": "api"
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
    "stars_last_checked_at": "2026-04-03T12:34:45.862218",
    "stars_source": "api"
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
    "stars_last_checked_at": "2026-04-03T12:34:46.119104",
    "stars_source": "api"
  },
  {
    "name": "Awesome-LLM-Robotics",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": "0",
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": [
      "LLM",
      "Robot",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-03T12:34:46.394261",
    "stars_source": "api"
  },
  {
    "name": "Awesome-Aerial-VLN",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": "0",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": [
      "UAV",
      "VLN",
      "Navigation",
      "Survey"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-03T12:34:46.615670",
    "stars_source": "api"
  }
];

// 新闻摘要
export const recentNews: News[] = [
  {
    "title": "Amazon 收购 Rivr 爬楼配送机器人",
    "source": "TechCrunch",
    "date": "2026-03-19",
    "summary": "亚马逊收购能爬楼梯的配送机器人Rivr，凸显电商对无人化送货上门服务的高度重视，加速末端配送无人化进程。",
    "link": "https://techcrunch.com/2026/03/19/amazon-acquires-rivr-maker-of-a-stair-climbing-delivery-robot/",
    "published_at": "2026-03-19",
    "freshness": "fresh",
    "verified": true
  },
  {
    "title": "OpenAI 正在开发桌面端超级应用",
    "source": "The Verge",
    "date": "2026-03-19",
    "summary": "OpenAI正在开发整合ChatGPT、Codex和Atlas浏览器的桌面超级应用，AI应用从分散工具向平台化整合转型。",
    "link": "https://www.theverge.com/ai-artificial-intelligence/897778/openai-chatgpt-codex-atlas-browser-superapp",
    "published_at": "2026-03-19",
    "freshness": "fresh",
    "verified": true
  },
  {
    "title": "Valve 发布 SteamOS 3.8 游戏系统更新",
    "source": "The Verge",
    "date": "2026-03-19",
    "summary": "Valve发布SteamOS 3.8.0预览版，首次支持Steam Machine客厅游戏PC，扩展对第三方掌机支持，构建跨设备游戏生态。",
    "link": "https://www.theverge.com/games/897765/valve-steamos-3-8-update-steam-deck-hibernation-steam-machine-xbox-ally",
    "published_at": "2026-03-19",
    "freshness": "fresh",
    "verified": true
  },
  {
    "title": "NVIDIA GR00T N1.6 + Cosmos Reason 2 发布",
    "source": "NVIDIA Newsroom",
    "date": "2026-04-01",
    "summary": "NVIDIA发布开源物理AI模型GR00T N1.6和Cosmos Reason世界模型，全球合作伙伴推出下一代机器人，机器人的ChatGPT时刻已至。",
    "link": "https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots",
    "published_at": "2026-04-01",
    "freshness": "fresh",
    "verified": true
  },
  {
    "title": "Jeff Bezos 收购传统工业公司用AI改造",
    "source": "TechCrunch",
    "date": "2026-03-19",
    "summary": "Jeff Bezos启动新项目，收购传统工业公司并用AI技术进行数字化改造，标志科技巨头从消费互联网向工业实体经济渗透。",
    "link": "https://techcrunch.com/2026/03/19/jeff-bezos-reportedly-wants-100-billion-to-buy-and-transform-old-manufacturing-firms-with-ai/",
    "published_at": "2026-03-19",
    "freshness": "fresh",
    "verified": true
  }
];

// 研究趋势
export const trends: Trend[] = [
  {
    "icon": "🤖",
    "title": "LLM + VLA 双层架构",
    "description": "LLM做意图理解，VLA做动作执行，分工明确。DIAL架构成为主流范式。"
  },
  {
    "icon": "📡",
    "title": "NL → STL → 控制",
    "description": "自然语言先转为时序逻辑(STL)，再生成安全轨迹。CoT+GRPO确保翻译正确性。"
  },
  {
    "icon": "🖥️",
    "title": "边缘部署优先",
    "description": "实时VLA、TensorRT-LLM等都在优化边缘推理速度，适合机载计算。"
  },
  {
    "icon": "🎯",
    "title": "仿真平台统一",
    "description": "CARLA-Air统一AirSim和CARLA，减少仿真-真机迁移gap。"
  }
];
