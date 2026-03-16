import {defineStore} from "pinia"
import type { Stock } from "../model/types.ts"
import { fetchData } from "@/shared/lib"

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
