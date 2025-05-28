<script setup lang="ts">
  import ProductCard from "@/entities/Product/ui/ProductCard.vue"
  import { useProductsStore } from "@/entities/Product/model/store.ts"
  import { useCategoriesStore } from "@/entities/Categories/model/store.ts"

  const productsStore = useProductsStore()
  if (!productsStore.products.length) productsStore.getProducts()

  const categoriesStore = useCategoriesStore()
  if (!categoriesStore.categories.length) categoriesStore.getCategories()
</script>

<template>
  <div class="products-tile">
    <div class="cont">
      <div class="products-tile__categories">
        <RouterLink :to="`/${category.slug}`" class="products-tile__category" v-for="(category, index) in categoriesStore.categories" :key="index">
          {{ category.name }}
        </RouterLink>
        <div class="products-tile__basket">
          <div class="products-tile__basket-price"></div>
        </div>
      </div>
      <div class="products-tile__list">
        <ProductCard :product="product" v-for="(product, index) in productsStore.products" :key="index" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.products-tile
  margin-bottom: 60px

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
