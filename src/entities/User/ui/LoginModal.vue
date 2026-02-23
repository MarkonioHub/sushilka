<script setup lang="ts">
import { ref } from "vue"
import ModalCustom from "@/shared/ui/ModalCustom.vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue"
import LabelWithIcon from "@/shared/ui/LabelWithIcon.vue"
const phone = ref('')
</script>

<template>
  <ModalCustom :className="'modal-custom_vacancy'" :id="'LoginModal'">
    <div class="login-modal">
      <h1 class="login-modal__caption">Выберите способ авторизации</h1>
      <LabelWithIcon
        class="login-modal__label"
        :type="'tel'"
        :name="'phone'"
        :icon="'field_phone'"
        :note="'Телефон'"
        :placeholder="' '"
        :required="true"
        v-model="phone"
      />
      <ButtonBase :href="'#'" :className="'button-red'" class="login-modal__button">телефон</ButtonBase>
      <ButtonBase :href="'#'" :className="'button-blue'" class="login-modal__button">телеграм</ButtonBase>
      <div class="login-modal__policy">
        Продолжая, вы даете согласие на обработку персональных данных и соглашаетесь с
        <RouterLink :to="`/content/agreement`" class="vacancy-modal__privacy-link">
          Пользовательским соглашением
        </RouterLink>
        и
        <RouterLink :to="`/content/privacy-policy`" class="vacancy-modal__privacy-link">
          Политикой конфиденциальности
        </RouterLink>
      </div>
    </div>
  </ModalCustom>
</template>

<style scoped lang="sass">
.login-modal__caption
  margin-bottom: 20px
  font-size: 24px
  line-height: 100%
  @include media(xs)
    font-size: 21px

.login-modal__label
  margin-bottom: 20px

.login-modal__button
  margin-bottom: 20px

.login-modal__policy
  text-align: center

.vacancy-modal__privacy-link
  color: $orange
</style>
