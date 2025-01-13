<script setup lang="ts">
const props = defineProps({
  to: {type: String},
  href: {type: String},
  className: {type: String},
  target: {type: String},
})
</script>

<template>
  <RouterLink :to="props.to" v-if="props.to" :class="'button-underline' + ` ${className}`">
    <slot></slot>
  </RouterLink>
  <a :href="props.href" v-else-if="props.href" :class="'button-underline' + ` ${className}`" :target="props.target">
    <slot></slot>
  </a>
  <button v-else :class="'button-underline' + ` ${className}`">
    <slot></slot>
  </button>
</template>

<style lang="sass">
.button-underline
  display: flex
  align-items: center
  transition-duration: $transition-duration
  transition-property: color
  span
    font-size: 16px
    line-height: 130%
    border-bottom: 1px dashed $black
  &:hover
    color: $orange
    span
      border-bottom: 1px dashed $black
  &.uppercase
    text-transform: uppercase
</style>
