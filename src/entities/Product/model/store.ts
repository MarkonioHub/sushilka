import { defineStore } from 'pinia'
import type { Product } from './types'
import { fetchData } from "@/shared/lib"

export const useProductsStore = defineStore('Products', {
  state: () => ({
    products: [] as Product[]
  }),
  actions: {
    async getProducts() {
      this.products = await fetchData<Product[]>('products')
    },
    getProductById(id: string) {
      return this.products.find((product) => product.id === id)
    }
  },
})
