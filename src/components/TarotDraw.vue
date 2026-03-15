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
            <img :src="backImage" alt="塔罗牌背面">
          </div>
          <div class="card-front">
            <img :src="card.url" :alt="card.name">
          </div>
        </div>
      </div>
    </div>

    <button v-if="drawn" @click="reset" class="reset-btn">重新抽牌</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import backImg from '../assets/back.png'

const backImage = backImg

const tarotImages = import.meta.glob('../assets/tarot/*.jpg', { eager: true, import: 'default' })
const cards = Object.entries(tarotImages).map(([path, url]) => {
  const name = path.split('/').pop()
  return { name, url }
})

console.log('Loaded cards:', cards.length)

const drawn = ref(false)
const drawnCards = ref([])

const drawCards = () => {
  const shuffled = [...cards].sort(() => Math.random() - 0.5)
  drawnCards.value = shuffled.slice(0, 3).map(card => ({ ...card, flipped: false }))
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



