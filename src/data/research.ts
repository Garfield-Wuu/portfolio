// Auto-generated at 2026-04-20T08:47:13.795473
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
    "title": "RAD-2",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15306",
    "date": "2026-04-15",
    "summary": "\u751f\u6210-\u5224\u522b\u5668RL\u8fd0\u52a8\u89c4\u5212 \u2b50\u2b50\u2b50\u2b50 Generator-Diffusion + Discriminator\u67b6\u6784\u89e3\u51b3\u968f\u673a\u4e0d\u7a33\u5b9a\u6027 \u591a\u6a21\u6001\u672a\u6765\u4e0d\u786e\u5b9a\u6027\u5efa\u6a21\u3002\u65e0\u4eba\u673a\u591a\u5019\u9009\u8f68\u8ff9\u751f\u6210\u4e0e\u7b5b\u9009",
    "problem": "\u751f\u6210-\u5224\u522b\u5668RL\u8fd0\u52a8\u89c4\u5212\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u751f\u6210-\u5224\u522b\u5668RL\u8fd0\u52a8\u89c4\u5212 \u2b50\u2b50\u2b50\u2b50 Generator-Diffusion + Discriminator\u67b6\u6784\u89e3\u51b3\u968f\u673a\u4e0d\u7a33\u5b9a\u6027 \u591a\u6a21\u6001\u672a\u6765\u4e0d\u786e\u5b9a\u6027\u5efa\u6a21",
    "value": "\u65e0\u4eba\u673a\u591a\u5019\u9009\u8f68\u8ff9\u751f\u6210\u4e0e\u7b5b\u9009",
    "why_relevant": "\u65e0\u4eba\u673a\u591a\u5019\u9009\u8f68\u8ff9\u751f\u6210\u4e0e\u7b5b\u9009",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15306",
    "pdf_url": "https://arxiv.org/pdf/2604.15306",
    "tags": ["\u751f\u6210-\u5224\u522b\u5668RL\u8fd0\u52a8\u89c4\u5212"],
    "importance": "high",
  },
  {
    "title": "Viewpoint Rotation",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15294",
    "date": "2026-04-15",
    "summary": "LLM/VLM\u7a7a\u95f4\u63a8\u7406\u53ef\u89e3\u91ca\u6027 \u2b50\u2b50\u2b50\u2b50 \u65e0\u89c6\u89c9\u8f93\u5165\u7684\u7a7a\u95f4\u65cb\u8f6c\u7406\u89e3\u80fd\u529b \u8bed\u8a00\u53ef\u4ee5\u4f5c\u4e3a\u7a7a\u95f4\u63a8\u7406\u7684\u8f7d\u4f53\u3002\u81ea\u7136\u8bed\u8a00\u2192\u7a7a\u95f4\u610f\u56fe\u6620\u5c04\u53c2\u8003",
    "problem": "LLM/VLM\u7a7a\u95f4\u63a8\u7406\u53ef\u89e3\u91ca\u6027\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "LLM/VLM\u7a7a\u95f4\u63a8\u7406\u53ef\u89e3\u91ca\u6027 \u2b50\u2b50\u2b50\u2b50 \u65e0\u89c6\u89c9\u8f93\u5165\u7684\u7a7a\u95f4\u65cb\u8f6c\u7406\u89e3\u80fd\u529b \u8bed\u8a00\u53ef\u4ee5\u4f5c\u4e3a\u7a7a\u95f4\u63a8\u7406\u7684\u8f7d\u4f53",
    "value": "\u81ea\u7136\u8bed\u8a00\u2192\u7a7a\u95f4\u610f\u56fe\u6620\u5c04\u53c2\u8003",
    "why_relevant": "\u81ea\u7136\u8bed\u8a00\u2192\u7a7a\u95f4\u610f\u56fe\u6620\u5c04\u53c2\u8003",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.15294",
    "pdf_url": "https://arxiv.org/pdf/2604.15294",
    "tags": ["LLM/VLM\u7a7a\u95f4\u63a8\u7406\u53ef\u89e3\u91ca\u6027"],
    "importance": "high",
  },
  {
    "title": "Safe Human-Robot Collab",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15221",
    "date": "2026-04-15",
    "summary": "\u5171\u5f62\u9884\u6d4b\u5b89\u5168\u4fdd\u8bc1\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "problem": "\u5171\u5f62\u9884\u6d4b\u5b89\u5168\u4fdd\u8bc1\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u5171\u5f62\u9884\u6d4b\u5b89\u5168\u4fdd\u8bc1",
    "value": "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    "why_relevant": "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15221",
    "pdf_url": "https://arxiv.org/pdf/2604.15221",
    "tags": ["\u5171\u5f62\u9884\u6d4b\u5b89\u5168\u4fdd\u8bc1"],
    "importance": "high",
  },
  {
    "title": "Multi-UAV Rigid-Payload",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15074",
    "date": "2026-04-15",
    "summary": "\u7ea7\u8054\u8fd0\u8f93\u8f68\u8ff9\u89c4\u5212\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "problem": "\u7ea7\u8054\u8fd0\u8f93\u8f68\u8ff9\u89c4\u5212\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u7ea7\u8054\u8fd0\u8f93\u8f68\u8ff9\u89c4\u5212",
    "value": "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    "why_relevant": "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15074",
    "pdf_url": "https://arxiv.org/pdf/2604.15074",
    "tags": ["\u7ea7\u8054\u8fd0\u8f93\u8f68\u8ff9\u89c4\u5212"],
    "importance": "high",
  },
  {
    "title": "RL-STPA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15201",
    "date": "2026-04-15",
    "summary": "\u5b89\u5168\u5173\u952eRL\u7cfb\u7edf\u8bba\u5206\u6790\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "problem": "\u5b89\u5168\u5173\u952eRL\u7cfb\u7edf\u8bba\u5206\u6790\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u5b89\u5168\u5173\u952eRL\u7cfb\u7edf\u8bba\u5206\u6790",
    "value": "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    "why_relevant": "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15201",
    "pdf_url": "https://arxiv.org/pdf/2604.15201",
    "tags": ["\u5b89\u5168\u5173\u952eRL\u7cfb\u7edf\u8bba\u5206\u6790"],
    "importance": "high",
  },
  {
    "title": "NEAT-NC",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15076",
    "date": "2026-04-15",
    "summary": "\u795e\u7ecf\u8fdb\u5316\u5bfc\u822a\u7ec6\u80de GECCO26\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "problem": "\u795e\u7ecf\u8fdb\u5316\u5bfc\u822a\u7ec6\u80de GECCO26\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u795e\u7ecf\u8fdb\u5316\u5bfc\u822a\u7ec6\u80de GECCO26",
    "value": "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    "why_relevant": "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    "research_axis": "Navigation",
    "link": "https://arxiv.org/abs/2604.15076",
    "pdf_url": "https://arxiv.org/pdf/2604.15076",
    "tags": ["\u795e\u7ecf\u8fdb\u5316\u5bfc\u822a\u7ec6\u80de GECCO26"],
    "importance": "high",
  },
  {
    "title": "GlobalSplat",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15284",
    "date": "2026-04-15",
    "summary": "\u524d\u99883DGS \u2b50\u2b50\u2b50\u2b50 78ms\u5355\u6b21\u524d\u5411\u63a8\u7406\uff0c4MB\u5360\u7528\uff0c16K Gaussians \"Align first, decode later\"\u539f\u5219\u3002\u5ba4\u5185VLN\u5b9e\u65f63D\u573a\u666f\u91cd\u5efa",
    "problem": "\u524d\u99883DGS, 78ms, 16K Gaussians\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u524d\u99883DGS \u2b50\u2b50\u2b50\u2b50 78ms\u5355\u6b21\u524d\u5411\u63a8\u7406\uff0c4MB\u5360\u7528\uff0c16K Gaussians \"Align first, decode later\"\u539f\u5219",
    "value": "\u5ba4\u5185VLN\u5b9e\u65f63D\u573a\u666f\u91cd\u5efa",
    "why_relevant": "\u5ba4\u5185VLN\u5b9e\u65f63D\u573a\u666f\u91cd\u5efa",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15284",
    "pdf_url": "https://arxiv.org/pdf/2604.15284",
    "tags": ["\u524d\u99883DGS, 78ms, 16K Gaussians"],
    "importance": "high",
  },
  {
    "title": "Bi-CMPStereo",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15312",
    "date": "2026-04-15",
    "summary": "\u4e8b\u4ef6-\u5e27\u7acb\u4f53\u5339\u914d \u2b50\u2b50\u2b50\u2b50 \u53cc\u5411\u8de8\u6a21\u6001\u63d0\u793a\u878d\u5408\u8bed\u4e49\u548c\u7ed3\u6784\u7279\u5f81 \u9ad8\u901f\u8fd0\u52a8\u548c\u6311\u6218\u6027\u7167\u660e\u4e0b\u9c81\u68d23D\u611f\u77e5\u3002\u65e0\u4eba\u673a\u9ad8\u901f\u98de\u884c\u89c6\u89c9\u9c81\u68d2\u6027",
    "problem": "\u4e8b\u4ef6-\u5e27\u8de8\u6a21\u6001\u7acb\u4f53\u5339\u914d\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u4e8b\u4ef6-\u5e27\u7acb\u4f53\u5339\u914d \u2b50\u2b50\u2b50\u2b50 \u53cc\u5411\u8de8\u6a21\u6001\u63d0\u793a\u878d\u5408\u8bed\u4e49\u548c\u7ed3\u6784\u7279\u5f81 \u9ad8\u901f\u8fd0\u52a8\u548c\u6311\u6218\u6027\u7167\u660e\u4e0b\u9c81\u68d23D\u611f\u77e5",
    "value": "\u65e0\u4eba\u673a\u9ad8\u901f\u98de\u884c\u89c6\u89c9\u9c81\u68d2\u6027",
    "why_relevant": "\u65e0\u4eba\u673a\u9ad8\u901f\u98de\u884c\u89c6\u89c9\u9c81\u68d2\u6027",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15312",
    "pdf_url": "https://arxiv.org/pdf/2604.15312",
    "tags": ["\u4e8b\u4ef6-\u5e27\u8de8\u6a21\u6001\u7acb\u4f53\u5339\u914d"],
    "importance": "high",
  },
];

export const githubProjects: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "PX4",
    "description": "\u5f00\u6e90\u65e0\u4eba\u673a\u81ea\u52a8\u9a7e\u9a76\u8f6f\u4ef6\uff0c\u652f\u6301\u591a\u65cb\u7ffc\u3001\u56fa\u5b9a\u7ffc\u3001VTOL\u7b49\u3002\u5b66\u672f\u754c\u6700\u6d41\u884c\u7684\u65e0\u4eba\u673a\u7814\u7a76\u5e73\u53f0\u3002",
    "stars": 11500,
    "language": "C++",
    "link": "https://github.com/PX4/PX4-Autopilot",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:10.321352",
    "stars_source": "api",
  },
  {
    "name": "Prometheus (amov-lab)",
    "owner": "amov-lab",
    "description": "PX4\u65e0\u4eba\u673a\u81ea\u4e3b\u98de\u884c\u7efc\u5408\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u76ee\u6807\u8ffd\u8e2a\u3001\u96c6\u7fa4\u63a7\u5236\u3001SLAM\u7b4930+\u5e94\u7528\u6a21\u5757\u3002\u7d2f\u8ba13.1k+ stars\u3002",
    "stars": 3100,
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:11.272875",
    "stars_source": "api",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent\u7cfb\u7edf\uff0c\u4f7f\u7528MAVSDK-Python\u4f5c\u4e3a\u5de5\u5177\uff0cLangGraph\u7f16\u6392\u4efb\u52a1\u89c4\u5212\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u63a7\u5236\u65e0\u4eba\u673a\u3002",
    "stars": 19,
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:12.259640",
    "stars_source": "api",
  },
  {
    "name": "llm-uav (Atmaca)",
    "owner": "furkanisikay",
    "description": "\u96c6\u6210Gemma 3 4B\u4e0e\u65e0\u4eba\u673a\u63a7\u5236\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u6307\u4ee4\uff0c\u8fb9\u7f18\u90e8\u7f72\u3002",
    "stars": 0,
    "language": "Python",
    "link": "https://github.com/furkanisikay/llm-uav",
    "tags": ["LLM", "UAV", "Edge AI", "NLP"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:13.237577",
    "stars_source": "api",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM\u4e0eMAVLink\u65e0\u4eba\u673a\u7684\u901a\u4fe1\uff0c\u652f\u6301\u901a\u8fc7MCP\u534f\u8bae\u63a7\u5236PX4\u65e0\u4eba\u673a\u3002",
    "stars": 16,
    "language": "Python",
    "link": "https://github.com/ion-g-ion/MAVLinkMCP",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:14.155294",
    "stars_source": "api",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA\u8bba\u6587\u6c47\u603b\uff1a\u5f3a\u5316\u5b66\u4e60\u89c6\u89c9-\u8bed\u8a00-\u52a8\u4f5c\u6a21\u578b\u7efc\u8ff0\u3002",
    "stars": 636,
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:15.072341",
    "stars_source": "api",
  },
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "\u5927\u8bed\u8a00\u6a21\u578b/\u591a\u6a21\u6001\u6a21\u578b\u5728\u673a\u5668\u4eba\u9886\u57df\u7684\u5e94\u7528\u8bba\u6587\u6c47\u603b\u3002",
    "stars": 4300,
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:16.026959",
    "stars_source": "api",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "\u7a7a\u4e2d\u89c6\u89c9-\u8bed\u8a00\u5bfc\u822a(Aerial VLN)\u8bba\u6587\u6c47\u603b\uff1a\u65e0\u4eba\u673aVLN\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "stars": 51,
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:16.993113",
    "stars_source": "api",
  },
];

export const news: News[] = [
  {
    "title": "openai-agents-python \u2b50 \u70ed\u95e8",
    "source": "GitHub",
    "url": "https://github.com/openai/openai-agents-python",
    "date": "_2026-04-2",
    "summary": "Python | \u6765\u6e90\uff1aOpenAI \ud83d\udca1 \u6838\u5fc3\uff1aOpenAI \u591a\u667a\u80fd\u4f53\u5de5\u4f5c\u6d41\u6846\u67b6  https://github.com/openai/openai-agents-python",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "ExpressLRS \u2b50 \u6d3b\u8dc3",
    "source": "GitHub",
    "url": "https://github.com/ExpressLRS/ExpressLRS",
    "date": "_2026-04-2",
    "summary": "C | \u6765\u6e90\uff1aExpressLRS \ud83d\udca1 \u6838\u5fc3\uff1a\u9ad8\u6027\u80fd\u5f00\u6e90\u65e0\u7ebf\u7535\u63a7\u5236\u94fe\u8def \ud83c\udfaf \u4eae\u70b9\uff1a",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "esp-drone \u2b50 \u6d3b\u8dc3",
    "source": "GitHub",
    "url": "https://github.com/espressif/esp-drone",
    "date": "_2026-04-2",
    "summary": "C | \u6765\u6e90\uff1aEspressif \ud83d\udca1 \u6838\u5fc3\uff1aESP32 \u7cfb\u5217 SoC \u7684\u8ff7\u4f60\u65e0\u4eba\u673a/\u56db\u65cb\u7ffc\u56fa\u4ef6  https://github.com/espressif/esp-drone",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "SwarmGPT\uff1aLLM \u63a7\u5236\u65e0\u4eba\u673a\u8702\u7fa4\u7f16\u821e",
    "source": "GitHub",
    "url": "https://utiasdsl.github.io/swarm_GPT/",
    "date": "_2026-04-1",
    "summary": "*\uff1a\u9996\u4e2a\u5c06 LLM \u4e0e\u5b89\u5168\u8702\u7fa4\u8fd0\u52a8\u89c4\u5212\u7ed3\u5408\u7684\u7cfb\u7edf\n- \u7528\u6237\u901a\u8fc7\u81ea\u7136\u8bed\u8a00\u6307\u4ee4\u81ea\u52a8\u751f\u6210\u540c\u6b65\u65e0\u4eba\u673a\u8868\u6f14\n- \u96c6\u6210\u5b89\u5168\u7ea6\u675f\u7684\u591a\u673a\u534f\u540c\u89c4\u5212",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
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
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  },
];

export const trends: string[] = [
  {"icon": "\ud83e\udd16", "title": "\u9a8c\u8bc1\u5c42\u6210\u4e3aVLA\u6807\u914d", "description": "COVER-VLA\u8bc1\u660e\u63a8\u7406\u65f6\u9a8c\u8bc1\u6bd4\u8bad\u7ec3\u65f6\u4f18\u5316\u66f4\u9ad8\u6548"},
  {"icon": "\ud83d\udce1", "title": "\u6269\u6563+\u5224\u522b\u5668", "description": "RAD-2\u7b49\u89e3\u51b3\u6269\u6563\u6a21\u578b\u7684\u968f\u673a\u6027\u95ee\u9898"},
  {"icon": "\ud83d\udce1", "title": "Physical AI\u6210\u4e3a\u72ec\u7acb\u9886\u57df", "description": "awesome-physical-ai\u7b49\u8d44\u6e90\u6574\u5408"},
];