<script setup>
import { useSliderOffersStore } from '@/widgets/SliderOffers/model/store.ts'
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/autoplay'

const modules = [EffectFade, Navigation, Pagination, Autoplay]
const store = useSliderOffersStore()
if (!store.slides.length) store.getSlides()
</script>

<template>
  <section class="slider">
    <div class="cont">
      <div class="slider__wrapper">
        <swiper
          :slides-per-view="1"
          :modules="modules"
          :loop="true"
          :pagination="{ el: '.slider__pagination', clickable: true }"
          :navigation="{ prevEl: '.slider__navigation_prev', nextEl: '.slider__navigation_next' }"
          :speed="300"
          :autoplay="{ delay: 5000 }"
          :space-between="20"
        >
          <swiper-slide v-for="(item, id) in store.slides" :key="id">
            <img :src="item.image" :alt="item.alt" class="slider__image" />
          </swiper-slide>
        </swiper>
        <div class="slider__pagination"></div>
        <button class="slider__navigation slider__navigation_prev">
          <svg
            fill="#ffffff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330.002 330.002"
            xml:space="preserve"
          >
            <path
              id="XMLID_103_"
              d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
              l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
              c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
            />
          </svg>
        </button>
        <button class="slider__navigation slider__navigation_next">
          <svg
            fill="#ffffff"
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 330.002 330.002"
            xml:space="preserve"
          >
            <path
              id="XMLID_103_"
              d="M233.252,155.997L120.752,6.001c-4.972-6.628-14.372-7.97-21-3c-6.628,4.971-7.971,14.373-3,21
              l105.75,140.997L96.752,306.001c-4.971,6.627-3.627,16.03,3,21c2.698,2.024,5.856,3.001,8.988,3.001
              c4.561,0,9.065-2.072,12.012-6.001l112.5-150.004C237.252,168.664,237.252,161.33,233.252,155.997z"
            />
          </svg>
        </button>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.slider
  margin-bottom: 30px
  overflow: hidden
  @include media(xs)
    margin-bottom: 10px

.slider__wrapper
  position: relative

.slider__image
  border-radius: 10px

//.slider__pagination

.slider__navigation
  width: 45px
  height: 45px
  border-radius: 50%
  position: absolute
  z-index: 1
  top: 50%
  transform: translateY(-50%)
  background: #2e2e2e
  opacity: 0.5
  @include media(lg)
    display: none
  &_prev
    transform: translateX(-50%) translateY(-50%) rotate(-180deg)
    left: 0
  &_next
    right: 0
    transform: translateX(50%) translateY(-50%)
  svg
    width: 20px
    height: 20px
</style>
