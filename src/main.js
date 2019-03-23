import Vue from 'vue'
import App from './App.vue'
import store from './store.js'

import router from './router'

require('./main.scss');
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
