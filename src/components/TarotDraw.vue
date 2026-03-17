<template>
  <section id="draw" class="tarot-draw">
    <Transition name="fade" mode="out-in">
      <!-- HOME: 入口按钮 -->
      <div v-if="appState === 'HOME'" key="home" class="state-home">
        <h2>✦ 塔罗抽牌 ✦</h2>
        <p class="desc">静心冥想，聆听内心的声音</p>
        <div class="home-actions">
          <button class="draw-btn" @click="goToSpreadSelection">
            <span class="btn-icon">🔮</span>
            开始占卜
          </button>
          <button class="history-btn" @click="goToHistory">
            <span class="btn-icon">📜</span>
            占卜历史
          </button>
        </div>
      </div>

      <!-- SPREAD_SELECTION: 牌阵选择 -->
      <SpreadSelection
        v-else-if="appState === 'SPREAD_SELECTION'"
        key="selection"
        @select="selectSpread"
        @back="goHome"
      />

      <!-- DECK: 扇形牌堆 -->
      <CardDeck
        v-else-if="appState === 'DECK'"
        key="deck"
        :spread="selectedSpread"
        :drawn-count="drawnCards.length"
        @draw="onCardDrawn"
        @back="reset"
      />

      <!-- SPREAD_DISPLAY: 牌阵展示 -->
      <SpreadDisplay
        v-else-if="appState === 'SPREAD_DISPLAY'"
        key="display"
        :spread="selectedSpread"
        :cards="drawnCards"
        @restart="reset"
        @home="goHome"
      />

      <!-- HISTORY: 历史记录 -->
      <HistoryView
        v-else-if="appState === 'HISTORY'"
        key="history"
        @back="goHome"
      />
    </Transition>
  </section>
</template>

<script setup>
import { useAppState } from '../composables/useAppState.js'
import { useHistory } from '../composables/useHistory.js'
import SpreadSelection from './SpreadSelection.vue'
import CardDeck from './CardDeck.vue'
import SpreadDisplay from './SpreadDisplay.vue'
import HistoryView from './HistoryView.vue'

const {
  appState,
  selectedSpread,
  drawnCards,
  goToSpreadSelection,
  selectSpread,
  addDrawnCard,
  goToHistory,
  goHome,
  reset,
} = useAppState()

const { saveReading } = useHistory()

const onCardDrawn = (card) => {
  addDrawnCard(card)
  if (drawnCards.value.length >= selectedSpread.value.count) {
    saveReading(selectedSpread.value, drawnCards.value)
  }
}
</script>

<style scoped>
.tarot-draw {
  background: transparent;
  min-height: 100vh;
  position: relative;
  overflow: visible;
  z-index: 2;
}

.state-home {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 80px 1.5rem;
  text-align: center;
  position: relative;
  z-index: 1;
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

.home-actions {
  display: flex;
  gap: 1.5rem;
  flex-wrap: wrap;
  justify-content: center;
}

.draw-btn, .history-btn {
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1.15rem;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.draw-btn {
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  box-shadow: 0 4px 15px rgba(107, 76, 154, 0.4);
}

.draw-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(107, 76, 154, 0.6);
}

.history-btn {
  background: none;
  border: 1px solid rgba(212, 175, 55, 0.4);
  color: var(--accent-gold);
}

.history-btn:hover {
  background: rgba(212, 175, 55, 0.1);
  transform: translateY(-3px);
}

.btn-icon {
  font-size: 1.3rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  h2 { font-size: 1.6rem; }
  .desc { font-size: 1rem; margin-bottom: 2rem; }
  .draw-btn, .history-btn {
    padding: 0.9rem 2rem;
    font-size: 1rem;
  }
}
</style>
