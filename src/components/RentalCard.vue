<script setup>
defineProps({
  car: {
    type: Object,
    required: true,
  },
})
</script>

<template>
  <article class="rental-card">
    <div class="rc-top">
      <h3>{{ car.name }}</h3>
      <p class="price"><span>${{ car.price }}</span> /day</p>
    </div>
    <div class="rc-media">
      <img :src="car.image" :alt="car.name" loading="lazy" />
    </div>
    <div class="info">
      <span><b>{{ car.gearbox }}</b>Gearbox</span>
      <span><b>{{ car.seats.split(' ')[0] }}</b>Seats</span>
      <span><b>{{ car.mpg.split(' ')[0] }}</b>MPG</span>
    </div>
    <button class="rent-btn">Rent now</button>
  </article>
</template>

<style scoped>
.rental-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--line);
  border-radius: var(--radius);
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
  transition:
    transform var(--ease),
    box-shadow var(--ease),
    border-color var(--ease);
}

.rental-card:hover {
  transform: translateY(-6px);
  box-shadow: var(--shadow-lg);
  border-color: transparent;
}

.rc-top {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 0.5rem;
}

.rc-top h3 {
  font-size: 1.05rem;
  margin: 0;
}

.price {
  margin: 0;
  font-size: 0.85rem;
  color: var(--text-soft);
  white-space: nowrap;
}

.price span {
  font-family: var(--font-display);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--brand);
}

.rc-media {
  height: 110px;
  margin: 0.6rem 0 1rem;
  display: grid;
  place-items: center;
}

.rc-media img {
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
  transition: transform var(--ease);
}

.rental-card:hover .rc-media img {
  transform: scale(1.06);
}

.info {
  display: flex;
  justify-content: space-between;
  text-align: center;
  border-top: 1px solid var(--line);
  padding-top: 0.9rem;
}

.info span {
  display: flex;
  flex-direction: column;
  font-size: 0.72rem;
  color: var(--text-soft);
  text-transform: uppercase;
  letter-spacing: 0.04em;
}

.info b {
  font-family: var(--font-display);
  font-size: 0.95rem;
  color: var(--text);
  text-transform: none;
}

.rent-btn {
  margin-top: 1.1rem;
  padding: 0.7rem;
  width: 100%;
  background: linear-gradient(135deg, var(--brand), var(--brand-dark));
  color: white;
  border-radius: var(--radius-sm);
  border: none;
  cursor: pointer;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 8px 18px var(--brand-glow);
  transition: transform var(--ease), filter var(--ease);
}

.rent-btn:hover {
  transform: translateY(-2px);
  filter: brightness(1.06);
}
</style>
