<script setup lang="ts">
import { computed, ref, watch } from "vue"
import { formatPrice } from "@/shared/helpers/formatPrice"
import { useRoute } from "vue-router"
import { useCategoriesStore } from "@/entities/Categories/model/store"
import { useParamsListClassMod } from '@/shared/composables/useParamsListClassMod'
import LabelOption from "@/shared/ui/LabelOption.vue"

const props = defineProps({
  product: { type: Object, required: true }
})

const storeCategory = useCategoriesStore()
if (!storeCategory.categories.length) storeCategory.getCategories()

const route = useRoute()

let selectedParam = ref(props.product["parameters"][0])
let paramsListClassMod = useParamsListClassMod(props.product["parameters"])

watch(props, (newProps) => {
  selectedParam = newProps.product["parameters"][0]
  paramsListClassMod = useParamsListClassMod(newProps.product["parameters"])
}, { deep: true })

const categorySlug = computed(() => {
  return route.params.categorySlug ? route.params.categorySlug : storeCategory.categories[0]?.slug
})

const productPath = computed(() => {
   return `/catalog/${categorySlug.value}/${props.product?.slug}`
})

const price = computed(() => {
  if (Array.isArray(props.product["price"])) {
    const index = props.product["parameters"].indexOf(selectedParam.value)
    return props.product["price"][index]
  } else {
    return props.product["price"]
  }
})
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
          <svg viewBox="0 0 16 16" fill="none">
            <path
              d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z"
              fill="#b2bbbd"
            />
          </svg>
        </div>
        <div class="product-card__button">
          <svg viewBox="0 0 512 512">
            <path
              d="M512,255.995L277.045,65.394v103.574c-17.255,0-36.408,0-57.542,0c-208.59,0-249.35,153.44-201.394,266.128
              c9.586-103.098,142.053-100.701,237.358-100.701c7.247,0,14.446,0,21.578,0v112.211L512,255.995z"
              fill="#b2bbbd"
            />
          </svg>
        </div>
      </div>
    </div>
    <RouterLink :to="productPath" class="product-card__inner">
      <div class="product-card__name">{{ props.product?.name }}</div>
      <div class="product-card__description" v-html="props.product?.description"></div>
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
            :key=param
          />
        </div>
        <div class="product-card__params-btn">Опции</div>
      </div>
      <div class="product-card__line">
        <div class="product-card__price">{{ formatPrice(price) }}</div>
        <button class="product-card__add">В корзину</button>
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
  right: 40px
  display: flex
  flex-wrap: wrap
  gap: 10px

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
  padding: 2px 10px

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
  align-items: center
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
  padding: 6px 12px
  box-shadow: 0 0 0 1px #e53a24
  background-color: #e53a24
  color: #ffffff
  border-radius: $border-radius

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
  font-weight: 500
  text-transform: uppercase
</style>
