import Vue from 'vue'
import App from './App'
import store from './vuex/store'
import router from './router/router'
import 'material-design-icons-iconfont'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')
