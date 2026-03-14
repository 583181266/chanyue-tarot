<template>
  <section id="draw" class="tarot-draw">
    <h2>塔罗抽牌</h2>
    <p class="desc">静心冥想，点击开始抽取三张牌</p>

    <button v-if="!drawn" @click="drawCards" class="draw-btn">开始抽牌</button>

    <div v-if="drawn" class="cards">
      <div v-for="(card, index) in drawnCards" :key="index"
           :class="['card', { flipped: card.flipped }]"
           @click="flipCard(index)">
        <div class="card-inner">
          <div class="card-back">
            <img src="/back.png" alt="塔罗牌背面">
          </div>
          <div class="card-front">
            <img :src="`/tarot/${encodeURIComponent(card.name)}`" :alt="card.name">
          </div>
        </div>
      </div>
    </div>

    <button v-if="drawn" @click="reset" class="reset-btn">重新抽牌</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const cards = [
  '00愚者.jpg', '01魔术师.jpg', '02女祭祀.jpg', '03皇后.jpg', '04皇帝.jpg',
  '05教皇.jpg', '06恋人.jpg', '07战车.jpg', '08力量.jpg', '09隐士.jpg',
  '10命运之轮.jpg', '11正义.jpg', '12倒吊人.jpg', '13死神.jpg', '14节制.jpg',
  '15恶魔.jpg', '16高塔.jpg', '17星星.jpg', '18月亮.jpg', '19太阳.jpg',
  '20审判.jpg', '21世界.jpg',
  '圣杯ACE.jpg', '圣杯2.jpg', '圣杯3.jpg', '圣杯4.jpg', '圣杯5.jpg',
  '圣杯6.jpg', '圣杯7.jpg', '圣杯8.jpg', '圣杯9.jpg', '圣杯10.jpg',
  '圣杯侍卫.jpg', '圣杯骑士.jpg', '圣杯王后.jpg', '圣杯国王.jpg',
  '宝剑ACE.jpg', '宝剑2.jpg', '宝剑3.jpg', '宝剑4.jpg', '宝剑5.jpg',
  '宝剑6.jpg', '宝剑7.jpg', '宝剑8.jpg', '宝剑9.jpg', '宝剑10.jpg',
  '宝剑侍卫.jpg', '宝剑骑士.jpg', '宝剑王后.jpg', '宝剑国王.jpg',
  '星币ACE.jpg', '星币2.jpg', '星币3.jpg', '星币4.jpg', '星币5.jpg',
  '星币6.jpg', '星币7.jpg', '星币8.jpg', '星币9.jpg', '星币10.jpg',
  '星币侍卫.jpg', '星币骑士.jpg', '星币王后.jpg', '星币国王.jpg',
  '权杖ACE.jpg', '权杖2.jpg', '权杖3.jpg', '权杖4.jpg', '权杖5.jpg',
  '权杖6.jpg', '权杖7.jpg', '权杖8.jpg', '权杖9.jpg', '权杖10.jpg',
  '权杖侍卫.jpg', '权杖骑士.jpg', '权杖王后.jpg', '权杖国王.jpg'
]

const drawn = ref(false)
const drawnCards = ref([])

const drawCards = () => {
  const shuffled = [...cards].sort(() => Math.random() - 0.5)
  drawnCards.value = shuffled.slice(0, 3).map(name => ({ name, flipped: false }))
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
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 2rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #1a1a2e;
}

.desc {
  font-size: 1.1rem;
  color: #555;
  margin-bottom: 2rem;
}

.draw-btn, .reset-btn {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #d4af37;
  border: none;
  padding: 1rem 3rem;
  font-size: 1.2rem;
  border-radius: 50px;
  cursor: pointer;
  transition: transform 0.3s;
}

.draw-btn:hover, .reset-btn:hover {
  transform: scale(1.05);
}

.reset-btn {
  margin-top: 2rem;
}

.cards {
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin: 3rem 0;
  flex-wrap: wrap;
}

.card {
  width: 200px;
  height: 350px;
  perspective: 1000px;
  cursor: pointer;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
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
  display: flex;
  align-items: center;
  justify-content: center;
}

.card-back {
  background: #1a1a2e;
  overflow: hidden;
}

.card-back img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-front {
  background: #fff;
  transform: rotateY(180deg);
  padding: 0;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  overflow: hidden;
}

.card-front img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>



