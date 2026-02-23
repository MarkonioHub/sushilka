import { defineStore } from 'pinia'

export const useDeliveryStore = defineStore('delivery', {
  state: () => ({
    deliveryRestaurantId: JSON.parse(localStorage.getItem('sushilka-restaurant-id') || "[]") || '',
    deliveryAddress: '',
    deliveryCost: 149,
    deliveryFree: 700,
  }),
  actions: {
    setDeliveryRestaurantId (id: string) {
      this.deliveryRestaurantId = id
      localStorage.setItem('sushilka-restaurant-id', JSON.stringify(this.deliveryRestaurantId))
    }
  }
})
