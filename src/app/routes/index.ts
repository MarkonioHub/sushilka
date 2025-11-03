import { createWebHistory, createRouter } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const StocksPage = () => import('@/pages/StocksPage.vue')
const NotFoundPage = () => import('@/pages/NotFoundPage.vue')
const BasketPage = () => import("@/pages/BasketPage.vue")
const ContentPage = () => import("@/pages/ContentPage.vue")

const routes = [
  { path: '/', component: HomePage },
  {
    path: '/catalog/:categorySlug',
    component: HomePage,
    children: [
      { path: ':productSlug', component: HomePage },
    ]
  },
  { path: '/stocks', component: StocksPage },
  { path: '/content/:contentSlug', component: ContentPage },
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
