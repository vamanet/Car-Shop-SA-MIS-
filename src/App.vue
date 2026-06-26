<script setup>
import NavBar from '@/components/NavBar.vue'
import SiteFooter from '@/components/SiteFooter.vue'
</script>

<template>
  <NavBar />
  <main>
    <RouterView v-slot="{ Component }">
      <Transition name="fade" mode="out-in">
        <component :is="Component" />
      </Transition>
    </RouterView>
  </main>
  <SiteFooter />
</template>

<style>
.fade-enter-active {
  transition:
    opacity 0.4s cubic-bezier(0.22, 1, 0.36, 1),
    transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
}

.fade-leave-active {
  transition:
    opacity 0.25s ease,
    transform 0.25s ease;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(14px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
