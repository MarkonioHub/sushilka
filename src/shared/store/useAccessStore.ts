import { defineStore } from "pinia"

export const useAccessStore = defineStore('access',{
  state: () => ({
    checkoutPageAccess: false,
  })
})
