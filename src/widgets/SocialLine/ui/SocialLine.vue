<script setup>
import { defineAsyncComponent } from "vue"

const vk = defineAsyncComponent(() => import('../images/vk.svg'))
const telegram = defineAsyncComponent(() => import('../images/telegram.svg'))
const ios = defineAsyncComponent(() => import('../images/ios.svg'))
const android = defineAsyncComponent(() => import('../images/android.svg'))
const huawei = defineAsyncComponent(() => import('../images/huawei.svg'))

const socialLineList = [
  {
    href: 'https://vk.com/sushipizzi',
    image: vk
  },
  {
    href: 'https://t.me/sushilka43',
    image: telegram
  },
  {
    href: 'https://apps.apple.com/us/app/%D1%81%D1%83%D1%88%D0%B8%D0%BB%D0%BA%D0%B0-%D1%83%D0%B4%D0%BE%D0%B1%D0%BD%D1%8B%D0%B5-%D0%BA%D0%B0%D1%84%D0%B5/id810301401?uo=4',
    image: ios
  },
  {
    href: 'https://play.google.com/store/apps/details?id=com.FoodSoul.KirovSushilkaCafeItalia&pli=1',
    image: android
  },
  {
    href: 'https://appgallery.huawei.com/app/C108983333',
    image: huawei
  },
]
</script>

<template>
  <section class="social-line">
    <div class="cont">
      <div class="social-line__area">
        <div class="social-line__text">2025 Работает на платформе <a href="#">FoodSoul</a></div>
        <div class="social-line__list">
          <a class="social-line__link" :href="item.href" v-for="(item, key) in socialLineList" :key="key">
            <component :is="item.image" alt="" class="social-line__image"></component>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.social-line
  margin-bottom: 30px
  @include media(md)
    margin-bottom: 20px

.social-line__area
  position: relative
  display: flex
  align-items: center
  justify-content: center
  @include media(md)
    flex-direction: column-reverse
    gap: 20px

.social-line__text
  position: absolute
  left: 0
  top: 50%
  transform: translateY(-50%)
  font-size: 16px
  @include media(md)
    position: static
  a
    color: $orange

.social-line__list
  min-height: 60px
  display: flex
  align-items: center
  gap: 10px
  @include media(md)
    min-height: auto

//.social-line__link

.social-line__image
  width: 23px
  height: 23px
</style>
