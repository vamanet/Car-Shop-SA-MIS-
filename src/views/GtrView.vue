<script setup>
import { ref, computed } from 'vue'
import RentalCard from '@/components/RentalCard.vue'
import { rentalCars } from '@/data/cars'

const filters = ['Default', 'Price', 'Rating']
const activeFilter = ref('Default')

const sortedCars = computed(() => {
  const cars = [...rentalCars]
  if (activeFilter.value === 'Price') return cars.sort((a, b) => a.price - b.price)
  if (activeFilter.value === 'Rating') return cars.sort((a, b) => b.price - a.price)
  return cars
})
</script>

<template>
  <div class="gtr-page">
    <div class="container">
      <div class="header">
        <span class="eyebrow">Rental catalogue</span>
        <h1>GTR Rentals</h1>
        <p>Explore our performance fleet — pick your weekend escape.</p>

        <div class="filters">
          <span class="filters-label">Sort by</span>
          <button
            v-for="filter in filters"
            :key="filter"
            class="filter-btn"
            :class="{ active: activeFilter === filter }"
            @click="activeFilter = filter"
          >
            {{ filter }}
          </button>
        </div>
      </div>

      <div class="catalogue">
        <RentalCard v-for="car in sortedCars" :key="car.id" :car="car" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.gtr-page {
  padding: 3.5rem 0 4rem;
  min-height: 80vh;
}

.header {
  margin-bottom: 2rem;
}

.header .eyebrow {
  font-family: var(--font-display);
  font-size: 0.78rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--brand);
}

.gtr-page h1 {
  font-size: clamp(1.9rem, 4vw, 2.6rem);
  margin: 0.5rem 0 0.3rem;
}

.header > p {
  color: var(--text-soft);
  margin: 0;
}

.filters {
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
}

.filters-label {
  font-size: 0.82rem;
  color: var(--text-soft);
  margin-right: 0.2rem;
}

.filter-btn {
  padding: 0.5rem 1.1rem;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: 999px;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.9rem;
  color: var(--text);
  transition: all var(--ease);
}

.filter-btn:hover {
  border-color: var(--brand);
  color: var(--brand);
}

.filter-btn.active {
  background: var(--brand);
  color: #fff;
  border-color: var(--brand);
  box-shadow: 0 6px 16px var(--brand-glow);
}

.catalogue {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}
</style>
