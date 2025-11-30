import {defineStore} from "pinia"
import type { Stocks } from "@/entities/Stock/model/types.ts"

export const useStocksStore = defineStore('stocks', {
  state: (): Stocks => ({
    stocks: []
  }),
  actions: {
    async getStocks() {
      try {
        const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/stocks`)
        if (!response.ok) throw new Error(response.statusText)
        this.stocks = await response.json()
      } catch (error) {
        console.error('Error fetching /stocks:', error)
      }
    }
  }
})
