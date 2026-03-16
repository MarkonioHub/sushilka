export interface Review {
  id: string
  author: string
  text: string
  answer: string
  like: boolean
  image: string
  date: string
}

export interface ApiReview {
  data: Review[],
  next?: number
}
