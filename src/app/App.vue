<script setup lang="ts">
import { ref } from 'vue'

import { useCategoriesStore } from '@/entities/Category'
import { useProductsStore } from '@/entities/Product'
import { useContentPagesStore } from '@/entities/ContentPage'
import { useSliderOffersStore } from '@/widgets/SliderOffers'
import { useDeliveryStore } from '@/entities/Delivery'

import { HeaderBase } from '@/widgets/HeaderBase'
import { FooterBase } from '@/widgets/FooterBase'
import { InfoMessages } from '@/shared/ui'
import { SocialLine } from '@/widgets/SocialLine'
import { LoginModal } from '@/entities/User'
import { LoaderBase } from '@/shared/ui'
import { MobileMenu } from '@/widgets/MobileMenu'
import { DeliveryModal } from '@/widgets/DeliveryModal'
import { DeliveryCity } from '@/entities/Delivery'
import { LangModal } from '@/shared/ui'
import { WorkTimeModal } from '@/widgets/WorkTimeModal'

const loading = ref(true)

async function loadData() {
  await new Promise((resolve) => setTimeout(resolve, 1000)) // example data delay
  const storeCategory = useCategoriesStore()
  await storeCategory.getCategories()
  const storeProducts = useProductsStore()
  await storeProducts.getProducts()
  const storeContentPages = useContentPagesStore()
  await storeContentPages.getContentPages()
  const storeSliderOffers = useSliderOffersStore()
  await storeSliderOffers.getSliderOffers()
  const storeDelivery = useDeliveryStore()
  await storeDelivery.getShops()
  await storeDelivery.getCities()
  loading.value = false
}

loadData()
</script>

<template>
  <LoaderBase :visibility="loading" :type="'fixed'" />
  <template v-if="!loading">
    <HeaderBase />
    <div class="wrapper">
      <router-view></router-view>
    </div>
    <SocialLine />
    <FooterBase />
    <InfoMessages />
    <LoginModal />
    <MobileMenu />
    <DeliveryModal />
    <DeliveryCity />
    <LangModal />
    <WorkTimeModal />
  </template>
</template>

<style></style>
