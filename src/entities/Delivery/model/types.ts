import type { LngLat } from '@yandex/ymaps3-types'

export interface Shop {
  id: string
  title: string
  address: string
  startTime: string
  endTime: string
  marker: { coordinates: LngLat, title: string }
}

export interface City {
  id: string
  text: string
  shops: string[]
}

export interface AddressOption {
  properties: {
    name: string,
    description: string,
  }
}
