<template>
  <section class="hero">
    <div class="stars"></div>
    <div class="hero-content">
      <div class="moon">🌙</div>
      <h1>禅月塔罗</h1>
      <p class="subtitle">探索内心 · 照见真我</p>
      <p class="tagline">在神秘的塔罗世界中，寻找属于你的答案</p>
      <a href="#draw" class="cta-btn">开始占卜</a>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background: linear-gradient(135deg, #0a0a15 0%, #1a1a2e 50%, #2d1b4e 100%);
  color: var(--text-light);
  text-align: center;
  padding: 120px 1.5rem 80px;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}

.stars {
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: 
    radial-gradient(2px 2px at 20% 30%, white, transparent),
    radial-gradient(2px 2px at 60% 70%, white, transparent),
    radial-gradient(1px 1px at 50% 50%, white, transparent),
    radial-gradient(1px 1px at 80% 10%, white, transparent),
    radial-gradient(2px 2px at 90% 60%, white, transparent);
  background-size: 200% 200%;
  animation: twinkle 8s ease-in-out infinite;
  opacity: 0.6;
}

@keyframes twinkle {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 0.3; }
}

.hero-content {
  position: relative;
  z-index: 1;
}

.moon {
  font-size: 4rem;
  margin-bottom: 1rem;
  animation: float 3s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
  color: var(--accent-gold);
  text-shadow: 0 0 20px rgba(212, 175, 55, 0.5);
  letter-spacing: 0.2rem;
}

.subtitle {
  font-size: 1.3rem;
  margin-bottom: 1rem;
  letter-spacing: 0.3rem;
  color: var(--text-light);
}

.tagline {
  font-size: 1rem;
  opacity: 0.8;
  margin-bottom: 2rem;
  color: var(--text-muted);
}

.cta-btn {
  display: inline-block;
  background: linear-gradient(135deg, var(--accent-purple), var(--accent-blue));
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-size: 1.1rem;
  transition: all 0.3s;
  box-shadow: 0 4px 15px rgba(107, 76, 154, 0.4);
}

.cta-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(107, 76, 154, 0.6);
}

@media (max-width: 768px) {
  .hero {
    padding: 100px 1rem 60px;
  }
  
  .moon {
    font-size: 3rem;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .subtitle {
    font-size: 1.1rem;
    letter-spacing: 0.2rem;
  }
  
  .tagline {
    font-size: 0.9rem;
  }
  
  .cta-btn {
    padding: 0.8rem 2rem;
    font-size: 1rem;
  }
}
</style>
