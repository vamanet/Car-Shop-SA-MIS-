<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Carousel from 'bootstrap/js/dist/carousel'

const props = defineProps({
  // Array of image URLs to show as slides
  images: {
    type: Array,
    required: true,
  },
  id: {
    type: String,
    default: 'heroCarousel',
  },
  interval: {
    type: Number,
    default: 4000,
  },
})

const root = ref(null)
let instance = null

onMounted(() => {
  // Initialise explicitly so it also works after client-side route changes,
  // not only on a full page refresh.
  instance = new Carousel(root.value, {
    interval: props.interval,
    ride: 'carousel',
    pause: 'hover',
  })
})

onBeforeUnmount(() => {
  instance?.dispose()
  instance = null
})
</script>

<template>
  <div :id="id" ref="root" class="carousel slide">
    <div class="carousel-inner">
      <div
        v-for="(image, index) in images"
        :key="image"
        class="carousel-item"
        :class="{ active: index === 0 }"
      >
        <img :src="image" class="d-block w-100" alt="Banner slide" />
      </div>
    </div>
    <button
      class="carousel-control-prev"
      type="button"
      :data-bs-target="'#' + id"
      data-bs-slide="prev"
    >
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button
      class="carousel-control-next"
      type="button"
      :data-bs-target="'#' + id"
      data-bs-slide="next"
    >
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>
