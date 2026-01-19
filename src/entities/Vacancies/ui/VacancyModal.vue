<script setup lang="ts">
import ModalCustom from "@/shared/ui/ModalCustom.vue"
import { computed, defineAsyncComponent, reactive, ref } from "vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue"
import LabelWithIcon from "@/features/FormElements/ui/LabelWithIcon.vue"
import { useModalsStore } from "@/app/store/modals.ts"
import { sendData } from "@/shared/helpers/sendData.ts"
import { useRoute } from "vue-router"
import { useMessagesStore } from "@/widgets/InfoMessages/model/store.ts"

const vk = defineAsyncComponent(() => import('@/shared/assets/icons/vk.svg'))
const telegram = defineAsyncComponent(() => import('@/shared/assets/icons/telegram.svg'))

const vacancyModalSocial = [
  { image: vk, value: 'vk' },
  { image: telegram, value: 'telegram' }
]

const route = useRoute()
const modalsStore = useModalsStore()
const isSending = ref(false)
const formDataInitial = {
  name: '',
  phone: '',
  date: '',
  gender: 'Мужчина',
  education: 'Высшее образование',
  email: '',
  message: '',
  messengers: [],
  imagePreview: '',
  vacancy: route.params.vacancySlug
}
const formData = reactive({ ...formDataInitial })

function closeModal () {
  modalsStore.toggleModal('VacancyModal')
}

const isModalActive = computed(() => {
  return modalsStore.getModalStatus('VacancyModal')
})

const isValid = computed(() => {
  return formData.name && formData.phone && formData.date
})

async function submitForm () {
  isSending.value = true
  const response = await sendData('vacancies-candidates', formData)
  if (response) {
    clearForm()
    isSending.value = false
    closeModal()
  }
}

function clearForm () {
  Object.assign(formData, formDataInitial)
}

function updateImagePreview (event: Event) {
  let file
  const temp = (event?.target as HTMLInputElement)?.files
  if (temp) {
    file = temp[0]
  }
  if (!file) return
  if (!file.type.startsWith('image/')) return
  const reader = new FileReader()
  reader.onload = (e) => {
    if (e.target) formData.imagePreview = e.target.result as string
  }
  reader.readAsDataURL(file)
}

</script>

<template>
  <Transition name="fade">
    <ModalCustom :className="'modal-custom_vacancy'" @close="closeModal" v-if="isModalActive">
      <div class="vacancy-modal">
        <div class="vacancy-modal__area">
          <label class="vacancy-modal__file-label">
            <input type="file" class="vacancy-modal__file" name="photo" @change="updateImagePreview" accept="image/*">
            <img v-if="formData.imagePreview" :src="formData.imagePreview" alt="Image preview" class="vacancy-modal__file-preview" />
          </label>
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
            :type="'date'"
            :name="'date'"
            :icon="'field_date'"
            :note="'Дата рождения'"
            :placeholder="' '"
            :required="true"
            v-model="formData.date"
          />
          <LabelWithIcon
            :type="'select'"
            :name="'gender'"
            :icon="'field_gender'"
            :note="'Пол'"
            :required="false"
            :options="['Мужчина','Женщина']"
            v-model="formData.gender"
            :readonly="true"
          />
          <LabelWithIcon
            :type="'select'"
            :name="'education'"
            :icon="'field_education'"
            :note="'Образование'"
            :required="false"
            :options="['Высшее образование','Среднее образование','Начальное образование','Специальное образование','Без образования']"
            v-model="formData.education"
            :readonly="true"
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
          <LabelWithIcon
            :type="'text'"
            :name="'message'"
            :icon="'field_message'"
            :note="'Сообщение'"
            :placeholder="' '"
            :required="false"
            v-model="formData.message"
          />
          <div class="vacancy-modal__note">Выберите мессенджеры, которыми пользуетесь</div>
          <div class="vacancy-modal__social">
            <label class="vacancy-modal__social-label" v-for="(item, key) in vacancyModalSocial" :key="key">
              <input type="checkbox" class="vacancy-modal__social-input" :name="'messengers'" :value="item.value" v-model="formData.messengers">
              <component :is="item.image" alt="" class="vacancy-modal__social-view"></component>
            </label>
          </div>
        </div>
        <ButtonBase
          :className="'button-orange button-orange_middle'"
          :disabled="isSending || !isValid"
          class="vacancy-modal__submit"
          @click="submitForm"
        >
          Отправить
        </ButtonBase>
        <div class="vacancy-modal__privacy">
          Продолжая, вы даете согласие на обработку персональных данных и соглашаетесь c
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
  </Transition>
</template>

<style scoped lang="sass">
.vacancy-modal
  padding: 30px
  width: 100%
  @include media(xs)
    padding: 0

.vacancy-modal__area
  margin-bottom: 20px
  padding-bottom: 30px
  box-shadow: $box-shadow
  border-radius: $border-radius
  @include media(xs)
    padding-bottom: 25px

.vacancy-modal__file-label
  position: relative
  margin-bottom: 10px
  background: $background
  height: 151px
  display: block
  cursor: pointer
  &::before
    content: ""
    width: 60px
    height: 60px
    position: absolute
    top: 50%
    left: 50%
    transform: translate(-50%, -50%)
    background-image: url("@/shared/assets/icons/add_photo.svg")
    background-size: cover
    opacity: 0.2

.vacancy-modal__file
  display: none

.vacancy-modal__file-preview
  position: absolute
  top: 0
  right: 0
  bottom: 0
  left: 0
  height: 100%
  object-fit: cover

.vacancy-modal__note
  margin-top: 20px
  margin-bottom: 20px
  font-size: 16px
  text-align: center

.vacancy-modal__social
  display: flex
  justify-content: center
  gap: 40px
  @include media(xs)
    gap: 20px

.vacancy-modal__social-label
  width: 60px
  height: 60px
  cursor: pointer
  @include media(xs)
    width: 40px
    height: 40px

.vacancy-modal__social-input
  display: none
  &:checked ~ .vacancy-modal__social-view
    opacity: 1
    &:hover
      opacity: 1

.vacancy-modal__social-view
  opacity: 0.5
  transition: opacity $transition-duration
  &:hover
    opacity: 0.6

.vacancy-modal__privacy
  max-width: 432px
  width: 100%
  margin: 10px auto 0
  text-align: center
  font-size: 12px
  line-height: 120%

.vacancy-modal__privacy-link
  color: $orange
</style>
