import {defineStore} from "pinia"
import type { Stock } from "@/entities/Stock/model/types.ts"
import { fetchData } from "@/shared/helpers/fetchData.ts"

export const useStocksStore = defineStore('stocks', {
  state: () => ({
    stocks: [] as Stock[]
  }),
  actions: {
    async getStocks() {
      this.stocks = await fetchData<Stock[]>('stocks')
    }
  }
})
