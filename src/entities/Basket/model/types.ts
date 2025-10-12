export interface Basket {
  userId: number | undefined
  productsBasket: ProductBasket[]
}

export interface ProductBasket {
  id: string
  selectedParameter: string | undefined
  quantity: number
}
