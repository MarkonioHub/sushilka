import { useShopsStore } from '@/entities/Shop/model/store.ts'
import { useDeliveryStore } from '@/entities/Delivery/model/store.ts'
import { computed } from 'vue'

export function useUserDelivery () {
  const shopsStore = useShopsStore()
  const deliveryStore = useDeliveryStore()

  const shop = computed(() => {
    return shopsStore.getShop(deliveryStore.deliveryRestaurantId)
  })

  const deliveryString = computed(() => {
    if (deliveryStore.deliveryAddress) {
      return deliveryStore.deliveryAddress
    } else if (shop.value) {
      return `${shop.value.title}, ${shop.value.address}`
    } else {
      return ''
    }
  })
  const deliveryNote = computed(() => {
    if (deliveryStore.deliveryAddress) {
      return 'Адрес'
    } else if (shop.value) {
      return 'Точка самовывоза'
    } else {
      return 'Выберите адрес доставки'
    }
  })

  return {
    deliveryString, deliveryNote
  }
}
