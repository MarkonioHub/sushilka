<script setup lang="ts">
import { storeToRefs } from "pinia"
import { useVacanciesStore } from "@/entities/Vacancies/model/store.ts"
import VacancyCard from "@/entities/Vacancies/ui/VacancyCard.vue"

const storeVacancies = useVacanciesStore()
if (storeVacancies.vacancies) storeVacancies.getVacancies()
const { vacancies } = storeToRefs(storeVacancies)
</script>

<template>
  <section class="vacancies-list">
    <div class="cont">
      <div class="vacancies-list__area">
        <VacancyCard :vacancy="vacancy" v-for="(vacancy, key) in vacancies" :key="key" v-if="vacancies" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.vacancies-list
  margin-top: 40px
  margin-bottom: 40px

.vacancies-list__area
  display: grid
  gap: 30px
  grid-template-columns: repeat(2, 1fr)
  @include media(sm)
    grid-template-columns: repeat(1, 1fr)
</style>
