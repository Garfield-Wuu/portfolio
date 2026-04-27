// Auto-generated at 2026-04-27T08:49:28.407918
// DO NOT EDIT MANUALLY

export interface Paper {
  id: string;
  title: string;
  authors: string;
  date: string;
  category: string;
  url: string;
  pdf: string;
  tags: string[];
  summary: string;
  problem?: string;
  method?: string;
  value?: string;
  why_relevant?: string;
  research_axis?: string;
  importance?: string;
  venue?: string;
}

export interface GitHub {
  id: string;
  name: string;
  owner: string;
  description: string;
  stars: number;
  url: string;
  category: string;
  language?: string;
  tags?: string[];
  verified?: boolean;
  stars_last_checked_at?: string;
  stars_source?: string;
}

export interface News {
  id: string;
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

export const papers: Paper[] = [
  {
    "title": "Reasoning About Traversability",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21249",
    "date": "2026-04-21",
    "summary": "VLM语言引导野外3D轨迹 ⭐⭐⭐⭐ 动作对齐标注重构，解决语言-动作不对齐问题 地形感知偏好优化，硬负样本显式惩罚。着陆点可通行性评估 + 动作对齐训练数据标注",
    "problem": "语言引导野外3D轨迹规划方向的核心问题与挑战",
    "method": "VLM语言引导野外3D轨迹 ⭐⭐⭐⭐ 动作对齐标注重构，解决语言-动作不对齐问题 地形感知偏好优化，硬负样本显式惩罚",
    "value": "着陆点可通行性评估 + 动作对齐训练数据标注",
    "why_relevant": "着陆点可通行性评估 + 动作对齐训练数据标注",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21249",
    "pdf_url": "https://arxiv.org/pdf/2604.21249",
    "tags": ["语言引导野外3D轨迹规划"],
    "importance": "high",
  }
  {
    "title": "Swarm Size Variability",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21707",
    "date": "2026-04-21",
    "summary": "人-集群工作负载 ⭐⭐⭐ N=34两项研究，小幅增加更易管理 大幅变化导致认知重置，覆盖残留效应。多机编队人机交互设计参考",
    "problem": "人-集群工作负载研究方向的核心问题与挑战",
    "method": "人-集群工作负载 ⭐⭐⭐ N=34两项研究，小幅增加更易管理 大幅变化导致认知重置，覆盖残留效应",
    "value": "多机编队人机交互设计参考",
    "why_relevant": "多机编队人机交互设计参考",
    "research_axis": "Multi-agent",
    "link": "https://arxiv.org/abs/2604.21707",
    "pdf_url": "https://arxiv.org/pdf/2604.21707",
    "tags": ["人-集群工作负载研究"],
    "importance": "high",
  }
  {
    "title": "SLAM as Stochastic Control",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21693",
    "date": "2026-04-21",
    "summary": "主动SLAM理论 ⭐⭐⭐⭐ POMDP公式化主动SLAM 状态几何编码的信息增益探索成本。无人机室内定位理论基础",
    "problem": "主动SLAM理论框架方向的核心问题与挑战",
    "method": "主动SLAM理论 ⭐⭐⭐⭐ POMDP公式化主动SLAM 状态几何编码的信息增益探索成本",
    "value": "无人机室内定位理论基础",
    "why_relevant": "无人机室内定位理论基础",
    "research_axis": "Perception",
    "link": "https://arxiv.org/abs/2604.21693",
    "pdf_url": "https://arxiv.org/pdf/2604.21693",
    "tags": ["主动SLAM理论框架"],
    "importance": "high",
  }
  {
    "title": "LoHo-Manip",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21924",
    "date": "2026-04-21",
    "summary": "多点巡航最佳参考 ⭐⭐⭐⭐⭐ Task-Management VLM + Executor VLA 双系统解耦 Progress-Aware Remaining Plan: done + remaining分割。多点巡航状态管理 + 自动重规划",
    "problem": "Trace条件VLA长程规划, 隐式闭环方向的核心问题与挑战",
    "method": "多点巡航最佳参考 ⭐⭐⭐⭐⭐ Task-Management VLM + Executor VLA 双系统解耦 Progress-Aware Remaining Plan: done + remaining分割",
    "value": "多点巡航状态管理 + 自动重规划",
    "why_relevant": "多点巡航状态管理 + 自动重规划",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21924",
    "pdf_url": "https://arxiv.org/pdf/2604.21924",
    "tags": ["Trace条件VLA长程规划, 隐式闭环"],
    "importance": "high",
  }
  {
    "title": "VistaBot",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21914",
    "date": "2026-04-21",
    "summary": "跨视角泛化 ⭐⭐⭐⭐⭐ 前馈几何模型 + 视频扩散模型 无需测试时相机标定。着陆点视角变化鲁棒",
    "problem": "跨视角鲁棒操作, ICRA 2026方向的核心问题与挑战",
    "method": "跨视角泛化 ⭐⭐⭐⭐⭐ 前馈几何模型 + 视频扩散模型 无需测试时相机标定",
    "value": "着陆点视角变化鲁棒",
    "why_relevant": "着陆点视角变化鲁棒",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21914",
    "pdf_url": "https://arxiv.org/pdf/2604.21914",
    "tags": ["跨视角鲁棒操作, ICRA 2026"],
    "importance": "high",
  }
  {
    "title": "Hi-WM",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21741",
    "date": "2026-04-21",
    "summary": "World Model内人类纠正 ⭐⭐⭐⭐⭐ 策略在World Model内rollout，人类直接在模型内干预 状态缓存+rollback/branching支持多次纠正。室内World Model内安全纠正，无需真机试错",
    "problem": "World Model人类后训练方向的核心问题与挑战",
    "method": "World Model内人类纠正 ⭐⭐⭐⭐⭐ 策略在World Model内rollout，人类直接在模型内干预 状态缓存+rollback/branching支持多次纠正",
    "value": "室内World Model内安全纠正，无需真机试错",
    "why_relevant": "室内World Model内安全纠正，无需真机试错",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21741",
    "pdf_url": "https://arxiv.org/pdf/2604.21741",
    "tags": ["World Model人类后训练"],
    "importance": "high",
  }
  {
    "title": "ResVLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21391",
    "date": "2026-04-21",
    "summary": "残差桥接VLA ⭐⭐⭐⭐⭐ \"Refinement-from-Intent\" 替代 \"Generation-from-Noise\" 频谱分析解耦: 确定性低频锚点 + 随机高频残差。VLA动作生成残差补偿范式",
    "problem": "残差桥接意图对齐VLA方向的核心问题与挑战",
    "method": "残差桥接VLA ⭐⭐⭐⭐⭐ \"Refinement-from-Intent\" 替代 \"Generation-from-Noise\" 频谱分析解耦: 确定性低频锚点 + 随机高频残差",
    "value": "VLA动作生成残差补偿范式",
    "why_relevant": "VLA动作生成残差补偿范式",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21391",
    "pdf_url": "https://arxiv.org/pdf/2604.21391",
    "tags": ["残差桥接意图对齐VLA"],
    "importance": "high",
  }
  {
    "title": "Deployable VLN",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21363",
    "date": "2026-04-21",
    "summary": "可部署VLN系统 ⭐⭐⭐⭐ 三模块异步解耦: 感知/记忆/推理 认知记忆图 → WTRP路径优化。边缘部署VLN架构参考",
    "problem": "层级认知可部署VLN系统方向的核心问题与挑战",
    "method": "可部署VLN系统 ⭐⭐⭐⭐ 三模块异步解耦: 感知/记忆/推理 认知记忆图 → WTRP路径优化",
    "value": "边缘部署VLN架构参考",
    "why_relevant": "边缘部署VLN架构参考",
    "research_axis": "Navigation",
    "link": "https://arxiv.org/abs/2604.21363",
    "pdf_url": "https://arxiv.org/pdf/2604.21363",
    "tags": ["层级认知可部署VLN系统"],
    "importance": "high",
  }
];

export const githubProjects: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "PX4",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": 11600,
    "language": "C++",
    "link": "https://github.com/PX4/PX4-Autopilot",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-04-27T08:45:09.266303",
    "stars_source": "api",
  }
  {
    "name": "Prometheus (amov-lab)",
    "owner": "amov-lab",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    "stars": 3100,
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-04-27T08:45:10.210900",
    "stars_source": "api",
  }
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 20,
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-04-27T08:45:11.168404",
    "stars_source": "api",
  }
  {
    "name": "llm-uav (Atmaca)",
    "owner": "furkanisikay",
    "description": "集成Gemma 3 4B与无人机控制，支持自然语言指令，边缘部署。",
    "stars": 0,
    "language": "Python",
    "link": "https://github.com/furkanisikay/llm-uav",
    "tags": ["LLM", "UAV", "Edge AI", "NLP"],
    "verified": true,
    "stars_last_checked_at": "2026-04-27T08:45:12.053238",
    "stars_source": "api",
  }
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": 16,
    "language": "Python",
    "link": "https://github.com/ion-g-ion/MAVLinkMCP",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-04-27T08:45:12.948380",
    "stars_source": "api",
  }
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 647,
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-27T08:45:13.876041",
    "stars_source": "api",
  }
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": 4300,
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-27T08:45:14.787327",
    "stars_source": "api",
  }
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 52,
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-04-27T08:45:15.724015",
    "stars_source": "api",
  }
];

export const news: News[] = [
  {
    "title": "OpenAI GPT-5.5 发布——真正 Agentic Model",
    "source": "OpenAI",
    "url": "https://openai.com/index/introducing-gpt-5-5/",
    "date": "2026-04-23",
    "summary": "OpenAI发布真正Agentic Model，Terminal-Bench 2.0达82.7%，200k上下文，函数调用增强",
    "published_at": "2026-04-23",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "fresh",
    "archived": false,
  }
  {
    "title": "NVIDIA CaP-X：机器人自我编程框架",
    "source": "GitHub",
    "url": "https://github.com/capgym/cap-x",
    "date": "2026-04-08",
    "summary": "2026.04.08 | 来源：英伟达官方 💡 核心能力：   - 机器人盯着摄像头看懂环境 → 现场生成 Python 代码控制自己",
    "published_at": "2026-04-08",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "aging",
    "archived": false,
  }
  {
    "title": "AtsushiSakai/PythonRobotics ⭐29,255 [Python]",
    "source": "GitHub",
    "url": "https://github.com/AtsushiSakai/PythonRobotics",
    "date": "_2026-04-2",
    "summary": "*：MATLAB Robotics Toolbox 对应的 Python 实现",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "Genesis-Embodied-AI/Genesis ⭐28,573 [Python]",
    "source": "GitHub",
    "url": "https://github.com/Genesis-Embodied-AI/Genesis",
    "date": "_2026-04-2",
    "summary": "生成式机器人仿真平台 💡 核心：通用机器人学习的生成式仿真世界 🎯 亮点：",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "huggingface/lerobot ⭐23,544 [Python]",
    "source": "GitHub",
    "url": "https://github.com/huggingface/lerobot",
    "date": "_2026-04-2",
    "summary": "*：端到端学习框架，支持模仿学习、强化学习",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "NVIDIA/Isaac-GR00T ⭐6,846 [Python]",
    "source": "GitHub",
    "url": "https://github.com/NVIDIA/Isaac-GR00T",
    "date": "2026-04-26",
    "summary": "NVIDIA人形机器人基础模型，预训练支持多种任务，IsaacLab仿真环境，与NVIDIA硬件深度集成",
    "published_at": "2026-04-26",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "aging",
    "archived": false,
  }
  {
    "title": "OpenDroneMap/ODM ⭐6,034 [Python]",
    "source": "GitHub",
    "url": "https://github.com/OpenDroneMap/ODM",
    "date": "_2026-04-2",
    "summary": "*：从无人机图像生成地图、点云、3D 模型",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  }
];

export const trends: string[] = [
  {"icon": "📡", "title": "动作-语言对齐成为VLM优化重点", "description": "Reasoning About Traversability展示语言标注与动作对齐的价值"},
  {"icon": "🐝", "title": "人-集群研究深化", "description": "工作负载残留和认知重置效应指导人机交互设计"},
  {"icon": "📡", "title": "理论框架指导实践", "description": "SLAM随机控制框架为概率定位提供理论保证"},
];