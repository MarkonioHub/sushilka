<script setup lang="ts">
import ModalCustom from '@/shared/ui/ModalCustom.vue'
import DeliveryParams from '@/entities/Delivery/ui/DeliveryParams.vue'
import TitleBase from '@/shared/ui/TitleBase.vue'
</script>

<template>
  <Transition name="fade">
    <ModalCustom :className="'modal-custom_delivery'" :id="'DeliveryModal'">
      <TitleBase>Информация о доставке</TitleBase>
      <DeliveryParams />
    </ModalCustom>
  </Transition>
</template>

<style scoped lang="sass">

</style>
