import { defineStore } from 'pinia'
import type {SliderOffers} from "./types.ts"

export const useSliderOffersStore = defineStore('SliderOffers', {
  state: (): SliderOffers => ({
    sliderOffers: [],
  }),
  actions: {
    async getSlides() {
      try {
        const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/slider-offers`)
        if (!response.ok) throw new Error(response.statusText)
        this.sliderOffers = await response.json()
      } catch (error) {
        console.error('Error fetching /slider-offers:', error)
      }
    },
  },
})
