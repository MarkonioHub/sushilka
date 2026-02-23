import type { LngLat } from '@yandex/ymaps3-types'

export interface Shop {
  id: string
  title: string
  address: string
  startTime: string
  endTime: string
  marker: { coordinates: LngLat, title: string }
}
