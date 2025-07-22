<script setup lang="ts">
import ButtonUnderline from '@/shared/ui/ButtonUnderline.vue'
</script>

<template>
  <nav class="menu-desc">
    <div class="cont">
      <nav class="menu-desc__nav">
        <ButtonUnderline to="/" className="solid">Главная</ButtonUnderline>
        <ButtonUnderline to="/stock" className="solid">Акции</ButtonUnderline>
        <ButtonUnderline to="/reviews" className="solid">Отзывы</ButtonUnderline>
        <ButtonUnderline to="/vacations" className="solid">Вакансии</ButtonUnderline>
        <ButtonUnderline to="/about" className="solid">О нас</ButtonUnderline>
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
