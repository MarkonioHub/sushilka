<script setup>
import HeaderBase from '@/widgets/HeaderBase/ui/HeaderBase.vue'
import FooterBase from '@/widgets/FooterBase/ui/FooterBase.vue'
</script>

<template>
  <HeaderBase />
  <div class="wrapper">
    <router-view></router-view>
  </div>
  <FooterBase />
</template>

<style></style>
