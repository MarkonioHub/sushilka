export interface Product {
  id: string
  name: string
  slug: string
  description: string
  parameters: string[]
  "parameter-single": string
  price: string | string[]
  tags: string[]
  image: string
}

export interface Products {
  products: Product[]
}
