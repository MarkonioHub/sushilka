import {
  createWebHistory,
  createRouter,
  type RouterScrollBehavior,
} from 'vue-router'
import { useAccessStore } from '@/shared/store'

import { HomePage } from '../../pages/Home'
import { StocksPage } from '../../pages/Stocks'
import { NotFoundPage } from '../../pages/NotFound'
import { BasketPage } from '../../pages/Basket'
import { ContentPage } from '../../pages/Content'
import { ReviewsPage } from '../../pages/Reviews'
import { VacanciesPage } from '../../pages/Vacancies'
import { VacancyPage } from '../../pages/Vacancy'
import { AboutPage } from '../../pages/About'
import { CheckoutPage } from '../../pages/Checkout'

const routes = [
  {
    path: '/',
    component: HomePage,
    meta: {
      title: 'Сеть удобных кафе Сушилка. Доставка еды, пиццы, роллов в Кирове.'
    }
  },
  {
    path: '/catalog',
    component: HomePage,
    meta: {
      title: 'Каталог'
    }
  },
  {
    path: '/catalog/:categorySlug',
    component: HomePage,
    children: [
      { path: ':productSlug', component: HomePage },
    ]
  },
  {
    path: '/stocks',
    component: StocksPage,
    meta: {
      title: 'Акции'
    }
  },
  {
    path: '/reviews',
    component: ReviewsPage,
    meta: {
      title: 'Отзывы'
    }
  },
  {
    path: '/vacancies',
    component: VacanciesPage,
    meta: {
      title: 'Вакансии'
    }
  },
  {
    path: '/vacancies/:vacancySlug',
    component: VacancyPage
  },
  {
    path: '/about',
    component: AboutPage,
    meta: {
      title: 'О нас'
    }
  },
  {
    path: '/content/:contentSlug',
    component: ContentPage
  },
  {
    path: '/basket',
    component: BasketPage,
    meta: {
      title: 'Корзина'
    }
  },
  {
    path: '/checkout',
    component: CheckoutPage,
    meta: {
      title: 'Оформление заказа'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundPage,
    meta: {
      title: 'Страница не найдена'
    }
  },
]

const scrollBehavior: RouterScrollBehavior = (to, from, savedPosition) => {
  if (savedPosition || to.params.productSlug || from.params.productSlug || to.params.categorySlug) {
    return savedPosition ? savedPosition : false
  } else if (to.hash) {
    return { selector: to.hash, behavior: 'smooth' }
  } else {
    return { top: 0, behavior: 'smooth' }
  }
}

const router = createRouter({
  history: createWebHistory(),
  routes,
  linkActiveClass: 'active',
  linkExactActiveClass: 'active-exact',
  scrollBehavior
})

router.beforeEach((to, from, next) => {
  const title = to.matched.slice().reverse().find(r => r.meta.title)?.meta?.title
  if (title) {
    document.title = title.toString() || ''
  } else {
    document.title = 'Сеть удобных кафе Сушилка. Доставка еды, пиццы, роллов в Кирове.'
  }
  next()
})

router.beforeEach((to, from, next) => {
  const { checkoutPageAccess } = useAccessStore()
  if (to.path === '/checkout' && checkoutPageAccess || to.path !== '/checkout') {
    next()
  } else {
    next('/')
  }
})

export default router
