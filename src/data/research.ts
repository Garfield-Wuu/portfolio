// Auto-generated. Do not edit manually.
// Generated at: 2026-04-30 08:46 (Asia/Shanghai)

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  venue: string;
  year: number;
  tags: string[];
  abstract: string;
  link: string;
  pdf: string;
  date: string;
  starred: boolean;
}

export interface GithubProject {
  name: string;
  fullName: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  topics: string[];
}

export interface NewsItem {
  title: string;
  summary: string;
  link: string;
  source: string;
  date: string;
  whyItMatters: string | null;
}

export interface Trend {
  emoji: string;
  text: string;
}

export const papers: Paper[] = [
  {
    "title": "Cooperative Aerial NMPC",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.25766",
    "date": "2026-04-25",
    "summary": "协作空中链（多无人机刚性连接）的灵敏度管NMPC 参数不确定性在线估计和补偿。多机编队鲁棒控制，约束收紧安全边界",
    "problem": "多机刚性连接, ICUAS 2026方向的核心问题与挑战",
    "method": "协作空中链（多无人机刚性连接）的灵敏度管NMPC 参数不确定性在线估计和补偿",
    "value": "多机编队鲁棒控制，约束收紧安全边界",
    "why_relevant": "多机编队鲁棒控制，约束收紧安全边界",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.25766",
    "pdf_url": "https://arxiv.org/pdf/2604.25766",
    "tags": [
      "多机刚性连接, ICUAS 2026"
    ],
    "importance": "high"
  },
  {
    "title": "Semantic Graph Matching",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.25404",
    "date": "2026-04-25",
    "summary": "语义SLAM, 对称环境方向最新研究。",
    "problem": "语义SLAM, 对称环境方向的核心问题与挑战",
    "method": "语义SLAM, 对称环境",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "Perception",
    "link": "https://arxiv.org/abs/2604.25404",
    "pdf_url": "https://arxiv.org/pdf/2604.25404",
    "tags": [
      "语义SLAM, 对称环境"
    ],
    "importance": "high"
  },
  {
    "title": "Photorealistic Simulator",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.25459",
    "date": "2026-04-25",
    "summary": "高吞吐量逼真仿真器 支持视觉信息机器人学习。Sim2Real数据生成，高保真视觉策略训练",
    "problem": "高保真视觉仿真器方向的核心问题与挑战",
    "method": "高吞吐量逼真仿真器 支持视觉信息机器人学习",
    "value": "Sim2Real数据生成，高保真视觉策略训练",
    "why_relevant": "Sim2Real数据生成，高保真视觉策略训练",
    "research_axis": "Perception",
    "link": "https://arxiv.org/abs/2604.25459",
    "pdf_url": "https://arxiv.org/pdf/2604.25459",
    "tags": [
      "高保真视觉仿真器"
    ],
    "importance": "high"
  },
  {
    "title": "KinDER",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.25788",
    "date": "2026-04-25",
    "summary": "物理推理基准 ⭐⭐⭐⭐ 5类核心物理推理挑战：空间关系/多物体操作/工具使用/几何约束/动态约束 现有方法普遍挣扎，物理推理仍是核心瓶颈。VLA物理推理能力评估基准",
    "problem": "物理推理基准, RSS 2026方向的核心问题与挑战",
    "method": "物理推理基准 ⭐⭐⭐⭐ 5类核心物理推理挑战：空间关系/多物体操作/工具使用/几何约束/动态约束 现有方法普遍挣扎，物理推理仍是核心瓶颈",
    "value": "VLA物理推理能力评估基准",
    "why_relevant": "VLA物理推理能力评估基准",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.25788",
    "pdf_url": "https://arxiv.org/pdf/2604.25788",
    "tags": [
      "物理推理基准, RSS 2026"
    ],
    "importance": "high"
  },
  {
    "title": "SGVF",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.24487",
    "date": "2026-04-24",
    "summary": "Score扩散引导向量场 ⭐⭐⭐⭐ 利用score-based生成模型从数据分布构建向量场 支持分支和伪流形等复杂拓扑。PX4复杂轨迹跟踪，无序多分支路径导航",
    "problem": "Score扩散GVF, 复杂拓扑路径方向的核心问题与挑战",
    "method": "Score扩散引导向量场 ⭐⭐⭐⭐ 利用score-based生成模型从数据分布构建向量场 支持分支和伪流形等复杂拓扑",
    "value": "PX4复杂轨迹跟踪，无序多分支路径导航",
    "why_relevant": "PX4复杂轨迹跟踪，无序多分支路径导航",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.24487",
    "pdf_url": "https://arxiv.org/pdf/2604.24487",
    "tags": [
      "Score扩散GVF, 复杂拓扑路径"
    ],
    "importance": "high"
  },
  {
    "title": "Passage-Aware VSLAM",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.24707",
    "date": "2026-04-24",
    "summary": "门口检测VSLAM ⭐⭐⭐ 通道级抽象改善房间连接性建模 BIM-informed VSLAM基础。室内VLN语义理解，门口检测辅助路径规划",
    "problem": "门口检测室内导航方向的核心问题与挑战",
    "method": "门口检测VSLAM ⭐⭐⭐ 通道级抽象改善房间连接性建模 BIM-informed VSLAM基础",
    "value": "室内VLN语义理解，门口检测辅助路径规划",
    "why_relevant": "室内VLN语义理解，门口检测辅助路径规划",
    "research_axis": "Perception",
    "link": "https://arxiv.org/abs/2604.24707",
    "pdf_url": "https://arxiv.org/pdf/2604.24707",
    "tags": [
      "门口检测室内导航"
    ],
    "importance": "high"
  },
  {
    "title": "TEACAR",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.24934",
    "date": "2026-04-24",
    "summary": "开源自动驾驶平台 ⭐⭐⭐ 模块化四层甲板结构：传感/计算/执行/电源 ROS 2基础，HIL测试平台。低成本测试平台参考，硬件在环架构",
    "problem": "开源自动驾驶平台方向的核心问题与挑战",
    "method": "开源自动驾驶平台 ⭐⭐⭐ 模块化四层甲板结构：传感/计算/执行/电源 ROS 2基础，HIL测试平台",
    "value": "低成本测试平台参考，硬件在环架构",
    "why_relevant": "低成本测试平台参考，硬件在环架构",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.24934",
    "pdf_url": "https://arxiv.org/pdf/2604.24934",
    "tags": [
      "开源自动驾驶平台"
    ],
    "importance": "high"
  },
  {
    "title": "Scalable Real-Time Motion",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.24833",
    "date": "2026-04-24",
    "summary": "模块化潜在生成模型 + 智能原语 实时可扩展运动技能库。实时运动控制工程参考",
    "problem": "模块化运动生成方向的核心问题与挑战",
    "method": "模块化潜在生成模型 + 智能原语 实时可扩展运动技能库",
    "value": "实时运动控制工程参考",
    "why_relevant": "实时运动控制工程参考",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.24833",
    "pdf_url": "https://arxiv.org/pdf/2604.24833",
    "tags": [
      "模块化运动生成"
    ],
    "importance": "high"
  }
];

export const githubProjects: GithubProject[] = [
  {
    "name": "PX4 Autopilot",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": "11.6k",
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
    "stars_last_checked_at": "2026-04-29T08:45:08.389529",
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
    "stars_last_checked_at": "2026-04-29T08:45:09.344635",
    "stars_source": "stale_cache"
  },
  {
    "name": "embodied-drone-agents",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": "20",
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
    "stars_last_checked_at": "2026-04-29T08:45:10.313227",
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
    "stars_last_checked_at": "2026-04-29T08:45:11.214780",
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
    "stars_last_checked_at": "2026-04-29T08:45:12.120257",
    "stars_source": "stale_cache"
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "651",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-29T08:45:14.926496",
    "stars_source": "stale_cache"
  },
  {
    "name": "Awesome-LLM-Robotics",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": "4.4k",
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": [
      "LLM",
      "Robot",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-29T08:45:15.862869",
    "stars_source": "stale_cache"
  },
  {
    "name": "Awesome-Aerial-VLN",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": "52",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": [
      "UAV",
      "VLN",
      "Navigation",
      "Survey"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-29T08:45:16.793103",
    "stars_source": "stale_cache"
  }
];

export const news: NewsItem[] = [
  {
    "title": "LeRobot (Hugging Face) ⭐ 新上榜！",
    "link": "https://github.com/huggingface/lerobot",
    "summary": "*：开源机器人学习平台，支持多机器人协同",
    "source": "GitHub",
    "date": "_2026-04-3",
    "published_at": "_2026-04-3",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "Ultralytics YOLO 系列 ⭐ 持续热门",
    "link": "https://github.com/ultralytics/ultralytics",
    "summary": "*：实时目标检测，YOLO 家族最新版本",
    "source": "GitHub",
    "date": "_2026-04-3",
    "published_at": "_2026-04-3",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "reBot-DevArm：开源机器人臂 ⭐ 新上榜！",
    "link": "https://github.com/Seeed-Projects/reBot-DevArm",
    "summary": "*：降低具身 AI 学习门槛的开源机器人臂项目",
    "source": "GitHub",
    "date": "_2026-04-3",
    "published_at": "_2026-04-3",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "The World Labs Marble 1.1-Plus ⭐ 新上榜！",
    "link": "https://x.com/theworldlabs/status/2041554646561677701",
    "summary": "AI 图像生成 💡 核心：3D 环境生成模型 💡 亮点：可生成复杂大规模 3D 场景",
    "source": "网络",
    "date": "_2026-04-3",
    "published_at": "_2026-04-3",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "6轴非平面 3D 打印系统 ⭐ 有趣项目",
    "link": "https://x.com/IlirAliu_/status/2041215131430920436",
    "summary": "*：替代传统层叠方式，使用 6 轴运动系统",
    "source": "网络",
    "date": "_2026-04-3",
    "published_at": "_2026-04-3",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "AI + 机器人 + 嵌入式 领域三大趋势（2026.04.21-28）：",
    "link": "https://console.minimax.chat",
    "summary": "--- ``` 早上好 Garfield！",
    "source": "网络",
    "date": "_2026-04-2",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "VLA Foundry：统一的开源 VLA 训练框架",
    "link": "https://github.com/TRI-ML/vla_foundry",
    "summary": "2026.04.21 | 来源：arXiv cs.RO 💡 核心贡献：   • 提出 LLM→VLM→VLA 端到端训练管道",
    "source": "GitHub",
    "date": "2026-04-21",
    "published_at": "2026-04-21",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "aging",
    "archived": false
  }
];

export const trends: Trend[] = [
  {
    "icon": "📡",
    "title": "Physical AI崛起",
    "description": "GEN-1等展示物理世界交互优先于纯模拟"
  },
  {
    "icon": "📡",
    "title": "开源数据爆发",
    "description": "AgiBot World 2026等大规模开源数据集"
  },
  {
    "icon": "🤖",
    "title": "VLA安全成为部署瓶颈",
    "description": "RedVLA SimpleVLA-Guard (ASR 59.5%降低)"
  },
  {
    "icon": "📡",
    "title": "轻量化持续热门",
    "description": "GCImOpt <80K参数嵌入式友好"
  }
];