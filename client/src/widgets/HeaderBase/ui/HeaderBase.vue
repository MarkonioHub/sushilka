<script setup lang="ts">
import IconSvg from '@/shared/ui/IconSvg.vue'
</script>

<template>
  <header class="header">
    <div class="header__cont cont">
      <div class="header__area">
        <div class="header__logo">
          <img src="../images/logo.png" alt="" class="header__logo-image" />
        </div>
        <div class="header__list">
          <div class="header__item">
            <IconSvg :name="'placemark'" class="header__item-icon"/>
            <div class="header__item-span">Киров</div>
          </div>
          <div class="header__item">
            <img src="" alt="" class="header__item-icon">
            <div class="header__item-span">ru</div>
          </div>
        </div>
        <a href="tel:78332436436" class="header__phone">+7(8332)436-436</a>
        <div class="header__login">Войти</div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="sass">
.header
  box-shadow: 0 0 15px rgb(0 0 0 / .1)
  background: $white

.header__area
  padding: 15px 0
  display: flex
  align-items: center
  font-size: 16px

.header__logo
  margin-right: 40px
  flex-shrink: 0
  width: 145px
  height: 36px

.header__logo-image
  height: 100%
  object-fit: cover

.header__list
  display: flex
  align-items: center
  gap: 0 30px

.header__item
  display: flex
  align-items: center

.header__item-icon
  margin-right: 10px
  flex-shrink: 0
  width: 20px
  height: 20px
  fill: $orange

.header__item-span
  line-height: 130%
  border-bottom: 1px dashed $black

.header__phone
  margin-left: auto

.header__login
  margin-left: 40px

</style>
