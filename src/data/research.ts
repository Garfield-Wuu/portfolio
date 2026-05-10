// Auto-generated at 2026-05-10T08:47:00.314625
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
    "stars": 11700,
    "url": "https://github.com/PX4/PX4-Autopilot",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-05-10T08:45:57.850467",
    "stars_source": "api",
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
    "stars_last_checked_at": "2026-05-10T08:45:58.572328",
    "stars_source": "api",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 20,
    "url": "https://github.com/EmergenceAI/embodied-drone-agents",
    "language": "Python",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-05-10T08:45:59.279711",
    "stars_source": "api",
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
    "stars_last_checked_at": "2026-05-10T08:45:59.985924",
    "stars_source": "api",
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
    "stars_last_checked_at": "2026-05-10T08:46:00.699074",
    "stars_source": "api",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 682,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-10T08:46:01.393726",
    "stars_source": "api",
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
    "stars_last_checked_at": "2026-05-10T08:46:02.118425",
    "stars_source": "api",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 53,
    "url": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "language": "Python",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-05-10T08:46:02.866796",
    "stars_source": "api",
  },
];

export const news: News[] = [
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
    "title": "高度相关！",
    "source": "GitHub",
    "url": "https://github.com/Hmbown/DeepSeek-TUI",
    "date": "2026-05-04",
    "summary": "AI 从\"帮你想\"进入\"帮你花钱\"，Agentic Commerce 元年\n⭐ 对你的价值：未来无人机服务可接入 Agent 支付体系（如自动订购配件）",
    "published_at": "2026-05-04",
    "verified": false,
    "why_it_matters": "AI 从\"帮你想\"进入\"帮你花钱\"，Agentic Commerce 元年",
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "对你的影响",
    "source": "GitHub",
    "url": "https://github.com/NVlabs/vla-perf",
    "date": "2026-04-24",
    "summary": "从实验室走向真实工业产线的关键一步\n⭐ 对你的价值：多机协同 + LLM 代码生成的结合，可借鉴到无人机编队控制",
    "published_at": "2026-04-24",
    "verified": false,
    "why_it_matters": "从实验室走向真实工业产线的关键一步",
    "research_axis": "robotics",
    "freshness": "aging",
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
    "title": "VLN成为UAV热点",
    "description": "STMR和NaVILA都展示了VLA/VLN在导航中的应用",
  },
  {
    "icon": "📡",
    "title": "世界模型崛起",
    "description": "MWM和Awesome-World-Model显示世界模型成为核心组件",
  },
  {
    "icon": "📡",
    "title": "安全意识增强",
    "description": "Awesome-Embodied-AI-Safety标志安全研究进入系统化阶段",
  },
  {
    "icon": "📡",
    "title": "神经科学启发",
    "description": "Neural Brain代表从生物启发的具身智能新方向",
  },
  {
    "icon": "📡",
    "title": "多媒体融合",
    "description": "Embodied Multimedia将传统多媒体与具身智能连接",
  },
];

export const stats = {
  papersCount: 6,
  githubCount: 8,
  newsCount: 5,
  exportTime: "2026-05-10T08:45:57.110671",
};
