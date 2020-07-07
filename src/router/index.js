import Vue from "vue";
import VueRouter from "vue-router";
import ResultFiltro from "../views/Filtro/ResultFiltro.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/filtro",
    name: "Filtro",
    component: ResultFiltro
  }
];

const router = new VueRouter({
  routes
});

export default router;
