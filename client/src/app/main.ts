import { createApp } from 'vue'
import App from './App.vue'

import router from './routes'

import './styles/index.sass'

createApp(App).use(router).mount('#app')
