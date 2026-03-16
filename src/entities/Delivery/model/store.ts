import { defineStore } from 'pinia'
import { fetchData } from '@/shared/lib'
import type { City, Shop } from './types.ts'
import { getLocalStorageItem } from '@/shared/lib'

export const useDeliveryStore = defineStore('delivery', {
  state: () => ({
    deliveryRestaurantId: getLocalStorageItem('sushilka-restaurant-id') || '',
    deliveryAddress: getLocalStorageItem('sushilka-delivery-address') || '',
    deliveryCost: 149,
    deliveryFree: 700,
    deliveryCity: getLocalStorageItem('sushilka-city') || '',
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
    setDeliveryAddress (address: string) {
      localStorage.setItem('sushilka-delivery-address', JSON.stringify(address))
      this.deliveryAddress = address
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
