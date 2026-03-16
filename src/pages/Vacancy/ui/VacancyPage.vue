<script setup lang="ts">
import VacancyContent from './VacancyContent.vue'
import { MenuDesk } from '@/widgets/MenuDesk'
import VacancyModal from '@/entities/Vacancy/ui/VacancyModal.vue'
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <VacancyContent />
  <VacancyModal />
</template>

<style scoped lang="sass"></style>
