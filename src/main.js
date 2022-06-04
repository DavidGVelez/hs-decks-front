import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/tailwind.css'
import { worker } from './mocks/browser'
import 'vue-loading-overlay/dist/vue-loading.css'
Vue.config.productionTip = false

if (process.env.VUE_APP_NODE_ENV === 'development') {
  worker.start()
}

new Vue({
  router,
  store,
  render: (h) => h(App)
}).$mount('#app')
