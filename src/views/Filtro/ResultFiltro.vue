<template>
  <div class="container bg-light">
        <div class="row"><h5 class="text-dark m-0 p-0 mt-3">BUSQUEDA DE DATOS ANUALES</h5></div>
    <nav class="row navbarFiltro navbar-expand mt-3">
        <ul class="navbar-nav">
          <li class="nav-item ml-0">
            <calendar rango="DESDE" />
          </li>
          <li class="nav-item mr-1">
            <calendar rango="HASTA" />
          </li>
          <li class="nav-item ml-5">
            <DDCategoria />
          </li>
          <li class="nav-item ml-5">
            <DDMaquinaria />
          </li>
        </ul>
        <form class="form-inline my-lg-0">
          <button v-on:click="dataFinal"  type="button" class="btn btnBuscar ml-5">BUSCAR</button>
        </form>
    </nav>

    <ResultTables class="mt-4" />
  </div>
</template>

<script>
import Calendar from "./Calendar";

import DDMaquinaria from "./DDMaquinaria";
import DDCategoria from "./DDCategoria";
import ResultTables from "../Tables/ResultTables";

export default {
  name: "ResultFiltro",
  components: {
    Calendar,
    DDMaquinaria,
    DDCategoria,
    ResultTables
  },
    methods: {
        dataFinal() {
            console.log(DDMaquinaria)
        }
    }
};
</script>

<style lang="stylus">
  .btnBuscar {
    background-image: linear-gradient(to left bottom, #b5a605, #c59200, #d47a00, #e25b00, #ee2d04);
    font-size: 0.9rem;
    padding : 10px
    line-height : 3px;
    border : none
    font-weight: bold;
    vertical-align : center
    height : 18px
    margin-bottom : 1px;
  }
    .navbarFiltro{
      font-weight: bold;
      margin-top : 3%;
      font-size 0.75rem;
      box-sizing: border-box;
      padding :0
    }
  ul li {
   margin-left : 80px;

    vertical-align :top;
  }

</style>

