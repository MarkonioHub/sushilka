<script setup lang="ts">
import SliderOffers from '@/widgets/SliderOffers/ui/SliderOffers.vue'
import DeliveryLine from '@/widgets/DeliveryLine/ui/DeliveryLine.vue'
import MenuDesc from '@/widgets/MenuDesc/ui/MenuDesc.vue'
import DeliveryParams from '@/widgets/DeliveryParams/ui/DeliveryParams.vue'
import CategoriesLine from '@/widgets/CategoriesLine/ui/CategoriesLine.vue'
import ProductsTile from '@/widgets/ProductsTile/ui/ProductsTile.vue'
import PayInfo from '@/widgets/PayInfo/ui/PayInfo.vue'
import SeoBox from '@/widgets/SeoBox/ui/SeoBox.vue'
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
  <SeoBox
    :title="'Сушилка'"
    :description="`Доставка от сети удобных кафе «Сушилка» - это не только пиццы и роллы, это еще и популярные блюда
      разных кухонь мира! Пасты, салаты,  вок, супы, детское меню. Итальянская, японская, Паназиатская кухни.
      Доставка менее 60 минут по Кирову и Нововятску.`"
  />
  <ButtonTop />
  <ProductModal />
  <BasketMob />
</template>

<style scoped></style>
