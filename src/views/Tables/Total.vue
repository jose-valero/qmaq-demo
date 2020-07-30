<template>
  <div class="d-flex table-responsive">
    <table class="table table-bordered" v-for="data in this.dataTotal" :key="data.key">
      <thead class="thead-light">
        <th
          v-for="years in Object.keys(data)"
          :key="years.key"
          colspan="15"
          class="bg-dark text-white text-center"
        >{{years}}</th>
        <tr>
          <th scope="col" class="bg-warning p-col-3">{{tipoCategoria}}</th>
          <span v-for="datosMeses in Object.values(data)" :key="datosMeses.key">
            <th v-for="meses in Object.keys(datosMeses)" :key="meses.key" scope="col">{{meses}}</th>
          </span>
        </tr>
      </thead>

      <tbody>
        <tr>
          <th scope="row">Volúmen (uds)</th>
          <span v-for="datosMeses in Object.values(data)" :key="datosMeses.key">
            <td
              v-for="datosMeses2 in Object.values(datosMeses)"
              :key="datosMeses2.key"
            >{{datosMeses2.cantidad_declarada}}</td>
          </span>
        </tr>
        <tr>
          <th scope="row">Factura FOB (u$s 000)</th>
          <span v-for="datosMeses in Object.values(data)" :key="datosMeses.key">
            <td
              v-for="datosMeses2 in Object.values(datosMeses)"
              :key="datosMeses2.key"
            >{{datosMeses2.fob}}</td>
          </span>
        </tr>
        <tr>
          <th scope="row">Factura CIF (u$s 000)</th>
          <span v-for="datosMeses in Object.values(data)" :key="datosMeses.key">
            <td
              v-for="datosMeses2 in Object.values(datosMeses)"
              :key="datosMeses2.key"
            >{{datosMeses2.cif}}</td>
          </span>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import TableService from "../../service/TableService";
import { eventBus } from "../../eventBus/EventBus";

export default {
  name: "Total",
  data() {
    return {
      dataTotal: null,
      tablaTotalService: null,
      tipoCategoria: ""
    };
  },
  created() {
    this.tablaTotalService = new TableService();
    eventBus.$on("eventDatatotal", this.getDataTotal);
    eventBus.$on("eventCategoria", this.getCategoriaMaquinaria);
  },
  methods: {
    getDataTotal(data) {
      this.dataTotal = data;
    },
    getCategoriaMaquinaria(categoria) {
      this.tipoCategoria = categoria;
    }
  }
};
</script>

<style scoped>
.table thead th {
  border-bottom: none;
}

.table-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.product-image {
  width: 100px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
</style>
