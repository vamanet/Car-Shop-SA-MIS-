import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Home' } },
    {
      path: '/gtr',
      name: 'gtr',
      component: () => import('@/views/GtrView.vue'),
      meta: { title: 'GTR Rentals' },
    },
    {
      path: '/supercars',
      name: 'supercars',
      component: () => import('@/views/SupercarsView.vue'),
      meta: { title: 'Supercars' },
    },
    {
      path: '/ford',
      name: 'ford',
      component: () => import('@/views/FordView.vue'),
      meta: { title: 'Ford in Cambodia' },
    },
    {
      path: '/pickup',
      name: 'pickup',
      component: () => import('@/views/PickupView.vue'),
      meta: { title: 'Pickup' },
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/CategoryView.vue'),
      meta: { title: 'Categories' },
    },
    // Catch-all -> home
    { path: '/:pathMatch(.*)*', redirect: '/' },
  ],
  scrollBehavior() {
    return { top: 0 }
  },
})

router.afterEach((to) => {
  document.title = to.meta.title ? `${to.meta.title} | Car Shop SA` : 'Car Shop SA'
})

export default router
