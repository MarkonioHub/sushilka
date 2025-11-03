<script setup lang="ts">
import { useContentPagesStore } from "@/widgets/ContentPage/model/store.ts"
import { computed, onMounted, onUpdated } from "vue"
import { useRoute } from "vue-router"

const route = useRoute()
const contentPageSlug = computed(() => {
  return route.params.contentSlug
})

const store = useContentPagesStore()
const currentContentPage = computed(() => {
  return store.getCurrentContentPage(contentPageSlug.value as string)
})

function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}

onMounted(() => {
  scrollToTop()
})

onUpdated(() => {
  scrollToTop()
})

</script>

<template>
  <div class="content-page">
    <div class="cont">
      <div class="content-page__area" v-html="currentContentPage?.content"></div>
    </div>
  </div>
</template>

<style lang="sass">
.content-page__area
  margin: 20px 0 80px
  font-size: 14px
  line-height: 120%
  @include media(lg)
    margin: 20px 0 40px
  h1
    font-size: 28px
    line-height: 120%
  h4
    font-size: 14px
    line-height: 120%
</style>
