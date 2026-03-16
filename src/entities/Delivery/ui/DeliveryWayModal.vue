<script setup lang="ts">
import { useModalsStore } from '@/shared/store'
import { ModalCustom } from '@/shared/ui'
import { IconSvg } from '@/shared/ui'
import { TitleBase } from '@/shared/ui'
import { useIsAtLeastOneShopOpen } from '@/entities/Delivery'
const { isAtLeastOneShopOpen } = useIsAtLeastOneShopOpen()

const modalsStore = useModalsStore()
if (isAtLeastOneShopOpen && !sessionStorage.getItem('sushilka-is-delivery-way-modal-show')) {
  modalsStore.toggleModal('DeliveryWayModal')
  sessionStorage.setItem('sushilka-is-delivery-way-modal-show', 'true')
}

function openRestaurantsModal() {
  modalsStore.toggleModal('DeliveryWayModal')
  modalsStore.toggleModal('RestaurantsModal')
}

function openHomeModal() {
  modalsStore.toggleModal('DeliveryWayModal')
  modalsStore.toggleModal('HomeModal')
}
</script>

<template>
  <ModalCustom :className="'modal-custom_delivery-way'" :id="'DeliveryWayModal'">
    <div class="delivery-way-modal">
      <TitleBase class="delivery-way-modal__title">{{ $t('DeliveryWayModal.title') }}</TitleBase>
      <div class="delivery-way-modal__area">
        <div class="delivery-way-modal__box delivery-way-modal__box_1" @click="openHomeModal">
          <IconSvg
            :name="'delivery-way-delivery'"
            class="delivery-way-modal__icon"
            :width="'100px'"
            :height="'100px'"
          />
          <div class="delivery-way-modal__button">{{ $t('DeliveryWayModal.delivery') }}</div>
        </div>
        <div
          class="delivery-way-modal__box delivery-way-modal__box_2"
          @click="openRestaurantsModal"
        >
          <IconSvg
            :name="'delivery-way-home'"
            class="delivery-way-modal__icon"
            :width="'100px'"
            :height="'100px'"
          />
          <div class="delivery-way-modal__button">{{ $t('DeliveryWayModal.pickup') }}</div>
        </div>
      </div>
    </div>
  </ModalCustom>
</template>

<style lang="sass">
.delivery-way-modal
  width: 100%

.delivery-way-modal__title
  text-align: center

.delivery-way-modal__area
  display: flex
  gap: 20px
  @include media(xs)
    gap: 10px

.delivery-way-modal__box
  width: calc(50% - 10px)
  border-radius: $border-radius
  box-shadow: $box-shadow
  display: flex
  flex-direction: column
  align-items: center
  padding: 20px
  gap: 20px
  cursor: pointer
  @include media(xs)
    padding: 5px
    width: calc(50% - 5px)
  &:hover
    .delivery-way-modal__button
      background-color: $orange
  &_1
    &:hover
      path
        fill: $orange
  &_2
    &:hover
      path
        stroke: $orange

.delivery-way-modal__button
  text-align: center
  width: 100%
  font-size: 16px
  line-height: 100%
  text-transform: uppercase
  padding: 10px 20px
  border-radius: 20px
  background-color: $grey
  color: $white
  transition: background-color $transition-duration
  @include media(xs)
    font-size: 14px
</style>
