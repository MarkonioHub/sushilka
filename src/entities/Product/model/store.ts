import { defineStore } from 'pinia'
import type { Products } from './types'

export const useProductsStore = defineStore('Products', {
  state: (): Products => ({
    products: []
  }),
  actions: {
    async getProducts() {
      try {
        const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/products`)
        if (!response.ok) throw new Error(response.statusText)
        this.products = await response.json()
      } catch (error) {
        console.error('Error fetching /products:', error)
      }
    },
  },
})
