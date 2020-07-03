<template>
  <div class="container my-3">
    <h3 class="text-danger">Filtro:</h3>
    <div class="row">
      <div class="col-6 bg-warning">
        <calendar rango="Desde: " />
        <DDMaquinaria />
      </div>
      <div class="col-6 bg-warning">
        <calendar rango="Hasta: " />
        <DDCategoria />
      </div>
      <TxTotales class="mt-3" />
      
      <TxShareOfSegment />
    </div>
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
