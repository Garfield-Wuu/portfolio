// Auto-generated at 2026-05-06T08:46:59.992666
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
    "title": "DIAL: Decomposing Vision-Language Models into Intent Understanding and Action Decoding",
    "authors": "Stanford / Berkeley",
    "venue": "arXiv:2603.29844",
    "date": "2026-03-31",
    "summary": "VLA架构创新：VLM不应只做编码器，应利用高层意图理解。分为Intent Bottleneck（潜世界模型编码意图）和Action Decoding（潜逆动力学解码动作），实现LLM→VLA→PX4架构解耦。",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2603.29844",
    "pdf_url": "https://arxiv.org/pdf/2603.29844",
    "tags": ["VLA", "LLM", "Robot", "Embodied AI", "Intent"],
    "importance": "high",
  }
  {
    "title": "LLM-Enabled UAV NL Navigation: Natural Language to Signal Temporal Logic for Autonomous Flight",
    "authors": "港科大",
    "venue": "arXiv:2603.27583",
    "date": "2026-03-30",
    "summary": "自然语言→信号时序逻辑(STL)→MILP轨迹优化。CoT推理+GRPO优化确保翻译正确性，STL修复机制处理不可行约束。已有实机飞行验证。",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2603.27583",
    "pdf_url": "https://arxiv.org/pdf/2603.27583",
    "tags": ["LLM", "UAV", "STL", "NLP", "Motion Planning"],
    "importance": "high",
  }
  {
    "title": "CARLA-Air: Unified Aerial-Ground Simulation Infrastructure",
    "authors": "ETH Zurich",
    "venue": "arXiv:2603.28032",
    "date": "2026-03-30",
    "summary": "AirSim + CARLA统一到单一Unreal Engine进程，零修改复用AirSim API+ROS 2。18种传感器模态同步采集。完整仿真验证环境，适合毕设仿真验证。",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2603.28032",
    "pdf_url": "https://arxiv.org/pdf/2603.28032",
    "tags": ["Simulation", "UAV", "ROS", "CARLA", "Sensor Fusion"],
    "importance": "high",
  }
  {
    "title": "AeroGen: Agentic Drone Autonomy through Single-Shot Structured Prompting",
    "authors": "MIT / UC Berkeley",
    "venue": "arXiv:2603.25000",
    "date": "2026-03-25",
    "summary": "PX4 + LLM agent单步结构化提示，一次prompt完成多任务规划。轻量级方案，适合边缘部署。支持语音控制和云端API。",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2603.25000",
    "pdf_url": "https://arxiv.org/pdf/2603.25000",
    "tags": ["LLM", "UAV", "PX4", "Agent", "Edge AI"],
    "importance": "high",
  }
  {
    "title": "Realtime-VLA V2: Learning to Run VLAs Fast, Smooth and Accurate",
    "authors": "上海AI Lab",
    "venue": "arXiv:2603.20000",
    "date": "2026-03-20",
    "summary": "实时VLA，在边缘设备(Jetson)上快速流畅运行VLAs。EAGLE-3投机解码+NVFP4量化优化，兼顾精度和速度。适合无人机实时性需求。",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2603.20000",
    "pdf_url": "https://arxiv.org/pdf/2603.20000",
    "tags": ["VLA", "Real-time", "Edge AI", "Quantization"],
    "importance": "medium",
  }
  {
    "title": "FocusVLA: Visual Attention Optimization for Efficient Vision-Language-Action Models",
    "authors": "字节跳动",
    "venue": "arXiv:2603.28740",
    "date": "2026-03-28",
    "summary": "VLA瓶颈在于如何利用视觉而非视觉质量本身。提出Modality Cascaded Attention消除快捷路径。边缘部署计算优化参考。",
    "problem": "",
    "method": "",
    "value": "",
    "why_relevant": "",
    "research_axis": "",
    "link": "https://arxiv.org/abs/2603.28740",
    "pdf_url": "https://arxiv.org/pdf/2603.28740",
    "tags": ["VLA", "Attention", "Edge AI", "Efficiency"],
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
    "stars_last_checked_at": "2026-05-05T08:49:34.841109",
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
    "stars_last_checked_at": "2026-05-05T08:49:35.790968",
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
    "stars_last_checked_at": "2026-05-05T08:49:36.761584",
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
    "stars_last_checked_at": "2026-05-05T08:49:37.666114",
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
    "stars_last_checked_at": "2026-05-05T08:49:38.562618",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 663,
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-05-05T08:49:39.472241",
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
    "stars_last_checked_at": "2026-05-05T08:49:40.477080",
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
    "stars_last_checked_at": "2026-05-05T08:49:41.392028",
    "stars_source": "stale_cache",
  }
];

export const news: News[] = [
  {
    "title": "高度相关！",
    "source": "GitHub",
    "url": "https://github.com/Hmbown/DeepSeek-TUI",
    "date": "2026-05-04",
    "summary": "AI 从\"帮你想\"进入\"帮你花钱\"，Agentic Commerce 元年 ⭐ 对你的价值：未来无人机服务可接入 Agent 支付体系（如自动订购配件）",
    "published_at": "2026-05-04",
    "verified": false,
    "why_it_matters": "AI \u4ece\"\u5e2e\u4f60\u60f3\"\u8fdb\u5165\"\u5e2e\u4f60\u82b1\u94b1\"\uff0cAgentic Commerce \u5143\u5e74",
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  }
  {
    "title": "对你的影响",
    "source": "GitHub",
    "url": "https://github.com/NVlabs/vla-perf",
    "date": "2026-04-24",
    "summary": "从实验室走向真实工业产线的关键一步 ⭐ 对你的价值：多机协同 + LLM 代码生成的结合，可借鉴到无人机编队控制",
    "published_at": "2026-04-24",
    "verified": false,
    "why_it_matters": "\u4ece\u5b9e\u9a8c\u5ba4\u8d70\u5411\u771f\u5b9e\u5de5\u4e1a\u4ea7\u7ebf\u7684\u5173\u952e\u4e00\u6b65",
    "research_axis": "robotics",
    "freshness": "aging",
    "archived": false,
  }
  {
    "title": "NVIDIA GR00T N1.6 + Cosmos Reason 2 发布",
    "source": "NVIDIA Newsroom",
    "url": "https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots",
    "date": "2026-04-01",
    "summary": "NVIDIA发布开源物理AI模型GR00T N1.6和Cosmos Reason世界模型，全球合作伙伴推出下一代机器人，机器人的ChatGPT时刻已至。",
    "published_at": "2026-04-01",
    "verified": true,
    "why_it_matters": "\u5f00\u6e90\u7269\u7406AI+\u4e16\u754c\u6a21\u578b\u5bf9\u673a\u5668\u4eba\u4eff\u771f\u548c\u65e0\u4eba\u673aSim2Real\u6709\u76f4\u63a5\u53c2\u8003\u4ef7\u503c",
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  }
  {
    "title": "Unitree B2-W 四足机器人发布",
    "source": "Unitree",
    "url": "https://www.unitree.com.cn/",
    "date": "2026-03-25",
    "summary": "宇树科技发布B2-W工业四足机器人，负载30kg，续航4小时，支持复杂地形巡检，配备深度相机和激光雷达。",
    "published_at": "2026-03-25",
    "verified": true,
    "why_it_matters": "\u56db\u8db3\u673a\u5668\u4eba\u786c\u4ef6\u8fed\u4ee3\uff0c\u8d1f\u8f7d\u548c\u7eed\u822a\u5927\u5e45\u63d0\u5347\uff0c\u5de5\u4e1a\u5de1\u68c0\u5e94\u7528\u52a0\u901f\u843d\u5730",
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  }
  {
    "title": "DJI Air 3S 无人机发布",
    "source": "DJI",
    "url": "https://www.dji.com/cn/air-3s",
    "date": "2026-03-28",
    "summary": "大疆发布Air 3S，配备1英寸主摄+70mm长焦双摄系统，全向避障，支持APAS 5.0，续航48分钟，面向消费级航拍市场。",
    "published_at": "2026-03-28",
    "verified": true,
    "why_it_matters": "\u6d88\u8d39\u7ea7\u65e0\u4eba\u673a\u907f\u969c\u548c\u7eed\u822a\u6301\u7eed\u8fdb\u5316\uff0cDJI\u6280\u672f\u52a8\u6001",
    "research_axis": "drone",
    "freshness": "fresh",
    "archived": false,
  }
];

export const trends: string[] = [
  {"icon": "🤖", "title": "UAV VLA专用化加速", "description": "AerialVLA(端到端导航)+LiteVLA-H(机载紧凑) → 两条UAV VLA技术路线"},
  {"icon": "🤖", "title": "VLA记忆机制成热点", "description": "MemoryVLA(ICLR)+Long-Term Memory → 解决长程任务"},
  {"icon": "📡", "title": "测试时计算提升决策", "description": "VLA-ATTC(失败率-50%)+Sentinel-VLA(成功率+30%) → 按需推理"},
  {"icon": "⚡", "title": "实时性优化多路线", "description": "FASTER(10x延迟压缩)+LiteVLA-H(19.74Hz)+双速率调度"},
  {"icon": "🤖", "title": "视频预训练→VLA", "description": "RynnVLA-001证明人类视频可隐式迁移到机器人"},
];