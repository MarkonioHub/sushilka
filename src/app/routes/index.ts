import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import OffersPage from '@/pages/OffersPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/catalog/:id', component: HomePage },
  { path: '/offers', component: OffersPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
