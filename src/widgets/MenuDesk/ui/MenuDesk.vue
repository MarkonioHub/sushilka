<script setup lang="ts">
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import BasketSmall from '@/entities/Basket/ui/BasketSmall.vue'
const { t } = useI18n()

const props = defineProps({
  mod: String,
})

const className = computed(() => {
  return props.mod ? `menu-desk menu-desk_${props.mod}` : 'menu-desk'
})

const menu = [
  { to: '/', text: computed(() => { return t('MenuDesk.home') }) },
  { to: '/stocks', text: computed(() => { return t('MenuDesk.stocks') }) },
  { to: '/reviews', text: computed(() => { return t('MenuDesk.reviews') }) },
  { to: '/vacancies', text: computed(() => { return t('MenuDesk.vacancies') }) },
  { to: '/about', text: computed(() => { return t('MenuDesk.about') }) },
]
</script>

<template>
  <nav :class="className">
    <div class="cont">
      <div class="menu-desk__area">
        <nav class="menu-desk__nav">
          <ButtonBase :to="item.to" :className="'button-underline solid'" v-for="(item, key) in menu" :key="key">
            {{ item.text }}
          </ButtonBase>
        </nav>
        <BasketSmall />
      </div>
    </div>
  </nav>
</template>

<style scoped lang="sass">
.menu-desk
  padding: 20px 0
  &_sticky
    position: sticky
    z-index: 2
    top: 0
    background-color: #fff
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05)

.menu-desk__area
  display: flex
  align-items: center
  justify-content: space-between

.menu-desk__nav
  display: flex
  gap: 25px
  @include media(xs)
    gap: 15px
</style>
