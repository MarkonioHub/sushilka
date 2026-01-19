import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import router from './routes'
const pinia = createPinia()

import './styles/index.sass'
import vClickOutside from "@/shared/directives/click-outside.ts"

const app = createApp(App)
app.directive('click-outside', vClickOutside)
app.use(router)
app.use(pinia)
app.mount('#app')
