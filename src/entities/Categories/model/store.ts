import { defineStore } from 'pinia'
import type { Categories } from "./types.ts"
import { fetchDataWithDelay } from "@/shared/helpers/fetchDataWithDelay.ts"

export const useCategoriesStore = defineStore('Categories', {
  state: (): Categories => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      const response = await fetchDataWithDelay(`categories`, 1000)
      this.categories = response.data
    },
  },
})
