<script setup lang="ts">
import { computed, watch } from 'vue'
import IconSvg from "@/shared/ui/IconSvg.vue"
import ModalLayer from '@/shared/ui/ModalLayer.vue'
import { useModalsStore } from '@/app/store/modals.ts'

const props = defineProps({
  className: { type: String, default: '' },
  id: { type: String, required: true },
})

const emit = defineEmits(['close'])

const modalsStore = useModalsStore()

const className = computed(() => {
  return props.className
})

const isModalActive = computed(() => {
  return modalsStore.getModalStatus(props.id)
})

watch(isModalActive, (newValue) => {
  if (newValue) {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})

function closeModal () {
  emit('close')
  modalsStore.toggleModal(props.id)
}

</script>

<template>
  <Transition name="fade">
    <div :class="`modal-custom ${className}`" v-if="isModalActive">
      <ModalLayer @click="closeModal" />
      <div class="modal-custom__area">
        <IconSvg
          :name="'close'"
          class="modal-custom__close"
          @click="closeModal"
          :width="'24px'" :height="'24px'"
        />
        <slot></slot>
      </div>
    </div>
  </Transition>
</template>

<style scoped lang="sass">
.modal-custom
  position: fixed
  z-index: 99999
  top: 0
  right: 0
  bottom: 0
  left: 0
  overflow-y: auto
  padding: 40px 10px
  text-align: center
  &::before
    content: ''
    display: inline-block
    height: 100%
    vertical-align: middle
    margin-right: -4px
  &_work-time
    .modal-custom__area
      max-width: 560px
  &_vacancy
    .modal-custom__area
      max-width: 560px
  &_delivery
    .modal-custom__area
      @include media(md)
        max-width: 300px
        padding: 20px
        flex-direction: column
  &_delivery-way
    .modal-custom__area
      max-width: 480px
      @include media(md)
        max-width: 458px
  &_restaurants
    .modal-custom__area
      max-width: 820px

.modal-custom__area
  position: relative
  z-index: 1
  max-width: 730px
  width: 100%
  display: inline-flex
  text-align: left
  vertical-align: middle
  padding: 20px
  border-radius: $border-radius
  background-color: #ffffff

.modal-custom__close
  position: absolute
  top: 2px
  right: -40px
  cursor: pointer
  @include media(lg)
    top: -30px
    right: 0
  &:hover
    opacity: 0.8
</style>
