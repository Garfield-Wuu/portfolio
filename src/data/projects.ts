// ============================================
// 项目数据配置 - 集中管理所有项目信息
// ============================================

export interface Project {
  title: string;
  desc: string;
  tags: string[];
  link: string;
  github?: string;
  status: 'active' | 'completed' | 'research';
}

export const projects: Project[] = [
  {
    title: 'FlightGPT',
    desc: '基于大语言模型的无人机自然语言控制系统，支持自然语言指令控制无人机执行复杂任务。集成 RAG 知识库与实时航迹规划，实现用户通过自然语言与无人机交互。',
    tags: ['LLM', 'Drone', 'Python', 'RAG', 'PX4'],
    link: 'https://github.com/Garfield-Wuu/FlightGPT',
    github: 'https://github.com/Garfield-Wuu/FlightGPT',
    status: 'active',
  },
  {
    title: 'PaleoWave Calc',
    desc: '沉积学古水深与古风场恢复计算系统，用于湖盆古环境定量重建研究。支持 CSV 数据导入、批量计算与可视化。',
    tags: ['Python', 'Flask', 'Vue3', 'Scientific Computing'],
    link: 'https://pwcalc-cugb.garfield-wu.com',
    status: 'active',
  },
  {
    title: 'Prometheus 无人机项目',
    desc: '开源 PX4/Prometheus 无人机项目贡献者。参与自主飞行、目标追踪、集群控制等模块开发。',
    tags: ['ROS', 'PX4', 'C++', 'Computer Vision', 'UAV'],
    link: 'https://github.com/Prometheus-Flightmare/Prometheus',
    github: 'https://github.com/Prometheus-Flightmare/Prometheus',
    status: 'active',
  },
  {
    title: 'Admin System',
    desc: '企业级后台管理系统，前端 Vue3 + 后端 Spring Boot，涵盖用户管理、权限控制、数据可视化等企业级模块。',
    tags: ['Vue3', 'Spring Boot', 'MySQL', 'Redis', 'Docker'],
    link: '#', // TODO: 填入真实地址
    github: 'https://github.com/Garfield-Wuu/admin-system',
    status: 'completed',
  },
  {
    title: 'WorldMonitor',
    desc: '基于 Prometheus + Grafana 的多节点监控系统，实时采集并可视化展示系统指标，支持告警规则配置。',
    tags: ['Prometheus', 'Grafana', 'Docker', 'Linux', '监控系统'],
    link: '#', // TODO: 填入真实地址
    status: 'completed',
  },
  {
    title: 'MAVROS 集成项目',
    desc: '基于 MAVROS 的无人机与地面站通信中间件开发，支持多无人机编队控制与协同任务规划。',
    tags: ['MAVROS', 'ROS', 'Python', 'UAV', 'Swarm'],
    link: '#',
    github: 'https://github.com/Garfield-Wuu/mavros-tools',
    status: 'research',
  },
];

// 技能标签颜色映射
export const tagColors: Record<string, string> = {
  'LLM': 'text-blue-400 border-blue-400/30',
  'Drone': 'text-purple-400 border-purple-400/30',
  'UAV': 'text-purple-400 border-purple-400/30',
  'ROS': 'text-orange-400 border-orange-400/30',
  'PX4': 'text-green-400 border-green-400/30',
  'Python': 'text-yellow-400 border-yellow-400/30',
  'C++': 'text-blue-500 border-blue-500/30',
  'Docker': 'text-cyan-400 border-cyan-400/30',
};
