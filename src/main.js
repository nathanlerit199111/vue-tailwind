import './assets/sass/style.scss'
import customTheme from '@/theme/theme.json'
import { applyThemeCSS  } from '@/plugins/theme-plugin.js';
import vueLazyLoad from 'vue3-lazyload'
import 'primeicons/primeicons.css'
import 'primevue/resources/themes/aura-light-green/theme.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import primeVue from 'primevue/config'
import 'tailwindcss/tailwind.css'

import App from './App.vue'
import router from './router'

import registerGlobalComponents from './plugins/register-global-components'
applyThemeCSS(customTheme);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueLazyLoad)
app.use(primeVue)
app.use(registerGlobalComponents)
app.mount('#app')
