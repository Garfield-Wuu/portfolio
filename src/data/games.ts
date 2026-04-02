// ============================================
// 隐藏彩蛋游戏元数据注册表
// 包含 16 款基础 HTML5 复古/经典小游戏
// ============================================

export interface Game {
  id: string;
  name: string;
  path: string;
  mobileFriendly: boolean; // 是否适合在触摸屏上游玩
}

export const easterEggGames: Game[] = [
  { id: '2048', name: '2048', path: '/games/2048/index.html', mobileFriendly: true },
  { id: 'snake', name: '贪吃蛇', path: '/games/snake/index.html', mobileFriendly: true },
  { id: 'tic-tac-toe', name: '井字棋', path: '/games/tic-tac-toe/index.html', mobileFriendly: true },
  { id: 'tetris', name: '俄罗斯方块', path: '/games/tetris/index.html', mobileFriendly: true },
  { id: 'pong', name: '乒乓球', path: '/games/pong/index.html', mobileFriendly: true },
  { id: 'pacman', name: '吃豆人', path: '/games/pacman/index.html', mobileFriendly: false }, // 某些纯键盘实现的需要虚拟摇杆
  { id: 'breakout', name: '打砖块', path: '/games/breakout/index.html', mobileFriendly: true },
  { id: 'trex-runner', name: '恐龙跳跃', path: '/games/trex-runner/index.html', mobileFriendly: true },
  { id: 'minesweeper', name: '扫雷', path: '/games/minesweeper/index.html', mobileFriendly: true },
  { id: 'flappy-bird', name: '像素小鸟', path: '/games/flappy-bird/index.html', mobileFriendly: true },
  { id: 'space-invaders', name: '太空入侵者', path: '/games/space-invaders/index.html', mobileFriendly: false },
  { id: 'maze', name: '迷宫', path: '/games/maze/index.html', mobileFriendly: false },
  { id: 'asteroids', name: '小行星打靶', path: '/games/asteroids/index.html', mobileFriendly: false },
  { id: 'sudoku', name: '数独', path: '/games/sudoku/index.html', mobileFriendly: true },
  { id: 'reaction-test', name: '反应力测试', path: '/games/reaction-test/index.html', mobileFriendly: true },
  { id: 'memory-match', name: '记忆配对', path: '/games/memory-match/index.html', mobileFriendly: true }
];

/**
 * 随机获取一个彩蛋游戏
 * @param isMobile - 客户端是否为移动端
 * @returns Game
 */
export function getRandomGame(isMobile: boolean = false): Game {
  const availableGames = isMobile 
    ? easterEggGames.filter(g => g.mobileFriendly) 
    : easterEggGames;
    
  if (availableGames.length === 0) return easterEggGames[0];
  
  const randomIndex = Math.floor(Math.random() * availableGames.length);
  return availableGames[randomIndex];
}