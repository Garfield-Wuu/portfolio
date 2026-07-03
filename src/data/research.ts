// Auto-generated at 2026-07-03T08:50:39.205191
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
    "stars_source": "api",
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
    "stars_last_checked_at": "2026-07-01T08:45:39.503639",
    "stars_source": "stale_cache",
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
    "stars_source": "api",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": 20,
    "url": "https://github.com/ion-g-ion/MAVLinkMCP",
    "language": "Python",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:45:50.733291",
    "stars_source": "api",
  },
  {
    "name": "AerialVLA",
    "owner": "XuPeng23",
    "description": "端到端视觉-语言-动作无人机导航模型，支持自然语言指令控制无人机。",
    "stars": 0,
    "url": "https://github.com/XuPeng23/AerialVLA",
    "language": "Python",
    "tags": ["VLA", "UAV", "Navigation", "End-to-End"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:45:53.686749",
    "stars_source": "api",
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
    "stars_source": "api",
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
    "stars_source": "api",
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
    "stars_source": "api",
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
    "stars_source": "api",
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
    "stars_source": "api",
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
    "stars_source": "api",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 768,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-03T08:46:13.909001",
    "stars_source": "api",
  },
  {
    "name": "reflex-vla",
    "owner": "FastCrest",
    "description": "一键部署VLA模型到边缘GPU，支持多种VLA模型的边缘优化推理。",
    "stars": 24,
    "url": "https://github.com/FastCrest/reflex-vla",
    "language": "Python",
    "tags": ["VLA", "Edge", "GPU", "Deployment"],
    "verified": true,
    "stars_source": "not_found",
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
    "stars_source": "api",
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
    "stars_source": "api",
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
    "stars_source": "api",
  },
];

export const news: News[] = [
  {
    "title": "美团发布 LongCat-2.0 万亿参数大模型（首个全国产算力训练）",
    "source": "网络",
    "url": "https://www.cs.com.cn/ssgs/01/2026/06/30/detail_2026063010021451.html",
    "date": "2026-07-01",
    "summary": "6月30日发布，1.6万亿参数 MoE，原生 1M 上下文，OpenRouter 全球总调用量前三；采用零计算专家机制、ScMoE 架构，全流程国产算力。",
    "published_at": "_2026-07-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "世界模型进入闭环时代",
    "source": "网络",
    "url": "https://news.qq.com/rain/a/20260616A000NF00",
    "date": "2026-06-30",
    "summary": "世界模型进入闭环时代：星源智 ω-EVA、RoboScience Visics 同期发布，具身智能体开始主动建模、预测、行动。",
    "published_at": "_2026-06-3",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "VLA 安全成为新焦点",
    "source": "网络",
    "url": "https://cloud.tencent.com/developer/article/2326866",
    "date": "2026-06-29",
    "summary": "ForesightSafety-VLA 等基准首次系统化测评 VLA 模型物理部署的安全失效，标志领域从 capability 转向 trustworthiness。",
    "published_at": "_2026-06-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "VLA 进入「可靠性收敛期」",
    "source": "网络",
    "url": "https://finance.sina.com.cn/stock/usstock/summary/2026-06-28/doc-iniexche6625078.shtml",
    "date": "2026-06-28",
    "summary": "本日 cs.RO 集中出现 PAMAE-VLA、PhysReflect-VLA、ForesightSafety-VLA 三篇可靠性方向论文，VLA 从「能跑」转向「可信落地」。",
    "published_at": "_2026-06-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "腾讯 Hy-Embodied-0.5-VLA 开源",
    "source": "GitHub",
    "url": "https://github.com/Tencent-Hunyuan/Hy-Embodied-0.5-VLA",
    "date": "2026-06-27",
    "summary": "腾讯 Hy-Embodied-0.5-VLA 开源：6/15 开源，基于 10000+ 小时 UMI 数据训练，RoboTwin 2.0 上达 90.9%/90.1% 成功率。",
    "published_at": "_2026-06-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "Robotics",
    "freshness": "unknown",
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
  newsCount: 5,
  exportTime: "2026-07-03T08:45:35.192155",
};
