<template>
  <div class="d-flex table-responsive">
    <table class="table" v-for="data in this.dataTotal" :key="data.key">
      <thead v-for="year in Object.keys(data)" :key="year" >
        <caption>{{year}}</caption>
        <tr>
          <th scope="col">Mercado Hidrogruas</th>
          <span v-for="datosMeses in Object.values(data)" :key="datosMeses.key">
            <th
              v-for="datosMeses2 in Object.keys(datosMeses)"
              :key="datosMeses2.key"
              scope="col"
            >{{datosMeses2}}</th>
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

export default {
  name: "Total",
  data() {
    return {
      dataTotal: null
    };
  },
  tablaTotalService: null,
  created() {
    this.tablaTotalService = new TableService();
  },
  mounted() {
    this.dataTotal = this.tablaTotalService.getDataMock().data;
  },
  methods: {}
};
</script>

<style scoped>
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
