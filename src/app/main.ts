import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'

import router from './routes'
const pinia = createPinia()

import './styles/index.sass'

createApp(App).use(router).use(pinia).mount('#app')
