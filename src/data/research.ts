// Auto-generated at 2026-05-14T08:47:52.681177
// DO NOT EDIT MANUALLY

export interface Paper {
  title: string;
  authors: string;
  date: string;
  venue?: string;
  url: string;
  pdf?: string;
  tags: string[];
  summary: string;
  problem?: string;
  method?: string;
  value?: string;
  why_relevant?: string;
  research_axis?: string;
  importance?: string;
}

export interface GitHub {
  name: string;
  owner: string;
  description: string;
  stars: number;
  url: string;
  category?: string;
  language?: string;
  tags?: string[];
  verified?: boolean;
  stars_last_checked_at?: string;
  stars_source?: string;
}

export interface News {
  title: string;
  source: string;
  url: string;
  date: string;
  summary: string;
  published_at?: string;
  verified?: boolean;
  why_it_matters?: string | null;
  research_axis?: string;
  freshness?: string;
  archived?: boolean;
}

export interface Trend {
  icon: string;
  title: string;
  description: string;
}

export const papers: Paper[] = [
  {
    "title": "UAV-VLN: 端到端无人机视觉语言导航",
    "authors": "",
    "date": "",
    "url": "https://arxiv.org/abs/2504.21432",
    "tags": [],
    "summary": "",
    "importance": "medium",
  },
  {
    "title": "NeLV/NELV: LLM驱动的多尺度无人机操作框架",
    "authors": "",
    "date": "",
    "url": "https://arxiv.org/abs/2510.21739",
    "tags": [],
    "summary": "",
    "importance": "medium",
  },
  {
    "title": "HY-Embodied-0.5: 腾讯具身智能基础模型",
    "authors": "",
    "date": "",
    "url": "https://arxiv.org/abs/2604.07430",
    "tags": [],
    "summary": "",
    "importance": "medium",
  },
  {
    "title": "IntentionVLA: Generalizable and Efficient Embodied Intention Reasoning for HRI",
    "authors": "",
    "date": "",
    "url": "https://arxiv.org/abs/2510.07778",
    "tags": [],
    "summary": "",
    "importance": "medium",
  },
];

export const githubRepos: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": 117000,
    "url": "https://github.com/PX4/PX4-Autopilot",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-05-13T08:50:41.642978",
    "stars_source": "stale_cache",
  },
  {
    "name": "Prometheus (amov-lab)",
    "owner": "",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    "stars": 31000,
    "url": "https://github.com/amov-lab/Prometheus",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-05-13T08:50:42.374278",
    "stars_source": "stale_cache",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 20,
    "url": "https://github.com/EmergenceAI/embodied-drone-agents",
    "language": "Python",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-05-13T08:50:43.105913",
    "stars_source": "stale_cache",
  },
  {
    "name": "llm-uav (Atmaca)",
    "owner": "",
    "description": "集成Gemma 3 4B与无人机控制，支持自然语言指令，边缘部署。",
    "stars": 0,
    "url": "https://github.com/furkanisikay/llm-uav",
    "language": "Python",
    "tags": ["LLM", "UAV", "Edge AI", "NLP"],
    "verified": true,
    "stars_last_checked_at": "2026-05-13T08:50:43.837466",
    "stars_source": "stale_cache",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": 16,
    "url": "https://github.com/ion-g-ion/MAVLinkMCP",
    "language": "Python",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-05-13T08:50:44.540691",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 690,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-13T08:50:45.232473",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": 44000,
    "url": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "language": "Python",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-13T08:50:45.947135",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 53,
    "url": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "language": "Python",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-05-13T08:50:46.647214",
    "stars_source": "stale_cache",
  },
];

export const news: News[] = [
  {
    "title": "1️⃣ VLA 技术路线之争白热化",
    "source": "网络",
    "url": "https://m.zol.com.cn/article/11804476.html",
    "date": "2026-05-13",
    "summary": "*：蚂蚁集团孵化企业灵波科技开源 VLA 模型真机后训练工具链",
    "published_at": "2026-05-13",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "鹿明机器人",
    "source": "网络",
    "url": "https://cloud.tencent.com.cn/developer/article/2639045",
    "date": "2026-05-11",
    "summary": "证明机器人精细操作能力已接近工业级标准\n⭐ 对你的价值：参考其感知-决策-执行闭环架构",
    "published_at": "2026-05-11",
    "verified": false,
    "why_it_matters": "证明机器人精细操作能力已接近工业级标准",
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "arxiv-search",
    "source": "GitHub",
    "url": "https://github.com/bytedance/UI-TARS-desktop",
    "date": "2026-05-07",
    "summary": "为无人机配送规模化铺路，解决空域安全和公众信任问题\n⭐ 对你的价值：Remote ID 是无人机身份认证标准——LLM+无人机系统也需要集成合规能力。",
    "published_at": "2026-05-07",
    "verified": false,
    "why_it_matters": "为无人机配送规模化铺路，解决空域安全和公众信任问题",
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "NVIDIA GR00T N1.6 + Cosmos Reason 2 发布",
    "source": "NVIDIA Newsroom",
    "url": "https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots",
    "date": "2026-04-01",
    "summary": "NVIDIA发布开源物理AI模型GR00T N1.6和Cosmos Reason世界模型，全球合作伙伴推出下一代机器人，机器人的ChatGPT时刻已至。",
    "published_at": "2026-04-01",
    "verified": true,
    "why_it_matters": "开源物理AI+世界模型对机器人仿真和无人机Sim2Real有直接参考价值",
    "research_axis": "robotics",
    "freshness": "fresh",
  },
  {
    "title": "Unitree B2-W 四足机器人发布",
    "source": "Unitree",
    "url": "https://www.unitree.com.cn/",
    "date": "2026-03-25",
    "summary": "宇树科技发布B2-W工业四足机器人，负载30kg，续航4小时，支持复杂地形巡检，配备深度相机和激光雷达。",
    "published_at": "2026-03-25",
    "verified": true,
    "why_it_matters": "四足机器人硬件迭代，负载和续航大幅提升，工业巡检应用加速落地",
    "research_axis": "robotics",
    "freshness": "fresh",
  },
];

export const trends: Trend[] = [
  {
    "icon": "📡",
    "title": "LLM+UAV闭环系统成熟",
    "description": "SRDrone展示了LLM在UAV任务规划中的闭环自优化能力",
  },
  {
    "icon": "📡",
    "title": "动作空间推理兴起",
    "description": "ACoT-VLA开创性地将思维链从语言/视觉空间下沉到动作空间",
  },
  {
    "icon": "📡",
    "title": "物体中心世界模型",
    "description": "Goal-VLA提出与机器人形态无关的世界模型新范式",
  },
  {
    "icon": "📡",
    "title": "导航扩散策略",
    "description": "NavDP证明扩散模型在导航任务中的Sim-to-Real迁移能力",
  },
  {
    "icon": "📡",
    "title": "ICRA/CVPR 2026具身智能全面爆发",
    "description": "本轮5个资源中4个来自2026顶会",
  },
];

export const stats = {
  papersCount: 4,
  githubCount: 8,
  newsCount: 5,
  exportTime: "2026-05-14T08:47:52.681177",
};
