import { defineStore } from 'pinia'
import type {SliderOffer} from "./types.ts"
import { fetchData } from "@/shared/lib"

export const useSliderOffersStore = defineStore('SliderOffers', {
  state: () => ({
    sliderOffers: [] as SliderOffer[],
  }),
  actions: {
    async getSliderOffers() {
      this.sliderOffers = await fetchData<SliderOffer[]>(`slider-offers`)
    },
  },
})
