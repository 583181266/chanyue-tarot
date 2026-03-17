// 牌阵定义
export const SPREADS = [
  {
    id: 'daily',
    name: '每日启示',
    icon: '☀️',
    description: '抽取一张牌，获取今日指引',
    count: 1,
    positions: ['今日指引'],
  },
  {
    id: 'timeflow',
    name: '时间之流',
    icon: '⏳',
    description: '过去·现在·未来，洞察时间的脉络',
    count: 3,
    positions: ['过去', '现在', '未来'],
  },
  {
    id: 'triangle',
    name: '圣三角',
    icon: '🔺',
    description: '问题·环境·解决方案，三位一体的启示',
    count: 3,
    positions: ['问题', '环境', '解决方案'],
  },
  {
    id: 'celtic',
    name: '凯尔特十字',
    icon: '✝️',
    description: '十张牌的深度解读，全面洞察命运走向',
    count: 10,
    positions: [
      '现状', '障碍', '目标', '根源', '过去',
      '未来', '自我', '环境', '希望与恐惧', '最终结果',
    ],
  },
]

// 78张韦特塔罗牌
export const tarotFiles = [
  '00愚者.jpg', '01魔术师.jpg', '02女祭祀.jpg', '03皇后.jpg', '04皇帝.jpg',
  '05教皇.jpg', '06恋人.jpg', '07战车.jpg', '08力量.jpg', '09隐士.jpg',
  '10命运之轮.jpg', '11正义.jpg', '12倒吊人.jpg', '13死神.jpg', '14节制.jpg',
  '15恶魔.jpg', '16高塔.jpg', '17星星.jpg', '18月亮.jpg', '19太阳.jpg',
  '20审判.jpg', '21世界.jpg',
  '权杖ACE.jpg', '权杖2.jpg', '权杖3.jpg', '权杖4.jpg', '权杖5.jpg',
  '权杖6.jpg', '权杖7.jpg', '权杖8.jpg', '权杖9.jpg', '权杖10.jpg',
  '权杖侍卫.jpg', '权杖骑士.jpg', '权杖王后.jpg', '权杖国王.jpg',
  '圣杯ACE.jpg', '圣杯2.jpg', '圣杯3.jpg', '圣杯4.jpg', '圣杯5.jpg',
  '圣杯6.jpg', '圣杯7.jpg', '圣杯8.jpg', '圣杯9.jpg', '圣杯10.jpg',
  '圣杯侍卫.jpg', '圣杯骑士.jpg', '圣杯王后.jpg', '圣杯国王.jpg',
  '宝剑ACE.jpg', '宝剑2.jpg', '宝剑3.jpg', '宝剑4.jpg', '宝剑5.jpg',
  '宝剑6.jpg', '宝剑7.jpg', '宝剑8.jpg', '宝剑9.jpg', '宝剑10.jpg',
  '宝剑侍卫.jpg', '宝剑骑士.jpg', '宝剑王后.jpg', '宝剑国王.jpg',
  '星币ACE.jpg', '星币2.jpg', '星币3.jpg', '星币4.jpg', '星币5.jpg',
  '星币6.jpg', '星币7.jpg', '星币8.jpg', '星币9.jpg', '星币10.jpg',
  '星币侍卫.jpg', '星币骑士.jpg', '星币王后.jpg', '星币国王.jpg',
]

export const allCards = tarotFiles.map(name => ({
  name: name.replace('.jpg', ''),
  url: `/tarot/${name}`,
}))
