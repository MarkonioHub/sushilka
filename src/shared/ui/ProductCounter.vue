<script setup lang="ts">
import IconSvg from "@/shared/ui/IconSvg.vue"
import { computed } from "vue"
import InputBase from '@/shared/ui/InputBase.vue'

const props = defineProps({
  name: { type: String, required: true },
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
  return disableMinus.value ? 'icon-btn disabled' : 'icon-btn'
})

const plusClass = computed(() => {
  return disablePlus.value ? 'icon-btn disabled' : 'icon-btn'
})

</script>

<template>
  <div class="product-counter">
    <IconSvg :name="'minus'" :className="minusClass" @click="decrement" :width="'20px'" :height="'20px'" />
    <InputBase
      type="text"
      class="product-counter__value"
      :readonly="props.readonly"
      :name="props.name"
      v-model="model"
    />
    <IconSvg :name="'plus'" :className="plusClass" @click="increment" :width="'20px'" :height="'20px'" />
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
