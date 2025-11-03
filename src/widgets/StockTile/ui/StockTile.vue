<script setup lang="ts">
import { useStocksStore } from "@/entities/Stock/model/store.ts"
import { storeToRefs } from "pinia"
import StockCard from "@/entities/Stock/ui/StockCard.vue"

const store = useStocksStore()
if (!store.stocks.length) store.getStocks()

const { stocks } = storeToRefs(store)

</script>

<template>
  <div class="stock-tile">
    <div class="cont">
      <ul class="stock-tile__list">
        <StockCard v-for="(stock, key) in stocks" :key="key" :stock="stock" />
      </ul>
    </div>
  </div>
</template>

<style scoped lang="sass">
.stock-tile
  margin: 20px 0 40px
  @include media(xs)
    margin: 20px 0

.stock-tile__list
  display: flex
  flex-wrap: wrap
  gap: 30px
  @include media(lg)
    align-items: flex-start
    gap: 20px

</style>
