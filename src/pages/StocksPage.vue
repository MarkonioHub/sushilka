<script setup lang="ts">
import StockTile from "@/widgets/StockTile/ui/StockTile.vue"
import SeoBox from "@/widgets/SeoBox/ui/SeoBox.vue"
import MenuDesc from "@/widgets/MenuDesc/ui/MenuDesc.vue"
</script>

<template>
  <MenuDesc :mod="'sticky'" />
  <StockTile />
  <SeoBox
    :title="'Акции от Сушилки'"
    :description="'Текущие акции, актуальные промокоды от сети удобных кафе Сушилка'"
  />
</template>

<style scoped lang="sass">

</style>
