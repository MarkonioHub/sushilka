import { defineStore } from 'pinia'
import type { Categories } from "./types.ts"

export const useCategoriesStore = defineStore('Categories', {
  state: (): Categories => ({
    categories: [],
  }),
  actions: {
    async getCategories() {
      try {
        const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/categories`)
        if (!response.ok) throw new Error(response.statusText)
        this.categories = await response.json()
      } catch (error) {
        console.error('Error fetching /categories:', error)
      }
    },
  },
})
