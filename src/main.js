import Vue from "vue";
import VueResource from 'vue-resource';

// BootstrapVue
import "./plugins/bootstrapVue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSS global, no es necesario, pero lo creo en un supuesto de usar css globales.
import "./assets/css/main.styl";

// prime framework
import "./plugins/primeVue.js"; //icons

Vue.config.productionTip = false;
Vue.use(VueResource);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
