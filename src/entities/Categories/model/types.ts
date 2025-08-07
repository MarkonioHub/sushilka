export interface Category {
  id: string
  products: string[]
  slug: string
  name: string
}

export interface Categories {
  categories: Category[]
}
