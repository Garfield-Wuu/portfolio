// Auto-generated at 2026-07-04T08:51:13.688189
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
    "tags": ["人形全身技能, egocentric视觉"],
    "summary": "人形全身技能学习 egocentric视觉 + 低延迟感知-控制闭环。全身协调控制思路",
    "problem": "人形全身技能, egocentric视觉方向的核心问题与挑战",
    "method": "人形全身技能学习 egocentric视觉 + 低延迟感知-控制闭环",
    "value": "全身协调控制思路",
    "why_relevant": "全身协调控制思路",
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
    "tags": ["第一人称世界仿真器, 3D场景一致性"],
    "summary": "第一人称世界仿真器 3D场景一致性 + 跨时间状态更新 生成空间一致的交互视频。仿真数据生成 + Sim2Real",
    "problem": "第一人称世界仿真器, 3D场景一致性方向的核心问题与挑战",
    "method": "第一人称世界仿真器 3D场景一致性 + 跨时间状态更新 生成空间一致的交互视频",
    "value": "仿真数据生成 + Sim2Real",
    "why_relevant": "仿真数据生成 + Sim2Real",
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
    "tags": ["VGA范式替代VLA, 稠密3D几何"],
    "summary": "VGA范式: 几何优先于语言 Vision-Geometry-Action (VGA) 替代 VLA 稠密3D几何作为关键线索，而非语言描述。无人机精确控制需要几何感知",
    "problem": "VGA范式替代VLA, 稠密3D几何方向的核心问题与挑战",
    "method": "VGA范式: 几何优先于语言 Vision-Geometry-Action (VGA) 替代 VLA 稠密3D几何作为关键线索，而非语言描述",
    "value": "无人机精确控制需要几何感知",
    "why_relevant": "无人机精确控制需要几何感知",
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
    "tags": ["在线策略切换, 敏捷-稳定平衡"],
    "summary": "在线策略切换 敏捷-稳定平衡。无人机悬停/机动模式切换",
    "problem": "在线策略切换, 敏捷-稳定平衡方向的核心问题与挑战",
    "method": "在线策略切换 敏捷-稳定平衡",
    "value": "无人机悬停/机动模式切换",
    "why_relevant": "无人机悬停/机动模式切换",
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
    "tags": ["全景VI-SLAM, 嵌入式平台"],
    "summary": "全景VI-SLAM 360°感知, 嵌入式平台验证 全景特征提取+loop closure。室内VLN定位基础",
    "problem": "全景VI-SLAM, 嵌入式平台方向的核心问题与挑战",
    "method": "全景VI-SLAM 360°感知, 嵌入式平台验证 全景特征提取+loop closure",
    "value": "室内VLN定位基础",
    "why_relevant": "室内VLN定位基础",
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
    "tags": ["VLM ROS2中间件封装"],
    "summary": "VLM中间件 标准化VLM集成到ROS2。MCP工具封装参考",
    "problem": "VLM ROS2中间件封装方向的核心问题与挑战",
    "method": "VLM中间件 标准化VLM集成到ROS2",
    "value": "MCP工具封装参考",
    "why_relevant": "MCP工具封装参考",
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
    "tags": ["轻量级全景分割, 边缘部署"],
    "summary": "轻量级全景分割 资源受限平台高效分割。机载实时感知",
    "problem": "轻量级全景分割, 边缘部署方向的核心问题与挑战",
    "method": "轻量级全景分割 资源受限平台高效分割",
    "value": "机载实时感知",
    "why_relevant": "机载实时感知",
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
    "tags": ["Action Flow Matching, 2.4x加速"],
    "summary": "流式VLA推理优化 Action Flow Matching替代action chunking Action saliency-aware adaptive observation。无人机实时控制加速",
    "problem": "Action Flow Matching, 2.4x加速方向的核心问题与挑战",
    "method": "流式VLA推理优化 Action Flow Matching替代action chunking Action saliency-aware adaptive observation",
    "value": "无人机实时控制加速",
    "why_relevant": "无人机实时控制加速",
    "research_axis": "VLA",
    "importance": "high",
  },
];

export const githubRepos: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "PX4",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": 12100,
    "url": "https://github.com/PX4/PX4-Autopilot",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:45:38.015596",
    "stars_source": "stale_cache",
  },
  {
    "name": "Prometheus (amov-lab)",
    "owner": "amov-lab",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    "stars": 3200,
    "url": "https://github.com/amov-lab/Prometheus",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-07-04T08:45:37.081761",
    "stars_source": "api",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 22,
    "url": "https://github.com/EmergenceAI/embodied-drone-agents",
    "language": "Python",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:45:47.807027",
    "stars_source": "stale_cache",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": 38,
    "url": "https://github.com/ion-g-ion/MAVLinkMCP",
    "language": "Python",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_source": "not_found",
  },
  {
    "name": "AerialVLA",
    "owner": "XuPeng23",
    "description": "端到端视觉-语言-动作无人机导航模型，支持自然语言指令控制无人机。",
    "stars": 64,
    "url": "https://github.com/XuPeng23/AerialVLA",
    "language": "Python",
    "tags": ["VLA", "UAV", "Navigation", "End-to-End"],
    "verified": true,
    "stars_source": "not_found",
  },
  {
    "name": "UAVs_Meet_LLMs",
    "owner": "Hub-Tian",
    "description": "UAV+LLM综合资源库，汇总无人机与大语言模型结合的论文、项目、数据集。",
    "stars": 500,
    "url": "https://github.com/Hub-Tian/UAVs_Meet_LLMs",
    "language": "Python",
    "tags": ["UAV", "LLM", "Survey", "Resources"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:45:56.523742",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 58,
    "url": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "language": "Python",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:45:59.294738",
    "stars_source": "stale_cache",
  },
  {
    "name": "LeRobot",
    "owner": "huggingface",
    "description": "HuggingFace开源机器人学习库，支持多种机器人(SO-100/SO-ARM100/101)、多种VLA模型(π0、SmolVLA等)、端到端训练推理。Garfield项目核心框架。",
    "stars": 25500,
    "url": "https://github.com/huggingface/lerobot",
    "language": "Python",
    "tags": ["LeRobot", "VLA", "Robot", "HuggingFace", "SO-ARM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:46:01.897929",
    "stars_source": "stale_cache",
  },
  {
    "name": "dimensionalOS",
    "owner": "dimensionalOS",
    "description": "Agentic OS for physical space，自然语言控制多种机器人(含无人机)，支持多种AI模型和工具。",
    "stars": 3600,
    "url": "https://github.com/dimensionalOS/dimos",
    "language": "Python",
    "tags": ["Agent", "OS", "Robot", "UAV", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:46:04.584104",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": 4400,
    "url": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "language": "Python",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:46:08.351206",
    "stars_source": "stale_cache",
  },
  {
    "name": "awesome-embodied-vla-va-vln",
    "owner": "jonyzhang2023",
    "description": "Embodied AI/VLA/VLN综述列表，汇总具身智能、视觉-语言-动作模型、视觉语言导航相关论文。",
    "stars": 3300,
    "url": "https://github.com/jonyzhang2023/awesome-embodied-vla-va-vln",
    "language": "Python",
    "tags": ["Embodied AI", "VLA", "VLN", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:46:11.213971",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 520,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_source": "not_found",
  },
  {
    "name": "reflex-vla",
    "owner": "FastCrest",
    "description": "一键部署VLA模型到边缘GPU，支持多种VLA模型的边缘优化推理。",
    "stars": 0,
    "url": "https://github.com/FastCrest/reflex-vla",
    "language": "Python",
    "tags": ["VLA", "Edge", "GPU", "Deployment"],
    "verified": true,
    "stars_last_checked_at": "2026-07-04T08:46:12.009460",
    "stars_source": "api",
  },
  {
    "name": "CarlaAir",
    "owner": "louiszengCN",
    "description": "CARLA + 无人机空地一体仿真平台，统一AirSim + CARLA到单一Unreal Engine进程。",
    "stars": 1000,
    "url": "https://github.com/louiszengCN/CarlaAir",
    "language": "C++",
    "tags": ["Simulation", "UAV", "CARLA", "AirSim"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:46:26.647281",
    "stars_source": "stale_cache",
  },
  {
    "name": "skynet",
    "owner": "hybridgroup",
    "description": "LLM + MCP协议控制真实机器人和无人机，支持自然语言控制多种平台。",
    "stars": 53,
    "url": "https://github.com/hybridgroup/skynet",
    "language": "Python",
    "tags": ["LLM", "MCP", "Robot", "UAV", "Agent"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:46:29.526265",
    "stars_source": "stale_cache",
  },
  {
    "name": "Awesome-VLA-UAVs",
    "owner": "TheBrainLab",
    "description": "VLA/VLN无人机论文/模型/数据集汇总，空中机器人VLA方向最全资源列表。",
    "stars": 60,
    "url": "https://github.com/TheBrainLab/Awesome-VLA-UAVs",
    "language": "Python",
    "tags": ["VLA", "UAV", "VLN", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:46:32.572956",
    "stars_source": "stale_cache",
  },
];

export const news: News[] = [
  {
    "title": "智谱首次开源具身智能模型 + 1000 小时机器人数据集",
    "source": "网易",
    "url": "https://www.163.com/dy/article/L0NI4D5C0511C4AA.html",
    "date": "2026-07-04",
    "summary": "万亿市值的智谱首次开源具身智能模型以及 1000 小时机器人数据集，覆盖动作、推理、预训练全栈。",
    "published_at": "2026-07-04",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "VLA",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "库萨科技发布全模态具身模型 Kusa Omni-CTS 与专用操作系统 Kusa OS",
    "source": "36氪",
    "url": "https://36kr.com/p/3876735615758341",
    "date": "2026-07-03",
    "summary": "全模态具身模型 Kusa Omni-CTS 与专用操作系统 Kusa OS 发布，助力城市服务机器人从「执行者」变为「思考者」。",
    "published_at": "2026-07-03",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "美团发布 LongCat-2.0 万亿参数大模型（首个全国产算力训练）",
    "source": "中证网",
    "url": "https://www.cs.com.cn/ssgs/01/2026/06/30/detail_2026063010021451.html",
    "date": "2026-07-01",
    "summary": "6月30日发布，1.6万亿参数 MoE，原生 1M 上下文，OpenRouter 全球总调用量前三；采用零计算专家机制、ScMoE 架构，全流程国产算力。",
    "published_at": "2026-07-01",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "VLA",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "星源智发布全球首个具身交互世界模型ω-EVA",
    "source": "腾讯新闻",
    "url": "https://news.qq.com/rain/a/20260616A000NF00",
    "date": "2026-06-30",
    "summary": "世界模型首次进入行动决策闭环，星源智 ω-EVA、RoboScience Visics 同期发布，具身智能体开始主动建模、预测、行动。",
    "published_at": "2026-06-30",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "VLA",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "国内「异构智能体」三合一突破",
    "source": "腾讯云",
    "url": "https://cloud.tencent.com/developer/article/2326866",
    "date": "2026-06-29",
    "summary": "国内团队让无人机+机器狗+机械臂在大模型协调下自主协作，是异构多智能体落地的里程碑案例。",
    "published_at": "2026-06-29",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "fresh",
    "archived": false,
  },
  {
    "title": "OpenAI GPT-5.6 发布",
    "source": "新浪财经",
    "url": "https://finance.sina.com.cn/stock/usstock/summary/2026-06-28/doc-iniexche6625078.shtml",
    "date": "2026-06-28",
    "summary": "OpenAI 分阶段推出 GPT-5.6，重点优化安全校验机制，提升模型在物理部署与高风险场景下的可信度与稳健性。",
    "published_at": "2026-06-28",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "VLA",
    "freshness": "fresh",
    "archived": false,
  },
];

export const trends: Trend[] = [
  {
    "icon": "🤖",
    "title": "VGA > VLA for 控制",
    "description": "精确控制任务需要几何优先而非语言优先",
  },
  {
    "icon": "🖥️",
    "title": "第一人称仿真",
    "description": "EgoSim等解决3D一致性问题",
  },
  {
    "icon": "👁️",
    "title": "全景感知",
    "description": "PanoAir等突破FoV限制",
  },
  {
    "icon": "🔧",
    "title": "中间件标准化",
    "description": "ROS2封装降低VLM集成门槛",
  },
  {
    "icon": "⚡",
    "title": "边缘部署",
    "description": "LiPS等轻量级方案适配嵌入式",
  },
];

export const stats = {
  papersCount: 8,
  githubCount: 16,
  newsCount: 6,
  exportTime: "2026-07-04T08:45:32.980028",
};
