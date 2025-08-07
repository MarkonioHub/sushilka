<script setup lang="ts">
import IconSvg from "@/shared/ui/IconSvg.vue"
</script>

<template>
  <div class="modal-custom">
    <div class="modal-custom__layer" @click="$emit('close')"></div>
    <div class="modal-custom__area">
      <IconSvg :name="'close'" class="modal-custom__close" @click="$emit('close')" />
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="sass">
.modal-custom
  position: fixed
  z-index: 99999
  top: 0
  right: 0
  bottom: 0
  left: 0
  overflow-y: auto
  padding: 50px
  text-align: center
  @include media(lg)
    padding: 40px 10px
  &::before
    content: ''
    display: inline-block
    height: 100%
    vertical-align: middle
    margin-right: -4px

.modal-custom__layer
  position: fixed
  top: 0
  right: 0
  bottom: 0
  left: 0
  cursor: pointer
  background-color: #0009

.modal-custom__area
  position: relative
  z-index: 1
  max-width: 730px
  width: 100%
  display: inline-flex
  text-align: left
  vertical-align: middle
  padding: 20px
  border-radius: $border-radius
  background-color: #ffffff
  @include media(lg)
    padding: 10px

.modal-custom__close
  position: absolute
  top: 2px
  right: -40px
  width: 24px
  height: 24px
  cursor: pointer
  @include media(lg)
    top: -30px
    right: 0
  &:hover
    opacity: 0.8
</style>
