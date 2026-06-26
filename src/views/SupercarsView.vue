<script setup>
import { RouterLink } from 'vue-router'
import { superCars } from '@/data/cars'
</script>

<template>
  <!-- Hero -->
  <section class="sc-hero">
    <div class="container">
      <span class="eyebrow">The dream garage</span>
      <h1>Supercars</h1>
      <p>Hand-picked hypercars and grand tourers — engineered to thrill.</p>
    </div>
  </section>

  <!-- Showcase -->
  <section class="section">
    <div class="container">
      <div class="sc-grid">
        <article v-for="car in superCars" :key="car.id" class="sc-card">
          <div class="sc-media">
            <span class="sc-badge">{{ car.badge }}</span>
            <img :src="car.image" :alt="car.title" loading="lazy" />
          </div>
          <div class="sc-body">
            <h3>{{ car.title }}</h3>
            <p>{{ car.text }}</p>

            <ul class="sc-specs">
              <li>
                <span class="val">{{ car.specs.power }}</span>
                <span class="key">Power</span>
              </li>
              <li>
                <span class="val">{{ car.specs.topSpeed }}</span>
                <span class="key">Top speed</span>
              </li>
              <li>
                <span class="val">{{ car.specs.zeroTo100 }}</span>
                <span class="key">0–100</span>
              </li>
            </ul>

            <RouterLink to="/gtr" class="btn-brand sc-btn">Check availability</RouterLink>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sc-hero {
  background:
    radial-gradient(900px 400px at 70% -20%, rgba(0, 224, 198, 0.18), transparent 60%),
    linear-gradient(180deg, var(--ink) 0%, var(--ink-soft) 100%);
  color: #fff;
  padding: 4rem 0 3rem;
  text-align: center;
}

.sc-hero .eyebrow {
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.sc-hero h1 {
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 3.4rem);
  margin: 0.6rem 0;
}

.sc-hero p {
  color: rgba(255, 255, 255, 0.72);
  margin: 0;
}

.sc-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.75rem;
}

.sc-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--ease),
    box-shadow var(--ease),
    border-color var(--ease);
}

.sc-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.sc-media {
  position: relative;
  aspect-ratio: 16 / 10;
  display: grid;
  place-items: center;
  background: linear-gradient(135deg, #0e1018, #20243a);
  overflow: hidden;
}

.sc-media img {
  max-width: 82%;
  max-height: 78%;
  object-fit: contain;
  filter: drop-shadow(0 18px 24px rgba(0, 0, 0, 0.45));
  transition: transform 0.5s var(--ease);
}

.sc-card:hover .sc-media img {
  transform: scale(1.07) translateY(-2px);
}

.sc-badge {
  position: absolute;
  top: 0.9rem;
  left: 0.9rem;
  background: var(--accent);
  color: var(--ink);
  font-family: var(--font-display);
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
}

.sc-body {
  display: flex;
  flex-direction: column;
  padding: 1.4rem;
  flex: 1;
}

.sc-body h3 {
  margin: 0 0 0.4rem;
  font-size: 1.25rem;
}

.sc-body > p {
  color: var(--text-soft);
  font-size: 0.92rem;
  line-height: 1.55;
  margin: 0 0 1.2rem;
}

.sc-specs {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.5rem;
  margin: 0 0 1.4rem;
  padding: 1rem 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  text-align: center;
}

.sc-specs .val {
  display: block;
  font-family: var(--font-display);
  font-weight: 700;
  font-size: 1.05rem;
  color: var(--ink);
}

.sc-specs .key {
  font-size: 0.72rem;
  color: var(--text-soft);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.sc-btn {
  margin-top: auto;
  text-align: center;
}
</style>
