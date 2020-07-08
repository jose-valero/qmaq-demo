import Vue from "vue";
import VueRouter from "vue-router";
import ResultFiltro from "../views/Filtro/ResultFiltro.vue";
import Home from "../views/Home/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/filtro",
    name: "Filtro",
    component: ResultFiltro
  },
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  
];

const router = new VueRouter({
  routes
});

export default router;
