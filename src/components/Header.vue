<template>
  <header>
    <nav>
      <div class="logo">禅月塔罗</div>
      <ul>
        <li><a href="#about">关于我们</a></li>
        <li><a href="#services">服务项目</a></li>
        <li><a href="#draw">塔罗抽牌</a></li>
        <li><a href="#contact">联系方式</a></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  background: rgba(20, 20, 40, 0.95);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
}

nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
  color: #d4af37;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  color: #fff;
  text-decoration: none;
  transition: color 0.3s;
}

nav a:hover {
  color: #d4af37;
}
</style>
