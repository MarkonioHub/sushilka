<script setup lang="ts">
import DeliveryParams from '@/entities/Delivery/ui/DeliveryParams.vue'
</script>

<template>
  <div class="delivery-list">
    <div class="cont">
      <DeliveryParams />
    </div>
  </div>
</template>

<style scoped lang="sass">
.delivery-list
  margin-bottom: 20px
  @include media(md)
    display: none
</style>
