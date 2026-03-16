import { useDeliveryStore } from '@/entities/Delivery'
import { computed } from 'vue'
import type { Shop } from '../model/types.ts'
import { isShopOpen } from '@/entities/Delivery'

export function useIsAtLeastOneShopOpen () {
  const deliveryStore = useDeliveryStore()

  const isAtLeastOneShopOpen = computed(() => {
    let result = false
    deliveryStore.shops.forEach((shop: Shop) => {
      if (isShopOpen(shop)) result = true
    })
    return result
  })

  return {
    isAtLeastOneShopOpen
  }
}
