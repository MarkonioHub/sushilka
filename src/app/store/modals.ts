import { defineStore } from "pinia"

export const useModalsStore = defineStore('modals',{
  state: () => ({
    modals: [
      { id: 'VacancyModal', status: false }
    ]
  }),
  actions: {
    toggleModal (id: string) {
      const modal = this.modals.find((modal) => modal.id === id)
      if (modal) { modal.status = !modal.status }
    },
    getModalStatus (id: string) {
      const modal = this.modals.find((modal) => modal.id === id)
      return modal?.status
    }
  }
})
