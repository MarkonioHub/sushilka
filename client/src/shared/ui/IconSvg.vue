<script setup lang="ts">
  import { defineAsyncComponent } from 'vue'

  const props = defineProps({
    name: { type: String, required: true },
  })

  const Icon = defineAsyncComponent(() => import(`@/shared/assets/icons/${props.name}.svg`))
</script>

<template>
  <Icon />
</template>

<style scoped>

</style>
