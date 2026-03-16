<script setup lang="ts">
import { CardBase } from '@/shared/ui'
import { TitleBase } from '@/shared/ui'

const props = defineProps({
  title: { type: String },
  text: { type: String },
})
</script>

<template>
  <div class="info-box">
    <div class="cont">
      <CardBase>
        <TitleBase v-if="props.title">{{ props.title }}</TitleBase>
        <div class="info-box__text" v-if="props.text" v-html="props.text"></div>
      </CardBase>
    </div>
  </div>
</template>

<style lang="sass">
.info-box
  margin-bottom: 40px
  @include media(lg)
    margin-bottom: 20px

.info-box__area
  padding: 30px
  border-radius: $border-radius
  box-shadow: $box-shadow
  background-color: $card-background
  @include media(md)
    padding: 20px

.info-box__text
  display: flex
  flex-direction: column
  gap: 5px
  font-size: 16px
  line-height: 18px
  svg
    transform: translateY(2px)
</style>
