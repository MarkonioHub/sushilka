<script setup lang="ts">
import ProductCard from '@/entities/Product/ui/ProductCard.vue'
import { useProductsStore } from '@/entities/Product/model/store.ts'
import { useCategoriesStore } from '@/entities/Categories/model/store.ts'
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const store = useProductsStore()
if (!store.products.length) store.getProducts()

const storeCategory = useCategoriesStore()
if (!storeCategory.categories.length) storeCategory.getCategories()

const route = useRoute()

const currentProducts = computed(() => {
  const categorySlug = route.params.id
  if (categorySlug) {
    const currentCategory = storeCategory.categories.find(
      (category: object) => category?.slug === categorySlug,
    )
    if (currentCategory)
      return store.products.filter(
        (product: object) => currentCategory?.products.indexOf(product?.id) > -1,
      )
  } else {
    return store.products.slice(0, 12)
  }
  return []
})
</script>

<template>
  <section class="products-tile">
    <div class="cont">
      <div class="products-tile__list">
        <ProductCard :product="product" v-for="(product, index) in currentProducts" :key="index" />
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
