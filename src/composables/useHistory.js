import { ref } from 'vue'

const STORAGE_KEY = 'zenyue-tarot-history'

function loadHistory() {
  try {
    const data = localStorage.getItem(STORAGE_KEY)
    return data ? JSON.parse(data) : []
  } catch {
    return []
  }
}

const history = ref(loadHistory())

export function useHistory() {
  const saveReading = (spread, cards) => {
    const record = {
      id: Date.now(),
      date: new Date().toLocaleString('zh-CN'),
      spread: {
        id: spread.id,
        name: spread.name,
        icon: spread.icon,
        positions: spread.positions,
      },
      cards: cards.map((c, i) => ({
        name: c.name,
        url: c.url,
        reversed: c.reversed,
        position: spread.positions[i],
      })),
    }
    history.value.unshift(record)
    if (history.value.length > 50) history.value.length = 50
    localStorage.setItem(STORAGE_KEY, JSON.stringify(history.value))
    return record
  }

  const clearHistory = () => {
    history.value = []
    localStorage.removeItem(STORAGE_KEY)
  }

  return { history, saveReading, clearHistory }
}
