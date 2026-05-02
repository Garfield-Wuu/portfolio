// Auto-generated at 2026-05-03T03:38:31.274535
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
    "title": "VLA Data-Centric Survey: Datasets, Benchmarks, and Data Engines",
    "authors": "OpenClaw Scout",
    "venue": "",
    "date": "",
    "summary": "",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2604.23001",
    "pdf_url": "",
    "tags": [],
    "importance": "medium",
  }
  {
    "title": "Efficient VLA for Embodied Manipulation: A Systematic Survey",
    "authors": "OpenClaw Scout",
    "venue": "",
    "date": "",
    "summary": "",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2510.17111",
    "pdf_url": "",
    "tags": [],
    "importance": "medium",
  }
  {
    "title": "Bridging Embodiment Gaps: VLA on Soft Robots",
    "authors": "OpenClaw Scout",
    "venue": "",
    "date": "",
    "summary": "",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2510.17369",
    "pdf_url": "",
    "tags": [],
    "importance": "medium",
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
    "stars_last_checked_at": "2026-05-02T08:45:13.115813",
    "stars_source": "stale_cache",
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
    "stars_last_checked_at": "2026-05-02T08:45:14.034559",
    "stars_source": "stale_cache",
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
    "stars_last_checked_at": "2026-05-02T08:45:14.953453",
    "stars_source": "stale_cache",
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
    "stars_last_checked_at": "2026-05-02T08:45:15.856914",
    "stars_source": "stale_cache",
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
    "stars_last_checked_at": "2026-05-02T08:45:16.775920",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 656,
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-02T08:45:17.697664",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": 4400,
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-02T08:45:18.615039",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 53,
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-05-02T08:45:19.534529",
    "stars_source": "stale_cache",
  }
];

export const news: News[] = [
  {
    "title": "Humanoid Robot 2026 融资潮：Apptronik $935M",
    "source": "TechCrunch",
    "url": "https://techcrunch.com/2026/02/11/humanoid-robot-startup-apptronik-has-now-raised-935m-at-a-5b-valuation/",
    "date": "_2026-05-0",
    "summary": "2026.02 | 来源：[TechCrunch](https://techcrunch.com/2026/02/11/humanoid-robot-startup-apptronik-has-now-raised-935m-at-a-5b-valuation/) 💡 关键数据： - Apptronik 估值 $5B+，投资方包括 Google DeepMind",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "SwarmGPT：用 LLMs 控制无人机蜂群编队",
    "source": "GitHub",
    "url": "https://utiasdsl.github.io/swarm_GPT/",
    "date": "_2026-05-0",
    "summary": "2024+ | 来源：[UTIAS DSL Lab](https://utiasdsl.github.io/swarm_GPT/) 💡 核心能力： - LLM 实现多无人机协同任务分解",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "FM-Planner：Foundation Model 引导的无人机路径规划",
    "source": "GitHub",
    "url": "https://github.com/ntu-icg/fm-planner",
    "date": "_2026-05-0",
    "summary": "Recent | 来源：[GitHub: NTU-ICG/fm-planner](https://github.com/ntu-icg/fm-planner) 💡 核心方法： - 系统评估了 8 种 LLM 用于无人机路径规划",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "NVIDIA TensorRT Edge-LLM：嵌入式高性能推理",
    "source": "NVIDIA",
    "url": "https://developer.nvidia.com/blog/accelerating-llm-and-vlm-inference-for-automotive-and-robotics-with-nvidia-tensorrt-edge-llm/",
    "date": "_2026-05-0",
    "summary": "2026.01 | 来源：[NVIDIA Blog](https://developer.nvidia.com/blog/accelerating-llm-and-vlm-inference-for-automotive-and-robotics-with-nvidia-tensorrt-edge-llm/) 💡 核心能力： - 开源 C++ 框架，专为边缘设备优化",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "UAVs_Meet_LLMs",
    "source": "GitHub",
    "url": "https://github.com/Hub-Tian/UAVs_Meet_LLMs",
    "date": "_2026-05-0",
    "summary": "*：LLM+无人机论文综述，整理了： - 基于视觉的自主规划（结合 LLMs） - 自然语言控制 PX4/Gazebo - LLM 用于机器人编队 - FM-Planner 等重要工作",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "LeRobot (Hugging Face) ⭐ 新上榜！",
    "source": "GitHub",
    "url": "https://github.com/huggingface/lerobot",
    "date": "_2026-04-3",
    "summary": "*：开源机器人学习平台，支持多机器人协同",
    "published_at": "_2026-04-3",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
];

export const trends: string[] = [
  {"icon": "🤖", "title": "VLA推理机制进化", "description": "LaST-R1将物理推理+RL统一，推理深度自适应"},
  {"icon": "📡", "title": "Aerial VLN独立领域化", "description": "首个系统性综述出现，标志着领域成熟"},
  {"icon": "📡", "title": "计划缓存优化", "description": "AgenticCache证明计划局部性可大幅降低成本"},
  {"icon": "📡", "title": "人类视频数据利用", "description": "从视频学习成为可扩展数据获取的标准路径"},
];