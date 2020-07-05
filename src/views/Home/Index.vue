<template>
  <div class="container mt-2">
        <div class="row"><h3 class="text-dark m-0 p-0">BUSQUEDA DE DATOS ANUALES</h3></div>
    <nav class="row navbar navbar-expand-lg navbar-light bg-light">
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <calendar rango="DESDE" />
          </li>
          <li class="nav-item ml-5">
            <calendar rango="HASTA" />
          </li>
          <li class="nav-item dropdown ml-5">
            <DDCategoria />
          </li>
          <li class="nav-item ml-5">
            <DDMaquinaria />
          </li>
        </ul>
        <form class="form-inline my-2 my-lg-0">
          <button type="button" class="btn btnBuscar">Buscar</button>
        </form>
      </div>
    </nav>

    <TxTotales class="mt-5" />
    <TxShareOfSegment />
  </div>
</template>

<script>
import Calendar from "./Calendar";

import DDMaquinaria from "./DDMaquinaria";
import DDCategoria from "./DDCategoria";
import TxTotales from "../Tables/Hidrogruas/TxTotales";
import TxShareOfSegment from "../Tables/Hidrogruas/TxShareOfSegment";

export default {
  name: "Home",
  components: {
    Calendar,
    DDMaquinaria,
    DDCategoria,
    TxTotales,
    TxShareOfSegment
  }
};
</script>

<style lang="stylus">
  .containerFiltro {
    background-color: red;
  }
  .filtro {
    background : yellowgreen;
    height : inherit;
    margin-bottom : 10px

  }
  .btnBuscar {
    background : #eb3e05;
    height: auto;
  }
    .navbar{
      font-size 0.75rem;
      height : 40px;
      box-sizing: border-box;
    }
  li {
    background :yellowgreen;
    height : inherit;
    justify-self : center;
  }

</style>

