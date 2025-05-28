import { defineStore } from 'pinia'

export const useCategoriesStore = defineStore('Categories', {
  state: () => ({
    categories: []
  }),
  actions: {
    async getCategories() {
      try {
        const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/categories`)
        if (!response.ok) throw new Error(response.statusText)
        this.categories = await response.json()
      } catch (error) {
        console.error('Error fetching /products:', error)
      }
    },
  }
})
