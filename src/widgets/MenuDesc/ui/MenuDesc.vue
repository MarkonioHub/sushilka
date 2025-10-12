<script setup lang="ts">
import ButtonBase from '@/shared/ui/ButtonBase.vue'
</script>

<template>
  <nav class="menu-desc">
    <div class="cont">
      <nav class="menu-desc__nav">
        <ButtonBase to="/" :className="'button-underline solid'">Главная</ButtonBase>
        <ButtonBase to="/stock" :className="'button-underline solid'">Акции</ButtonBase>
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

.menu-desc__nav
  display: flex
  gap: 25px
  @include media(xs)
    gap: 15px
</style>
