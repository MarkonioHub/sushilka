<script setup lang="ts">
import MenuDesk from "@/widgets/MenuDesk/ui/MenuDesk.vue"
import SeoBox from "@/widgets/SeoBox/ui/SeoBox.vue"
import VacanciesList from "@/widgets/VacanciesList/ui/VacanciesList.vue"
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <VacanciesList />
  <SeoBox
    :title="'Открытые вакансии в Сушилке'"
    :description="`Здесь Вы можете ознакомиться с открытыми вакансиями в нашей сети удобных кафе «Сушилка»`"
  />
</template>

<style scoped lang="sass">

</style>
