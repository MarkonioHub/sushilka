<script setup lang="ts">
import DeliveryLine from '@/widgets/DeliveryLine/ui/DeliveryLine.vue'
import MenuDesk from '@/widgets/MenuDesk/ui/MenuDesk.vue'
import PayInfo from '@/widgets/PayInfo/ui/PayInfo.vue'
import ButtonTop from "@/shared/ui/ButtonTop.vue"
import ProductModal from "@/entities/Product/ui/ProductModal.vue"
import BasketMob from "@/entities/Basket/ui/BasketMob.vue"
import DeliveryWayModal from '@/entities/Delivery/ui/DeliveryWayModal.vue'
import RestaurantsModal from '@/entities/Delivery/ui/RestaurantsModal.vue'
import HomeModal from '@/entities/Delivery/ui/HomeModal.vue'
import CheckoutForm from '@/widgets/CheckoutForm/ui/CheckoutForm.vue'
</script>

<template>
  <DeliveryLine />
  <MenuDesk :mod="'sticky'" />
  <CheckoutForm />
  <PayInfo />
  <ButtonTop />
  <ProductModal />
  <DeliveryWayModal />
  <HomeModal />
  <RestaurantsModal />
  <BasketMob />
</template>

<style scoped></style>
