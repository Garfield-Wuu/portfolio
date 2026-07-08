// Auto-generated at 2026-07-08T08:46:53.429407
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
    "title": "SMASH",
    "authors": "OpenClaw Scout",
    "date": "2026-04-01",
    "venue": "arXiv:2604.01158",
    "url": "https://arxiv.org/abs/2604.01158",
    "pdf": "https://arxiv.org/pdf/2604.01158",
    "tags": ["\u4eba\u5f62\u5168\u8eab\u6280\u80fd, egocentric\u89c6\u89c9"],
    "summary": "\u4eba\u5f62\u5168\u8eab\u6280\u80fd\u5b66\u4e60 egocentric\u89c6\u89c9 + \u4f4e\u5ef6\u8fdf\u611f\u77e5-\u63a7\u5236\u95ed\u73af\u3002\u5168\u8eab\u534f\u8c03\u63a7\u5236\u601d\u8def",
    "problem": "\u4eba\u5f62\u5168\u8eab\u6280\u80fd, egocentric\u89c6\u89c9\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u4eba\u5f62\u5168\u8eab\u6280\u80fd\u5b66\u4e60 egocentric\u89c6\u89c9 + \u4f4e\u5ef6\u8fdf\u611f\u77e5-\u63a7\u5236\u95ed\u73af",
    "value": "\u5168\u8eab\u534f\u8c03\u63a7\u5236\u601d\u8def",
    "why_relevant": "\u5168\u8eab\u534f\u8c03\u63a7\u5236\u601d\u8def",
    "research_axis": "Perception",
    "importance": "high",
  },
  {
    "title": "EgoSim",
    "authors": "OpenClaw Scout",
    "date": "2026-04-01",
    "venue": "arXiv:2604.01001",
    "url": "https://arxiv.org/abs/2604.01001",
    "pdf": "https://arxiv.org/pdf/2604.01001",
    "tags": ["\u7b2c\u4e00\u4eba\u79f0\u4e16\u754c\u4eff\u771f\u5668, 3D\u573a\u666f\u4e00\u81f4\u6027"],
    "summary": "\u7b2c\u4e00\u4eba\u79f0\u4e16\u754c\u4eff\u771f\u5668 3D\u573a\u666f\u4e00\u81f4\u6027 + \u8de8\u65f6\u95f4\u72b6\u6001\u66f4\u65b0 \u751f\u6210\u7a7a\u95f4\u4e00\u81f4\u7684\u4ea4\u4e92\u89c6\u9891\u3002\u4eff\u771f\u6570\u636e\u751f\u6210 + Sim2Real",
    "problem": "\u7b2c\u4e00\u4eba\u79f0\u4e16\u754c\u4eff\u771f\u5668, 3D\u573a\u666f\u4e00\u81f4\u6027\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u7b2c\u4e00\u4eba\u79f0\u4e16\u754c\u4eff\u771f\u5668 3D\u573a\u666f\u4e00\u81f4\u6027 + \u8de8\u65f6\u95f4\u72b6\u6001\u66f4\u65b0 \u751f\u6210\u7a7a\u95f4\u4e00\u81f4\u7684\u4ea4\u4e92\u89c6\u9891",
    "value": "\u4eff\u771f\u6570\u636e\u751f\u6210 + Sim2Real",
    "why_relevant": "\u4eff\u771f\u6570\u636e\u751f\u6210 + Sim2Real",
    "research_axis": "Simulation",
    "importance": "high",
  },
  {
    "title": "DVGT-2",
    "authors": "OpenClaw Scout",
    "date": "2026-04-01",
    "venue": "arXiv:2604.00813",
    "url": "https://arxiv.org/abs/2604.00813",
    "pdf": "https://arxiv.org/pdf/2604.00813",
    "tags": ["VGA\u8303\u5f0f\u66ff\u4ee3VLA, \u7a20\u5bc63D\u51e0\u4f55"],
    "summary": "VGA\u8303\u5f0f: \u51e0\u4f55\u4f18\u5148\u4e8e\u8bed\u8a00 Vision-Geometry-Action (VGA) \u66ff\u4ee3 VLA \u7a20\u5bc63D\u51e0\u4f55\u4f5c\u4e3a\u5173\u952e\u7ebf\u7d22\uff0c\u800c\u975e\u8bed\u8a00\u63cf\u8ff0\u3002\u65e0\u4eba\u673a\u7cbe\u786e\u63a7\u5236\u9700\u8981\u51e0\u4f55\u611f\u77e5",
    "problem": "VGA\u8303\u5f0f\u66ff\u4ee3VLA, \u7a20\u5bc63D\u51e0\u4f55\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "VGA\u8303\u5f0f: \u51e0\u4f55\u4f18\u5148\u4e8e\u8bed\u8a00 Vision-Geometry-Action (VGA) \u66ff\u4ee3 VLA \u7a20\u5bc63D\u51e0\u4f55\u4f5c\u4e3a\u5173\u952e\u7ebf\u7d22\uff0c\u800c\u975e\u8bed\u8a00\u63cf\u8ff0",
    "value": "\u65e0\u4eba\u673a\u7cbe\u786e\u63a7\u5236\u9700\u8981\u51e0\u4f55\u611f\u77e5",
    "why_relevant": "\u65e0\u4eba\u673a\u7cbe\u786e\u63a7\u5236\u9700\u8981\u51e0\u4f55\u611f\u77e5",
    "research_axis": "VLA",
    "importance": "high",
  },
  {
    "title": "BAT",
    "authors": "OpenClaw Scout",
    "date": "2026-04-01",
    "venue": "arXiv:2604.01064",
    "url": "https://arxiv.org/abs/2604.01064",
    "pdf": "https://arxiv.org/pdf/2604.01064",
    "tags": ["\u5728\u7ebf\u7b56\u7565\u5207\u6362, \u654f\u6377-\u7a33\u5b9a\u5e73\u8861"],
    "summary": "\u5728\u7ebf\u7b56\u7565\u5207\u6362 \u654f\u6377-\u7a33\u5b9a\u5e73\u8861\u3002\u65e0\u4eba\u673a\u60ac\u505c/\u673a\u52a8\u6a21\u5f0f\u5207\u6362",
    "problem": "\u5728\u7ebf\u7b56\u7565\u5207\u6362, \u654f\u6377-\u7a33\u5b9a\u5e73\u8861\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u5728\u7ebf\u7b56\u7565\u5207\u6362 \u654f\u6377-\u7a33\u5b9a\u5e73\u8861",
    "value": "\u65e0\u4eba\u673a\u60ac\u505c/\u673a\u52a8\u6a21\u5f0f\u5207\u6362",
    "why_relevant": "\u65e0\u4eba\u673a\u60ac\u505c/\u673a\u52a8\u6a21\u5f0f\u5207\u6362",
    "research_axis": "VLA",
    "importance": "high",
  },
  {
    "title": "PanoAir",
    "authors": "OpenClaw Scout",
    "date": "2026-04-01",
    "venue": "arXiv:2604.00852",
    "url": "https://arxiv.org/abs/2604.00852",
    "pdf": "https://arxiv.org/pdf/2604.00852",
    "tags": ["\u5168\u666fVI-SLAM, \u5d4c\u5165\u5f0f\u5e73\u53f0"],
    "summary": "\u5168\u666fVI-SLAM 360\u00b0\u611f\u77e5, \u5d4c\u5165\u5f0f\u5e73\u53f0\u9a8c\u8bc1 \u5168\u666f\u7279\u5f81\u63d0\u53d6+loop closure\u3002\u5ba4\u5185VLN\u5b9a\u4f4d\u57fa\u7840",
    "problem": "\u5168\u666fVI-SLAM, \u5d4c\u5165\u5f0f\u5e73\u53f0\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u5168\u666fVI-SLAM 360\u00b0\u611f\u77e5, \u5d4c\u5165\u5f0f\u5e73\u53f0\u9a8c\u8bc1 \u5168\u666f\u7279\u5f81\u63d0\u53d6+loop closure",
    "value": "\u5ba4\u5185VLN\u5b9a\u4f4d\u57fa\u7840",
    "why_relevant": "\u5ba4\u5185VLN\u5b9a\u4f4d\u57fa\u7840",
    "research_axis": "Perception",
    "importance": "high",
  },
  {
    "title": "Florence-2 ROS2",
    "authors": "OpenClaw Scout",
    "date": "2026-04-01",
    "venue": "arXiv:2604.01179",
    "url": "https://arxiv.org/abs/2604.01179",
    "pdf": "https://arxiv.org/pdf/2604.01179",
    "tags": ["VLM ROS2\u4e2d\u95f4\u4ef6\u5c01\u88c5"],
    "summary": "VLM\u4e2d\u95f4\u4ef6 \u6807\u51c6\u5316VLM\u96c6\u6210\u5230ROS2\u3002MCP\u5de5\u5177\u5c01\u88c5\u53c2\u8003",
    "problem": "VLM ROS2\u4e2d\u95f4\u4ef6\u5c01\u88c5\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "VLM\u4e2d\u95f4\u4ef6 \u6807\u51c6\u5316VLM\u96c6\u6210\u5230ROS2",
    "value": "MCP\u5de5\u5177\u5c01\u88c5\u53c2\u8003",
    "why_relevant": "MCP\u5de5\u5177\u5c01\u88c5\u53c2\u8003",
    "research_axis": "VLA",
    "importance": "high",
  },
  {
    "title": "LiPS",
    "authors": "OpenClaw Scout",
    "date": "2026-04-01",
    "venue": "arXiv:2604.00634",
    "url": "https://arxiv.org/abs/2604.00634",
    "pdf": "https://arxiv.org/pdf/2604.00634",
    "tags": ["\u8f7b\u91cf\u7ea7\u5168\u666f\u5206\u5272, \u8fb9\u7f18\u90e8\u7f72"],
    "summary": "\u8f7b\u91cf\u7ea7\u5168\u666f\u5206\u5272 \u8d44\u6e90\u53d7\u9650\u5e73\u53f0\u9ad8\u6548\u5206\u5272\u3002\u673a\u8f7d\u5b9e\u65f6\u611f\u77e5",
    "problem": "\u8f7b\u91cf\u7ea7\u5168\u666f\u5206\u5272, \u8fb9\u7f18\u90e8\u7f72\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u8f7b\u91cf\u7ea7\u5168\u666f\u5206\u5272 \u8d44\u6e90\u53d7\u9650\u5e73\u53f0\u9ad8\u6548\u5206\u5272",
    "value": "\u673a\u8f7d\u5b9e\u65f6\u611f\u77e5",
    "why_relevant": "\u673a\u8f7d\u5b9e\u65f6\u611f\u77e5",
    "research_axis": "Perception",
    "importance": "high",
  },
  {
    "title": "StreamingVLA",
    "authors": "OpenClaw Scout",
    "date": "2026-03-28",
    "venue": "arXiv:2603.28565",
    "url": "https://arxiv.org/abs/2603.28565",
    "pdf": "https://arxiv.org/pdf/2603.28565",
    "tags": ["Action Flow Matching, 2.4x\u52a0\u901f"],
    "summary": "\u6d41\u5f0fVLA\u63a8\u7406\u4f18\u5316 Action Flow Matching\u66ff\u4ee3action chunking Action saliency-aware adaptive observation\u3002\u65e0\u4eba\u673a\u5b9e\u65f6\u63a7\u5236\u52a0\u901f",
    "problem": "Action Flow Matching, 2.4x\u52a0\u901f\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u6d41\u5f0fVLA\u63a8\u7406\u4f18\u5316 Action Flow Matching\u66ff\u4ee3action chunking Action saliency-aware adaptive observation",
    "value": "\u65e0\u4eba\u673a\u5b9e\u65f6\u63a7\u5236\u52a0\u901f",
    "why_relevant": "\u65e0\u4eba\u673a\u5b9e\u65f6\u63a7\u5236\u52a0\u901f",
    "research_axis": "VLA",
    "importance": "high",
  }
];

export const github: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "PX4",
    "description": "\u5f00\u6e90\u65e0\u4eba\u673a\u81ea\u52a8\u9a7e\u9a76\u8f6f\u4ef6\uff0c\u652f\u6301\u591a\u65cb\u7ffc\u3001\u56fa\u5b9a\u7ffc\u3001VTOL\u7b49\u3002\u5b66\u672f\u754c\u6700\u6d41\u884c\u7684\u65e0\u4eba\u673a\u7814\u7a76\u5e73\u53f0\u3002",
    "stars": 12100,
    "url": "https://github.com/PX4/PX4-Autopilot",
    "category": "Aircraft",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:24.724399",
    "stars_source": "api",
  },
  {
    "name": "Prometheus (amov-lab)",
    "owner": "amov-lab",
    "description": "PX4\u65e0\u4eba\u673a\u81ea\u4e3b\u98de\u884c\u7efc\u5408\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u76ee\u6807\u8ffd\u8e2a\u3001\u96c6\u7fa4\u63a7\u5236\u3001SLAM\u7b4930+\u5e94\u7528\u6a21\u5757\u3002\u7d2f\u8ba13.1k+ stars\u3002",
    "stars": 3200,
    "url": "https://github.com/amov-lab/Prometheus",
    "category": "Aircraft",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:26.180473",
    "stars_source": "api",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent\u7cfb\u7edf\uff0c\u4f7f\u7528MAVSDK-Python\u4f5c\u4e3a\u5de5\u5177\uff0cLangGraph\u7f16\u6392\u4efb\u52a1\u89c4\u5212\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u63a7\u5236\u65e0\u4eba\u673a\u3002",
    "stars": 22,
    "url": "https://github.com/EmergenceAI/embodied-drone-agents",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:27.915736",
    "stars_source": "api",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM\u4e0eMAVLink\u65e0\u4eba\u673a\u7684\u901a\u4fe1\uff0c\u652f\u6301\u901a\u8fc7MCP\u534f\u8bae\u63a7\u5236PX4\u65e0\u4eba\u673a\u3002",
    "stars": 21,
    "url": "https://github.com/ion-g-ion/MAVLinkMCP",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:29.512337",
    "stars_source": "api",
  },
  {
    "name": "AerialVLA",
    "owner": "XuPeng23",
    "description": "\u7aef\u5230\u7aef\u89c6\u89c9-\u8bed\u8a00-\u52a8\u4f5c\u65e0\u4eba\u673a\u5bfc\u822a\u6a21\u578b\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u6307\u4ee4\u63a7\u5236\u65e0\u4eba\u673a\u3002",
    "stars": 0,
    "url": "https://github.com/XuPeng23/AerialVLA",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["VLA", "UAV", "Navigation", "End-to-End"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:31.438166",
    "stars_source": "api",
  },
  {
    "name": "UAVs_Meet_LLMs",
    "owner": "Hub-Tian",
    "description": "UAV+LLM\u7efc\u5408\u8d44\u6e90\u5e93\uff0c\u6c47\u603b\u65e0\u4eba\u673a\u4e0e\u5927\u8bed\u8a00\u6a21\u578b\u7ed3\u5408\u7684\u8bba\u6587\u3001\u9879\u76ee\u3001\u6570\u636e\u96c6\u3002",
    "stars": 500,
    "url": "https://github.com/Hub-Tian/UAVs_Meet_LLMs",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["UAV", "LLM", "Survey", "Resources"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:32.935918",
    "stars_source": "api",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "\u7a7a\u4e2d\u89c6\u89c9-\u8bed\u8a00\u5bfc\u822a(Aerial VLN)\u8bba\u6587\u6c47\u603b\uff1a\u65e0\u4eba\u673aVLN\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "stars": 59,
    "url": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:34.529541",
    "stars_source": "api",
  },
  {
    "name": "LeRobot",
    "owner": "huggingface",
    "description": "HuggingFace\u5f00\u6e90\u673a\u5668\u4eba\u5b66\u4e60\u5e93\uff0c\u652f\u6301\u591a\u79cd\u673a\u5668\u4eba(SO-100/SO-ARM100/101)\u3001\u591a\u79cdVLA\u6a21\u578b(\u03c00\u3001SmolVLA\u7b49)\u3001\u7aef\u5230\u7aef\u8bad\u7ec3\u63a8\u7406\u3002Garfield\u9879\u76ee\u6838\u5fc3\u6846\u67b6\u3002",
    "stars": 25600,
    "url": "https://github.com/huggingface/lerobot",
    "category": "Robotics",
    "language": "Python",
    "tags": ["LeRobot", "VLA", "Robot", "HuggingFace", "SO-ARM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:35.994764",
    "stars_source": "api",
  },
  {
    "name": "dimensionalOS",
    "owner": "dimensionalOS",
    "description": "Agentic OS for physical space\uff0c\u81ea\u7136\u8bed\u8a00\u63a7\u5236\u591a\u79cd\u673a\u5668\u4eba(\u542b\u65e0\u4eba\u673a)\uff0c\u652f\u6301\u591a\u79cdAI\u6a21\u578b\u548c\u5de5\u5177\u3002",
    "stars": 3600,
    "url": "https://github.com/dimensionalOS/dimos",
    "category": "Robotics",
    "language": "Python",
    "tags": ["Agent", "OS", "Robot", "UAV", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:37.425860",
    "stars_source": "api",
  },
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "\u5927\u8bed\u8a00\u6a21\u578b/\u591a\u6a21\u6001\u6a21\u578b\u5728\u673a\u5668\u4eba\u9886\u57df\u7684\u5e94\u7528\u8bba\u6587\u6c47\u603b\u3002",
    "stars": 4400,
    "url": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "category": "Robotics",
    "language": "Python",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:38.980176",
    "stars_source": "api",
  },
  {
    "name": "awesome-embodied-vla-va-vln",
    "owner": "jonyzhang2023",
    "description": "Embodied AI/VLA/VLN\u7efc\u8ff0\u5217\u8868\uff0c\u6c47\u603b\u5177\u8eab\u667a\u80fd\u3001\u89c6\u89c9-\u8bed\u8a00-\u52a8\u4f5c\u6a21\u578b\u3001\u89c6\u89c9\u8bed\u8a00\u5bfc\u822a\u76f8\u5173\u8bba\u6587\u3002",
    "stars": 3300,
    "url": "https://github.com/jonyzhang2023/awesome-embodied-vla-va-vln",
    "category": "Robotics",
    "language": "Python",
    "tags": ["Embodied AI", "VLA", "VLN", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:40.491185",
    "stars_source": "api",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA\u8bba\u6587\u6c47\u603b\uff1a\u5f3a\u5316\u5b66\u4e60\u89c6\u89c9-\u8bed\u8a00-\u52a8\u4f5c\u6a21\u578b\u7efc\u8ff0\u3002",
    "stars": 771,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "category": "Robotics",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:42.011682",
    "stars_source": "api",
  },
  {
    "name": "reflex-vla",
    "owner": "FastCrest",
    "description": "\u4e00\u952e\u90e8\u7f72VLA\u6a21\u578b\u5230\u8fb9\u7f18GPU\uff0c\u652f\u6301\u591a\u79cdVLA\u6a21\u578b\u7684\u8fb9\u7f18\u4f18\u5316\u63a8\u7406\u3002",
    "stars": 0,
    "url": "https://github.com/FastCrest/reflex-vla",
    "category": "Edge",
    "language": "Python",
    "tags": ["VLA", "Edge", "GPU", "Deployment"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:43.992454",
    "stars_source": "api",
  },
  {
    "name": "CarlaAir",
    "owner": "louiszengCN",
    "description": "CARLA + \u65e0\u4eba\u673a\u7a7a\u5730\u4e00\u4f53\u4eff\u771f\u5e73\u53f0\uff0c\u7edf\u4e00AirSim + CARLA\u5230\u5355\u4e00Unreal Engine\u8fdb\u7a0b\u3002",
    "stars": 1000,
    "url": "https://github.com/louiszengCN/CarlaAir",
    "category": "Simulation",
    "language": "C++",
    "tags": ["Simulation", "UAV", "CARLA", "AirSim"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:45.602266",
    "stars_source": "api",
  },
  {
    "name": "skynet",
    "owner": "hybridgroup",
    "description": "LLM + MCP\u534f\u8bae\u63a7\u5236\u771f\u5b9e\u673a\u5668\u4eba\u548c\u65e0\u4eba\u673a\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u63a7\u5236\u591a\u79cd\u5e73\u53f0\u3002",
    "stars": 53,
    "url": "https://github.com/hybridgroup/skynet",
    "category": "Robotics",
    "language": "Python",
    "tags": ["LLM", "MCP", "Robot", "UAV", "Agent"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:47.226544",
    "stars_source": "api",
  },
  {
    "name": "Awesome-VLA-UAVs",
    "owner": "TheBrainLab",
    "description": "VLA/VLN\u65e0\u4eba\u673a\u8bba\u6587/\u6a21\u578b/\u6570\u636e\u96c6\u6c47\u603b\uff0c\u7a7a\u4e2d\u673a\u5668\u4ebaVLA\u65b9\u5411\u6700\u5168\u8d44\u6e90\u5217\u8868\u3002",
    "stars": 60,
    "url": "https://github.com/TheBrainLab/Awesome-VLA-UAVs",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["VLA", "UAV", "VLN", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:48.910743",
    "stars_source": "api",
  }
];

export const news: News[] = [
  {
    "title": "\u81ea\u53d8\u91cf\u53d1\u5e03\u8de8\u6a21\u6001\u5177\u8eab\u52a8\u4f5c\u5206\u8bcd\u5668 X-Tokenizer\uff0c\u591a\u6a21\u6001\u5bf9\u9f50 +13.5%",
    "source": "\u7f51\u7edc",
    "url": "http://damoai.com.cn/archives/16732",
    "date": "_2026-07-0",
    "summary": "> \ud83d\udcc4 \u5b8c\u6574 PDF \u7248\u672c\uff1a`reports/daily_briefing/briefing_2026-07-05.pdf` \u73e0\u6d77\uff1a\u591a\u4e91\u8f6c\u96f7\u9635\u96e8\uff0c\u6c14\u6e29 27.8~30.7\u2103\uff0c\u5f53\u524d 29.2\u2103 \u00b7 \u6e7f\u5ea6 79% \u00b7 \u98ce\u901f 23.8 km/h\uff08\u5348\u540e\u6709\u96f7\u9635\u96e8\uff09 - \u81ea\u53d8\u91cf\u53d1\u5e03\u8de8\u6a21\u6001\u5177\u8eab\u52a8\u4f5c\u5206\u8bcd\u5668 X-Tokenizer\uff0c\u591a\u6a21\u6001\u5bf9\u9f50 +13.5% \u2014 \u52a8\u4f5c tokenizer \u8ba9\u957f\u7a0b\u4efb\u52a1\u6027\u80fd\u63d0\u5347",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "\u5bf9\u4f60\u7684\u4ef7\u503c",
    "source": "\u7f51\u7edc",
    "url": "https://www.163.com/dy/article/L0NI4D5C0511C4AA.html",
    "date": "_2026-07-0",
    "summary": "> \ud83d\udcc4 \u5b8c\u6574 PDF \u7248\u672c\uff1a`reports/daily_briefing/briefing_2026-07-04.pdf` \u73e0\u6d77 \u9635\u96e8\u8f6c\u591a\u4e91 26~30\u2103 | \u5f53\u524d 29\u2103 \u6e7f\u5ea679% | \u4e1c\u5317\u98ce 29km/h - [\u667a\u8c31\u5f00\u6e90\u5177\u8eab\u667a\u80fd\u6a21\u578b + 1000 \u5c0f\u65f6\u673a\u5668\u4eba\u6570\u636e\u96c6](https://www.163.com/dy/article/L0NI4D5C0511C4AA.html)",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "\u5bf9\u4f60\u7684\u4ef7\u503c",
    "source": "\u7f51\u7edc",
    "url": "https://36kr.com/p/3876735615758341",
    "date": "_2026-07-0",
    "summary": "> \ud83d\udcc4 \u5b8c\u6574 PDF \u7248\u672c\uff1a`reports/daily_briefing/briefing_2026-07-03.pdf` \u5927\u96e8\u8f6c\u66b4\u96e8 - [\u5e93\u8428\u79d1\u6280\u53d1\u5e03\u5168\u6a21\u6001\u5177\u8eab\u6a21\u578bKusa Omni-CTS\u4e0e\u4e13\u7528\u64cd\u4f5c\u7cfb\u7edfKusa OS\uff0c\u52a9\u529b\u57ce\u5e02\u670d\u52a1\u673a\u5668\u4eba\u4ece\"\u6267\u884c\u8005\"\u53d8\u4e3a\"\u601d\u8003\u8005\"-36\u6c2a](https://36kr.com/p/3876735615758341)",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "\u7f8e\u56e2\u53d1\u5e03 LongCat-2.0 \u4e07\u4ebf\u53c2\u6570\u5927\u6a21\u578b\uff08\u9996\u4e2a\u5168\u56fd\u4ea7\u7b97\u529b\u8bad\u7ec3\uff09",
    "source": "\u7f51\u7edc",
    "url": "https://www.cs.com.cn/ssgs/01/2026/06/30/detail_2026063010021451.html",
    "date": "_2026-07-0",
    "summary": "> \ud83d\udcc4 \u5b8c\u6574 PDF \u7248\u672c\uff1a`reports/daily_briefing/briefing_2026-07-01.pdf` \u73e0\u6d77\uff1a\u96f7\u9635\u96e8\uff0c27\u2103-33\u2103\uff0c\u65e0\u6301\u7eed\u98ce\u5411 3-4\u7ea7 - \u7f8e\u56e2\u53d1\u5e03 LongCat-2.0 \u4e07\u4ebf\u53c2\u6570\u5927\u6a21\u578b\uff08\u9996\u4e2a\u5168\u56fd\u4ea7\u7b97\u529b\u8bad\u7ec3\uff09",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
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
    "research_axis": "Robotics",
    "freshness": "fresh",
  }
];

export const trends: Trend[] = [
  {
    "icon": "\ud83e\udd16",
    "title": "VGA > VLA for \u63a7\u5236",
    "description": "\u7cbe\u786e\u63a7\u5236\u4efb\u52a1\u9700\u8981\u51e0\u4f55\u4f18\u5148\u800c\u975e\u8bed\u8a00\u4f18\u5148",
  },
  {
    "icon": "\ud83d\udda5\ufe0f",
    "title": "\u7b2c\u4e00\u4eba\u79f0\u4eff\u771f",
    "description": "EgoSim\u7b49\u89e3\u51b33D\u4e00\u81f4\u6027\u95ee\u9898",
  },
  {
    "icon": "\ud83d\udc41\ufe0f",
    "title": "\u5168\u666f\u611f\u77e5",
    "description": "PanoAir\u7b49\u7a81\u7834FoV\u9650\u5236",
  },
  {
    "icon": "\ud83d\udd27",
    "title": "\u4e2d\u95f4\u4ef6\u6807\u51c6\u5316",
    "description": "ROS2\u5c01\u88c5\u964d\u4f4eVLM\u96c6\u6210\u95e8\u69db",
  },
  {
    "icon": "\u26a1",
    "title": "\u8fb9\u7f18\u90e8\u7f72",
    "description": "LiPS\u7b49\u8f7b\u91cf\u7ea7\u65b9\u6848\u9002\u914d\u5d4c\u5165\u5f0f",
  }
];
