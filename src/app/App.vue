<script setup lang="ts">
import HeaderBase from '@/widgets/HeaderBase/ui/HeaderBase.vue'
import FooterBase from '@/widgets/FooterBase/ui/FooterBase.vue'
import InfoMessages from "@/widgets/InfoMessages/ui/InfoMessages.vue"
</script>

<template>
  <HeaderBase />
  <div class="wrapper">
    <router-view></router-view>
  </div>
  <FooterBase />
  <InfoMessages />
</template>

<style></style>
