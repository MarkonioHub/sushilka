import { computed } from "vue"

import { usePriceByParams } from "@/entities/Product/@x/Basket"
import { useProductsStore } from "@/entities/Product/@x/Basket"
import { useBasketStore } from "@/entities/Basket"

export function usePriceFull () {
  const productsStore = useProductsStore()
  const products = computed(() => {
    return productsStore.products
  })

  const basket = useBasketStore()
  const productsBasket = computed(() => {
    return basket.productsBasket
  })

  const priceFull = computed(() => {
    let sum = 0
    productsBasket.value.forEach((productBasket) => {
      const product = products.value.find((product) => product.id === productBasket.id)
      const price = usePriceByParams(product, productBasket.selectedParameter || '') || ''
      sum += +price * productBasket.quantity
    })
    return sum
  })

  return {
    priceFull
  }
}
