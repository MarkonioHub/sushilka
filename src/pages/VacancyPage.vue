<script setup lang="ts">
import VacancyContent from "@/widgets/VacancyContent/ui/VacancyContent.vue"
import MenuDesc from "@/widgets/MenuDesc/ui/MenuDesc.vue"
import VacancyModal from "@/entities/Vacancies/ui/VacancyModal.vue"
</script>

<template>
  <MenuDesc :mod="'sticky'" />
  <VacancyContent />
  <VacancyModal />
</template>

<style scoped lang="sass">

</style>
