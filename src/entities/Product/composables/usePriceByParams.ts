import type { Product } from "../model/types.ts"

export function usePriceByParams (product: Product | undefined, selectedParamValue: string) {
  if (Array.isArray(product?.price)) {
    const index = product?.parameters.indexOf(selectedParamValue)
    return product?.price[index]
  } else {
    return product?.price
  }
}
