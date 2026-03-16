<script setup lang="ts">
import { ModalCustom } from '@/shared/ui'
import { DeliveryParams } from '@/entities/Delivery'
import { TitleBase } from '@/shared/ui'
</script>

<template>
  <ModalCustom :className="'modal-custom_delivery'" :id="'DeliveryModal'">
    <TitleBase>Информация о доставке</TitleBase>
    <DeliveryParams />
  </ModalCustom>
</template>

<style scoped lang="sass"></style>
