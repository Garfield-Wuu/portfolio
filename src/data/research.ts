// Auto-generated at 2026-05-09T08:46:42.603384
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
    "summary": "VLA\u67b6\u6784\u521b\u65b0\uff1aVLM\u4e0d\u5e94\u53ea\u505a\u7f16\u7801\u5668\uff0c\u5e94\u5229\u7528\u9ad8\u5c42\u610f\u56fe\u7406\u89e3\u3002\u5206\u4e3aIntent Bottleneck\uff08\u6f5c\u4e16\u754c\u6a21\u578b\u7f16\u7801\u610f\u56fe\uff09\u548cAction Decoding\uff08\u6f5c\u9006\u52a8\u529b\u5b66\u89e3\u7801\u52a8\u4f5c\uff09\uff0c\u5b9e\u73b0LLM\u2192VLA\u2192PX4\u67b6\u6784\u89e3\u8026\u3002",
    "importance": "high",
  },
  {
    "title": "LLM-Enabled UAV NL Navigation: Natural Language to Signal Temporal Logic for Autonomous Flight",
    "authors": "\u6e2f\u79d1\u5927",
    "date": "2026-03-30",
    "venue": "arXiv:2603.27583",
    "url": "https://arxiv.org/abs/2603.27583",
    "pdf": "https://arxiv.org/pdf/2603.27583",
    "tags": ["LLM", "UAV", "STL", "NLP", "Motion Planning"],
    "summary": "\u81ea\u7136\u8bed\u8a00\u2192\u4fe1\u53f7\u65f6\u5e8f\u903b\u8f91(STL)\u2192MILP\u8f68\u8ff9\u4f18\u5316\u3002CoT\u63a8\u7406+GRPO\u4f18\u5316\u786e\u4fdd\u7ffb\u8bd1\u6b63\u786e\u6027\uff0cSTL\u4fee\u590d\u673a\u5236\u5904\u7406\u4e0d\u53ef\u884c\u7ea6\u675f\u3002\u5df2\u6709\u5b9e\u673a\u98de\u884c\u9a8c\u8bc1\u3002",
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
    "summary": "AirSim + CARLA\u7edf\u4e00\u5230\u5355\u4e00Unreal Engine\u8fdb\u7a0b\uff0c\u96f6\u4fee\u6539\u590d\u7528AirSim API+ROS 2\u300218\u79cd\u4f20\u611f\u5668\u6a21\u6001\u540c\u6b65\u91c7\u96c6\u3002\u5b8c\u6574\u4eff\u771f\u9a8c\u8bc1\u73af\u5883\uff0c\u9002\u5408\u6bd5\u8bbe\u4eff\u771f\u9a8c\u8bc1\u3002",
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
    "summary": "PX4 + LLM agent\u5355\u6b65\u7ed3\u6784\u5316\u63d0\u793a\uff0c\u4e00\u6b21prompt\u5b8c\u6210\u591a\u4efb\u52a1\u89c4\u5212\u3002\u8f7b\u91cf\u7ea7\u65b9\u6848\uff0c\u9002\u5408\u8fb9\u7f18\u90e8\u7f72\u3002\u652f\u6301\u8bed\u97f3\u63a7\u5236\u548c\u4e91\u7aefAPI\u3002",
    "importance": "high",
  },
  {
    "title": "Realtime-VLA V2: Learning to Run VLAs Fast, Smooth and Accurate",
    "authors": "\u4e0a\u6d77AI Lab",
    "date": "2026-03-20",
    "venue": "arXiv:2603.20000",
    "url": "https://arxiv.org/abs/2603.20000",
    "pdf": "https://arxiv.org/pdf/2603.20000",
    "tags": ["VLA", "Real-time", "Edge AI", "Quantization"],
    "summary": "\u5b9e\u65f6VLA\uff0c\u5728\u8fb9\u7f18\u8bbe\u5907(Jetson)\u4e0a\u5feb\u901f\u6d41\u7545\u8fd0\u884cVLAs\u3002EAGLE-3\u6295\u673a\u89e3\u7801+NVFP4\u91cf\u5316\u4f18\u5316\uff0c\u517c\u987e\u7cbe\u5ea6\u548c\u901f\u5ea6\u3002\u9002\u5408\u65e0\u4eba\u673a\u5b9e\u65f6\u6027\u9700\u6c42\u3002",
    "importance": "medium",
  },
  {
    "title": "FocusVLA: Visual Attention Optimization for Efficient Vision-Language-Action Models",
    "authors": "\u5b57\u8282\u8df3\u52a8",
    "date": "2026-03-28",
    "venue": "arXiv:2603.28740",
    "url": "https://arxiv.org/abs/2603.28740",
    "pdf": "https://arxiv.org/pdf/2603.28740",
    "tags": ["VLA", "Attention", "Edge AI", "Efficiency"],
    "summary": "VLA\u74f6\u9888\u5728\u4e8e\u5982\u4f55\u5229\u7528\u89c6\u89c9\u800c\u975e\u89c6\u89c9\u8d28\u91cf\u672c\u8eab\u3002\u63d0\u51faModality Cascaded Attention\u6d88\u9664\u5feb\u6377\u8def\u5f84\u3002\u8fb9\u7f18\u90e8\u7f72\u8ba1\u7b97\u4f18\u5316\u53c2\u8003\u3002",
    "importance": "medium",
  },
];

export const githubProjects: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "",
    "description": "\u5f00\u6e90\u65e0\u4eba\u673a\u81ea\u52a8\u9a7e\u9a76\u8f6f\u4ef6\uff0c\u652f\u6301\u591a\u65cb\u7ffc\u3001\u56fa\u5b9a\u7ffc\u3001VTOL\u7b49\u3002\u5b66\u672f\u754c\u6700\u6d41\u884c\u7684\u65e0\u4eba\u673a\u7814\u7a76\u5e73\u53f0\u3002",
    "stars": 117000,
    "url": "https://github.com/PX4/PX4-Autopilot",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-05-09T08:45:32.762208",
    "stars_source": "api",
  },
  {
    "name": "Prometheus (amov-lab)",
    "owner": "",
    "description": "PX4\u65e0\u4eba\u673a\u81ea\u4e3b\u98de\u884c\u7efc\u5408\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u76ee\u6807\u8ffd\u8e2a\u3001\u96c6\u7fa4\u63a7\u5236\u3001SLAM\u7b4930+\u5e94\u7528\u6a21\u5757\u3002\u7d2f\u8ba13.1k+ stars\u3002",
    "stars": 31000,
    "url": "https://github.com/amov-lab/Prometheus",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-05-09T08:45:33.630717",
    "stars_source": "api",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "",
    "description": "LLM drone agent\u7cfb\u7edf\uff0c\u4f7f\u7528MAVSDK-Python\u4f5c\u4e3a\u5de5\u5177\uff0cLangGraph\u7f16\u6392\u4efb\u52a1\u89c4\u5212\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u63a7\u5236\u65e0\u4eba\u673a\u3002",
    "stars": 20,
    "url": "https://github.com/EmergenceAI/embodied-drone-agents",
    "language": "Python",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-05-09T08:45:34.529842",
    "stars_source": "api",
  },
  {
    "name": "llm-uav (Atmaca)",
    "owner": "",
    "description": "\u96c6\u6210Gemma 3 4B\u4e0e\u65e0\u4eba\u673a\u63a7\u5236\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u6307\u4ee4\uff0c\u8fb9\u7f18\u90e8\u7f72\u3002",
    "stars": 0,
    "url": "https://github.com/furkanisikay/llm-uav",
    "language": "Python",
    "tags": ["LLM", "UAV", "Edge AI", "NLP"],
    "verified": true,
    "stars_last_checked_at": "2026-05-09T08:45:35.423940",
    "stars_source": "api",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "",
    "description": "MCP (Model Context Protocol) server for LLM\u4e0eMAVLink\u65e0\u4eba\u673a\u7684\u901a\u4fe1\uff0c\u652f\u6301\u901a\u8fc7MCP\u534f\u8bae\u63a7\u5236PX4\u65e0\u4eba\u673a\u3002",
    "stars": 16,
    "url": "https://github.com/ion-g-ion/MAVLinkMCP",
    "language": "Python",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-05-09T08:45:36.248077",
    "stars_source": "api",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "",
    "description": "RL+VLA\u8bba\u6587\u6c47\u603b\uff1a\u5f3a\u5316\u5b66\u4e60\u89c6\u89c9-\u8bed\u8a00-\u52a8\u4f5c\u6a21\u578b\u7efc\u8ff0\u3002",
    "stars": 680,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-09T08:45:37.120717",
    "stars_source": "api",
  },
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "",
    "description": "\u5927\u8bed\u8a00\u6a21\u578b/\u591a\u6a21\u6001\u6a21\u578b\u5728\u673a\u5668\u4eba\u9886\u57df\u7684\u5e94\u7528\u8bba\u6587\u6c47\u603b\u3002",
    "stars": 44000,
    "url": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "language": "Python",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-09T08:45:37.994725",
    "stars_source": "api",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "",
    "description": "\u7a7a\u4e2d\u89c6\u89c9-\u8bed\u8a00\u5bfc\u822a(Aerial VLN)\u8bba\u6587\u6c47\u603b\uff1a\u65e0\u4eba\u673aVLN\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "stars": 53,
    "url": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "language": "Python",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-05-09T08:45:38.873930",
    "stars_source": "api",
  },
];

export const news: News[] = [
  {
    "title": "\u9ad8\u5ea6\u76f8\u5173\uff01",
    "source": "GitHub",
    "url": "https://github.com/Hmbown/DeepSeek-TUI",
    "date": "2026-05-04",
    "summary": "AI \u4ece\"\u5e2e\u4f60\u60f3\"\u8fdb\u5165\"\u5e2e\u4f60\u82b1\u94b1\"\uff0cAgentic Commerce \u5143\u5e74\n\u2b50 \u5bf9\u4f60\u7684\u4ef7\u503c\uff1a\u672a\u6765\u65e0\u4eba\u673a\u670d\u52a1\u53ef\u63a5\u5165 Agent \u652f\u4ed8\u4f53\u7cfb\uff08\u5982\u81ea\u52a8\u8ba2\u8d2d\u914d\u4ef6\uff09",
    "published_at": "2026-05-04",
    "why_it_matters": "AI \u4ece\"\u5e2e\u4f60\u60f3\"\u8fdb\u5165\"\u5e2e\u4f60\u82b1\u94b1\"\uff0cAgentic Commerce \u5143\u5e74",
    "research_axis": "robotics",
    "freshness": "fresh",
  },
  {
    "title": "\u5bf9\u4f60\u7684\u5f71\u54cd",
    "source": "GitHub",
    "url": "https://github.com/NVlabs/vla-perf",
    "date": "2026-04-24",
    "summary": "\u4ece\u5b9e\u9a8c\u5ba4\u8d70\u5411\u771f\u5b9e\u5de5\u4e1a\u4ea7\u7ebf\u7684\u5173\u952e\u4e00\u6b65\n\u2b50 \u5bf9\u4f60\u7684\u4ef7\u503c\uff1a\u591a\u673a\u534f\u540c + LLM \u4ee3\u7801\u751f\u6210\u7684\u7ed3\u5408\uff0c\u53ef\u501f\u9274\u5230\u65e0\u4eba\u673a\u7f16\u961f\u63a7\u5236",
    "published_at": "2026-04-24",
    "why_it_matters": "\u4ece\u5b9e\u9a8c\u5ba4\u8d70\u5411\u771f\u5b9e\u5de5\u4e1a\u4ea7\u7ebf\u7684\u5173\u952e\u4e00\u6b65",
    "research_axis": "robotics",
    "freshness": "aging",
  },
  {
    "title": "NVIDIA GR00T N1.6 + Cosmos Reason 2 \u53d1\u5e03",
    "source": "NVIDIA Newsroom",
    "url": "https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots",
    "date": "2026-04-01",
    "summary": "NVIDIA\u53d1\u5e03\u5f00\u6e90\u7269\u7406AI\u6a21\u578bGR00T N1.6\u548cCosmos Reason\u4e16\u754c\u6a21\u578b\uff0c\u5168\u7403\u5408\u4f5c\u4f19\u4f34\u63a8\u51fa\u4e0b\u4e00\u4ee3\u673a\u5668\u4eba\uff0c\u673a\u5668\u4eba\u7684ChatGPT\u65f6\u523b\u5df2\u81f3\u3002",
    "published_at": "2026-04-01",
    "verified": true,
    "why_it_matters": "\u5f00\u6e90\u7269\u7406AI+\u4e16\u754c\u6a21\u578b\u5bf9\u673a\u5668\u4eba\u4eff\u771f\u548c\u65e0\u4eba\u673aSim2Real\u6709\u76f4\u63a5\u53c2\u8003\u4ef7\u503c",
    "research_axis": "robotics",
    "freshness": "fresh",
  },
  {
    "title": "Unitree B2-W \u56db\u8db3\u673a\u5668\u4eba\u53d1\u5e03",
    "source": "Unitree",
    "url": "https://www.unitree.com.cn/",
    "date": "2026-03-25",
    "summary": "\u5b87\u6811\u79d1\u6280\u53d1\u5e03B2-W\u5de5\u4e1a\u56db\u8db3\u673a\u5668\u4eba\uff0c\u8d1f\u8f7d30kg\uff0c\u7eed\u822a4\u5c0f\u65f6\uff0c\u652f\u6301\u590d\u6742\u5730\u5f62\u5de1\u68c0\uff0c\u914d\u5907\u6df1\u5ea6\u76f8\u673a\u548c\u6fc0\u5149\u96f7\u8fbe\u3002",
    "published_at": "2026-03-25",
    "verified": true,
    "why_it_matters": "\u56db\u8db3\u673a\u5668\u4eba\u786c\u4ef6\u8fed\u4ee3\uff0c\u8d1f\u8f7d\u548c\u7eed\u822a\u5927\u5e45\u63d0\u5347\uff0c\u5de5\u4e1a\u5de1\u68c0\u5e94\u7528\u52a0\u901f\u843d\u5730",
    "research_axis": "robotics",
    "freshness": "fresh",
  },
  {
    "title": "DJI Air 3S \u65e0\u4eba\u673a\u53d1\u5e03",
    "source": "DJI",
    "url": "https://www.dji.com/cn/air-3s",
    "date": "2026-03-28",
    "summary": "\u5927\u7586\u53d1\u5e03Air 3S\uff0c\u914d\u59071\u82f1\u5bf8\u4e3b\u6444+70mm\u957f\u7126\u53cc\u6444\u7cfb\u7edf\uff0c\u5168\u5411\u907f\u969c\uff0c\u652f\u6301APAS 5.0\uff0c\u7eed\u822a48\u5206\u949f\uff0c\u9762\u5411\u6d88\u8d39\u7ea7\u822a\u62cd\u5e02\u573a\u3002",
    "published_at": "2026-03-28",
    "verified": true,
    "why_it_matters": "\u6d88\u8d39\u7ea7\u65e0\u4eba\u673a\u907f\u969c\u548c\u7eed\u822a\u6301\u7eed\u8fdb\u5316\uff0cDJI\u6280\u672f\u52a8\u6001",
    "research_axis": "drone",
    "freshness": "fresh",
  },
];

export const trends: Trend[] = [
  {
    "icon": "\ud83d\udce1",
    "title": "\u6570\u636e\u5f15\u64ce\u5d1b\u8d77",
    "description": "RoboWheel\u4ee3\u8868\u5177\u8eab\u667a\u80fd\u4ece\"\u5377\u6a21\u578b\"\u8f6c\u5411\"\u62fc\u6570\u636e\"\u7684\u5173\u952e\u8f6c\u6298",
  },
  {
    "icon": "\ud83d\udce1",
    "title": "\u8de8\u5177\u8eab\u8fc1\u79fb\u6210\u4e3b\u6d41",
    "description": "UniT\u3001RoboWheel\u3001MoManipVLA\u5171\u540c\u63a8\u52a8\u7edf\u4e00\u8fc1\u79fb\u8303\u5f0f",
  },
  {
    "icon": "\ud83d\udda5\ufe0f",
    "title": "\u4eff\u771f\u73af\u5883\u81ea\u52a8\u5316",
    "description": "MANSION\u7684\u8bed\u8a00\u9a71\u52a8\u573a\u666f\u751f\u6210\u964d\u4f4e\u4eff\u771f\u6784\u5efa\u6210\u672c",
  },
  {
    "icon": "\ud83d\udce1",
    "title": "\u4e2d\u56fd\u529b\u91cf\u6301\u7eed\u5f3a\u52bf",
    "description": "\u667a\u5143\u3001\u5c0f\u7c73\u3001\u67a2\u9014\u79d1\u6280\u3001\u6e05\u534e\u3001\u6e2f\u5927\u7b49\u6301\u7eed\u4ea7\u51fa",
  },
  {
    "icon": "\ud83e\udd16",
    "title": "VLA\u6548\u7387\u4f18\u5316",
    "description": "VLA-Cache\u7684training-free\u52a0\u901f\u65b9\u6cd5\u89e3\u51b3\u5b9e\u65f6\u63a7\u5236\u74f6\u9888",
  },
];
