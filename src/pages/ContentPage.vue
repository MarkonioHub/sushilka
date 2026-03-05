<script setup lang="ts">
import ContentPage from "@/widgets/ContentPage/ui/ContentPage.vue"
import ButtonTop from "@/shared/ui/ButtonTop.vue"
import MenuDesk from "@/widgets/MenuDesk/ui/MenuDesk.vue"
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <ContentPage />
  <ButtonTop />
</template>

<style scoped lang="sass"></style>
