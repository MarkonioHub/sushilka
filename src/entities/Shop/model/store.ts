import { defineStore } from 'pinia'
import type { Shop } from "./types.ts"
import { fetchData } from "@/shared/helpers/fetchData.ts"

export const useShopsStore = defineStore('Shops', {
  state: () => ({
    shops: [] as Shop[],
  }),
  actions: {
    async getShops() {
      this.shops = await fetchData<Shop[]>(`shops`)
    },
  },
})
