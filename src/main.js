// src/main.js
import Vue from 'vue';
import App from './App.vue';
import store from './store';
import vuetify from './plugins/vuetify'
import router from './router'
import { createProvider } from './vue-apollo'

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  router,
  apolloProvider: createProvider(),
  render: h => h(App)
}).$mount('#app');
