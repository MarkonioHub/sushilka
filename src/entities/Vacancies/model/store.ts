import { defineStore } from "pinia"
import type { Vacancy } from "@/entities/Vacancies/model/types.ts"
import { fetchData } from "@/shared/helpers/fetchData.ts"

export const useVacanciesStore = defineStore('vacancies', {
  state: () => ({
    vacancies: [] as Vacancy[],
  }),
  actions: {
    async getVacancies() {
      this.vacancies = await fetchData<Vacancy[]>('vacancies')
    },
    getCurrentVacancy(slug: string) {
      return this.vacancies.find((vacancy) => vacancy.slug === slug)
    }
  }
})
