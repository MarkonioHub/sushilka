<script setup lang="ts">
import { computed, ref } from "vue"
import { VueDatePicker } from '@vuepic/vue-datepicker'
import { ru } from "date-fns/locale"
import IconSvg from "@/shared/ui/IconSvg.vue"
import { usePhoneMask } from "@/shared/composables/usePhoneMask.ts"
import InputBase from "@/shared/ui/InputBase.vue"
import '@vuepic/vue-datepicker/dist/main.css'

const props = defineProps({
  type: { type: String, required: true },
  name: { type: String, required: true },
  icon: { type: String },
  note: { type: String },
  placeholder: { type: String },
  required: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  options: { type: Array<string> },
})

const isOpen = ref(false)
const model = defineModel()

const className = computed(() => {
  return `${classNameRequired.value} ${classNameType.value} ${classNameIsOpen.value}`
})

const classNameRequired = computed(() => {
  if (props.type === 'text' && props.required && !model.value) {
    return 'label-with-icon_required'
  }
  if (props.type === 'tel' && props.required && (model.value as string).length !== 18) {
    return 'label-with-icon_required'
  }
  if (props.type === 'date' && props.required && !model.value) {
    return 'label-with-icon_required'
  }
  return ''
})

const classNameType = computed(() => {
  return props.type ? `label-with-icon_${props.type}` : ''
})

const classNameIsOpen = computed(() => {
  return isOpen.value ? `label-with-icon_select-open` : ''
})

const classNameLabelFieldBox = computed(() => {
  return !model.value && props.type === 'date' ? `label-with-icon__box_value-empty` : ''
})

function toggleSelect () {
  isOpen.value = !isOpen.value
}

function setSelectValue (value: string) {
  isOpen.value = false
  model.value = value
}

function closeSelect () {
  isOpen.value = false
}

function inputHandler (e: Event) {
  if (props.type === 'tel') {
    model.value = usePhoneMask(e)
  }
}

defineOptions({
  inheritAttrs: false
})
</script>

<template>
  <div :class="`label-with-icon ${className}`" @click="toggleSelect" v-click-outside="closeSelect">
    <IconSvg :name="props.icon" v-if="props.icon" class="label-with-icon__icon" :width="'18px'" :height="'18px'" />
    <div :class="`label-with-icon__box ${classNameLabelFieldBox}`">
      <InputBase
        class="label-with-icon__input"
        :type="props.type"
        :name="props.name"
        :note="props.note"
        :placeholder="placeholder"
        :readonly="props.readonly"
        v-if="props.type !== 'date'"
        @input="inputHandler"
        v-bind="$attrs"
        v-model="model"
      />
      <VueDatePicker
        class="label-with-icon__date"
        v-model="model as string"
        v-if="props.name === 'date'"
        :time-config="{ enableTimePicker: false }"
        :locale="ru"
        auto-apply
      />
      <span class="label-with-icon__note" v-if="props.note">{{props.note}}</span>
      <div class="label-with-icon__select" v-if="props.type === 'select'">
        <div
          :class="model === option ? 'label-with-icon__select-option label-with-icon__select-option_active' : 'label-with-icon__select-option'"
          v-for="(option, key) in props.options" :key="key" @click="(e: Event) => {e.stopPropagation(); setSelectValue(option)}">
          {{ option }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.label-with-icon
  position: relative
  &_required
    .label-with-icon__note
      color: $orange
      &::after
        content: ' *'
  &_select
    cursor: pointer
    .label-with-icon__input
      cursor: pointer
  &_select-open
    .label-with-icon__select
      max-height: 999px

.label-with-icon__icon
  position: absolute
  z-index: 1
  left: 18px
  top: 50%
  opacity: 0.3
  pointer-events: none
  transform: translateY(-50%)
  @include media(xs)
    left: 10px

.label-with-icon__box
  position: relative
  &_value-empty
    .label-with-icon__note
      transform: translateY(21px) scale(1)

.label-with-icon__input
  display: block
  width: 100%
  font-size: 16px
  padding: 30px 0 10px 50px
  border-bottom: 1px solid $color-border
  @include media(xs)
    padding: 30px 0 10px 40px
  &:placeholder-shown ~ .label-with-icon__note
    transform: translateY(21px) scale(1)
  &:focus ~ .label-with-icon__note
    transform: translateY(10px) scale(0.8)

.label-with-icon__date
  .dp__icon
    display: none
  .dp__input
    border: none
    border-bottom: 1px solid $color-border
    padding: 26px 0 10px 50px
    font-family: $font-main
    @include media(xs)
      padding: 26px 0 10px 40px
  .dp--menu-wrapper
    width: 100%
    top: 100% !important
    transform: translate(0, -10px) !important
  .dp__selection_preview
    font-size: 16px

.label-with-icon__note
  position: absolute
  top: 0
  left: 50px
  color: $grey
  font-size: 16px
  pointer-events: none
  transform: translateY(10px) scale(0.8)
  transform-origin: left
  transition: transform $transition-duration
  @include media(xs)
    left: 40px

.label-with-icon__select
  position: absolute
  z-index: 5
  left: 15px
  right: 15px
  top: 100%
  border-radius: $border-radius
  box-shadow: $box-shadow
  background: #ffffff
  max-height: 0
  overflow: hidden
  transition: max-height 0.2s
  cursor: default
  @include media(lg)
    left: 10px
    right: 10px

.label-with-icon__select-option
  text-align: center
  font-size: 16px
  line-height: 100%
  padding: 10px
  cursor: pointer
  transition: background-color $transition-duration
  &:hover
    background-color: $background
  &_active
    cursor: default
    pointer-events: none
    background-color: $grey
    color: $white
    &:hover
      background-color: $grey

</style>
