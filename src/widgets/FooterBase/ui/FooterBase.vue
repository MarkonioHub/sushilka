<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="cont">
      <div class="footer__list">
        <RouterLink to="/policies/agreement" class="footer__link" activeClass="active">
          Пользовательское соглашение
        </RouterLink>
        <RouterLink to="/policies/license" class="footer__link" activeClass="active">
          Лицензионное соглашение
        </RouterLink>
        <RouterLink to="/policies/conditions" class="footer__link" activeClass="active">
          Условия акций сервиса
        </RouterLink>
        <RouterLink to="/policies/privacy-policy" class="footer__link" activeClass="active">
          Политика конфиденциальности
        </RouterLink>
        <RouterLink to="/policies/payments" class="footer__link" activeClass="active">
          Правила оплаты
        </RouterLink>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="sass">
.footer
  background: #f1f1f1

.footer__list
  display: flex
  justify-content: space-between
  gap: 0 20px
  padding: 5px 0
  flex-wrap: wrap
  @include media(md)
    flex-direction: column
    align-items: center
    padding: 20px 0

.footer__link
  font-size: 14px
  color: $main
  padding: 5px 0
  &:hover
    text-decoration: none
</style>
