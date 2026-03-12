<script setup lang="ts">
import MenuDesk from '@/widgets/MenuDesk/ui/MenuDesk.vue'
import PayInfo from '@/widgets/PayInfo/ui/PayInfo.vue'
import ButtonTop from "@/shared/ui/ButtonTop.vue"
import BasketMob from "@/entities/Basket/ui/BasketMob.vue"
import CheckoutForm from '@/widgets/CheckoutForm/ui/CheckoutForm.vue'
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <CheckoutForm />
  <PayInfo />
  <ButtonTop />
  <BasketMob />
</template>

<style scoped></style>
