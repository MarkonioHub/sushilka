<script setup lang="ts">
import { TitleBase } from '@/shared/ui'
import { ModalCustom } from '@/shared/ui'
import { ButtonBase } from '@/shared/ui'
import { LabelWithIcon } from '@/shared/ui'
import { useModalsStore } from '@/shared/store'
import { storeToRefs } from 'pinia'
import { useLangStore } from '@/shared/store'
import { ref } from 'vue'

const modalsStore = useModalsStore()
const langStore = useLangStore()
const { currentLang } = storeToRefs(langStore)
const lang = ref(currentLang)
const langOptions = [
  { text: 'Русский', value: 'ru' },
  { text: 'English', value: 'en' },
]

function saveLang() {
  langStore.setCurrentLang(lang.value)
  modalsStore.toggleModal('LangModal')
}
</script>

<template>
  <ModalCustom :className="'modal-custom_delivery'" :id="'LangModal'">
    <div class="lang-modal">
      <TitleBase>{{ $t('LangModal.title') }}</TitleBase>
      <LabelWithIcon
        :type="'select'"
        :name="'lang'"
        :icon="'lang'"
        :note="'Город'"
        :required="false"
        :options="langOptions"
        v-model="lang"
        :readonly="true"
      />
      <ButtonBase
        @click="saveLang"
        :className="'button-orange button-orange_big'"
        class="lang-modal__confirm"
        >Ок</ButtonBase
      >
    </div>
  </ModalCustom>
</template>

<style scoped lang="sass">
.lang-modal
  width: 100%

.lang-modal__confirm
  margin-top: 20px
</style>
