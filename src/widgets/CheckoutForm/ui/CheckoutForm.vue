<script setup lang="ts">
import TitleBase from '@/shared/ui/TitleBase.vue'
import CardBase from '@/shared/ui/CardBase.vue'
import LabelWithIcon from '@/shared/ui/LabelWithIcon/ui/LabelWithIcon.vue'
import { computed, reactive, ref } from 'vue'
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { sendData } from '@/shared/helpers/sendData.ts'
import SwitchBase from '@/shared/ui/SwitchBase.vue'
import { useRouter } from 'vue-router'
import { useBasketStore } from '@/entities/Basket/model/store.ts'

const router = useRouter()
const isSending = ref(false)
const basketStore = useBasketStore()

const formDataInitial = {
  name: '',
  phone: '',
  email: '',
  pay: '',
  message: '',
  date: '',
  time: '',
  orderInTime: '',
  userId: '',
}

const formData = reactive({ ...formDataInitial })

const isValid = computed(() => {
  return formData.name
    && formData.phone && formData.phone.length === 18
    && formData.pay
    && (!formData.orderInTime || formData.orderInTime && formData.date && formData.time)
})

async function submitForm () {
  isSending.value = true
  const response = await sendData('orders', formData)
  if (response) {
    alert(`Заказ отправлен ${JSON.stringify(formData)}`)
    clearForm()
    isSending.value = false
    basketStore.clearBasket()
    await router.push('/')
  }
}

function clearForm () {
  Object.assign(formData, formDataInitial)
}
</script>

<template>
  <div class="checkout-form">
    <div class="cont">
      <TitleBase>Оформление заказа</TitleBase>
      <div class="checkout-form__area">
        <CardBase>
          <TitleBase>Контактная информация:</TitleBase>
          <LabelWithIcon
            :type="'text'"
            :name="'name'"
            :icon="'field_name'"
            :note="'Имя'"
            :placeholder="' '"
            :required="true"
            v-model="formData.name"
          />
          <LabelWithIcon
            :type="'tel'"
            :name="'phone'"
            :icon="'field_phone'"
            :note="'Телефон'"
            :placeholder="' '"
            :required="true"
            v-model="formData.phone"
          />
          <LabelWithIcon
            :type="'email'"
            :name="'email'"
            :icon="'field_email'"
            :note="'Email'"
            :placeholder="' '"
            :required="false"
            v-model="formData.email"
          />
        </CardBase>
        <CardBase>
          <TitleBase>Дополнительная информация:</TitleBase>
          <LabelWithIcon
            :type="'textarea'"
            :name="'message'"
            :icon="'field_message'"
            :note="'Комментарий'"
            :placeholder="' '"
            :required="false"
            v-model="formData.message"
          />
        </CardBase>
        <CardBase>
          <div class="checkout-form__headline">Предзаказ и оплата:</div>
          <div class="checkout-form__line">
            <SwitchBase
              :name="'order-in-time'"
              :note="'Подготовить к'"
              v-model="formData.orderInTime"
            />
            <LabelWithIcon
              v-if="formData.orderInTime"
              :className="'checkout-form__label'"
              :type="'date'"
              :name="'date'"
              :icon="''"
              :note="'Дата'"
              :placeholder="' '"
              :required="true"
              v-model="formData.date"
            />
            <LabelWithIcon
              v-if="formData.orderInTime"
              :className="'checkout-form__label'"
              :type="'select'"
              :name="'time'"
              :icon="''"
              :note="'Время'"
              :required="true"
              :options="[
                {text:'11:00',value:'11:00'},
                {text:'13:00',value:'13:00'},
                {text:'16:00',value:'16:00'},
                {text:'19:00',value:'19:00'},
                {text:'22:00',value:'22:00'}
              ]"
              v-model="formData.time"
              :readonly="true"
            />
          </div>
          <LabelWithIcon
            :type="'select'"
            :name="'pay'"
            :icon="'field_wallet'"
            :note="'Оплата'"
            :required="true"
            :options="[
            {text:'Наличными',value:'Наличными'},
            {text:'Картой при получении',value:'Картой при получении'},
            {text:'Картой онлайн',value:'Картой онлайн'},
            {text:'СБП',value:'СБП'},
          ]"
            v-model="formData.pay"
            :readonly="true"
          />
        </CardBase>
      </div>
      <ButtonBase
        :className="'button-orange button-orange_middle'"
        :disabled="isSending || !isValid"
        @click="submitForm"
      >
        Заказать
      </ButtonBase>
      <div class="checkout-form__policy">
        Продолжая, вы даете согласие на обработку персональных данных и соглашаетесь с
        <RouterLink to="/content/agreement">Пользовательским соглашением</RouterLink>
        и
        <RouterLink to="/content/privacy-policy">Политикой конфиденциальности</RouterLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.checkout-form
  margin-top: 40px
  margin-bottom: 40px
  @include media(lg)
    margin-top: 20px

.checkout-form__area
  margin-bottom: 20px
  display: flex
  flex-direction: column
  gap: 20px

.checkout-form__policy
  margin-top: 10px
  text-align: center
  font-size: 16px
  line-height: 20px

.checkout-form__headline
  margin-bottom: 10px

.checkout-form__line
  margin-top: 20px
  margin-bottom: 10px
  display: flex
  align-items: center
  gap: 30px
  min-height: 61px
  @include media(xs)
    flex-direction: column
    align-items: flex-start
    gap: 10px

.checkout-form__label
  @include media(xs)
    width: 100%
</style>
