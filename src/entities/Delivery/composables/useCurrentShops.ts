import { useDeliveryStore } from '@/entities/Delivery'
import { computed } from 'vue'
import { storeToRefs } from 'pinia'

export function useCurrentShops () {
  const deliveryStore = useDeliveryStore()
  const { shopsAll, deliveryCity } = storeToRefs(deliveryStore)

  const currentShops = computed(() => {
    return shopsAll.value.filter(shop => deliveryCity.value?.shops?.includes(shop.id))
  })

  return {
    currentShops
  }
}
