import Vue from 'vue'
import App from './App.vue'
import createProvider from './vue-apollo.js'

Vue.config.productionTip = false

new Vue({
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app')
