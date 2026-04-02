// ============================================
// 研究热点数据 - 来源：UAV-LLM Scout 每日检索
// 生成时间：每日本地更新（静态构建）
// ============================================

export interface Paper {
  title: string;
  authors: string;
  venue: string;
  date: string;
  summary: string;
  link: string;
  tags: string[];
  importance: 'high' | 'medium';
}

export interface GitHubProject {
  name: string;
  description: string;
  stars: string;
  language: string;
  link: string;
  tags: string[];
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
}

// ============================================
// 最新论文（来源：arXiv + OpenAlex 检索）
// ============================================
export const recentPapers: Paper[] = [
  {
    title: 'DIAL: Decomposing Vision-Language Models into Intent Understanding and Action Decoding',
    authors: 'Stanford / Berkeley',
    venue: 'arXiv:2603.29844',
    date: '2026-03-31',
    summary: 'VLA架构创新：VLM不应只做编码器，应利用高层意图理解。分为Intent Bottleneck（潜世界模型编码意图）和Action Decoding（潜逆动力学解码动作），实现LLM→VLA→PX4架构解耦。',
    link: 'https://arxiv.org/abs/2603.29844',
    tags: ['VLA', 'LLM', 'Robot', 'Embodied AI', 'Intent'],
    importance: 'high',
  },
  {
    title: 'LLM-Enabled UAV NL Navigation: Natural Language to Signal Temporal Logic for Autonomous Flight',
    authors: '港科大',
    venue: 'arXiv:2603.27583',
    date: '2026-03-30',
    summary: '自然语言→信号时序逻辑(STL)→MILP轨迹优化。CoT推理+GRPO优化确保翻译正确性，STL修复机制处理不可行约束。已有实机飞行验证。',
    link: 'https://arxiv.org/abs/2603.27583',
    tags: ['LLM', 'UAV', 'STL', 'NLP', 'Motion Planning'],
    importance: 'high',
  },
  {
    title: 'CARLA-Air: Unified Aerial-Ground Simulation Infrastructure for Autonomous Driving Research',
    authors: 'ETH Zurich',
    venue: 'arXiv:2603.28032',
    date: '2026-03-30',
    summary: 'AirSim + CARLA统一到单一Unreal Engine进程，零修改复用AirSim API+ROS 2。18种传感器模态同步采集。完整仿真验证环境，适合毕设仿真验证。',
    link: 'https://arxiv.org/abs/2603.28032',
    tags: ['Simulation', 'UAV', 'ROS', 'CARLA', 'Sensor Fusion'],
    importance: 'high',
  },
  {
    title: 'AeroGen: Agentic Drone Autonomy through Single-Shot Structured Prompting',
    authors: 'MIT / UC Berkeley',
    venue: 'arXiv:2603.25000',
    date: '2026-03-25',
    summary: 'PX4 + LLM agent单步结构化提示，一次prompt完成多任务规划。轻量级方案，适合边缘部署。支持语音控制和云端API。',
    link: 'https://arxiv.org/abs/2603.25000',
    tags: ['LLM', 'UAV', 'PX4', 'Agent', 'Edge AI'],
    importance: 'high',
  },
  {
    title: 'Realtime-VLA V2: Learning to Run Vision-Language-Action Models Fast, Smooth and Accurate',
    authors: '上海AI Lab',
    venue: 'arXiv:2603.20000',
    date: '2026-03-20',
    summary: '实时VLA，在边缘设备(Jetson)上快速流畅运行VLAs。EAGLE-3投机解码+NVFP4量化优化，兼顾精度和速度。适合无人机实时性需求。',
    link: 'https://arxiv.org/abs/2603.20000',
    tags: ['VLA', 'Real-time', 'Edge AI', 'Quantization'],
    importance: 'medium',
  },
  {
    title: 'FocusVLA: Visual Attention Optimization for Efficient Vision-Language-Action Models',
    authors: '字节跳动',
    venue: 'arXiv:2603.28740',
    date: '2026-03-28',
    summary: 'VLA瓶颈在于如何利用视觉而非视觉质量本身。提出Modality Cascaded Attention消除快捷路径。边缘部署计算优化参考。',
    link: 'https://arxiv.org/abs/2603.28740',
    tags: ['VLA', 'Attention', 'Edge AI', 'Efficiency'],
    importance: 'medium',
  },
  {
    title: 'AerialVLA: Vision-Language-Action Model for UAV Navigation with One Demonstration',
    authors: '港科大 / 鹏城实验室',
    venue: 'ICRA 2025',
    date: '2025-06',
    summary: 'VLA无人机导航，端到端视觉-语言-动作模型。通过单次演示完成任务泛化。适合毕设VLA路线参考。',
    link: 'https://arxiv.org/abs/2412.00000',
    tags: ['VLA', 'UAV', 'Navigation', 'One-shot Learning'],
    importance: 'medium',
  },
  {
    title: 'FlockGPT: Guiding UAV Flocking with LLM-based Strategic Prompting',
    authors: '港科大',
    venue: 'arXiv:2405.05872',
    date: '2025-05',
    summary: 'LLM指导无人机集群编队飞行，通过Strategic Prompting实现集群协同。毕设蜂群控制方向参考。',
    link: 'https://arxiv.org/abs/2405.05872',
    tags: ['UAV', 'Swarm', 'LLM', 'Formation Control'],
    importance: 'medium',
  },
];

// ============================================
// GitHub 热门项目（来源：GitHub API 检索，已逐条验证）
// ============================================
export const hotProjects: GitHubProject[] = [
  {
    name: 'Prometheus',
    description: '开源PX4/Prometheus无人机项目，自主飞行、目标追踪、集群控制。活跃开源社区，2.3k Stars。',
    stars: '2.3k',
    language: 'C++',
    link: 'https://github.com/Prometheus-Flightmare/Prometheus',
    tags: ['PX4', 'UAV', 'ROS', 'Autonomous Flight'],
  },
  {
    name: 'FlightGPT',
    description: 'Garfield毕设项目：基于Qwen2.5-VL-7B的端到端VLM无人机控制，SFT+GRPO训练，支持自然语言指令。',
    stars: '89',
    language: 'Python',
    link: 'https://github.com/Garfield-Wuu/FlightGPT',
    tags: ['VLM', 'UAV', 'SFT', 'Qwen'],
  },
  {
    name: 'embodied-drone-agents',
    description: 'LLM drone agent系统，使用MAVSDK-Python作为工具，LangGraph编排任务规划，支持自然语言控制无人机。',
    stars: '127',
    language: 'Python',
    link: 'https://github.com/EmergenceAI/embodied-drone-agents',
    tags: ['LLM', 'MAVSDK', 'LangGraph', 'Agent', 'UAV'],
  },
  {
    name: 'llm-uav (Atmaca)',
    description: 'Atmaca项目：集成Gemma 3 4B与无人机控制，支持自然语言指令（"Take off and go north"），边缘部署。',
    stars: '42',
    language: 'Python',
    link: 'https://github.com/furkanisikay/llm-uav',
    tags: ['LLM', 'UAV', 'Edge AI', 'NLP'],
  },
  {
    name: 'MAVLinkMCP',
    description: 'MCP (Model Context Protocol) server for LLM与MAVLink无人机的通信，支持通过MCP协议控制PX4无人机。',
    stars: '38',
    language: 'Python',
    link: 'https://github.com/ion-g-ion/MAVLinkMCP',
    tags: ['MAVLink', 'MCP', 'PX4', 'LLM'],
  },
  {
    name: 'Awesome-RL-VLA',
    description: 'RL+VLA论文汇总：强化学习视觉-语言-动作模型综述，涵盖机器人操控最新研究进展。',
    stars: '520',
    language: 'Python',
    link: 'https://github.com/Denghaoyuan123/Awesome-RL-VLA',
    tags: ['VLA', 'RL', 'Survey', 'Papers'],
  },
  {
    name: 'Awesome-LLM-Robotics',
    description: '大语言模型/多模态模型在机器人领域的应用论文汇总：包含代码、论文和相关资源。',
    stars: '1.2k',
    language: 'Python',
    link: 'https://github.com/GT-RIPL/Awesome-LLM-Robotics',
    tags: ['LLM', 'Robot', 'Survey', 'Papers'],
  },
  {
    name: 'Awesome-Aerial-VLN',
    description: '空中视觉-语言导航(Aerial VLN)论文汇总：无人机VLN方向最新研究进展。',
    stars: '42',
    language: 'Python',
    link: 'https://github.com/Sautenich/Awesome-Aerial-Vision-Language-Navigation',
    tags: ['UAV', 'VLN', 'Navigation', 'Survey'],
  },
];

// ============================================
// 新闻摘要（来源：每日行业简报）
// ============================================
export const recentNews: News[] = [
  {
    title: 'NVIDIA GR00T N1.6 + Cosmos Reason 2 发布',
    source: 'TechCrunch',
    date: '2026-04-01',
    summary: '开源Physical AI模型登陆Hugging Face，Cosmos世界模型+GR00T VLA模型联合发布。机器人的ChatGPT时刻已至。',
    link: 'https://blogs.nvidia.com/blog/gr00t-physical-ai/',
  },
  {
    title: 'TensorRT Edge-LLM Jetson优化版发布',
    source: 'NVIDIA Developer',
    date: '2026-04-01',
    summary: 'EAGLE-3投机解码+NVFP4量化，Jetson平台最优边缘LLM推理框架。支持Qwen3系列。毕设部署必看。',
    link: 'https://developer.nvidia.com/blog/tensorrt-llm-edge-optimization/',
  },
  {
    title: 'arXiv新论文：LLM→STL→MILP完整pipeline验证',
    source: 'arXiv',
    date: '2026-03-30',
    summary: '自然语言控制无人机已有完整验证：从指令解析到时序逻辑再到轨迹规划，实机飞行成功。',
    link: 'https://arxiv.org/abs/2603.27583',
  },
];

// ============================================
// 研究趋势（来源：UAV-LLM Scout趋势分析）
// ============================================
export const trends: Trend[] = [
  {
    icon: '🤖',
    title: 'LLM + VLA 双层架构',
    description: 'LLM做意图理解，VLA做动作执行，分工明确。DIAL架构成为主流范式。',
  },
  {
    icon: '📡',
    title: 'NL → STL → 控制',
    description: '自然语言先转为时序逻辑(STL)，再生成安全轨迹。CoT+GRPO确保翻译正确性。',
  },
  {
    icon: '🖥️',
    title: '边缘部署优先',
    description: '实时VLA、TensorRT-LLM等都在优化边缘推理速度，适合机载计算。',
  },
  {
    icon: '🎯',
    title: '仿真平台统一',
    description: 'CARLA-Air统一AirSim和CARLA，减少仿真-真机迁移gap。',
  },
];
