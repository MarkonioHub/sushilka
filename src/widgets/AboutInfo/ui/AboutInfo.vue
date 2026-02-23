<script setup lang="ts">
import CardBase from '@/shared/ui/CardBase.vue'
import IconSvg from '@/shared/ui/IconSvg.vue'
import TitleBase from '@/shared/ui/TitleBase.vue'
import RestaurantsMap from '@/shared/ui/RestaurantsMap.vue'
import { shallowRef } from 'vue'
import { useShopsStore } from '@/entities/Shop/model/store.ts'
import { storeToRefs } from 'pinia'
import { isShopOpen } from "@/shared/helpers/isShopOpen.ts"
import type { YMap } from '@yandex/ymaps3-types'

const infoLines = [
  { day: 'понедельник', time: '11:00 - 23:00' },
  { day: 'вторник', time: '11:00 - 23:00' },
  { day: 'среда', time: '11:00 - 23:00' },
  { day: 'четверг', time: '11:00 - 23:00' },
  { day: 'пятница', time: '11:00 - 23:00' },
  { day: 'суббота', time: '11:00 - 23:00' },
  { day: 'воскресенье', time: '11:00 - 23:00' },
]

const shopStore = useShopsStore()
const { shops } = storeToRefs(shopStore)

const restaurantsMapRef = shallowRef<null | YMap>(null)
</script>

<template>
  <div class="about-info">
    <div class="cont">
      <div class="about-info__area">
        <div class="about-info__inner">
          <CardBase>
            <TitleBase class="about-info__title">Точки самовывоза</TitleBase>
            <div class="about-info__shop" v-for="(shop, key) in shops" :key="key">
              <IconSvg :name="'placemark'" class="about-info__shop-icon" :width="'18px'" :height="'18px'" />
              <div class="about-info__shop-box">
                <div class="about-info__shop-title">{{ shop.title }}</div>
                <div class="about-info__shop-address">{{ shop.address }}</div>
              </div>
              <div
                :class="
                  isShopOpen(shop) ? 'about-info__shop-work green' : 'about-info__shop-work red'
                "
              >
                {{ shop.startTime }} - {{ shop.endTime }}
                <br />
                <template v-if="isShopOpen(shop)">Открыто</template>
                <template v-else>Закрыто</template>
              </div>
            </div>
          </CardBase>
          <CardBase>
            <TitleBase class="about-info__title">Режим работы</TitleBase>
            <div class="about-info__line" v-for="(line, id) in infoLines" :key="id">
              <IconSvg :name="'time'" class="about-info__icon" :width="'18px'" :height="'18px'" />
              <div class="about-info__day">{{ line.day }}</div>
              <div class="about-info__time">{{ line.time }}</div>
            </div>
          </CardBase>
        </div>
        <div class="about-info__map">
          <RestaurantsMap ref="restaurantsMapRef" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.about-info__area
  margin-bottom: 40px
  display: flex
  gap: 40px
  @include media(lg)
    flex-direction: column
    margin-bottom: 20px
    gap: 20px

.about-info__title
  margin-bottom: 20px

.about-info__inner
  display: flex
  flex-direction: column
  gap: 40px
  width: calc(50% - 20px)
  @include media(lg)
    width: 100%
    gap: 20px

.about-info__shop
  display: flex
  gap: 15px
  align-items: center
  cursor: pointer
  &:not(:last-child)
    padding-bottom: 10px
    margin-bottom: 10px
    border-bottom: 1px solid $grey

.about-info__shop-icon
  flex-shrink: 0
  opacity: 0.5

.about-info__shop-box
  flex-grow: 1

.about-info__shop-title
  margin-bottom: 5px
  color: $grey
  font-size: 16px

.about-info__shop-address
  font-size: 18px
  line-height: 24px

.about-info__shop-work
  font-size: 16px
  line-height: 20px
  width: 85px
  flex-shrink: 0
  text-align: right
  &.green
    color: $green
  &.red
    color: $red

.about-info__map
  border-radius: $border-radius
  box-shadow: $box-shadow
  width: calc(50% - 20px)
  @include media(lg)
    width: 100%
    height: 400px

.about-info__line
  display: flex
  align-items: center
  &:not(:last-child)
    padding-bottom: 15px
    margin-bottom: 15px
    border-bottom: 1px solid $grey

.about-info__icon
  margin-right: 15px
  flex-shrink: 0

.about-info__day
  font-size: 16px

.about-info__time
  margin-left: auto
  font-size: 16px
</style>
