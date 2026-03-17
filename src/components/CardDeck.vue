<template>
  <div class="card-deck-wrap">
    <h2 class="deck-title">✦ {{ spread.name }} ✦</h2>
    <p class="deck-hint">
      还需选择 <strong>{{ remaining }}</strong> 张牌 · 点击任意牌抽取
    </p>
    <div class="deck-grid">
      <div
        v-for="(card, i) in deckCards"
        :key="card.name"
        class="deck-card"
        :class="{
          drawn: drawnSet.has(i),
          flipping: flippingIdx === i,
          flipped: flippedIdx === i
        }"
        @click="onPick(i)"
      >
        <div class="card-inner">
          <div class="card-front">
            <img :src="backImage" alt="牌背" draggable="false" />
          </div>
          <div class="card-back">
            <img
              v-if="flippedIdx === i && flippedCard"
              :src="flippedCard.url"
              :class="{ reversed: flippedReversed }"
              alt="牌面"
              draggable="false"
            />
          </div>
        </div>
      </div>
    </div>
    <button class="back-btn" @click="$emit('back')">← 返回选择牌阵</button>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { allCards } from '../composables/spreads.js'

const props = defineProps({
  spread: { type: Object, required: true },
  drawnCount: { type: Number, default: 0 },
})
const emit = defineEmits(['draw', 'back'])

const backImage = '/back.png'

// 洗牌
const deckCards = ref([...allCards].sort(() => Math.random() - 0.5))

const remaining = computed(() => props.spread.count - props.drawnCount)

// 已抽牌索引
const drawnSet = ref(new Set())
const flippingIdx = ref(-1)
const flippedIdx = ref(-1)
const flippedCard = ref(null)
const flippedReversed = ref(false)
let picking = false

function onPick(i) {
  if (picking) return
  if (drawnSet.value.has(i)) return
  if (remaining.value <= 0) return

  picking = true
  const card = deckCards.value[i]
  const reversed = Math.random() < 0.5

  flippedCard.value = card
  flippedReversed.value = reversed

  // 翻牌动画
  flippingIdx.value = i
  setTimeout(() => {
    flippedIdx.value = i
    flippingIdx.value = -1
  }, 300)

  setTimeout(() => {
    drawnSet.value = new Set([...drawnSet.value, i])
    flippedIdx.value = -1
    flippedCard.value = null
    emit('draw', { ...card, reversed })
    picking = false
  }, 1400)
}
</script>

<style scoped>
.card-deck-wrap {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 80px 1rem 40px;
  position: relative;
  z-index: 1;
}

.deck-title {
  font-size: 1.8rem;
  color: var(--accent-gold);
  margin-bottom: 0.5rem;
  letter-spacing: 0.1rem;
}

.deck-hint {
  color: var(--text-muted);
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.deck-hint strong {
  color: var(--accent-gold);
}

.deck-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 10px;
  max-width: 900px;
  width: 100%;
  padding: 0 1rem 30px;
}

.deck-card {
  aspect-ratio: 2 / 3.3;
  perspective: 600px;
  cursor: pointer;
  transition: transform 0.3s, opacity 0.3s;
}

.deck-card:hover:not(.drawn) {
  transform: translateY(-6px);
}

.deck-card:hover:not(.drawn) .card-inner {
  box-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
}

.deck-card.drawn {
  opacity: 0.2;
  pointer-events: none;
  transform: scale(0.9);
}

.card-inner {
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.6s, box-shadow 0.3s;
  transform-style: preserve-3d;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.4);
  border: 1.5px solid rgba(212, 175, 55, 0.3);
}

.deck-card.flipping .card-inner {
  animation: flipToBack 0.3s ease-in forwards;
}

.deck-card.flipped .card-inner {
  animation: flipToFront 0.3s ease-out forwards;
  border-color: var(--accent-gold);
  box-shadow: 0 0 25px rgba(212, 175, 55, 0.5);
}

.card-front,
.card-back {
  position: absolute;
  inset: 0;
  backface-visibility: hidden;
}

.card-back {
  transform: rotateY(180deg);
}

.deck-card.flipped .card-front {
  visibility: hidden;
}

.deck-card.flipped .card-back {
  transform: rotateY(0deg);
}

.card-front img,
.card-back img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-back img.reversed {
  transform: rotate(180deg);
}

@keyframes flipToBack {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(90deg); }
}

@keyframes flipToFront {
  from { transform: rotateY(90deg); }
  to { transform: rotateY(0deg); }
}

.back-btn {
  background: none;
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: var(--accent-gold);
  padding: 0.7rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
  margin-top: 2rem;
}

.back-btn:hover {
  background: rgba(212, 175, 55, 0.1);
}

@media (max-width: 768px) {
  .deck-grid {
    grid-template-columns: repeat(auto-fill, minmax(60px, 1fr));
    gap: 6px;
  }
  .deck-title {
    font-size: 1.4rem;
  }
}
</style>
