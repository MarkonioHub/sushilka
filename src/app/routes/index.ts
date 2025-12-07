import { createWebHistory, createRouter, type RouterScrollBehavior } from 'vue-router'

const HomePage = () => import('@/pages/HomePage.vue')
const StocksPage = () => import('@/pages/StocksPage.vue')
const NotFoundPage = () => import('@/pages/NotFoundPage.vue')
const BasketPage = () => import("@/pages/BasketPage.vue")
const ContentPage = () => import("@/pages/ContentPage.vue")
const ReviewsPage = () => import("@/pages/ReviewsPage.vue")
const VacanciesPage = () => import("@/pages/VacanciesPage.vue")
const VacancyPage = () => import("@/pages/VacancyPage.vue")

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
  { path: '/reviews', component: ReviewsPage },
  { path: '/vacancies', component: VacanciesPage },
  { path: '/vacancies/:vacancySlug', component: VacancyPage },
  { path: '/content/:contentSlug', component: ContentPage },
  { path: '/basket', component: BasketPage },
  { path: '/:pathMatch(.*)*', component: NotFoundPage },
]

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition) {
    return savedPosition
  } else if (to.hash) {
    return { selector: to.hash, behavior: 'smooth' }
  } else {
    return { top: 0, behavior: 'smooth' }
  }
};

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
  scrollBehavior
})

export default router
