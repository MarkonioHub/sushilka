<script setup lang="ts">
import IconSvg from "@/shared/ui/IconSvg.vue"
import type { Review } from "@/entities/Review/model/types.ts"

const props = defineProps<{
  review: Review
}>()
</script>

<template>
  <div class="review-card">
    <div class="review-card__top">
      <div class="review-card__date">
        <IconSvg :name="'calendar'" class="review-card__calendar" />
        <div class="review-card__date-value">{{ props.review.date }}</div>
      </div>
      <div class="review-card__right">
        <IconSvg :name="'like'" class="review-card__reaction review-card__reaction" v-if="props.review.like" />
        <IconSvg :name="'dislike'" class="review-card__reaction review-card__reaction" v-else />
        <div class="review-card__author">{{ props.review.author }}</div>
      </div>
    </div>
    <div class="review-card__wrap">
      <img :src="props.review.image" alt="" class="review-card__image" v-if="props.review.image">
      <div class="review-card__text">
        {{ props.review.text }}
      </div>
      <div class="review-card__answer">
        <IconSvg :name="'operator'" class="review-card__operator" />
        <div class="review-card__answer-text">
          {{ props.review.answer }}
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.review-card
  box-shadow: $box-shadow
  border-radius: $border-radius
  padding: 20px
  background-color: $white

.review-card__top
  display: flex
  justify-content: space-between
  padding-bottom: 20px
  border-bottom: 1px solid $color-border

.review-card__wrap


.review-card__date
  display: flex
  align-items: center
  gap: 10px

.review-card__calendar
  flex-shrink: 0
  width: 20px
  height: 20px

.review-card__date-value
  font-size: 16px

.review-card__right
  display: flex
  align-items: center
  gap: 10px

.review-card__reaction
  width: 18px
  height: 18px

.review-card__author
  font-size: 16px
  line-height: 100%

.review-card__image
  width: 40%
  border-radius: $border-radius
  float: left
  margin-right: 20px
  margin-top: 20px
  @include media(xs)
    max-width: 300px
    width: 100%
    margin: 0 auto
    float: none

.review-card__text
  padding: 20px 0
  font-size: 16px
  line-height: 140%

.review-card__answer
  border-top: 1px solid $color-border
  padding-top: 20px
  display: flex
  align-items: flex-start
  gap: 10px

.review-card__operator
  width: 18px
  height: 18px
  flex-shrink: 0

.review-card__answer-text
  font-size: 16px
  line-height: 140%
</style>
