// ============================================
// 研究热点数据 - 自动生成
// 生成时间: 2026-05-24T06:33:55.938018
// ============================================

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
  problem?: string;
  method?: string;
  value?: string;
  why_relevant?: string;
  research_axis?: string;
  summary_structured?: string;
}

export interface GitHubProject {
  name: string;
  description: string;
  stars: string;
  language: string;
  link: string;
  tags: string[];
  stars_source?: 'api' | 'cache' | 'stale_cache' | 'fallback' | 'not_found';
  stars_last_checked_at?: string;
  available?: boolean;
}

export interface Trend {
  title: string;
  description: string;
  icon: string;
}

export interface News {
  title: string;
  source: string;
  date: string;
  summary: string;
  link: string;
  published_at?: string;
  freshness?: string;
  why_it_matters?: string;
  research_axis?: string;
}

export const recentPapers: Paper[] = [
  {
    "title": "DIAL: Decomposing Vision-Language Models into Intent Understanding and Action Decoding",
    "authors": "Stanford / Berkeley",
    "venue": "arXiv:2603.29844",
    "date": "2026-03-31",
    "summary": "problem: VLM不应只做编码器，需解耦高层意图理解和动作解码。method: Intent Bottleneck编码意图+Action Decoding解码动作，实现LLM→VLA→PX4解耦。value: 首次实现VLA架构的意图-动作分离。why_relevant: 直接支撑LLM→VLA→PX4毕设架构设计。",
    "link": "https://arxiv.org/abs/2603.29844",
    "pdf_url": "https://arxiv.org/pdf/2603.29844",
    "tags": [
      "VLA",
      "LLM",
      "Robot",
      "Embodied AI",
      "Intent"
    ],
    "research_axis": "Aircraft",
    "importance": "high"
  },
  {
    "title": "LLM-Enabled UAV NL Navigation: Natural Language to Signal Temporal Logic for Autonomous Flight",
    "authors": "港科大",
    "venue": "arXiv:2603.27583",
    "date": "2026-03-30",
    "summary": "problem: 自然语言指令难以保证无人机安全执行。method: NL→STL→MILP轨迹优化，CoT推理+GRPO确保翻译正确性，STL修复机制处理不可行约束。value: 首个可证安全的LLM无人机控制框架。why_relevant: STL修复机制可直接应用于PX4安全护栏设计。",
    "link": "https://arxiv.org/abs/2603.27583",
    "pdf_url": "https://arxiv.org/pdf/2603.27583",
    "tags": [
      "LLM",
      "UAV",
      "STL",
      "NLP",
      "Motion Planning"
    ],
    "research_axis": "Aircraft",
    "importance": "high"
  },
  {
    "title": "FALCON: 3D Spatial Token Injection for Vision-Language-Action Models",
    "authors": "ICLR 2026",
    "venue": "arXiv:2510.17439",
    "date": "2026-01-01",
    "summary": "problem: 现有VLA缺乏3D空间先验，无法处理无人机避障需求。method: 3D空间Token注入VLA动作头，保持视觉-语言对齐。value: 无需深度相机即可实现3D理解。why_relevant: 3D空间先验对UAV避障和导航至关重要，直接匹配毕设需求。",
    "link": "https://arxiv.org/abs/2510.17439",
    "pdf_url": "https://arxiv.org/pdf/2510.17439",
    "tags": [
      "VLA",
      "3D",
      "UAV",
      "Spatial",
      "ICLR"
    ],
    "research_axis": "VLA",
    "importance": "high"
  },
  {
    "title": "RehearseVLA: World Model Post-Training for Vision-Language-Action Models",
    "authors": "CVPR 2026",
    "venue": "arXiv:2509.24948",
    "date": "2026-03-01",
    "summary": "problem: VLA数据稀缺且训练不安全。method: 世界模型作为虚拟环境，解决数据稀缺问题，物理一致性确保模拟到真实迁移。value: 首个世界模型驱动的VLA后训练框架。why_relevant: UAV数据稀缺+安全训练的理想方案，RehearseVLA范式可迁移到无人机仿真。",
    "link": "https://arxiv.org/abs/2509.24948",
    "pdf_url": "https://arxiv.org/pdf/2509.24948",
    "tags": [
      "VLA",
      "World Model",
      "Post-training",
      "Sim2Real"
    ],
    "research_axis": "Simulation",
    "importance": "high"
  },
  {
    "title": "FRGS: Focused Reasoning for UAV Vision-Language Navigation",
    "authors": "港科大",
    "venue": "arXiv:2604.XXXXX",
    "date": "2026-04-01",
    "summary": "problem: 长时程UAV巡航任务指令分解困难。method: 指令状态管理(ISM)将复杂指令分解为可验证子任务，历史上下文动态聚焦(HCDF)压缩搜索空间。value: 首个面向长时程巡航的VLN框架。why_relevant: 直接对口毕设长时程巡航的指令分解和状态管理需求。",
    "link": "https://arxiv.org/abs/2604.XXXXX",
    "pdf_url": "https://arxiv.org/pdf/2604.XXXXX",
    "tags": [
      "VLN",
      "UAV",
      "Reasoning",
      "Long-horizon"
    ],
    "research_axis": "Aircraft",
    "importance": "high"
  },
  {
    "title": "UAV-Track VLA: Vision-Language-Action Models for Embodied Aerial Object Tracking",
    "authors": "旷视",
    "venue": "arXiv:2604.02241",
    "date": "2026-04-01",
    "summary": "problem: 空中跟踪任务缺乏端到端VLA方案。method: 首个将VLA模型应用于无人机空中跟踪，实现感知-跟踪-控制一体化。value: 填补了VLA空中跟踪领域的空白。why_relevant: VLA从桌面操作向空中扩展的标杆工作，对理解VLA在UAV场景的适用性具有重要参考价值。",
    "link": "https://arxiv.org/abs/2604.02241",
    "pdf_url": "https://arxiv.org/pdf/2604.02241",
    "tags": [
      "VLA",
      "UAV",
      "Tracking",
      "Aerial"
    ],
    "research_axis": "Aircraft",
    "importance": "high"
  },
  {
    "title": "CARLA-Air: Unified Aerial-Ground Simulation Infrastructure",
    "authors": "ETH Zurich",
    "venue": "arXiv:2603.28032",
    "date": "2026-03-30",
    "summary": "problem: 空中仿真工具碎片化，难以统一测试。method: AirSim + CARLA统一到单一Unreal Engine进程，零修改复用AirSim API+ROS 2，支持18种传感器模态。value: 首个空地一体仿真平台。why_relevant: 毕设仿真验证的理想环境，可直接用于PX4+LLM控制算法的仿真测试。",
    "link": "https://arxiv.org/abs/2603.28032",
    "pdf_url": "https://arxiv.org/pdf/2603.28032",
    "tags": [
      "Simulation",
      "UAV",
      "ROS",
      "CARLA",
      "Sensor Fusion"
    ],
    "research_axis": "Simulation",
    "importance": "high"
  },
  {
    "title": "LeRobot: An Open-Source Library for End-to-End Robot Learning",
    "authors": "HuggingFace",
    "venue": "ICLR 2026, arXiv:2602.22818",
    "date": "2026-02-01",
    "summary": "problem: 机器人学习工具链碎片化，难以复现和迁移。method: HuggingFace开源机器人学习库，支持多种机器人(SO-100/SO-ARM100/101)、多种VLA模型(π0、SmolVLA等)、端到端训练推理。value: 首个支持开源机器人全流程的库。why_relevant: Garfield项目核心框架，SO-ARM101双臂机器人直接支持，VLA模型可直接用于毕设机械臂控制。",
    "link": "https://arxiv.org/abs/2602.22818",
    "pdf_url": "https://arxiv.org/pdf/2602.22818",
    "tags": [
      "LeRobot",
      "VLA",
      "Robot",
      "HuggingFace",
      "ICLR"
    ],
    "research_axis": "Robotics",
    "importance": "high"
  },
  {
    "title": "Libra-VLA: Dual-System Vision-Language-Action Model with Asynchronous Processing",
    "authors": "商汤",
    "venue": "arXiv:2604.24921",
    "date": "2026-04-01",
    "summary": "problem: 单一VLA系统难以兼顾语义理解和快速动作执行。method: 异步粗-细双系统，System1处理语义、System2处理动作，学习均衡机制。value: 首个异步双系统VLA架构。why_relevant: 直接对应UAV巡航的层次化需求，Libra-VLA的双系统架构可迁移到无人机分层控制。",
    "link": "https://arxiv.org/abs/2604.24921",
    "pdf_url": "https://arxiv.org/pdf/2604.24921",
    "tags": [
      "VLA",
      "Dual System",
      "Asynchronous",
      "Hierarchical"
    ],
    "research_axis": "VLA",
    "importance": "high"
  },
  {
    "title": "LaST-R1: Latent Space Reasoning for Vision-Language-Action Models",
    "authors": "上交",
    "venue": "arXiv:2604.28192",
    "date": "2026-04-01",
    "summary": "problem: 语言链推理(CoT)导致VLA推理瓶颈。method: 潜在空间推理替代语言链，物理接地的自适应推理深度。value: 消除VLA推理瓶颈，推理效率提升3-5倍。why_relevant: 高效推理适合UAV实时控制，LaST-R1的潜在推理范式可直接应用于边缘部署的实时VLA。",
    "link": "https://arxiv.org/abs/2604.28192",
    "pdf_url": "https://arxiv.org/pdf/2604.28192",
    "tags": [
      "VLA",
      "Reasoning",
      "Latent Space",
      "Efficiency"
    ],
    "research_axis": "VLA",
    "importance": "high"
  },
  {
    "title": "MotuBrain: Unified World-Action Model for Robot Control",
    "authors": "UC Berkeley",
    "venue": "arXiv:2604.27792",
    "date": "2026-04-01",
    "summary": "problem: 感知-预测-控制分离导致协同困难。method: 统一世界模型+动作模型，视频预测驱动的动作生成。value: 首个感知-预测-控制一体化框架。why_relevant: 感知-预测-控制一体化框架可直接参考，MotuBrain的世界模型可用于无人机仿真环境构建。",
    "link": "https://arxiv.org/abs/2604.27792",
    "pdf_url": "https://arxiv.org/pdf/2604.27792",
    "tags": [
      "World Model",
      "Action Model",
      "Unified",
      "Robot"
    ],
    "research_axis": "Simulation",
    "importance": "high"
  },
  {
    "title": "Flying by Inference: Proactive Inference World Model for Multi-UAV Planning",
    "authors": "港科大",
    "venue": "arXiv:2604.27935",
    "date": "2026-04-01",
    "summary": "problem: 多UAV轨迹规划计算复杂度高。method: 主动推理世界模型，多UAV轨迹规划从组合优化→层次化推理。value: 将多机编队复杂度从指数级降至线性。why_relevant: 多机编队扩展的参考架构，Flying by Inference的世界模型驱动的推理方法可用于PX4集群控制。",
    "link": "https://arxiv.org/abs/2604.27935",
    "pdf_url": "https://arxiv.org/pdf/2604.27935",
    "tags": [
      "UAV",
      "Swarm",
      "World Model",
      "Planning"
    ],
    "research_axis": "Aircraft",
    "importance": "medium"
  },
  {
    "title": "CoT-Route: GPS-Denied UAV Semantic Routing via Vision-Language Models",
    "authors": "上交",
    "venue": "arXiv:2604.XXXXX",
    "date": "2026-04-01",
    "summary": "problem: GPS拒止环境下无人机导航困难。method: VLM语义路由+不确定性感知，CPU可运行。value: 首个面向GPS拒止场景的VLM路由方案。why_relevant: GPS拒止场景的替代导航方案，CoT-Route的语义路由可直接应用于室内/密闭环境无人机控制。",
    "link": "https://arxiv.org/abs/2604.XXXXX",
    "pdf_url": "https://arxiv.org/pdf/2604.XXXXX",
    "tags": [
      "VLM",
      "UAV",
      "GPS-denied",
      "Routing"
    ],
    "research_axis": "Perception",
    "importance": "medium"
  },
  {
    "title": "Say the Mission, Execute the Swarm: Agent-Enhanced LLM Reasoning for Drone Swarms",
    "authors": "ETH Zurich",
    "venue": "arXiv:2605.03788",
    "date": "2026-05-05",
    "summary": "problem: 无人机蜂群任务执行缺乏从自然语言到执行的完整管线。method: Agent增强的LLM蜂群推理架构，Web-of-Drones架构。value: 首个端到端的LLM Agent驱动的无人机蜂群框架。why_relevant: LLM+Agent+UAV Swarm三个方向交叉点，与毕设LLM+无人机核心方向高度吻合。",
    "link": "https://arxiv.org/abs/2605.03788",
    "pdf_url": "https://arxiv.org/pdf/2605.03788",
    "tags": [
      "LLM",
      "Agent",
      "UAV",
      "Swarm",
      "Multi-agent"
    ],
    "research_axis": "Aircraft",
    "importance": "high"
  },
  {
    "title": "ARIA: Four-Agent System for Autonomous UAV Driving",
    "authors": "港科大",
    "venue": "arXiv:2604.XXXXX",
    "date": "2026-04-01",
    "summary": "problem: 单一LLM难以保证无人机飞行的安全性和可靠性。method: 四Agent架构，Agent A: RL自愈，Agent B: LLM-Pilot，Agent C: CLIP伦理护栏，Agent D: 数字孪生能量管理。value: 首个多Agent协作的无人机自动驾驶系统。why_relevant: PX4安全护栏的参考架构，四Agent设计可直接应用于PX4的LLM+安全护栏实现。",
    "link": "https://arxiv.org/abs/2604.XXXXX",
    "pdf_url": "https://arxiv.org/pdf/2604.XXXXX",
    "tags": [
      "LLM",
      "Agent",
      "UAV",
      "Safety",
      "Multi-agent"
    ],
    "research_axis": "Aircraft",
    "importance": "medium"
  },
  {
    "title": "RAFT-Stereo: Recurrent All-Pairs Field Transforms for Stereo Matching",
    "authors": "Google Research",
    "venue": "CVPR 2021",
    "date": "2021-01-01",
    "summary": "problem: 传统双目匹配方法精度和效率难以兼顾。method: RAFT用于双目匹配，通过迭代优化获取精确视差。value: 首个端到端双目匹配网络，KITTI刷新SOTA。why_relevant: 双目深度估计基础网络，RAFT-Stereo是稠密建图和视觉里程计的核心模块。",
    "link": "https://arxiv.org/abs/2010.09577",
    "pdf_url": "https://arxiv.org/pdf/2010.09577",
    "tags": [
      "Stereo",
      "Depth",
      "CVPR",
      "SLAM",
      "Perception"
    ],
    "research_axis": "Perception",
    "importance": "high"
  },
  {
    "title": "ORB-SLAM3: An Open-Source SLAM System for Monocular, Stereo, and RGB-D Cameras",
    "authors": "Mur-Artal et al.",
    "venue": "IEEE Transactions on Robotics",
    "date": "2021-01-01",
    "summary": "problem: 现有SLAM系统难以兼顾精度、实时性和多传感器支持。method: 统一视觉惯性SLAM架构，支持单目/双目/RGB-D多种传感器，IMU融合。value: 首个支持多传感器和地图重用的开源SLAM系统。why_relevant: 稠密建图的基础框架，ORB-SLAM3是双目SLAM的标杆可直接用于毕设感知模块。",
    "link": "https://arxiv.org/abs/2007.11867",
    "pdf_url": "https://arxiv.org/pdf/2007.11867",
    "tags": [
      "SLAM",
      "Stereo",
      "RGB-D",
      "VIO",
      "Robotics"
    ],
    "research_axis": "Perception",
    "importance": "high"
  },
  {
    "title": "Realtime-VLA V2: Learning to Run VLAs Fast, Smooth and Accurate",
    "authors": "上海AI Lab",
    "venue": "arXiv:2603.20000",
    "date": "2026-03-20",
    "summary": "problem: VLA模型推理延迟高，难以满足无人机实时性需求。method: EAGLE-3投机解码+NVFP4量化优化，边缘设备(Jetson)上快速流畅运行VLAs。value: 首个边缘优化的实时VLA框架。why_relevant: 适合无人机实时性需求，Realtime-VLA的量化方案可直接应用于Jetson边缘部署。",
    "link": "https://arxiv.org/abs/2603.20000",
    "pdf_url": "https://arxiv.org/pdf/2603.20000",
    "tags": [
      "VLA",
      "Real-time",
      "Edge AI",
      "Quantization"
    ],
    "research_axis": "Edge",
    "importance": "high"
  },
  {
    "title": "FocusVLA: Visual Attention Optimization for Efficient Vision-Language-Action Models",
    "authors": "字节跳动",
    "venue": "arXiv:2603.28740",
    "date": "2026-03-28",
    "summary": "problem: VLA视觉利用效率低，快捷路径导致动作预测偏差。method: Modality Cascaded Attention消除快捷路径，边缘部署计算优化。value: 视觉利用率提升40%，推理速度提升2倍。why_relevant: 边缘VLA优化方法可直接应用于无人机边缘部署的性能提升。",
    "link": "https://arxiv.org/abs/2603.28740",
    "pdf_url": "https://arxiv.org/pdf/2603.28740",
    "tags": [
      "VLA",
      "Attention",
      "Edge AI",
      "Efficiency"
    ],
    "research_axis": "Edge",
    "importance": "medium"
  },
  {
    "title": "Edge-Optimized Multimodal Learning for UAV Video Understanding via BLIP-2",
    "authors": "上交",
    "venue": "arXiv:2601.08408",
    "date": "2026-01-01",
    "summary": "problem: VLM模型与无人机边缘设备资源矛盾。method: BLIP-2轻量化方案，边缘优化的多模态学习。value: 首个面向UAV边缘设备的VLM方案。why_relevant: 毕设若涉及实际无人机部署，边缘优化是不可回避的技术挑战，BLIP-2方案可直接参考。",
    "link": "https://arxiv.org/abs/2601.08408",
    "pdf_url": "https://arxiv.org/pdf/2601.08408",
    "tags": [
      "VLM",
      "UAV",
      "Edge",
      "BLIP-2",
      "Optimization"
    ],
    "research_axis": "Edge",
    "importance": "medium"
  }
];
export const hotProjects: GitHubProject[] = [
  {
    "name": "PX4 Autopilot",
    "description": "开源无人机自动驾驶软件，支持多旋翼、固定翼、VTOL等。学术界最流行的无人机研究平台。",
    "stars": "11.8k",
    "language": "C++",
    "link": "https://github.com/PX4/PX4-Autopilot",
    "tags": [
      "PX4",
      "UAV",
      "ROS",
      "Autonomous Flight",
      "Drone"
    ],
    "research_axis": "Aircraft",
    "verified": true,
    "stars_last_checked_at": "2026-05-23T08:46:10.489816",
    "stars_source": "stale_cache",
    "available": true
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
    "research_axis": "Aircraft",
    "verified": true,
    "stars_last_checked_at": "2026-05-23T08:46:11.202652",
    "stars_source": "stale_cache",
    "available": true
  },
  {
    "name": "embodied-drone-agents",
    "description": "LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。",
    "stars": "22",
    "language": "Python",
    "link": "https://github.com/EmergenceAI/embodied-drone-agents",
    "tags": [
      "LLM",
      "MAVSDK",
      "LangGraph",
      "Agent",
      "UAV"
    ],
    "research_axis": "Aircraft",
    "verified": true,
    "stars_last_checked_at": "2026-05-23T08:46:11.934009",
    "stars_source": "stale_cache",
    "available": true
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
    "research_axis": "Aircraft",
    "verified": true,
    "stars_last_checked_at": "2026-05-23T08:46:13.338053",
    "stars_source": "stale_cache",
    "available": true
  },
  {
    "name": "AerialVLA",
    "description": "端到端视觉-语言-动作无人机导航模型，支持自然语言指令控制无人机。",
    "stars": "64",
    "language": "Python",
    "link": "https://github.com/XuPeng23/AerialVLA",
    "tags": [
      "VLA",
      "UAV",
      "Navigation",
      "End-to-End"
    ],
    "research_axis": "Aircraft",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:07.936829",
    "stars_source": "cache",
    "available": true
  },
  {
    "name": "UAVs_Meet_LLMs",
    "description": "UAV+LLM综合资源库，汇总无人机与大语言模型结合的论文、项目、数据集。",
    "stars": "488",
    "language": "Python",
    "link": "https://github.com/Hub-Tian/UAVs_Meet_LLMs",
    "tags": [
      "UAV",
      "LLM",
      "Survey",
      "Resources"
    ],
    "research_axis": "Aircraft",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:09.671675",
    "stars_source": "cache",
    "available": true
  },
  {
    "name": "Awesome-Aerial-VLN",
    "description": "空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究。",
    "stars": "54",
    "language": "Python",
    "link": "https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation",
    "tags": [
      "UAV",
      "VLN",
      "Navigation",
      "Survey"
    ],
    "research_axis": "Aircraft",
    "verified": true,
    "stars_last_checked_at": "2026-05-23T08:46:15.421371",
    "stars_source": "stale_cache",
    "available": true
  },
  {
    "name": "LeRobot",
    "description": "HuggingFace开源机器人学习库，支持多种机器人(SO-100/SO-ARM100/101)、多种VLA模型(π0、SmolVLA等)、端到端训练推理。Garfield项目核心框架。",
    "stars": "24.3k",
    "language": "Python",
    "link": "https://github.com/huggingface/lerobot",
    "tags": [
      "LeRobot",
      "VLA",
      "Robot",
      "HuggingFace",
      "SO-ARM"
    ],
    "research_axis": "Robotics",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:11.593987",
    "stars_source": "cache",
    "available": true
  },
  {
    "name": "dimensionalOS",
    "description": "Agentic OS for physical space，自然语言控制多种机器人(含无人机)，支持多种AI模型和工具。",
    "stars": "3.3k",
    "language": "Python",
    "link": "https://github.com/dimensionalOS/dimos",
    "tags": [
      "Agent",
      "OS",
      "Robot",
      "UAV",
      "LLM"
    ],
    "research_axis": "Robotics",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:13.175761",
    "stars_source": "cache",
    "available": true
  },
  {
    "name": "Awesome-LLM-Robotics",
    "description": "大语言模型/多模态模型在机器人领域的应用论文汇总。",
    "stars": "4.4k",
    "language": "Python",
    "link": "https://github.com/GT-RIPL/Awesome-LLM-Robotics",
    "tags": [
      "LLM",
      "Robot",
      "Survey",
      "Papers"
    ],
    "research_axis": "Robotics",
    "verified": true,
    "stars_last_checked_at": "2026-05-23T08:46:14.743430",
    "stars_source": "stale_cache",
    "available": true
  },
  {
    "name": "awesome-embodied-vla-va-vln",
    "description": "Embodied AI/VLA/VLN综述列表，汇总具身智能、视觉-语言-动作模型、视觉语言导航相关论文。",
    "stars": "3.1k",
    "language": "Python",
    "link": "https://github.com/jonyzhang2023/awesome-embodied-vla-va-vln",
    "tags": [
      "Embodied AI",
      "VLA",
      "VLN",
      "Survey"
    ],
    "research_axis": "Robotics",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:15.832148",
    "stars_source": "cache",
    "available": true
  },
  {
    "name": "Awesome-RL-VLA",
    "description": "RL+VLA论文汇总：强化学习视觉-语言-动作模型综述。",
    "stars": "715",
    "language": "Python",
    "link": "https://github.com/Denghaoyuan123/Awesome-RL-VLA",
    "tags": [
      "VLA",
      "RL",
      "Survey",
      "Papers"
    ],
    "research_axis": "Robotics",
    "verified": true,
    "stars_last_checked_at": "2026-05-23T08:46:14.032892",
    "stars_source": "stale_cache",
    "available": true
  },
  {
    "name": "reflex-vla",
    "description": "一键部署VLA模型到边缘GPU，支持多种VLA模型的边缘优化推理。",
    "stars": "45",
    "language": "Python",
    "link": "https://github.com/FastCrest/reflex-vla",
    "tags": [
      "VLA",
      "Edge",
      "GPU",
      "Deployment"
    ],
    "research_axis": "Edge",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:18.378535",
    "stars_source": "cache",
    "available": true
  },
  {
    "name": "CarlaAir",
    "description": "CARLA + 无人机空地一体仿真平台，统一AirSim + CARLA到单一Unreal Engine进程。",
    "stars": "958",
    "language": "C++",
    "link": "https://github.com/louiszengCN/CarlaAir",
    "tags": [
      "Simulation",
      "UAV",
      "CARLA",
      "AirSim"
    ],
    "research_axis": "Simulation",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:19.992259",
    "stars_source": "cache",
    "available": true
  },
  {
    "name": "skynet",
    "description": "LLM + MCP协议控制真实机器人和无人机，支持自然语言控制多种平台。",
    "stars": "46",
    "language": "Python",
    "link": "https://github.com/hybridgroup/skynet",
    "tags": [
      "LLM",
      "MCP",
      "Robot",
      "UAV",
      "Agent"
    ],
    "research_axis": "Robotics",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:21.578472",
    "stars_source": "cache",
    "available": true
  },
  {
    "name": "Awesome-VLA-UAVs",
    "description": "VLA/VLN无人机论文/模型/数据集汇总，空中机器人VLA方向最全资源列表。",
    "stars": "53",
    "language": "Python",
    "link": "https://github.com/TheBrainLab/Awesome-VLA-UAVs",
    "tags": [
      "VLA",
      "UAV",
      "VLN",
      "Survey",
      "Papers"
    ],
    "research_axis": "Aircraft",
    "verified": true,
    "stars_last_checked_at": "2026-05-24T06:31:23.268514",
    "stars_source": "cache",
    "available": true
  }
];
export const recentNews: News[] = [
  {
    "title": "WAFR 2026 论文征集延期：6月1日截止",
    "link": "http://algorithmic-robotics.org/",
    "summary": "2026.06.15-17 | 地点：芬兰奥卢 💡 Topics：Robot control, Motion planning, Multi-robot systems, Learning for robotics  http://algorithmic-robotics.org/",
    "source": "网络",
    "date": "2026-06-15",
    "published_at": "2026-06-15",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "fresh",
    "archived": false
  },
  {
    "title": "OpenClaw/openclaw ⭐ 215,000+",
    "link": "https://github.com/openclaw/openclaw",
    "summary": "*：本地优先 AI Agent 框架，私有化部署，多渠道交互",
    "source": "GitHub",
    "date": "_2026-05-2",
    "published_at": "_2026-05-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "drone-labs/librobotcontrol ⭐ 695 commits",
    "link": "https://github.com/drone-labs/librobotcontrol",
    "summary": "*：机器人控制库，支持 BeagleBone Blue 等嵌入式 Linux",
    "source": "GitHub",
    "date": "_2026-05-2",
    "published_at": "_2026-05-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "rust-embedded/organization ⭐ 活跃",
    "link": "https://github.com/rust-embedded/",
    "summary": "*：Rust 嵌入式开发生态，支持 no-std 环境",
    "source": "GitHub",
    "date": "_2026-05-2",
    "published_at": "_2026-05-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "mcgill-robotics/auv-embedded-2026 ⭐ 333 commits",
    "link": "https://github.com/mcgill-robotics/auv-embedded-2024",
    "summary": "*：2026 RoboSub AUV 固件，包含 hydrophone、STM32、Pio 多栈",
    "source": "GitHub",
    "date": "_2026-05-2",
    "published_at": "_2026-05-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "drone-os/drone-core ⭐ 251 commits",
    "link": "https://github.com/drone-os/drone-core",
    "summary": "*：嵌入式操作系统 Drone 的核心 crate，支持 ARM Cortex-M",
    "source": "GitHub",
    "date": "_2026-05-2",
    "published_at": "_2026-05-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  }
];
export const trends: Trend[] = [
  {
    "icon": "🤖",
    "title": "LLM + VLA 双层架构",
    "description": "LLM做意图理解，VLA做动作执行，分工明确。DIAL架构成为主流范式。"
  },
  {
    "icon": "📡",
    "title": "NL → STL → 控制",
    "description": "自然语言先转为时序逻辑(STL)，再生成安全轨迹。CoT+GRPO确保翻译正确性。"
  },
  {
    "icon": "🖥️",
    "title": "边缘部署优先",
    "description": "实时VLA、TensorRT-LLM等都在优化边缘推理速度，适合机载计算。"
  },
  {
    "icon": "🎯",
    "title": "仿真平台统一",
    "description": "CARLA-Air统一AirSim和CARLA，减少仿真-真机迁移gap。"
  }
];
export const lastUpdated = "2026-05-24T06:33:55.938018";
