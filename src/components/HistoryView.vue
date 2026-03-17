<template>
  <div class="history-view">
    <h2 class="history-title">✦ 占卜历史 ✦</h2>

    <div v-if="history.length === 0" class="history-empty">
      <p>暂无占卜记录</p>
    </div>

    <div v-else class="history-list">
      <div
        v-for="record in history"
        :key="record.id"
        class="history-item"
        @click="toggleExpand(record.id)"
      >
        <div class="history-header">
          <span class="history-icon">{{ record.spread.icon }}</span>
          <span class="history-name">{{ record.spread.name }}</span>
          <span class="history-date">{{ record.date }}</span>
          <span class="expand-arrow" :class="{ expanded: expandedId === record.id }">▾</span>
        </div>
        <Transition name="slide">
          <div v-if="expandedId === record.id" class="history-detail">
            <div class="history-cards">
              <div v-for="(card, i) in record.cards" :key="i" class="history-card">
                <img :src="card.url" :alt="card.name" :class="{ reversed: card.reversed }" />
                <div class="hcard-info">
                  <span class="hcard-pos">{{ card.position }}</span>
                  <span class="hcard-name">{{ card.name }}</span>
                  <span v-if="card.reversed" class="hcard-rev">逆位</span>
                </div>
              </div>
            </div>
          </div>
        </Transition>
      </div>
    </div>

    <div class="history-actions">
      <button v-if="history.length > 0" class="clear-btn" @click="onClear">清空历史</button>
      <button class="back-btn" @click="$emit('back')">← 返回首页</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useHistory } from '../composables/useHistory.js'

const emit = defineEmits(['back'])
const { history, clearHistory } = useHistory()
const expandedId = ref(null)

const toggleExpand = (id) => {
  expandedId.value = expandedId.value === id ? null : id
}

const onClear = () => {
  if (confirm('确定要清空所有占卜历史吗？')) {
    clearHistory()
  }
}
</script>

<style scoped>
.history-view {
  min-height: 100vh;
  padding: 100px 1.5rem 60px;
  position: relative;
  z-index: 1;
  max-width: 700px;
  margin: 0 auto;
}

.history-title {
  text-align: center;
  font-size: 2rem;
  color: var(--accent-gold);
  margin-bottom: 2rem;
}

.history-empty {
  text-align: center;
  color: var(--text-muted);
  padding: 3rem;
  font-size: 1.1rem;
}

.history-list {
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
}

.history-item {
  background: rgba(26, 26, 46, 0.8);
  border: 1px solid rgba(212, 175, 55, 0.15);
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: border-color 0.3s;
}

.history-item:hover {
  border-color: rgba(212, 175, 55, 0.4);
}

.history-header {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 1.2rem;
}

.history-icon { font-size: 1.3rem; }
.history-name { color: var(--accent-gold); font-weight: 600; }
.history-date { color: var(--text-muted); font-size: 0.85rem; margin-left: auto; }

.expand-arrow {
  color: var(--text-muted);
  transition: transform 0.3s;
  font-size: 0.8rem;
}
.expand-arrow.expanded { transform: rotate(180deg); }

.history-detail {
  padding: 0 1.2rem 1.2rem;
}

.history-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
}

.history-card {
  width: 80px;
  text-align: center;
}

.history-card img {
  width: 70px;
  height: 110px;
  object-fit: cover;
  border-radius: 6px;
  border: 1px solid rgba(212, 175, 55, 0.3);
}

.history-card img.reversed {
  transform: rotate(180deg);
}

.hcard-info {
  margin-top: 0.3rem;
}

.hcard-pos {
  display: block;
  font-size: 0.7rem;
  color: var(--accent-purple);
}

.hcard-name {
  display: block;
  font-size: 0.7rem;
  color: var(--text-light);
}

.hcard-rev {
  display: block;
  font-size: 0.65rem;
  color: #e74c3c;
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  max-height: 0;
}
.slide-enter-to, .slide-leave-from {
  opacity: 1;
  max-height: 500px;
}

.history-actions {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 2rem;
}

.clear-btn {
  background: none;
  border: 1px solid rgba(231, 76, 60, 0.5);
  color: #e74c3c;
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s;
}

.clear-btn:hover {
  background: rgba(231, 76, 60, 0.1);
}

.back-btn {
  background: none;
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: var(--accent-gold);
  padding: 0.7rem 1.5rem;
  border-radius: 50px;
  cursor: pointer;
  font-size: 0.95rem;
  transition: all 0.3s;
}

.back-btn:hover {
  background: rgba(212, 175, 55, 0.1);
}

@media (max-width: 768px) {
  .history-view { padding: 80px 1rem 40px; }
  .history-title { font-size: 1.6rem; }
  .history-card { width: 65px; }
  .history-card img { width: 55px; height: 90px; }
}
</style>
