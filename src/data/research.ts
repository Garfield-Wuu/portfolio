// Auto-generated at 2026-04-19T08:46:39.653113
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
    "title": "GlobalSplat",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15284",
    "date": "2026-04-15",
    "summary": "前馈3DGS ⭐⭐⭐⭐ 78ms单次前向推理，4MB占用，16K Gaussians \"Align first, decode later\"原则。室内VLN实时3D场景重建",
    "problem": "前馈3DGS, 78ms, 16K Gaussians方向的核心问题与挑战",
    "method": "前馈3DGS ⭐⭐⭐⭐ 78ms单次前向推理，4MB占用，16K Gaussians \"Align first, decode later\"原则",
    "value": "室内VLN实时3D场景重建",
    "why_relevant": "室内VLN实时3D场景重建",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15284",
    "pdf_url": "https://arxiv.org/pdf/2604.15284",
    "tags": ["前馈3DGS, 78ms, 16K Gaussians"],
    "importance": "high",
  },
  {
    "title": "Bi-CMPStereo",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15312",
    "date": "2026-04-15",
    "summary": "事件-帧立体匹配 ⭐⭐⭐⭐ 双向跨模态提示融合语义和结构特征 高速运动和挑战性照明下鲁棒3D感知。无人机高速飞行视觉鲁棒性",
    "problem": "事件-帧跨模态立体匹配方向的核心问题与挑战",
    "method": "事件-帧立体匹配 ⭐⭐⭐⭐ 双向跨模态提示融合语义和结构特征 高速运动和挑战性照明下鲁棒3D感知",
    "value": "无人机高速飞行视觉鲁棒性",
    "why_relevant": "无人机高速飞行视觉鲁棒性",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15312",
    "pdf_url": "https://arxiv.org/pdf/2604.15312",
    "tags": ["事件-帧跨模态立体匹配"],
    "importance": "high",
  },
  {
    "title": "DockAnywhere",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15023",
    "date": "2026-04-15",
    "summary": "L) - 移动操作视角泛化 ⭐⭐⭐⭐ 3D点云跨视角泛化, 单一演示 → 多docking配置 Base motion + Manipulation skill解耦。无人机着陆点多角度泛化",
    "problem": "移动操作视角泛化, RA-L方向的核心问题与挑战",
    "method": "L) - 移动操作视角泛化 ⭐⭐⭐⭐ 3D点云跨视角泛化, 单一演示 → 多docking配置 Base motion + Manipulation skill解耦",
    "value": "无人机着陆点多角度泛化",
    "why_relevant": "无人机着陆点多角度泛化",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15023",
    "pdf_url": "https://arxiv.org/pdf/2604.15023",
    "tags": ["移动操作视角泛化, RA-L"],
    "importance": "high",
  },
  {
    "title": "Dual Pose-Graph",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15168",
    "date": "2026-04-15",
    "summary": "无人机竞速语义SLAM ⭐⭐⭐⭐ 双pose graph: 语义 + 几何分离融合 单目相机满足payload约束。室内VLN语义定位, GPS失效场景",
    "problem": "语义SLAM无人机竞速方向的核心问题与挑战",
    "method": "无人机竞速语义SLAM ⭐⭐⭐⭐ 双pose graph: 语义 + 几何分离融合 单目相机满足payload约束",
    "value": "室内VLN语义定位, GPS失效场景",
    "why_relevant": "室内VLN语义定位, GPS失效场景",
    "research_axis": "Perception",
    "link": "https://arxiv.org/abs/2604.15168",
    "pdf_url": "https://arxiv.org/pdf/2604.15168",
    "tags": ["语义SLAM无人机竞速"],
    "importance": "high",
  },
  {
    "title": "Abstract Sim2Real",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15289",
    "date": "2026-04-15",
    "summary": "信息状态近似 ⭐⭐⭐⭐ Approximate Information States (AIS) 框架 信息论分析任务相关信息的必需层次。仿真设计理论指导",
    "problem": "信息状态近似, RL理论方向的核心问题与挑战",
    "method": "信息状态近似 ⭐⭐⭐⭐ Approximate Information States (AIS) 框架 信息论分析任务相关信息的必需层次",
    "value": "仿真设计理论指导",
    "why_relevant": "仿真设计理论指导",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15289",
    "pdf_url": "https://arxiv.org/pdf/2604.15289",
    "tags": ["信息状态近似, RL理论"],
    "importance": "high",
  },
  {
    "title": "HiST-AT",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15215",
    "date": "2026-04-15",
    "summary": "层次化动作分词器 ⭐⭐⭐⭐ 两级向量量化: 细粒度子簇 → 粗粒度簇 时空版本: 多级聚类同时恢复动作和时间戳。动作嵌入表示，离散化简化推理",
    "problem": "层次化时空动作分词器方向的核心问题与挑战",
    "method": "层次化动作分词器 ⭐⭐⭐⭐ 两级向量量化: 细粒度子簇 → 粗粒度簇 时空版本: 多级聚类同时恢复动作和时间戳",
    "value": "动作嵌入表示，离散化简化推理",
    "why_relevant": "动作嵌入表示，离散化简化推理",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15215",
    "pdf_url": "https://arxiv.org/pdf/2604.15215",
    "tags": ["层次化时空动作分词器"],
    "importance": "high",
  },
  {
    "title": "R3D",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.15281",
    "date": "2026-04-15",
    "summary": "3D策略学习 ⭐⭐⭐⭐⭐ Transformer 3D Encoder + Diffusion Decoder 解决3D策略学习的训练不稳定和过拟合问题。无人机3D环境理解，跨平台迁移",
    "problem": "3D策略学习, Transformer+Diffusion方向的核心问题与挑战",
    "method": "3D策略学习 ⭐⭐⭐⭐⭐ Transformer 3D Encoder + Diffusion Decoder 解决3D策略学习的训练不稳定和过拟合问题",
    "value": "无人机3D环境理解，跨平台迁移",
    "why_relevant": "无人机3D环境理解，跨平台迁移",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.15281",
    "pdf_url": "https://arxiv.org/pdf/2604.15281",
    "tags": ["3D策略学习, Transformer+Diffusion"],
    "importance": "high",
  },
  {
    "title": "SpaceMind",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.14399",
    "date": "2026-04-14",
    "summary": "模块化自演进VLM智能体 ⭐⭐⭐⭐ 三维分解: 技能模块动态路由 + MCP工具 + 推理模式 MCP-Redis接口实现仿真↔真机无缝切换。MCP作为LLM→PX4标准接口的成熟实现",
    "problem": "模块化自演进VLM智能体, MCP工具方向的核心问题与挑战",
    "method": "模块化自演进VLM智能体 ⭐⭐⭐⭐ 三维分解: 技能模块动态路由 + MCP工具 + 推理模式 MCP-Redis接口实现仿真↔真机无缝切换",
    "value": "MCP作为LLM→PX4标准接口的成熟实现",
    "why_relevant": "MCP作为LLM→PX4标准接口的成熟实现",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.14399",
    "pdf_url": "https://arxiv.org/pdf/2604.14399",
    "tags": ["模块化自演进VLM智能体, MCP工具"],
    "importance": "high",
  },
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
    "stars_last_checked_at": "2026-04-19T08:45:07.575437",
    "stars_source": "api",
  },
  {
    "name": "Prometheus (amov-lab)",
    "owner": "amov-lab",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    "stars": 3100,
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus",
    "tags": ["PX4", "UAV", "ROS", "Autonomous Flight", "Tracking"],
    "verified": true,
    "stars_last_checked_at": "2026-04-19T08:45:08.535959",
    "stars_source": "api",
  },
  {
    "name": "embodied-drone-agents",
    "owner": "EmergenceAI",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": 18,
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": ["LLM", "MAVSDK", "LangGraph", "Agent", "UAV"],
    "verified": true,
    "stars_last_checked_at": "2026-04-19T08:45:09.492961",
    "stars_source": "api",
  },
  {
    "name": "llm-uav (Atmaca)",
    "owner": "furkanisikay",
    "description": "集成Gemma 3 4B与无人机控制，支持自然语言指令，边缘部署。",
    "stars": 0,
    "language": "Python",
    "link": "https://github.com/furkanisikay/llm-uav",
    "tags": ["LLM", "UAV", "Edge AI", "NLP"],
    "verified": true,
    "stars_last_checked_at": "2026-04-19T08:45:10.419558",
    "stars_source": "api",
  },
  {
    "name": "MAVLinkMCP",
    "owner": "ion-g-ion",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": 16,
    "language": "Python",
    "link": "https://github.com/ion-g-ion/MAVLinkMCP",
    "tags": ["MAVLink", "MCP", "PX4", "LLM"],
    "verified": true,
    "stars_last_checked_at": "2026-04-19T08:45:11.321082",
    "stars_source": "api",
  },
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 636,
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-19T08:45:12.257179",
    "stars_source": "api",
  },
  {
    "name": "Awesome-LLM-Robotics",
    "owner": "GT-RIPL",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": 4300,
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": ["LLM", "Robot", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-19T08:45:13.180652",
    "stars_source": "api",
  },
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 51,
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-04-19T08:45:14.096311",
    "stars_source": "api",
  },
];

export const news: News[] = [
  {
    "title": "SwarmGPT：LLM 控制无人机蜂群编舞",
    "link": "https://utiasdsl.github.io/swarm_GPT/",
    "summary": "*：首个将 LLM 与安全蜂群运动规划结合的系统\n- 用户通过自然语言指令自动生成同步无人机表演\n- 集成安全约束的多机协同规划",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "TypeFly：低延迟 LLM 无人机规划",
    "link": "https://typefly.github.io/",
    "summary": "*：专为无人机设计的低延迟 LLM 规划系统\n- MiniSpec 程序 + LLM query 技能\n- 复杂任务成本降低 >2×，执行时间缩短 >2×\n- query 和 prompt 工程显著提升复杂任务成功率",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "LLM-controlled-drone：GPT + PX4 集成",
    "link": "https://github.com/pratikPhadte/LLM-controlled-drone",
    "summary": "*：\n- Main orchestrator 聚合遥测数据、调用 LLM、以 10Hz 发布 PX4 setpoint\n- 提供 Gazebo 仿真支持\n- 模块化设计，便于二次开发",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "Skynet：LLM 控制机器人和无人机的 MCP 系统",
    "link": "https://github.com/hybridgroup/skynet",
    "summary": "*：通过 MCP (Model Context Protocol) 用 LLM 控制真实机器人和无人机\n- 支持 Bash 脚本化控制\n- 跨平台支持",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  },
  {
    "title": "UAVs_Meet_LLMs：综述性代码库",
    "link": "https://github.com/Hub-Tian/UAVs_Meet_LLMs",
    "summary": "*：收集了 LLM+无人机相关论文和代码\n- 涵盖基于安全的视觉自主规划、Natural Language 控制PX4/Gazebo 等方向\n- 持续更新",
    "source": "GitHub",
    "date": "_2026-04-1",
    "published_at": "_2026-04-1",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false,
  },
];

export const trends: string[] = [
  {"icon": "📡", "title": "多轮对话成为VLN新范式", "description": "LongNav-R1等证明多轮交互显著优于单轮决策"},
  {"icon": "📡", "title": "跨具身迁移", "description": "MiMo-Embodied证明具身AI和自动驾驶存在强正向迁移"},
  {"icon": "📡", "title": "VLM+LLM融合", "description": "UAV-VLRR等展示LLM增强场景理解的优势"},
  {"icon": "📡", "title": "资源整合", "description": "awesome-embodied-vla-va-vln等成为研究必备参考"},
];