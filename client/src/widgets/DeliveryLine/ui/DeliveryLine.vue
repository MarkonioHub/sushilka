<script setup lang="ts">
import IconSvg from "@/shared/ui/IconSvg.vue"
</script>

<template>
  <section class="delivery-line">
    <div class="delivery-line__cont cont">
      <div class="delivery-line__area">
        <IconSvg :name="'placemark'" :className="'icon-grey'" class="delivery-line__icon" />
        <div class="delivery-line__current">
          <div class="delivery-line__current-name">Точка самовывоза</div>
          <div class="delivery-line__current-value">Сушилка Атлант Воровского, 114 (тел: 444-943)</div>
        </div>
        <div class="delivery-line__type">
          <button class="delivery-line__type-btn">Доставка</button>
          <button class="delivery-line__type-btn active">Самовывоз</button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.delivery-line
  margin-top: 20px

.delivery-line__cont

.delivery-line__area
  display: flex
  align-items: center
  box-shadow: $box-shadow
  border-radius: $border-radius
  padding: 10px 20px
  @include media(sm)
    display: block

.delivery-line__icon
  margin-right: 10px
  flex-shrink: 0
  @include media(sm)
    display: none

.delivery-line__current
  margin-right: 40px
  @include media(sm)
    margin-right: 0
    margin-bottom: 10px

.delivery-line__current-name
  margin-bottom: 5px
  font-size: 14px
  color: $grey

.delivery-line__current-value
  font-size: 16px

.delivery-line__type
  margin-left: auto
  flex-shrink: 0

.delivery-line__type-btn
  font-size: 14px
  padding: 5px 17px
  box-shadow: $box-shadow
  @include media(sm)
    width: 50%
  &:first-child
    border-radius: 100px 0 0 100px
  &:last-child
    border-radius: 0 100px 100px 0
  &.active
    background-color: $orange
    color: $white

</style>
