// Auto-generated at 2026-07-09T08:46:38.401993
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
    "title": "Lift3D-VLA",
    "authors": "OpenClaw Scout",
    "date": "2026-07-06",
    "venue": "arXiv:2607.06564",
    "url": "https://arxiv.org/abs/2607.06564",
    "pdf": "https://arxiv.org/pdf/2607.06564",
    "tags": ["3D几何感知VLA (GC-MAE)"],
    "summary": "3D几何感知VLA (GC-MAE)方向最新研究。",
    "problem": "3D几何感知VLA (GC-MAE)方向的核心问题与挑战",
    "method": "3D几何感知VLA (GC-MAE)",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "importance": "high",
  },
  {
    "title": "RynnWorld-4D",
    "authors": "OpenClaw Scout",
    "date": "2026-07-06",
    "venue": "arXiv:2607.06559",
    "url": "https://arxiv.org/abs/2607.06559",
    "pdf": "https://arxiv.org/pdf/2607.06559",
    "tags": ["RGB-DF联合生成世界模型"],
    "summary": "RGB-DF联合生成世界模型方向最新研究。",
    "problem": "RGB-DF联合生成世界模型方向的核心问题与挑战",
    "method": "RGB-DF联合生成世界模型",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "Simulation",
    "importance": "high",
  },
  {
    "title": "RynnWorld-Teleop",
    "authors": "OpenClaw Scout",
    "date": "2026-07-06",
    "venue": "arXiv:2607.06558",
    "url": "https://arxiv.org/abs/2607.06558",
    "pdf": "https://arxiv.org/pdf/2607.06558",
    "tags": ["数字遥操作+40FPS生成"],
    "summary": "数字遥操作+40FPS生成方向最新研究。",
    "problem": "数字遥操作+40FPS生成方向的核心问题与挑战",
    "method": "数字遥操作+40FPS生成",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "importance": "high",
  },
  {
    "title": "UniLM-Nav",
    "authors": "OpenClaw Scout",
    "date": "2026-07-06",
    "venue": "arXiv:2607.06537",
    "url": "https://arxiv.org/abs/2607.06537",
    "pdf": "https://arxiv.org/pdf/2607.06537",
    "tags": ["零样本最后一公里导航"],
    "summary": "零样本最后一公里导航方向最新研究。",
    "problem": "零样本最后一公里导航方向的核心问题与挑战",
    "method": "零样本最后一公里导航",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "Aircraft",
    "importance": "high",
  },
  {
    "title": "Neural-ESO",
    "authors": "OpenClaw Scout",
    "date": "2026-07-06",
    "venue": "arXiv:2607.06535",
    "url": "https://arxiv.org/abs/2607.06535",
    "pdf": "https://arxiv.org/pdf/2607.06535",
    "tags": ["双通路学习控制+形式化保证"],
    "summary": "双通路学习控制+形式化保证方向最新研究。",
    "problem": "双通路学习控制+形式化保证方向的核心问题与挑战",
    "method": "双通路学习控制+形式化保证",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "Control",
    "importance": "high",
  },
  {
    "title": "Hypothesis-Expansion",
    "authors": "OpenClaw Scout",
    "date": "2026-07-06",
    "venue": "arXiv:2607.06501",
    "url": "https://arxiv.org/abs/2607.06501",
    "pdf": "https://arxiv.org/pdf/2607.06501",
    "tags": ["假设驱动的开放世界规划"],
    "summary": "假设驱动的开放世界规划方向最新研究。",
    "problem": "假设驱动的开放世界规划方向的核心问题与挑战",
    "method": "假设驱动的开放世界规划",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "Control",
    "importance": "high",
  },
  {
    "title": "CE-MPPI",
    "authors": "OpenClaw Scout",
    "date": "2026-07-06",
    "venue": "arXiv:2607.06499",
    "url": "https://arxiv.org/abs/2607.06499",
    "pdf": "https://arxiv.org/pdf/2607.06499",
    "tags": ["聚类嵌入式MPPI控制"],
    "summary": "聚类嵌入式MPPI控制方向最新研究。",
    "problem": "聚类嵌入式MPPI控制方向的核心问题与挑战",
    "method": "聚类嵌入式MPPI控制",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "Control",
    "importance": "high",
  },
  {
    "title": "AcoustoBots",
    "authors": "OpenClaw Scout",
    "date": "2026-07-06",
    "venue": "arXiv:2607.06563",
    "url": "https://arxiv.org/abs/2607.06563",
    "pdf": "https://arxiv.org/pdf/2607.06563",
    "tags": ["声悬浮MARL数据物理化"],
    "summary": "声悬浮MARL数据物理化方向最新研究。",
    "problem": "声悬浮MARL数据物理化方向的核心问题与挑战",
    "method": "声悬浮MARL数据物理化",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "importance": "high",
  }
];

export const githubRepos: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "PX4",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": 12100,
    "url": "https://github.com/PX4/PX4-Autopilot",
    "category": "Aircraft",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:24.724399",
    "stars_source": "stale_cache",
  },
  {
    "name": "Prometheus (amov-lab)",
    "owner": "amov-lab",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    "stars": 3200,
    "url": "https://github.com/amov-lab/Prometheus",
    "category": "Aircraft",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:26.180473",
    "stars_source": "stale_cache",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 22,
    "url": "https://github.com/EmergenceAI/embodied-drone-agents",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:27.915736",
    "stars_source": "stale_cache",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": 21,
    "url": "https://github.com/ion-g-ion/MAVLinkMCP",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:29.512337",
    "stars_source": "stale_cache",
  },
  {
    "name": "AerialVLA",
    "owner": "XuPeng23",
    "description": "端到端视觉-语言-动作无人机导航模型，支持自然语言指令控制无人机。",
    "stars": 0,
    "url": "https://github.com/XuPeng23/AerialVLA",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["VLA", "UAV", "Navigation", "End-to-End"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:31.438166",
    "stars_source": "stale_cache",
  },
  {
    "name": "UAVs_Meet_LLMs",
    "owner": "Hub-Tian",
    "description": "UAV+LLM综合资源库，汇总无人机与大语言模型结合的论文、项目、数据集。",
    "stars": 500,
    "url": "https://github.com/Hub-Tian/UAVs_Meet_LLMs",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["UAV", "LLM", "Survey", "Resources"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:32.935918",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 59,
    "url": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:34.529541",
    "stars_source": "stale_cache",
  },
  {
    "name": "LeRobot",
    "owner": "huggingface",
    "description": "HuggingFace开源机器人学习库，支持多种机器人(SO-100/SO-ARM100/101)、多种VLA模型(π0、SmolVLA等)、端到端训练推理。Garfield项目核心框架。",
    "stars": 25600,
    "url": "https://github.com/huggingface/lerobot",
    "category": "Robotics",
    "language": "Python",
    "tags": ["LeRobot", "VLA", "Robot", "HuggingFace", "SO-ARM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:35.994764",
    "stars_source": "stale_cache",
  },
  {
    "name": "dimensionalOS",
    "owner": "dimensionalOS",
    "description": "Agentic OS for physical space，自然语言控制多种机器人(含无人机)，支持多种AI模型和工具。",
    "stars": 3600,
    "url": "https://github.com/dimensionalOS/dimos",
    "category": "Robotics",
    "language": "Python",
    "tags": ["Agent", "OS", "Robot", "UAV", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:37.425860",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": 4400,
    "url": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "category": "Robotics",
    "language": "Python",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:38.980176",
    "stars_source": "stale_cache",
  },
  {
    "name": "awesome-embodied-vla-va-vln",
    "owner": "jonyzhang2023",
    "description": "Embodied AI/VLA/VLN综述列表，汇总具身智能、视觉-语言-动作模型、视觉语言导航相关论文。",
    "stars": 3300,
    "url": "https://github.com/jonyzhang2023/awesome-embodied-vla-va-vln",
    "category": "Robotics",
    "language": "Python",
    "tags": ["Embodied AI", "VLA", "VLN", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:40.491185",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 771,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "category": "Robotics",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:42.011682",
    "stars_source": "stale_cache",
  },
  {
    "name": "reflex-vla",
    "owner": "FastCrest",
    "description": "一键部署VLA模型到边缘GPU，支持多种VLA模型的边缘优化推理。",
    "stars": 0,
    "url": "https://github.com/FastCrest/reflex-vla",
    "category": "Edge",
    "language": "Python",
    "tags": ["VLA", "Edge", "GPU", "Deployment"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:43.992454",
    "stars_source": "stale_cache",
  },
  {
    "name": "CarlaAir",
    "owner": "louiszengCN",
    "description": "CARLA + 无人机空地一体仿真平台，统一AirSim + CARLA到单一Unreal Engine进程。",
    "stars": 1000,
    "url": "https://github.com/louiszengCN/CarlaAir",
    "category": "Simulation",
    "language": "C++",
    "tags": ["Simulation", "UAV", "CARLA", "AirSim"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:45.602266",
    "stars_source": "stale_cache",
  },
  {
    "name": "skynet",
    "owner": "hybridgroup",
    "description": "LLM + MCP协议控制真实机器人和无人机，支持自然语言控制多种平台。",
    "stars": 53,
    "url": "https://github.com/hybridgroup/skynet",
    "category": "Robotics",
    "language": "Python",
    "tags": ["LLM", "MCP", "Robot", "UAV", "Agent"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:47.226544",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-VLA-UAVs",
    "owner": "TheBrainLab",
    "description": "VLA/VLN无人机论文/模型/数据集汇总，空中机器人VLA方向最全资源列表。",
    "stars": 60,
    "url": "https://github.com/TheBrainLab/Awesome-VLA-UAVs",
    "category": "Aircraft",
    "language": "Python",
    "tags": ["VLA", "UAV", "VLN", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-08T08:45:48.910743",
    "stars_source": "stale_cache",
  }
];

export const news: News[] = [
  {
    "title": "人形机器人'iPhone时刻'到来",
    "source": "网络",
    "url": "https://www.36kr.com/p/3886462577094915",
    "date": "_2026-07-0",
    "summary": "> 📄 完整PDF版本：`reports/daily_briefing/briefing_2026-07-09.pdf` 珠海 小雨转多云 | 25°C-30°C | 湿度89% | 南风微风 早晨有小雨,白天转多云,湿度较高",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "自变量发布跨模态具身动作分词器 X-Tokenizer，多模态对齐 +13.5%",
    "source": "网络",
    "url": "http://damoai.com.cn/archives/16732",
    "date": "_2026-07-0",
    "summary": "> 📄 完整 PDF 版本：`reports/daily_briefing/briefing_2026-07-05.pdf` 珠海：多云转雷阵雨，气温 27.8~30.7℃，当前 29.2℃ · 湿度 79% · 风速 23.8 km/h（午后有雷阵雨） - 自变量发布跨模态具身动作分词器 X-Tokenizer，多模态对齐 +13.5% — 动作 tokenizer 让长程任务性能提升",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "对你的价值",
    "source": "网络",
    "url": "https://www.163.com/dy/article/L0NI4D5C0511C4AA.html",
    "date": "_2026-07-0",
    "summary": "> 📄 完整 PDF 版本：`reports/daily_briefing/briefing_2026-07-04.pdf` 珠海 阵雨转多云 26~30℃ | 当前 29℃ 湿度79% | 东北风 29km/h - [智谱开源具身智能模型 + 1000 小时机器人数据集](https://www.163.com/dy/article/L0NI4D5C0511C4AA.html)",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "对你的价值",
    "source": "网络",
    "url": "https://36kr.com/p/3876735615758341",
    "date": "_2026-07-0",
    "summary": "> 📄 完整 PDF 版本：`reports/daily_briefing/briefing_2026-07-03.pdf` 大雨转暴雨 - [库萨科技发布全模态具身模型Kusa Omni-CTS与专用操作系统Kusa OS，助力城市服务机器人从\"执行者\"变为\"思考者\"-36氪](https://36kr.com/p/3876735615758341)",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "NVIDIA GR00T N1.6 + Cosmos Reason 2 发布",
    "source": "NVIDIA Newsroom",
    "url": "https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots",
    "date": "2026-04-01",
    "summary": "NVIDIA发布开源物理AI模型GR00T N1.6和Cosmos Reason世界模型，全球合作伙伴推出下一代机器人，机器人的ChatGPT时刻已至。",
    "published_at": "2026-04-01",
    "verified": true,
    "why_it_matters": "开源物理AI+世界模型对机器人仿真和无人机Sim2Real有直接参考价值",
    "research_axis": "Robotics",
    "freshness": "fresh",
  }
];

export const trends: Trend[] = [
  {
    "icon": "🤖",
    "title": "VGA > VLA for 控制",
    "description": "几何感知优于语言抽象，稠密3D几何提升控制精度"
  },
  {
    "icon": "🖥️",
    "title": "第一人称仿真",
    "description": "EgoSim / Habitat 3D 场景一致性生成交互数据"
  },
  {
    "icon": "👁️",
    "title": "全景感知",
    "description": "360°全景视觉提升无人机空间理解能力"
  },
  {
    "icon": "🔧",
    "title": "中间件标准化",
    "description": "MAVLink/ROS2标准协议 + MCP统一LLM接入"
  },
  {
    "icon": "⚡",
    "title": "边缘部署",
    "description": "VLA模型边缘优化推理，降低延迟满足实时控制"
  }
];