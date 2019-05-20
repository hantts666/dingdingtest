import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import NutUI from '@nutui/nutui';
import '@nutui/nutui/dist/nutui.css';
import Vuex from 'vuex'

Vue.use(Vuex)
NutUI.install(Vue);
console.log('router',router)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  render: h => h(App),
})