<script setup lang="ts">
import {type PropType, ref} from "vue"
import type { Stock } from "@/entities/Stock/model/types.ts"
import IconSvg from "@/shared/ui/IconSvg.vue";

const isVisible = ref(false)

const props = defineProps({
  stock: { type: Object as PropType<Stock>, required: true }
})
</script>

<template>
  <div class="stock-card">
    <img :src="props.stock.image" alt="" class="stock-card__image">
    <div class="stock-card__content">
      <div class="stock-card__title" @click="isVisible=!isVisible">
        {{ props.stock.title }}
        <IconSvg :name="'chevron-down'" :class="isVisible ? 'stock-card__title-icon active' : 'stock-card__title-icon'" />
      </div>
      <div :class="isVisible ? 'stock-card__transition active' : 'stock-card__transition'">
        <div class="stock-card__description">
          {{ props.stock.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.stock-card
  border-radius: $border-radius
  overflow: hidden
  width: calc(33.33% - 20px)
  box-shadow: $box-shadow
  background-color: $white
  @include media(lg)
    width: calc(50% - 10px)
  @include media(xs)
    width: calc(100%)

.stock-card__content
  padding: 12px

.stock-card__title
  font-size: 20px
  line-height: 120%
  font-weight: 500
  @include media(lg)
    position: relative
    padding-right: 30px

.stock-card__title-icon
  display: none
  width: 25px
  height: 25px
  @include media(lg)
    position: absolute
    top: 0
    right: 0
    display: block
    transition: transform $transition-duration
  &.active
    transform: rotate(180deg)

.stock-card__transition
  transition: max-height 0.5s cubic-bezier(0, 1, 0, 1)
  overflow: hidden
  @include media(lg)
    max-height: 0
    &.active
      max-height: 2000px
      transition: max-height 1s ease-in-out

.stock-card__description
  padding-top: 15px
  font-size: 16px
  line-height: 120%
  font-weight: 300

.expand-enter-active,
.expand-leave-active
  transition: height $transition-duration ease-in-out
  overflow: hidden
</style>
