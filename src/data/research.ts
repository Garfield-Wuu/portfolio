// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-03T14:00:21.721129
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
    "stars_last_checked_at": "2026-04-03T14:00:22.512334",
    "stars_source": "api"
  },
  {
    "name": "Prometheus (amov-lab)",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars，活跃开源社区。",
    "stars": "3.1k",
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus",
    "tags": [
      "PX4",
      "UAV",
      "ROS",
      "Autonomous Flight",
      "Tracking",
      "Swarm"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-03T14:00:23.016176",
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
    "stars_last_checked_at": "2026-04-03T14:00:23.526197",
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
    "stars_last_checked_at": "2026-04-03T14:00:24.038659",
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
    "stars_last_checked_at": "2026-04-03T14:00:24.532621",
    "stars_source": "api"
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "0",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-03T14:00:24.734753",
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
    "stars_last_checked_at": "2026-04-03T14:00:24.930738",
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
    "stars_last_checked_at": "2026-04-03T14:00:25.120166",
    "stars_source": "api"
  }
];

// 新闻摘要
export const recentNews: News[] = [
  {
    "title": "SMASH",
    "source": "arXiv:2604.01158",
    "date": "2026-04-01",
    "summary": "arXiv 发布：人形全身技能, egocentric视觉方向最新研究。",
    "link": "https://arxiv.org/abs/2604.01158",
    "published_at": "2026-04-01",
    "freshness": "fresh",
    "verified": true
  },
  {
    "title": "EgoSim",
    "source": "arXiv:2604.01001",
    "date": "2026-04-01",
    "summary": "arXiv 发布：第一人称世界仿真器, 3D场景一致性方向最新研究。",
    "link": "https://arxiv.org/abs/2604.01001",
    "published_at": "2026-04-01",
    "freshness": "fresh",
    "verified": true
  },
  {
    "title": "DVGT-2",
    "source": "arXiv:2604.00813",
    "date": "2026-04-01",
    "summary": "arXiv 发布：VGA范式替代VLA, 稠密3D几何方向最新研究。",
    "link": "https://arxiv.org/abs/2604.00813",
    "published_at": "2026-04-01",
    "freshness": "fresh",
    "verified": true
  },
  {
    "title": "BAT",
    "source": "arXiv:2604.01064",
    "date": "2026-04-01",
    "summary": "arXiv 发布：在线策略切换, 敏捷-稳定平衡方向最新研究。",
    "link": "https://arxiv.org/abs/2604.01064",
    "published_at": "2026-04-01",
    "freshness": "fresh",
    "verified": true
  },
  {
    "title": "PanoAir",
    "source": "arXiv:2604.00852",
    "date": "2026-04-01",
    "summary": "arXiv 发布：全景VI-SLAM, 嵌入式平台方向最新研究。",
    "link": "https://arxiv.org/abs/2604.00852",
    "published_at": "2026-04-01",
    "freshness": "fresh",
    "verified": true
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
export const lastUpdated = "2026-04-03T14:00:21.721129";
