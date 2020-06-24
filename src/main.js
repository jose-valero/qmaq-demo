import Vue from "vue";

// BootstrapVue
import "./plugins/bootstrapVue";

// Vue Font-Awesome
import "./plugins/fontAwesome";

import App from "./App.vue";
import router from "./router";
import store from "./store";

// CSS global, no es necesario, pero lo creo en un supuesto de usar css globales.
import "./assets/css/main.styl";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
