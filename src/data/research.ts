// Auto-generated at 2026-05-19T08:47:36.277929
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
    "title": "DIAL: Decomposing Vision-Language Models into Intent Understanding and Action Decoding",
    "authors": "Stanford / Berkeley",
    "date": "2026-03-31",
    "venue": "arXiv:2603.29844",
    "url": "https://arxiv.org/abs/2603.29844",
    "pdf": "https://arxiv.org/pdf/2603.29844",
    "tags": ["VLA", "LLM", "Robot", "Embodied AI", "Intent"],
    "summary": "VLA架构创新：VLM不应只做编码器，应利用高层意图理解。分为Intent Bottleneck（潜世界模型编码意图）和Action Decoding（潜逆动力学解码动作），实现LLM→VLA→PX4架构解耦。",
    "importance": "high",
  },
  {
    "title": "LLM-Enabled UAV NL Navigation: Natural Language to Signal Temporal Logic for Autonomous Flight",
    "authors": "港科大",
    "date": "2026-03-30",
    "venue": "arXiv:2603.27583",
    "url": "https://arxiv.org/abs/2603.27583",
    "pdf": "https://arxiv.org/pdf/2603.27583",
    "tags": ["LLM", "UAV", "STL", "NLP", "Motion Planning"],
    "summary": "自然语言→信号时序逻辑(STL)→MILP轨迹优化。CoT推理+GRPO优化确保翻译正确性，STL修复机制处理不可行约束。已有实机飞行验证。",
    "importance": "high",
  },
  {
    "title": "CARLA-Air: Unified Aerial-Ground Simulation Infrastructure",
    "authors": "ETH Zurich",
    "date": "2026-03-30",
    "venue": "arXiv:2603.28032",
    "url": "https://arxiv.org/abs/2603.28032",
    "pdf": "https://arxiv.org/pdf/2603.28032",
    "tags": ["Simulation", "UAV", "ROS", "CARLA", "Sensor Fusion"],
    "summary": "AirSim + CARLA统一到单一Unreal Engine进程，零修改复用AirSim API+ROS 2。18种传感器模态同步采集。完整仿真验证环境，适合毕设仿真验证。",
    "importance": "high",
  },
  {
    "title": "AeroGen: Agentic Drone Autonomy through Single-Shot Structured Prompting",
    "authors": "MIT / UC Berkeley",
    "date": "2026-03-25",
    "venue": "arXiv:2603.25000",
    "url": "https://arxiv.org/abs/2603.25000",
    "pdf": "https://arxiv.org/pdf/2603.25000",
    "tags": ["LLM", "UAV", "PX4", "Agent", "Edge AI"],
    "summary": "PX4 + LLM agent单步结构化提示，一次prompt完成多任务规划。轻量级方案，适合边缘部署。支持语音控制和云端API。",
    "importance": "high",
  },
  {
    "title": "Realtime-VLA V2: Learning to Run VLAs Fast, Smooth and Accurate",
    "authors": "上海AI Lab",
    "date": "2026-03-20",
    "venue": "arXiv:2603.20000",
    "url": "https://arxiv.org/abs/2603.20000",
    "pdf": "https://arxiv.org/pdf/2603.20000",
    "tags": ["VLA", "Real-time", "Edge AI", "Quantization"],
    "summary": "实时VLA，在边缘设备(Jetson)上快速流畅运行VLAs。EAGLE-3投机解码+NVFP4量化优化，兼顾精度和速度。适合无人机实时性需求。",
    "importance": "medium",
  },
  {
    "title": "FocusVLA: Visual Attention Optimization for Efficient Vision-Language-Action Models",
    "authors": "字节跳动",
    "date": "2026-03-28",
    "venue": "arXiv:2603.28740",
    "url": "https://arxiv.org/abs/2603.28740",
    "pdf": "https://arxiv.org/pdf/2603.28740",
    "tags": ["VLA", "Attention", "Edge AI", "Efficiency"],
    "summary": "VLA瓶颈在于如何利用视觉而非视觉质量本身。提出Modality Cascaded Attention消除快捷路径。边缘部署计算优化参考。",
    "importance": "medium",
  },
];

export const githubRepos: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "PX4",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": 11800,
    "url": "https://github.com/PX4/PX4-Autopilot",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-05-18T08:55:51.223696",
    "stars_source": "stale_cache",
  },
  {
    "name": "Prometheus (amov-lab)",
    "owner": "amov-lab",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    "stars": 3100,
    "url": "https://github.com/amov-lab/Prometheus",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-05-18T08:55:51.972044",
    "stars_source": "stale_cache",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 22,
    "url": "https://github.com/EmergenceAI/embodied-drone-agents",
    "language": "Python",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-05-18T08:55:52.678318",
    "stars_source": "stale_cache",
  },
  {
    "name": "llm-uav (Atmaca)",
    "owner": "furkanisikay",
    "description": "集成Gemma 3 4B与无人机控制，支持自然语言指令，边缘部署。",
    "stars": 0,
    "url": "https://github.com/furkanisikay/llm-uav",
    "language": "Python",
    "tags": ["LLM", "UAV", "Edge AI", "NLP"],
    "verified": true,
    "stars_last_checked_at": "2026-05-18T08:55:53.426590",
    "stars_source": "stale_cache",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": 16,
    "url": "https://github.com/ion-g-ion/MAVLinkMCP",
    "language": "Python",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-05-18T08:55:54.116386",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 699,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-18T08:55:54.831800",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": 4400,
    "url": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "language": "Python",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-18T08:55:55.562531",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 54,
    "url": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "language": "Python",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-05-18T08:55:56.278597",
    "stars_source": "stale_cache",
  },
];

export const news: News[] = [
  {
    "title": "高度相关！",
    "source": "GitHub",
    "url": "https://github.com/drone-os/drone-core",
    "date": "2026-05-13",
    "summary": "🌤️ ━━━━━━━━━━━━━━━━━━━━━━━━━ 早上好！新的一天开始啦～ 珠海 ⛈️ 暴雨黄色+雷雨大风黄色预警生效 | 25-26°C | 强降雨持续",
    "published_at": "2026-05-13",
    "verified": false,
    "why_it_matters": "造车新势力转型具身智能，商业化路径清晰",
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  },
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
    "icon": "🤖",
    "title": "LLM + VLA 双层架构",
    "description": "LLM做意图理解，VLA做动作执行，分工明确。DIAL架构成为主流范式。",
  },
  {
    "icon": "📡",
    "title": "NL → STL → 控制",
    "description": "自然语言先转为时序逻辑(STL)，再生成安全轨迹。CoT+GRPO确保翻译正确性。",
  },
  {
    "icon": "🖥️",
    "title": "边缘部署优先",
    "description": "实时VLA、TensorRT-LLM等都在优化边缘推理速度，适合机载计算。",
  },
  {
    "icon": "🎯",
    "title": "仿真平台统一",
    "description": "CARLA-Air统一AirSim和CARLA，减少仿真-真机迁移gap。",
  },
];

export const stats = {
  papersCount: 6,
  githubCount: 8,
  newsCount: 4,
  exportTime: "2026-05-19T08:46:01.429574",
};
