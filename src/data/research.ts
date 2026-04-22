// Research Data - Auto-generated at 2026-04-22 08:45:57 by export_research_to_site.py
// DO NOT EDIT MANUALLY

export interface ResearchPaper {
  id: string;
  title: string;
  authors: string;
  source: string;
  arxivId: string;
  url: string;
  pdf: string;
  publishedAt: string;
  tags: string[];
  abstract: string;
  fetchedAt: string;
}

export interface GitHubProject {
  name: string;
  description: string;
  url: string;
  stars: number;
  language: string;
  tags: string[];
}

export interface NewsItem {
  title: string;
  source: string;
  url: string;
  publishedAt: string;
  summary: string;
}

export const papers: ResearchPaper[] = [
  {
    "title": "DESPITE",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.18463",
    "date": "2026-04-18",
    "summary": "LLM Planning Safety Crisis ⭐⭐⭐⭐⭐ DESPITE Benchmark: 12,279 tasks, 23 models tested 即使最佳模型: 0.4%无效计划 BUT **28.3%危险计划**。PX4必须设计独立安全验证层",
    "problem": "LLM安全风险基准, 12,279任务方向的核心问题与挑战",
    "method": "LLM Planning Safety Crisis ⭐⭐⭐⭐⭐ DESPITE Benchmark: 12,279 tasks, 23 models tested 即使最佳模型: 0.4%无效计划 BUT **28.3%危险计划**",
    "value": "PX4必须设计独立安全验证层",
    "why_relevant": "PX4必须设计独立安全验证层",
    "research_axis": "LLM",
    "link": "https://arxiv.org/abs/2604.18463",
    "pdf_url": "https://arxiv.org/pdf/2604.18463",
    "tags": [
      "LLM安全风险基准, 12,279任务"
    ],
    "importance": "high"
  },
  {
    "title": "SNOOPIE",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.18331",
    "date": "2026-04-18",
    "summary": "四足机器人教练 ⭐⭐⭐⭐ 60.6% better pace adherence 45.9% more speed consistency。人机交互场景参考",
    "problem": "四足机器人教练, ICRA 2026方向的核心问题与挑战",
    "method": "四足机器人教练 ⭐⭐⭐⭐ 60.6% better pace adherence 45.9% more speed consistency",
    "value": "人机交互场景参考",
    "why_relevant": "人机交互场景参考",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.18331",
    "pdf_url": "https://arxiv.org/pdf/2604.18331",
    "tags": [
      "四足机器人教练, ICRA 2026"
    ],
    "importance": "high"
  },
  {
    "title": "Event Propeller Sensing",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.18289",
    "date": "2026-04-18",
    "summary": "事件相机螺旋桨追踪, 多UAV状态估计方向最新研究。",
    "problem": "事件相机螺旋桨追踪, 多UAV状态估计方向的核心问题与挑战",
    "method": "事件相机螺旋桨追踪, 多UAV状态估计",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.18289",
    "pdf_url": "https://arxiv.org/pdf/2604.18289",
    "tags": [
      "事件相机螺旋桨追踪, 多UAV状态估计"
    ],
    "importance": "high"
  },
  {
    "title": "COFFAIL",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.18236",
    "date": "2026-04-18",
    "summary": "咖啡制备机器人成功/异常数据集方向最新研究。",
    "problem": "咖啡制备机器人成功/异常数据集方向的核心问题与挑战",
    "method": "咖啡制备机器人成功/异常数据集",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.18236",
    "pdf_url": "https://arxiv.org/pdf/2604.18236",
    "tags": [
      "咖啡制备机器人成功/异常数据集"
    ],
    "importance": "high"
  },
  {
    "title": "CiT",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.18126",
    "date": "2026-04-18",
    "summary": "跨时域意图交互轨迹预测方向最新研究。",
    "problem": "跨时域意图交互轨迹预测方向的核心问题与挑战",
    "method": "跨时域意图交互轨迹预测",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.18126",
    "pdf_url": "https://arxiv.org/pdf/2604.18126",
    "tags": [
      "跨时域意图交互轨迹预测"
    ],
    "importance": "high"
  },
  {
    "title": "BeTTER",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.18000",
    "date": "2026-04-18",
    "summary": "VLA诊断基准 ⭐⭐⭐⭐⭐ 揭示SOTA VLA的灾难性失败：Lexical-Kinematic Shortcuts, Behavioral Inertia, Semantic Feature Collapse 根本原因：Capacity Compression + Myopic Downsampling。评估必须包含动态场景，架构设计应保留细粒度空间信息",
    "problem": "VLA诊断基准, 揭示具身推理幻觉方向的核心问题与挑战",
    "method": "VLA诊断基准 ⭐⭐⭐⭐⭐ 揭示SOTA VLA的灾难性失败：Lexical-Kinematic Shortcuts, Behavioral Inertia, Semantic Feature Collapse 根本原因：Capacity Compression + Myopic Downsampling",
    "value": "评估必须包含动态场景，架构设计应保留细粒度空间信息",
    "why_relevant": "评估必须包含动态场景，架构设计应保留细粒度空间信息",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.18000",
    "pdf_url": "https://arxiv.org/pdf/2604.18000",
    "tags": [
      "VLA诊断基准, 揭示具身推理幻觉"
    ],
    "importance": "high"
  },
  {
    "title": "DAG-STL",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.18343",
    "date": "2026-04-18",
    "summary": "零样本STL轨迹规划 ⭐⭐⭐⭐⭐ 三阶段管道：Decomposition → Allocation → Generation 零样本泛化到新STL规范，无需重训练。多点巡航任务可用STL描述，零样本新任务部署",
    "problem": "零样本STL轨迹规划, 分层扩散方向的核心问题与挑战",
    "method": "零样本STL轨迹规划 ⭐⭐⭐⭐⭐ 三阶段管道：Decomposition → Allocation → Generation 零样本泛化到新STL规范，无需重训练",
    "value": "多点巡航任务可用STL描述，零样本新任务部署",
    "why_relevant": "多点巡航任务可用STL描述，零样本新任务部署",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.18343",
    "pdf_url": "https://arxiv.org/pdf/2604.18343",
    "tags": [
      "零样本STL轨迹规划, 分层扩散"
    ],
    "importance": "high"
  },
  {
    "title": "Physical Feasibility",
    "authors": "OpenClaw Scout",
    "venue": "arXiv:2604.17896",
    "date": "2026-04-17",
    "summary": "VLA显式物理约束监督方向最新研究。",
    "problem": "VLA显式物理约束监督方向的核心问题与挑战",
    "method": "VLA显式物理约束监督",
    "value": "与LLM无人机研究相关",
    "why_relevant": "与LLM无人机研究相关",
    "research_axis": "VLA",
    "link": "https://arxiv.org/abs/2604.17896",
    "pdf_url": "https://arxiv.org/pdf/2604.17896",
    "tags": [
      "VLA显式物理约束监督"
    ],
    "importance": "high"
  }
];
export const githubProjects: GitHubProject[] = [];
export const news: NewsItem[] = [
  {
    "title": "SwarmGPT：用 LLM 控制无人机集群",
    "link": "https://utiasdsl.github.io/swarm_GPT/",
    "summary": "来源：UTIAS DSL Lab 💡 系统集成 LLM 与安全运动规划，实现自然语言控制集群编队 🎯 可应用于无人机集群表演，也可扩展至搜救场景",
    "source": "GitHub",
    "date": "_2026-04-2",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "FM-Planner：基础模型引导的无人机路径规划",
    "link": "https://github.com/NTU-ICG/FM-Planner",
    "summary": "来源：NTU ICG Lab 💡 评估 8 种 LLM 作为路径规划器的表现，提出 Foundation Model Guided 方案  https://github.com/NTU-ICG/FM-Planner",
    "source": "GitHub",
    "date": "_2026-04-2",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "drone",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "commaai/openpilot ⭐ 60,686",
    "link": "https://github.com/commaai/openpilot",
    "summary": "C++ | 自动驾驶操作系统 💡 核心：开源自动驾驶系统，已在 300+ 车型上量产部署 🎯 亮点：真实世界验证的代码质量，工程化参考价值极高",
    "source": "GitHub",
    "date": "_2026-04-2",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "llm",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "AtsushiSakai/PythonRobotics ⭐ 29,216",
    "link": "https://github.com/AtsushiSakai/PythonRobotics",
    "summary": "Python | 机器人算法教科书级别仓库 💡 核心：覆盖路径规划（PRM、RRT、A）、SLAM、Kalman 滤波等 🎯 亮点：每个算法都有 Python 实现+可视化，入门必读",
    "source": "GitHub",
    "date": "_2026-04-2",
    "published_at": "_2026-04-2",
    "verified": false,
    "why_it_matters": null,
    "research_axis": "robotics",
    "freshness": "unknown",
    "archived": false
  },
  {
    "title": "NVIDIA GR00T N1.6 + Cosmos Reason 2 发布",
    "source": "NVIDIA Newsroom",
    "date": "2026-04-01",
    "summary": "NVIDIA发布开源物理AI模型GR00T N1.6和Cosmos Reason世界模型，全球合作伙伴推出下一代机器人，机器人的ChatGPT时刻已至。",
    "link": "https://nvidianews.nvidia.com/news/nvidia-releases-new-physical-ai-models-as-global-partners-unveil-next-generation-robots",
    "published_at": "2026-04-01",
    "freshness": "fresh",
    "verified": true,
    "why_it_matters": "开源物理AI+世界模型对机器人仿真和无人机Sim2Real有直接参考价值",
    "research_axis": "robotics",
    "_source": "fallback"
  }
];
