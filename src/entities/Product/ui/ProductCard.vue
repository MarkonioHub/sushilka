<script setup lang="ts">
import {computed, ref, watch} from "vue"
import { formatPrice } from "@/shared/helpers/formatPrice"
import { useRoute } from "vue-router"
import { storeToRefs } from "pinia"

import { useParamsListClassMod } from '@/shared/composables/useParamsListClassMod'
import { usePriceByParams } from "@/shared/composables/usePriceByParams.ts"

import { useMessagesStore } from "@/widgets/InfoMessages/model/store.ts"
import { useCategoriesStore } from "@/entities/Categories/model/store"
import { useBasketStore } from "@/entities/Basket/model/store.ts"

import IconSvg from "@/shared/ui/IconSvg.vue"
import ProductCounter from "@/features/Counter/ui/ProductCounter.vue"
import LabelOption from "@/shared/ui/LabelOption.vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue"

import type { Product } from "@/entities/Product/model/types.ts"

const props = defineProps<{
  product: Product,
}>()

const storeCategory = useCategoriesStore()
if (!storeCategory.categories.length) storeCategory.getCategories()

const basket = useBasketStore()
const { productsBasket } = storeToRefs(basket)
const messageStore = useMessagesStore()
const route = useRoute()

let selectedParam = ref(props.product["parameters"][0])
let paramsListClassMod = ref(useParamsListClassMod(props.product["parameters"]))

watch(() => props.product, (newVal) => {
  selectedParam = ref(newVal["parameters"][0])
  paramsListClassMod = ref(useParamsListClassMod(newVal["parameters"]))
});

const currentProductInBasket = computed(() => {
  return productsBasket.value.find((basketProduct) => basketProduct.id === props.product.id && basketProduct.selectedParameter === selectedParam.value)
})

const price = computed( () => {
  return usePriceByParams(props.product, selectedParam.value) * (productCount.value || 1)
})

const productCount = computed( {
  get() {
    return currentProductInBasket.value?.quantity || 0
  },
  set(newValue) {
    if (currentProductInBasket.value?.quantity) {
      currentProductInBasket.value.quantity = newValue
    }
  }
})

const categorySlug = computed(() => {
  return route.params.categorySlug ? route.params.categorySlug : storeCategory.categories[0]?.slug
})

const productPath = computed(() => {
   return `/catalog/${categorySlug.value}/${props.product?.slug}`
})

function addProductInBasket () {
  basket.addProduct(props.product.id, selectedParam.value, 1)
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
      <div class="product-card__tags" v-if="props.product?.tags">
        <div
          class="product-card__tag"
          v-for="(tag, index) in props.product?.tags"
          :key="index"
          :style="`background-color: ${tag.background}; color: ${tag.color}`"
        >
          {{ tag.text }}
        </div>
      </div>
      <RouterLink :to="productPath" class="product-card__picture">
        <img :src="props.product?.image" alt="" class="product-card__image" />
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
      <div class="product-card__name">{{ props.product.name }}</div>
      <div class="product-card__description" v-html="props.product.description"></div>
    </RouterLink>
    <div class="product-card__bottom">
      <div class="product-card__params">
        <div class="product-card__param-single" v-if="props.product['parameter-single']">
          {{ props.product['parameter-single'] }}
        </div>
        <div :class="`product-card__params-list ${paramsListClassMod}`" v-else-if="props.product['parameters']">
          <LabelOption
            v-for="(param, key) in props.product['parameters']"
            v-model="selectedParam"
            :name="`product-${props.product['id']}-param`"
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
          v-if="productCount"
          :name="`product-card-counter-${props.product.id}`"
          v-model="productCount"
          :minValue="0"
        />
        <ButtonBase class="product-card__add" @click="addProductInBasket" v-else>
          В корзину
        </ButtonBase>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
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
  svg
    width: 16px
    height: 16px

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
