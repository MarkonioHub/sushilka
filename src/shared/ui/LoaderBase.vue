<script setup lang="ts">
import { computed, ref } from "vue"

const loader = ref(null)
defineExpose({ loader })

const props = defineProps({
  visibility: Boolean,
  type: String
})

const className = computed(() => {
  let result = props.visibility ? 'loader loader_visible' : 'loader'
  props.type ? result += ` loader_${props.type}` : false
  return result
})
</script>

<template>
  <div :class=className ref="loader"></div>
</template>

<style scoped lang="sass">
.loader
  position: absolute
  margin: 30px auto
  left: 50%
  transform: translateX(-50%)
  width: 48px
  height: 48px
  border: 5px solid $orange
  border-bottom-color: transparent
  border-radius: 50%
  display: block
  box-sizing: border-box
  opacity: 0
  transition: opacity $transition-duration
  animation: rotation 1s linear infinite
  @keyframes rotation
    0%
      transform: translateX(-50%) rotate(0deg)
    100%
      transform: translateX(-50%) rotate(360deg)
  &_visible
    opacity: 1
    position: relative
    left: 24px
  &_fixed
    position: fixed
    top: 40%
    left: 50%
</style>
