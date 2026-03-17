import { ref } from 'vue'

// 应用状态机: HOME → SPREAD_SELECTION → DECK → SPREAD_DISPLAY → HISTORY
const appState = ref('HOME')
const selectedSpread = ref(null)
const drawnCards = ref([])

export function useAppState() {
  const goToSpreadSelection = () => {
    appState.value = 'SPREAD_SELECTION'
  }

  const selectSpread = (spread) => {
    selectedSpread.value = spread
    drawnCards.value = []
    appState.value = 'DECK'
  }

  const addDrawnCard = (card) => {
    drawnCards.value.push(card)
    if (drawnCards.value.length >= selectedSpread.value.count) {
      appState.value = 'SPREAD_DISPLAY'
    }
  }

  const goToHistory = () => {
    appState.value = 'HISTORY'
  }

  const goHome = () => {
    appState.value = 'HOME'
    selectedSpread.value = null
    drawnCards.value = []
  }

  const reset = () => {
    drawnCards.value = []
    appState.value = 'SPREAD_SELECTION'
  }

  return {
    appState,
    selectedSpread,
    drawnCards,
    goToSpreadSelection,
    selectSpread,
    addDrawnCard,
    goToHistory,
    goHome,
    reset,
  }
}
