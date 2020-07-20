import Vue from "vue";
// import Axios from "axios"

// BootstrapVue
import "./plugins/bootstrapVue";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSS global, no es necesario, pero lo creo en un supuesto de usar css globales.
import "./assets/css/main.styl";

// prime framework
import "./plugins/primeVue.js";

Vue.config.productionTip = false;
// Vue.use("Axeio", Axios)

new Vue({
  router,
  store,
  // Axios,

  render: h => h(App)
}).$mount("#app");
