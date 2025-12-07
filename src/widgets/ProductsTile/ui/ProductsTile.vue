<script setup lang="ts">
import ProductCard from '@/entities/Product/ui/ProductCard.vue'
import { useProductsStore } from '@/entities/Product/model/store'
import { useCategoriesStore } from '@/entities/Categories/model/store'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const store = useProductsStore()
const storeCategory = useCategoriesStore()

const route = useRoute()

const currentProducts = computed(() => {
  const categorySlug = route.params.categorySlug
  let currentCategory = undefined

  currentCategory = categorySlug
    ? storeCategory.categories.find((category) => category?.slug === categorySlug)
    : storeCategory.categories ? storeCategory.categories[0] : null

  if (currentCategory) {
    return store.products?.filter((product) => currentCategory?.products.indexOf(product?.id) > -1,)
  } else {
    return []
  }
})
</script>

<template>
  <section class="products-tile">
    <div class="cont">
      <div class="products-tile__list">
        <ProductCard
          v-for="(product, key) in currentProducts"
          :id="product.id"
          :key="key"
        />
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.products-tile
  margin-bottom: 40px

.products-tile__list
  display: grid
  gap: 30px
  grid-template-columns: repeat(4, 1fr)
  @include media(lg)
    gap: 20px
  @include media(md)
    grid-template-columns: repeat(3, 1fr)
  @include media(sm)
    grid-template-columns: repeat(2, 1fr)
  @include media(xs)
    grid-template-columns: repeat(1, 1fr)
</style>
