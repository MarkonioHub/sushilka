import { computed } from "vue"

import { usePriceByParams } from "@/shared/composables/usePriceByParams.ts"
import { useProductsStore } from "@/entities/Product/model/store.ts"
import { useBasketStore } from "@/entities/Basket/model/store.ts"

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
      const price = usePriceByParams(product, productBasket.selectedParameter || '')
      sum += price * productBasket.quantity
    })
    return sum
  })

  return {
    priceFull
  }
}
