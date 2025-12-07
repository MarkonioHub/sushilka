<script setup lang="ts">
const props = defineProps({
  title: { type: String, required: true },
  description: { type: String, required: true },
})
</script>

<template>
  <section class="seo-box">
    <div class="cont">
      <div class="seo-box__area">
        <h1 class="seo-box__title">{{props.title}}</h1>
        <p class="seo-box__description">{{props.description}}</p>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.seo-box
  margin-top: auto
  margin-bottom: 20px

.seo-box__area
  padding: 30px
  display: flex
  align-items: center
  background-color: $card-background
  box-shadow: $box-shadow
  border-radius: $border-radius
  @include media(md)
    padding: 20px
  @include media(sm)
    display: block

.seo-box__title
  font-size: 20px
  font-weight: 400
  flex-shrink: 0
  max-width: 270px
  width: 100%
  text-align: center
  @include media(sm)
    margin-bottom: 20px
    max-width: 100%
    text-align: left

.seo-box__description
  padding: 10px 0 10px 40px
  font-size: 16px
  line-height: 1.6
  border-left: 1px solid #333333
  @include media(sm)
    padding: 0
    border: none
</style>
