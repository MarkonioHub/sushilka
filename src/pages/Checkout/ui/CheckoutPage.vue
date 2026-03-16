<script setup lang="ts">
import { MenuDesk } from '@/widgets/MenuDesk'
import { PayInfo } from '@/widgets/PayInfo'
import { ButtonTop } from '@/widgets/ButtonTop'
import BasketMob from '@/entities/Basket/ui/BasketMob.vue'
import CheckoutForm from './CheckoutForm.vue'
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <CheckoutForm />
  <PayInfo />
  <ButtonTop />
  <BasketMob />
</template>

<style scoped></style>
