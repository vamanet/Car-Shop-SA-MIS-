<script setup>
import HeroCarousel from '@/components/HeroCarousel.vue'
import CarCard from '@/components/CarCard.vue'
import { fordCars } from '@/data/cars'

const banners = ['/Image/All-model-banner-1024x217-2.jpg', '/Image/Mobile-App-Website.png']
</script>

<template>
  <!-- Brand hero -->
  <section class="ford-hero">
    <img src="/Image/Ford.jpg" class="ford-hero-img" alt="Ford" />
    <div class="ford-hero-overlay">
      <div class="container">
        <span class="eyebrow">Built Ford tough</span>
        <h1>Ford in Cambodia</h1>
        <p>Discover the full Ford range — from city SUVs to off-road Raptors.</p>
      </div>
    </div>
  </section>

  <div class="container my-5">
    <HeroCarousel :images="banners" id="fordCarousel" class="ford-banner" />
  </div>

  <section class="section pt-0">
    <div class="container">
      <div class="section-head">
        <span class="eyebrow">The lineup</span>
        <h2>Explore the Ford range</h2>
        <p>Every model, ready for a closer look.</p>
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
.ford-hero {
  position: relative;
  height: clamp(260px, 40vw, 440px);
  overflow: hidden;
}

.ford-hero-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.ford-hero-overlay {
  position: absolute;
  inset: 0;
  display: flex;
  align-items: flex-end;
  padding-bottom: 2.5rem;
  background: linear-gradient(180deg, rgba(14, 16, 24, 0.1), rgba(14, 16, 24, 0.85));
  color: #fff;
}

.ford-hero-overlay .eyebrow {
  font-family: var(--font-display);
  letter-spacing: 0.18em;
  text-transform: uppercase;
  font-size: 0.8rem;
  color: var(--accent);
}

.ford-hero-overlay h1 {
  color: #fff;
  font-size: clamp(2rem, 5vw, 3.2rem);
  margin: 0.5rem 0;
}

.ford-hero-overlay p {
  color: rgba(255, 255, 255, 0.8);
  max-width: 32rem;
  margin: 0;
}

.ford-banner :deep(.carousel) {
  border-radius: var(--radius);
  overflow: hidden;
  box-shadow: var(--shadow);
}

.section.pt-0 {
  padding-top: 0;
}
</style>
