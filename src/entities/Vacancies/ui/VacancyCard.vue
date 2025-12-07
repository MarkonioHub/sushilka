<script setup lang="ts">
import { formatPrice } from "@/shared/helpers/formatPrice.ts"
import type { Vacancy } from "@/entities/Vacancies/model/types.ts"
import type { PropType } from "vue"

const props = defineProps({
  vacancy: {type: Object as PropType<Vacancy>, required: true}
})
</script>

<template>
  <RouterLink class="vacancy-card" :to="`vacancies/${props.vacancy.slug}`">
    <img :src="props.vacancy.image" alt="" class="vacancy-card__image">
    <div class="vacancy-card__box">
      <div class="vacancy-card__name">{{ props.vacancy.name }}</div>
      <div class="vacancy-card__salary">
        От {{formatPrice(props.vacancy.salary)}}
      </div>
    </div>
  </RouterLink>
</template>

<style scoped lang="sass">
.vacancy-card
  border-radius: $border-radius
  box-shadow: $box-shadow
  overflow: hidden
  display: flex
  text-decoration: none
  transition: box-shadow $transition-duration
  &:hover
    box-shadow: $box-shadow-hover

.vacancy-card__image
  flex-shrink: 0
  width: 300px
  @include media(lg)
    width: 200px
  @include media(xs)
    width: 120px

.vacancy-card__box
  padding: 12px 15px 15px 15px
  display: flex
  flex-direction: column
  justify-content: space-between
  @include media(xs)
    padding: 10px

.vacancy-card__name
  font-size: 20px
  line-height: 24px
  @include media(xs)
    font-size: 16px
    line-height: 18px

.vacancy-card__salary
  font-size: 20px
  color: $orange
  @include media(xs)
    font-size: 16px
</style>
