<script setup lang="ts">
  const props = defineProps({
    product: { type: Object, required: true },
  })
</script>

<template>
  <div class="product-card">
    <div class="product-card__top">
      <div class="product-card__tags">
        <div class="product-card__tag"></div>
      </div>
      <RouterLink :to="'/'" class="product-card__picture">
        <img :src="props.product?.image" alt="" class="product-card__image">
      </RouterLink>
      <div class="product-card__buttons">
        <div class="product-card__button">
          <svg viewBox="0 0 16 16" fill="none">
            <path d="M1.24264 8.24264L8 15L14.7574 8.24264C15.553 7.44699 16 6.36786 16 5.24264V5.05234C16 2.8143 14.1857 1 11.9477 1C10.7166 1 9.55233 1.55959 8.78331 2.52086L8 3.5L7.21669 2.52086C6.44767 1.55959 5.28338 1 4.05234 1C1.8143 1 0 2.8143 0 5.05234V5.24264C0 6.36786 0.44699 7.44699 1.24264 8.24264Z" fill="#b2bbbd"/>
          </svg>
        </div>
        <div class="product-card__button">
          <svg viewBox="0 0 512 512">
            <path d="M512,255.995L277.045,65.394v103.574c-17.255,0-36.408,0-57.542,0c-208.59,0-249.35,153.44-201.394,266.128
              c9.586-103.098,142.053-100.701,237.358-100.701c7.247,0,14.446,0,21.578,0v112.211L512,255.995z" fill="#b2bbbd"/>
          </svg>
        </div>
      </div>
    </div>
    <RouterLink :to="'/'" class="product-card__inner">
      <div class="product-card__name">{{ props.product?.name }}</div>
      <div class="product-card__description" v-html="props.product?.description"></div>
    </RouterLink>
    <div class="product-card__params">
      <div class="product-card__param-single">730 г.</div>
      <div class="product-card__params-btn">Опции</div>
    </div>
<!--    <div class="product-card__params">-->
<!--      <label class="product-card__param-double">-->
<!--        <input type="radio" name="param-double" value="1" checked>-->
<!--        <span class="product-card__param-double-view">Неострые</span>-->
<!--      </label>-->
<!--      <label class="product-card__param-double">-->
<!--        <input type="radio" name="param-double" value="2">-->
<!--        <span class="product-card__param-double-view">Острые</span>-->
<!--      </label>-->
<!--    </div>-->
    <div class="product-card__bottom">
      <div class="product-card__price">1 350 ₽</div>
      <button class="product-card__add">В корзину</button>
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

.product-card__tag

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
  font-size: 18px
  font-weight: 500

.product-card__description
  margin-bottom: 10px
  font-size: 16px
  line-height: 1.4
  word-break: break-word
  letter-spacing: -.3px
  color: grey

.product-card__params
  margin-top: auto
  margin-bottom: 15px
  padding: 0 12px
  display: flex
  align-items: center
  justify-content: space-between

.product-card__param-single
  font-weight: 700
  font-size: 16px

.product-card__params-btn
  padding: 6px 12px
  box-shadow: 0 0 0 1px #e53a24
  background-color: #e53a24
  color: #ffffff
  border-radius: $border-radius

.product-card__param-double
  cursor: pointer
  width: calc(50% - 5px)
  input
    display: none
    &:checked ~ .product-card__param-double-view
      background-color: $select-background
      border: 2px solid $select-background

.product-card__param-double-view
  background-color: $card-background
  display: flex
  align-items: center
  justify-content: center
  border-radius: $border-radius
  border: 2px solid $color-border
  font-size: 16px
  padding: 5px
  transition-duration: $transition-duration
  transition-property: border-color, background-color

.product-card__bottom
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
