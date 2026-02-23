export interface Basket {
  productsBasket: ProductBasket[]
}

export interface ProductBasket {
  id: string
  selectedParameter: string | undefined
  quantity: number
}
