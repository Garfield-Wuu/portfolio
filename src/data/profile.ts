// ============================================
// 个人资料配置 - 集中管理所有个人信息
// ============================================

export const profile = {
  // 基本信息
  name: 'Garfield',
  nameCN: '吴同学',
  title: '智能技术硕士生 · 机器人与无人机 · 大语言模型应用',
  bio: '专注于 LLM + 无人机交叉领域研究，探索自然语言控制无人机的可能性。热爱开源，活跃于 PX4/Prometheus 社区。',
  
  // 头像 - 使用 public/ 目录下的图片
  avatar: '/avatar.jpg',
  avatarFallback: 'G', // 当头像加载失败时显示
  
  // 社交链接
  social: {
    github: 'https://github.com/Garfield-Wuu',
    bilibili: 'https://space.bilibili.com/30027187',
    email: 'mailto:garfield@example.com', // TODO: 填入真实邮箱
  },
  
  // 关于页面详情
  about: {
    school: '澳门科技大学',
    schoolEN: 'Macau University of Science and Technology',
    degree: '智能技术硕士',
    location: '澳门/珠海',
    research: '大语言模型 + 无人机',
    interests: ['机器人工程', '计算机视觉', '嵌入式系统', '开源贡献'],
  },
  
  // 技能分类
  skillGroups: [
    {
      name: '编程语言',
      skills: ['Python', 'C', 'C++', 'JavaScript', 'TypeScript'],
    },
    {
      name: '机器人/无人机',
      skills: ['ROS/ROS2', 'PX4', 'MAVROS', 'Prometheus', 'Gazebo', 'Flight Control', 'UAV'],
    },
    {
      name: 'AI / 深度学习',
      skills: ['PyTorch', 'Computer Vision', 'LLM', 'RAG', 'OpenCV', 'NLP'],
    },
    {
      name: '工具/平台',
      skills: ['Git', 'Docker', 'Linux', 'LaTeX', 'Astro', 'Vue3'],
    },
  ],
  
  // 研究方向
  researchAreas: [
    {
      icon: '🤖',
      title: 'LLM + 无人机',
      desc: '大语言模型用于无人机任务规划，自然语言指令解析、实时决策控制。',
    },
    {
      icon: '🦾',
      title: '机器人感知与控制',
      desc: '计算机视觉、SLAM、深度强化学习在机器人系统中的应用。',
    },
    {
      icon: '🛸',
      title: '无人机自主飞行',
      desc: 'PX4/Firmware 二次开发、集群控制、目标追踪、自主导航。',
    },
    {
      icon: '🔧',
      title: '嵌入式系统',
      desc: 'STM32/嵌入式 Linux 开发、实时操作系统、传感器融合。',
    },
  ],
};

// SEO 默认配置
export const seo = {
  siteName: 'Garfield - 智能技术研究',
  siteUrl: 'https://www.garfield-wu.com',
  defaultDescription: '智能技术硕士生，专注于 LLM + 无人机交叉领域研究，探索自然语言控制无人机的可能性。',
  ogImage: '/avatar.jpg', // 社交分享默认图片
};

// 页面级 SEO 配置
export const pageSeo = {
  home: {
    title: 'Garfield - 智能技术研究',
    description: '智能技术硕士生 · 机器人与无人机 · 大语言模型应用。专注于 LLM + 无人机交叉领域研究。',
    ogTitle: 'Garfield - 智能技术研究',
    ogDescription: '探索大语言模型控制无人机的可能性，热爱开源，活跃于 PX4/Prometheus 社区。',
  },
  projects: {
    title: '项目作品 - Garfield',
    description: '无人机控制系统、机器人感知、LLM 应用、全栈开发等项目作品集。',
    ogTitle: '项目作品 - Garfield',
    ogDescription: '涵盖无人机、机器人、全栈开发等领域的项目作品集。',
  },
  research: {
    title: '研究热点 - Garfield',
    description: '追踪 LLM + 无人机 + 机器人领域最新进展：最新论文、GitHub 热门项目、研究趋势。',
    ogTitle: '研究热点 - Garfield',
    ogDescription: '每日更新的 LLM + 无人机领域最新研究进展，包括最新论文、开源项目、技术趋势。',
  },
  about: {
    title: '关于 - Garfield',
    description: '澳门科技大学智能技术硕士生，研究方向为 LLM + 无人机。',
    ogTitle: '关于 Garfield',
    ogDescription: '智能技术硕士生，专注于机器人工程与人工智能交叉领域。',
  },
};
