export interface Product {
  id: string
  name: string
  slug: string
  description: string
  parameters: string[]
  "parameterSingle": string
  price: string | string[]
  tags: Tag[]
  image: string
}

interface Tag {
  text: string
  background: string
  color: string
}
