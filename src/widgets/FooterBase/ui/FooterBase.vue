<script setup lang="ts">
import {useContentPagesStore} from "@/widgets/ContentPage/model/store.ts";
import {storeToRefs} from "pinia";

const store = useContentPagesStore()
const { pages } = storeToRefs(store)
</script>

<template>
  <footer class="footer">
    <div class="cont">
      <div class="footer__list">
        <RouterLink :to="`/content/${page.slug}`" class="footer__link" activeClass="active" v-for="(page) in pages">
          {{ page.name }}
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="sass">
.footer
  background: #f1f1f1
  @include media(md)
    padding-bottom: 60px

.footer__list
  display: flex
  justify-content: space-between
  gap: 0 20px
  padding: 5px 0
  flex-wrap: wrap
  @include media(md)
    flex-direction: column
    align-items: center
    padding: 20px 0

.footer__link
  font-size: 14px
  color: $main
  padding: 5px 0
  transition: color $transition-duration
  &:hover
    text-decoration: none
    color: $orange
  &.active
    color: $orange
    text-decoration: underline
</style>
