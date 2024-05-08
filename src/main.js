import './assets/sass/style.scss'
import customTheme from '@/theme/theme.json'
import vueLazyLoad from 'vue3-lazyload'
import 'primeicons/primeicons.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import primeVue from 'primevue/config'
import toastService from 'primevue/toastservice'
import 'tailwindcss/tailwind.css'

import App from './App.vue'
import router from './router'

// Generate CSS based on custom configuration
const generateStyles = (config) => {
  let styles = ':root {';
  Object.entries(config).forEach(([category, properties]) => {
    Object.entries(properties).forEach(([className, value]) => {
      // Check if the value is an object to avoid applying as CSS variable
      if (typeof value !== 'object') {
        styles += `--${className}: ${value};`;
      }
    });
  });
  styles += '}';
  return styles;
};

const CUSTOMSTYLES = generateStyles(customTheme);

const STOREDTHEMECSS = localStorage.getItem('themeCSS');
if (STOREDTHEMECSS) {
  // Parse STOREDTHEMECSS back into an object
  const parsedThemeCSS = JSON.parse(STOREDTHEMECSS);

  // Generate CSS styles from parsedThemeCSS object
  let parsedCUSTOMSTYLES = ':root {';
  Object.entries(parsedThemeCSS).forEach(([category, properties]) => {
    Object.entries(properties).forEach(([className, value]) => {
      // Check if the value is an object to avoid applying as CSS variable
      if (typeof value !== 'object') {
        parsedCUSTOMSTYLES += `--${className}: ${value};`; // Add -- before property name
      }
    });
  });
  parsedCUSTOMSTYLES += '}';

  // Set the content of the styleElement to the parsed custom styles
  const styleElement = document.createElement('style');
  styleElement.textContent = parsedCUSTOMSTYLES;
  document.head.appendChild(styleElement);
}
else {
  const styleElement = document.createElement('style');
  styleElement.textContent = CUSTOMSTYLES;
  document.head.appendChild(styleElement);
}




// const nonce = 'nonce_value';
// const styleElement = document.createElement('style');
// styleElement.setAttribute('nonce', nonce);
// styleElement.textContent = CUSTOMSTYLES;
// document.head.appendChild(styleElement);

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(vueLazyLoad)
app.use(primeVue)
app.use(toastService)
app.mount('#app')
