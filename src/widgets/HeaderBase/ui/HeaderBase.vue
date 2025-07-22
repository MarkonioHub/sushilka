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
              <IconSvg :name="'placemark'" :className="'icon-left'" />
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
      <div class="header__mob">
        <div class="header__burger">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 18L20 18" stroke="#e53a24" stroke-width="2" stroke-linecap="round" />
            <path d="M4 12L20 12" stroke="#e53a24" stroke-width="2" stroke-linecap="round" />
            <path d="M4 6L20 6" stroke="#e53a24" stroke-width="2" stroke-linecap="round" />
          </svg>
        </div>
        <div class="header__note">Меню</div>
        <div class="header__btns">
          <div class="header__btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="12" cy="12" r="10" stroke="#e53a24" stroke-width="1.5" />
              <path d="M12 17V11" stroke="#e53a24" stroke-width="1.5" stroke-linecap="round" />
              <circle cx="1" cy="1" r="1" transform="matrix(1 0 0 -1 11 9)" fill="#e53a24" />
            </svg>
          </div>
          <div class="header__btn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z"
                stroke="#e53a24"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
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
  @include media(md)
    display: none

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

.header__mob
  display: none
  @include media(md)
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    min-height: 50px

.header__burger
  padding: 10px
  margin-left: -10px

.header__note
  position: absolute
  top: 50%
  left: 50%
  transform: translate(-50%, -50%)
  font-size: 18px
  font-weight: 700

.header__btns
  display: flex

.header__btn
  padding: 5px
</style>
