<script setup>
import {defineAsyncComponent} from "vue"

const ic_visa = defineAsyncComponent(() => import('../images/ic_visa.svg'))
const ic_master_card = defineAsyncComponent(() => import('../images/ic_master_card.svg'))
const ic_mir = defineAsyncComponent(() => import('../images/ic_mir.svg'))
const ic_sbr = defineAsyncComponent(() => import('../images/ic_sbr.svg'))

const payInfo = [
  {
    title: 'Наличный расчёт',
    text: 'Оплата производится наличными курьеру при доставке заказа или самовывозом из точки продаж. ' +
      'При оформлении заказа укажите сумму, с которой Вам необходима сдача.'
  },
  {
    title: 'Картой',
    text: 'Оплата производится банковской картой курьеру при доставке заказа или при самовывозе из точки продаж.'
  },
  {
    title: 'Online на сайте',
    text: 'Вы можете оплатить свой заказ на сайте онлайн с помощью карты любого банка.',
    icons: [ ic_visa, ic_master_card, ic_mir, ic_sbr ]
  },
]
</script>

<template>
  <section class="pay-info">
    <div class="cont">
      <h2 class="pay-info__caption">Информация об оплате</h2>
      <div class="pay-info__area">
        <ul class="pay-info__list">
          <li class="pay-info__item" v-for="(info, key) in payInfo" :key="key">
            <div class="pay-info__title">{{ info.title }}</div>
            <div class="pay-info__text">{{ info.text }}</div>
            <div class="pay-info__icons" v-if="info.icons">
              <template v-for="(icon, key) in info.icons" :key="key">
                <component :is="icon" class="pay-info__icon"></component>
              </template>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.pay-info
  margin-bottom: 40px

.pay-info__caption
  margin-bottom: 40px
  font-size: 16px
  text-align: center
  font-weight: 400

.pay-info__area
  padding: 30px
  background-color: $card-background
  border-radius: $border-radius
  box-shadow: $box-shadow
  @include media(md)
    padding: 20px

.pay-info__list
  display: flex
  flex-direction: column
  gap: 30px

//.pay-info__item

.pay-info__title
  margin-bottom: 10px
  font-weight: 700
  font-size: 18px

.pay-info__text
  font-size: 16px

.pay-info__icons
  margin-top: 10px
  display: flex
  align-items: center
  gap: 10px

.pay-info__icon
  height: auto
  width: auto
  max-width: 60px
  max-height: 40px
</style>
