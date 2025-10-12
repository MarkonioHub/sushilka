import type { Product } from "@/entities/Product/model/types.ts"

export function usePriceByParams (product: Product | any, selectedParamValue: string) {
  if (Array.isArray(product?.price)) {
    const index = product?.parameters.indexOf(selectedParamValue)
    return product?.price[index]
  } else {
    return product?.price
  }
}
