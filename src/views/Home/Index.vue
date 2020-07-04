<template>
  <div class="container my-2">
    <h3 class="text-primary">Busqueda</h3>
    <div class="containerFiltro row my-2 bg-warning d-flex justify-content-center">
      <div class="col-6">
        <calendar rango="Desde: " />
        <DDCategoria />
      </div>
      <div class="col-6">
        <calendar rango="Hasta: " />
        <DDMaquinaria />
      </div>
      <div class="submit">
        <div class="row mx-3 py-3">
          <Button label="Buscar" class="p-button-raised p-button-secondary" />
        </div>
      </div>
    </div>
    <TxTotales class="mt-3" />
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

</style>

