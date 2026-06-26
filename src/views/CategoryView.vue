<script setup>
import { categories } from '@/data/cars'

const icons = ['🏎️', '🚙', '🛻']
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Browse by type</span>
        <h2>Categories</h2>
        <p>Jump straight to the kind of ride you're after.</p>
      </div>

      <div class="cat-grid">
        <a v-for="(category, i) in categories" :key="category" href="#" class="cat-card">
          <span class="cat-icon">{{ icons[i % icons.length] }}</span>
          <span class="cat-name">{{ category }}</span>
          <span class="cat-go">Explore →</span>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.cat-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.cat-card {
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  padding: 1.8rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  box-shadow: var(--shadow-sm);
  color: var(--text);
  transition:
    transform var(--ease),
    box-shadow var(--ease),
    border-color var(--ease);
}

.cat-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.cat-icon {
  font-size: 2rem;
}

.cat-name {
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.15rem;
}

.cat-go {
  color: var(--brand);
  font-weight: 600;
  font-size: 0.9rem;
}
</style>
