<script setup lang="ts">
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { computed, ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

const props = defineProps({
  mod: String,
})

const className = computed(() => {
  return props.mod ? `menu-desc menu-desc_${props.mod}` : 'menu-desc'
})

const menu = [
  { to: '/', text: computed(() => { return t('MenuDesc.home') }) },
  { to: '/stocks', text: computed(() => { return t('MenuDesc.stocks') }) },
  { to: '/reviews', text: computed(() => { return t('MenuDesc.reviews') }) },
  { to: '/vacancies', text: computed(() => { return t('MenuDesc.vacancies') }) },
  { to: '/about', text: computed(() => { return t('MenuDesc.about') }) },
]
</script>

<template>
  <nav :class="className">
    <div class="cont">
      <nav class="menu-desc__nav">
        <ButtonBase :to="item.to" :className="'button-underline solid'" v-for="(item, key) in menu" :key="key">
          {{ item.text }}
        </ButtonBase>
      </nav>
    </div>
  </nav>
</template>

<style scoped lang="sass">
.menu-desc
  padding: 30px 0
  @include media(lg)
    padding: 20px 0
  &_sticky
    position: sticky
    z-index: 1
    top: 0
    background-color: #fff
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.05)

.menu-desc__nav
  display: flex
  gap: 25px
  @include media(xs)
    gap: 15px
</style>
