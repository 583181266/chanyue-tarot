<template>
  <section class="hero">
    <div class="hero-content">
      <h1>禅月塔罗</h1>
      <p class="subtitle">探索内心 · 照见真我</p>
      <p class="tagline">在神秘的塔罗世界中，寻找属于你的答案</p>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%);
  color: #fff;
  text-align: center;
  padding: 150px 2rem 100px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.hero-content h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  color: #d4af37;
}

.subtitle {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 0.3rem;
}

.tagline {
  font-size: 1.1rem;
  opacity: 0.9;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
}
</style>
