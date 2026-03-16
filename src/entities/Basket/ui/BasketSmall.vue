<script setup lang="ts">
import { formatPrice } from '@/shared/lib'
import { computed } from 'vue'
import { usePriceFull } from '@/entities/Basket'
import { IconSvg } from '@/shared/ui'

const { priceFull } = usePriceFull()

const categoriesLineBasketClassName = computed(() => {
  return priceFull.value !== 0 ? 'basket-small active' : 'basket-small'
})
</script>

<template>
  <RouterLink to="/basket" :class="categoriesLineBasketClassName">
    <IconSvg :name="'basket-small'" class="basket-small__icon" :width="'24px'" :height="'24px'" />
    <div class="basket-small__price" v-if="priceFull">
      {{ formatPrice(priceFull) }}
    </div>
  </RouterLink>
</template>

<style scoped lang="sass">
.basket-small
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
    .basket-small__icon
      fill: $white

.basket-small__icon
  fill: #b2bbbd
</style>
