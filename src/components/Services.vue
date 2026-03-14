<template>
  <section id="services" class="services">
    <h2>服务项目</h2>
    <div class="service-grid">
      <div v-for="service in services" :key="service.title" class="service-card">
        <h3>{{ service.icon }} {{ service.title }}</h3>
        <p>{{ service.desc }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  { icon: '🌙', title: '情感咨询', desc: '解读情感困惑，探索关系走向' },
  { icon: '💼', title: '事业指引', desc: '职业规划建议，把握发展机遇' },
  { icon: '✨', title: '个人成长', desc: '自我认知提升，内在力量觉醒' }
]
</script>

<style scoped>
.services {
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 2rem;
  text-align: center;
}

h2 {
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1a1a2e;
}

.service-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.service-card {
  background: #f8f9fa;
  padding: 2rem;
  border-radius: 10px;
  transition: transform 0.3s;
}

.service-card:hover {
  transform: translateY(-10px);
}

.service-card h3 {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #1a1a2e;
}
</style>
