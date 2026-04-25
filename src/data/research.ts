// Auto-generated at 2026-04-25T08:48:37.832098
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
    "title": "LoHo-Manip",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21924",
    "date": "2026-04-21",
    "summary": "Trace条件VLA长程规划 ⭐⭐⭐⭐⭐ Task-Management VLM + Executor VLA双系统 进程感知剩余计划：子任务序列+done+remaining分割。多点巡航隐式闭环，自动重规划无需手工恢复逻辑",
    "problem": "Trace条件VLA长程规划方向的核心问题与挑战",
    "method": "Trace条件VLA长程规划 ⭐⭐⭐⭐⭐ Task-Management VLM + Executor VLA双系统 进程感知剩余计划：子任务序列+done+remaining分割",
    "value": "多点巡航隐式闭环，自动重规划无需手工恢复逻辑",
    "why_relevant": "多点巡航隐式闭环，自动重规划无需手工恢复逻辑",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21924",
    "pdf_url": "https://arxiv.org/pdf/2604.21924",
    "tags": ["Trace条件VLA长程规划"],
    "importance": "high",
  }
  {
    "title": "VistaBot",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21914",
    "date": "2026-04-21",
    "summary": "视角鲁棒操作 ⭐⭐⭐⭐⭐ 4D几何估计 + 视图合成潜在提取 + 潜在动作学习 无需测试时相机标定。跨视角泛化着陆，室内VLN场景重建",
    "problem": "视角鲁棒操作, ICRA 2026方向的核心问题与挑战",
    "method": "视角鲁棒操作 ⭐⭐⭐⭐⭐ 4D几何估计 + 视图合成潜在提取 + 潜在动作学习 无需测试时相机标定",
    "value": "跨视角泛化着陆，室内VLN场景重建",
    "why_relevant": "跨视角泛化着陆，室内VLN场景重建",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21914",
    "pdf_url": "https://arxiv.org/pdf/2604.21914",
    "tags": ["视角鲁棒操作, ICRA 2026"],
    "importance": "high",
  }
  {
    "title": "CorridorVLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21241",
    "date": "2026-04-21",
    "summary": "稀疏锚点显式空间约束 ⭐⭐⭐⭐⭐ 预测稀疏空间锚点作为增量物理变化 走廊引导Flow-Matching动作头。PX4轨迹跟踪显式空间约束走廊",
    "problem": "稀疏锚点显式空间约束方向的核心问题与挑战",
    "method": "稀疏锚点显式空间约束 ⭐⭐⭐⭐⭐ 预测稀疏空间锚点作为增量物理变化 走廊引导Flow-Matching动作头",
    "value": "PX4轨迹跟踪显式空间约束走廊",
    "why_relevant": "PX4轨迹跟踪显式空间约束走廊",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21241",
    "pdf_url": "https://arxiv.org/pdf/2604.21241",
    "tags": ["稀疏锚点显式空间约束"],
    "importance": "high",
  }
  {
    "title": "Impact-Aware MPC",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21078",
    "date": "2026-04-21",
    "summary": "UAV着舰冲击感知 ⭐⭐⭐⭐⭐ 速度级刚体冲击模型 + 线性互补问题(LCP)嵌入MPC 预测不连续撞击后速度，抑制反弹。精确着陆控制，冲击预测比被动响应更安全",
    "problem": "UAV着舰冲击感知, IFAC 2026方向的核心问题与挑战",
    "method": "UAV着舰冲击感知 ⭐⭐⭐⭐⭐ 速度级刚体冲击模型 + 线性互补问题(LCP)嵌入MPC 预测不连续撞击后速度，抑制反弹",
    "value": "精确着陆控制，冲击预测比被动响应更安全",
    "why_relevant": "精确着陆控制，冲击预测比被动响应更安全",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21078",
    "pdf_url": "https://arxiv.org/pdf/2604.21078",
    "tags": ["UAV着舰冲击感知, IFAC 2026"],
    "importance": "high",
  }
  {
    "title": "How VLAs Really Work",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21192",
    "date": "2026-04-21",
    "summary": "VLA开放世界问题分析 ⭐⭐⭐⭐⭐ 揭示静态基准掩盖的问题：Lexical-Kinematic Shortcuts, Behavioral Inertia 安全违规检测缺失导致成功率高估。PX4安全护栏必须，静态成功≠真实安全",
    "problem": "VLA开放世界问题分析方向的核心问题与挑战",
    "method": "VLA开放世界问题分析 ⭐⭐⭐⭐⭐ 揭示静态基准掩盖的问题：Lexical-Kinematic Shortcuts, Behavioral Inertia 安全违规检测缺失导致成功率高估",
    "value": "PX4安全护栏必须，静态成功≠真实安全",
    "why_relevant": "PX4安全护栏必须，静态成功≠真实安全",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21192",
    "pdf_url": "https://arxiv.org/pdf/2604.21192",
    "tags": ["VLA开放世界问题分析"],
    "importance": "high",
  }
  {
    "title": "Discrete-Event UAV Recovery",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21740",
    "date": "2026-04-21",
    "summary": "集群故障恢复 ⭐⭐⭐⭐ 离散事件系统监督器 + 低层连续控制器混合架构 10架UAV模拟，故障后安全恢复。多机编队故障恢复机制",
    "problem": "集群故障恢复, WODES 2026方向的核心问题与挑战",
    "method": "集群故障恢复 ⭐⭐⭐⭐ 离散事件系统监督器 + 低层连续控制器混合架构 10架UAV模拟，故障后安全恢复",
    "value": "多机编队故障恢复机制",
    "why_relevant": "多机编队故障恢复机制",
    "research_axis": "Multi-agent",
    "link": "https://arxiv.org/abs/2604.21740",
    "pdf_url": "https://arxiv.org/pdf/2604.21740",
    "tags": ["集群故障恢复, WODES 2026"],
    "importance": "high",
  }
  {
    "title": "Hi-WM",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21741",
    "date": "2026-04-21",
    "summary": "World Model内人类纠正 ⭐⭐⭐⭐⭐ 策略在World Model内rollout，人类直接在模型内干预 状态缓存+rollback/branching支持多次纠正。室内World Model内安全纠正，无需真机试错",
    "problem": "World Model后训练，Human-in-the-Loop方向的核心问题与挑战",
    "method": "World Model内人类纠正 ⭐⭐⭐⭐⭐ 策略在World Model内rollout，人类直接在模型内干预 状态缓存+rollback/branching支持多次纠正",
    "value": "室内World Model内安全纠正，无需真机试错",
    "why_relevant": "室内World Model内安全纠正，无需真机试错",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21741",
    "pdf_url": "https://arxiv.org/pdf/2604.21741",
    "tags": ["World Model后训练", "Human-in-the-Loop"],
    "importance": "high",
  }
  {
    "title": "Task-Driven Co-Design",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.21894",
    "date": "2026-04-21",
    "summary": "多机器人协同设计框架 ⭐⭐⭐⭐ 基于单调协同设计理论，接口agnostic 联合优化机器人设计+舰队组成+规划。多无人机编队联合设计方法",
    "problem": "异构多机器人协同设计方向的核心问题与挑战",
    "method": "多机器人协同设计框架 ⭐⭐⭐⭐ 基于单调协同设计理论，接口agnostic 联合优化机器人设计+舰队组成+规划",
    "value": "多无人机编队联合设计方法",
    "why_relevant": "多无人机编队联合设计方法",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.21894",
    "pdf_url": "https://arxiv.org/pdf/2604.21894",
    "tags": ["异构多机器人协同设计"],
    "importance": "high",
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
    "stars_last_checked_at": "2026-04-24T08:45:07.887069",
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
    "stars_last_checked_at": "2026-04-24T08:45:08.787950",
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
    "stars_last_checked_at": "2026-04-24T08:45:09.762591",
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
    "stars_last_checked_at": "2026-04-24T08:45:10.651271",
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
    "stars_last_checked_at": "2026-04-24T08:45:11.561546",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-RL-VLA",
    "owner": "Denghaoyuan123",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": 644,
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": ["VLA", "RL", "Survey", "Papers"],
    "verified": true,
    "stars_last_checked_at": "2026-04-24T08:45:12.466064",
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
    "stars_last_checked_at": "2026-04-24T08:45:13.397849",
    "stars_source": "stale_cache",
  }
  {
    "name": "Awesome-Aerial-VLN",
    "owner": "Sautenich",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": 52,
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": ["UAV", "VLN", "Navigation", "Survey"],
    "verified": true,
    "stars_last_checked_at": "2026-04-24T08:45:14.330166",
    "stars_source": "stale_cache",
  }
];

export const news: News[] = [
  {
    "title": "NVIDIA Isaac GR00T N1.7 发布",
    "source": "NVIDIA",
    "url": "https://github.com/NVIDIA/Isaac-GR00T",
    "date": "2026-04-22",
    "summary": "基于 Cosmos-Reason2-2B（Qwen3-VL 架构）新 VLM 主干，相对末端执行器动作表示跨人类-机器人数据一致，可将从人类视频学到的操作先验直接迁移到机器人控制",
    "published_at": "2026-04-22",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false,
  }
  {
    "title": "commaai/openpilot ⭐ 60,695",
    "source": "GitHub",
    "url": "https://github.com/commaai/openpilot",
    "date": "_2026-04-2",
    "summary": "*：自动驾驶操作系统（300+ 车型支持）",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
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
  {"icon": "🤖", "title": "小型化VLA持续热门", "description": "PokeVLA等展示边缘部署能力"},
  {"icon": "👁️", "title": "连续感知成为标配", "description": "FingerEye等覆盖全交互阶段"},
  {"icon": "📡", "title": "不确定性量化进入核心", "description": "TD-Calibration等校准机制成熟"},
];