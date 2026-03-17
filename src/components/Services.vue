<template>
  <section id="services" class="services">
    <h2>✦ 服务项目 ✦</h2>
    <div class="service-grid">
      <div v-for="service in services" :key="service.title" class="service-card">
        <div class="icon">{{ service.icon }}</div>
        <h3>{{ service.title }}</h3>
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
  background: transparent;
  padding: 80px 1.5rem;
  position: relative;
  z-index: 1;
}

h2 {
  font-size: 2rem;
  margin-bottom: 3rem;
  color: var(--accent-gold);
  text-align: center;
  letter-spacing: 0.1rem;
}

.service-grid {
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.service-card {
  background: linear-gradient(135deg, rgba(26, 26, 46, 0.8), rgba(45, 27, 78, 0.6));
  padding: 2.5rem 1.5rem;
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s;
  text-align: center;
}

.service-card:hover {
  transform: translateY(-10px);
  border-color: var(--accent-gold);
  box-shadow: 0 10px 30px rgba(212, 175, 55, 0.3);
}

.icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  color: var(--accent-gold);
}

.service-card p {
  color: var(--text-light);
  opacity: 0.9;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .services {
    padding: 60px 1.5rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  .service-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .service-card {
    padding: 2rem 1.5rem;
  }
}
</style>
