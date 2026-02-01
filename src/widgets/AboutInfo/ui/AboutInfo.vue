<script setup lang="ts">
import CardBase from '@/shared/ui/CardBase.vue'
import IconSvg from '@/shared/ui/IconSvg.vue'
import TitleBase from '@/shared/ui/TitleBase.vue'
import { computed, ref } from 'vue'
import { useShopsStore } from '@/entities/Shop/model/store.ts'
import { storeToRefs } from 'pinia'
import {
  YandexMap,
  YandexMapDefaultSchemeLayer,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultMarker,
  type YandexMapDefaultMarkerSettings,
} from 'vue-yandex-maps'
import type { LngLat } from '@yandex/ymaps3-types'
import type { Shop } from '@/entities/Shop/model/types.ts'

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

function isShopOpen(shop: Shop): boolean {
  const timeStart = +shop.startTime.slice(0, 2) + +shop.startTime.slice(3, 5) / 100
  const timeEnd = +shop.endTime.slice(0, 2) + +shop.endTime.slice(3, 5) / 100
  const currentTime = +new Date().getHours() + +new Date().getMinutes() / 100
  return timeStart <= currentTime && currentTime <= timeEnd
}

const POINTS = computed(() => {
  const temp: YandexMapDefaultMarkerSettings[] = []
  shops.value.forEach((shop) => {
    temp.push({ coordinates: shop.coords as LngLat, title: shop.title })
  })
  return temp
})

const mapCenter = ref([49.643858, 58.565115])
const zoom = ref(12)

function setMapCenter (shop: Shop) {
  mapCenter.value = shop.coords
  zoom.value = 14
}
</script>

<template>
  <div class="about-info">
    <div class="cont">
      <div class="about-info__area">
        <div class="about-info__inner">
          <CardBase>
            <TitleBase class="about-info__title">Точки самовывоза</TitleBase>
            <div class="about-info__shop" v-for="(shop, key) in shops" :key="key" @click="() => setMapCenter(shop)">
              <IconSvg :name="'placemark'" class="about-info__shop-icon" />
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
              <IconSvg :name="'time'" class="about-info__icon" :className="'icon'" />
              <div class="about-info__day">{{ line.day }}</div>
              <div class="about-info__time">{{ line.time }}</div>
            </div>
          </CardBase>
        </div>
        <div class="about-info__map">
          <yandex-map
            :settings="{
              location: {
                center: mapCenter as LngLat,
                zoom: zoom,
              },
            }"
            width="100%"
            height="500px"
          >
            <yandex-map-default-scheme-layer />
            <yandex-map-default-features-layer />
            <yandex-map-default-marker
              v-for="(point, index) in POINTS"
              :key="index"
              :settings="point"
            />
          </yandex-map>
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
  width: 18px
  height: 18px

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
  width: 18px
  height: 18px

.about-info__day
  font-size: 16px

.about-info__time
  margin-left: auto
  font-size: 16px
</style>
