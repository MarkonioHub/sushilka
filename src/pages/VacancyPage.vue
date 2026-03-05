<script setup lang="ts">
import VacancyContent from "@/widgets/VacancyContent/ui/VacancyContent.vue"
import MenuDesk from "@/widgets/MenuDesk/ui/MenuDesk.vue"
import VacancyModal from "@/entities/Vacancies/ui/VacancyModal.vue"
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <VacancyContent />
  <VacancyModal />
</template>

<style scoped lang="sass">

</style>
