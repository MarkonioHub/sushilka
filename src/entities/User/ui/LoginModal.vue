<script setup lang="ts">
import { computed, ref } from 'vue'
import ModalCustom from "@/shared/ui/ModalCustom.vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue"
import LabelWithIcon from "@/shared/ui/LabelWithIcon/ui/LabelWithIcon.vue"
import { useModalsStore } from '@/app/store/modals.ts'
const phone = ref('')
const modalsStore = useModalsStore()

const isValid = computed(() => {
  return phone.value && phone.value.length === 18
})

function loginWithPhone () {
  alert(`Логин через телефон по номеру ${phone.value}`)
  phone.value = ''
  modalsStore.toggleModal("LoginModal")
}

function loginWithTg () {
  alert(`Логин через телеграм по номеру ${phone.value}`)
  phone.value = ''
  modalsStore.toggleModal("LoginModal")
}
</script>

<template>
  <ModalCustom :className="'modal-custom_vacancy'" :id="'LoginModal'">
    <div class="login-modal">
      <h1 class="login-modal__caption">{{ $t('LoginModal.title') }}</h1>
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
      <ButtonBase
        :href="'#'"
        :className="'button-red'"
        :disabled="!isValid"
        class="login-modal__button"
        @click="loginWithPhone"
      >
        телефон
      </ButtonBase>
      <ButtonBase
        :href="'#'"
        :className="'button-blue'"
        :disabled="!isValid"
        class="login-modal__button"
        @click="loginWithTg"
      >телеграм</ButtonBase>
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
  margin-top: 20px

.login-modal__policy
  margin-top: 20px
  text-align: center

.vacancy-modal__privacy-link
  color: $orange
</style>
