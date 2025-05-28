import { defineStore } from 'pinia'

export const useSliderOffersStore = defineStore('SliderOffers', {
  state: () => ({
      slides: []
  }),
  actions: {
    async getSlides() {
      try {
        const response = await fetch(`${import.meta.env.VITE_VUE_API_URL}/slider-offers`)
        if (!response.ok) throw new Error(response.statusText)
        this.slides = await response.json()
      } catch (error) {
        console.error('Error fetching /slider-offers:', error)
      }
    },
  }
})
