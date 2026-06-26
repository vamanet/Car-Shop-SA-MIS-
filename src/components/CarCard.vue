<script setup>
defineProps({
  car: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="car-card">
    <div class="media">
      <img :src="car.image" :alt="car.title" loading="lazy" />
      <span v-if="car.badge" class="badge-tag">{{ car.badge }}</span>
    </div>
    <div class="body">
      <h5 class="title">{{ car.title }}</h5>
      <p class="text">{{ car.text }}</p>
      <a href="#" class="more">
        Discover
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" stroke-width="2"
            stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </a>
    </div>
  </article>
</template>

<style scoped>
.car-card {
  display: flex;
  flex-direction: column;
  width: 18rem;
  height: 100%;
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

.car-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.media {
  position: relative;
  aspect-ratio: 4 / 3;
  background: linear-gradient(135deg, #f7f8fd, #eef0f9);
  overflow: hidden;
}

.media img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease);
}

.car-card:hover .media img {
  transform: scale(1.06);
}

.badge-tag {
  position: absolute;
  top: 0.8rem;
  left: 0.8rem;
  background: var(--ink);
  color: #fff;
  font-family: var(--font-display);
  font-size: 0.7rem;
  letter-spacing: 0.05em;
  padding: 0.3rem 0.7rem;
  border-radius: 999px;
}

.body {
  display: flex;
  flex-direction: column;
  padding: 1.25rem;
  flex: 1;
}

.title {
  margin: 0 0 0.5rem;
  font-size: 1.15rem;
}

.text {
  color: var(--text-soft);
  font-size: 0.92rem;
  line-height: 1.5;
  margin: 0 0 1.1rem;
}

.more {
  margin-top: auto;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  color: var(--brand);
  font-weight: 700;
  font-size: 0.92rem;
}

.more svg {
  transition: transform var(--ease);
}

.more:hover svg {
  transform: translateX(4px);
}
</style>
