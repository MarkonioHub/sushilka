import { defineStore } from 'pinia'
import { fetchData } from '@/shared/helpers/fetchData.ts'
import type { City, Shop } from './types.ts'

export const useDeliveryStore = defineStore('delivery', {
  state: () => ({
    deliveryRestaurantId: JSON.parse(localStorage.getItem('sushilka-restaurant-id') || "[]") || '',
    deliveryAddress: '',
    deliveryCost: 149,
    deliveryFree: 700,
    deliveryCity: JSON.parse(localStorage.getItem('sushilka-city') || "[]") || '',
    shops: [] as Shop[],
    shopsAll: [] as Shop[],
    cities: [] as City[]
  }),
  actions: {
    setDeliveryRestaurantId (id: string) {
      this.deliveryRestaurantId = id
      localStorage.setItem('sushilka-restaurant-id', JSON.stringify(this.deliveryRestaurantId))
    },
    setDeliveryCity (cityId: string) {
      this.deliveryCity = this.cities.find(city => city.id === cityId) || ''
      localStorage.setItem('sushilka-city', JSON.stringify(this.deliveryCity))
    },
    async getShops () {
      this.shopsAll = await fetchData<Shop[]>(`shops`)
    },
    async getCities () {
      this.cities = await fetchData<City[]>(`cities`)
      if (!this.deliveryCity?.id && this.cities.length) {
        this.setDeliveryCity(this.cities[0].id)
      }
    },
    getShop (id: string) {
      return this.shopsAll.find((shop) => shop.id === id)
    },
  }
})
