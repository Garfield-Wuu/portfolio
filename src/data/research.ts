// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-17T08:47:54.007
// ============================================

// P0-2: Paper interface 升级，增加结构化摘要字段
export interface Paper {
  title: string;
  authors?: string;
  venue: string;
  date: string;
  summary: string;
  link: string;
  pdf_url?: string;
  tags: string[];
  importance: 'high' | 'medium';
  problem?: string;
  method?: string;
  value?: string;
  why_relevant?: string;
  research_axis?: string;
  summary_structured?: string;
}

export interface GitHubProject {
  name: string;
  description: string;
  stars: string;
  language: string;
  link: string;
  tags: string[];
  stars_source?: 'api' | 'cache' | 'stale_cache' | 'fallback';
  stars_last_checked_at?: string;
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
  published_at?: string;
  freshness?: string;
  why_it_matters?: string;
  research_axis?: string;
}

// 最新论文（含结构化摘要）
export const recentPapers: Paper[] = [
  {
    "title": "HiVLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.14125",
    "date": "2026-04-14",
    "summary": "\u89c6\u89c9\u63a5\u5730\u5c42\u7ea7\u67b6\u6784 \u2b50\u2b50\u2b50\u2b50\u2b50 VLM Planner (\u9ad8\u5c42\u8bed\u4e49\u63a8\u7406) + DiT Action Expert (\u4f4e\u5c42\u6269\u6563\u52a8\u4f5c) \u89e3\u8026\u4fdd\u7559VLM\u96f6\u6837\u672c\u63a8\u7406 + DiT\u4e13\u6ce8\u6267\u884c\u3002\u9ad8\u5c42\u89c4\u5212/\u4f4e\u5c42\u63a7\u5236\u89e3\u8026\u67b6\u6784\u8303\u672c",
    "problem": "VLM Planner + DiT Action Expert, \u5c42\u7ea7\u89e3\u8026\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u89c6\u89c9\u63a5\u5730\u5c42\u7ea7\u67b6\u6784 \u2b50\u2b50\u2b50\u2b50\u2b50 VLM Planner (\u9ad8\u5c42\u8bed\u4e49\u63a8\u7406) + DiT Action Expert (\u4f4e\u5c42\u6269\u6563\u52a8\u4f5c) \u89e3\u8026\u4fdd\u7559VLM\u96f6\u6837\u672c\u63a8\u7406 + DiT\u4e13\u6ce8\u6267\u884c",
    "value": "\u9ad8\u5c42\u89c4\u5212/\u4f4e\u5c42\u63a7\u5236\u89e3\u8026\u67b6\u6784\u8303\u672c",
    "why_relevant": "\u9ad8\u5c42\u89c4\u5212/\u4f4e\u5c42\u63a7\u5236\u89e3\u8026\u67b6\u6784\u8303\u672c",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.14125",
    "pdf_url": "https://arxiv.org/pdf/2604.14125",
    "tags": ["VLM Planner + DiT Action Expert, \u5c42\u7ea7\u89e3\u8026"],
    "importance": "high"
  }
,{
    "title": "Goal2Skill",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.13942",
    "date": "2026-04-13",
    "summary": "\u957f\u7a0b\u53cc\u7cfb\u7edf\u95ed\u73af \u2b50\u2b50\u2b50\u2b50\u2b50 VLM Agentic Module (\u8bb0\u5fc6+\u5206\u89e3+\u9a8c\u8bc1+\u4fee\u6b63) + VLA Executor (\u6269\u6563\u52a8\u4f5c) \u7ed3\u6784\u5316\u4efb\u52a1\u8bb0\u5fc6\u5904\u7406\u90e8\u5206\u53ef\u89c2\u6d4b/\u906e\u6321\u95ee\u9898\u3002\u65e0\u4eba\u673a\u591a\u70b9\u5de1\u822a\u72b6\u6001\u7ba1\u7406 + PX4\u5f02\u5e38\u81ea\u52a8\u91cd\u89c4\u5212",
    "problem": "VLM Planner + VLA Executor, \u957f\u7a0b+\u8bb0\u5fc6+\u9519\u8bef\u4fee\u6b63\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u957f\u7a0b\u53cc\u7cfb\u7edf\u95ed\u73af \u2b50\u2b50\u2b50\u2b50\u2b50 VLM Agentic Module (\u8bb0\u5fc6+\u5206\u89e3+\u9a8c\u8bc1+\u4fee\u6b63) + VLA Executor (\u6269\u6563\u52a8\u4f5c) \u7ed3\u6784\u5316\u4efb\u52a1\u8bb0\u5fc6\u5904\u7406\u90e8\u5206\u53ef\u89c2\u6d4b/\u906e\u6321\u95ee\u9898",
    "value": "\u65e0\u4eba\u673a\u591a\u70b9\u5de1\u822a\u72b6\u6001\u7ba1\u7406 + PX4\u5f02\u5e38\u81ea\u52a8\u91cd\u89c4\u5212",
    "why_relevant": "\u65e0\u4eba\u673a\u591a\u70b9\u5de1\u822a\u72b6\u6001\u7ba1\u7406 + PX4\u5f02\u5e38\u81ea\u52a8\u91cd\u89c4\u5212",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.13942",
    "pdf_url": "https://arxiv.org/pdf/2604.13942",
    "tags": ["VLM Planner + VLA Executor, \u957f\u7a0b+\u8bb0\u5fc6+\u9519\u8bef\u4fee\u6b63"],
    "importance": "high"
  }
,{
    "title": "UAV-VLN Survey",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.13654",
    "date": "2026-04-13",
    "summary": "\u9996\u4e2aUAV-VLN\u5168\u9762\u7efc\u8ff0 \u2b50\u2b50\u2b50\u2b50\u2b50 \u4e94\u7c7b\u67b6\u6784: Seq2Seq \u2192 VLM/VLA \u2192 \u5206\u5c42 \u2192 \u591a\u667a\u80fd\u4f53 \u2192 \u5bf9\u8bdd\u5f0f \u4e03\u5927\u5f00\u653e\u95ee\u9898: \u957f\u7a0b\u6307\u4ee4\u63a5\u5730/\u89c6\u89d2\u9c81\u68d2\u6027/6-DoF/Sim2Real/\u52a8\u6001\u611f\u77e5/\u8bed\u8a00\u6b67\u4e49/\u8fb9\u7f18\u90e8\u7f72\u3002\u6280\u672f\u8def\u7ebf\u56fe + \u8bc4\u4f30\u6307\u6807\u53c2\u8003",
    "problem": "\u9996\u4e2aUAV-VLN\u5168\u9762\u7efc\u8ff0, 7\u5927\u5f00\u653e\u95ee\u9898\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u9996\u4e2aUAV-VLN\u5168\u9762\u7efc\u8ff0 \u2b50\u2b50\u2b50\u2b50\u2b50 \u4e94\u7c7b\u67b6\u6784: Seq2Seq \u2192 VLM/VLA \u2192 \u5206\u5c42 \u2192 \u591a\u667a\u80fd\u4f53 \u2192 \u5bf9\u8bdd\u5f0f \u4e03\u5927\u5f00\u653e\u95ee\u9898: \u957f\u7a0b\u6307\u4ee4\u63a5\u5730/\u89c6\u89d2\u9c81\u68d2\u6027/6-DoF/Sim2Real/\u52a8\u6001\u611f\u77e5/\u8bed\u8a00\u6b67\u4e49/\u8fb9\u7f18\u90e8\u7f72",
    "value": "\u6280\u672f\u8def\u7ebf\u56fe + \u8bc4\u4f30\u6307\u6807\u53c2\u8003",
    "why_relevant": "\u6280\u672f\u8def\u7ebf\u56fe + \u8bc4\u4f30\u6307\u6807\u53c2\u8003",
    "research_axis": "Navigation",
    "link": "https://arxiv.org/abs/2604.13654",
    "pdf_url": "https://arxiv.org/pdf/2604.13654",
    "tags": ["\u9996\u4e2aUAV-VLN\u5168\u9762\u7efc\u8ff0, 7\u5927\u5f00\u653e\u95ee\u9898"],
    "importance": "high"
  }
,{
    "title": "Habitat-GS",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.12626",
    "date": "2026-04-12",
    "summary": "Dynamic GS\u9ad8\u4fdd\u771f\u4eff\u771f \u2b50\u2b50\u2b50\u2b50 Dynamic Gaussian Splatting\u652f\u6301\u52a8\u6001\u4eba\u7269\u5efa\u6a21 \u9ad8\u4fdd\u771f\u6e32\u67d3 + \u5177\u8eab\u5bfc\u822a\u57fa\u51c6\u3002\u5ba4\u5185VLN\u9ad8\u4fdd\u771f\u4eff\u771f\u6570\u636e\u751f\u6210",
    "problem": "Dynamic GS\u9ad8\u4fdd\u771f\u5bfc\u822a\u4eff\u771f\u5668\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "Dynamic GS\u9ad8\u4fdd\u771f\u4eff\u771f \u2b50\u2b50\u2b50\u2b50 Dynamic Gaussian Splatting\u652f\u6301\u52a8\u6001\u4eba\u7269\u5efa\u6a21 \u9ad8\u4fdd\u771f\u6e32\u67d3 + \u5177\u8eab\u5bfc\u822a\u57fa\u51c6",
    "value": "\u5ba4\u5185VLN\u9ad8\u4fdd\u771f\u4eff\u771f\u6570\u636e\u751f\u6210",
    "why_relevant": "\u5ba4\u5185VLN\u9ad8\u4fdd\u771f\u4eff\u771f\u6570\u636e\u751f\u6210",
    "research_axis": "Navigation",
    "link": "https://arxiv.org/abs/2604.12626",
    "pdf_url": "https://arxiv.org/pdf/2604.12626",
    "tags": ["Dynamic GS\u9ad8\u4fdd\u771f\u5bfc\u822a\u4eff\u771f\u5668"],
    "importance": "high"
  }
,{
    "title": "From Plan to Action",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.12147",
    "date": "2026-04-12",
    "summary": "\u8ba1\u5212\u9075\u5faa\u5206\u6790 \u2b50\u2b50\u2b50\u2b50 \u5468\u671f\u6027\u63d0\u9192\u51cf\u8f7b\u8ba1\u5212\u8fdd\u53cd\uff0c\u63d0\u9ad8\u4efb\u52a1\u6210\u529f\u7387 \u6b21\u4f18\u8ba1\u5212\u6bd4\u65e0\u8ba1\u5212\u66f4\u6709\u5bb3\u3002| \u6280\u672f | \u5e94\u7528\u573a\u666f | \u5177\u4f53\u4ef7\u503c |",
    "problem": "Agent\u8ba1\u5212\u9075\u5faa\u7cfb\u7edf\u6027\u5206\u6790\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u8ba1\u5212\u9075\u5faa\u5206\u6790 \u2b50\u2b50\u2b50\u2b50 \u5468\u671f\u6027\u63d0\u9192\u51cf\u8f7b\u8ba1\u5212\u8fdd\u53cd\uff0c\u63d0\u9ad8\u4efb\u52a1\u6210\u529f\u7387 \u6b21\u4f18\u8ba1\u5212\u6bd4\u65e0\u8ba1\u5212\u66f4\u6709\u5bb3",
    "value": "| \u6280\u672f | \u5e94\u7528\u573a\u666f | \u5177\u4f53\u4ef7\u503c |",
    "why_relevant": "| \u6280\u672f | \u5e94\u7528\u573a\u666f | \u5177\u4f53\u4ef7\u503c |",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.12147",
    "pdf_url": "https://arxiv.org/pdf/2604.12147",
    "tags": ["Agent\u8ba1\u5212\u9075\u5faa\u7cfb\u7edf\u6027\u5206\u6790"],
    "importance": "high"
  }
,{
    "title": "E2E-Fly",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.12916",
    "date": "2026-04-12",
    "summary": "\u7aef\u5230\u7aef\u56db\u65cb\u7ffc\u5168\u6808\u7cfb\u7edf \u2b50\u2b50\u2b50\u2b50\u2b50 \u9996\u4e2a\u7edf\u4e00\u53ef\u5fae\u5206\u7269\u7406\u5b66\u4e60 + \u8bad\u7ec3 + \u9a8c\u8bc1 + \u90e8\u7f72 VisFly\u4eff\u771f\u5668: 6000 FPS, \u5168\u53ef\u5fae\u5206\u52a8\u529b\u5b66\u3002\u5b8c\u6574\u7684\u89c6\u89c9\u7b56\u7565\u8bad\u7ec3\u2192PX4\u90e8\u7f72\u6d41\u7a0b\u53c2\u8003\uff01",
    "problem": "\u7aef\u5230\u7aef\u56db\u65cb\u7ffc\u8bad\u7ec3\u2192\u90e8\u7f72\u7cfb\u7edf\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u7aef\u5230\u7aef\u56db\u65cb\u7ffc\u5168\u6808\u7cfb\u7edf \u2b50\u2b50\u2b50\u2b50\u2b50 \u9996\u4e2a\u7edf\u4e00\u53ef\u5fae\u5206\u7269\u7406\u5b66\u4e60 + \u8bad\u7ec3 + \u9a8c\u8bc1 + \u90e8\u7f72 VisFly\u4eff\u771f\u5668: 6000 FPS, \u5168\u53ef\u5fae\u5206\u52a8\u529b\u5b66",
    "value": "\u5b8c\u6574\u7684\u89c6\u89c9\u7b56\u7565\u8bad\u7ec3\u2192PX4\u90e8\u7f72\u6d41\u7a0b\u53c2\u8003\uff01",
    "why_relevant": "\u5b8c\u6574\u7684\u89c6\u89c9\u7b56\u7565\u8bad\u7ec3\u2192PX4\u90e8\u7f72\u6d41\u7a0b\u53c2\u8003\uff01",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.12916",
    "pdf_url": "https://arxiv.org/pdf/2604.12916",
    "tags": ["\u7aef\u5230\u7aef\u56db\u65cb\u7ffc\u8bad\u7ec3\u2192\u90e8\u7f72\u7cfb\u7edf"],
    "importance": "high"
  }
,{
    "title": "VULCAN",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.12831",
    "date": "2026-04-12",
    "summary": "VLM\u591a\u667a\u80fd\u4f53\u706b\u707e\u6551\u63f4 \u2b50\u2b50\u2b50\u2b50 VLM Global Planner + FMM Local Planner\u5206\u5c42\u67b6\u6784 Habitat-Matterport3D\u6269\u5c55\u706b\u707e\u6a21\u62df\u3002VLM\u89c4\u5212\u5c42 + \u591a\u65e0\u4eba\u673a\u7f16\u961f\u534f\u8c03\u53c2\u8003",
    "problem": "VLM\u591a\u667a\u80fd\u4f53\u534f\u540c(\u706b\u707e\u6551\u63f4)\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "VLM\u591a\u667a\u80fd\u4f53\u706b\u707e\u6551\u63f4 \u2b50\u2b50\u2b50\u2b50 VLM Global Planner + FMM Local Planner\u5206\u5c42\u67b6\u6784 Habitat-Matterport3D\u6269\u5c55\u706b\u707e\u6a21\u62df",
    "value": "VLM\u89c4\u5212\u5c42 + \u591a\u65e0\u4eba\u673a\u7f16\u961f\u534f\u8c03\u53c2\u8003",
    "why_relevant": "VLM\u89c4\u5212\u5c42 + \u591a\u65e0\u4eba\u673a\u7f16\u961f\u534f\u8c03\u53c2\u8003",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.12831",
    "pdf_url": "https://arxiv.org/pdf/2604.12831",
    "tags": ["VLM\u591a\u667a\u80fd\u4f53\u534f\u540c(\u706b\u707e\u6551\u63f4)"],
    "importance": "high"
  }
,{
    "title": "EagleVision",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.11400",
    "date": "2026-04-11",
    "summary": "\u9ad8\u901f\u7ade\u901f\u611f\u77e5\u57fa\u51c6 \u2b50\u2b50\u2b50\u2b50 LiDAR 3D\u68c0\u6d4b+\u8f68\u8ff9\u9884\u6d4b \u8de8\u57df\u6cdb\u5316: Urban\u2192Racing (NDS 0.726)\u3002\u611f\u77e5\u8de8\u57df\u8fc1\u79fb\u65b9\u6cd5\u8bba",
    "problem": "\u9ad8\u901f\u7ade\u901f\u611f\u77e5\u57fa\u51c6\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    "method": "\u9ad8\u901f\u7ade\u901f\u611f\u77e5\u57fa\u51c6 \u2b50\u2b50\u2b50\u2b50 LiDAR 3D\u68c0\u6d4b+\u8f68\u8ff9\u9884\u6d4b \u8de8\u57df\u6cdb\u5316: Urban\u2192Racing (NDS 0.726)",
    "value": "\u611f\u77e5\u8de8\u57df\u8fc1\u79fb\u65b9\u6cd5\u8bba",
    "why_relevant": "\u611f\u77e5\u8de8\u57df\u8fc1\u79fb\u65b9\u6cd5\u8bba",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.11400",
    "pdf_url": "https://arxiv.org/pdf/2604.11400",
    "tags": ["\u9ad8\u901f\u7ade\u901f\u611f\u77e5\u57fa\u51c6"],
    "importance": "high"
  }
];

// GitHub 项目
export const githubProjects: GitHubProject[] = [
  {
    "name": "PX4 Autopilot",
    "description": "\u5f00\u6e90\u65e0\u4eba\u673a\u81ea\u52a8\u9a7e\u9a76\u8f6f\u4ef6\uff0c\u652f\u6301\u591a\u65cb\u7ffc\u3001\u56fa\u5b9a\u7ffc\u3001VTOL\u7b49\u3002\u5b66\u672f\u754c\u6700\u6d41\u884c\u7684\u65e0\u4eba\u673a\u7814\u7a76\u5e73\u53f0\u3002",
    "stars": "11.5k",
    "language": "C++",
    "link": "https://github.com/PX4/PX4-Autopilot",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "stars_source": "api",
    "stars_last_checked_at": "2026-04-17T08:45:07.922474"
  }
,{
    "name": "Prometheus (amov-lab)",
    "description": "PX4\u65e0\u4eba\u673a\u81ea\u4e3b\u98de\u884c\u7efc\u5408\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u76ee\u6807\u8ffd\u8e2a\u3001\u96c6\u7fa4\u63a7\u5236\u3001SLAM\u7b4930+\u5e94\u7528\u6a21\u5757\u3002\u7d2f\u8ba13.1k+ stars\u3002",
    "stars": "3.1k",
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "stars_source": "api",
    "stars_last_checked_at": "2026-04-17T08:45:08.885305"
  }
,{
    "name": "embodied-drone-agents",
    "description": "LLM drone agent\u7cfb\u7edf\uff0c\u4f7f\u7528MAVSDK-Python\u4f5c\u4e3a\u5de5\u5177\uff0cLangGraph\u7f16\u6392\u4efb\u52a1\u89c4\u5212\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u63a7\u5236\u65e0\u4eba\u673a\u3002",
    "stars": "18",
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "stars_source": "api",
    "stars_last_checked_at": "2026-04-17T08:45:09.843376"
  }
,{
    "name": "llm-uav (Atmaca)",
    "description": "\u96c6\u6210Gemma 3 4B\u4e0e\u65e0\u4eba\u673a\u63a7\u5236\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u6307\u4ee4\uff0c\u8fb9\u7f18\u90e8\u7f72\u3002",
    "stars": "0",
    "language": "Python",
    "link": "https://github.com/furkanisikay/llm-uav",
    "tags": ["LLM", "UAV", "Edge AI", "NLP"],
    "stars_source": "api",
    "stars_last_checked_at": "2026-04-17T08:45:10.748286"
  }
,{
    "name": "MAVLinkMCP",
    "description": "MCP (Model Context Protocol) server for LLM\u4e0eMAVLink\u65e0\u4eba\u673a\u7684\u901a\u4fe1\uff0c\u652f\u6301\u901a\u8fc7MCP\u534f\u8bae\u63a7\u5236PX4\u65e0\u4eba\u673a\u3002",
    "stars": "16",
    "language": "Python",
    "link": "https://github.com/ion-g-ion/MAVLinkMCP",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "stars_source": "api",
    "stars_last_checked_at": "2026-04-17T08:45:11.677105"
  }
,{
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA\u8bba\u6587\u6c47\u603b\uff1a\u5f3a\u5316\u5b66\u4e60\u89c6\u89c9-\u8bed\u8a00-\u52a8\u4f5c\u6a21\u578b\u7efc\u8ff0\u3002",
    "stars": "635",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "stars_source": "api",
    "stars_last_checked_at": "2026-04-17T08:45:12.633771"
  }
,{
    "name": "Awesome-LLM-Robotics",
    "description": "\u5927\u8bed\u8a00\u6a21\u578b/\u591a\u6a21\u6001\u6a21\u578b\u5728\u673a\u5668\u4eba\u9886\u57df\u7684\u5e94\u7528\u8bba\u6587\u6c47\u603b\u3002",
    "stars": "4.3k",
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "stars_source": "api",
    "stars_last_checked_at": "2026-04-17T08:45:13.603650"
  }
,{
    "name": "Awesome-Aerial-VLN",
    "description": "\u7a7a\u4e2d\u89c6\u89c9-\u8bed\u8a00\u5bfc\u822a(Aerial VLN)\u8bba\u6587\u6c47\u603b\uff1a\u65e0\u4eba\u673aVLN\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    "stars": "51",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "stars_source": "api",
    "stars_last_checked_at": "2026-04-17T08:45:14.581709"
  }
];

// 动态趋势
export const trends: Trend[] = [
  {
    "title": "\u5c42\u7ea7\u89e3\u8026\u67b6\u6784\u6210\u5171\u8bc6",
    "description": "HiVLA/Goal2Skill\u7b49\u90fd\u91c7\u7528VLM(\u6162/\u9ad8\u5c42) + VLA/DiT(\u5feb/\u4f4e\u5c42)",
    "icon": "\ud83d\udce1"
  }
,{
    "title": "\u53cc\u7cfb\u7edf\u95ed\u73af\u6210\u4e3a\u6807\u914d",
    "description": "\u89c4\u5212\u2194\u6267\u884c\u53cd\u9988\uff0c\u9519\u8bef\u9a71\u52a8\u91cd\u89c4\u5212",
    "icon": "\ud83d\udce1"
  }
,{
    "title": "\u8bb0\u5fc6\u7cfb\u7edf\u5fc5\u5907",
    "description": "\u7ed3\u6784\u5316\u4efb\u52a1\u8bb0\u5fc6\u5904\u7406\u957f\u7a0b\u4efb\u52a1",
    "icon": "\ud83d\udce1"
  }
,{
    "title": "\u7efc\u8ff0\u6027\u5de5\u4f5c\u6d8c\u73b0",
    "description": "UAV-VLN Survey\u68b3\u74067\u5927\u5f00\u653e\u95ee\u9898\u6307\u660e\u65b9\u5411",
    "icon": "\ud83d\udce1"
  }
];

// 最新资讯
export const news: News[] = [
  {
    "title": "NVIDIA GTC 2026\uff1aCosmos 3 + Isaac GR00T \u66f4\u65b0",
    "source": "NVIDIA",
    "date": "_2026-04-1",
    "summary": "*\n> NVIDIA \u5728 Physical AI \u7684\u5e03\u5c40\u5df2\u7ecf\u5b8c\u6574\uff1a\n> - \u4eff\u771f\uff08Isaac Sim\uff09\u2192 \u8bad\u7ec3\uff08Cosmos\uff09\u2192 \u90e8\u7f72\uff08GR00T\uff09\u2192 \u8fb9\u7f18\uff08Jetson\uff09\n> - \u5bf9\u6bd5\u8bbe\u7684\u542f\u53d1\uff1a\u53ef\u4ee5\u4f18\u5148\u8003\u8651\u7528 Isaac Sim \u505a\u4eff\u771f\u9a8c\u8bc1",
    "link": "https://blogs.nvidia.com/blog/national-robotics-week-2026/",
    "published_at": "_2026-04-1",
    "freshness": "unknown",
    "why_it_matters": null,
    "research_axis": "robotics"
  }
,{
    "title": "AERO-MPPI\uff1aGPU\u52a0\u901f\u7684\u65e0\u5730\u56fe\u654f\u6377\u65e0\u4eba\u673a\u5bfc\u822a",
    "source": "GitHub",
    "date": "_2026-04-1",
    "summary": "2026.03\uff08ICRA 2026\u5f55\u7528\uff09 | \u6765\u6e90\uff1aarXiv:2509.17340 \ud83d\udca1 \u6838\u5fc3\u521b\u65b0\uff1a - \u5168 GPU \u52a0\u901f\uff1a\u7528 NVIDIA Warp GPU \u5185\u6838\uff0c\u5b9e\u65f6\u8fd0\u884c\u4e8e Jetson Orin NX",
    "link": "https://github.com/XinChen-stars/AERO_MPPI",
    "published_at": "_2026-04-1",
    "freshness": "unknown",
    "why_it_matters": null,
    "research_axis": "drone"
  }
,{
    "title": "awesome-humanoid-robot-learning\uff1a\u4eba\u5f62\u673a\u5668\u4eba\u5b66\u4e60\u8bba\u6587\u5217\u8868",
    "source": "GitHub",
    "date": "_2026-04-1",
    "summary": "\u6301\u7eed\u66f4\u65b0 | \u6765\u6e90\uff1aGitHub \ud83d\udca1 \u6536\u5f55\u4eba\u5f62\u673a\u5668\u4eba\u9886\u57df\u7684\u6700\u65b0\u8bba\u6587\uff0c\u5305\u62ec 2026.03 \u7684 Heracles \u5de5\u4f5c  https://github.com/YanjieZe/awesome-humanoid-robot-learning",
    "link": "https://github.com/YanjieZe/awesome-humanoid-robot-learning",
    "published_at": "_2026-04-1",
    "freshness": "unknown",
    "why_it_matters": null,
    "research_axis": "robotics"
  }
,{
    "title": "open-dronelog \u2b50 New!",
    "source": "GitHub",
    "date": "_2026-04-1",
    "summary": "Tauri v2 + React + DuckDB | \u6765\u6e90\uff1aarpanghosh8453 \ud83d\udca1 \u6838\u5fc3\uff1aDJI/Litchi \u98de\u884c\u65e5\u5fd7\u5206\u6790\u4eea\u8868\u76d8 \ud83c\udfaf \u4eae\u70b9\uff1a",
    "link": "https://github.com/arpanghosh8453/open-dronelog",
    "published_at": "_2026-04-1",
    "freshness": "unknown",
    "why_it_matters": null,
    "research_axis": "drone"
  }
,{
    "title": "AutoResearchClaw \u2b50 Updated v0.4.0",
    "source": "GitHub",
    "date": "_2026-04-1",
    "summary": "Python | \u6765\u6e90\uff1aaiming-lab \ud83d\udca1 \u6838\u5fc3\uff1a\u81ea\u4e3b\u79d1\u7814\u81ea\u52a8\u5316\u5de5\u5177\uff08idea \u2192 paper\uff09 \ud83c\udfaf \u4eae\u70b9\uff1a",
    "link": "https://github.com/aiming-lab/AutoResearchClaw",
    "published_at": "_2026-04-1",
    "freshness": "unknown",
    "why_it_matters": null,
    "research_axis": "llm"
  }
];

// 统计信息
export const researchStats = {
  "papers_count": 8,
  "github_count": 8,
  "news_count": 5,
  "export_time": "2026-04-17T08:45:06.946825",
  "github_stars_source": {"api": 8, "cache": 0, "stale_cache": 0, "fallback": 0}
};
