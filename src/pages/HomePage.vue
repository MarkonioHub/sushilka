<script setup lang="ts">
import SliderOffers from '@/widgets/SliderOffers/ui/SliderOffers.vue'
import DeliveryLine from '@/widgets/DeliveryLine/ui/DeliveryLine.vue'
import MenuDesc from '@/widgets/MenuDesc/ui/MenuDesc.vue'
import DeliveryParams from '@/widgets/DeliveryParams/ui/DeliveryParams.vue'
import CategoriesLine from '@/widgets/CategoriesLine/ui/CategoriesLine.vue'
import ProductsTile from '@/widgets/ProductsTile/ui/ProductsTile.vue'
import PayInfo from '@/widgets/PayInfo/ui/PayInfo.vue'
import SeoBox from '@/widgets/SeoBox/ui/SeoBox.vue'
import SocialLine from '@/widgets/SocialLine/ui/SocialLine.vue'
import ButtonTop from "@/shared/ui/ButtonTop.vue"
import ProductModal from "@/entities/Product/ui/ProductModal.vue"
import BasketMob from "@/entities/Basket/ui/BasketMob.vue"
</script>

<template>
  <DeliveryLine />
  <MenuDesc />
  <SliderOffers />
  <DeliveryParams />
  <CategoriesLine />
  <ProductsTile />
  <PayInfo />
  <SeoBox />
  <SocialLine />
  <ButtonTop />
  <ProductModal />
  <BasketMob />
</template>

<style scoped></style>
