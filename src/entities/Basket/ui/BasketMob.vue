<script setup lang="ts">
import { computed } from "vue"
import { storeToRefs } from "pinia"

import { useBasketStore } from "@/entities/Basket/model/store.ts"
import { usePriceFull } from "@/shared/composables/useBasketPrice.ts"
import { formatPrice } from "@/shared/helpers/formatPrice.ts"

import ButtonBase from "@/shared/ui/ButtonBase.vue"
import {pluralize} from "@/shared/helpers/pluralize.ts"

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
  <ButtonBase to="/basket" :className="'button-orange button-orange_big basket-mob'" v-if="productsBasket.length">
    В корзине {{ quantity }} {{pluralizeWord}} на {{ formatPrice(priceFull) }}
  </ButtonBase>
</template>

<style scoped lang="sass">
.basket-mob
  display: none
  @include media(md)
    display: flex
    position: fixed
    bottom: 20px
    left: 10px
    right: 10px
    width: auto
</style>
