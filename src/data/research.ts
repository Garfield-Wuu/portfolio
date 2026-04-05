// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-04-05T08:45:06.293691
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
  // === 增强字段（P0-2: 结构化摘要）===
  problem?: string;           // 研究问题
  method?: string;             // 核心方法
  value?: string;              // 主要价值/结果
  why_relevant?: string;       // 与 Garfield 研究的关系
  research_axis?: string;     // 所属层级: Perception | VLA | Simulation | Control | Edge | ...
  summary_structured?: string; // 结构化摘要（problem + method + value 组合）
}

// P0-3: GitHubProject interface 升级，增加 stars 缓存元数据
export interface GitHubProject {
  name: string;
  description: string;
  stars: string;
  language: string;
  link: string;
  tags: string[];
  // === 增强字段（P0-3: 缓存元数据）===
  stars_source?: 'api' | 'cache' | 'stale_cache' | 'fallback';
  stars_last_checked_at?: string;
}

export interface Trend {
  title: string;
  description: string;
  icon: string;
}

// P0-1: News interface 升级，增加 why_it_matters 和 research_axis
export interface News {
  title: string;
  source: string;
  date: string;
  summary: string;
  link: string;
  published_at: string;
  verified: boolean;
  why_it_matters: string | null;
  research_axis?: string;
  freshness: 'fresh' | 'aging' | 'stale' | 'unknown';
  archived: boolean;
}

// 论文列表
export const papers: Paper[] = [
  {
    title: "UAV-Track VLA",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.02241",
    date: "2026-04-02",
    summary: "\u03c0\u2080.\u2085\u67b6\u6784\u7684\u65e0\u4eba\u673a\u8ddf\u8e2a \u57fa\u4e8e\u03c0\u2080.\u2085\u67b6\u6784\uff0c\u5f15\u5165\u65f6\u5e8f\u538b\u7f29\u7f51\u7edc \u5e76\u884c\u53cc\u5206\u652f\u89e3\u7801\u5668: \u7a7a\u95f4\u611f\u77e5\u63a5\u5730\u5934 + Flow Matching\u52a8\u4f5c\u4e13\u5bb6\u3002\u65e0\u4eba\u673aVLA\u8ddf\u8e2a\u5b8c\u6574pipeline",
    link: "https://arxiv.org/abs/2604.02241",
    pdf_url: "https://arxiv.org/pdf/2604.02241",
    tags: ["VLA\u65e0\u4eba\u673a\u8ddf\u8e2a, \u03c0\u2080.\u2085\u67b6\u6784"],
    importance: "high",
    problem: "VLA\u65e0\u4eba\u673a\u8ddf\u8e2a, \u03c0\u2080.\u2085\u67b6\u6784\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    method: "\u03c0\u2080.\u2085\u67b6\u6784\u7684\u65e0\u4eba\u673a\u8ddf\u8e2a \u57fa\u4e8e\u03c0\u2080.\u2085\u67b6\u6784\uff0c\u5f15\u5165\u65f6\u5e8f\u538b\u7f29\u7f51\u7edc \u5e76\u884c\u53cc\u5206\u652f\u89e3\u7801\u5668: \u7a7a\u95f4\u611f\u77e5\u63a5\u5730\u5934 + Flow Matching\u52a8\u4f5c\u4e13\u5bb6",
    value: "\u65e0\u4eba\u673aVLA\u8ddf\u8e2a\u5b8c\u6574pipeline",
    why_relevant: "\u65e0\u4eba\u673aVLA\u8ddf\u8e2a\u5b8c\u6574pipeline",
    research_axis: "VLA",
  },
  {
    title: "Stop Wandering / MetaNav",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.02318",
    date: "2026-04-02",
    summary: "\u5143\u8ba4\u77e5VLN, VLM\u67e5\u8be2\u219320.7%\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    link: "https://arxiv.org/abs/2604.02318",
    pdf_url: "https://arxiv.org/pdf/2604.02318",
    tags: ["\u5143\u8ba4\u77e5VLN, VLM\u67e5\u8be2\u219320.7%"],
    importance: "high",
    problem: "\u5143\u8ba4\u77e5VLN, VLM\u67e5\u8be2\u219320.7%\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    method: "\u5143\u8ba4\u77e5VLN, VLM\u67e5\u8be2\u219320.7%",
    value: "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    why_relevant: "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    research_axis: "VLM",
  },
  {
    title: "UniDriveVLA",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.02190",
    date: "2026-04-02",
    summary: "MoT\u4e13\u5bb6\u89e3\u8026\u67b6\u6784 \u4e09\u4e2a\u4e13\u5bb6: \u9a7e\u9a76\u7406\u89e3 + \u573a\u666f\u611f\u77e5 + \u52a8\u4f5c\u89c4\u5212 \u63a9\u7801\u6ce8\u610f\u529b\u534f\u8c03\u4e13\u5bb6\u95f4\u901a\u4fe1\u3002VLA\u67b6\u6784\u8bbe\u8ba1\u53c2\u8003",
    link: "https://arxiv.org/abs/2604.02190",
    pdf_url: "https://arxiv.org/pdf/2604.02190",
    tags: ["MoT\u4e13\u5bb6\u89e3\u8026, \u611f\u77e5-\u63a8\u7406\u5206\u79bb"],
    importance: "high",
    problem: "MoT\u4e13\u5bb6\u89e3\u8026, \u611f\u77e5-\u63a8\u7406\u5206\u79bb\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    method: "MoT\u4e13\u5bb6\u89e3\u8026\u67b6\u6784 \u4e09\u4e2a\u4e13\u5bb6: \u9a7e\u9a76\u7406\u89e3 + \u573a\u666f\u611f\u77e5 + \u52a8\u4f5c\u89c4\u5212 \u63a9\u7801\u6ce8\u610f\u529b\u534f\u8c03\u4e13\u5bb6\u95f4\u901a\u4fe1",
    value: "VLA\u67b6\u6784\u8bbe\u8ba1\u53c2\u8003",
    why_relevant: "VLA\u67b6\u6784\u8bbe\u8ba1\u53c2\u8003",
    research_axis: "VLA",
  },
  {
    title: "PRO-SPECT",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.02109",
    date: "2026-04-02",
    summary: "UAV-UGV\u6982\u7387\u5b89\u5168\u534f\u540c\u89c4\u5212\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    link: "https://arxiv.org/abs/2604.02109",
    pdf_url: "https://arxiv.org/pdf/2604.02109",
    tags: ["UAV-UGV\u6982\u7387\u5b89\u5168\u534f\u540c\u89c4\u5212"],
    importance: "high",
    problem: "UAV-UGV\u6982\u7387\u5b89\u5168\u534f\u540c\u89c4\u5212\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    method: "UAV-UGV\u6982\u7387\u5b89\u5168\u534f\u540c\u89c4\u5212",
    value: "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    why_relevant: "\u4e0eLLM\u65e0\u4eba\u673a\u7814\u7a76\u76f8\u5173",
    research_axis: "VLA",
  },
  {
    title: "AURA",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.01659",
    date: "2026-04-01",
    summary: "Shared Autonomy \u65b0\u8303\u5f0f \u5c06\u57ce\u5e02\u5bfc\u822a\u5206\u89e3\u4e3a\u9ad8\u5c42\u4eba\u7c7b\u6307\u4ee4 + \u4f4e\u5c42AI\u63a7\u5236 Spatial-Aware Instruction Encoder \u5bf9\u9f50\u591a\u6a21\u6001\u6307\u4ee4\u4e0e\u89c6\u89c9\u7a7a\u95f4\u3002Shared Autonomy\u6a21\u5f0f\u7528\u4e8e\u4eba\u5de5\u76d1\u7763\u7684\u65e0\u4eba\u673a\u63a7\u5236",
    link: "https://arxiv.org/abs/2604.01659",
    pdf_url: "https://arxiv.org/pdf/2604.01659",
    tags: ["Shared Autonomy \u57ce\u5e02\u5bfc\u822a"],
    importance: "high",
    problem: "Shared Autonomy \u57ce\u5e02\u5bfc\u822a\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    method: "Shared Autonomy \u65b0\u8303\u5f0f \u5c06\u57ce\u5e02\u5bfc\u822a\u5206\u89e3\u4e3a\u9ad8\u5c42\u4eba\u7c7b\u6307\u4ee4 + \u4f4e\u5c42AI\u63a7\u5236 Spatial-Aware Instruction Encoder \u5bf9\u9f50\u591a\u6a21\u6001\u6307\u4ee4\u4e0e\u89c6\u89c9\u7a7a\u95f4",
    value: "Shared Autonomy\u6a21\u5f0f\u7528\u4e8e\u4eba\u5de5\u76d1\u7763\u7684\u65e0\u4eba\u673a\u63a7\u5236",
    why_relevant: "Shared Autonomy\u6a21\u5f0f\u7528\u4e8e\u4eba\u5de5\u76d1\u7763\u7684\u65e0\u4eba\u673a\u63a7\u5236",
    research_axis: "Navigation",
  },
  {
    title: "Tex3D",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.01618",
    date: "2026-04-01",
    summary: "VLA\u7269\u7406\u5bf9\u6297\u653b\u51fb Adversarial 3D textures: \u66f4\u7269\u7406\u771f\u5b9e\u3001\u66f4\u6613\u90e8\u7f72 FBD (Foreground-Background Decoupling) \u5b9e\u73b0\u53ef\u5fae\u5206\u7eb9\u7406\u4f18\u5316\u3002VLA\u90e8\u7f72\u5fc5\u987b\u8003\u8651\u8f93\u5165\u9a8c\u8bc1\u548c\u5197\u4f59\u611f\u77e5",
    link: "https://arxiv.org/abs/2604.01618",
    pdf_url: "https://arxiv.org/pdf/2604.01618",
    tags: ["VLA\u5bf9\u62973D\u7eb9\u7406\u653b\u51fb"],
    importance: "high",
    problem: "VLA\u5bf9\u62973D\u7eb9\u7406\u653b\u51fb\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    method: "VLA\u7269\u7406\u5bf9\u6297\u653b\u51fb Adversarial 3D textures: \u66f4\u7269\u7406\u771f\u5b9e\u3001\u66f4\u6613\u90e8\u7f72 FBD (Foreground-Background Decoupling) \u5b9e\u73b0\u53ef\u5fae\u5206\u7eb9\u7406\u4f18\u5316",
    value: "VLA\u90e8\u7f72\u5fc5\u987b\u8003\u8651\u8f93\u5165\u9a8c\u8bc1\u548c\u5197\u4f59\u611f\u77e5",
    why_relevant: "VLA\u90e8\u7f72\u5fc5\u987b\u8003\u8651\u8f93\u5165\u9a8c\u8bc1\u548c\u5197\u4f59\u611f\u77e5",
    research_axis: "VLA",
  },
  {
    title: "AnchorVLA",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.01567",
    date: "2026-04-01",
    summary: "\u951a\u5b9a\u6269\u6563\u9ad8\u6548VLA \u6269\u6563\u8d77\u70b9\u9760\u8fd1\u53ef\u884c\u89e3\u6d41\u5f62 \u2192 \u65e0\u9700\u5927\u91cf\u53bb\u566a \u622a\u65ad\u6269\u6563\u8c03\u5ea6\u4fdd\u7559\u591a\u6a21\u6001\u52a8\u4f5c\u751f\u6210\u3002\u673a\u8f7d\u8fb9\u7f18\u90e8\u7f72\u7684\u8ba1\u7b97\u6548\u7387\u4f18\u5316",
    link: "https://arxiv.org/abs/2604.01567",
    pdf_url: "https://arxiv.org/pdf/2604.01567",
    tags: ["\u951a\u5b9a\u6269\u6563\u9ad8\u6548\u79fb\u52a8\u64cd\u4f5c"],
    importance: "high",
    problem: "\u951a\u5b9a\u6269\u6563\u9ad8\u6548\u79fb\u52a8\u64cd\u4f5c\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    method: "\u951a\u5b9a\u6269\u6563\u9ad8\u6548VLA \u6269\u6563\u8d77\u70b9\u9760\u8fd1\u53ef\u884c\u89e3\u6d41\u5f62 \u2192 \u65e0\u9700\u5927\u91cf\u53bb\u566a \u622a\u65ad\u6269\u6563\u8c03\u5ea6\u4fdd\u7559\u591a\u6a21\u6001\u52a8\u4f5c\u751f\u6210",
    value: "\u673a\u8f7d\u8fb9\u7f18\u90e8\u7f72\u7684\u8ba1\u7b97\u6548\u7387\u4f18\u5316",
    why_relevant: "\u673a\u8f7d\u8fb9\u7f18\u90e8\u7f72\u7684\u8ba1\u7b97\u6548\u7387\u4f18\u5316",
    research_axis: "VLA",
  },
  {
    title: "DriveDreamer-Policy",
    authors: "OpenClaw Scout",
    venue: "arXiv:2604.01765",
    date: "2026-04-01",
    summary: "\u51e0\u4f55 grounding WAM \u878d\u5408\u51e0\u4f55\u4fe1\u606f\u8fdb\u5165\u4e16\u754c-\u52a8\u4f5c\u8054\u5408\u5efa\u6a21 \u7edf\u4e00\u751f\u6210 + \u89c4\u5212\u3002\u65e0\u4eba\u673a\u4eff\u771f\u6570\u636e\u751f\u6210\u53c2\u8003",
    link: "https://arxiv.org/abs/2604.01765",
    pdf_url: "https://arxiv.org/pdf/2604.01765",
    tags: ["\u51e0\u4f55 grounding \u4e16\u754c\u52a8\u4f5c\u6a21\u578b"],
    importance: "high",
    problem: "\u51e0\u4f55 grounding \u4e16\u754c\u52a8\u4f5c\u6a21\u578b\u65b9\u5411\u7684\u6838\u5fc3\u95ee\u9898\u4e0e\u6311\u6218",
    method: "\u51e0\u4f55 grounding WAM \u878d\u5408\u51e0\u4f55\u4fe1\u606f\u8fdb\u5165\u4e16\u754c-\u52a8\u4f5c\u8054\u5408\u5efa\u6a21 \u7edf\u4e00\u751f\u6210 + \u89c4\u5212",
    value: "\u65e0\u4eba\u673a\u4eff\u771f\u6570\u636e\u751f\u6210\u53c2\u8003",
    why_relevant: "\u65e0\u4eba\u673a\u4eff\u771f\u6570\u636e\u751f\u6210\u53c2\u8003",
    research_axis: "VLA",
  }
];

// GitHub 项目列表
export const githubProjects: GitHubProject[] = [
  {
    name: "PX4 Autopilot",
    description: "\u5f00\u6e90\u65e0\u4eba\u673a\u81ea\u52a8\u9a7e\u9a76\u8f6f\u4ef6\uff0c\u652f\u6301\u591a\u65cb\u7ffc\u3001\u56fa\u5b9a\u7ffc\u3001VTOL\u7b49\u3002\u5b66\u672f\u754c\u6700\u6d41\u884c\u7684\u65e0\u4eba\u673a\u7814\u7a76\u5e73\u53f0\u3002",
    stars: "11.4k",
    language: "C++",
    link: "https://github.com/PX4/PX4-Autopilot",
    tags: ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    stars_source: "api",
    stars_last_checked_at: "2026-04-05T08:45:07.331538",
  },
  {
    name: "Prometheus (amov-lab)",
    description: "PX4\u65e0\u4eba\u673a\u81ea\u4e3b\u98de\u884c\u7efc\u5408\u89e3\u51b3\u65b9\u6848\uff0c\u5305\u542b\u76ee\u6807\u8ffd\u8e2a\u3001\u96c6\u7fa4\u63a7\u5236\u3001SLAM\u7b4930+\u5e94\u7528\u6a21\u5757\u3002\u7d2f\u8ba13.1k+ stars\u3002",
    stars: "3.1k",
    language: "C++",
    link: "https://github.com/amov-lab/Prometheus",
    tags: ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    stars_source: "api",
    stars_last_checked_at: "2026-04-05T08:45:08.419151",
  },
  {
    name: "embodied-drone-agents",
    description: "LLM drone agent\u7cfb\u7edf\uff0c\u4f7f\u7528MAVSDK-Python\u4f5c\u4e3a\u5de5\u5177\uff0cLangGraph\u7f16\u6392\u4efb\u52a1\u89c4\u5212\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u63a7\u5236\u65e0\u4eba\u673a\u3002",
    stars: "18",
    language: "Python",
    link: "https://github.com/EmergenceAI/embodied-drone-agents",
    tags: ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    stars_source: "api",
    stars_last_checked_at: "2026-04-05T08:45:09.443572",
  },
  {
    name: "llm-uav (Atmaca)",
    description: "\u96c6\u6210Gemma 3 4B\u4e0e\u65e0\u4eba\u673a\u63a7\u5236\uff0c\u652f\u6301\u81ea\u7136\u8bed\u8a00\u6307\u4ee4\uff0c\u8fb9\u7f18\u90e8\u7f72\u3002",
    stars: "0",
    language: "Python",
    link: "https://github.com/furkanisikay/llm-uav",
    tags: ["LLM", "UAV", "Edge AI", "NLP"],
    stars_source: "api",
    stars_last_checked_at: "2026-04-05T08:45:10.699268",
  },
  {
    name: "MAVLinkMCP",
    description: "MCP (Model Context Protocol) server for LLM\u4e0eMAVLink\u65e0\u4eba\u673a\u7684\u901a\u4fe1\uff0c\u652f\u6301\u901a\u8fc7MCP\u534f\u8bae\u63a7\u5236PX4\u65e0\u4eba\u673a\u3002",
    stars: "16",
    language: "Python",
    link: "https://github.com/ion-g-ion/MAVLinkMCP",
    tags: ["MAVLink", "MCP", "PX4", "LLM"],
    stars_source: "api",
    stars_last_checked_at: "2026-04-05T08:45:11.911694",
  },
  {
    name: "Awesome-RL-VLA",
    description: "RL+VLA\u8bba\u6587\u6c47\u603b\uff1a\u5f3a\u5316\u5b66\u4e60\u89c6\u89c9-\u8bed\u8a00-\u52a8\u4f5c\u6a21\u578b\u7efc\u8ff0\u3002",
    stars: "614",
    language: "Python",
    link: "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    tags: ["VLA", "RL", "Survey", "Papers"],
    stars_source: "api",
    stars_last_checked_at: "2026-04-05T08:45:13.341840",
  },
  {
    name: "Awesome-LLM-Robotics",
    description: "\u5927\u8bed\u8a00\u6a21\u578b/\u591a\u6a21\u6001\u6a21\u578b\u5728\u673a\u5668\u4eba\u9886\u57df\u7684\u5e94\u7528\u8bba\u6587\u6c47\u603b\u3002",
    stars: "4.3k",
    language: "Python",
    link: "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    tags: ["LLM", "Robot", "Survey", "Papers"],
    stars_source: "api",
    stars_last_checked_at: "2026-04-05T08:45:14.394871",
  },
  {
    name: "Awesome-Aerial-VLN",
    description: "\u7a7a\u4e2d\u89c6\u89c9-\u8bed\u8a00\u5bfc\u822a(Aerial VLN)\u8bba\u6587\u6c47\u603b\uff1a\u65e0\u4eba\u673aVLN\u65b9\u5411\u6700\u65b0\u7814\u7a76\u3002",
    stars: "47",
    language: "Python",
    link: "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    tags: ["UAV", "VLN", "Navigation", "Survey"],
    stars_source: "api",
    stars_last_checked_at: "2026-04-05T08:45:15.404101",
  }
];

// 动态趋势列表
export const trends: Trend[] = [
  {
    icon: "\ud83d\udce1",
    title: "Shared Autonomy\u5d1b\u8d77",
    description: "\u4eba\u5728\u73afVLA\u63a7\u5236\u6210\u4e3a\u57ce\u5e02\u5bfc\u822a\u65b0\u65b9\u5411",
  },
  {
    icon: "\ud83e\udd16",
    title: "UAV VLA\u57fa\u51c6\u6210\u719f",
    description: "HUGE-Bench\u63d0\u4f9b\u5b8c\u6574\u9ad8\u5c42\u8bed\u4e49+\u5b89\u5168\u53cc\u8f68\u8bc4\u4f30",
  },
  {
    icon: "\ud83e\udd16",
    title: "VLA\u5b89\u5168\u6210\u70ed\u70b9",
    description: "\u7269\u7406\u5bf9\u6297\u653b\u51fb\u7814\u7a76\u5feb\u901f\u53d1\u5c55",
  },
  {
    icon: "\ud83d\udce1",
    title: "\u8ba1\u7b97\u6548\u7387\u7a81\u7834",
    description: "AnchorVLA\u7b49\u5728\u4fdd\u6301\u591a\u6a21\u6001\u7684\u540c\u65f6\u51cf\u5c11\u8ba1\u7b97",
  }
];

// 新闻列表
export const news: News[] = [
  {
    title: "batear\uff1aESP32-S3 \u58f0\u5b66\u65e0\u4eba\u673a\u68c0\u6d4b\u5668",
    source: "GitHub",
    date: "_2026-04-0",
    summary: "2026.03 | GitHub \u5f00\u6e90 \ud83d\udca1 \u4eae\u70b9\uff1a - \u8d85\u4f4e\u6210\u672c\uff08ESP32-S3 + LoRa\uff09",
    link: "https://github.com/TN666/batear",
    published_at: "_2026-04-0",
    verified: false,
    why_it_matters: null,
    research_axis: "drone",
    freshness: "unknown",
    archived: false,
  },
  {
    title: "Mercury Transforming Drone\uff1a\u6a21\u5757\u5316\u53ef\u53d8\u5f62\u65e0\u4eba\u673a",
    source: "GitHub",
    date: "_2026-04-0",
    summary: "2026.02 | GitHub \ud83d\udca1 \u4eae\u70b9\uff1a - \u4efb\u4f55\u4eba\u90fd\u80fd\u642d\u5efa\u7684\u53d8\u5f62\u65e0\u4eba\u673a",
    link: "https://github.com/L42ARO/Mercury-Transforming-Drone",
    published_at: "_2026-04-0",
    verified: false,
    why_it_matters: null,
    research_axis: "drone",
    freshness: "unknown",
    archived: false,
  },
  {
    title: "nanobot",
    source: "GitHub",
    date: "_2026-04-0",
    summary: "Python | \u6765\u6e90\uff1aHKUDS \ud83d\udca1 \u6838\u5fc3\uff1a\u8d85\u8f7b\u91cf\u7ea7\u4e2a\u4eba AI \u52a9\u624b \ud83c\udfaf \u4eae\u70b9\uff1a",
    link: "https://github.com/HKUDS/nanobot",
    published_at: "_2026-04-0",
    verified: false,
    why_it_matters: null,
    research_axis: "llm",
    freshness: "unknown",
    archived: false,
  },
  {
    title: "Pluto Drones by Drona Aviation",
    source: "GitHub",
    date: "_2026-04-0",
    summary: "*\uff1a PlutoBlocks \u53ef\u89c6\u5316\u7f16\u7a0b + Pluto IDE\uff08C++/Python\uff09\u63a7\u5236\u65e0\u4eba\u673a",
    link: "https://github.com/DronaAviation",
    published_at: "_2026-04-0",
    verified: false,
    why_it_matters: null,
    research_axis: "drone",
    freshness: "unknown",
    archived: false,
  },
  {
    title: "SoftAct\uff1a\u529b\u611f\u77e5\u8de8\u5f62\u4f53\u6280\u80fd\u8fc1\u79fb\u6846\u67b6",
    source: "GitHub",
    date: "2026-04-01",
    summary: "2026.04.01 | \u6765\u6e90\uff1aarXiv:2604.01224 \ud83d\udca1 \u6838\u5fc3\u95ee\u9898\uff1a\u5982\u4f55\u5c06\u4eba\u7c7b\u6f14\u793a\u7684\u529b\u63a7\u5236\u6280\u80fd\u8fc1\u79fb\u5230\u8f6f\u4f53\u673a\u5668\u4eba\u624b\uff1f \ud83d\udca1 \u89e3\u51b3\u65b9\u6848\uff1a",
    link: "https://soft-act.github.io/",
    published_at: "2026-04-01",
    verified: false,
    why_it_matters: null,
    research_axis: "robotics",
    freshness: "fresh",
    archived: false,
  }
];