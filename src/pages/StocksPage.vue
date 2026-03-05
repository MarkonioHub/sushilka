<script setup lang="ts">
import StockTile from "@/widgets/StockTile/ui/StockTile.vue"
import SeoBox from "@/widgets/SeoBox/ui/SeoBox.vue"
import MenuDesk from "@/widgets/MenuDesk/ui/MenuDesk.vue"
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <StockTile />
  <SeoBox
    :title="'Акции от Сушилки'"
    :description="'Текущие акции, актуальные промокоды от сети удобных кафе Сушилка'"
  />
</template>

<style scoped lang="sass">

</style>
