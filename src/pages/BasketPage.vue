<script setup lang="ts">
import BasketTile from "@/widgets/BasketTile/ui/BasketTile.vue"
import HomeModal from '@/entities/Delivery/ui/HomeModal.vue'
import RestaurantsModal from '@/entities/Delivery/ui/RestaurantsModal.vue'
import DeliveryWayModal from '@/entities/Delivery/ui/DeliveryWayModal.vue'
</script>

<template>
  <BasketTile />
  <DeliveryWayModal />
  <HomeModal />
  <RestaurantsModal />
</template>

<style scoped lang="sass">

</style>
