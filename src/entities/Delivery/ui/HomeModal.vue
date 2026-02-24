<script setup lang="ts">
import TitleBase from '@/shared/ui/TitleBase.vue'
import ModalCustom from '@/shared/ui/ModalCustom.vue'
import type { LngLat } from '@yandex/ymaps3-types'
import {
  YandexMap,
  YandexMapDefaultFeaturesLayer,
  YandexMapDefaultSchemeLayer,
  YandexMapListener,
  YandexMapMarker,
} from 'vue-yandex-maps'
import { reactive, ref, watch } from 'vue'
import LabelWithIcon from '@/shared/ui/LabelWithIcon/ui/LabelWithIcon.vue'
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { useDeliveryStore } from '@/entities/Delivery/model/store.ts'
import { storeToRefs } from 'pinia'
import { useModalsStore } from '@/app/store/modals.ts'
import type { AddressOption } from '@/entities/Delivery/model/types'
const modalsStore = useModalsStore()
const deliveryStore = useDeliveryStore()
const { deliveryAddress } = storeToRefs(deliveryStore)
const mapCenter = ref([49.643858, 58.565115])
const zoom = ref(12)
const addressText = ref('')
const addressCoordinates = ref([0, 0])
const addressOptions = ref<AddressOption[]>([])
const isShowAddressHint = ref(false)

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function getAddress(event: any) {
  if (event) {
    const result = await ymaps3.search({
      text: event.coordinates,
    })
    addressCoordinates.value = event.coordinates
    addressText.value = result[0]?.properties?.name
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function setAddress (addressOption: any) {
  addressCoordinates.value = addressOption.geometry.coordinates as []
  addressText.value = addressOption.properties.name
  mapCenter.value = addressCoordinates.value
  zoom.value = 16
}

function saveAddress () {
  if (addressCoordinates.value) {
    deliveryAddress.value = addressText.value
    deliveryStore.setDeliveryRestaurantId('')
    modalsStore.toggleModal('HomeModal')
  }
}

watch(addressText, async (newSearchText) => {
  addressOptions.value = newSearchText ? (await ymaps3.search({
    text: `${newSearchText}, Киров`,
  })) as [] : []
})

const events = reactive({
  dom: {
    click: false,
  },
})

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unsafe-function-type
function debounce<T extends Function>(func: T, delay: number): (...args: any[]) => void {
  let timeoutId: ReturnType<typeof setTimeout>
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function _(this: any, ...args: any[]): void {
    clearTimeout(timeoutId)

    timeoutId = setTimeout(() => {
      func.apply(this, args)
    }, delay)
  }
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const createEvent = <T extends keyof typeof events, E = keyof (typeof events)[T]>(
  category: T,
  type: E | boolean,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
): any => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const eventState = events[category] as any
  if (typeof type !== 'boolean') {
    const endEvent = debounce(() => {
      eventState[type] = false
    }, 250)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return (object: Record<string, any>, event?: any) => {
      getAddress(event)
      eventState[type] = true
      endEvent()
    }
  }
}
</script>

<template>
  <ModalCustom :className="'modal-custom_restaurants'" :id="'HomeModal'">
    <div class="home-modal">
      <TitleBase class="home-modal__title">Укажите адрес доставки</TitleBase>
      <LabelWithIcon
        class="home-modal__address"
        :type="'text'"
        :name="'address'"
        :icon="'placemark'"
        :note="'Адрес доставки'"
        :placeholder="' '"
        @focus="() => isShowAddressHint = true"
        v-model.lazy="addressText"
        v-click-outside="() => isShowAddressHint = false"
      />
      <div class="home-modal__hint">
        <div class="home-modal__select" v-if="isShowAddressHint">
          <div
            class="home-modal__option"
            v-for="(addressOption, index) in addressOptions"
            :key="index"
            @click="() => setAddress(addressOption)"
          >
            {{ addressOption?.properties?.name }}, {{ addressOption?.properties?.description }}
          </div>
        </div>
      </div>
      <div class="home-modal__map">
        <yandex-map
          @click="getAddress"
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
            v-if="addressCoordinates"
            position="top-center left-center"
            :settings="{ coordinates: addressCoordinates as LngLat }"
          >
            <img alt="" class="yandex-map-marker-icon" :src="'/public/map_marker.svg'" />
            <div class="home-modal-yandex-map-title">Доставить сюда</div>
          </yandex-map-marker>
          <yandex-map-listener
            :settings="{
              onClick: createEvent('dom', 'click'),
            }"
          />
        </yandex-map>
      </div>
      <ButtonBase @click="saveAddress" :className="'button-orange button-orange_big'">Подтвердить</ButtonBase>
    </div>
  </ModalCustom>
</template>

<style scoped lang="sass">
.home-modal
  width: 100%

.home-modal__title
  margin-bottom: 5px
  text-align: center

.home-modal__address
  margin-bottom: 10px

.home-modal__hint
  position: relative

.home-modal__select
  position: absolute
  z-index: 10
  top: 0
  right: 0
  left: 0
  max-height: 400px
  overflow-y: auto
  display: flex
  flex-direction: column
  background-color: $white
  box-shadow: $box-shadow
  border-radius: $border-radius

.home-modal__option
  padding: 10px
  cursor: pointer
  background-color: $white
  transition: background-color $transition-duration
  &:hover
    background-color: $grey

.home-modal__map
  margin-top: 10px
  margin-bottom: 10px
  height: 500px
  border-radius: $border-radius
  overflow: hidden
  @include media(lg)
    height: 350px

.home-modal-yandex-map-title
  text-align: center

.yandex-map-marker-icon
  margin: 0 auto 5px
  width: 50px
  height: 50px
</style>
