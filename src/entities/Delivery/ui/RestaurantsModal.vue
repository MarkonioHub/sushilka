<script setup lang="ts">
import ModalCustom from '@/shared/ui/ModalCustom.vue'
import TitleBase from '@/shared/ui/TitleBase.vue'
import RestaurantsMap from '@/shared/ui/RestaurantsMap.vue'
import { isShopOpen } from "@/shared/helpers/isShopOpen.ts"
import { useDeliveryStore } from '@/entities/Delivery/model/store.ts'
import InputBase from '@/shared/ui/InputBase.vue'
import { useModalsStore } from '@/app/store/modals.ts'
import { useCurrentShops } from '@/shared/composables/useCurrentShops.ts'

const modalsStore = useModalsStore()
const deliveryStore = useDeliveryStore()
const { currentShops } = useCurrentShops()
const selectedRestaurant = defineModel()

function toggleRestaurant () {
  deliveryStore.setDeliveryRestaurantId(selectedRestaurant.value as string)
  const shop = deliveryStore.getShop(selectedRestaurant.value as string)
  deliveryStore.deliveryAddress = `${shop?.title} ${shop?.address}` || ''
  modalsStore.toggleModal('RestaurantsModal')
}
</script>

<template>
  <ModalCustom :className="'modal-custom_restaurants'" :id="'RestaurantsModal'">
    <div class="restaurants-modal">
      <TitleBase class="restaurants-modal__title">Точки самовывоза</TitleBase>
      <div class="restaurants-modal__area">
        <div class="restaurants-modal__list">
          <label class="restaurants-modal__label" v-for="(shop, index) in currentShops" :key="index">
            <div class="restaurants-modal__top">
              <InputBase
                class="restaurants-modal__input"
                type="radio"
                :name="'restaurants-modal-delivery'"
                :value="shop.id"
                :checked="deliveryStore.deliveryRestaurantId === shop.id"
                v-model="selectedRestaurant"
                @change="toggleRestaurant"
              />
              <div class="restaurants-modal__input-view"></div>
              <div class="restaurants-modal__name">{{shop.title}}</div>
              <div
                :class="
                isShopOpen(shop) ? 'restaurants-modal__shop-work green' : 'restaurants-modal__shop-work red'
              "
              >
                {{ shop.startTime }} - {{ shop.endTime }}
                <br />
                <template v-if="isShopOpen(shop)">Открыто</template>
                <template v-else>Закрыто</template>
              </div>
            </div>
            <div class="restaurants-modal__address">{{shop.address}}</div>
          </label>
        </div>
        <div class="restaurants-modal__map">
          <RestaurantsMap />
        </div>
      </div>
    </div>
  </ModalCustom>
</template>

<style scoped lang="sass">
.restaurants-modal
  width: 100%

.restaurants-modal__title
  text-align: center

.restaurants-modal__area
  display: flex
  gap: 20px
  @include media(md)
    flex-direction: column

.restaurants-modal__list
  display: flex
  flex-direction: column
  gap: 20px
  max-width: 400px
  width: 100%
  @include media(md)
    max-width: 100%

.restaurants-modal__label
  padding: 20px
  border-radius: $border-radius
  background-color: $white
  box-shadow: $box-shadow
  cursor: pointer
  @include media(md)
    padding: 15px

.restaurants-modal__top
  display: flex
  align-items: center
  padding-bottom: 18px
  margin-bottom: 18px
  border-bottom: 1px solid $color-border

.restaurants-modal__input
  display: none
  &:checked ~ .restaurants-modal__input-view
    background: $orange
    &::before
      content: ''
      width: 8px
      height: 8px
      border-radius: 50%
      background: $white
      position: absolute
      top: 50%
      left: 50%
      transform: translate(-50%, -50%)

.restaurants-modal__input-view
  position: relative
  margin-right: 10px
  flex-shrink: 0
  width: 16px
  height: 16px
  border-radius: 50%
  background: $grey

.restaurants-modal__name
  margin-right: 15px
  font-size: 18px
  line-height: 22px
  @include media(md)
    font-size: 16px
    line-height: 18px

.restaurants-modal__shop-work
  margin-left: auto
  text-align: right
  font-size: 18px
  line-height: 24px
  @include media(md)
    flex-shrink: 0
    font-size: 16px
    line-height: 18px
  &.green
    color: $green
  &.red
    color: $red

.restaurants-modal__address
  font-size: 18px
  line-height: 22px
  @include media(md)
    font-size: 16px
    line-height: 18px

.restaurants-modal__map
  max-width: 400px
  min-height: 400px
  width: 100%
  border-radius: $border-radius
  overflow: hidden
  @include media(md)
    height: 400px
    max-width: 100%
</style>
