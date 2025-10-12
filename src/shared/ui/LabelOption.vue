<script setup lang="ts">
const props = defineProps({
  text: { type: String, required: true },
  name: String,
})

const selectedParam = defineModel()
</script>

<template>
  <label class="label-option">
    <input
      class="label-option__input"
      type="radio"
      :name="props.name"
      :value="props.text"
      v-model="selectedParam"
    />
    <span class="label-option__view">{{ props.text }}</span>
  </label>
</template>

<style scoped lang="sass">
.label-option
  height: 100%
  cursor: pointer

.label-option__input
  display: none
  &:checked ~ .label-option__view
    background-color: $select-background
    border: 2px solid $select-background

.label-option__view
  height: 100%
  background-color: $card-background
  display: flex
  align-items: center
  justify-content: center
  text-align: center
  border-radius: $border-radius
  border: 2px solid $color-border
  font-size: 12px
  line-height: 14px
  padding: 5px
  transition-duration: $transition-duration
  transition-property: border-color, background-color
</style>
