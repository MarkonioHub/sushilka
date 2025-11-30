import { defineStore } from 'pinia'
import type { Basket } from "@/entities/Basket/model/types.ts"

export const useBasketStore = defineStore('Basket', {
  state: (): Basket => ({
    userId: undefined,
    productsBasket: JSON.parse(localStorage.getItem('sushilka-basket') || "[]") || []
  }),
  getters: {
    productsQuantity : (state) => {
      return state.productsBasket.reduce((accumulator, product) => accumulator + product.quantity, 0)
    }
  },
  actions: {
    addProduct(id: string, selectedParameter: string | undefined, quantity: number, replaceQuantity: boolean = false) {
      const product = this.productsBasket.find((product) => product.id === id && product.selectedParameter === selectedParameter)
      if (product) {
        if (replaceQuantity) {
          product.quantity = quantity
        } else {
          product.quantity += quantity
        }
      } else {
        this.productsBasket.push({
          id: id,
          selectedParameter: selectedParameter,
          quantity: quantity
        })
      }
      this.updateLocalStorage()
    },
    removeProduct(id: string, selectedParameter: string | undefined) {
      this.productsBasket = this.productsBasket.filter((product) =>
        product.id !== id || product.selectedParameter !== selectedParameter
      )
      this.updateLocalStorage()
    },
    updateLocalStorage(): void {
      localStorage.setItem('sushilka-basket', JSON.stringify(this.productsBasket))
    },
    getProductQuantity(id: string, selectedParameter: string) {
      if (selectedParameter) {
        return this.productsBasket.find((basketProduct) =>
          basketProduct.id === id && basketProduct.selectedParameter === selectedParameter)?.quantity
      } else {
        return this.productsBasket.find((basketProduct) =>
          basketProduct.id === id)?.quantity
      }
    },
    setUserId(userId: number) {
      this.userId = userId
    },
  },
})
