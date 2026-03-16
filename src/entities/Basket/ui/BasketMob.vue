<script setup lang="ts">
import { computed } from "vue"
import { storeToRefs } from "pinia"

import { useBasketStore } from "@/entities/Basket"
import { usePriceFull } from "@/entities/Basket"
import { formatPrice } from "@/shared/lib"

import { ButtonBase } from '@/shared/ui'
import { pluralize } from "@/shared/lib"

const basket = useBasketStore()
const { productsBasket } = storeToRefs(basket)

const quantity = computed(() => {
  return basket.productsQuantity
})

const { priceFull } = usePriceFull()

const pluralizeWord = computed( () => {
  return pluralize(quantity.value, 'товар', 'товара', 'товаров')
})

</script>

<template>
  <div class="basket-mob">
    <div class="cont">
      <ButtonBase to="/basket" :className="'button-orange button-orange_big'" v-if="productsBasket.length">
        В корзине {{ quantity }} {{pluralizeWord}} на {{ formatPrice(priceFull) }}
      </ButtonBase>
    </div>
  </div>
</template>

<style scoped lang="sass">
.basket-mob
  display: none
  @include media(md)
    display: flex
    position: fixed
    z-index: 10
    bottom: 20px
    left: 0
    right: 0
</style>
