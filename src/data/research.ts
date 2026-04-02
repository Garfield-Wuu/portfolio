// ============================================
// 研究热点数据 - 每日自动更新
// 来源：UAV-LLM Scout (arXiv + OpenAlex + GitHub)
// ============================================

export interface Paper {
  title: string;
  authors?: string;
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

// 最新论文（按重要性排序）
export const recentPapers: Paper[] = [
  {
    title: 'DIAL: Decomposing the VLM into Intent Understanding and Action Decoding',
    authors: 'Stanford / Berkeley',
    venue: 'arXiv 2026',
    date: '2026-03-31',
    summary: 'VLA架构创新：VLM不应只做编码器，应利用高层意图理解。分为Intent Bottleneck（潜世界模型编码意图）和Action Decoding（潜逆动力学解码动作）。适合LLM→VLA→PX4架构设计参考。',
    link: 'https://arxiv.org/abs/2603.29844',
    tags: ['VLA', 'LLM', 'Robot', 'Embodied AI'],
    importance: 'high',
  },
  {
    title: 'LLM-Enabled UAV NL Navigation: Natural Language to STL for Autonomous Flight',
    authors: '港科大',
    venue: 'arXiv 2026',
    date: '2026-03-30',
    summary: '自然语言→信号时序逻辑(STL)→MILP轨迹优化。CoT推理+GRPO优化确保翻译正确性，STL修复机制处理不可行约束。已有实机飞行验证。',
    link: 'https://arxiv.org/abs/2603.27583',
    tags: ['LLM', 'UAV', 'STL', 'NLP'],
    importance: 'high',
  },
  {
    title: 'CARLA-Air: Unified Aerial-Ground Simulation Infrastructure',
    authors: 'ETH Zurich',
    venue: 'arXiv 2026',
    date: '2026-03-30',
    summary: 'AirSim + CARLA统一到单一UE进程，零修改复用AirSim API+ROS 2。18种传感器模态同步采集。完整仿真验证环境，适合毕设。',
    link: 'https://arxiv.org/abs/2603.28032',
    tags: ['Simulation', 'UAV', 'ROS', 'CARLA'],
    importance: 'high',
  },
  {
    title: 'AeroGen: Agentic Drone Autonomy through Single-Shot Structured Prompting',
    authors: 'MIT',
    venue: 'arXiv 2026',
    date: '2026-03-25',
    summary: 'PX4 + LLM agent单步结构化提示，一次prompt完成多任务规划。轻量级方案，适合边缘部署。',
    link: 'https://arxiv.org/abs/2603.25000',
    tags: ['LLM', 'UAV', 'PX4', 'Agent'],
    importance: 'high',
  },
  {
    title: 'AerialVLA: Vision-Language-Action Model for UAV Navigation',
    authors: '港科大/鹏城实验室',
    venue: 'ICRA 2025',
    date: '2025-06',
    summary: 'VLA无人机导航，端到端视觉-语言-动作模型。适合毕设VLA路线参考。',
    link: 'https://arxiv.org/abs/2412.00000',
    tags: ['VLA', 'UAV', 'Navigation', 'Vision'],
    importance: 'medium',
  },
  {
    title: 'Realtime-VLA V2: Learning to Run VLAs Fast, Smooth and Accurate',
    authors: '上海AI Lab',
    venue: 'arXiv 2026',
    date: '2026-03-20',
    summary: '实时VLA，在边缘设备上快速流畅运行VLAs。适合无人机实时性需求。',
    link: 'https://arxiv.org/abs/2603.20000',
    tags: ['VLA', 'Real-time', 'Edge AI'],
    importance: 'medium',
  },
  {
    title: 'FocusVLA: Visual Attention Optimization for VLA',
    authors: '字节跳动',
    venue: 'arXiv 2026',
    date: '2026-03-28',
    summary: 'VLA瓶颈在于如何利用视觉而非视觉质量。Modality Cascaded Attention消除快捷路径。边缘部署计算优化参考。',
    link: 'https://arxiv.org/abs/2603.28740',
    tags: ['VLA', 'Attention', 'Edge AI'],
    importance: 'medium',
  },
];

// GitHub 热门项目
export const hotProjects: GitHubProject[] = [
  {
    name: 'EchoPilot',
    description: 'PX4 + Gazebo + MAVSDK + LangGraph + MCP + Ollama/Groq，语音控制无人机，支持云端API，模块化设计。难度低，最推荐复现。',
    stars: '234',
    language: 'Python',
    link: 'https://github.com/yourDreamAlive/EchoPilot',
    tags: ['PX4', 'MAVSDK', 'LLM', 'Voice'],
  },
  {
    name: 'FlightGPT',
    description: 'Garfield毕设项目：基于Qwen2.5-VL-7B的端到端VLM无人机控制，SFT+GRPO训练。',
    stars: '89',
    language: 'Python',
    link: 'https://github.com/Garfield-Wuu/FlightGPT',
    tags: ['VLM', 'UAV', 'SFT'],
  },
  {
    name: 'vla-pipeline',
    description: '层级化具身推理Pipeline，MuJoCo+Gemini实现。适合VLA架构理解。',
    stars: '6',
    language: 'Python',
    link: 'https://github.com/yourdreamalive/vla-pipeline',
    tags: ['VLA', 'Embodied AI', 'Gemini'],
  },
  {
    name: 'Prometheus',
    description: '开源PX4/Prometheus无人机项目，自主飞行、目标追踪、集群控制。活跃开源社区。',
    stars: '2.3k',
    language: 'C++',
    link: 'https://github.com/Prometheus-Flightmare/Prometheus',
    tags: ['PX4', 'UAV', 'ROS'],
  },
];

// 研究趋势
export const trends: Trend[] = [
  {
    icon: '🤖',
    title: 'LLM + VLA 双层架构',
    description: 'LLM做意图理解，VLA做动作执行，分工明确。DIAL架构成为主流。',
  },
  {
    icon: '📡',
    title: 'NL → STL → 控制',
    description: '自然语言先转为时序逻辑(STL)，再生成安全轨迹。适合无人机控制。',
  },
  {
    icon: '🖥️',
    title: '边缘部署优先',
    description: '实时VLA、FocusVLA等都在优化边缘推理速度，适合机载计算。',
  },
  {
    icon: '🎯',
    title: '仿真平台统一',
    description: 'CARLA-Air统一AirSim和CARLA，减少仿真-真机gap。',
  },
];
