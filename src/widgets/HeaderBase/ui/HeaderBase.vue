<script setup lang="ts">
  import IconSvg from '@/shared/ui/IconSvg.vue'
  import ButtonUnderline from '@/shared/ui/ButtonUnderline.vue'
</script>

<template>
  <header class="header">
    <div class="cont">
      <div class="header__area">
        <div class="header__logo">
          <img src="../images/logo.png" alt="" class="header__logo-image" />
        </div>
        <div class="header__list mob-hide">
          <div class="header__item">
            <ButtonUnderline>
              <IconSvg :name="'placemark'" :className="'icon-left'" />
              <span>Киров</span>
            </ButtonUnderline>
          </div>
          <div class="header__item">
            <ButtonUnderline :className="'uppercase'">
              <IconSvg :name="'placemark'" :className="'icon-left'"/>
              <span>ru</span>
            </ButtonUnderline>
          </div>
        </div>
        <a href="tel:78332436436" class="header__phone mob-hide">+7(8332)436-436</a>
        <ButtonUnderline>
          <IconSvg :name="'login'" :className="'icon-login'" />
          <span>Войти</span>
        </ButtonUnderline>
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
  @include media(sm)
    justify-content: space-between

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
  margin-right: 40px
  margin-left: auto
  text-decoration: none
  transition-property: color
  transition-duration: $transition-duration
  &:hover
    color: $orange

.mob-hide
  @include media(sm)
    display: none

</style>
