<script setup>
import { RouterLink } from 'vue-router'
import HeroCarousel from '@/components/HeroCarousel.vue'
import CarCard from '@/components/CarCard.vue'
import { fordCars } from '@/data/cars'

const banners = ['/Image/Car.png', '/Image/Banner2.png', '/Image/All-model-banner-1024x217-2.jpg']

const stats = [
  { value: '250+', label: 'Cars in stock' },
  { value: '40+', label: 'Brands' },
  { value: '12k', label: 'Happy drivers' },
  { value: '24/7', label: 'Support' },
]
</script>

<template>
  <!-- Hero -->
  <section class="hero">
    <div class="hero-grid">
      <div class="hero-copy">
        <span class="eyebrow">Drive something legendary</span>
        <h1>Find, rent or own your<br /><span class="hl">dream machine.</span></h1>
        <p>
          From rugged Ford pickups to track-ready supercars — Car Shop SA brings the
          whole showroom to your screen.
        </p>
        <div class="hero-actions">
          <RouterLink to="/gtr" class="btn-brand">Browse supercars</RouterLink>
          <RouterLink to="/ford" class="btn-ghost">Explore Ford</RouterLink>
        </div>
      </div>
      <div class="hero-media">
        <HeroCarousel :images="banners" id="homeCarousel" />
      </div>
    </div>

    <div class="stats">
      <div v-for="s in stats" :key="s.label" class="stat">
        <span class="stat-value">{{ s.value }}</span>
        <span class="stat-label">{{ s.label }}</span>
      </div>
    </div>
  </section>

  <!-- Featured -->
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Featured lineup</span>
        <h2>Fresh on the showroom floor</h2>
        <p>Hand-picked models ready to test drive today.</p>
      </div>
      <div class="row g-4 justify-content-center">
        <div v-for="car in fordCars" :key="car.id" class="col-auto">
          <CarCard :car="car" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  background:
    radial-gradient(1200px 500px at 80% -10%, rgba(106, 76, 255, 0.18), transparent 60%),
    linear-gradient(180deg, var(--ink) 0%, var(--ink-soft) 100%);
  color: #fff;
  padding: 4rem 1.25rem 0;
}

.hero-grid {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3rem;
  align-items: center;
}

.hero-copy .eyebrow {
  font-family: var(--font-display);
  font-size: 0.8rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--accent);
}

.hero-copy h1 {
  color: #fff;
  font-size: clamp(2.2rem, 5vw, 3.6rem);
  line-height: 1.05;
  margin: 1rem 0;
}

.hero-copy .hl {
  background: linear-gradient(120deg, var(--brand), var(--accent));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.hero-copy p {
  color: rgba(255, 255, 255, 0.72);
  font-size: 1.05rem;
  max-width: 30rem;
  line-height: 1.6;
}

.hero-actions {
  display: flex;
  gap: 0.9rem;
  margin-top: 1.8rem;
  flex-wrap: wrap;
}

.hero-media :deep(.carousel) {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
}

.hero-media :deep(.carousel-item img) {
  aspect-ratio: 16 / 10;
  object-fit: cover;
}

.stats {
  max-width: 1200px;
  margin: 3.5rem auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius);
  overflow: hidden;
  transform: translateY(50%);
  box-shadow: var(--shadow);
}

.stat {
  background: var(--surface);
  padding: 1.4rem 1rem;
  text-align: center;
}

.stat-value {
  display: block;
  font-family: var(--font-display);
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--ink);
}

.stat-label {
  color: var(--text-soft);
  font-size: 0.85rem;
}

.section:first-of-type {
  padding-top: 6rem;
}

@media (max-width: 860px) {
  .hero-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .stats {
    grid-template-columns: repeat(2, 1fr);
    transform: translateY(2rem);
  }
}
</style>
