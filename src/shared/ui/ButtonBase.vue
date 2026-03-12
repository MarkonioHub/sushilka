<script setup lang="ts">
const props = defineProps({
  to: { type: String },
  href: { type: String },
  className: { type: String, default: '' },
  target: { type: String },
  disabled: { type: Boolean, default: false },
})
</script>

<template>
  <RouterLink
    :to="props.to"
    v-if="props.to"
    :class="props.disabled ? `button-base ${className} disabled` : `button-base ${className}`"
  >
    <slot></slot>
  </RouterLink>
  <a
    :href="props.href"
    v-else-if="props.href"
    :class="props.disabled ? `button-base ${className} disabled` : `button-base ${className}`"
    :target="props.target"
  >
    <slot></slot>
  </a>
  <button v-else :class="`button-base ${className}`" :disabled="props.disabled">
    <slot></slot>
  </button>
</template>

<style lang="sass">
.button-base
  &.disabled
    pointer-events: none
    opacity: 0.3

.button-orange
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  text-decoration: none
  padding: 6px 12px
  font-size: 14px
  line-height: 100%
  background-color: #e53a24
  color: #ffffff
  border-radius: $border-radius
  transition-property: background-color
  transition-duration: $transition-duration
  &:hover
    background-color: #dd1700
  &:disabled
    pointer-events: none
    opacity: 0.3
  &_big
    padding: 16px 10px 14px
    border-radius: 30px
    font-size: 18px
    font-weight: 700
    text-transform: uppercase
  &_middle
    padding: 13px 10px
    text-transform: uppercase
    border-radius: 30px

.button-underline
  display: flex
  align-items: center
  text-decoration: none
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
  &.solid
    border-bottom: 1px solid $black
  &.active
    color: $orange
    span
      border-bottom: 1px dashed $orange
  &.solid.active
    border-bottom: 1px solid $orange

.button-red
  background-color: $red
  color: $white
  text-transform: uppercase
  font-size: 16px
  line-height: 100%
  border-radius: $border-radius-button
  padding: 15px
  display: block
  text-align: center
  text-decoration: none

.button-blue
  background-color: $blue
  color: $white
  text-transform: uppercase
  font-size: 16px
  line-height: 100%
  border-radius: $border-radius-button
  padding: 15px
  display: block
  text-align: center
  text-decoration: none

</style>
