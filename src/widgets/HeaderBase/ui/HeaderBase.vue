<script setup lang="ts">
import IconSvg from '@/shared/ui/IconSvg.vue'
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { useModalsStore } from "@/app/store/modals.ts"

const modalsStore = useModalsStore()
</script>

<template>
  <header class="header">
    <div class="cont">
      <div class="header__area">
        <RouterLink to="/" class="header__logo">
          <img src="@/shared/assets/images/logo.png" alt="" class="header__logo-image" />
        </RouterLink>
        <div class="header__list">
          <div class="header__item">
            <ButtonBase :className="'button-underline'">
              <IconSvg
                :name="'placemark'"
                :className="'icon-orange-fill'"
                :margin="'0 8px 0 0'"
                :width="'16px'" :height="'16px'"
              />
              <span>Киров</span>
            </ButtonBase>
          </div>
          <div class="header__item">
            <ButtonBase :className="'button-underline uppercase'">
              <IconSvg
                :name="'placemark'"
                :className="'icon-orange-fill'"
                :margin="'0 8px 0 0'"
                :width="'16px'" :height="'16px'"
              />
              <span>ru</span>
            </ButtonBase>
          </div>
        </div>
        <a href="tel:78332436436" class="header__phone">
          +7(8332)436-436
          <IconSvg :name="'phone'" :className="'header__phone-icon'" />
        </a>
        <ButtonBase :className="'header__login button-underline'" @click="() => modalsStore.toggleModal('LoginModal')" >
          <IconSvg :name="'login'" :className="'icon-orange-fill'" :width="'32px'"
                   :height="'32px'" :margin="'0 10px 0 0'" />
          <span>Войти</span>
        </ButtonBase>
      </div>
      <div class="header__mob">
        <div class="header__burger" @click="modalsStore.toggleModal('MobileMenu')">
          <IconSvg :name="'burger'" :className="'icon-orange-stroke'" :width="'24px'" :height="'24px'" />
        </div>
        <div class="header__btns">
          <div class="header__btn" @click="() => modalsStore.toggleModal('DeliveryModal')">
            <IconSvg :name="'info'" :className="'icon-orange-stroke'" :width="'24px'" :height="'24px'" />
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
  @include media(md)
    position: relative

.header__area
  padding: 15px 0
  display: flex
  align-items: center
  font-size: 16px
  @include media(md)
    padding: 0
    position: relative

.header__logo
  margin-right: 40px
  flex-shrink: 0
  width: 145px
  height: 36px
  @include media(md)
    position: absolute
    top: calc(50% + 25px)
    left: 50%
    transform: translate(-50%, -50%)

.header__logo-image
  height: 100%
  object-fit: cover

.header__list
  display: flex
  align-items: center
  gap: 0 30px
  @include media(md)
    display: none

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
  @include media(md)
    margin: 0
    overflow: hidden
    width: 35px
    height: 35px
    position: absolute
    top: 6px
    right: 35px
    color: transparent
  &:hover
    color: $orange
    @include media(md)
      color: transparent

.header__phone-icon
  display: none
  @include media(md)
    display: block
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    width: 25px
    height: 25px

.header__login
  @include media(md)
    display: none

.header__mob
  display: none
  @include media(md)
    position: relative
    display: flex
    justify-content: space-between
    align-items: center
    min-height: 50px
    pointer-events: none

.header__burger
  cursor: pointer
  padding: 10px
  margin-left: -10px
  @include media(md)
    pointer-events: all

.header__btns
  display: flex

.header__btn
  cursor: pointer
  padding: 5px
  @include media(md)
    pointer-events: all
</style>

<style lang="sass">
.header__phone-icon path
  fill: $orange
</style>
