import { defineStore } from 'pinia'

export const useBasketStore = defineStore('Basket', {
  state: () => ({
    basket: {
      userId: null as null,
      products: [] as string[],
    },
  }),
  actions: {
    addProduct(id: string) {
      this.basket.products.push(id)
    },
  },
})
