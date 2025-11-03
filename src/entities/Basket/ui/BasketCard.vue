<script setup lang="ts">
import { computed } from "vue"

import type { ProductBasket } from "@/entities/Basket/model/types.ts"

import { useProductsStore } from "@/entities/Product/model/store.ts"
import { usePriceByParams } from "@/shared/composables/usePriceByParams.ts"
import { formatPrice } from "@/shared/helpers/formatPrice.ts"
import { useBasketStore } from "@/entities/Basket/model/store.ts"
import { storeToRefs } from "pinia"

import ProductCounter from "@/features/ProductCounter/ui/ProductCounter.vue"
import IconSvg from "@/shared/ui/IconSvg.vue"

const props = defineProps<{
  productBasket: ProductBasket,
}>()

const basket = useBasketStore()
const { productsBasket } = storeToRefs(basket)

const productsStore = useProductsStore()

const selectedParameter = computed(() => {
  return props.productBasket.selectedParameter
})

const product = computed(() => {
  return productsStore.getProductById(props.productBasket.id)
})

const productBasket = computed(() => {
  return productsBasket.value.find((product) => product.id === props.productBasket.id && product.selectedParameter === selectedParameter.value)
})

const productCount = computed( {
  get() {
    return productBasket.value?.quantity || 0
  },
  set(newValue) {
    if (newValue > 0) {
      basket.addProduct(product.value?.id || '', selectedParameter.value, newValue, true)
    } else {
      basket.removeProduct(product.value?.id || '', selectedParameter.value)
    }
  }
})

const price = computed(() => {
  return usePriceByParams(product.value, selectedParameter.value || '') * productCount.value
})

const cardName = computed(() => {
  if (selectedParameter.value) {
    return product.value?.name + ` - ${selectedParameter.value}`
  } else {
    return product.value?.name
  }
})

function removeProduct () {
  basket.removeProduct(product.value?.id || '', selectedParameter.value)
}

</script>

<template>
  <div class="basket-card">
    <img :src="product?.image" alt="" class="basket-card__image">
    <div class="basket-card__info">
      <div class="basket-card__name">{{ cardName }}</div>
      <div class="basket-card__description" v-html="product?.description"></div>
    </div>
    <ProductCounter
      class="basket-card__counter"
      v-model="productCount"
      :name="`basket-card-counter-${props.productBasket.id}`"
      :min-value="0"
    />
    <div class="basket-card__price">
      {{ formatPrice(price) }}
    </div>
    <IconSvg :name="'delete'" class="basket-card__delete" @click="removeProduct" />
  </div>
</template>

<style lang="sass">
.basket-card
  display: flex
  align-items: center
  @include media(sm)
    flex-wrap: wrap
  &:not(:last-child)
    border-bottom: 1px solid $color-border
    padding-bottom: 20px
    @include media(sm)
      padding-bottom: 0

.basket-card__image
  margin-right: 20px
  border-radius: 10px
  flex-shrink: 0
  width: 300px
  object-fit: cover
  @include media(lg)
    width: 200px
  @include media(xs)
    width: 65px
    height: 65px
    object-fit: cover
    margin-right: 10px
    border-radius: 50%
    align-self: flex-start

.basket-card__info
  flex-grow: 1
  margin-right: 20px
  @include media(sm)
    margin-right: 0
    width: calc(100% - 220px)
  @include media(xs)
    width: calc(100% - 75px)

.basket-card__name
  margin-bottom: 10px
  font-size: 22px
  line-height: 1.1
  font-weight: 700
  @include media(lg)
    font-size: 18px
  @include media(xs)
    margin-bottom: 6px

.basket-card__description
  font-size: 18px
  line-height: 1.1
  @include media(lg)
    font-size: 16px
  @include media(xs)
    margin-bottom: 5px
    font-size: 14px

.basket-card__counter
  margin-right: 20px
  flex-shrink: 0

.basket-card__price
  font-size: 18px
  font-weight: 700
  flex-shrink: 0
  @include media(sm)
    margin-left: auto

.basket-card__delete
  cursor: pointer
  transform: translateY(-2px)
  flex-shrink: 0
  padding: 12px
  width: 50px
  path
    transition-property: fill
    transition-duration: $transition-duration
  &:hover
    path
      fill: $orange

</style>
