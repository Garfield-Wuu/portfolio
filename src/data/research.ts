// Auto-generated at 2026-05-03T08:47:15.913290
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
    "description": "\u5f00\u6e90\u65e0\u4eba\u673a\u81ea\u52a8\u9a7e\u9a76\u8f6f\u4ef6\uff0c\u652f\u6301\u591a\u65cb\u7ffc\u3001\u56fa\u5b9a\u7ffc\u3001VTOL\u7b49\u3002\u5b66\u672f\u754c\u6700\u6d41\u884c\u7684\u65e0\u4eba\u673a\u7814\u7a76\u5e73\u53f0\u3002",
    "stars": 11600,
    "language": "C++",
    "link": "https://github.com/PX4/PX4-Autopilot",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-05-03T08:45:49.140674",
    "stars_source": "api",
  }
  {
    "name": "Prometheus (amov-lab)",
    "owner": "amov-lab",
    "description": "PX4\u65e0\u4eba\u673a\u81ea\u4e3b\u98de\u884c\u7efc\u5408\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u76ee\u6807\u8ffd\u8e2a\u3001\u96c6\u7fa4\u63a7\u5236\u3001SLAM\u7b4930+\u5e94\u7528\u6a21\u5757\u3002\u7d2f\u8ba13.1k+ stars\u3002",
    "stars": 3100,
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-05-03T08:45:50.129136",
    "stars_source": "api",
  }
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent\u7cfb\u7edf\uff0c\u4f7f\u7528MAVSDK-Python\u4f5c\u4e3a\u5de5\u5177\uff0cLangGraph\u7f16\u6392\u4efb\u52a1\u89c4\u5212\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u63a7\u5236\u65e0\u4eba\u673a\u3002",
    "stars": 20,
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-05-03T08:45:51.083910",
    "stars_source": "api",
  }
  {
    "name": "llm-uav (Atmaca)",
    "owner": "furkanisikay",
    "description": "\u96c6\u6210Gemma 3 4B\u4e0e\u65e0\u4eba\u673a\u63a7\u5236\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u6307\u4ee4\uff0c\u8fb9\u7f18\u90e8\u7f72\u3002",
    "stars": 0,
    "language": "Python",
    "link": "https://github.com/furkanisikay/llm-uav",
    "tags": ["LLM", "UAV", "Edge AI", "NLP"],
    "verified": true,
    "stars_last_checked_at": "2026-05-03T08:45:52.035241",
    "stars_source": "api",
  }
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM\u4e0eMAVLink\u65e0\u4eba\u673a\u7684\u901a\u4fe1\uff0c\u652f\u6301\u901a\u8fc7MCP\u534f\u8bae\u63a7\u5236PX4\u65e0\u4eba\u673a\u3002",
    "stars": 16,
    "language": "Python",
    "link": "https://github.com/ion-g-ion/MAVLinkMCP",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-05-03T08:45:52.937583",
    "stars_source": "api",
  }
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA\u8bba\u6587\u6c47\u603b\uff1a\u5f3a\u5316\u5b66\u4e60\u89c6\u89c9-\u8bed\u8a00-\u52a8\u4f5c\u6a21\u578b\u7efc\u8ff0\u3002",
    "stars": 658,
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-03T08:45:53.874125",
    "stars_source": "api",
  }
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "\u5927\u8bed\u8a00\u6a21\u578b/\u591a\u6a21\u6001\u6a21\u578b\u5728\u673a\u5668\u4eba\u9886\u57df\u7684\u5e94\u7528\u8bba\u6587\u6c47\u603b\u3002",
    "stars": 4400,
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-03T08:45:54.775622",
    "stars_source": "api",
  }
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "\u7a7a\u4e2d\u89c6\u89c9-\u8bed\u8a00\u5bfc\u822a(Aerial VLN)\u8bba\u6587\u6c47\u603b\uff1a\u65e0\u4eba\u673aVLN\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "stars": 53,
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-05-03T08:45:55.692882",
    "stars_source": "api",
  }
];

export const news: News[] = [
  {
    "title": "Humanoid Robot 2026 \u878d\u8d44\u6f6e\uff1aApptronik $935M",
    "source": "TechCrunch",
    "url": "https://techcrunch.com/2026/02/11/humanoid-robot-startup-apptronik-has-now-raised-935m-at-a-5b-valuation/",
    "date": "_2026-05-0",
    "summary": "2026.02 | \u6765\u6e90\uff1a[TechCrunch](https://techcrunch.com/2026/02/11/humanoid-robot-startup-apptronik-has-now-raised-935m-at-a-5b-valuation/) \ud83d\udca1 \u5173\u952e\u6570\u636e\uff1a - Apptronik \u4f30\u503c $5B+\uff0c\u6295\u8d44\u65b9\u5305\u62ec Google DeepMind",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "SwarmGPT\uff1a\u7528 LLMs \u63a7\u5236\u65e0\u4eba\u673a\u8702\u7fa4\u7f16\u961f",
    "source": "GitHub",
    "url": "https://utiasdsl.github.io/swarm_GPT/",
    "date": "_2026-05-0",
    "summary": "2024+ | \u6765\u6e90\uff1a[UTIAS DSL Lab](https://utiasdsl.github.io/swarm_GPT/) \ud83d\udca1 \u6838\u5fc3\u80fd\u529b\uff1a - LLM \u5b9e\u73b0\u591a\u65e0\u4eba\u673a\u534f\u540c\u4efb\u52a1\u5206\u89e3",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "FM-Planner\uff1aFoundation Model \u5f15\u5bfc\u7684\u65e0\u4eba\u673a\u8def\u5f84\u89c4\u5212",
    "source": "GitHub",
    "url": "https://github.com/ntu-icg/fm-planner",
    "date": "_2026-05-0",
    "summary": "Recent | \u6765\u6e90\uff1a[GitHub: NTU-ICG/fm-planner](https://github.com/ntu-icg/fm-planner) \ud83d\udca1 \u6838\u5fc3\u65b9\u6cd5\uff1a - \u7cfb\u7edf\u8bc4\u4f30\u4e86 8 \u79cd LLM \u7528\u4e8e\u65e0\u4eba\u673a\u8def\u5f84\u89c4\u5212",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "NVIDIA TensorRT Edge-LLM\uff1a\u5d4c\u5165\u5f0f\u9ad8\u6027\u80fd\u63a8\u7406",
    "source": "NVIDIA",
    "url": "https://developer.nvidia.com/blog/accelerating-llm-and-vlm-inference-for-automotive-and-robotics-with-nvidia-tensorrt-edge-llm/",
    "date": "_2026-05-0",
    "summary": "2026.01 | \u6765\u6e90\uff1a[NVIDIA Blog](https://developer.nvidia.com/blog/accelerating-llm-and-vlm-inference-for-automotive-and-robotics-with-nvidia-tensorrt-edge-llm/) \ud83d\udca1 \u6838\u5fc3\u80fd\u529b\uff1a - \u5f00\u6e90 C++ \u6846\u67b6\uff0c\u4e13\u4e3a\u8fb9\u7f18\u8bbe\u5907\u4f18\u5316",
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
    "summary": "*\uff1aLLM+\u65e0\u4eba\u673a\u8bba\u6587\u7efc\u8ff0\uff0c\u6574\u7406\u4e86\uff1a\n- \u57fa\u4e8e\u89c6\u89c9\u7684\u81ea\u4e3b\u89c4\u5212\uff08\u7ed3\u5408 LLMs\uff09\n- \u81ea\u7136\u8bed\u8a00\u63a7\u5236 PX4/Gazebo\n- LLM \u7528\u4e8e\u673a\u5668\u4eba\u7f16\u961f\n- FM-Planner \u7b49\u91cd\u8981\u5de5\u4f5c",
    "published_at": "_2026-05-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "LeRobot (Hugging Face) \u2b50 \u65b0\u4e0a\u699c\uff01",
    "source": "GitHub",
    "url": "https://github.com/huggingface/lerobot",
    "date": "_2026-04-3",
    "summary": "*\uff1a\u5f00\u6e90\u673a\u5668\u4eba\u5b66\u4e60\u5e73\u53f0\uff0c\u652f\u6301\u591a\u673a\u5668\u4eba\u534f\u540c",
    "published_at": "_2026-04-3",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  }
];

export const trends: string[] = [
  {"icon": "🤖", "title": "VLA架构持续演进", "description": "从单模型→双系统(Libra-VLA)→潜在推理(LaST-R1)→3D空间(FALCON)"},
  {"icon": "📡", "title": "世界模型成为核心", "description": "RehearseVLA、MotuBrain、Flying by Inference都依赖世界模型"},
  {"icon": "📡", "title": "UAV专项研究加速", "description": "FRGS、ARIA、CoT-Route、Flying by Inference四篇UAV论文同时出现"},
  {"icon": "🤖", "title": "ICLR+CVPR 2026 VLA论文密集", "description": "FALCON(ICLR), RehearseVLA(CVPR), 之前还有X-VLA, MemoryVLA"},
  {"icon": "📡", "title": "推理范式转变", "description": "从语言链推理(CoT)→潜在空间推理(LaST-R1)"},
];
