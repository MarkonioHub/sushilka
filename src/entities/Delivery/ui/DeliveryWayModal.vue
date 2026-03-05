<script setup lang="ts">
import { useModalsStore } from '@/app/store/modals.ts'
import ModalCustom from '@/shared/ui/ModalCustom.vue'
import IconSvg from '@/shared/ui/IconSvg.vue'
import TitleBase from '@/shared/ui/TitleBase.vue'
import { useIsAtLeastOneShopOpen } from '@/shared/composables/useIsAtLeastOneShopOpen.ts'
const { isAtLeastOneShopOpen } = useIsAtLeastOneShopOpen()

const modalsStore = useModalsStore()
if (isAtLeastOneShopOpen.value) modalsStore.toggleModal('DeliveryWayModal')

function openRestaurantsModal () {
  modalsStore.toggleModal('DeliveryWayModal')
  modalsStore.toggleModal('RestaurantsModal')
}

function openHomeModal () {
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
        <div class="delivery-way-modal__box delivery-way-modal__box_2" @click="openRestaurantsModal">
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
</style>
