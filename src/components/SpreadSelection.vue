<template>
  <div class="spread-selection">
    <h2 class="section-title">✦ 选择牌阵 ✦</h2>
    <p class="section-desc">选择一种牌阵，开始你的占卜之旅</p>
    <div class="spread-grid">
      <div
        v-for="spread in SPREADS"
        :key="spread.id"
        class="spread-card"
        @click="$emit('select', spread)"
      >
        <div class="spread-icon">{{ spread.icon }}</div>
        <h3>{{ spread.name }}</h3>
        <p class="spread-count">{{ spread.count }} 张牌</p>
        <p class="spread-desc">{{ spread.description }}</p>
        <div class="spread-positions">
          <span v-for="pos in spread.positions" :key="pos" class="pos-tag">{{ pos }}</span>
        </div>
      </div>
    </div>
    <button class="back-btn" @click="$emit('back')">← 返回首页</button>
  </div>
</template>

<script setup>
import { SPREADS } from '../composables/spreads.js'

defineEmits(['select', 'back'])
</script>

<style scoped>
.spread-selection {
  min-height: 100vh;
  padding: 100px 1.5rem 60px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.section-title {
  font-size: 2rem;
  color: var(--accent-gold);
  margin-bottom: 0.8rem;
  letter-spacing: 0.1rem;
}

.section-desc {
  color: var(--text-muted);
  font-size: 1.05rem;
  margin-bottom: 2.5rem;
}

.spread-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
  max-width: 1000px;
  margin: 0 auto 2rem;
}

.spread-card {
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.2);
  border-radius: 16px;
  padding: 2rem 1.5rem;
  cursor: pointer;
  transition: all 0.3s;
}

.spread-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent-gold);
  box-shadow: 0 8px 30px rgba(212, 175, 55, 0.15);
}

.spread-icon {
  font-size: 2.5rem;
  margin-bottom: 0.8rem;
}

.spread-card h3 {
  color: var(--accent-gold);
  font-size: 1.3rem;
  margin-bottom: 0.4rem;
}

.spread-count {
  color: var(--accent-purple);
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
}

.spread-desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.spread-positions {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.4rem;
}

.pos-tag {
  background: rgba(107, 76, 154, 0.3);
  color: var(--text-light);
  padding: 0.2rem 0.6rem;
  border-radius: 20px;
  font-size: 0.75rem;
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
  margin-top: 1rem;
}

.back-btn:hover {
  background: rgba(212, 175, 55, 0.1);
}

@media (max-width: 768px) {
  .spread-selection {
    padding: 80px 1rem 40px;
  }
  .section-title { font-size: 1.6rem; }
  .spread-grid { gap: 1rem; }
  .spread-card { padding: 1.5rem 1rem; }
}
</style>
