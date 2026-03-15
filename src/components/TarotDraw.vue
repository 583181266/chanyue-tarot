<template>
  <section id="draw" class="tarot-draw">
    <h2>✦ 塔罗抽牌 ✦</h2>
    <p class="desc">静心冥想，聆听内心的声音</p>

    <button v-if="!drawn" @click="drawCards" class="draw-btn">
      <span class="btn-icon">🔮</span>
      开始抽牌
    </button>

    <div v-if="drawn" class="cards">
      <div v-for="(card, index) in drawnCards" :key="index"
           :class="['card', { flipped: card.flipped }]"
           @click="flipCard(index)">
        <div class="card-inner">
          <div class="card-back">
            <img :src="backImage" alt="塔罗牌背面">
          </div>
          <div class="card-front">
            <img :src="card.url" :alt="card.name" :class="{ reversed: card.reversed }">
          </div>
        </div>
        <p class="card-label">
          {{ ['过去', '现在', '未来'][index] }}
          <span v-if="card.flipped && card.reversed" class="reversed-tag">逆位</span>
        </p>
      </div>
    </div>

    <button v-if="drawn" @click="reset" class="reset-btn">
      <span class="btn-icon">↻</span>
      重新抽牌
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const backImage = '/back.png'

const tarotFiles = [
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
  '星币侍卫.jpg', '星币骑士.jpg', '星币王后.jpg', '星币国王.jpg'
]

const cards = tarotFiles.map(name => ({
  name,
  url: `/tarot/${name}`
}))

const drawn = ref(false)
const drawnCards = ref([])

const drawCards = () => {
  const shuffled = [...cards].sort(() => Math.random() - 0.5)
  drawnCards.value = shuffled.slice(0, 3).map(card => ({ 
    ...card, 
    flipped: false,
    reversed: Math.random() < 0.5  // 50% 概率逆位
  }))
  drawn.value = true
}

const flipCard = (index) => {
  drawnCards.value[index].flipped = true
}

const reset = () => {
  drawn.value = false
  drawnCards.value = []
}
</script>

<style scoped>
.tarot-draw {
  background: linear-gradient(180deg, #0a0a15 0%, #1a1a2e 100%);
  padding: 80px 1.5rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--accent-gold);
  letter-spacing: 0.1rem;
}

.desc {
  font-size: 1.1rem;
  color: var(--text-muted);
  margin-bottom: 3rem;
}

.draw-btn, .reset-btn {
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  color: white;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(107, 76, 154, 0.4);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.draw-btn:hover, .reset-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(107, 76, 154, 0.6);
}

.btn-icon {
  font-size: 1.3rem;
}

.reset-btn {
  margin-top: 2rem;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem auto;
  flex-wrap: wrap;
  max-width: 800px;
}

.card {
  width: 180px;
  height: 300px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.card.flipped .card-inner {
  transform: rotateY(180deg);
}

.card-back, .card-front {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
}

.card-back {
  background: linear-gradient(135deg, #1a1a2e, #2d1b4e);
  border: 2px solid var(--accent-gold);
}

.card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-front {
  background: #fff;
  transform: rotateY(180deg);
}

.card-front img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s;
}

.card-front img.reversed {
  transform: rotate(180deg);
}

.card-label {
  margin-top: 1rem;
  color: var(--accent-gold);
  font-size: 1rem;
  letter-spacing: 0.1rem;
}

.reversed-tag {
  display: block;
  font-size: 0.85rem;
  color: var(--accent-purple);
  margin-top: 0.3rem;
}

@media (max-width: 768px) {
  .tarot-draw {
    padding: 60px 1rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  .desc {
    font-size: 1rem;
  }
  
  .draw-btn, .reset-btn {
    padding: 0.9rem 2rem;
    font-size: 1.1rem;
  }
  
  .cards {
    gap: 1.5rem;
  }
  
  .card {
    width: 140px;
    height: 240px;
  }
  
  .card-label {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .cards {
    gap: 1rem;
  }
  
  .card {
    width: 100px;
    height: 170px;
  }
}
</style>
