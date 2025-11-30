<script setup lang="ts">
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { computed } from "vue"

const props = defineProps({
  mod: String,
})

const className = computed(() => {
  return props.mod ? `menu-desc menu-desc_${props.mod}` : 'menu-desc'
})
</script>

<template>
  <nav :class=className>
    <div class="cont">
      <nav class="menu-desc__nav">
        <ButtonBase to="/" :className="'button-underline solid'">Главная</ButtonBase>
        <ButtonBase to="/stocks" :className="'button-underline solid'">Акции</ButtonBase>
        <ButtonBase to="/reviews" :className="'button-underline solid'">Отзывы</ButtonBase>
        <ButtonBase to="/vacations" :className="'button-underline solid'">Вакансии</ButtonBase>
        <ButtonBase to="/about" :className="'button-underline solid'">О нас</ButtonBase>
      </nav>
    </div>
  </nav>
</template>

<style scoped lang="sass">
.menu-desc
  padding: 15px 0
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
