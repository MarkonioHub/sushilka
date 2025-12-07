<script setup lang="ts">
import { computed } from "vue"
import { useVacanciesStore } from "@/entities/Vacancies/model/store.ts"
import { useRoute } from "vue-router"
import IconSvg from "@/shared/ui/IconSvg.vue"
import ButtonBase from "@/shared/ui/ButtonBase.vue";

const route = useRoute()
const vacancyPageSlug = computed(() => {
  return route.params.vacancySlug
})

const store = useVacanciesStore()
if (store.vacancies) store.getVacancies()
const vacancy = computed(() => {
  return store.getCurrentVacancy(vacancyPageSlug.value as string)
})
</script>

<template>
  <section class="vacancy-content">
    <div class="cont">
      <div class="vacancy-content__wrap">
        <div class="vacancy-content__sidebar">
          <img :src="vacancy?.image" alt="" class="vacancy-content__image" v-if="vacancy?.image">
        </div>
        <div class="vacancy-content__inner">
          <div class="vacancy-content__area">
            <div class="vacancy-content__box" v-if="vacancy?.name">
              <IconSvg class="vacancy-content__icon" :name="'name'" :className="'icon'"/>
              <div class="vacancy-content__line">
                <div class="vacancy-content__name">Название</div>
                <div class="vacancy-content__value">{{vacancy?.name}}</div>
              </div>
            </div>
            <div class="vacancy-content__box" v-if="vacancy?.count">
              <IconSvg class="vacancy-content__icon" :name="'user'" :className="'icon'"/>
              <div class="vacancy-content__line">
                <div class="vacancy-content__name">Количество</div>
                <div class="vacancy-content__value">{{vacancy?.count}}</div>
              </div>
            </div>
            <div class="vacancy-content__box" v-if="vacancy?.requirements">
              <IconSvg class="vacancy-content__icon" :name="'requirements'" :className="'icon'"/>
              <div class="vacancy-content__line">
                <div class="vacancy-content__name">Требования</div>
                <ol class="vacancy-content__list">
                  <li class="vacancy-content__item" v-for="value in vacancy.requirements">{{value}}</li>
                </ol>
              </div>
            </div>
            <div class="vacancy-content__box" v-if="vacancy?.responsibilities">
              <IconSvg class="vacancy-content__icon" :name="'responsibilities'" :className="'icon'"/>
              <div class="vacancy-content__line">
                <div class="vacancy-content__name">Обязанности</div>
                <ol class="vacancy-content__list">
                  <li class="vacancy-content__item" v-for="value in vacancy.responsibilities">{{value}}</li>
                </ol>
              </div>
            </div>
            <div class="vacancy-content__box" v-if="vacancy?.conditions">
              <IconSvg class="vacancy-content__icon" :name="'conditions'" :className="'icon'"/>
              <div class="vacancy-content__line">
                <div class="vacancy-content__name">Условия</div>
                <ol class="vacancy-content__list">
                  <li class="vacancy-content__item" v-for="value in vacancy.conditions">{{value}}</li>
                </ol>
              </div>
            </div>
            <div class="vacancy-content__box" v-if="vacancy?.salary">
              <IconSvg class="vacancy-content__icon" :name="'salary'" :className="'icon'"/>
              <div class="vacancy-content__line">
                <div class="vacancy-content__name">Зарплата</div>
                <div class="vacancy-content__value">От {{vacancy?.salary}}</div>
              </div>
            </div>
          </div>
          <ButtonBase class="vacancy-content__button" :className="'button-orange button-orange_big'">
            Откликнуться
          </ButtonBase>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="sass">
.vacancy-content
  margin-top: 40px
  margin-bottom: 40px
  @include media(sm)
    margin-top: 20px
    margin-bottom: 30px

.vacancy-content__wrap
  display: flex
  align-items: flex-start
  gap: 30px
  @include media(sm)
    display: block

.vacancy-content__sidebar
  position: sticky
  top: 70px
  width: 400px
  flex-shrink: 0
  @include media(sm)
    margin-bottom: 20px
    position: static
    width: 100%

.vacancy-content__image
  border-radius: $border-radius

.vacancy-content__inner


.vacancy-content__box
  display: flex
  gap: 16px
  align-items: flex-start
  position: relative
  margin-bottom: 10px
  padding-bottom: 10px
  border-bottom: 1px solid $color-border

.vacancy-content__icon
  flex-shrink: 0

.vacancy-content__name
  margin-bottom: 8px
  color: $grey
  font-size: 16px
  @include media(sm)
    font-size: 14px

.vacancy-content__value
  font-size: 18px
  @include media(sm)
    font-size: 16px

.vacancy-content__list
  display: flex
  gap: 8px
  flex-direction: column

.vacancy-content__item
  margin-left: 18px
  font-size: 18px
  line-height: 100%
  list-style: decimal
  @include media(sm)
    font-size: 16px
</style>
