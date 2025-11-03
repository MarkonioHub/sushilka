<script setup lang="ts">
import { defineAsyncComponent } from "vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue";

const not_found = defineAsyncComponent(() => import('../images/404.svg'))
</script>

<template>
  <div class="not-found">
    <div class="cont">
      <div class="not-found__area">
        <component :is="not_found" alt="" class="not-found__image"></component>
        <h1 class="not-found__caption">Страница не найдена</h1>
        <div class="not-found__note">Упс, что-то пошло не так</div>
        <ButtonBase to="/" :className="'button-underline solid'">На главную</ButtonBase>
      </div>
    </div>
  </div>
</template>

<style scoped lang="sass">
.not-found
  margin: 20px 0 80px
  @include media(lg)
    margin: 20px 0 40px

.not-found__area
  display: flex
  flex-direction: column
  align-items: center

.not-found__image
  margin-bottom: 40px
  width: 100%
  max-width: 600px
  @include media(lg)
    max-width: 300px

.not-found__caption
  margin-bottom: 10px
  font-size: 28px

.not-found__note
  margin-bottom: 20px
  font-size: 14px
  color: $grey

</style>
