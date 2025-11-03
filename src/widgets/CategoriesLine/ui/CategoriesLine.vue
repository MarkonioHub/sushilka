<script setup lang="ts">
import {useTemplateRef, onMounted, onUnmounted, computed} from 'vue'
import { useCategoriesStore } from '@/entities/Categories/model/store'
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { useRoute } from "vue-router"
import { formatPrice } from "@/shared/helpers/formatPrice.ts"
import { usePriceFull } from "@/shared/composables/useBasketPrice.ts"

const store = useCategoriesStore()

const categoriesLine = useTemplateRef('categories-line')
const route = useRoute()

const { priceFull } = usePriceFull()

onMounted(() => {
  window.addEventListener('scroll', scrollHandler, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})

function scrollHandler() {
  if (categoriesLine?.value?.getBoundingClientRect().top === 0) {
    categoriesLine?.value?.classList.add('white')
  } else {
    categoriesLine?.value?.classList.remove('white')
  }
}

const categoriesLineBasketClassName = computed(() => {
  return priceFull.value !== 0 ? "categories-line__basket active" : "categories-line__basket"
})

function getButtonClassName(index: Number) {
  return index === 0 && !route.params.categorySlug ? 'button-underline active' : 'button-underline'
}

</script>

<template>
  <section class="categories-line" ref="categories-line">
    <div class="cont">
      <div class="categories-line__area">
        <div class="categories-line__list">
          <ButtonBase
            v-for="(category, index) in store.categories"
            :key="index"
            :to="`/catalog/${category.slug}`"
            :className=getButtonClassName(index)
          >
            <span>{{ category.name }}</span>
          </ButtonBase>
        </div>
        <RouterLink to="/basket" :class="categoriesLineBasketClassName">
          <svg
            class="categories-line__basket-icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 160 160"
            xml:space="preserve"
          >
            <path
              id="basket"
              d="M140,51H99V40c0-10.477-8.523-19-19-19c-10.477,0-19,8.523-19,19v11H20c-1.232,0-2.395,0.567-3.153,1.539
              c-0.758,0.971-1.026,2.237-0.728,3.432l20,80C36.564,137.751,38.165,139,40,139h80c1.836,0,3.436-1.249,3.881-3.029l20-80
              c0.299-1.195,0.029-2.461-0.729-3.432C142.395,51.567,141.232,51,140,51z M69,40c0-6.065,4.935-11,11-11c6.064,0,11,4.935,11,11v11
              H69V40z M116.877,131H43.123l-18-72h109.754L116.877,131z M58.96,109.434c0.312,2.188-1.208,4.215-3.394,4.526
              c-0.192,0.026-0.383,0.04-0.571,0.04c-1.958,0-3.67-1.439-3.955-3.434l-5-35c-0.312-2.187,1.208-4.213,3.394-4.526
              c2.191-0.313,4.213,1.208,4.526,3.394L58.96,109.434z M101.04,109.434l5-35c0.313-2.187,2.331-3.707,4.526-3.394
              c2.186,0.313,3.705,2.339,3.394,4.526l-5,35c-0.285,1.994-1.997,3.434-3.955,3.434c-0.188,0-0.378-0.014-0.571-0.04
              C102.248,113.646,100.729,111.621,101.04,109.434z M84,75v35c0,2.209-1.791,4-4,4s-4-1.791-4-4V75c0-2.209,1.791-4,4-4
              S84,72.791,84,75z"
            />
          </svg>
          <div class="categories-line__basket-price" v-if="priceFull">
            {{ formatPrice(priceFull) }}
          </div>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.categories-line
  margin-bottom: 20px
  position: sticky
  top: 0
  z-index: 10
  padding: 10px 0
  @include media(xs)
    margin-bottom: 10px
  &.white
    background-color: #ffffff

.categories-line__area
  display: flex
  justify-content: space-between
  @include media(md)
    overflow-x: auto
    margin: 0 -20px

.categories-line__list
  display: flex
  gap: 20px
  @include media(md)
    padding: 0 20px 10px

.categories-line__link
  padding: 5px

.categories-line__basket
  margin-left: 20px
  display: flex
  align-items: center
  gap: 5px
  flex-shrink: 0
  border: 1px solid #b2bbbd
  border-radius: 50%
  padding: 5px
  text-decoration: none
  pointer-events: none
  @include media(md)
    display: none
  &.active
    pointer-events: all
    border-radius: $border-radius
    background-color: $orange
    color: $white
    border: 1px solid $orange
    .categories-line__basket-icon
      fill: $white

.categories-line__basket-icon
  width: 24px
  height: 24px
  fill: #b2bbbd

//.categories-line__basket-price
</style>
