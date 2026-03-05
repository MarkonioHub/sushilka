<script setup lang="ts">
import InputBase from '@/shared/ui/InputBase.vue'

const props = defineProps({
  name: String,
  note: String,
})

const model = defineModel()
</script>

<template>
  <label class="switch-base">
    <InputBase
      class="switch-base__input"
      :name="props.name || ''"
      :type="'checkbox'"
      v-model="model"
    />
    <span class="switch-base__view"></span>
    <span class="switch-base__note" v-if="props.note">{{ note }}</span>
  </label>
</template>

<style scoped lang="sass">
.switch-base
  display: flex
  align-items: center
  gap: 20px
  cursor: pointer

.switch-base__input
  display: none
  &:checked ~ .switch-base__view
    background-color: $orange
    &::before
      left: 16px

.switch-base__view
  display: block
  position: relative
  width: 40px
  height: 25px
  border-radius: 30px
  background-color: $main-light
  &::before
    content: ''
    position: absolute
    top: 2px
    left: 2px
    width: 21px
    height: 21px
    border-radius: 50%
    background-color: $white
    transition: left $transition-duration

.switch-base__note
  font-size: 16px
</style>
