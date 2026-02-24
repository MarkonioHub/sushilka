<script setup lang="ts">
import TitleBase from '@/shared/ui/TitleBase.vue'
import ModalCustom from '@/shared/ui/ModalCustom.vue'
import ButtonBase from '@/shared/ui/ButtonBase.vue'
import LabelWithIcon from '@/shared/ui/LabelWithIcon/ui/LabelWithIcon.vue'
import { computed, ref } from 'vue'
import { useModalsStore } from '@/app/store/modals.ts'
import { useDeliveryStore } from '@/entities/Delivery/model/store.ts'
import { storeToRefs } from 'pinia'
import type { City } from '@/entities/Delivery/model/types.ts'
import type { Option } from '@/shared/ui/LabelWithIcon/model/types.ts'

const modalsStore = useModalsStore()
const deliveryStore = useDeliveryStore()
const { deliveryCity, cities } = storeToRefs(deliveryStore)
const city = ref(deliveryCity.value.id || '')

function saveCity () {
  modalsStore.toggleModal('DeliveryCity')
  deliveryStore.setDeliveryCity(city.value)
}

const citiesOptions = computed(() => {
  const temp = [] as Array<Option>
  cities.value.forEach((item: City) => {
    temp.push({text:item.text, value:item.id})
  })
  return temp
})
</script>

<template>
  <ModalCustom :className="'modal-custom_city'" :id="'DeliveryCity'">
    <div class="modal-delivery-city">
      <TitleBase>Выберите город</TitleBase>
      <LabelWithIcon
        :type="'select'"
        :name="'city'"
        :icon="'placemark'"
        :note="'Город'"
        :required="false"
        :options="citiesOptions"
        v-model="city"
        :readonly="true"
      />
      <ButtonBase @click="saveCity" :className="'button-orange button-orange_big'" class="modal-delivery-city__confirm">Ок</ButtonBase>
    </div>
  </ModalCustom>
</template>

<style scoped lang="sass">
.modal-delivery-city
  width: 100%

.modal-delivery-city__confirm
  margin-top: 20px
</style>
