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

import Calendar from 'primevue/calendar';

Vue.config.productionTip = false;
Vue.component("calendar", Calendar);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
