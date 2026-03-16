<script setup lang="ts">
import { SliderOffers } from '@/widgets/SliderOffers'
import DeliveryLine from './DeliveryLine.vue'
import { MenuDesk } from '@/widgets/MenuDesk'
import DeliveryList from './DeliveryList.vue'
import CategoriesLine from './CategoriesLine.vue'
import ProductsTile from './ProductsTile.vue'
import { PayInfo } from '@/widgets/PayInfo'
import { SeoBox } from '@/widgets/SeoBox'
import { ButtonTop } from '@/widgets/ButtonTop'
import ProductModal from '@/entities/Product/ui/ProductModal.vue'
import BasketMob from '@/entities/Basket/ui/BasketMob.vue'
import DeliveryWayModal from '@/entities/Delivery/ui/DeliveryWayModal.vue'
import RestaurantsModal from '@/entities/Delivery/ui/RestaurantsModal.vue'
import HomeModal from '@/entities/Delivery/ui/HomeModal.vue'
</script>

<template>
  <DeliveryLine />
  <MenuDesk />
  <SliderOffers />
  <DeliveryList />
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
  <DeliveryWayModal />
  <HomeModal />
  <RestaurantsModal />
  <BasketMob />
</template>

<style scoped></style>
