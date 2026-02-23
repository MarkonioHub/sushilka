<script setup lang="ts">
import CardBase from "@/shared/ui/CardBase.vue"

const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <section class="seo-box">
    <div class="cont">
      <CardBase class="seo-box__area">
        <h1 class="seo-box__title">{{props.title}}</h1>
        <p class="seo-box__description">{{props.description}}</p>
      </CardBase>
    </div>
  </section>
</template>

<style scoped lang="sass">
.seo-box
  margin-top: auto
  margin-bottom: 20px

.seo-box__area
  display: flex
  align-items: center
  @include media(sm)
    display: block

.seo-box__title
  padding-right: 40px
  font-size: 20px
  line-height: 26px
  font-weight: 400
  flex-shrink: 0
  max-width: 270px
  width: 100%
  text-align: center
  @include media(sm)
    margin-bottom: 20px
    padding-right: 0
    max-width: 100%
    text-align: left

.seo-box__description
  padding: 10px 0 10px 40px
  font-size: 16px
  line-height: 1.6
  border-left: 1px solid $main
  @include media(sm)
    padding: 0
    border: none
</style>
