import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import { router } from './router'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const toastOptions = {
  timeout: 4000,
  position: 'top-right',
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  draggablePercent: 0.6,
  showCloseButtonOnHover: false,
  hideProgressBar: false,
  closeButton: 'button',
  icon: true,
  rtl: false
}

createApp(App).use(router).use(Toast, toastOptions).mount('#app')
