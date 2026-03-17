<template>
  <canvas ref="canvasRef" class="starry-bg"></canvas>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const canvasRef = ref(null)
let animId = null

onMounted(() => {
  const canvas = canvasRef.value
  const ctx = canvas.getContext('2d')
  let stars = []
  const STAR_COUNT = 150

  function resize() {
    canvas.width = window.innerWidth
    canvas.height = window.innerHeight
  }

  function initStars() {
    stars = []
    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.5 + 0.5,
        alpha: Math.random(),
        speed: Math.random() * 0.005 + 0.002,
        phase: Math.random() * Math.PI * 2,
      })
    }
  }

  function draw(time) {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    for (const s of stars) {
      const flicker = 0.5 + 0.5 * Math.sin(time * s.speed + s.phase)
      ctx.beginPath()
      ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(255, 255, 255, ${flicker * 0.8})`
      ctx.fill()
    }
    // occasional shooting star
    if (Math.random() < 0.002) {
      const sx = Math.random() * canvas.width
      const sy = Math.random() * canvas.height * 0.5
      const len = 80 + Math.random() * 60
      const grad = ctx.createLinearGradient(sx, sy, sx + len, sy + len * 0.3)
      grad.addColorStop(0, 'rgba(255,255,255,0.8)')
      grad.addColorStop(1, 'rgba(255,255,255,0)')
      ctx.strokeStyle = grad
      ctx.lineWidth = 1.5
      ctx.beginPath()
      ctx.moveTo(sx, sy)
      ctx.lineTo(sx + len, sy + len * 0.3)
      ctx.stroke()
    }
    animId = requestAnimationFrame(draw)
  }

  resize()
  initStars()
  animId = requestAnimationFrame(draw)
  window.addEventListener('resize', () => { resize(); initStars() })
})

onUnmounted(() => {
  if (animId) cancelAnimationFrame(animId)
})
</script>

<style scoped>
.starry-bg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  pointer-events: none;
}
</style>
