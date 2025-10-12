import { defineStore } from 'pinia'
import type { Basket } from "@/entities/Basket/model/types.ts"

export const useBasketStore = defineStore('Basket', {
  state: (): Basket => ({
    userId: undefined,
    productsBasket: []
  }),
  getters: {
    productsQuantity : (state) => {
      return state.productsBasket.reduce((accumulator, product) => accumulator + product.quantity, 0)
    }
  },
  actions: {
    addProduct(id: string, selectedParameter: string | undefined, quantity: number) {
      const product = this.productsBasket.find((product) => product.id === id && product.selectedParameter === selectedParameter)
      if (product) {
        product.quantity += quantity
      } else {
        this.productsBasket.push({
          id: id,
          selectedParameter: selectedParameter,
          quantity: quantity
        })
      }
    },
    setUserId(userId: number) {
      this.userId = userId
    },
  },
})
