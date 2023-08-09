import './assets/styles/default.scss'

import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import { createApp } from 'vue'

import primitivesLoader from '@/primitives/loader'

import App from './App'
import router from './router'

const app = createApp(App)
const pinia = createPinia()

pinia.use(piniaPluginPersistedstate)

app.use(primitivesLoader)
app.use(router)
app.use(pinia)
app.mount('#app')
