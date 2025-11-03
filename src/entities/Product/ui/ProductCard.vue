<script setup lang="ts">
import {computed, ref, watch} from "vue"
import { formatPrice } from "@/shared/helpers/formatPrice"
import { useRoute } from "vue-router"

import { useParamsListClassMod } from '@/shared/composables/useParamsListClassMod'
import { usePriceByParams } from "@/shared/composables/usePriceByParams.ts"

import { useMessagesStore } from "@/widgets/InfoMessages/model/store.ts"
import { useCategoriesStore } from "@/entities/Categories/model/store"
import { useBasketStore } from "@/entities/Basket/model/store.ts"

import IconSvg from "@/shared/ui/IconSvg.vue"
import ProductCounter from "@/features/ProductCounter/ui/ProductCounter.vue"
import LabelOption from "@/shared/ui/LabelOption.vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue"

import { useProductsStore } from "@/entities/Product/model/store.ts"

const props = defineProps({
  id: { type: String, required: true }
})

const storeCategory = useCategoriesStore()

const basket = useBasketStore()
const messageStore = useMessagesStore()
const route = useRoute()
const productsStore = useProductsStore()

const product = computed(() => {
  return productsStore.getProductById(props.id)
})

let selectedParameter = ref(product.value?.parameters[0])
watch(() => props.id, () => {
  selectedParameter = ref(product.value?.parameters[0])
})

const paramsListClassMod = computed(() => {
  return useParamsListClassMod(product.value?.parameters || [])
})

const price = computed( () => {
  return usePriceByParams(product.value, selectedParameter.value || '') * (productQuantity.value || 1)
})

const productQuantity = computed( {
  get() {
    return basket.getProductQuantity(props.id, selectedParameter.value || '') || 0
  },
  set(newValue) {
    if (newValue > 0) {
      basket.addProduct(product.value?.id || '', selectedParameter.value, newValue, true)
    } else {
      basket.removeProduct(product.value?.id || '', selectedParameter.value)
    }
  }
})

const categorySlug = computed(() => {
  return route.params.categorySlug ? route.params.categorySlug : storeCategory.categories[0]?.slug
})

const productPath = computed(() => {
   return `/catalog/${categorySlug.value}/${product.value?.slug}`
})

function addProductInBasket () {
  if (product.value) basket.addProduct(product.value.id, selectedParameter.value, 1)
}

async function saveLink () {
  try {
    await navigator.clipboard.writeText(`${window.location.origin}${productPath.value}`)
  } catch (err) {
    console.error('Failed to copy text: ', err)
  }
  messageStore.addMessage('Ссылка скопирована')
}
</script>

<template>
  <div class="product-card">
    <div class="product-card__top">
      <div class="product-card__tags" v-if="product?.tags">
        <div
          class="product-card__tag"
          v-for="(tag, index) in product?.tags"
          :key="index"
          :style="`background-color: ${tag.background}; color: ${tag.color}`"
        >
          {{ tag.text }}
        </div>
      </div>
      <RouterLink :to="productPath" class="product-card__picture">
        <img :src="product?.image" alt="" class="product-card__image" />
      </RouterLink>
      <div class="product-card__buttons">
        <div class="product-card__button">
          <IconSvg :name="'heart'" />
        </div>
        <div class="product-card__button" @click="saveLink">
          <IconSvg :name="'share'" />
        </div>
      </div>
    </div>
    <RouterLink :to="productPath" class="product-card__inner">
      <div class="product-card__name">{{ product?.name }}</div>
      <div class="product-card__description" v-html="product?.description"></div>
    </RouterLink>
    <div class="product-card__bottom">
      <div class="product-card__params">
        <div class="product-card__param-single" v-if="product?.parameterSingle">
          {{ product?.parameterSingle }}
        </div>
        <div :class="`product-card__params-list ${paramsListClassMod}`" v-else-if="product?.parameters">
          <LabelOption
            v-for="(param, key) in product?.parameters"
            v-model="selectedParameter"
            :name="`product-${product?.id}-param`"
            :text="param"
            :key=key
          />
        </div>
        <ButtonBase
          :className="'button-orange'"
          :to="productPath"
          class="product-card__params-btn"
        >
          Опции
        </ButtonBase>
      </div>
      <div class="product-card__line">
        <div class="product-card__price">{{ formatPrice(price) }}</div>
        <ProductCounter
          v-if="productQuantity"
          :name="`product-card-counter-${props.id}`"
          v-model="productQuantity"
          :minValue="0"
        />
        <ButtonBase class="product-card__add" @click="addProductInBasket" v-else>
          В корзину
        </ButtonBase>
      </div>
    </div>
  </div>
</template>

<style lang="sass">
.product-card
  box-shadow: $box-shadow
  border-radius: $border-radius
  overflow: hidden
  display: flex
  flex-direction: column

.product-card__top
  position: relative
  margin-bottom: 10px

.product-card__tags
  position: absolute
  top: 10px
  left: 10px
  right: 50px
  display: flex
  flex-wrap: wrap
  gap: 10px
  pointer-events: none

.product-card__tag
  display: flex
  align-items: center
  justify-content: center
  letter-spacing: 1px
  height: 30px
  box-shadow: 0 1px 62px #0000001a, 0 1px 2px #0003
  border-radius: 20px
  font-size: 12px
  line-height: 100%
  text-transform: uppercase
  padding: 4px 10px 3px

.product-card__picture
  display: block
  text-decoration: none

.product-card__image
  height: 180px
  object-fit: cover

.product-card__buttons
  position: absolute
  top: 10px
  right: 10px
  display: flex
  flex-direction: column
  gap: 10px

.product-card__button
  cursor: pointer
  width: 30px
  height: 30px
  border-radius: 50%
  display: flex
  align-items: center
  justify-content: center
  box-shadow: $box-shadow
  background: $card-background
  &:hover
    path
      fill: $orange
  svg
    width: 16px
    height: 16px
  path
    transition-duration: $transition-duration
    transition-property: fill

.product-card__inner
  display: block
  padding: 15px 12px
  text-decoration: none

.product-card__name
  margin-bottom: 10px
  font-size: 16px
  line-height: 20px
  font-weight: 500

.product-card__description
  margin-bottom: 10px
  font-size: 13px
  line-height: 16px
  word-break: break-word
  letter-spacing: -.3px
  color: grey

.product-card__bottom
  margin-top: auto

.product-card__params
  padding: 0 12px
  display: flex
  gap: 10px
  align-items: stretch
  justify-content: space-between

.product-card__params-list
  flex-grow: 1
  display: grid
  align-items: center
  gap: 10px
  &.double
    grid-template-columns: repeat(2, 1fr)
  &.triple
    grid-template-columns: repeat(3, 1fr)

.product-card__param-single
  font-weight: 700
  font-size: 16px

.product-card__params-btn
  flex-shrink: 0
  width: auto

.product-card__line
  margin-top: 15px
  display: flex
  align-items: center
  justify-content: space-between
  padding: 15px 12px
  border-top: 2px solid $color-border

.product-card__price
  color: $orange
  font-size: 20px

.product-card__add
  font-size: 18px
  line-height: 20px
  font-weight: 500
  text-transform: uppercase
</style>
