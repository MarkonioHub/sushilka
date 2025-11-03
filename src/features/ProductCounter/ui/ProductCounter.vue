<script setup lang="ts">
import IconSvg from "@/shared/ui/IconSvg.vue"
import { computed } from "vue"

const props = defineProps({
  name: String,
  readonly: { type: Boolean, default: true },
  minValue: { type: Number, default: 1 },
  maxValue: { type: Number, default: 20 },
})

const model = defineModel<number>()

function increment () {
  if (model.value) model.value++
}

function decrement () {
  if (model.value) model.value--
}

const disableMinus = computed(() => {
  return model.value === props.minValue
})

const disablePlus = computed(() => {
  return model.value === props.maxValue
})

const minusClass = computed(() => {
  return disableMinus.value ? 'icon-20px icon-btn disabled' : 'icon-20px icon-btn'
})

const plusClass = computed(() => {
  return disablePlus.value ? 'icon-20px icon-btn disabled' : 'icon-20px icon-btn'
})

</script>

<template>
  <div class="product-counter">
    <IconSvg :name="'minus'" :className="minusClass" @click="decrement"/>
    <input
      type="text"
      class="product-counter__value"
      :readonly="props.readonly"
      :name="props.name"
      v-model="model"
    >
    <IconSvg :name="'plus'" :className="plusClass" @click="increment" />
  </div>
</template>

<style scoped lang="sass">
.product-counter
  user-select: none
  display: flex
  align-items: center
  gap: 10px

.product-counter__value
  border: none
  outline: none
  font-size: 16px
  color: $orange
  width: 20px
  text-align: center
</style>
