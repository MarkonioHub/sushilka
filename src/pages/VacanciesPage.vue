<script setup lang="ts">
import MenuDesc from "@/widgets/MenuDesc/ui/MenuDesc.vue"
import SeoBox from "@/widgets/SeoBox/ui/SeoBox.vue"
import VacanciesList from "@/widgets/VacanciesList/ui/VacanciesList.vue"
</script>

<template>
  <MenuDesc :mod="'sticky'" />
  <VacanciesList />
  <SeoBox
    :title="'Открытые вакансии в Сушилке'"
    :description="`Здесь Вы можете ознакомиться с открытыми вакансиями в нашей сети удобных кафе «Сушилка»`"
  />
</template>

<style scoped lang="sass">

</style>
