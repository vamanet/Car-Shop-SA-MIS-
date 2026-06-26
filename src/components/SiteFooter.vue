<script setup>
import { navLinks, categories } from '@/data/cars'

const year = new Date().getFullYear()
</script>

<template>
  <footer class="site-footer">
    <div class="footer-inner">
      <div class="col brand-col">
        <RouterLink to="/" class="brand">
          <img src="/Image/LogocarShop.png" alt="Car Shop SA logo" class="brand-logo" />
          <span>Car Shop <strong>SA</strong></span>
        </RouterLink>
        <p>Your digital showroom for pickups, supercars and everything in between.</p>
      </div>

      <div class="col">
        <h6>Explore</h6>
        <RouterLink v-for="link in navLinks" :key="link.name" :to="link.to">
          {{ link.name }}
        </RouterLink>
      </div>

      <div class="col">
        <h6>Categories</h6>
        <RouterLink v-for="c in categories" :key="c" to="/category">{{ c }}</RouterLink>
      </div>

      <div class="col">
        <h6>Get in touch</h6>
        <a href="#">support@carshop-sa.com</a>
        <a href="#">+855 12 345 678</a>
        <a href="#">Phnom Penh, Cambodia</a>
      </div>
    </div>

    <div class="footer-bottom">
      <span>© {{ year }} Car Shop SA. All rights reserved.</span>
      <span>Built with Vue 3 + Vite</span>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background: var(--ink);
  color: rgba(255, 255, 255, 0.7);
  margin-top: 4rem;
}

.footer-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3.5rem 1.25rem 2rem;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
  gap: 2rem;
}

.brand {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  color: #fff;
  font-family: var(--font-display);
  font-size: 1.1rem;
}

.brand strong {
  color: var(--brand);
}

.brand-logo {
  height: 34px;
}

.brand-col p {
  margin-top: 1rem;
  font-size: 0.92rem;
  line-height: 1.6;
  max-width: 22rem;
}

.col h6 {
  color: #fff;
  font-family: var(--font-display);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  font-size: 0.78rem;
  margin-bottom: 1rem;
}

.col a {
  display: block;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.92rem;
  padding: 0.3rem 0;
  transition: color var(--ease);
}

.col a:hover {
  color: var(--accent);
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.25rem;
  display: flex;
  justify-content: space-between;
  font-size: 0.82rem;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (max-width: 720px) {
  .footer-inner {
    grid-template-columns: 1fr 1fr;
  }
}
</style>
