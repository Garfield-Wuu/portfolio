// Auto-generated at 2026-07-18T08:47:45.928161
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
  },
];

export const githubRepos: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "PX4",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": 12200,
    "url": "https://github.com/PX4/PX4-Autopilot",
    "language": "C++",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:09.766789",
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
    "stars_last_checked_at": "2026-07-18T08:46:12.751562",
    "stars_source": "api",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 24,
    "url": "https://github.com/EmergenceAI/embodied-drone-agents",
    "language": "Python",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:15.562036",
    "stars_source": "api",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": 21,
    "url": "https://github.com/ion-g-ion/MAVLinkMCP",
    "language": "Python",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:18.382458",
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
    "stars_last_checked_at": "2026-07-18T08:46:21.571235",
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
    "stars_last_checked_at": "2026-07-18T08:46:24.420850",
    "stars_source": "api",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 61,
    "url": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "language": "Python",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:27.140972",
    "stars_source": "api",
  },
  {
    "name": "LeRobot",
    "owner": "huggingface",
    "description": "HuggingFace开源机器人学习库，支持多种机器人(SO-100/SO-ARM100/101)、多种VLA模型(π0、SmolVLA等)、端到端训练推理。Garfield项目核心框架。",
    "stars": 25900,
    "url": "https://github.com/huggingface/lerobot",
    "language": "Python",
    "tags": ["LeRobot", "VLA", "Robot", "HuggingFace", "SO-ARM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:29.855798",
    "stars_source": "api",
  },
  {
    "name": "dimensionalOS",
    "owner": "dimensionalOS",
    "description": "Agentic OS for physical space，自然语言控制多种机器人(含无人机)，支持多种AI模型和工具。",
    "stars": 3700,
    "url": "https://github.com/dimensionalOS/dimos",
    "language": "Python",
    "tags": ["Agent", "OS", "Robot", "UAV", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:32.614688",
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
    "stars_last_checked_at": "2026-07-18T08:46:35.388071",
    "stars_source": "api",
  },
  {
    "name": "awesome-embodied-vla-va-vln",
    "owner": "jonyzhang2023",
    "description": "Embodied AI/VLA/VLN综述列表，汇总具身智能、视觉-语言-动作模型、视觉语言导航相关论文。",
    "stars": 3400,
    "url": "https://github.com/jonyzhang2023/awesome-embodied-vla-va-vln",
    "language": "Python",
    "tags": ["Embodied AI", "VLA", "VLN", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:38.232741",
    "stars_source": "api",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 794,
    "url": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "language": "Python",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:40.854412",
    "stars_source": "api",
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
    "stars_last_checked_at": "2026-07-18T08:46:43.985715",
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
    "stars_last_checked_at": "2026-07-18T08:46:46.890826",
    "stars_source": "api",
  },
  {
    "name": "skynet",
    "owner": "hybridgroup",
    "description": "LLM + MCP协议控制真实机器人和无人机，支持自然语言控制多种平台。",
    "stars": 57,
    "url": "https://github.com/hybridgroup/skynet",
    "language": "Python",
    "tags": ["LLM", "MCP", "Robot", "UAV", "Agent"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:49.670774",
    "stars_source": "api",
  },
  {
    "name": "Awesome-VLA-UAVs",
    "owner": "TheBrainLab",
    "description": "VLA/VLN无人机论文/模型/数据集汇总，空中机器人VLA方向最全资源列表。",
    "stars": 62,
    "url": "https://github.com/TheBrainLab/Awesome-VLA-UAVs",
    "language": "Python",
    "tags": ["VLA", "UAV", "VLN", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-07-18T08:46:52.497492",
    "stars_source": "api",
  },
];

export const news: News[] = [
  {
    "title": "具身智能进入「具身原生」阶段",
    "source": "网络",
    "url": "https://news.aibase.com/zh/news/29517",
    "date": "_2026-07-1",
    "summary": "> 📄 完整 PDF 版本：`reports/daily_briefing/briefing_2026-07-15.pdf` 今日多云转大雨，局地暴雨风险，气温 27-30℃，湿度 89%，注意防暑与雷雨防御 - 具身智能进入「具身原生」阶段 — 蚂蚁灵波四天连发六款模型，LingBot-VA2.0 首个具身原生预训练模型，单卡150Hz实时推理，从「数字世界嫁接」转向「物理世界原生设计」",
    "published_at": "_2026-07-1",
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
  },
  {
    "title": "Unitree B2-W 四足机器人发布",
    "source": "Unitree",
    "url": "https://www.unitree.com.cn/",
    "date": "2026-03-25",
    "summary": "宇树科技发布B2-W工业四足机器人，负载30kg，续航4小时，支持复杂地形巡检，配备深度相机和激光雷达。",
    "published_at": "2026-03-25",
    "verified": true,
    "why_it_matters": "四足机器人硬件迭代，负载和续航大幅提升，工业巡检应用加速落地",
    "research_axis": "Robotics",
    "freshness": "fresh",
  },
  {
    "title": "DJI Air 3S 无人机发布",
    "source": "DJI",
    "url": "https://www.dji.com/cn/air-3s",
    "date": "2026-03-28",
    "summary": "大疆发布Air 3S，配备1英寸主摄+70mm长焦双摄系统，全向避障，支持APAS 5.0，续航48分钟，面向消费级航拍市场。",
    "published_at": "2026-03-28",
    "verified": true,
    "why_it_matters": "消费级无人机避障和续航持续进化，DJI技术动态",
    "research_axis": "Aircraft",
    "freshness": "fresh",
  },
  {
    "title": "OpenAI 发布 GPT-4.5 API，扩展上下文窗口",
    "source": "OpenAI",
    "url": "https://openai.com/index/gpt-4-5-launch",
    "date": "2026-04-02",
    "summary": "OpenAI向开发者开放GPT-4.5 API，上下文窗口扩展至200k tokens，定价下调40%，强化函数调用和结构化输出能力。",
    "published_at": "2026-04-02",
    "verified": true,
    "why_it_matters": "LLM API成本下降+长上下文对无人机NL指令解析和任务规划直接利好",
    "research_axis": "VLA",
    "freshness": "fresh",
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
  exportTime: "2026-07-18T08:46:06.928509",
};
