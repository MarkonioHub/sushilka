<script setup lang="ts">
import { computed } from "vue"

import { useBasketStore } from "@/entities/Basket/model/store.ts"
import { usePriceFull } from "@/shared/composables/useBasketPrice.ts"
import { formatPrice } from "@/shared/helpers/formatPrice.ts"

import BasketCard from "@/entities/Basket/ui/BasketCard.vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue";

const basketStore = useBasketStore()
const productsBasket = computed(() => {
  return basketStore.productsBasket
})

const { priceFull } = usePriceFull()

</script>

<template>
  <section class="basket-tile">
    <div class="cont">
      <h1 class="basket-tile__caption">Корзина</h1>
      <div class="basket-tile__tile">
        <BasketCard v-for="(product, index) in productsBasket" :productBasket="product" :key="index" />
      </div>
      <div class="basket-tile__notice">
        Друзья! Просим выбирать оплату наличными или онлайн оплату на сайте. Оплата по банковским терминалам доступна не всегда из-за блокировок мобильного интернета.
      </div>
<!--      <div class="basket-tile__line">-->
<!--        <div class="basket-tile__name">Сумма заказа:</div>-->
<!--        <div class="basket-tile__value">{{ formatPrice(priceFull) }}</div>-->
<!--      </div>-->
<!--      <div class="basket-tile__line">-->
<!--        <div class="basket-tile__name">Доставка:</div>-->
<!--        <div class="basket-tile__value"></div>-->
<!--      </div>-->
      <div class="basket-tile__line final">
        <div class="basket-tile__name">К оплате:</div>
        <div class="basket-tile__value">{{ formatPrice(priceFull) }}</div>
      </div>
      <ButtonBase :className="'button-orange button-orange_big'">
        Оформить заказ
      </ButtonBase>
    </div>
  </section>
</template>

<style scoped lang="sass">
.basket-tile
  padding: 50px 0
  @include media(lg)
    padding: 20px 0

.basket-tile__caption
  margin-bottom: 30px
  font-size: 28px
  @include media(lg)
    margin-bottom: 20px
    font-size: 22px

.basket-tile__tile
  margin-bottom: 20px
  display: flex
  flex-direction: column
  gap: 20px

.basket-tile__notice
  margin-bottom: 20px

.basket-tile__line
  margin-bottom: 20px
  display: flex
  align-items: center
  justify-content: space-between

.basket-tile__name
  font-size: 22px
  font-weight: 700
  @include media(sm)
    font-size: 18px

.basket-tile__value
  font-size: 22px
  font-weight: 700
  @include media(sm)
    font-size: 18px

</style>
