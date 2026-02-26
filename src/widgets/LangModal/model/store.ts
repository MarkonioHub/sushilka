import { defineStore } from 'pinia'
import i18n from '@/app/i18n.ts'

export const useLangStore = defineStore('lang', {
  state: () => ({
    currentLang: i18n.global.locale
  }),
  actions: {
    setCurrentLang (lang: 'ru' | 'en') {
      this.currentLang = lang
      i18n.global.locale = lang
      localStorage.setItem('sushilka-lang', this.currentLang)
    },
  }
})
