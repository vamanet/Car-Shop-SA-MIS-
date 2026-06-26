<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { navLinks, categories } from '@/data/cars'

const scrolled = ref(false)
let ticking = false

const onScroll = () => {
  // Throttle to one update per frame so scrolling stays buttery.
  if (ticking) return
  ticking = true
  requestAnimationFrame(() => {
    scrolled.value = window.scrollY > 12
    ticking = false
  })
}

onMounted(() => {
  onScroll()
  window.addEventListener('scroll', onScroll, { passive: true })
})
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>

<template>
  <header class="site-nav" :class="{ scrolled }">
    <nav class="nav-inner">
      <RouterLink to="/" class="brand">
        <img src="/Image/LogocarShop.png" alt="Car Shop SA logo" class="brand-logo" />
        <span class="brand-name">Car Shop <strong>SA</strong></span>
      </RouterLink>

      <div class="nav-links">
        <RouterLink
          v-for="link in navLinks"
          :key="link.name"
          class="nav-link"
          :to="link.to"
        >
          {{ link.name }}
        </RouterLink>

        <div class="dropdown">
          <button
            class="nav-link dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Categories
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li v-for="category in categories" :key="category">
              <RouterLink class="dropdown-item" to="/category">{{ category }}</RouterLink>
            </li>
          </ul>
        </div>
      </div>

      <RouterLink to="/gtr" class="nav-cta">Rent a car</RouterLink>
    </nav>
  </header>
</template>

<style scoped>
.site-nav {
  position: sticky;
  top: 0;
  z-index: 1030;
  background: rgba(14, 16, 24, 0.85);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
  will-change: background-color, box-shadow;
  transition:
    background-color 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    box-shadow 0.45s cubic-bezier(0.22, 1, 0.36, 1),
    border-color 0.45s ease;
}

.site-nav.scrolled {
  background: rgba(14, 16, 24, 0.96);
  border-bottom-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.35);
}

.nav-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.85rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  transition: padding 0.45s cubic-bezier(0.22, 1, 0.36, 1);
}

.site-nav.scrolled .nav-inner {
  padding-top: 0.6rem;
  padding-bottom: 0.6rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
}

.brand {
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.brand:hover {
  transform: translateY(-1px);
}

.brand-logo {
  height: 36px;
  width: auto;
  object-fit: contain;
  transition: transform 0.5s cubic-bezier(0.22, 1, 0.36, 1);
}

.brand:hover .brand-logo {
  transform: rotate(-6deg) scale(1.06);
}

.brand-name {
  font-family: var(--font-display);
  color: #fff;
  font-size: 1.15rem;
  letter-spacing: -0.02em;
}

.brand-name strong {
  color: var(--brand);
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin-left: auto;
}

.nav-link {
  position: relative;
  color: rgba(255, 255, 255, 0.72);
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.5rem 0.85rem;
  background: none;
  border: none;
  border-radius: 8px;
  transition: color 0.3s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link::after {
  content: '';
  position: absolute;
  left: 0.85rem;
  right: 0.85rem;
  bottom: 0.3rem;
  height: 2px;
  background: linear-gradient(90deg, var(--brand), var(--accent));
  border-radius: 2px;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.35s cubic-bezier(0.22, 1, 0.36, 1);
}

.nav-link:hover {
  color: #fff;
}

.nav-link:hover::after,
.nav-link.router-link-active::after {
  transform: scaleX(1);
}

.nav-link.router-link-active {
  color: #fff;
}

.dropdown-toggle::after {
  vertical-align: middle;
}

.dropdown-menu {
  border: none;
  border-radius: 12px;
  box-shadow: var(--shadow);
  padding: 0.4rem;
  margin-top: 0.6rem;
  /* Animate in instead of a hard pop */
  display: block;
  opacity: 0;
  visibility: hidden;
  transform: translateY(-8px);
  transition:
    opacity 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.28s cubic-bezier(0.22, 1, 0.36, 1),
    visibility 0.28s;
}

.dropdown-menu.show {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}

.dropdown-item {
  border-radius: 8px;
  font-weight: 500;
  padding: 0.5rem 0.85rem;
  transition:
    background-color 0.2s ease,
    color 0.2s ease,
    padding-left 0.2s ease;
}

.dropdown-item:hover {
  padding-left: 1.1rem;
}

.dropdown-item:active {
  background: var(--brand);
}

.nav-cta {
  background: linear-gradient(135deg, var(--brand), var(--brand-dark));
  color: #fff;
  font-weight: 700;
  font-size: 0.9rem;
  padding: 0.55rem 1.25rem;
  border-radius: 999px;
  box-shadow: 0 8px 20px var(--brand-glow);
  transition: transform var(--ease), filter var(--ease);
  white-space: nowrap;
}

.nav-cta:hover {
  color: #fff;
  transform: translateY(-2px);
  filter: brightness(1.08);
}

@media (max-width: 720px) {
  .nav-inner {
    flex-wrap: wrap;
    gap: 0.5rem 1rem;
  }
  .brand-name {
    display: none;
  }
  .nav-links {
    order: 3;
    width: 100%;
    margin-left: 0;
    justify-content: center;
    flex-wrap: wrap;
  }
}
</style>
