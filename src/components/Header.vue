<template>
  <header>
    <nav>
      <div class="logo">🌙 禅月塔罗</div>
      <button class="menu-toggle" @click="toggleMenu">☰</button>
      <ul :class="{ active: menuOpen }">
        <li><a href="#about" @click="closeMenu">关于我们</a></li>
        <li><a href="#services" @click="closeMenu">服务项目</a></li>
        <li><a href="#draw" @click="closeMenu">塔罗抽牌</a></li>
        <li><a href="#contact" @click="closeMenu">联系方式</a></li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
const toggleMenu = () => menuOpen.value = !menuOpen.value
const closeMenu = () => menuOpen.value = false
</script>

<style scoped>
header {
  background: rgba(10, 10, 21, 0.95);
  backdrop-filter: blur(10px);
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 100;
  border-bottom: 1px solid rgba(212, 175, 55, 0.2);
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
  color: var(--accent-gold);
  letter-spacing: 0.1rem;
}

.menu-toggle {
  display: none;
  background: none;
  border: none;
  color: var(--accent-gold);
  font-size: 1.8rem;
  cursor: pointer;
}

nav ul {
  display: flex;
  list-style: none;
  gap: 2rem;
}

nav a {
  color: var(--text-light);
  text-decoration: none;
  transition: all 0.3s;
  position: relative;
  padding: 0.5rem 0;
}

nav a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent-gold);
  transition: width 0.3s;
}

nav a:hover::after {
  width: 100%;
}

nav a:hover {
  color: var(--accent-gold);
}

@media (max-width: 768px) {
  .menu-toggle {
    display: block;
  }

  nav ul {
    position: fixed;
    top: 70px;
    right: -100%;
    width: 70%;
    height: calc(100vh - 70px);
    background: rgba(10, 10, 21, 0.98);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    transition: right 0.3s;
    border-left: 1px solid rgba(212, 175, 55, 0.2);
  }

  nav ul.active {
    right: 0;
  }

  nav a {
    font-size: 1.2rem;
  }
}
</style>
