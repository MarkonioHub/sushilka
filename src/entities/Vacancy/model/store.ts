import { defineStore } from "pinia"
import type { Vacancy } from "@/entities/Vacancy/model/types.ts"
import { fetchData } from "@/shared/lib"

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
