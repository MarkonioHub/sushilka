<script setup lang="ts">
import ModalCustom from '@/shared/ui/ModalCustom.vue'
import TitleBase from '@/shared/ui/TitleBase.vue'
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { useModalsStore } from '@/app/store/modals.ts'
import { useIsAtLeastOneShopOpen } from '@/shared/composables/useIsAtLeastOneShopOpen.ts'
const { isAtLeastOneShopOpen } = useIsAtLeastOneShopOpen()
const modalsStore = useModalsStore()
if (!isAtLeastOneShopOpen) modalsStore.toggleModal('WorkTimeModal')
</script>

<template>
  <ModalCustom :className="'modal-custom_work-time'" :id="'WorkTimeModal'">
    <div class="work-time-modal">
      <TitleBase class="work-time-modal__title">Внимание</TitleBase>
      <div class="work-time-modal__text">
        К сожалению, мы сейчас не работаем, но Вы можете сделать предзаказ
      </div>
      <div class="work-time-modal__buttons">
        <ButtonBase
          :className="'button-orange button-orange_middle'"
          :to="'/about'"
          @click="modalsStore.toggleModal('WorkTimeModal')"
        >
          Режим работы
        </ButtonBase>
        <ButtonBase
          :className="'button-orange button-orange_middle'"
          @click="modalsStore.toggleModal('WorkTimeModal')"
        >
          Хорошо
        </ButtonBase>
      </div>
    </div>
  </ModalCustom>
</template>

<style scoped lang="sass">
.work-time-modal
  width: 100%

.work-time-modal__title
  margin-bottom: 20px
  text-align: center

.work-time-modal__text
  margin-bottom: 20px
  text-align: center
  font-size: 16px

.work-time-modal__buttons
  display: flex
  flex-direction: column
  gap: 10px
</style>
