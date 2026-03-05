<script setup lang="ts">
import ReviewsTile from "@/widgets/ReviewsTile/ui/ReviewsTile.vue"
import MenuDesk from "@/widgets/MenuDesk/ui/MenuDesk.vue"
import SeoBox from "@/widgets/SeoBox/ui/SeoBox.vue"
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <ReviewsTile />
  <SeoBox
    :title="'Отзывы о Сушилке'",
    :description="'Здесь Вы можете посмотреть честные отзывы о нашей работе.'"
  />
</template>

<style scoped lang="sass">

</style>
