<script setup>
const props = defineProps({
  text: String,
  name: String,
  checked: Boolean,
  modelValue: String
})

const emit = defineEmits(['update:modelValue'])

function updateValue (newValue) {
  emit('update:modelValue', newValue)
}
</script>

<template>
  <label class="label-option">
    <input class="label-option__input" type="radio"
      :name="props.name"
      :value="props.text"
      :checked="modelValue === props.text"
      @change="updateValue(props.text)"
    />
    <span class="label-option__view">{{ props.text }}</span>
  </label>
</template>

<style scoped lang="sass">
.label-option
  height: 100%
  cursor: pointer
  .label-option__input:checked ~ .label-option__view
    background-color: $select-background
    border: 2px solid $select-background

.label-option__input
  display: none

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
