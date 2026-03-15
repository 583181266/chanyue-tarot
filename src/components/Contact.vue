<template>
  <section id="contact" class="contact">
    <h2>✦ 联系我们 ✦</h2>
    <p class="subtitle">预约咨询或了解更多信息</p>
    <div class="contact-info">
      <div class="contact-item">
        <span class="icon">📱</span>
        <p>微信: Chanyue_rich</p>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background: linear-gradient(180deg, #1a1a2e 0%, #0a0a15 100%);
  padding: 80px 1.5rem;
  text-align: center;
}

h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
  color: var(--accent-gold);
  letter-spacing: 0.1rem;
}

.subtitle {
  color: var(--text-muted);
  margin-bottom: 2rem;
}

.contact-info {
  max-width: 600px;
  margin: 0 auto;
}

.contact-item {
  background: rgba(26, 26, 46, 0.6);
  padding: 2rem;
  border-radius: 15px;
  border: 1px solid rgba(212, 175, 55, 0.2);
  transition: all 0.3s;
}

.contact-item:hover {
  border-color: var(--accent-gold);
  transform: translateY(-5px);
}

.icon {
  font-size: 2.5rem;
  display: block;
  margin-bottom: 1rem;
}

.contact-item p {
  color: var(--text-light);
  font-size: 1.2rem;
  margin: 0;
}

@media (max-width: 768px) {
  .contact {
    padding: 60px 1.5rem;
  }
  
  h2 {
    font-size: 1.6rem;
  }
  
  .contact-item {
    padding: 1.5rem;
  }
  
  .icon {
    font-size: 2rem;
  }
  
  .contact-item p {
    font-size: 1.1rem;
  }
}
</style>
