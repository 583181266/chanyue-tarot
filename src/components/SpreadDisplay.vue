<template>
  <div class="spread-display">
    <h2 class="display-title">✦ {{ spread.name }} · 解读 ✦</h2>

    <!-- 单张牌居中 -->
    <div v-if="spread.count === 1" class="layout-single">
      <div class="result-card">
        <div class="card-pos">{{ spread.positions[0] }}</div>
        <div class="card-img-wrap">
          <img :src="cards[0].url" :alt="cards[0].name" :class="{ reversed: cards[0].reversed }" />
        </div>
        <div class="card-name">{{ cards[0].name }}</div>
        <div v-if="cards[0].reversed" class="card-reversed">逆位</div>
      </div>
    </div>

    <!-- 三张横排 -->
    <div v-else-if="spread.count === 3" class="layout-three">
      <div v-for="(card, i) in cards" :key="i" class="result-card">
        <div class="card-pos">{{ spread.positions[i] }}</div>
        <div class="card-img-wrap">
          <img :src="card.url" :alt="card.name" :class="{ reversed: card.reversed }" />
        </div>
        <div class="card-name">{{ card.name }}</div>
        <div v-if="card.reversed" class="card-reversed">逆位</div>
      </div>
    </div>

    <!-- 凯尔特十字 -->
    <div v-else-if="spread.count === 10" class="layout-celtic">
      <div class="celtic-grid">
        <div v-for="(card, i) in cards" :key="i" class="result-card" :class="'celtic-pos-' + i">
          <div class="card-pos">{{ spread.positions[i] }}</div>
          <div class="card-img-wrap" :class="{ 'cross-card': i === 1 }">
            <img :src="card.url" :alt="card.name" :class="{ reversed: card.reversed }" />
          </div>
          <div class="card-name">{{ card.name }}</div>
          <div v-if="card.reversed" class="card-reversed">逆位</div>
        </div>
      </div>
    </div>

    <div class="display-actions">
      <button class="action-btn primary" @click="$emit('restart')">重新占卜</button>
      <button class="action-btn" @click="$emit('home')">返回首页</button>
    </div>
  </div>
</template>

<script setup>
defineProps({
  spread: { type: Object, required: true },
  cards: { type: Array, required: true },
})
defineEmits(['restart', 'home'])
</script>

<style scoped>
.spread-display {
  min-height: 100vh;
  padding: 100px 1.5rem 60px;
  text-align: center;
  position: relative;
  z-index: 1;
}

.display-title {
  font-size: 1.8rem;
  color: var(--accent-gold);
  margin-bottom: 2.5rem;
  letter-spacing: 0.1rem;
}

/* 通用卡片样式 */
.result-card {
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 0.4rem;
}

.card-pos {
  color: var(--accent-purple);
  font-size: 0.85rem;
  font-weight: 600;
  letter-spacing: 0.05rem;
}

.card-img-wrap {
  width: 120px;
  height: 200px;
  border-radius: 10px;
  overflow: hidden;
  border: 2px solid rgba(212, 175, 55, 0.4);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.card-img-wrap img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-img-wrap img.reversed {
  transform: rotate(180deg);
}

.card-name {
  color: var(--text-light);
  font-size: 0.85rem;
}

.card-reversed {
  color: #e74c3c;
  font-size: 0.75rem;
}

/* 单张居中 */
.layout-single {
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
}

.layout-single .card-img-wrap {
  width: 160px;
  height: 267px;
}

/* 三张横排 */
.layout-three {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
  margin-bottom: 2rem;
}

/* 凯尔特十字布局 */
.layout-celtic {
  margin-bottom: 2rem;
}

.celtic-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: repeat(4, auto);
  gap: 1rem;
  max-width: 800px;
  margin: 0 auto;
  justify-items: center;
  align-items: start;
}

/* 凯尔特十字位置:
   0=现状(中), 1=障碍(中叠), 2=目标(上), 3=根源(下),
   4=过去(左), 5=未来(右), 6=自我(右列下), 7=环境(右列),
   8=希望与恐惧(右列), 9=最终结果(右列上) */
.celtic-pos-0 { grid-column: 2; grid-row: 2; }
.celtic-pos-1 { grid-column: 3; grid-row: 2; }
.celtic-pos-2 { grid-column: 2 / 4; grid-row: 1; }
.celtic-pos-3 { grid-column: 2 / 4; grid-row: 3; }
.celtic-pos-4 { grid-column: 1; grid-row: 2; }
.celtic-pos-5 { grid-column: 4; grid-row: 2; }
.celtic-pos-6 { grid-column: 5 / 7; grid-row: 4; }
.celtic-pos-7 { grid-column: 5 / 7; grid-row: 3; }
.celtic-pos-8 { grid-column: 5 / 7; grid-row: 2; }
.celtic-pos-9 { grid-column: 5 / 7; grid-row: 1; }

.cross-card {
  transform: rotate(90deg);
}

.celtic-grid .card-img-wrap {
  width: 90px;
  height: 150px;
}

/* 操作按钮 */
.display-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.action-btn {
  background: none;
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: var(--accent-gold);
  padding: 0.8rem 2rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 1rem;
  transition: all 0.3s;
}

.action-btn:hover {
  background: rgba(212, 175, 55, 0.1);
}

.action-btn.primary {
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  border: none;
  color: white;
  box-shadow: 0 4px 15px rgba(107, 76, 154, 0.4);
}

.action-btn.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(107, 76, 154, 0.6);
}

@media (max-width: 768px) {
  .spread-display { padding: 80px 1rem 40px; }
  .display-title { font-size: 1.4rem; }
  .card-img-wrap { width: 100px; height: 167px; }
  .layout-single .card-img-wrap { width: 130px; height: 217px; }
  .layout-three { gap: 1rem; }
  .celtic-grid { gap: 0.5rem; }
  .celtic-grid .card-img-wrap { width: 60px; height: 100px; }
  .card-pos { font-size: 0.7rem; }
  .card-name { font-size: 0.7rem; }
}

@media (max-width: 480px) {
  .celtic-grid .card-img-wrap { width: 48px; height: 80px; }
  .card-pos { font-size: 0.6rem; }
  .card-name { font-size: 0.6rem; }
}
</style>
