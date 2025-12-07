import { defineStore } from 'pinia'
import type { Category } from "./types.ts"
import { fetchData } from "@/shared/helpers/fetchData.ts"

export const useCategoriesStore = defineStore('Categories', {
  state: () => ({
    categories: [] as Category[],
  }),
  actions: {
    async getCategories() {
      this.categories = await fetchData<Category[]>(`categories`)
    },
  },
})
