// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-02T23:38:54.060459
// ⚠️ 此文件由脚本自动生成，请勿手动修改
// ============================================

export interface Paper {
  title: string;
  authors?: string;
  venue: string;
  date: string;
  summary: string;
  link: string;
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
}

// 最新论文
export const recentPapers: Paper[] = [
  {
    "title": "DIAL: Decomposing Vision-Language Models into Intent Understanding and Action Decoding",
    "authors": "Stanford / Berkeley",
    "venue": "arXiv:2603.29844",
    "date": "2026-03-31",
    "summary": "VLA架构创新：VLM不应只做编码器，应利用高层意图理解。分为Intent Bottleneck（潜世界模型编码意图）和Action Decoding（潜逆动力学解码动作），实现LLM→VLA→PX4架构解耦。",
    "link": "https://arxiv.org/abs/2603.29844",
    "tags": [
      "VLA",
      "LLM",
      "Robot",
      "Embodied AI",
      "Intent"
    ],
    "importance": "high"
  },
  {
    "title": "LLM-Enabled UAV NL Navigation: Natural Language to Signal Temporal Logic for Autonomous Flight",
    "authors": "港科大",
    "venue": "arXiv:2603.27583",
    "date": "2026-03-30",
    "summary": "自然语言→信号时序逻辑(STL)→MILP轨迹优化。CoT推理+GRPO优化确保翻译正确性，STL修复机制处理不可行约束。已有实机飞行验证。",
    "link": "https://arxiv.org/abs/2603.27583",
    "tags": [
      "LLM",
      "UAV",
      "STL",
      "NLP",
      "Motion Planning"
    ],
    "importance": "high"
  },
  {
    "title": "CARLA-Air: Unified Aerial-Ground Simulation Infrastructure",
    "authors": "ETH Zurich",
    "venue": "arXiv:2603.28032",
    "date": "2026-03-30",
    "summary": "AirSim + CARLA统一到单一Unreal Engine进程，零修改复用AirSim API+ROS 2。18种传感器模态同步采集。完整仿真验证环境，适合毕设仿真验证。",
    "link": "https://arxiv.org/abs/2603.28032",
    "tags": [
      "Simulation",
      "UAV",
      "ROS",
      "CARLA",
      "Sensor Fusion"
    ],
    "importance": "high"
  },
  {
    "title": "AeroGen: Agentic Drone Autonomy through Single-Shot Structured Prompting",
    "authors": "MIT / UC Berkeley",
    "venue": "arXiv:2603.25000",
    "date": "2026-03-25",
    "summary": "PX4 + LLM agent单步结构化提示，一次prompt完成多任务规划。轻量级方案，适合边缘部署。支持语音控制和云端API。",
    "link": "https://arxiv.org/abs/2603.25000",
    "tags": [
      "LLM",
      "UAV",
      "PX4",
      "Agent",
      "Edge AI"
    ],
    "importance": "high"
  },
  {
    "title": "Realtime-VLA V2: Learning to Run VLAs Fast, Smooth and Accurate",
    "authors": "上海AI Lab",
    "venue": "arXiv:2603.20000",
    "date": "2026-03-20",
    "summary": "实时VLA，在边缘设备(Jetson)上快速流畅运行VLAs。EAGLE-3投机解码+NVFP4量化优化，兼顾精度和速度。适合无人机实时性需求。",
    "link": "https://arxiv.org/abs/2603.20000",
    "tags": [
      "VLA",
      "Real-time",
      "Edge AI",
      "Quantization"
    ],
    "importance": "medium"
  },
  {
    "title": "FocusVLA: Visual Attention Optimization for Efficient Vision-Language-Action Models",
    "authors": "字节跳动",
    "venue": "arXiv:2603.28740",
    "date": "2026-03-28",
    "summary": "VLA瓶颈在于如何利用视觉而非视觉质量本身。提出Modality Cascaded Attention消除快捷路径。边缘部署计算优化参考。",
    "link": "https://arxiv.org/abs/2603.28740",
    "tags": [
      "VLA",
      "Attention",
      "Edge AI",
      "Efficiency"
    ],
    "importance": "medium"
  }
];

// GitHub 热门项目
export const hotProjects: GitHubProject[] = [
  {
    "name": "Prometheus",
    "description": "开源PX4/Prometheus无人机项目，自主飞行、目标追踪、集群控制。活跃开源社区。",
    "stars": "2.3k",
    "language": "C++",
    "link": "https://github.com/Prometheus-Flightmare/Prometheus",
    "tags": [
      "PX4",
      "UAV",
      "ROS",
      "Autonomous Flight"
    ],
    "verified": true
  },
  {
    "name": "FlightGPT",
    "description": "Garfield毕设项目：基于Qwen2.5-VL-7B的端到端VLM无人机控制，SFT+GRPO训练，支持自然语言指令。",
    "stars": "89",
    "language": "Python",
    "link": "https://github.com/Garfield-Wuu/FlightGPT",
    "tags": [
      "VLM",
      "UAV",
      "SFT",
      "Qwen"
    ],
    "verified": true
  },
  {
    "name": "embodied-drone-agents",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": "127",
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": [
      "LLM",
      "MAVSDK",
      "LangGraph",
      "Agent",
      "UAV"
    ],
    "verified": true
  },
  {
    "name": "llm-uav (Atmaca)",
    "description": "集成Gemma 3 4B与无人机控制，支持自然语言指令，边缘部署。",
    "stars": "42",
    "language": "Python",
    "link": "https://github.com/furkanisikay/llm-uav",
    "tags": [
      "LLM",
      "UAV",
      "Edge AI",
      "NLP"
    ],
    "verified": true
  },
  {
    "name": "MAVLinkMCP",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": "38",
    "language": "Python",
    "link": "https://github.com/ion-g-ion/MAVLinkMCP",
    "tags": [
      "MAVLink",
      "MCP",
      "PX4",
      "LLM"
    ],
    "verified": true
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "520",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "verified": true
  },
  {
    "name": "Awesome-LLM-Robotics",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": "1.2k",
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": [
      "LLM",
      "Robot",
      "Survey",
      "Papers"
    ],
    "verified": true
  },
  {
    "name": "Awesome-Aerial-VLN",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": "42",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": [
      "UAV",
      "VLN",
      "Navigation",
      "Survey"
    ],
    "verified": true
  }
];

// 新闻摘要
export const recentNews: News[] = [
  {
    "title": "Amazon acquires Rivr, maker of a stair-climbing delivery robot",
    "link": "https://techcrunch.com/2026/03/19/amazon-acquires-rivr-maker-of-a-stair-climbing-delivery-robot/",
    "summary": "亚马逊与贝索斯再度投资无人配送初创公司，凸显电商巨头对无人化送货上门服务的高度重视。",
    "source": "网络",
    "verified": true
  },
  {
    "title": "Jeff Bezos reportedly wants $100 billion to buy and transform old manu",
    "link": "https://techcrunch.com/2026/03/19/jeff-bezos-reportedly-wants-100-billion-to-buy-and-transform-old-manufacturing-firms-with-ai/",
    "summary": "Jeff Bezos启动新项目，收购传统工业公司并用AI技术进行数字化改造，提升其运营效率。",
    "source": "网络",
    "verified": true
  },
  {
    "title": "Employees had to restrain a dancing humanoid robot after it went wild",
    "link": "https://techcrunch.com/2026/03/19/restaurant-dancing-robot-went-wild-hot-pot-cupertino-haidilao-agibot/",
    "summary": "Sony WF-1000XM6真无线降噪耳机首次降价，从$329降至$278，与上代$248的常售价差距缩小，使其更值得购买。",
    "source": "网络",
    "verified": true
  },
  {
    "title": "Valve’s huge SteamOS 3.8 update adds long-awaited features — and suppo",
    "link": "https://www.theverge.com/games/897765/valve-steamos-3-8-update-steam-deck-hibernation-steam-machine-xbox-ally",
    "summary": "Sony WF-1000XM6真无线降噪耳机首次降价，从$329降至$278，与上代$248的常售价差距缩小，使其更值得购买。",
    "source": "网络",
    "verified": true
  },
  {
    "title": "OpenAI is planning a desktop ‘superapp’",
    "link": "https://www.theverge.com/ai-artificial-intelligence/897778/openai-chatgpt-codex-atlas-browser-superapp",
    "summary": "Sony WF-1000XM6真无线降噪耳机首次降价，从$329降至$278，与上代$248的常售价差距缩小，使其更值得购买。",
    "source": "网络",
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