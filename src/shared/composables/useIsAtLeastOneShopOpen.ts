import { useDeliveryStore } from '@/entities/Delivery/model/store.ts'
import { computed } from 'vue'
import type { Shop } from '@/entities/Delivery/model/types.ts'
import { isShopOpen } from '@/shared/helpers/isShopOpen.ts'

export function useIsAtLeastOneShopOpen () {
  const deliveryStore = useDeliveryStore()

  const isAtLeastOneShopOpen = computed(() => {
    let result = false
    deliveryStore.shops.forEach((shop: Shop) => {
      console.log(isShopOpen(shop))
      if (isShopOpen(shop)) result = true
    })
    return result
  })

  return {
    isAtLeastOneShopOpen
  }
}
