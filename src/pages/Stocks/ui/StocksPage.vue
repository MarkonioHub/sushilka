<script setup lang="ts">
import StockTile from './StockTile.vue'
import { SeoBox } from '@/widgets/SeoBox'
import { MenuDesk } from '@/widgets/MenuDesk'
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <StockTile />
  <SeoBox
    :title="'Акции от Сушилки'"
    :description="'Текущие акции, актуальные промокоды от сети удобных кафе Сушилка'"
  />
</template>

<style scoped lang="sass"></style>
