<script setup lang="ts">
import { useReviewsStore } from "@/entities/Review/model/store.ts"
import { storeToRefs } from "pinia"
import { onMounted, ref } from "vue"
import ReviewCard from "@/entities/Review/ui/ReviewCard.vue"
import LoaderBase from "@/shared/ui/LoaderBase.vue"

interface LoaderBase {
  loader: HTMLElement
}

const store = useReviewsStore()
const { reviews, end } = storeToRefs(store)

const loader = ref<LoaderBase | null>(null)
const loading = ref(true)

onMounted(async () => {
  window.addEventListener("scroll", loadReviews, { passive: true })
  await store.getReviews()
  loading.value = false
})

async function loadReviews () {
  if (end.value) {
    window.removeEventListener("scroll", loadReviews)
  } else {
    if (loader.value && !loading.value) {
      if (window.innerHeight - loader.value.loader.getBoundingClientRect().bottom > 100) {
        loading.value = true
        await store.getReviews()
        loading.value = false
      }
    }
  }
}

</script>

<template>
  <section class="reviews-tile">
    <div class="cont">
      <div class="reviews-tile__area">
        <ReviewCard v-for="(review, key) in reviews" :review="review" :key="key" />
      </div>
      <LoaderBase ref="loader" :visibility="loading" />
    </div>
  </section>
</template>

<style scoped lang="sass">
.reviews-tile
  margin: 20px 0 80px
  @include media(lg)
    margin: 20px 0 40px

.reviews-tile__area
  gap: 30px
  display: grid
  grid-template-columns: repeat(2, 1fr)
  @include media(md)
    gap: 20px
    grid-template-columns: repeat(1, minmax(180px,1fr))

</style>
