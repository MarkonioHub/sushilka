<script setup lang="ts">
import { useTemplateRef, onMounted, onUnmounted } from 'vue'
import { useBasketStore } from "@/entities/Basket/model/store.ts"
import { storeToRefs } from "pinia"

const basket = useBasketStore()
const { productsBasket } = storeToRefs(basket)

const buttonTop = useTemplateRef('button-top')
let lastScrollTop = 0
let isScrollDown = true

onMounted(() => {
  window.addEventListener('scroll', checkScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', checkScroll)
})

function checkIsScrollDown () {
  const st = window.scrollY
  if (st > lastScrollTop) {
    isScrollDown = true
  } else if (st < lastScrollTop) {
    isScrollDown = false
  }
  lastScrollTop = st <= 0 ? 0 : st
}

function toggleButtonTop () {
  if (window.scrollY > 400 && !isScrollDown) {
    buttonTop?.value?.classList.add('active')
  } else {
    buttonTop?.value?.classList.remove('active')
  }
}

function checkScroll () {
  checkIsScrollDown()
  toggleButtonTop()
}

function scrollToTop () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
}
</script>

<template>
  <button :class="productsBasket.length ? 'button-top button-top_offset' : 'button-top'" @click="scrollToTop" ref="button-top">
    <svg
      fill="#ffffff"
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 330.002 330.002"
      xml:space="preserve">
      <path
        id="XMLID_103_"
        d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
        l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
        c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"/>
    </svg>
  </button>
</template>

<style scoped lang="sass">
.button-top
  display: flex
  align-items: center
  justify-content: center
  position: fixed
  z-index: 5
  bottom: 66px
  right: 40px
  transform: rotate(-90deg)
  width: 58px
  height: 58px
  border-radius: 15px
  background-color: $orange
  opacity: 0
  transition-property: opacity
  transition-duration: $transition-duration
  @include media(lg)
    border-radius: 6px
    width: 30px
    height: 30px
    bottom: 20px
    right: 10px
  svg
    width: 25px
    height: 25px
    @include media(lg)
      width: 18px
      height: 18px
  &.active
    opacity: 1
  &_offset
    @include media(lg)
      bottom: 80px
</style>
