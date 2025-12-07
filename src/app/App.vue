<script setup lang="ts">
import { ref } from "vue"
import HeaderBase from '@/widgets/HeaderBase/ui/HeaderBase.vue'
import FooterBase from '@/widgets/FooterBase/ui/FooterBase.vue'
import InfoMessages from "@/widgets/InfoMessages/ui/InfoMessages.vue"
import SocialLine from "@/widgets/SocialLine/ui/SocialLine.vue"
import LoaderBase from "@/shared/ui/LoaderBase.vue"
import { useCategoriesStore } from "@/entities/Categories/model/store.ts"
import { useProductsStore } from "@/entities/Product/model/store.ts"
import { useContentPagesStore } from "@/widgets/ContentPage/model/store.ts"
import { useSliderOffersStore } from "@/widgets/SliderOffers/model/store.ts"

const loading = ref(true)

async function loadData () {
  await new Promise(resolve => setTimeout(resolve, 1000)) // example data delay
  const storeCategory = useCategoriesStore()
  await storeCategory.getCategories()
  const storeProducts = useProductsStore()
  await storeProducts.getProducts()
  const storeContentPages = useContentPagesStore()
  await storeContentPages.getContentPages()
  const storeSliderOffers = useSliderOffersStore()
  await storeSliderOffers.getSliderOffers()
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
  </template>
</template>

<style></style>
