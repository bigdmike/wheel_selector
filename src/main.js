import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import DataValid from "./common/data_valid"

Vue.config.productionTip = false
Vue.mixin(DataValid)

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')