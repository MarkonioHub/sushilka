<script setup lang="ts">
import { computed } from "vue"

const props = defineProps({
  type: { type: String, required: true },
  name: { type: String, required: true },
  placeholder: { type: String },
  readonly: { type: Boolean, default: false },
  class: { type: String },
  accept: { type: String },
  autocomplete: { type: String },
})
const model = defineModel()

const className = computed(() => {
  return 'input-base ' + props.class
})
</script>

<template>
  <input
    :class="className"
    :type="props.type"
    :name="props.name"
    :placeholder="props.placeholder"
    :readonly="props.readonly"
    :accept="props.accept"
    :autocomplete="props.autocomplete"
    v-model="model"
  />
</template>

<style scoped lang="sass">

</style>
