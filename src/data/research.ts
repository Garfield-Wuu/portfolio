// Auto-generated at 2026-04-06 08:46
// Do not edit manually

export interface ResearchPaper {
  title: string;
  authors: string;
  published_at: string;
  category: string[];
  summary: string;
  pdf_url: string;
  arxiv_id: string;
  github_url?: string;
  code_url?: string;
  highlights?: string[];
  research_axis: string[];
}

export interface GithubProject {
  name: string;
  full_name: string;
  description: string;
  language: string;
  stars: number;
  url: string;
  homepage: string;
  research_axis: string[];
}

export interface NewsItem {
  title: string;
  summary: string;
  source: string;
  date: string;
  url: string;
  research_axis: string[];
}

export const papers: ResearchPaper[] = [
  {
    "title": "UAV-Track VLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.02241",
    "date": "2026-04-02",
    "summary": "π₀.₅架构的无人机跟踪 基于π₀.₅架构，引入时序压缩网络 并行双分支解码器: 空间感知接地头 + Flow Matching动作专家。无人机VLA跟踪完整pipeline",
    "problem": "VLA无人机跟踪, π₀.₅架构方向的核心问题与挑战",
    "method": "π₀.₅架构的无人机跟踪 基于π₀.₅架构，引入时序压缩网络 并行双分支解码器: 空间感知接地头 + Flow Matching动作专家",
    "value": "无人机VLA跟踪完整pipeline",
    "why_relevant": "无人机VLA跟踪完整pipeline",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.02241",
    "pdf_url": "https://arxiv.org/pdf/2604.02241",
    "tags": [
      "VLA无人机跟踪, π₀.₅架构"
    ],
    "importance": "high"
  },
  {
    "title": "Stop Wandering / MetaNav",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.02318",
    "date": "2026-04-02",
    "summary": "元认知VLN, VLM查询↓20.7%方向最新研究。",
    "problem": "元认知VLN, VLM查询↓20.7%方向的核心问题与挑战",
    "method": "元认知VLN, VLM查询↓20.7%",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLM",
    "link": "https://arxiv.org/abs/2604.02318",
    "pdf_url": "https://arxiv.org/pdf/2604.02318",
    "tags": [
      "元认知VLN, VLM查询↓20.7%"
    ],
    "importance": "high"
  },
  {
    "title": "UniDriveVLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.02190",
    "date": "2026-04-02",
    "summary": "MoT专家解耦架构 三个专家: 驾驶理解 + 场景感知 + 动作规划 掩码注意力协调专家间通信。VLA架构设计参考",
    "problem": "MoT专家解耦, 感知-推理分离方向的核心问题与挑战",
    "method": "MoT专家解耦架构 三个专家: 驾驶理解 + 场景感知 + 动作规划 掩码注意力协调专家间通信",
    "value": "VLA架构设计参考",
    "why_relevant": "VLA架构设计参考",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.02190",
    "pdf_url": "https://arxiv.org/pdf/2604.02190",
    "tags": [
      "MoT专家解耦, 感知-推理分离"
    ],
    "importance": "high"
  },
  {
    "title": "PRO-SPECT",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.02109",
    "date": "2026-04-02",
    "summary": "UAV-UGV概率安全协同规划方向最新研究。",
    "problem": "UAV-UGV概率安全协同规划方向的核心问题与挑战",
    "method": "UAV-UGV概率安全协同规划",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.02109",
    "pdf_url": "https://arxiv.org/pdf/2604.02109",
    "tags": [
      "UAV-UGV概率安全协同规划"
    ],
    "importance": "high"
  },
  {
    "title": "AURA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01659",
    "date": "2026-04-01",
    "summary": "Shared Autonomy 新范式 将城市导航分解为高层人类指令 + 低层AI控制 Spatial-Aware Instruction Encoder 对齐多模态指令与视觉空间。Shared Autonomy模式用于人工监督的无人机控制",
    "problem": "Shared Autonomy 城市导航方向的核心问题与挑战",
    "method": "Shared Autonomy 新范式 将城市导航分解为高层人类指令 + 低层AI控制 Spatial-Aware Instruction Encoder 对齐多模态指令与视觉空间",
    "value": "Shared Autonomy模式用于人工监督的无人机控制",
    "why_relevant": "Shared Autonomy模式用于人工监督的无人机控制",
    "research_axis": "Navigation",
    "link": "https://arxiv.org/abs/2604.01659",
    "pdf_url": "https://arxiv.org/pdf/2604.01659",
    "tags": [
      "Shared Autonomy 城市导航"
    ],
    "importance": "high"
  },
  {
    "title": "Tex3D",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01618",
    "date": "2026-04-01",
    "summary": "VLA物理对抗攻击 Adversarial 3D textures: 更物理真实、更易部署 FBD (Foreground-Background Decoupling) 实现可微分纹理优化。VLA部署必须考虑输入验证和冗余感知",
    "problem": "VLA对抗3D纹理攻击方向的核心问题与挑战",
    "method": "VLA物理对抗攻击 Adversarial 3D textures: 更物理真实、更易部署 FBD (Foreground-Background Decoupling) 实现可微分纹理优化",
    "value": "VLA部署必须考虑输入验证和冗余感知",
    "why_relevant": "VLA部署必须考虑输入验证和冗余感知",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.01618",
    "pdf_url": "https://arxiv.org/pdf/2604.01618",
    "tags": [
      "VLA对抗3D纹理攻击"
    ],
    "importance": "high"
  },
  {
    "title": "AnchorVLA",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01567",
    "date": "2026-04-01",
    "summary": "锚定扩散高效VLA 扩散起点靠近可行解流形 → 无需大量去噪 截断扩散调度保留多模态动作生成。机载边缘部署的计算效率优化",
    "problem": "锚定扩散高效移动操作方向的核心问题与挑战",
    "method": "锚定扩散高效VLA 扩散起点靠近可行解流形 → 无需大量去噪 截断扩散调度保留多模态动作生成",
    "value": "机载边缘部署的计算效率优化",
    "why_relevant": "机载边缘部署的计算效率优化",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.01567",
    "pdf_url": "https://arxiv.org/pdf/2604.01567",
    "tags": [
      "锚定扩散高效移动操作"
    ],
    "importance": "high"
  },
  {
    "title": "DriveDreamer-Policy",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.01765",
    "date": "2026-04-01",
    "summary": "几何 grounding WAM 融合几何信息进入世界-动作联合建模 统一生成 + 规划。无人机仿真数据生成参考",
    "problem": "几何 grounding 世界动作模型方向的核心问题与挑战",
    "method": "几何 grounding WAM 融合几何信息进入世界-动作联合建模 统一生成 + 规划",
    "value": "无人机仿真数据生成参考",
    "why_relevant": "无人机仿真数据生成参考",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.01765",
    "pdf_url": "https://arxiv.org/pdf/2604.01765",
    "tags": [
      "几何 grounding 世界动作模型"
    ],
    "importance": "high"
  }
];

export const githubProjects: GithubProject[] = [
  {
    "name": "PX4 Autopilot",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": "11.4k",
    "language": "C++",
    "link": "https://github.com/PX4/PX4-Autopilot",
    "tags": [
      "PX4",
      "UAV",
      "ROS",
      "Autonomous Flight",
      "Drone"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-06T08:45:09.096462",
    "stars_source": "api"
  },
  {
    "name": "Prometheus (amov-lab)",
    "description": "PX4无人机自主飞行综合解决方案，包含目标追踪、集群控制、SLAM等30+应用模块。累计3.1k+ stars。",
    "stars": "3.1k",
    "language": "C++",
    "link": "https://github.com/amov-lab/Prometheus",
    "tags": [
      "PX4",
      "UAV",
      "ROS",
      "Autonomous Flight",
      "Tracking"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-06T08:45:10.787619",
    "stars_source": "api"
  },
  {
    "name": "embodied-drone-agents",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": "18",
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": [
      "LLM",
      "MAVSDK",
      "LangGraph",
      "Agent",
      "UAV"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-06T08:45:11.855557",
    "stars_source": "api"
  },
  {
    "name": "llm-uav (Atmaca)",
    "description": "集成Gemma 3 4B与无人机控制，支持自然语言指令，边缘部署。",
    "stars": "0",
    "language": "Python",
    "link": "https://github.com/furkanisikay/llm-uav",
    "tags": [
      "LLM",
      "UAV",
      "Edge AI",
      "NLP"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-06T08:45:12.849715",
    "stars_source": "api"
  },
  {
    "name": "MAVLinkMCP",
    "description": "MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。",
    "stars": "16",
    "language": "Python",
    "link": "https://github.com/ion-g-ion/MAVLinkMCP",
    "tags": [
      "MAVLink",
      "MCP",
      "PX4",
      "LLM"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-06T08:45:14.095969",
    "stars_source": "api"
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "617",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-06T08:45:15.103125",
    "stars_source": "api"
  },
  {
    "name": "Awesome-LLM-Robotics",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": "4.3k",
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": [
      "LLM",
      "Robot",
      "Survey",
      "Papers"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-06T08:45:16.098059",
    "stars_source": "api"
  },
  {
    "name": "Awesome-Aerial-VLN",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": "47",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": [
      "UAV",
      "VLN",
      "Navigation",
      "Survey"
    ],
    "verified": true,
    "stars_last_checked_at": "2026-04-06T08:45:17.145179",
    "stars_source": "api"
  }
];

export const news: NewsItem[] = [
  {
    "title": "PrismML 发布全球首个商用 1-Bit LLM",
    "link": "https://www.forbes.com/sites/jonmarkman/2026/04/02/prismml-introduces-the-first-commercially-viable-1-bit-llm/",
    "summary": "2026.04.02 | 来源：Forbes 💡 核心突破：   - 80亿参数模型压缩至 1.15GB（传统 16-bit 需要 16GB）",
    "source": "网络",
    "date": "2026-04-02",
    "published_at": "2026-04-02",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "fresh",
    "archived": false
  },
  {
    "title": "自主攻击无人机集群进入俄乌战场",
    "link": "https://spectrum.ieee.org/autonomous-drone-warfare",
    "summary": "2026.04（IEEE Spectrum 4月刊）| 来源：IEEE Spectrum 💡 核心内容：   - 乌克兰工程师 Yaroslav Azhnyuk 联合创办 Norda Dynamics",
    "source": "IEEE",
    "date": "_2026-04-0",
    "published_at": "_2026-04-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "Embedded World 2026：边缘 AI 全面落地",
    "link": "https://semiengineering.com/embedded-world-2026-bringing-edge-ai-into-the-real-world/",
    "summary": "2026.04.03 | 来源：Hackster.io 💡 核心看点：   - 36,000 参观者，1,300 家展商（增长 13%）",
    "source": "网络",
    "date": "2026-04-03",
    "published_at": "2026-04-03",
    "verified": true,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false
  },
  {
    "title": "AerialVLA：无人机端到端视觉-语言-动作模型",
    "link": "https://github.com/XuPeng23/AerialVLA",
    "summary": "arXiv:2603.14363 | 2026.03.15 💡 核心创新：   - Minimalist End-to-End：直接从原始视觉+语言指令→连续控制信号",
    "source": "GitHub",
    "date": "_2026-04-0",
    "published_at": "_2026-04-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "Drona Aviation Pluto Drones",
    "link": "https://github.com/DronaAviation",
    "summary": "*：模块化可编程无人机，专为机器人和编程教育设计",
    "source": "GitHub",
    "date": "_2026-04-0",
    "published_at": "_2026-04-0",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  }
];