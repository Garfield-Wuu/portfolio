// Auto-generated - Do not edit manually
// Generated at: 2026-05-01 08:45:51

export interface Paper {
  title: string;
  authors: string;
  year: number;
  venue: string;
  url: string;
  pdf: string;
  github: string;
  abstract: string;
  categories: string[];
  citations?: number;
  readLevel: 1 | 2 | 3;
}

export interface GitHubProject {
  name: string;
  url: string;
  description: string;
  stars: number;
  language: string;
  topics: string[];
}

export interface NewsItem {
  title: string;
  summary: string;
  url: string;
  source: string;
  date: string;
  tags: string[];
}

export const papers: Paper[] = [
  {
    "title": "DIAL: Decomposing Vision-Language Models into Intent Understanding and Action Decoding",
    "authors": "Stanford / Berkeley",
    "venue": "arXiv:2603.29844",
    "date": "2026-03-31",
    "summary": "VLA架构创新：VLM不应只做编码器，应利用高层意图理解。分为Intent Bottleneck（潜世界模型编码意图）和Action Decoding（潜逆动力学解码动作），实现LLM→VLA→PX4架构解耦。",
    "link": "https://arxiv.org/abs/2603.29844",
    "pdf_url": "https://arxiv.org/pdf/2603.29844",
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
    "pdf_url": "https://arxiv.org/pdf/2603.27583",
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
    "pdf_url": "https://arxiv.org/pdf/2603.28032",
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
    "pdf_url": "https://arxiv.org/pdf/2603.25000",
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
    "pdf_url": "https://arxiv.org/pdf/2603.20000",
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
    "pdf_url": "https://arxiv.org/pdf/2603.28740",
    "tags": [
      "VLA",
      "Attention",
      "Edge AI",
      "Efficiency"
    ],
    "importance": "medium"
  }
];

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
    "stars_last_checked_at": "2026-05-01T08:45:07.882085",
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
    "stars_last_checked_at": "2026-05-01T08:45:08.851506",
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
    "stars_last_checked_at": "2026-05-01T08:45:09.782694",
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
    "stars_last_checked_at": "2026-05-01T08:45:10.694997",
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
    "stars_last_checked_at": "2026-05-01T08:45:11.640002",
    "stars_source": "api"
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "654",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-05-01T08:45:12.518467",
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
    "stars_last_checked_at": "2026-05-01T08:45:13.474437",
    "stars_source": "api"
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
    "stars_last_checked_at": "2026-05-01T08:45:14.390829",
    "stars_source": "api"
  }
];

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
  }
];