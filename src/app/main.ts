import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import { createYmaps } from 'vue-yandex-maps'

import router from './routes'
const pinia = createPinia()

import './styles/index.sass'
import vClickOutside from "@/shared/directives/click-outside.ts"

const app = createApp(App)
app.directive('click-outside', vClickOutside)
app.use(router)
app.use(pinia)
app.use(createYmaps({
  apikey: 'b43326f2-e5eb-437c-bcf6-01e4247a9629',
  version: '3.0'
}))
app.mount('#app')
