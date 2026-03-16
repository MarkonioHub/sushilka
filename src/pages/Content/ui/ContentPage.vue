<script setup lang="ts">
import Content from './Content.vue'
import { ButtonTop } from '@/widgets/ButtonTop'
import { MenuDesk } from '@/widgets/MenuDesk'
</script>

<template>
  <MenuDesk :mod="'sticky'" />
  <Content />
  <ButtonTop />
</template>

<style scoped lang="sass"></style>
