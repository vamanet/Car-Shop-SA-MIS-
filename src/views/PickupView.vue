<script setup>
import CarCard from '@/components/CarCard.vue'

const pickups = [
  {
    id: 'wildtrak',
    title: 'Ranger Wildtrak',
    image: '/Image/Wildtrak.png',
    badge: 'Bestseller',
    text: 'The adventure-ready pickup with rugged styling and modern tech.',
  },
  {
    id: 'ranger-raptor',
    title: 'Ranger Raptor 3.0L',
    image: '/Image/RangerRaptor30L.jpg',
    badge: 'Performance',
    text: 'The ultimate performance off-road pickup, powered by a 3.0L V6.',
  },
]
</script>

<template>
  <section class="section">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">Work &amp; play</span>
        <h2>Pickup Trucks</h2>
        <p>Tough, capable and ready for any terrain.</p>
      </div>
      <div class="row g-4 justify-content-center">
        <div v-for="car in pickups" :key="car.id" class="col-auto">
          <CarCard :car="car" />
        </div>
      </div>
    </div>
  </section>
</template>
