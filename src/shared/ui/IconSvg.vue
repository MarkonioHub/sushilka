<script setup lang="ts">
import { defineAsyncComponent } from 'vue'

const props = defineProps({
  name: { type: String, required: true },
  className: { type: String, default: '' },
  width: { type: String },
  height: { type: String },
  margin: { type: String },
})

const Icon = defineAsyncComponent(() => import(`@/shared/assets/icons/${props.name}.svg`))
</script>

<template>
  <Icon
    :class="'' + `${className}`"
    :style="`width: ${width}; height: ${height}; margin: ${margin};`"
  />
</template>

<style scoped lang="sass">
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

.icon-grey-fill
  *
    fill: $grey

.icon-orange-fill
  fill: $orange

.icon-orange-stroke
  *
    stroke: $orange

.icon-close
  transition-duration: $transition-duration
  transition-property: opacity
  &:hover
    opacity: 0.8

</style>
