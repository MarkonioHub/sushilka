<script setup lang="ts">
import IconSvg from '@/shared/ui/IconSvg.vue'
import { useModalsStore } from '@/app/store/modals.ts'
import { useDeliveryStore } from '@/entities/Delivery/model/store.ts'
import { useUserDelivery } from '@/shared/composables/useUserDelivery.ts'

const modalsStore = useModalsStore()
const deliveryStore = useDeliveryStore()
const { deliveryString, deliveryNote } = useUserDelivery()
</script>

<template>
  <section class="delivery-line">
    <div class="cont">
      <div class="delivery-line__area" @click="modalsStore.toggleModal('HomeModal')">
        <IconSvg :name="'placemark'" :className="'icon-grey-fill'" :width="'16px'" :height="'16px'"
                 class="delivery-line__icon" />
        <div class="delivery-line__current">
          <div class="delivery-line__current-name">
            {{ deliveryNote }}
          </div>
          <div class="delivery-line__current-value" v-if="deliveryString">
            {{ deliveryString }}
          </div>
        </div>
        <div class="delivery-line__type">
          <button
            :class="deliveryStore.deliveryRestaurantId ? 'delivery-line__type-btn' : 'delivery-line__type-btn active'"
          >
            {{ $t('DeliveryLine.delivery') }}
          </button>
          <button
            :class="deliveryStore.deliveryRestaurantId ? 'delivery-line__type-btn active' : 'delivery-line__type-btn'"
            @click="(e) => {
              e.stopPropagation()
              modalsStore.toggleModal('RestaurantsModal')
            }"
          >
            {{ $t('DeliveryLine.pickup') }}
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.delivery-line
  margin-top: 20px

.delivery-line__area
  display: flex
  align-items: center
  box-shadow: $box-shadow
  border-radius: $border-radius
  background: $card-background
  padding: 10px 20px
  cursor: pointer
  @include media(sm)
    display: block

.delivery-line__icon
  margin-right: 10px
  flex-shrink: 0
  @include media(sm)
    display: none

.delivery-line__current
  margin-right: 40px
  display: flex
  flex-direction: column
  justify-content: center
  gap: 5px
  @include media(sm)
    margin-right: 0
    margin-bottom: 10px

.delivery-line__current-name
  font-size: 14px
  color: $grey

.delivery-line__current-value
  font-size: 16px

.delivery-line__type
  margin-left: auto
  flex-shrink: 0

.delivery-line__type-btn
  font-size: 14px
  padding: 5px 17px
  box-shadow: $box-shadow
  @include media(sm)
    width: 50%
  &:first-child
    border-radius: 100px 0 0 100px
  &:last-child
    border-radius: 0 100px 100px 0
  &.active
    background-color: $orange
    color: $white
</style>
