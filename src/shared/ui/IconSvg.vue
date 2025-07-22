<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  className: { type: String },
})

const Icon = defineAsyncComponent(() => import(`@/shared/assets/icons/${props.name}.svg`))
</script>

<template>
  <Icon :class="'icon' + ` ${className}`" />
</template>

<style scoped lang="sass">
.icon
  width: 16px
  height: 16px
.icon-grey
  fill: $grey
.icon-left
  margin-right: 8px
  width: 16px
  height: 16px
  fill: $orange
.icon-login
  margin-right: 10px
  width: 32px
  height: 32px
  fill: $orange
</style>
