import type { Shop } from '@/entities/Shop/model/types.ts'

export function isShopOpen(shop: Shop): boolean {
  const timeStart = +shop.startTime.slice(0, 2) + +shop.startTime.slice(3, 5) / 100
  const timeEnd = +shop.endTime.slice(0, 2) + +shop.endTime.slice(3, 5) / 100
  const currentTime = +new Date().getHours() + +new Date().getMinutes() / 100
  return timeStart <= currentTime && currentTime <= timeEnd
}
