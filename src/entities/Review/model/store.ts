import { defineStore } from "pinia"
import type { Review, ApiReview } from "@/entities/Review/model/types.ts"
import { fetchData } from "@/shared/helpers/fetchData.ts"

export const useReviewsStore = defineStore('Reviews', {
  state: () => ({
    reviews: [] as Review[],
    page: 1,
    end: false
  }),
  actions: {
    async getReviews() {
      await new Promise(resolve => setTimeout(resolve, 1000)) // example data delay
      const reviews = await fetchData<ApiReview>(`reviews?_page=${this.page}&_per_page=10`)
      if (!reviews) return
      this.reviews.push(...reviews.data)
      this.page += 1
      if (!reviews.next) this.end = true
    }
  }
})
