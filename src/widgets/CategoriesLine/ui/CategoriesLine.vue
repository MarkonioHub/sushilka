<script setup lang="ts">
import {useTemplateRef, onMounted, onUnmounted} from 'vue'
import { useCategoriesStore } from '@/entities/Categories/model/store'
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { useRoute } from "vue-router"
import BasketSmall from '@/entities/Basket/ui/BasketSmall.vue'

const store = useCategoriesStore()

const categoriesLine = useTemplateRef('categories-line')
const route = useRoute()

onMounted(() => {
  window.addEventListener('scroll', scrollHandler, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', scrollHandler)
})

function scrollHandler () {
  if (categoriesLine?.value?.getBoundingClientRect().top === 0) {
    categoriesLine?.value?.classList.add('white')
  } else {
    categoriesLine?.value?.classList.remove('white')
  }
}

function scrollToTop () {
  if (categoriesLine?.value) categoriesLine.value.style.position = 'static'
  window.scrollTo({
    top: (categoriesLine?.value?.getBoundingClientRect().top || 0) + window.scrollY,
    behavior: 'smooth'
  })
  if (categoriesLine?.value) categoriesLine.value.style.position = 'sticky'
}

function getButtonClassName(index: number) {
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
            @click="scrollToTop"
          >
            <span>{{ category.name }}</span>
          </ButtonBase>
        </div>
        <BasketSmall />
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

</style>
