<script setup lang="ts">
import { computed, watch } from 'vue'
import ModalLayer from '@/shared/ui/ModalLayer.vue'
import { useModalsStore } from '@/app/store/modals.ts'
import IconSvg from '@/shared/ui/IconSvg.vue'
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import { useDeliveryStore } from '@/entities/Delivery/model/store.ts'
import { storeToRefs } from 'pinia'
const deliveryStore = useDeliveryStore()
const { deliveryCity } = storeToRefs(deliveryStore)

const city = computed(() => {
  return deliveryCity.value?.text
})

const mobileMenu = [
  { text: 'Вход', icon: 'login', onClick: loginHandler },
  { text: city, icon: 'city', onClick: cityHandler },
  { text: 'Меню', icon: 'menu', to: '/' },
  { text: 'Корзина', icon: 'basket-menu', to: '/basket' },
  { text: 'Акции', icon: 'stock', to: '/stocks' },
  { text: 'Отзывы', icon: 'review', to: '/reviews' },
  { text: 'О нас', icon: 'about', to: '/about' },
  { text: 'Позвонить нам', icon: 'phone', href: 'tel:78332436436' },
  { text: 'Русский', icon: 'lang', onClick: langHandler },
  { text: 'Скачать приложение', icon: 'app', href: '#', target: '_blank' },
]

function loginHandler () {
  modalsStore.toggleModal('MobileMenu')
  modalsStore.toggleModal('LoginModal')
}

function cityHandler () {
  closeMenu()
  modalsStore.toggleModal('DeliveryCity')
}

function langHandler () {
  closeMenu()
}

function closeMenu () {
  modalsStore.toggleModal('MobileMenu')
}

const modalsStore = useModalsStore()

const isMobileMenuActive = computed(() => {
  return modalsStore.getModalStatus('MobileMenu')
})

watch(isMobileMenuActive, () => {
  if (isMobileMenuActive.value)  {
    document.body.classList.add('no-scroll')
  } else {
    document.body.classList.remove('no-scroll')
  }
})
</script>

<template>
  <Transition name="fade">
  <div class="mobile-menu" v-if="isMobileMenuActive">
    <ModalLayer @click="closeMenu" />
    <div class="mobile-menu__area">
      <RouterLink to="/" class="mobile-menu__logo-link">
        <img src="@/shared/assets/images/logo.png" alt="" class="mobile-menu__logo">
      </RouterLink>
      <nav class="mobile-menu__nav">
        <ButtonBase
          :to="menuItem.to ? menuItem.to : undefined"
          :href="menuItem.href ? menuItem.href : undefined"
          class="mobile-menu__link"
          v-for="(menuItem, index) in mobileMenu"
          :key="index"
          :onclick="menuItem.onClick ? menuItem.onClick : closeMenu"
        >
          <IconSvg :name="menuItem.icon" :className="'mobile-menu__link-icon'"
                   :width="'25px'" :height="'25px'" />
          {{ menuItem.text }}
        </ButtonBase>
      </nav>
    </div>
  </div>
  </Transition>
</template>

<style scoped lang="sass">
.mobile-menu
  position: fixed
  z-index: 10
  top: 0
  right: 0
  left: 0
  bottom: 0

.mobile-menu__area
  position: relative
  z-index: 1
  background-color: $white
  padding: 20px
  width: 270px
  height: 100%
  overflow-y: auto

.mobile-menu__logo-link
  display: inline-block
  margin-bottom: 20px
  width: 216px

.mobile-menu__link
  display: flex
  align-items: center
  gap: 20px
  font-size: 16px
  text-decoration: none
  padding: 10px 0

.mobile-menu__link-icon
  flex-shrink: 0
  opacity: 0.5
</style>
