<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { useParamsListClassMod } from "@/shared/composables/useParamsListClassMod.ts"
import { useRoute } from "vue-router"
import { useProductsStore } from '@/entities/Product/model/store'
import { usePriceByParams } from "@/shared/composables/usePriceByParams.ts"
import { formatPrice } from "@/shared/helpers/formatPrice.ts"
import { useBasketStore } from "@/entities/Basket/model/store.ts"
import router from "@/app/routes"

import type { Product } from '../model/types'

import ModalCustom from "@/shared/ui/ModalCustom.vue"
import LabelOption from "@/shared/ui/LabelOption.vue"
import ProductCounter from "@/features/Counter/ui/ProductCounter.vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue";

const route = useRoute()
const store = useProductsStore()
const products = computed(() => {
  return store.products
})
if (!products.value.length) store.getProducts()

const basket = useBasketStore()

const product = computed(() => {
  const productSlug = route.params.productSlug
  return store.products.find((product: Product) => product?.slug === productSlug)
})
const price = ref('')
const selectedParam = ref('')
const productCount = ref(1)

const paramsListClassMod = computed(() => {
  return useParamsListClassMod(product.value?.parameters || [])
})

const priceFull = computed(() => {
  return price.value ? Number(price.value) * productCount.value : 0
})

watch(selectedParam, (newSelectedParam) => {
  price.value = usePriceByParams(product.value, newSelectedParam)
}, { deep: true })

watch(product, (newProduct) => {
  selectedParam.value = newProduct?.parameters[0] || ''
  price.value = usePriceByParams(newProduct, selectedParam.value)
}, { deep: true })

function closeModal () {
  productCount.value = 1
  const url = window.location.pathname + window.location.search + window.location.hash
  const parts = url.split('/')
  parts.pop()
  const newUrl = parts.join('/')
  router.push(newUrl)
}

function addProductInBasket () {
  if (product.value) {
    basket.addProduct(product.value.id, selectedParam.value, productCount.value)
    closeModal()
  }
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
          <div class="product-modal__params-single" v-if="product['parameter-single']">
            {{ product['parameter-single'] }}
          </div>
          <div :class="`product-modal__params-list ${paramsListClassMod}`" v-else-if="product['parameters']">
            <LabelOption
              v-for="(param, key) in product['parameters']"
              v-model="selectedParam"
              :name="`product-modal-${product['id']}-param`"
              :text="param"
              :key=key
            />
          </div>
        </div>
        <div class="product-modal__quantity">
          <div class="product-modal__quantity-box">
            <div class="product-modal__quantity-headline">Сумма</div>
            <div class="product-modal__quantity-sum">{{ formatPrice(priceFull) }}</div>
          </div>
          <div class="product-modal__quantity-box">
            <div class="product-modal__quantity-headline">Кол-во</div>
            <ProductCounter
              :name="`product-modal-counter-${product.id}`"
              v-model="productCount"
            />
          </div>
        </div>
        <ButtonBase
          @click="addProductInBasket"
          :className="'button-orange'"
          class="product-modal__add"
        >
          Добавить товар за {{ formatPrice(priceFull) }}
        </ButtonBase>
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

.product-modal__params-single
  font-weight: 700
  font-size: 15px

.product-modal__params-list
  flex-grow: 1
  display: grid
  align-items: center
  gap: 10px
  &.double
    grid-template-columns: repeat(2, 1fr)
  &.triple
    grid-template-columns: repeat(3, 1fr)

.product-modal__quantity
  margin-bottom: 20px
  display: flex
  justify-content: space-between

.product-modal__quantity-headline
  margin-bottom: 10px
  color: $grey
  font-size: 16px
  line-height: 100%

.product-modal__quantity-sum
  font-size: 18px
  line-height: 100%
  color: $orange

.product-modal__add
  padding: 10px
  font-size: 16px

</style>
