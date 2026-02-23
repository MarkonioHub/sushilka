<script setup lang="ts">
import ic_badge from '@/entities/Delivery/images/ic_badge.png'
import ic_clock from '@/entities/Delivery/images/ic_clock.png'
import ic_lorry from '@/entities/Delivery/images/ic_lorry.png'
import ic_wallet from '@/entities/Delivery/images/ic_wallet.png'

const params = [
  { icon: ic_clock, title: 'до 1 ч.', description: 'время доставки' },
  { icon: ic_wallet, title: '400 ₽', description: 'мин. сумма заказа' },
  { icon: ic_lorry, title: '149 ₽', description: 'стоим. доставки' },
  { icon: ic_badge, title: 'от 700 ₽', description: 'беспл. доставка' },
]
</script>

<template>
    <div class="delivery-params">
      <div class="delivery-params__box" v-for="(param, index) in params" :key="index">
        <img :src="param.icon" alt="" class="delivery-params__icon" />
        <div class="delivery-params__inner">
          <div class="delivery-params__title">{{ param.title }}</div>
          <div class="delivery-params__description">{{ param.description }}</div>
        </div>
      </div>
    </div>
</template>

<style scoped lang="sass">
.delivery-params
  display: flex
  align-items: center
  justify-content: space-around
  padding: 20px
  background: $card-background
  border-radius: $border-radius
  box-shadow: $box-shadow
  @include media(md)
    flex-direction: column
    box-shadow: none
    border-radius: 0
    align-items: flex-start
    gap: 20px
    padding: 0

.delivery-params__box
  display: flex
  align-items: center
  flex-shrink: 0

.delivery-params__icon
  flex-shrink: 0
  margin-right: 10px
  width: 30px
  height: 30px

.delivery-params__title
  margin-bottom: 5px
  text-transform: lowercase
  font-size: 14px

.delivery-params__description
  text-transform: lowercase
  font-size: 14px
  color: $main-light
  white-space: nowrap
</style>
