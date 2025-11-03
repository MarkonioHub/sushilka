<script setup lang="ts">
import HeaderBase from '@/widgets/HeaderBase/ui/HeaderBase.vue'
import FooterBase from '@/widgets/FooterBase/ui/FooterBase.vue'
import InfoMessages from "@/widgets/InfoMessages/ui/InfoMessages.vue"
import { useCategoriesStore } from "@/entities/Categories/model/store.ts"
import { useProductsStore } from "@/entities/Product/model/store.ts"
import { useContentPagesStore } from "@/widgets/ContentPage/model/store.ts"
import SocialLine from "@/widgets/SocialLine/ui/SocialLine.vue";

const storeCategory = useCategoriesStore()
storeCategory.getCategories()
const storeProducts = useProductsStore()
storeProducts.getProducts()
const storeContentPages = useContentPagesStore()
storeContentPages.getContentPages()

</script>

<template>
  <HeaderBase />
  <div class="wrapper">
    <router-view></router-view>
  </div>
  <SocialLine />
  <FooterBase />
  <InfoMessages />
</template>

<style></style>
