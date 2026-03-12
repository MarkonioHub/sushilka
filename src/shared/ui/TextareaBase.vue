<script setup lang="ts">
import { computed } from "vue"

const props = defineProps({
  name: { type: String, required: true },
  placeholder: { type: String },
  readonly: { type: Boolean, default: false },
  class: { type: String },
  autocomplete: { type: String },
  maxLength: { type: Number },
})

const model = defineModel()

const className = computed(() => {
  return 'textarea-base ' + props.class
})
</script>

<template>
  <textarea
    :class="className"
    :name="props.name"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    :maxLength="props.maxLength"
    :autocomplete="props.autocomplete"
    v-model="model as string"
  />
</template>

<style scoped lang="sass">
.textarea-base
  display: block
  width: 100%
  min-height: 100px
  border-radius: $border-radius
  background-color: $select-background
  border: none
  padding: 10px 16px
  font-size: 16px
</style>
