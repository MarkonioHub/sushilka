import { createMemoryHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import OffersPage from '@/pages/OffersPage.vue'

const routes = [
  { path: '/', component: HomePage },
  { path: '/offers', component: OffersPage },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

export default router
