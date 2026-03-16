<script setup lang="ts">
import ReviewsTile from './ReviewsTile.vue'
import { MenuDesk } from '@/widgets/MenuDesk'
import { SeoBox } from '@/widgets/SeoBox'
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <ReviewsTile />
  <SeoBox
    :title="'Отзывы о Сушилке'"
    ,
    :description="'Здесь Вы можете посмотреть честные отзывы о нашей работе.'"
  />
</template>

<style scoped lang="sass"></style>
