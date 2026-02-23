<script setup lang="ts">

import type { LngLat } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer, YandexMapMarker
} from 'vue-yandex-maps'
import { ref } from 'vue'
import { useShopsStore } from '@/entities/Shop/model/store.ts'
import { storeToRefs } from 'pinia'
import type { Shop } from '@/entities/Shop/model/types.ts'

defineExpose({ setMapCenter })

const shopStore = useShopsStore()
const { shops } = storeToRefs(shopStore)

const mapCenter = ref([49.643858, 58.565115])
const zoom = ref(12)

function setMapCenter (shop: Shop) {
  mapCenter.value = shop.marker.coordinates as Array<number>
  zoom.value = 14
}
</script>

<template>
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
    <yandex-map-marker
      v-for="(point, index) in shops"
      :key="index"
      position="top-center left-center"
      :settings="point.marker"
    >
      <img
        alt=""
        class="yandex-map-marker-icon"
        :src="'/public/map_marker.svg'"
      >
      <div class="yandex-map-marker-title">{{ point.marker.title }}</div>
    </yandex-map-marker>
  </yandex-map>
</template>

<style scoped lang="sass">
.yandex-map-marker-title
  margin-top: 10px
  position: absolute
  top: 100%
  left: 50%
  transform: translateX(-50%)
  padding: 5px
  border-radius: $border-radius
  background-color: $white
  color: $orange
  white-space: nowrap

.yandex-map-marker-icon
  width: 50px
  height: 50px
</style>
