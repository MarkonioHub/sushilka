<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  className: { type: String, default: '' },
})

const Icon = defineAsyncComponent(() => import(`@/shared/assets/icons/${props.name}.svg`))
</script>

<template>
  <Icon :class="'' + `${className}`" />
</template>

<style scoped lang="sass">
.icon
  width: 16px
  height: 16px

.icon-20px
  width: 20px
  height: 20px

.icon-btn
  cursor: pointer
  transition-duration: 0.1s
  transition-property: transform
  &:active
    transform: scale(1.2)
  &.disabled
    cursor: none
    pointer-events: none
    opacity: 0.3

.icon-grey
  fill: $grey

.icon-margin-right
  margin-right: 8px

.icon-orange
  fill: $orange

.icon-login
  margin-right: 10px
  width: 32px
  height: 32px
  fill: $orange

.icon-close
  transition-duration: $transition-duration
  transition-property: opacity
  &:hover
    opacity: 0.8

</style>
