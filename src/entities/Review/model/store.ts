import { defineStore } from "pinia"
import type { Review } from "@/entities/Review/model/types.ts"
import {fetchDataWithDelay} from "@/shared/helpers/fetchDataWithDelay.ts";

export const useReviewsStore = defineStore('Reviews', {
  state: () => ({
    reviews: [] as Review[],
    page: 1,
    end: false
  }),
  actions: {
    async getReviews() {
      const reviews = await fetchDataWithDelay(`reviews?_page=${this.page}&_per_page=10`, 1000)
      this.reviews.push(...reviews.data)
      this.page += 1
      if (!reviews.next) this.end = true
    }
  }
})
