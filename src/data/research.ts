// Auto-generated research.ts - 研究页面数据
// Generated: 2026-05-02 08:46

import { ResearchPaper, GitHubProject, NewsItem, TrendsItem } from ../types/research;

// ===================== TRENDS =====================
export const trends: TrendsItem[] = [
  {
    "icon": "📡",
    "title": "腾讯入局具身基础模型",
    "description": "Shunyu Yao带队，竞争格局变化"
  },
  {
    "icon": "📡",
    "title": "数据引擎成为核心瓶颈",
    "description": "模型架构已成熟，数据是下一战场"
  },
  {
    "icon": "🤖",
    "title": "边缘VLA高效化",
    "description": "量化/蒸馏/剪枝技术成为刚需"
  },
  {
    "icon": "📡",
    "title": "平台适配方法论",
    "description": "Embodiment mismatch的微调解决方案"
  }
];

// ===================== PAPERS =====================
export const papers: ResearchPaper[] = [
  {
    "title": "VLA Data-Centric Survey: Datasets, Benchmarks, and Data Engines",
    "link": "https://arxiv.org/abs/2604.23001",
    "summary": "",
    "tags": [],
    "source": "OpenClaw Scout",
    "importance": "medium"
  },
  {
    "title": "Efficient VLA for Embodied Manipulation: A Systematic Survey",
    "link": "https://arxiv.org/abs/2510.17111",
    "summary": "",
    "tags": [],
    "source": "OpenClaw Scout",
    "importance": "medium"
  },
  {
    "title": "Bridging Embodiment Gaps: VLA on Soft Robots",
    "link": "https://arxiv.org/abs/2510.17369",
    "summary": "",
    "tags": [],
    "source": "OpenClaw Scout",
    "importance": "medium"
  }
];

// ===================== GITHUB =====================
export const githubProjects: GitHubProject[] = [
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
    "stars_last_checked_at": "2026-05-02T08:45:13.115813",
    "stars_source": "api"
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
    "stars_last_checked_at": "2026-05-02T08:45:14.034559",
    "stars_source": "api"
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
    "stars_last_checked_at": "2026-05-02T08:45:14.953453",
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
    "stars_last_checked_at": "2026-05-02T08:45:15.856914",
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
    "stars_last_checked_at": "2026-05-02T08:45:16.775920",
    "stars_source": "api"
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "656",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-05-02T08:45:17.697664",
    "stars_source": "api"
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
    "stars_last_checked_at": "2026-05-02T08:45:18.615039",
    "stars_source": "api"
  },
  {
    "name": "Awesome-Aerial-VLN",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": "53",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": [
      "UAV",
      "VLN",
      "Navigation",
      "Survey"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-05-02T08:45:19.534529",
    "stars_source": "api"
  }
];

// ===================== NEWS =====================
export const news: NewsItem[] = [
  {
    "title": "Humanoid Robot 2026 融资潮：Apptronik $935M",
    "link": "https://techcrunch.com/2026/02/11/humanoid-robot-startup-apptronik-has-now-raised-935m-at-a-5b-valuation/",
    "summary": "2026.02 | 来源：[TechCrunch](https://techcrunch.com/2026/02/11/humanoid-robot-startup-apptronik-has-now-raised-935m-at-a-5b-valuation/) 💡 关键数据： - Apptronik 估值 $5B+，投资方包括 Google DeepMind",
    "source": "TechCrunch",
    "date": "_2026-05-0",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "SwarmGPT：用 LLMs 控制无人机蜂群编队",
    "link": "https://utiasdsl.github.io/swarm_GPT/",
    "summary": "2024+ | 来源：[UTIAS DSL Lab](https://utiasdsl.github.io/swarm_GPT/) 💡 核心能力： - LLM 实现多无人机协同任务分解",
    "source": "GitHub",
    "date": "_2026-05-0",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "FM-Planner：Foundation Model 引导的无人机路径规划",
    "link": "https://github.com/ntu-icg/fm-planner",
    "summary": "Recent | 来源：[GitHub: NTU-ICG/fm-planner](https://github.com/ntu-icg/fm-planner) 💡 核心方法： - 系统评估了 8 种 LLM 用于无人机路径规划",
    "source": "GitHub",
    "date": "_2026-05-0",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "NVIDIA TensorRT Edge-LLM：嵌入式高性能推理",
    "link": "https://developer.nvidia.com/blog/accelerating-llm-and-vlm-inference-for-automotive-and-robotics-with-nvidia-tensorrt-edge-llm/",
    "summary": "2026.01 | 来源：[NVIDIA Blog](https://developer.nvidia.com/blog/accelerating-llm-and-vlm-inference-for-automotive-and-robotics-with-nvidia-tensorrt-edge-llm/) 💡 核心能力： - 开源 C++ 框架，专为边缘设备优化",
    "source": "NVIDIA",
    "date": "_2026-05-0",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "UAVs_Meet_LLMs",
    "link": "https://github.com/Hub-Tian/UAVs_Meet_LLMs",
    "summary": "*：LLM+无人机论文综述，整理了：\n- 基于视觉的自主规划（结合 LLMs）\n- 自然语言控制 PX4/Gazebo\n- LLM 用于机器人编队\n- FM-Planner 等重要工作",
    "source": "GitHub",
    "date": "_2026-05-0",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
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
  }
];

export const RESEARCH_LAST_UPDATED = "2026-05-02 08:46";