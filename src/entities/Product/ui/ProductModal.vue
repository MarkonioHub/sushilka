<script setup lang="ts">
import ModalCustom from "@/shared/ui/ModalCustom.vue"
import LabelOption from "@/shared/ui/LabelOption.vue"
import { useParamsListClassMod } from "@/shared/composables/useParamsListClassMod.ts"
import { computed, ref } from "vue"
import { useRoute } from "vue-router"
import { useProductsStore } from '@/entities/Product/model/store'
import router from "@/app/routes"
import type { Product } from '../model/types'

const store = useProductsStore()
if (!store.products.length) store.getProducts()

const route = useRoute()

const product = computed(() => {
  const productSlug = route.params.productSlug
  return store.products.find((product: Product) => product?.slug === productSlug)
})

const selectedParam = ref(product.value?.parameters[0])
const paramsListClassMod = useParamsListClassMod(product.value?.parameters || [])

function closeModal () {
  router.go(-1)
}

</script>

<template>
  <Transition name="fade">
    <ModalCustom v-if="product" @close="closeModal">
      <div class="product-modal">
        <img :src="product?.image" alt="" class="product-modal__image">
        <div class="product-modal__title">{{ product?.name }}</div>
        <div class="product-modal__description" v-html="product?.description"></div>
        <div class="product-modal__params">
          <div class="product-modal__param-single" v-if="product['parameter-single']">
            {{ product['parameter-single'] }}
          </div>
          <div :class="`product-modal__params-list ${paramsListClassMod}`" v-else-if="product['parameters']">
            <LabelOption
              v-for="(param, key) in product['parameters']"
              v-model="selectedParam"
              :name="`product-${product['id']}-param`"
              :text="param"
              :key=param
            />
          </div>
        </div>
        <div class="product-modal__quantity">
          <div class="product-modal__quantity-box">
            <div class="product-modal__quantity-headline">Сумма</div>
            <div class="product-modal__quantity-sum"></div>
          </div>
          <div class="product-modal__quantity-box">
            <div class="product-modal__quantity-headline">Кол-во</div>

          </div>
        </div>
      </div>
    </ModalCustom>
  </Transition>
</template>

<style scoped lang="sass">
.product-modal__image
  margin-bottom: 20px
  border-radius: $border-radius

.product-modal__title
  margin-bottom: 20px
  font-weight: 700
  font-size: 16px
  line-height: 100%

.product-modal__description
  margin-bottom: 20px
  font-size: 15px
  line-height: 120%

.product-modal__params
  margin-bottom: 20px

.product-modal__param-single
  font-weight: 700
  font-size: 15px

.product-modal__quantity
  display: flex
  justify-content: space-between

.product-modal__quantity-box

.product-modal__quantity-headline

.product-modal__quantity-sum
  font-size: 18px
  line-height: 100%
  color: $orange

</style>
