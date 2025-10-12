import { createWebHistory, createRouter } from 'vue-router'

import HomePage from '@/pages/HomePage.vue'
import OffersPage from '@/pages/OffersPage.vue'
import NotFoundPage from '@/pages/NotFoundPage.vue'
import BasketPage from "@/pages/BasketPage.vue"

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
  { path: '/basket', component: BasketPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
})

export default router
