import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import OffersPage from '@/pages/OffersPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/catalog/:categorySlug',
    component: HomePage,
    children: [
      { path: ':productSlug', component: HomePage },
    ]
  },
  { path: '/offers', component: OffersPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
})

export default router
