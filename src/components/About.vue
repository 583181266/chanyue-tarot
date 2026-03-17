<template>
  <section id="about" class="about">
    <div class="container">
      <h2>✦ 关于禅月塔罗 ✦</h2>
      <p>禅月塔罗工作室致力于为每一位来访者提供专业、温暖的塔罗咨询服务。我们相信，塔罗不仅是一种占卜工具，更是一面映照内心的明镜，帮助你在人生的十字路口找到方向。</p>
    </div>
  </section>
</template>

<style scoped>
.about {
  background: transparent;
  padding: 80px 1.5rem;
  position: relative;
  z-index: 1;
}

.container {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
  color: var(--accent-gold);
  letter-spacing: 0.1rem;
}

p {
  font-size: 1.1rem;
  line-height: 2;
  color: var(--text-light);
  opacity: 0.9;
}

@media (max-width: 768px) {
  .about {
    padding: 60px 1.5rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  p {
    font-size: 1rem;
    line-height: 1.8;
  }
}
</style>
