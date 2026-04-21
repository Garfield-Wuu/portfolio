// Auto-generated at 2026-04-21T08:47:06.408463
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
    "title": "FineCog-Nav",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.16298",
    "date": "2026-04-16",
    "summary": "细粒度认知模块化 ⭐⭐⭐⭐⭐ 7个认知模块: 语言处理/感知/注意力/记忆/想象/推理/决策 中等规模基础模型驱动，适合边缘部署。模块化认知架构参考，7模块分解设计",
    "problem": "细粒度认知模块UAV VLN方向的核心问题与挑战",
    "method": "细粒度认知模块化 ⭐⭐⭐⭐⭐ 7个认知模块: 语言处理/感知/注意力/记忆/想象/推理/决策 中等规模基础模型驱动，适合边缘部署",
    "value": "模块化认知架构参考，7模块分解设计",
    "why_relevant": "模块化认知架构参考，7模块分解设计",
    "research_axis": "Navigation",
    "link": "https://arxiv.org/abs/2604.16298",
    "pdf_url": "https://arxiv.org/pdf/2604.16298",
    "tags": ["细粒度认知模块UAV VLN"],
    "importance": "high",
  }
  {
    "title": "ChemBot",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15671",
    "date": "2026-04-15",
    "summary": "VLA长程记忆 + MCP Server ⭐⭐⭐⭐⭐ 双层闭环框架: AI Agent + Skill-VLA Dual-layer Memory Architecture: 成功轨迹consolidation为可检索资产。多点巡航长期状态管理 + MCP协议标准化",
    "problem": "VLA长程记忆+MCP Server方向的核心问题与挑战",
    "method": "VLA长程记忆 + MCP Server ⭐⭐⭐⭐⭐ 双层闭环框架: AI Agent + Skill-VLA Dual-layer Memory Architecture: 成功轨迹consolidation为可检索资产",
    "value": "多点巡航长期状态管理 + MCP协议标准化",
    "why_relevant": "多点巡航长期状态管理 + MCP协议标准化",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15671",
    "pdf_url": "https://arxiv.org/pdf/2604.15671",
    "tags": ["VLA长程记忆+MCP Server"],
    "importance": "high",
  }
  {
    "title": "π₀.₇",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15483",
    "date": "2026-04-15",
    "summary": "Physical Intelligence新一代VLA ⭐⭐⭐⭐⭐ Diverse Context Conditioning: 语言+元数据+子目标图像 零样本跨本体泛化，无重训练即可在新机器人执行。VLA scaling方向参考，零样本多平台支持",
    "problem": "Physical Intelligence通用VLA方向的核心问题与挑战",
    "method": "Physical Intelligence新一代VLA ⭐⭐⭐⭐⭐ Diverse Context Conditioning: 语言+元数据+子目标图像 零样本跨本体泛化，无重训练即可在新机器人执行",
    "value": "VLA scaling方向参考，零样本多平台支持",
    "why_relevant": "VLA scaling方向参考，零样本多平台支持",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15483",
    "pdf_url": "https://arxiv.org/pdf/2604.15483",
    "tags": ["Physical Intelligence通用VLA"],
    "importance": "high",
  }
  {
    "title": "RAD-2",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15306",
    "date": "2026-04-15",
    "summary": "生成-判别器RL运动规划 ⭐⭐⭐⭐ Generator-Diffusion + Discriminator架构解决随机不稳定性 多模态未来不确定性建模。无人机多候选轨迹生成与筛选",
    "problem": "生成-判别器RL运动规划方向的核心问题与挑战",
    "method": "生成-判别器RL运动规划 ⭐⭐⭐⭐ Generator-Diffusion + Discriminator架构解决随机不稳定性 多模态未来不确定性建模",
    "value": "无人机多候选轨迹生成与筛选",
    "why_relevant": "无人机多候选轨迹生成与筛选",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15306",
    "pdf_url": "https://arxiv.org/pdf/2604.15306",
    "tags": ["生成-判别器RL运动规划"],
    "importance": "high",
  }
  {
    "title": "Viewpoint Rotation",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15294",
    "date": "2026-04-15",
    "summary": "LLM/VLM空间推理可解释性 ⭐⭐⭐⭐ 无视觉输入的空间旋转理解能力 语言可以作为空间推理的载体。自然语言→空间意图映射参考",
    "problem": "LLM/VLM空间推理可解释性方向的核心问题与挑战",
    "method": "LLM/VLM空间推理可解释性 ⭐⭐⭐⭐ 无视觉输入的空间旋转理解能力 语言可以作为空间推理的载体",
    "value": "自然语言→空间意图映射参考",
    "why_relevant": "自然语言→空间意图映射参考",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.15294",
    "pdf_url": "https://arxiv.org/pdf/2604.15294",
    "tags": ["LLM/VLM空间推理可解释性"],
    "importance": "high",
  }
  {
    "title": "Safe Human-Robot Collab",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15221",
    "date": "2026-04-15",
    "summary": "共形预测安全保证方向最新研究。",
    "problem": "共形预测安全保证方向的核心问题与挑战",
    "method": "共形预测安全保证",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15221",
    "pdf_url": "https://arxiv.org/pdf/2604.15221",
    "tags": ["共形预测安全保证"],
    "importance": "high",
  }
  {
    "title": "Multi-UAV Rigid-Payload",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15074",
    "date": "2026-04-15",
    "summary": "级联运输轨迹规划方向最新研究。",
    "problem": "级联运输轨迹规划方向的核心问题与挑战",
    "method": "级联运输轨迹规划",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15074",
    "pdf_url": "https://arxiv.org/pdf/2604.15074",
    "tags": ["级联运输轨迹规划"],
    "importance": "high",
  }
  {
    "title": "RL-STPA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15201",
    "date": "2026-04-15",
    "summary": "安全关键RL系统论分析方向最新研究。",
    "problem": "安全关键RL系统论分析方向的核心问题与挑战",
    "method": "安全关键RL系统论分析",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15201",
    "pdf_url": "https://arxiv.org/pdf/2604.15201",
    "tags": ["安全关键RL系统论分析"],
    "importance": "high",
  }
];

export const githubProjects: GitHub[] = [
  {
    "name": "PX4 Autopilot",
    "owner": "PX4",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": 11500,
    "language": "C++",
    "link": "https://github.com/PX4/PX4-Autopilot",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Drone"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:10.321352",
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
    "stars_last_checked_at": "2026-04-20T08:45:11.272875",
    "stars_source": "stale_cache",
  }
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 19,
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:12.259640",
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
    "stars_last_checked_at": "2026-04-20T08:45:13.237577",
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
    "stars_last_checked_at": "2026-04-20T08:45:14.155294",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 636,
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:15.072341",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": 4300,
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:16.026959",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 51,
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-04-20T08:45:16.993113",
    "stars_source": "stale_cache",
  }
];

export const news: News[] = [
  {
    "title": "openai-agents-python ⭐ 热门",
    "source": "GitHub",
    "url": "https://github.com/openai/openai-agents-python",
    "date": "_2026-04-2",
    "summary": "Python | 来源：OpenAI 💡 核心：OpenAI 多智能体工作流框架  https://github.com/openai/openai-agents-python",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "ExpressLRS ⭐ 活跃",
    "source": "GitHub",
    "url": "https://github.com/ExpressLRS/ExpressLRS",
    "date": "_2026-04-2",
    "summary": "C | 来源：ExpressLRS 💡 核心：高性能开源无线电控制链路 🎯 亮点：",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  }
  {
    "title": "esp-drone ⭐ 活跃",
    "source": "GitHub",
    "url": "https://github.com/espressif/esp-drone",
    "date": "_2026-04-2",
    "summary": "C | 来源：Espressif 💡 核心：ESP32 系列 SoC 的迷你无人机/四旋翼固件  https://github.com/espressif/esp-drone",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
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
];

export const trends: string[] = [
  {"icon": "📡", "title": "Action流形假设", "description": "从去噪→投影到可行流形，DiT > 扩散动作生成"},
  {"icon": "📡", "title": "统一数据格式成标配", "description": "6M轨迹跨形态统一是泛化基础"},
  {"icon": "👁️", "title": "模块化感知", "description": "双流VLM+几何即插即用3D模块增强空间理解"},
];